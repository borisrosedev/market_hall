export function returnFileSize(number: number): {val: number, unit: 'b' | 'mb' | 'kb'} {
  if (number < 1e3) {
    console.log(`${number} bytes`);
    return {val: number, unit: 'b'};
  } else if (number >= 1e3 && number < 1e6) {
    const kbStringSize = (number / 1e3).toFixed(1)
    console.log(`${kbStringSize} KB`);
    const kbSize = number / 1e3
    return {val: kbSize, unit: 'kb'}
  }
  const mbStringSize = (number / 1e6).toFixed(1)
  console.log(`${mbStringSize} MB`);
  const mbSize = number / 1e6
  return {val: mbSize, unit: 'mb'}
}