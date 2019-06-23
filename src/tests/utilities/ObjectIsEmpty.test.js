import ObjectIsEmpty from '../../utilities/ObjectIsEmpty.js';

describe('ObjectIsEmpty utility', () => {
  test('empty object returns true', () => {
    expect(ObjectIsEmpty({})).toBeTruthy();
  });
  
  test('object with properties returns false', () => {
    expect(ObjectIsEmpty({ name: 'Britta' })).toBeFalsy();
  });
  
  test('null returns true', () => {
    expect(ObjectIsEmpty(null)).toBeTruthy();
  });
  
  test('undefined returns true', () => {
    expect(ObjectIsEmpty(undefined)).toBeTruthy();
  });
});
