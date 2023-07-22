import { uniqBy } from "../uniqBy";

describe("uniqBy", () => {
  it("return unique list with number", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    expect(uniqBy(arr, (val) => val)).toIncludeSameMembers([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  it("return unique list with objects", () => {
    const arr = [{ name: "Peter" }, { name: "James " }];

    expect(uniqBy(arr, (val) => val.name)).toIncludeSameMembers(arr);
  });

  it("filters repeating objects with same prop", () => {
    const arr = [{ name: "Peter" }, { name: "James " }, { name: "Peter" }];

    const result = uniqBy(arr, (val) => val.name);
    expect(result).toIncludeSameMembers([arr[0], arr[1]]);
    expect(result).toBeArrayOfSize(2);
  });
});
