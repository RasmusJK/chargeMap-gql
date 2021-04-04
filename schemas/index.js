'use strict';
import {gql} from 'apollo-server-express';
import connectionsSchema from './connectionsSchema.js';
import connectionTypesSchema from './connectionTypesSchema.js';
import currentTypesSchema from './currentTypesSchema.js';
import levelsSchema from './levelsSchema.js';
import stationsSchema from './stationsSchema.js';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   
   type Mutation {
     _: Boolean
   }
`;

export default [
    linkSchema,
    connectionsSchema,
    connectionTypesSchema,
    currentTypesSchema,
    levelsSchema,
    stationsSchema
];
