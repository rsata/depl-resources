export function inc() {
  return {
    type: 'INC',
    payload: 1
  };
}

export function dec() {
  return {
    type: 'DEC',
    payload: 1
  };
}
