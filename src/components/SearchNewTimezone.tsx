import { fetchTimezone, timezones } from "@/api/fetches";
import { useEffect, useState } from "react";

export const SearchNewTimezone = ({
  onTimezoneSelect,
}: {
  onTimezoneSelect: (timezone: string) => void;
}) => {
  const [data, setData] = useState<string[]>([]);
  const [selectedTimezone, setSelectedTimezone] = useState<string>("");

  useEffect(() => {
    const fetchTimezones = async () => {
      const newData = await timezones();
      setData(newData);
    };
    fetchTimezones();
  }, []);

  const handleTimezoneChange = async (e: any) => {
    const newTimezone = e.target.value;
    setSelectedTimezone(newTimezone);
    onTimezoneSelect(newTimezone);
  };

  return (
    <div>
      <select
        className="p-1 rounded-lg border-2 sm:w-[13rem] w-[15rem] border-purple-400
        focus:border-2 focus:border-purple-600 focus:outline-none
        focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50
        transition duration-300 ease-in-out"
        name="timezone"
        id="timezone"
        value={selectedTimezone}
        onChange={handleTimezoneChange}
      >
        <option value="" disabled>
          Select a timezone
        </option>
        {data.map((timezone: string) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};
