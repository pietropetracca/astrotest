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
			title: 'Guida 3IB',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [	
				{
					label: 'Programmazione Procedurale',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Guida', slug: 'guides/example' },
					],
				},	
				{
					label: 'OOP',
					items: [
						{ label: 'Ereditarietà',
							items:[
								{ label: 'Ereditarietà', slug: 'ereditarietà' }
							]
						},
						{ label: 'Polimorfismo',
							items:[
								{ label: 'Polimorfismo', slug: 'esempio' }
							]
						},
						{label: 'Interfacce', 
							items: [
								{ label: 'IComparer', slug: 'icomparer' },
								{ label: 'IEquatable', slug: 'iequitable' },
							],
						},
					],
				},
				{
					label: 'MAUI',
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
