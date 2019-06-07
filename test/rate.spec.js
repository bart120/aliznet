import { Rate } from '../src/services/rate';

describe('testrate', () => {
    const rate = new Rate('rate.json');

    beforeEach(() => {
        //init        
    });

    it('object', () => {
        expect(rate).toBeTruthy();
    });

    it('url', () => {
        expect(rate.url).toBeTruthy();
    });

    it('getrates', () => {
        expectAsync(rate.getRates()).toBeResolved();
    });
});