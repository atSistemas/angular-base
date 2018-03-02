export interface IAction {
  type: string
  payload?: { [key: string]: any }
  request?: any
}
