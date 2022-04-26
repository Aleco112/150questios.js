function removeProperty(obj, key) {
  // your code here
  if (obj[key] != undefined) {
    delete obj[key];
    return true;
} else {
    return false;
}
return null;
}