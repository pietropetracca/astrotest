// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://pietro.petracca.github.io',
	base: '/astrotest/',
	image: {
		service: { entrypoint: 'astro/assets/services/noop' }
	},
	integrations: [
		starlight({
			title: 'Guida',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				// Pagina principale di esempio
				// { label: 'Pagina di Esempio', slug: 'esempio' },
				{ label: 'Ereditarietà', slug: 'ereditarietà' },
				{ label: 'IComparer', slug: 'icomparer' },
				{ label: 'IEquatable', slug: 'iequitable' },

				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
