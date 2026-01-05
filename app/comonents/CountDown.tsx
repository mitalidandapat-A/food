"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
});

const CountDown = () => {
  const endingDate = useMemo(
    () => new Date("2026-07-26").getTime(),
    []
  );

  return (
    <div>
      <Countdown
        className="font-bold text-yellow-500 text-5xl"
        date={endingDate}
      />
    </div>
  );
};

export default CountDown;
