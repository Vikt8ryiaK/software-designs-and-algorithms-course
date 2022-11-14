import IShipper from './IShipper';

class PacificParcelShipper implements IShipper {
    public getCost(weight: number) {
        return weight * 0.51;
    }
}

export default PacificParcelShipper;