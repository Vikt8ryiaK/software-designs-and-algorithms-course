export interface IShipmentData {
    shipmentID: number;
    weight: number;
    weight2: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
}

const fromZipCode = '94123';
const fromZipCode2 = '54123';

const fromStreet = 'Lombard';
const fromCity = 'San Francisco';
const fromState = 'California';

const toStreet = 'Jeanne';
const toCity = 'Virginia Beach';
const toState = 'Virginia';
const toZipCode = '23451';

const addressInfo = {
    fromAddress: `${fromStreet}, ${fromCity}, ${fromState}`,
    toAddress: `${toStreet}, ${toCity}, ${toState}`,
    toZipCode: toZipCode,
}

export const shipmentData: IShipmentData = {
    shipmentID: 0,
    weight: 12,
    weight2: 45,
    fromZipCode: fromZipCode,
    ...addressInfo
}

export const shipmentData2: IShipmentData = {
    shipmentID: 1668456826002,
    weight: 12,
    weight2: 170,
    fromZipCode: fromZipCode2,
    ...addressInfo
}
