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
    <div className="fixed right-3 bottom-3 md:top-4 md:bottom-auto z-50 flex items-center gap-2">
      {/* Hidden container for Google widget (required) */}
      <div id="google_translate_element" className="hidden" />
      <button
        type="button"
        onClick={() => setLanguage(lang === "es" ? "en" : "es")}
        className="rounded border border-gray-300 bg-white px-3 py-2 text-sm md:text-xs text-gray-800 shadow-sm hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle language between English and Spanish"
      >
        {/* {lang === "es" ? "English" : "Español"} */}
        <p className="text-xs">for my mom</p>
      </button>
      <style jsx global>{`
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
      `}</style>
    </div>
  );
}
