const validateMobile = require('./7-function');

describe('validateMobile', () => {
    test('valid mobile number with +91 prefix', () => {
      expect(validateMobile('+919876543210')).toBe(true);
    });
  
    test('valid mobile number with 0 prefix', () => {
      expect(validateMobile('09876543210')).toBe(true);
    });
  
    test('valid mobile number with space separator', () => {
      expect(validateMobile('9876543210')).toBe(true);
    });
  
    test('invalid mobile number with wrong prefix', () => {
      expect(validateMobile('+91987654321')).toBe(false);
    });
  
    test('invalid mobile number with too many digits', () => {
      expect(validateMobile('+9198765432101')).toBe(false);
    });
  
    test('invalid mobile number with non-numeric characters', () => {
      expect(validateMobile('9X76543210')).toBe(false);
    });
  });
  

