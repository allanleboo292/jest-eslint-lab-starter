const { capitalizeWords, filterActiveUsers, logAction } = require('../index');
describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns an empty string when given an empty string', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles hyphenated words', () => {
        expect(capitalizeWords('hello-world')).toBe('Hello-World');
    });

    test('handles a single word', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });
});
rs
describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true }
        ];

        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
            { name: 'Charlie', isActive: true }
        ]);
    });

    test('returns an empty array when all users are inactive', () => {
        const users = [
            { name: 'Bob', isActive: false },
            { name: 'John', isActive: false }
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns an empty array when given an empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('generates the correct log message', () => {
        const result = logAction('login', 'Alice');

        expect(result).toMatch(
            /^User Alice performed login at \d{4}-\d{2}-\d{2}T/
        );
    });

    test('handles an empty action', () => {
        const result = logAction('', 'Alice');

        expect(result).toMatch(
            /^User Alice performed  at \d{4}-\d{2}-\d{2}T/
        );
    });

    test('handles an empty username', () => {
        const result = logAction('login', '');

        expect(result).toMatch(
            /^User  performed login at \d{4}-\d{2}-\d{2}T/
        );
    });

    test('handles empty action and username', () => {
        const result = logAction('', '');

        expect(result).toMatch(
            /^User  performed  at \d{4}-\d{2}-\d{2}T/
        );
    });
});
