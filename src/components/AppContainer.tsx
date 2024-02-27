"use client";
import { BrTimezone } from "./BrTimezone";
import { PstTimezone } from "./PstTimezone";

export const AppContainer = () => {
  return (
    <div className="app-container">
      <BrTimezone />
      <PstTimezone />
    </div>
  );
};
