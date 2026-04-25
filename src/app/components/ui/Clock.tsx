'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      setTime(`${h}:${m}`);
    };

    tick();
    const interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="border border-black px-3 py-2 rounded-[50%_/_50%]">
      <span className="text-3xl font-sans text-black">{time}</span>
    </div>
  );
}
