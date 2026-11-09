"use client";
import { useEffect, useState } from "react";
export function useLocal<T>(key: string, init: T) {
  const [v, setV] = useState<T>(init);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { const s = localStorage.getItem(key); if (s) setV(JSON.parse(s) as T); } catch {}
    setReady(true);
  }, [key]);
  useEffect(() => {
    if (ready) try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key, v, ready]);
  return [v, setV, ready] as const;
}
