export const appRoutes = [
	{
		name: 'home',
		title: 'Home',
		type: 'item',
		url: '/app',
		hidden: true,
		page: () => import('components/pages/appPages/Home')
	},
	{
		name: 'profilo',
		title: 'Profilo',
		type: 'item',
		url: '/app/profilo',
		hidden: true,
		page: () => import('components/pages/appPages/Profilo')
	},
];