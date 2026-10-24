import { siteConfig } from "@/config/siteConfig";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  ad_id?: string;
  placement_id?: string;
}

const STORAGE_KEY = "creators_utm_attribution";

/**
 * Extracts UTM parameters from URL search params
 */
export function extractUtmParams(searchParams: URLSearchParams): UtmParams {
  const params: UtmParams = {};
  const keys: (keyof UtmParams)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "ad_id",
    "placement_id",
  ];

  for (const key of keys) {
    const val = searchParams.get(key);
    if (val) {
      params[key] = val;
    }
  }

  return params;
}

/**
 * Persists UTM parameters to sessionStorage to preserve across client navigation
 */
export function storeUtmParams(params: UtmParams): void {
  if (typeof window === "undefined") return;
  try {
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
  } catch (e) {
    console.warn("Could not save UTM params to session storage", e);
  }
}

/**
 * Retrieves persisted UTM parameters
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const item = sessionStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : {};
  } catch {
    return {};
  }
}

/**
 * Appends current or stored UTM parameters to a destination URL (such as checkout)
 */
export function buildCheckoutUrlWithUtm(rawUrl: string, overrides?: UtmParams): string {
  try {
    const url = new URL(rawUrl);
    const stored = getStoredUtmParams();
    const merged = { ...stored, ...overrides };

    Object.entries(merged).forEach(([key, value]) => {
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    // If not a valid absolute URL, return rawUrl
    return rawUrl;
  }
}

/**
 * Tracks custom landing page events
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean | undefined>
): void {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    ...properties,
    ...getStoredUtmParams(),
  };

  // 1. Dispatch custom DOM event for custom listeners / tag managers
  const customEvent = new CustomEvent("adstera_conversion_event", {
    detail: eventPayload,
  });
  window.dispatchEvent(customEvent);

  // 2. Integration with Google Analytics (gtag) if present
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      properties
    );
  }

  // 3. Integration with Plausible if present
  if (
    typeof (window as unknown as { plausible?: (event: string, opts?: object) => void })
      .plausible === "function"
  ) {
    (window as unknown as { plausible: (event: string, opts?: object) => void }).plausible(
      eventName,
      { props: properties }
    );
  }

  // 4. Debug output in development or when explicitly enabled
  if (process.env.NODE_ENV !== "production" || siteConfig.tracking.enabled) {
    console.info(`[Analytics Event: ${eventName}]`, eventPayload);
  }
}
