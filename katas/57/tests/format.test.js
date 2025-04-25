const { formatData } = require('../utils/format');

describe('formatData', () => {
    test('formats object correctly', () => {
        const input = { name: 'test' };
        expect(formatData(input)).toBe('{\n  "name": "test"\n}');
    });
}); 