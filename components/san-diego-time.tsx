"use client";

import { useEffect, useState } from "react";

function formatSanDiegoTime(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function SanDiegoTime() {
  const [time, setTime] = useState(() => formatSanDiegoTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatSanDiegoTime(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-muted-foreground">San Diego, California {time}</p>
  );
}
