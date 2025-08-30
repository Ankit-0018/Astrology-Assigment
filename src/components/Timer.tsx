"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Timer() {
  const targetDate = new Date("2025-09-24T00:00:00"); // set your deadline here
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

  function getTimeLeft(): TimeLeft {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    return {
      days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((distance / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { label: "Days", value: timeLeft.days },
    { label: "Hour", value: timeLeft.hours },
    { label: "Minute", value: timeLeft.minutes },
    { label: "Second", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      {boxes.map((box) => (
        <div
          key={box.label}
          className="bg-background rounded-xl shadow-md px-6 py-4 text-center"
        >
          <div className="text-3xl font-bold text-blue-600">
            {String(box.value).padStart(2, "0")}
          </div>
          <div className="text-sm text-muted">{box.label}</div>
        </div>
      ))}
    </div>
  );
}
