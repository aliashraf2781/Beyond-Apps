import { useEffect, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

export default function TimeCounter() {
  const [target, setTarget] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
  });

  useEffect(() => {
    const now = Date.now();
    /* eslint-disable */
    setTarget(new Date(now + 22 * 24 * 60 * 60 * 1000));
  }, []);

  const calc = (to: Date): TimeLeft => {
    const now = Date.now();
    const diff = Math.max(0, to.getTime() - now);
    const totalMs = diff;
    const secondsTotal = Math.floor(diff / 1000);
    const days = Math.floor(secondsTotal / (24 * 60 * 60));
    const hours = Math.floor((secondsTotal % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
    const seconds = Math.floor(secondsTotal % 60);
    return { days, hours, minutes, seconds, totalMs };
  };

  useEffect(() => {
    if (!target) return;

    const id = setInterval(() => {
      setTimeLeft(calc(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  const two = (n: number) => String(n).padStart(2, "0");

  if (!target) return null;

  return (
    <div>
      <div className="text-gray-400 flex items-center gap-2">
        <span>
          <GiSandsOfTime />
        </span>
        <div>launching starts in {timeLeft.days} days</div>
      </div>
      <div className="flex items-start justify-start gap-3 font-mono font-extrabold my-7">
        <div className="flex flex-col">
          <span className="text-5xl">{two(timeLeft.days)}</span>
          <span className="text-gray-300">Days</span>
        </div>
        <div className="text-gray-300 text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-5xl">{two(timeLeft.hours)}</span>
          <span className="text-gray-300">hours</span>
        </div>
        <div className="text-gray-300 text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-5xl">{two(timeLeft.minutes)}</span>
          <span className="text-gray-300">Minutes</span>
        </div>
        <div className="text-gray-300 text-5xl">:</div>
        <div className="flex flex-col">
          <span className="text-5xl">{two(timeLeft.seconds)}</span>
          <span className="text-gray-300">Seconds</span>
        </div>
      </div>
    </div>
  );
}
