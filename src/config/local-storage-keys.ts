//to set up a localStorage key, just add the name of the key in the storageKeys array
//the localStorage key will have its own name as value

const storageKeys = ["themeMode", "gridId"] as const

export const localStorageKeys = buildStorageKeys(storageKeys)

function buildStorageKeys(keys: typeof storageKeys): Record<typeof storageKeys[number], string> {
  const entries = keys.map((key) => [key, key])
  return Object.fromEntries(entries)
}
