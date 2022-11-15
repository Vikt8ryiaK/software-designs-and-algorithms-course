import IShipper from './IShipper';
import Letter from './Letter';
import Oversized from './Oversized';
import Package from './Package';
import Shipment from './Shipment';

class ChicagoSprintShipper implements IShipper {
    public getCost(weight: number, shipment: Shipment) {
        if (shipment instanceof Letter) {
            return weight * 0.42;
        }
        if(shipment instanceof Package) {
            return weight * 0.20;
        }
        if(shipment instanceof Oversized) {
            return 0;
        }

        throw new Error(`Shipment is undefined: ${shipment}`)
    }
}

export default ChicagoSprintShipper;