import Shipper from "./Shipper";
import { IShipmentData } from "./mockData";

abstract class Shipment {
    static shipmentID = 0;

    constructor(private shipper: Shipper) {}
    
    private getShipmentID(id: number): number {
        return id === 0 ? new Date().getTime() : id;
    }

    public ship(data: IShipmentData): string {
        const shipmentID = this.getShipmentID(data.shipmentID);
        const adressFrom = `${data.fromAddress} ${data.fromZipCode}`;
        const addressTo = `${data.toAddress} ${data.toZipCode}`;
        const shipmentCost = this.shipper.getCost(data.weight, this);
        return `shipment ID: ${shipmentID}; sent from: ${adressFrom}; sent to: ${addressTo}; cost: ${shipmentCost.toFixed(2)}$`;
    }
}

export default Shipment;
