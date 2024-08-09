'use client'

import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const eventDate = new Date("2024-12-31T00:00:00Z"); 
      const currentTime = new Date();
      const difference = eventDate.getTime() - currentTime.getTime();

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 relative">
      <div className="z-10 text-center">
        <div className="bg-gray-800 dark:bg-cyan-600 rounded-full px-4 py-2 mb-4 inline-block">
          <span className="text-base font-normal text-gray-200 dark:text-gray-50">Friendly Reminder</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-blac dark:text-white">
          Countdown Until The 2024 Ends
        </h1>
      </div>
      <div className="relative z-[-1] flex flex-col items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex justify-center space-x-6 text-center mb-8">
          <div>
            <span className="text-4xl md:text-6xl font-sans font-medium text-gray-950 dark:text-white">{timeLeft.days || "0"}</span>
            <div className="text-sm md:text-lg font-sans font-medium text-gray-950 dark:text-white">DAYS</div>
          </div>
          <div>
            <span className="text-4xl md:text-6xl font-sans font-medium text-gray-950 dark:text-white">{timeLeft.hours || "0"}</span>
            <div className="text-sm md:text-lg font-sans font-medium text-gray-950 dark:text-white">HOURS</div>
          </div>
          <div>
            <span className="text-4xl md:text-6xl font-medium text-gray-950 dark:text-white">{timeLeft.minutes || "0"}</span>
            <div className="text-sm md:text-lg font-medium text-gray-950 dark:text-white">MINUTES</div>
          </div>
          <div>
            <span className="text-4xl md:text-6xl font-medium text-gray-950 dark:text-white">{timeLeft.seconds || "0"}</span>
            <div className="text-sm md:text-lg font-medium text-gray-950 dark:text-white">SECONDS</div>
          </div>
        </div>
        <p className="text-sm md:text-lg text-gray-950 dark:text-white font-medium mb-8">
          🕒 LEFT UNTIL THE 2024 ENDS
        </p>
      </div>
    </main>
  );
}
