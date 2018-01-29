export function getActionPrefix(action: any): string {
  return action.substr(0, action.lastIndexOf('_'));
}

export const fakeResponse = (code, jsonMockResponse) => xhr => (
  xhr.respond(
    code,
    { 'Content-Type': 'application/json' },
    JSON.stringify(jsonMockResponse)
  )
);
