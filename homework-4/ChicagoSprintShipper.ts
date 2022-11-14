import IShipper from './IShipper';

class ChicagoSprintShipper implements IShipper {
    public getCost(weight: number) {
        return weight * 0.42;
    }
}

export default ChicagoSprintShipper;