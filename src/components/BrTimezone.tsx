import React, { useEffect, useState } from "react";
import { brTimezone } from "@/api/fetches";

export const BrTimezone = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [timezoneName, setTimezoneName] = useState("");

  useEffect(() => {
    const updateTime = async () => {
      const spTime = await brTimezone();
      if (spTime) {
        setTime(new Date(spTime.datetime));
        setTimezoneName(spTime.timezone);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!time) {
    return null;
  }

  const formattedDate = time.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  const formattedTime = time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
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
