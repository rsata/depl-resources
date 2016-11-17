export function increment() {
  return {
    type: 'INC',
    payload: 1
  };
}

export function decrement() {
  return {
    type: 'DEC',
    payload: 1
  };
}
