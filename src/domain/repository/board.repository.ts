import { MAX_WORD_ID } from "../constant"

interface BoardRepository {
  setSelectedGrid: (gridId: number) => void
  getSelectedGrid: () => number
  setWordSpots: (spots: Array<number>) => void
  getWordSpots: () => Array<number>
  getResettedWordSpots: () => Array<number>
}

class LocalStorageBoardRepository implements BoardRepository {
  private readonly GRID_ID_KEY = "grid_id_key"
  private readonly WORD_SPOTS_KEY = "wordSpots"
  private readonly GRID_ID_FALLBACK = 1
  private readonly MAX_WORD_ID: number

  constructor(maxWordId: number) {
    this.MAX_WORD_ID = maxWordId
  }

  setSelectedGrid(gridId: number): void {
    localStorage.setItem(this.GRID_ID_KEY, String(gridId))
  }

  getSelectedGrid(): number {
    const currentGrid = localStorage.getItem(this.GRID_ID_KEY) ?? ""
    const validCurrentGrid = /^\d{1,2}$/.test(currentGrid)

    if (!validCurrentGrid) {
      this.setSelectedGrid(this.GRID_ID_FALLBACK)
      return this.GRID_ID_FALLBACK
    }

    return Number(currentGrid)
  }

  getResettedWordSpots(): Array<number> {
    return new Array(this.MAX_WORD_ID).fill(NaN)
  }

  setWordSpots(spots: number[]): void {
    localStorage.setItem(this.WORD_SPOTS_KEY, spots.toString())
  }

  getWordSpots(): number[] {
    const wordSpots = localStorage.getItem(this.WORD_SPOTS_KEY)

    if (wordSpots === null) {
      this.setWordSpots(this.getResettedWordSpots())
      return this.getResettedWordSpots()
    }

    const validWordSpots = /^((NaN|\d{1,2}),){24}(NaN|\d{1,2})$/.test(wordSpots)

    if (!validWordSpots) {
      this.setWordSpots(this.getResettedWordSpots())
      return this.getResettedWordSpots()
    }

    return wordSpots.split(",").map((pebbleString) => Number(pebbleString))
  }
}

export const boardRepository = new LocalStorageBoardRepository(MAX_WORD_ID)
