export const uniqBy = <T, K>(arr: T[], comparator: (val: T) => K) => {
  const set = new Set<K>();

  return arr.filter((val) => {
    const c = comparator(val);
    if (set.has(c)) {
      return false;
    }
    set.add(c);
    return true;
  });
};
