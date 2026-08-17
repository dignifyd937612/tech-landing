"use client";

import { useEffect, useState } from "react";

const code = `const axios = require('axios')
class DignifydService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      timeout: 15000,
      headers: {'User-Agent': 'DignifydBot/1.0'}
    });
  }
  async fetchAIInsights() {
    try {
      const response = await this.client.get('/services/ai-testing');
      return this.transformInsights(response.data);
    } catch (error) {
      console.error('[Dignifyd] Failed to fetch AI insights:', error.message);
      return [];
    }
}`;

export default function CodeAnimation() {
  const [visibleCode, setVisibleCode] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingTimer;
    let restartTimer;

    const typeCode = () => {
      typingTimer = setInterval(() => {
        index += 1;

        setVisibleCode(code.slice(0, index));

        if (index >= code.length) {
          clearInterval(typingTimer);
          setIsFinished(true);

          restartTimer = setTimeout(() => {
            setVisibleCode("");
            setIsFinished(false);
            index = 0;

            typeCode();
          }, 1800);
        }
      }, 18);
    };

    typeCode();

    return () => {
      clearInterval(typingTimer);
      clearTimeout(restartTimer);
    };
  }, []);

  const lines = visibleCode.split("\n");

  return (
    <div className="group relative h-[280px] w-full overflow-hidden rounded-[4px] border border-[#1d3045] bg-[#030914] shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:h-[330px] lg:h-[365px]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#009EFF]/10 blur-[70px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#009EFF 1px, transparent 1px), linear-gradient(90deg, #009EFF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative flex h-[42px] items-center border-b border-white/[0.08] bg-[#071321] px-4">
        <div className="flex items-center gap-[7px]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-[10px] font-medium tracking-wide text-white/45">
            ai-service.js
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-[#009EFF]" />
          <span className="text-[9px] text-white/35">AI ENGINE</span>
        </div>
      </div>

      <div className="relative flex h-[calc(100%-42px)] overflow-hidden">
        <div className="hidden w-[42px] shrink-0 select-none border-r border-white/[0.05] bg-[#050d18] py-4 text-right font-mono text-[9px] leading-[1.55] text-white/20 sm:block sm:text-[10px]">
          {lines.map((_, index) => (
            <div key={index} className="pr-3">
              {index + 1}
            </div>
          ))}
        </div>

        <pre className="relative flex-1 overflow-hidden px-4 py-4 font-mono text-[9px] leading-[1.55] sm:px-5 sm:text-[10px] lg:text-[11px]">
          <code>
            {lines.map((line, index) => {
              const trimmed = line.trim();

              const isKeyword =
                trimmed.startsWith("const") ||
                trimmed.startsWith("class") ||
                trimmed.startsWith("async") ||
                trimmed.startsWith("try") ||
                trimmed.startsWith("catch") ||
                trimmed.startsWith("return");

              const isString = line.includes("'") || line.includes('"');

              return (
                <div key={index} className="min-h-[1.55em] whitespace-pre">
                  <span
                    className={
                      isKeyword
                        ? "text-[#009EFF]"
                        : isString
                          ? "text-[#8ed6ff]"
                          : "text-[#d8e1eb]"
                    }
                  >
                    {line}
                  </span>

                  {!isFinished && index === lines.length - 1 && (
                    <span className="ml-[2px] inline-block h-[12px] w-[2px] animate-pulse bg-[#009EFF] align-middle shadow-[0_0_8px_#009EFF]" />
                  )}
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#009EFF]/40 to-transparent" />
    </div>
  );
}
