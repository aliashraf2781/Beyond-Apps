import { useEffect, useState } from 'react';

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

    const two = (n: number) => String(n).padStart(2, '0');

    if (!target) return null;

    return (
        <div>
            <div className='text-gray-400 '>launching starts in {timeLeft.days} days</div>
            <div className='flex items-center justify-start'>
                <div className='text-5xl font-mono'>{two(timeLeft.hours)}</div>
                <div className='text-5xl font-mono mx-2'>:</div>
                <div className='text-5xl font-mono'>{two(timeLeft.minutes)}</div>
                <div className='text-5xl font-mono mx-2'>:</div>
                <div className='text-5xl font-mono'>{two(timeLeft.seconds)}</div>
            </div>
        </div>
    );
}
