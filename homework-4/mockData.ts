export interface IShipmentData {
    shipmentID: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
}

const fromZipCode = '94123';

const fromStreet = 'Lombard';
const fromCity = 'San Francisco';
const fromState = 'California';

const toStreet = 'Jeanne';
const toCity = 'Virginia Beach';
const toState = 'Virginia';
const toZipCode = '23451';

export const shipmentData: IShipmentData = {
    shipmentID: 0,
    weight: 12,
    fromAddress: `${fromStreet}, ${fromCity}, ${fromState}`,
    fromZipCode: fromZipCode,
    toAddress: `${toStreet}, ${toCity}, ${toState}`,
    toZipCode: toZipCode,
}
