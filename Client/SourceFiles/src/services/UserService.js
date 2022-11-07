const User = {
  firstName: '',
  phone: 0,
  set changePhone(newPhone) {
    this.phone = newPhone;
  },
  set changeName(newName) {
    this.firstName = newName;
  }
};
export default User;
