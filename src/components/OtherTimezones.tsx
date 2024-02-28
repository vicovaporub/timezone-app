import React, { useEffect, useState } from "react";
import { fetchTimezone } from "@/api/fetches";
import { SearchNewTimezone } from "./SearchNewTimezone";

export const OtherTimezones = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [timezoneName, setTimezoneName] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(
    "America/Los_Angeles"
  );

  useEffect(() => {
    const updateTime = async () => {
      const timezoneToDisplay = await fetchTimezone(
        selectedTimezone.toString()
      );
      if (timezoneToDisplay) {
        setDate(new Date(timezoneToDisplay.datetime));
        setTimezoneName(timezoneToDisplay.timezone);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  const handleTimezoneSelect = (timezone: string) => {
    setSelectedTimezone(timezone);
  };

  const formattedDate = date?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: selectedTimezone,
  });

  const formattedTime = date?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: selectedTimezone,
  });

  const cityName = () => {
    if (!timezoneName) {
      return "";
    }
    let formattedName = timezoneName;
    const slashIndex = timezoneName.indexOf("/");
    if (slashIndex !== -1) {
      formattedName = timezoneName.substring(slashIndex + 1);
    }
    formattedName = formattedName.replace("_", " ");
    return formattedName;
  };

  return (
    <div className="relative">
      <div
        className="sm:mt-10 mt-10 bg-gradient-to-b
       from-purple-400 via-pink-500 to-red-500
       text-white rounded-lg p-4 max-w-full  shadow-md"
      >
        <div className="sm:flex justify-center items-center">
          <div className="p-2 sm:w-[11rem] sm:max-w-[12rem] w-[13rem]">
            <h1 className="text-2xl font-bold mb-2 overflow-ellipsis whitespace-nowrap max-w-full overflow-hidden text-overflow-ellipsis">
              {cityName()}
            </h1>
            <p className="text-sm">{formattedDate}</p>
            <p className="text-sm">{formattedTime}</p>
          </div>
        </div>
      </div>
      <div className="absolute mt-4">
        <SearchNewTimezone onTimezoneSelect={handleTimezoneSelect} />
      </div>
    </div>
  );
};
