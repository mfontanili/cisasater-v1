import {useCallback} from 'react';
import {buttons, modulesDef} from '@cisasater/modules';
import {isEmpty, isNull} from 'lodash';
import * as Yup from 'yup';
import {useModule} from 'hooks';

export const useForms = (appModule) => {
	const { useFields, useLayout, useActions } = modulesDef[appModule].form;
	const { fields, isLoading } = useFields();
	const { layout, options = {} } = useLayout();
	const { submit } = useActions();

	const { formValues, moduleName } = useModule(appModule);

	const validationRules = {};
	const initialValues = {};

	const replaceFields = useCallback((item) => {
		if (item.type === 'group' || item.type === 'fields' || item.type === 'hidden') {
			return {
				...item,
				items: item.items.map(i => replaceFields(i))
			};
		}

		if (item.type === 'buttons') {
			return {
				...item,
				items: item.items.map(i => ({
					name: `${moduleName}.${i}`,
					...buttons[i],
					...fields[i]
				}))
			};
		}

		if (item.type === 'table' || item.type === 'title' || item.type === 'error') return item;

		const name = item.name || item;
		const {
			validation = null,
			value = null,
			...rest
		} = fields[name];

		if (validation) validationRules[name] = validation;
		if (!isNull(value)) {
			initialValues[name] = value;
		} else if (formValues && formValues[name]) {
			initialValues[name] = formValues[name];
		} else {
			const {type, multi = false} = rest;
			if (type === 'select' && multi) {
				initialValues[name] = [];
			} else {
				initialValues[name] = '';
			}
		}

		return {
			...item,
			...rest,
			name: `${moduleName}.${name}`,
			isDisabled: !isEmpty(formValues) && formValues.can_edit === false,
		};
	}, [appModule, fields]);

	return {
		formLayout: layout.map(item => replaceFields(item)),
		validationSchema: Yup.object().shape({
			[moduleName]: Yup.object().shape(validationRules)
		}),
		initialValues: {
			[moduleName]: initialValues
		},
		options,
		submit,
		isLoading
	};
};