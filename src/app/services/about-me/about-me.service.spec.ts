import { TestBed } from '@angular/core/testing';

import { AboutMeService } from './about-me.service';

describe('AboutMeService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AboutMeService = TestBed.get(AboutMeService);
		expect(service).toBeTruthy();
	});
});