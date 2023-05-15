import { makeObservable, observable, computed, action } from "mobx";

export class State {
	value: any = 1;

	constructor() {
		makeObservable(this, {
			value: observable,
			method: action,
			square: computed,
		});
		(globalThis as any).state = this;
	}

	method() {
		this.value++;
	}

	get square() {
		return this.value ** 2;
	}
}
