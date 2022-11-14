import { IShipmentData } from "./mockData";

class Shipment {
    static shipmentID = 0;
    private shipmentWeightRate = 0.39;

    constructor() {}
    
    private getShipmentID(id: number): number {
        return Shipment.shipmentID += 1
    }

    public ship(data: IShipmentData): string {
        const shipmentID = this.getShipmentID(data.shipmentID);
        const adressFrom = `${data.fromAddress} ${data.fromZipCode}`;
        const addressTo = `${data.toAddress} ${data.toZipCode}`;
        const shipmentCost = data.weight * this.shipmentWeightRate;
        return `shipment ID: ${shipmentID}; sent from: ${adressFrom}; sent to: ${addressTo}; cost: ${shipmentCost.toFixed(2)}$`;
    }
}

export default Shipment;
