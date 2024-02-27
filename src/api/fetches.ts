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

export const pstTimezone = async () => {
  const la = "Los_Angeles";
  try {
    const res = await fetch(
      `https://worldtimeapi.org/api/timezone/America/${la}`
    );
    const data = await res.json();
    return new TimezoneClass(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
