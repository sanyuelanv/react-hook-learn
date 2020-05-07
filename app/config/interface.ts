export enum FILTERTYPE {
  all,
  active,
  completed
}
export interface TodoItem {
  content: string;
  type: FILTERTYPE;
  ts: string;
}