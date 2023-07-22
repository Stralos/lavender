export const debounce = <T extends unknown[]>(
    func: (...args: T) => void,
    delay: number
) => {
    let id: NodeJS.Timeout
    let ref: (() => void) | undefined = undefined

    const result = (...args: Parameters<typeof func>) => {
        result.cancel()
        ref = () => {
            result.cancel()
            ref = undefined
            func(...args)
        }
        id = setTimeout(ref, delay)
    }

    result.cancel = (): void => (id != null && clearTimeout(id)) || undefined
    result.flush = () => {
        result.cancel()
        ref?.()
    }
    return result
}
