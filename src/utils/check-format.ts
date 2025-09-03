const checkFormat = {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword(password: string): boolean {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },

  isValidName(name: string): boolean {
    // Name must be at least 8 characters long and can contain letters, spaces, and hyphens
    const nameRegex = /^[A-Za-z\s-]{2,}$/;
    return nameRegex.test(name);
  },

  isValidAdresses(adresses:string){
    const adressesRegex = /^([1-9][0-9]*(?:-[1-9][0-9]*)*)[\s,-]+(?:(bis|ter|qua)[\s,-]+)?([\w]+[\-\w]*)[\s,]+([-\w].+)$/; 
    return adressesRegex.test(adresses);
  },
  isValidZipCode(zipcode:string){
    const zipcodeRegex =   /^\d{5}$/;        //  /^([0-9]{5})$/ ; 
    return zipcodeRegex.test(zipcode);
  },
};
export default checkFormat;
