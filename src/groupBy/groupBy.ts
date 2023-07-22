export const groupBy = <T, K>(collection: T[], selector: (val: T) => K) => {
    return collection.reduce((acc, val) => {
        const key = selector(val)
        const group = acc.get(key) ?? []
        group.push(val)
        acc.set(key, group)
        return acc
    }, new Map<K, T[]>())
}
