import IShipper from './IShipper';

class AirEastShipper implements IShipper {
    public getCost(weight: number) {
        return weight * 0.39;
    }
}

export default AirEastShipper;