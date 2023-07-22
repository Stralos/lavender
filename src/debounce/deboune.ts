export const debounce = <T, K>(callback: (...args: T[]) => K, delay: number) => {


  const result = (...args: T[]) => {
    
    
    callback(...args)
  }


  return callback
}



const a = debounce((a: number) => a, 100 )
a()

