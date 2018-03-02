import { Map } from 'immutable'

export const generateMap = (data: any, Model: any): Map<any, any> => (
  data.reduce((acc: Map<any, any>, item: any, index: number) => (
    acc.set(item.id || index, new Model().mergeDeep(item))
  ), Map<any, any>())
)
