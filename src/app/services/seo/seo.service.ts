import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { BASE_HREF } from '../../classes/constants.class';
import { Seo } from '../../models/seo.model';

@Injectable({
	providedIn: 'root'
})
export class SeoService {
	constructor(private meta: Meta) { }

	/**
	 * Set SEO data into meta tags.
	 * @param config (Seo) data to set into meta tags.
	 */
	public SetTags(config: Seo): void {
		config.description = `${ config.description.replace(/^\n/, '').substr(0, 128) }...`;
		if (!config.image) config.image = `${ BASE_HREF }/assets/img/ivanhdzd.jpg`;

		this.meta.updateTag({ name: 'description', content: config.description });
		this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
		this.meta.updateTag({ name: 'twitter:site', content: '@IvanHdzD' });
		this.meta.updateTag({ name: 'twitter:title', content: config.title });
		this.meta.updateTag({ name: 'twitter:description', content: config.description });
		this.meta.updateTag({ name: 'twitter:image', content: config.image });
		this.meta.updateTag({ property: 'og:type', content: 'article' });
		this.meta.updateTag({ property: 'og:site_name', content: 'IvánHdzD' });
		this.meta.updateTag({ property: 'og:title', content: config.title });
		this.meta.updateTag({ property: 'og:description', content: config.description });
		this.meta.updateTag({ property: 'og:image', content: config.image });
		this.meta.updateTag({ property: 'og:url', content: `${ BASE_HREF }${ config.path }` });
	}
}