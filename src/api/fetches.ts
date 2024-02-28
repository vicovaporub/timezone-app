import { TimezoneClass } from "@/shared/TimezoneClass";

export const brTimezone = async () => {
  const sp = "Sao_Paulo";
  try {
    const res = await fetch(
      `https://worldtimeapi.org/api/timezone/America/${sp}`
    );
    const data = await res.json();
    return new TimezoneClass(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export const timezones = async () => {
  try {
    const res = await fetch("https://worldtimeapi.org/api/timezone");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export const fetchTimezone = async (timezone: string) => {
  try {
    const res = await fetch(
      `https://worldtimeapi.org/api/timezone/${timezone}`
    );
    const data = await res.json();
    return new TimezoneClass(data);
  } catch (err) {
    console.log(`Error: ${err}`);
    throw err;
  }
};
