"use client";

import React from "react";

interface AdsterraBannerProps {
  bannerKey: string;
  width: number;
  height: number;
  className?: string;
  label?: string;
}

export function AdsterraBanner({
  bannerKey,
  width,
  height,
  className = "",
  label = "Advertisement",
}: AdsterraBannerProps) {
  const iframeContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : '${bannerKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bauval.org/22/${bannerKey}"></script>
  </body>
</html>`;

  return (
    <div className={`flex flex-col items-center justify-center my-5 overflow-hidden ${className}`}>
      {label && (
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium mb-1.5 select-none">
          {label}
        </span>
      )}
      <div
        className="rounded-lg overflow-hidden border border-white/5 bg-slate-900/60 shadow-md flex items-center justify-center"
        style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px` }}
      >
        <iframe
          title={`Adsterra Ad ${width}x${height}`}
          srcDoc={iframeContent}
          width={width}
          height={height}
          style={{ border: "none", overflow: "hidden", display: "block" }}
          scrolling="no"
        />
      </div>
    </div>
  );
}
