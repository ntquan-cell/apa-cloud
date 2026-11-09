"use client";
import { useEffect, useState } from "react";
export default function SeniorToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const v = localStorage.getItem("apa-senior") === "1";
    setOn(v);
    document.documentElement.dataset.senior = v ? "1" : "0";
  }, []);
  const toggle = () => {
    const v = !on;
    setOn(v);
    localStorage.setItem("apa-senior", v ? "1" : "0");
    document.documentElement.dataset.senior = v ? "1" : "0";
  };
  return <button className="btn light" onClick={toggle} aria-pressed={on}>{on ? "Chữ thường" : "Chữ to"}</button>;
}
