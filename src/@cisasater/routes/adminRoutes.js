export const adminRoutes = [
	{
		name: 'home',
		title: 'Home',
		type: 'item',
		url: '/admin',
		hidden: true,
		page: () => import('components/pages/adminPages/Home')
	},
	{
		name: 'profilo',
		title: 'Profilo',
		type: 'item',
		url: '/admin/profilo',
		hidden: true,
		page: () => import('components/pages/adminPages/Profile')
	},
	{
		name: 'base',
		type: 'item',
		hidden: true,
		page: () => import('components/pages/adminPages/AppBase')
	},
	{
		name: 'anagrafiche',
		title: 'Gestione anagrafiche',
		type: 'group',
		children: [
			{
				name: 'users',
				title: 'Users',
				type: 'item',
				url: '/admin/users',
				module: 'users'
			},
			{
				name: 'istruttori',
				title: 'Istruttori',
				type: 'item',
				url: '/admin/istruttori',
				module: 'istruttori'
			},
			{
				name: 'scuole',
				title: 'Scuole sezionali',
				type: 'item',
				url: '/admin/scuole',
				module: 'gruppi'
			},
			{
				name: 'organi-tecnici',
				title: 'Organi tecnici',
				type: 'item',
				url: '/admin/organi-tecnici',
				module: 'gruppi'
			},
		],
	},
	{
		name: 'programmazione',
		title: 'Gestione attività',
		type: 'group',
		children: [
			{
				name: 'attivita',
				title: 'Attività',
				type: 'item',
				url: '/admin/attivita',
				module: 'attivita',
			},
			{
				name: 'corsi',
				title: 'Corsi',
				type: 'item',
				url: '/admin/corsi',
				module: 'corsi'
			},
		],
	},
];
