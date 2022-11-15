import { IShipmentData } from './mockData';
import Letter from "./Letter";
import Oversized from "./Oversized";
import Package from "./Package";
import Shipment from "./Shipment";
import Shipper from "./Shipper";

class ShipmentFactory {
    getShipment(data: IShipmentData): Shipment {
        const shipper = new Shipper(data.fromZipCode);
        if(data.weight2 <= 15) {
            return new Letter(shipper);
        }
        if(data.weight2 <= 160) {
            return new Package(shipper);
        }
        return new Oversized(shipper);
    }
}

export default ShipmentFactory;
