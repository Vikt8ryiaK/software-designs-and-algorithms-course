import Shipment from "./Shipment";
import { IShipmentData } from "./mockData";

class Client {
    private shipmentInfo: string;

    constructor(private shipment: Shipment, private data: IShipmentData) {
        this.shipmentInfo = this.shipment.ship(data);
        this.displayInfo(this.shipmentInfo)
    }

    private displayInfo(value: string) {
        console.log(value);
    }
}

export default Client;
