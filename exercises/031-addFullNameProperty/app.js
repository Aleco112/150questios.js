function addFullNameProperty(obj) {
  var name = obj.firstName;
  var surname = obj.lastName;
  obj.fullName = name+" "+surname;
  return obj;
 
}