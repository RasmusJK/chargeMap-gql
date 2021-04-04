'use strict';
import Connections from '../models/connectionsModel.js';
export default {
    Station: {
        Connections(parent)  {
            return parent.Connections.map(id => Connections.findById(id));
        }
    }
}