export function getRandomInteger(minIncluded: number, maxIncluded: number): number {
  return Math.floor(Math.random() * (maxIncluded - minIncluded + 1)) + minIncluded
}
