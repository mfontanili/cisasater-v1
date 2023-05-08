export const customSort = (data, sortBy, sortField) => {
	const sortByObject = sortBy.reduce((obj, item, index) => {
		return {
			...obj,
			[item]: index,
		};
	}, {});
	return data.sort(
		(a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]]
	);
};

export const flatArray = (array, key) => {
	return array.reduce((acc, item) => {
		const obj = {};
		let arr = [];
		Object.entries(item).forEach(([k, v]) => {
			if (key.includes(k)) {
				obj[k] = v;
			}
			if (k === 'children') {
				arr = flatArray(v, key);
			}
		});
		return [...acc, obj, ...arr];
	}, []);
};

export const findItem = (array, key, value) => {
	return array.reduce((acc, item) => {
		if (acc) return acc;
		if (item[key] === value) return item;
		if (item.children) return findItem(item.children, key, value);
	}, null);
};

export const whoIsMyDaddy = () => {
	try {
		throw new Error();
	} catch (e) {
		// matches this function, the caller and the parent
		const allMatches = e.stack.match(/(\w+)@|at (\w+) \(/g);
		// match parent function name
		const parentMatches = allMatches[2].match(/(\w+)@|at (\w+) \(/);
		// return only name
		return parentMatches[1] || parentMatches[2];
	}
};