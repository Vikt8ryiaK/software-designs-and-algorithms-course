import Client from "./Client";

import { shipmentData, shipmentData2 } from "./mockData";
import ShipmentFactory from "./ShipmentFactory";

const shipmentFactory = new ShipmentFactory();
const shipment = shipmentFactory.getShipment(shipmentData);
const shipment2 = shipmentFactory.getShipment(shipmentData2);

new Client(shipment, shipmentData);
new Client(shipment2, shipmentData2);
