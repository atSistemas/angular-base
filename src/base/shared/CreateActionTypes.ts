export function createActionTypes<T extends string> (types: T[]): {[K in T]: K} {
  return types.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
}
