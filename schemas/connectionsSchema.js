'use strict';

import {gql} from 'apollo-server-express';

export default gql`
    type Connection {
        id: ID
        ConnectionTypeID: ConnectionTypes
        LevelID: Levels
        CurrentTypeID: CurrentTypes
        Quantity: Int
    }`;
