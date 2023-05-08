import {appConfig} from '@cisasater/config';

const AUTH_DEFAULT = {
	isLoading: false,
	can_add: true,
	can_view: true,
	can_delete: true,
	can_edit: true,
	set_auth: false
};

export const useAuthorization = () => {
	if (!appConfig.enableAuthorization) return AUTH_DEFAULT;
};