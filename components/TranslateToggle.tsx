"use client";

import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function TranslateToggle() {
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en"
  );

  useEffect(() => {
    // Inject Google Translate script once
    if (typeof window === "undefined") return;
    if (document.getElementById("google-translate-script")) {
      setLoaded(true);
      return;
    }

    window.googleTranslateElementInit = function () {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es" },
        "google_translate_element"
      );
      setLoaded(true);
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const setLanguage = useCallback((targetLang: "en" | "es") => {
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!combo) return;
    combo.value = targetLang;
    combo.dispatchEvent(new Event("change"));
    setLang(targetLang);
    localStorage.setItem("lang", targetLang);
  }, []);

  useEffect(() => {
    // apply saved language after widget loads
    if (!loaded) return;
    const saved = (localStorage.getItem("lang") as "en" | "es") || "en";
    setTimeout(() => setLanguage(saved), 0);
  }, [loaded, setLanguage]);

  return (
    <div className="fixed right-1 bottom-1 md:top-3 md:bottom-auto z-50 flex items-center gap-2">
      {/* Hidden container for Google widget (required) */}
      <div id="google_translate_element" className="hidden" />

      <button
        type="button"
        onClick={() => setLanguage(lang === "es" ? "en" : "es")}
        className="rounded-full border border-gray-300 bg-white px-3 py-2 text-xs text-gray-800 shadow-md opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-200"
        aria-label="Toggle language between English and Spanish"
      >
        for mom
      </button>

      <style jsx global>{`
        /* Hide the Google Translate banner */
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }

        /* Hide the "Powered by Google" and tooltip popups */
        .goog-logo-link,
        .goog-te-gadget span,
        .goog-te-balloon-frame,
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        /* Prevent layout shift */
        .goog-te-gadget {
          height: 0 !important;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
