export const publicRoutes = [
	{
		name: 'home',
		title: 'Home',
		type: 'item',
		url: '/',
		page: () => import('components/pages/publicPages/Home'),

	},
	{
		name: 'chi_siamo',
		title: 'Chi siamo',
		type: 'item',
		url: '/chi-siamo',
		page: () => import('components/pages/publicPages/ChiSiamo')
	},
	{
		name: 'scrivici',
		title: 'Scrivici',
		type: 'item',
		url: '/scrivici',
		page: () => import('components/pages/publicPages/Scrivici')
	},
	{
		name: 'accedi',
		title: 'Accedi',
		type: 'hidden',
		url: '/accedi',
		page: () => import('components/pages/publicPages/Accedi')
	},
];
