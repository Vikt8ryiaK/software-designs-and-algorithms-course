import IShipper from './IShipper';
import Letter from './Letter';
import Oversized from './Oversized';
import Package from './Package';
import Shipment from './Shipment';

class AirEastShipper implements IShipper {
    public getCost(weight: number, shipment: Shipment) {
        if (shipment instanceof Letter) {
            return weight * 0.39;
        }
        if(shipment instanceof Package) {
            return weight * 0.25;
        }
        if(shipment instanceof Oversized) {
            return (weight * 0.25) + 10;
        }

        throw new Error(`Shipment is undefined: ${shipment}`)
    }
}

export default AirEastShipper;