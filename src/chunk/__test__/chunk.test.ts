import { chunk } from "../chunk";

describe("Chunk", () => {
  it("should chunk to size 1", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(chunk(arr, 1)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it("should chunk to size 2", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("should throw error if chunk size is not valid", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(() => chunk(arr, -1)).toThrow(
      "Chunk size has to be >=1. Provided size: -1"
    );
  });
});
