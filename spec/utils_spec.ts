import { roundToTwoPlaces } from "../src/utils";

describe('Tests for roundToTwoPlaces function', () => {
	it('Should return a string', () => {
		const result = roundToTwoPlaces(1.234);
		expect(typeof (result)).toBe('string');
	});

	it('Should round down for less than .5 pennies.', () => {
		expect(roundToTwoPlaces(1.234)).toEqual('1.23');
	});

	it('Should round up for greater than or equal to .5 pennies', () => {
		expect(roundToTwoPlaces(2.345)).toEqual('2.35');
	});

	it('Should append .00 for even dollar amounts', () => {
		expect(roundToTwoPlaces(56)).toEqual('56.00');
	});
});
