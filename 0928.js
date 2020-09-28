function validatePIN (pin) {
  //return true or false
  const wrongPattern = new RegExp('\\D');
  const pattern4 = new RegExp('\\d{4}');
  const pattern6 = new RegExp('\\d{6}');

  if(wrongPattern.test(pin)) {
    return false
  } else {
    if(pin.length === 4 || pin.length === 6) {
      if( pattern4.test(pin) || pattern6.test(pin) ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
