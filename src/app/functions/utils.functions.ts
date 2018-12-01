import { Observable } from 'rxjs';

/**
 * Pass an observable to promise.
 * @param observable (Observable) to pass to promise.
 * @returns (Promise<any>) observable value.
 */
export async function observable2promise(observable: Observable<any>): Promise<any> {
	return new Promise<any>((resolve: Function, reject: Function) =>
		observable.subscribe(value => resolve(value), err => reject(err)));
}

/**
 * Clone a JSON object and returns it clone.
 * @param input (JSON object) to clone.
 * @returns (JSON object) input cloned.
 */
export function clone(input: any): any {
	return JSON.parse(JSON.stringify(input));
}