import { deviceTypes } from "./constants";

export type DeviceType = typeof deviceTypes[number];
export type Breakpoints = Record<DeviceType, string>;

export const breakpoints: Breakpoints = {
  tablet: "640px",
  laptop: "1024px",
  desktop: "1280px",
  desktopXL: "1536px",
};
