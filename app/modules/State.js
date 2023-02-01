export class State {

  static #state = {
    activeChampionship: {},
  }

  static hasActiveChampionship() {
    return Object.keys(this.#state.activeChampionship).length !== 0;
  }

  static getActiveChampionship() {
    return this.#state.activeChampionship;
  }

  static setActiveChampionship(type, name, players) {
    this.#state.activeChampionship = {
      type: type,
      name: name,
      players: players
    }
  }

  static removeActiveChampionship() {
    this.#state.activeChampionship = {};
  }
}