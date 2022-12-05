import IShipper from './IShipper';
import Letter from './Letter';
import Oversized from './Oversized';
import Package from './Package';
import Shipment from './Shipment';

class PacificParcelShipper implements IShipper {
    public getCost(weight: number, shipment: Shipment) {
        if (shipment instanceof Letter) {
            return weight * 0.51;
        }
        if(shipment instanceof Package) {
            return weight * 0.19;
        }
        if(shipment instanceof Oversized) {
            return (weight * 0.19) + (weight * 0.02);
        }

        throw new Error(`Shipment is undefined: ${shipment}`)
    }
}

export default PacificParcelShipper;
