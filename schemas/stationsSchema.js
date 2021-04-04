'use strict';

import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
    station(id: ID!): Station,
    stations(start: Int, limit: Int, bounds: Bounds): [Station]
    }
    
    type Station {
        id: ID
        Location: Location
        Connections: [Connection]
        Title: String
        AddressLine1: String
        Town: String
        StateOrProvince: String
        Postcode: String
    }
    
     input Coordinates {
        lat: Float
        lng: Float
    }
    
    input Bounds {
    _southWest: Coordinates
    _northEast: Coordinates
    }
    
    type Location {
        type: String
        coordinates: [Float]
    }
    
    input Connections {
        id: ID
        ConnectionTypeID: String
        LevelID: String
        CurrentTypeID: String
        Quantity: Int
    }
    
    input newLocation {
        coordinates: [Float]
    }
    
    extend type Mutation {
    addStation(
    Connections: [Connections]
    Postcode: String
    Title: String
    AddressLine1: String
    StateOrProvince: String
    Town: String
    Location: newLocation
    ): Station
   
    }
    `;
