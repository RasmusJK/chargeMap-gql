'use strict';

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const connectionsSchema = new Schema ({
    ConnectionTypeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ConnectionType'
    },
    CurrentTypeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CurrentType'
    },
    LevelID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level'
    }
});

export default mongoose.model('Connections', connectionsSchema);