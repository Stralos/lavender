export const chunk = <T>(array: T[], size: number) => {
    if (size <= 0) {
        throw Error(`Chunk size has to be >=1. Provided size: ${size}`)
    }
    const result: T[][] = []
    let iterator: T[] = []

    array.forEach((val) => {
        iterator.push(val)

        if (iterator.length === size) {
            result.push(iterator)
            iterator = []
        }
    })

    if (iterator.length) {
        result.push(iterator)
    }

    return result
}
