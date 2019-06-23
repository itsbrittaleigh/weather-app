const PostalCodeIsValid = postalCode => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode);

export default PostalCodeIsValid;
