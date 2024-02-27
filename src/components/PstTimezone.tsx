import React, { useEffect, useState } from "react";
import { pstTimezone } from "@/api/fetches";

export const PstTimezone = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [timezoneName, setTimezoneName] = useState("");

  useEffect(() => {
    const updateTime = async () => {
      const laTime = await pstTimezone();
      if (laTime) {
        setTime(new Date(laTime.datetime));
        setTimezoneName(laTime.timezone);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!time) {
    return null;
  }

  const formattedDate = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Los_Angeles",
  });

  const cityName = () => {
    let formattedName = timezoneName;
    const slashIndex = timezoneName.indexOf("/");
    if (slashIndex !== -1) {
      formattedName = timezoneName.substring(slashIndex + 1);
    }
    formattedName = formattedName.replace("_", " ");
    return formattedName;
  };

  return (
    <div className="sm:mt-10 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white rounded-lg p-4 m-2 shadow-md">
      <div className="sm:flex justify-center items-center">
        <div className="p-2 sm:w-[11rem] sm:max-w-[12rem] w-[13rem]">
          <h1 className="text-2xl font-bold mb-2">{cityName()}</h1>
          <p className="text-sm">Date: {formattedDate}</p>
          <p className="text-sm">Time: {formattedTime}</p>
        </div>
      </div>
    </div>
  );
};
