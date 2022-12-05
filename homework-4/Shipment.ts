import Shipper from "./Shipper";
import codes from "./codesDecorator";
import { IShipmentData } from "./mockData";

abstract class Shipment {
    static shipmentID = 0;

    constructor(private shipper: Shipper) {}
    
    private getShipmentID(id: number): number {
        return id === 0 ? new Date().getTime() : id;
    }

    @codes
    public ship(data: IShipmentData): string {
        const shipmentID = this.getShipmentID(data.shipmentID);
        const adressFrom = `${data.fromAddress} ${data.fromZipCode}`;
        const addressTo = `${data.toAddress} ${data.toZipCode}`;
        const shipmentCost = this.shipper.getCost(data.weight, this);

        const info = `Shipment with the ID ${shipmentID} will be picked up from ${adressFrom} and shipped to ${addressTo}`;
        const cost = `Cost = ${shipmentCost.toFixed(2)}`;
        return `${info}\n${cost}`;
    }
}

export default Shipment;
