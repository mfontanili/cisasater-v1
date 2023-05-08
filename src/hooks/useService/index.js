import {useEffect, useRef, useState} from 'react';

export const useMount = (callback) => {
	useEffect(callback, []);
};

export const useUnmount = (callback) => {
	useEffect(() => {
		return callback;
	}, []);
};

export const useUpdate = (effectCallback, deps = []) => {
	const isFirstMount = useRef(false);

	useEffect(() => {
		return () => {
			isFirstMount.current = false;
		};
	}, []);

	useEffect(() => {
		if (!isFirstMount.current) {
			isFirstMount.current = true;
		} else {
			return effectCallback();
		}
	}, deps);
};

export const useAnchor = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleConfirm = (fn) => {
		fn();
		setAnchorEl(null);
	};

	const openEl = Boolean(anchorEl);

	return {
		anchorEl,
		openEl,
		handleConfirm,
		handleClose,
		handleOpen,
	};
};