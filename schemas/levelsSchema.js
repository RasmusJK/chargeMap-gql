'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        leveltypes: [Levels]
    }
    
    type Levels {
        id: ID
        Comments: String
        IsFastChargeCapable: Boolean
        Title: String
    } `;