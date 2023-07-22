export const clamp = (val: number, floor: number, ceil: number) => {
    return Math.min(Math.max(val, floor), ceil)
}
