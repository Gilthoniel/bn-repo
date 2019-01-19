import BN from 'bn.js';

export type ExampleType = number | BN;

export const test = (): ExampleType => {
    return new BN(0);
}
