export default interface IShipper {
    getCost: (weight: number) => number;
}