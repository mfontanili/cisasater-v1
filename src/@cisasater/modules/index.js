export * from './buttons';
import * as adminModule from './admin';
import * as publicModule from './public';

export const modulesDef = {
	...adminModule,
	...publicModule
};