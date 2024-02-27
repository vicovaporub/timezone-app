"use client";
import { BrTimezone } from "./BrTimezone";
import { Header } from "./Header";
import { PstTimezone } from "./PstTimezone";

export const AppContainer = () => {
  return (
    <div className="flex justify-center m-[10rem] gap-20">
      <Header />
      <div className="sm:flex sm:gap-20 items-center text-center">
        <BrTimezone />
        <PstTimezone />
      </div>
    </div>
  );
};
