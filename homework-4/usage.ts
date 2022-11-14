import Shipment from "./Shipment";
import Client from "./Client";

import { shipmentData } from "./mockData";

const shipment = new Shipment();
new Client(shipment, shipmentData);
new Client(shipment, shipmentData);
