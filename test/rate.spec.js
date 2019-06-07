import { Rate } from '../src/services/rate';

describe('testratefinder', () => {
    it('getallrates', () => {
        const rate = new Rate('rate.json');
        expect(rate).toBeNull();
    });
});