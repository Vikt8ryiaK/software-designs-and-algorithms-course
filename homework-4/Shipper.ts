import AirEastShipper from "./AirEastShipper";
import ChicagoSprintShipper from "./ChicagoSprintShipper";
import PacificParcelShipper from "./PacificParcelShipper";
import Shipment from "./Shipment";


class Shipper {
    shipper: AirEastShipper | ChicagoSprintShipper | PacificParcelShipper = new AirEastShipper();

    constructor(private zipcode: string) {
        this.setShipper(zipcode);
    }

    private setShipper(zipcode: string) {
        const zipcodeStartWith = zipcode.slice(0, 1);
        if([4,5,6].includes(Number(zipcodeStartWith))) {
            this.shipper = new ChicagoSprintShipper();
        } else if ([7,8,9].includes(Number(zipcodeStartWith))) {
            this.shipper = new PacificParcelShipper();
        } else {
            this.shipper = new AirEastShipper();
        }
    }

    public getCost(weight: number, shipment: Shipment) {
        return this.shipper.getCost(weight, shipment);
    }
}

export default Shipper;
