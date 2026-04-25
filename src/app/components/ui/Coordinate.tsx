'use client';

import { useEffect, useState } from 'react';

export default function Coordinate() {
  const [coords, setCoords] = useState<{ lat: string; lng: string } | null>(
    null
  );

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const latStr = `${Math.abs(lat).toFixed(4)}°${lat >= 0 ? 'N' : 'S'}`;
        const lngStr = `${Math.abs(lng).toFixed(4)}°${lng >= 0 ? 'E' : 'W'}`;

        setCoords({ lat: latStr, lng: lngStr });
      },
      () => {
        setCoords({ lat: '6.9175°S', lng: '107.6191°E' });
      }
    );
  }, []);

  return (
    <span className="text-sm tracking-wide">
      {coords ? `${coords.lat} ${coords.lng}` : ''}
    </span>
  );
}
