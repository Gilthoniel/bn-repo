import { test, ExampleType } from './test';

function test2(): ExampleType {
    return test();
}

export const common = {
    test2,
}