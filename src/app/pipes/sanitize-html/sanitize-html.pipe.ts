import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Reference:
 * https://stackoverflow.com/questions/39681163/angular-2-sanitizing-html-stripped-some-content-with-div-id-this-is-bug-or-fe
 */
@Pipe({
	name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) { }

	public transform(value: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(value);
	}
}