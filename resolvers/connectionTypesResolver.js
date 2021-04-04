'use strict';

import ConnectionTypes from "../models/connectionTypesModel.js";

export default {
    Query: {
        connectiontypes: () => {
            return ConnectionTypes.find();
        }
    },
    Connection: {
        ConnectionTypeID(parent)  {
            return ConnectionTypes.findById(parent.ConnectionTypeID);
        }
    }
}