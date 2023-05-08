export const setSelectOptions = (array, value, label, filter) => {
	if (!array) return [];
	const filteredArray = filter ? array.filter(filter) : array;
	if (value && label) {
		return filteredArray.map((item) => {
			return {
				value: item[value],
				label: item[label],
			};
		});
	} else if (value) {
		return filteredArray.map((item) => {
			return {
				value: item[value],
				label: item[value],
			};
		});
	} else {
		return filteredArray.map((item) => {
			return {
				value: item,
				label: item,
			};
		});
	}
};

export const toArrayLiteral = (arr) => (JSON.stringify(arr).replace('[', '{').replace(']', '}'));