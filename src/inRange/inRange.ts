type Options = Partial<{
    including: boolean
}>

export const inRange = (
    val: number,
    min: number,
    max: number,
    { including }: Options = { including: false }
) => {
    if (including) {
        return val >= min && val <= max
    }

    return val > min && val < max
}
