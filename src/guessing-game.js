class GuessingGame {
  min
  max
  middle

  constructor() {}

  setRange(min, max) {
    this.start = min+1
    this.end = max-1
  }

  guess() {
    this.middle = Math.ceil((this.start + this.end) / 2)
    return this.middle
  }

  lower() {
    this.end = this.middle - 1
  }

  greater() {
    this.start = this.middle + 1
  }
}

module.exports = GuessingGame
