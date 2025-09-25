import { expect, test } from 'vitest';
import { calculatePrice } from '../src/utils/helper';

const consumption = 1000;
const pricePerKwh = 0.45;
const fixCosts = 20;

// (1000 * 0,45 = 450) + (12 * 20 = 240) =  690 / 12 = 57.5

// Calculates tariffs monthly price and takes consumption, pricePerKwh and fixCosts
test('calculates the right price for tariffs', () => {
    expect(calculatePrice(consumption, pricePerKwh, fixCosts)).toBe(57.5);
})
