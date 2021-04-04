'use strict';

import connectionsResolver from './connectionsResolver.js';
import connectionTypesResolver from './connectionTypesResolver.js';
import currentTypesResolver from './currentTypesResolver.js';
import levelsResolver from './levelsResolver.js';
import stationsResolver from './stationsResolver.js';

export default [
    connectionsResolver,
    connectionTypesResolver,
    currentTypesResolver,
    levelsResolver,
    stationsResolver
];