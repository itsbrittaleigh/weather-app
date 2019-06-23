import PostalCodeIsValid from '../../utilities/PostalCodeIsValid.js';

describe('PostalCodeIsValid utility', () => {
  test('41212 true', () => {
    expect(PostalCodeIsValid('48212')).toBeTruthy();
  });
  
  test('48212-3517 returns true', () => {
    expect(PostalCodeIsValid('48212-3517')).toBeTruthy();
  });

  test('Britta returns false', () => {
    expect(PostalCodeIsValid('Britta')).toBeFalsy();
  });

  test('123456 returns false', () => {
    expect(PostalCodeIsValid('123456')).toBeFalsy();
  });

  test('null returns false', () => {
    expect(PostalCodeIsValid(null)).toBeFalsy();
  });

  test('undefined returns false', () => {
    expect(PostalCodeIsValid(undefined)).toBeFalsy();
  });
});
