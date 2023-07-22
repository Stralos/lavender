import { clamp } from "../clamp";

describe("Clamp", () => {
  it("should clamp top", () => {
    expect(clamp(10, 1, 5)).toBe(5);
  });
  it('should clamp min', () => {
    expect(clamp(-1, 1, 5)).toBe(1);
  })
  it('should return mid value', () => {
    expect(clamp(3, 1, 5)).toBe(3);
  })
});
