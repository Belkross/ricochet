export function getPebbleInventory(wordSpot: number[]): number[] {
  const inventory = Array(12).fill(2)

  for (const spot of wordSpot) {
    if (spot) --inventory[spot-1]
  }

  if (!checkOuputValidity(inventory)) console.error("output not valid")
  return inventory
}

function checkOuputValidity(pebbleInventory: number[]): boolean {
  let validity = true

  for (const pebble of pebbleInventory) {
    if (pebble < 0 || pebble > 2) validity = false
  }

  return validity
}
