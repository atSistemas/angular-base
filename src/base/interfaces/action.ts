export interface Action {
  readonly type: string;
  readonly types?: string[];
  readonly payload?: any;
  readonly request?: any;
}
