'use strict';

import Levels from "../models/levelsModel.js";

export default {
    Query: {
        leveltypes: () => {
            return Levels.find();
        }
    },
    Connection: {
        LevelID(parent)  {
            return Levels.findById(parent.LevelID);
        }
    }
}