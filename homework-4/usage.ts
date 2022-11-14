import Shipper from "./Shipper";
import Shipment from "./Shipment";
import Client from "./Client";

import { shipmentData, shipmentData2 } from "./mockData";

const pacificParcelShipper = new Shipper(shipmentData.fromZipCode);
const chicagoSprintShipper = new Shipper(shipmentData2.fromZipCode);

const shipment = new Shipment(pacificParcelShipper);
const shipment2 = new Shipment(chicagoSprintShipper);

new Client(shipment, shipmentData);
new Client(shipment2, shipmentData2);
