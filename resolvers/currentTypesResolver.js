'use strict';

import CurrentTypes from "../models/currentTypesModel.js";

export default {
    Query: {
        currenttypes: () => {
            return CurrentTypes.find();
        }
    },
    Connection: {
        CurrentTypeID(parent)  {
            return CurrentTypes.findById(parent.CurrentTypeID);
        }
    }
}