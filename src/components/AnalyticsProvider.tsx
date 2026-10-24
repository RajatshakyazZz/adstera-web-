"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { extractUtmParams, storeUtmParams, trackEvent } from "@/lib/tracking";
import { siteConfig } from "@/config/siteConfig";

function TrackingListener() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // 1. Extract and store UTM parameters
    const utms = extractUtmParams(searchParams);
    if (Object.keys(utms).length > 0) {
      storeUtmParams(utms);
    }

    // 2. Track initial landing page view
    trackEvent(siteConfig.tracking.events.landingPageView, {
      path: window.location.pathname,
      referrer: document.referrer || "direct",
      device: window.innerWidth < 768 ? "mobile" : "desktop",
    });
  }, [searchParams]);

  return null;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <TrackingListener />
      </Suspense>
      {children}
    </>
  );
}
