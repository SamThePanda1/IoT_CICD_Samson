import { describe, it, expect } from "vitest";
import { ledIsOn } from "../src/togglels";

describe("isLedOn", () => {
  it("returns true if light is on", () => {
    expect(ledIsOn(1)).toBe(true);
  });
  it("returns false if light is off", () => {
    expect(ledIsOn(0)).toBe(false);
  });
});
