'use strict';

import Stations from "../models/stationsModel.js";
import {rectangleBounds} from '../utils/rectangleBounds.js';
import Connections from '../models/connectionsModel.js';


export default {
    Query: {
        station: (parent, args) => {
            return Stations.findById(args.id)
        },
        stations: (parent, args) => {
            if (args.bounds !== undefined) {
                console.log('if bounds',args.bounds);
                const rb = rectangleBounds(args.bounds._northEast, args.bounds._southWest);
                return Stations.find().where('Location').within(rb)
            }

            if (args.limit === undefined) {
                if (args.start === undefined) {
                    args.start = 0
                }
                args.limit = 10;
                console.log(args.limit);
                return Stations.find({}).limit(args.limit).skip(args.start);
            } else {
                if (args.start === undefined) {
                    args.start = 0;
                }
                return Stations.find({}).limit(args.limit).skip(args.start)
            }

        },

    },
    Mutation: {
        addStation: async (parent,args) => {
            try {
                console.log(args.Connections)
                const conns = await Promise.all(args.Connections.map(async conn => {
                    let newConnection = new Connections(conn);
                    const result = await newConnection.save();
                    return result.id;
                }));
                let newStation = new Stations({...args,Connections: conns});
                return newStation.save();
            } catch (e){
                console.log(e)
            }
        }
    }
};