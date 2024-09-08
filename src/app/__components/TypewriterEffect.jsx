"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome to Rasel Scam-Valy E-commerce.",
      className: "text-blue-500 dark:text-red-300",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        30% Special Discount on Computer GPU +
        Smartphone Flash Sell.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
