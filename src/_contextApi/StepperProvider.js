// src/_contextApi/StepperContext.js
"use client";
import React, { createContext, useState, useEffect } from "react";

export const StepperContext = createContext();

export const StepperProvider = ({ children, slug }) => {
  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`stepper-${slug}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        const now = Date.now();
        if (now - parsed.timestamp < 60 * 1000) {
          return parsed.step;
        }
      }
    }
    return 1;
  });

  useEffect(() => {
    localStorage.setItem(
      `stepper-${slug}`,
      JSON.stringify({ step, timestamp: Date.now() })
    );
  }, [step, slug]);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => Math.max(1, prev - 1));

  return (
    <StepperContext.Provider value={{ step, goNext, goBack, setStep }}>
      {children}
    </StepperContext.Provider>
  );
};
