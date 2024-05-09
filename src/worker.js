export function multiplyNumbers(a, b) {
  postMessage({ type: 'result', result: a * b })
}
