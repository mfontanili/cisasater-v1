export const isUrlInChildren = (parent, url) => {
	if (!parent.children) {
		return false;
	}

	for (let i = 0; i < parent.children.length; i++) {
		if (parent.children[i].children) {
			if (isUrlInChildren(parent.children[i], url)) {
				return true;
			}
		}

		if (
			parent.children[i].url === url ||
            url.includes(parent.children[i].url)
		) {
			return true;
		}
	}

	return false;
};
