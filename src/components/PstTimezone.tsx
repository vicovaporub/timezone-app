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
    <div className="timezone justify-center">
      <div className="flex justify-center">{cityName()}</div>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
    </div>
  );
};
