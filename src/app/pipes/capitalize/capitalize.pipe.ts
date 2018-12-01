import { Pipe, PipeTransform } from '@angular/core';

/**
 * Reference:
 * http://codersvibe.com/create-capitalize-string-pipe-angular-2/
 */
@Pipe({
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
	public transform(value: string, words: boolean): string {
		if (value) {
			if (value.length < 4) return value.toUpperCase();
			else if (words) return value.replace(/\b\w/g, first => first.toLocaleUpperCase());
			else return value.charAt(0).toUpperCase() + value.slice(1);
		}
		return value;
	}
}