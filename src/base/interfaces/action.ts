export interface Action {
  readonly type: string;
  readonly request?: any;
  readonly payload?: any;
}