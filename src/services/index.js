export * as database from './database';

import {appConfig} from '@cisasater/config';
import * as database from './database';

export const {graphqlClient, query, request} = database[appConfig.database];