import { debounce } from '../debounce'

describe('Debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    it('should trigger function after a 2s delay', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)
        fn()

        expect(callback).not.toHaveBeenCalled()

        jest.advanceTimersByTime(delay)

        expect(callback).toHaveBeenCalled()
    })

    it('should debounce multiple calls', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)
        fn()
        fn()
        fn()
        fn()

        expect(callback).not.toHaveBeenCalled()

        jest.advanceTimersByTime(delay)

        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should not trigger fn if cancel is used', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)
        fn()
        fn.cancel()
        jest.advanceTimersByTime(delay)

        expect(callback).toHaveBeenCalledTimes(0)
    })

    it('should call the callback with correct values', () => {
        const delay = 2000
        const callback = jest.fn((name: string, lastName: string) => ({
            name,
            lastName,
        }))
        const fn = debounce(callback, delay)

        fn('James', 'Potter')

        jest.advanceTimersByTime(delay)

        expect(callback).toHaveBeenCalledWith('James', 'Potter')
    })

    it('should call the callback with correct values after multiple debounces', () => {
        const delay = 2000
        const callback = jest.fn((name: string, lastName: string) => ({
            name,
            lastName,
        }))
        const fn = debounce(callback, delay)

        fn('James', 'Potter')
        fn('Jimmy', 'Smith')

        jest.advanceTimersByTime(delay)

        expect(callback).toHaveBeenCalledWith('Jimmy', 'Smith')
    })

    it('should call the callback if flush is called', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)

        fn()

        fn.flush()

        expect(callback).toHaveBeenCalled()
    })

    it('should not call callback on flush if it was not called', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)

        fn.flush()

        expect(callback).not.toHaveBeenCalled()
    })

    it('should not call callback on flush if timmer has passed', () => {
        const delay = 2000
        const callback = jest.fn()
        const fn = debounce(callback, delay)

        fn()
        jest.advanceTimersByTime(delay)
        fn.flush()

        expect(callback).toHaveBeenCalledTimes(1)
    })
})
