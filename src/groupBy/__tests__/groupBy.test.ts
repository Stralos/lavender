import { groupBy } from '../groupBy'

describe('GroupBy', () => {
    it('should group correctly with integers', () => {
        const collection = [1, 2, 3]
        const result = groupBy(collection, (v) => v)

        expect(result).toEqual(
            new Map([
                [1, [1]],
                [2, [2]],
                [3, [3]],
            ])
        )
    })
    it('should group correctly with boolean', () => {
        {
            const collection = [1, 2, 3, 4]
            const result = groupBy(collection, (v) => v % 2 === 0) // is even
            expect(result).toEqual(
                new Map([
                    [true, [2, 4]],
                    [false, [1, 3]],
                ])
            )
        }
    })
})
