import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'esDate'
})
export class EsDatePipe implements PipeTransform {
	public transform(value: string): string {
		return moment(new Date(value)).format('dddd D [de] MMMM [de] YYYY');
	}
}