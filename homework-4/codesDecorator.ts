import { IShipmentData } from "./mockData";

export default function codes(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function (...args: IShipmentData[]): string {
        let result = originalMethod.apply(this, args);
        const data = args[0];

        if (data.fragile) {
            result += "\n**MARK FRAGILE**";
        }
        if (data.doNotLeave) {
            result += "\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**";
        }
        if (data.returnReceiptRequested) {
            result += "\n**MARK RETURN RECEIPT REQUESTED**";
        }

        return result;
    };

    return descriptor;
}
