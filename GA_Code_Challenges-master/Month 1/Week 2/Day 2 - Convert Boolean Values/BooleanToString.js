function boolToWord( bool ){
    if (bool === true) {
      return "Yes";
    } else {
      return "No";
    }
  }

// Or we can use
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}