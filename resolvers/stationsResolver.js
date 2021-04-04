'use strict';

import Stations from "../models/stationsModel.js";
import {rectangleBounds} from '../utils/rectangleBounds.js'


export default {
    Query: {
        station: (parent, args) => {
            return Stations.findById(args.id)
        },
        stations: (parent, args) => {
            if (args.bounds !== undefined) {
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
   /* Mutation: {
        addStation: async (parent,args) => {
            try {
                const newStation = new Stations(args)
            } catch (e){
                console.log(e)
            }
        }
    }*/
};