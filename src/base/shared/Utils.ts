export function getActionPrefix(action: any): string {
  return action.substr(0, action.lastIndexOf('_'));
}