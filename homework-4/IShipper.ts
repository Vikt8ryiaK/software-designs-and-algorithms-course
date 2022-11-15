import Shipment from "./Shipment";

export default interface IShipper {
    getCost: (weight: number, shipment: Shipment) => number;
}