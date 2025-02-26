export class RandomNumberGenerator {
	readonly #randomNumber: number;

	constructor() {
		this.#randomNumber = Math.random();
	}

	get randomNumber() {
		return this.#randomNumber;
	}
}
