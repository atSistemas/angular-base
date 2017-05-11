export function getActionPrefix(action): string {
  return action.substr(0, action.lastIndexOf('_'));
}