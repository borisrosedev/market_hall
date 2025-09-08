const checkFormat = {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;   
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword(password: string): boolean {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    //(?=.*[a-z]) → au moins 1 minuscule
    //(?=.*[A-Z]) → au moins 1 majuscule 
    //(?=.*\d) → au moins 1 chiffre 
    //(?=.*[@$!%*?&]) → au moins 1 caractère spécial parmi @$!%*?& 
    //[A-Za-z\d@$!%*?&]{8,} → longueur ≥ 8 caractères, uniquement dans ce set autorisé

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },

  isValidName(name: string): boolean {
    // Name must be at least 8 characters long and can contain letters, spaces, and hyphens
    const nameRegex = /^[A-Za-z\s-]{2,}$/;
    return nameRegex.test(name);
  },

  isValidAdresses(adresses:string){
    const adressesRegex = /^\d{1,4}\s?(bis|ter|quater)?\s?[a-zA-ZÀ-ÿ'’\-\s]+$/; 
    //const adressesRegex = /^([1-9][0-9]*(?:-[1-9][0-9]*)*)[\s,-]+(?:(bis|ter|qua)[\s,-]+)?([\w]+[\-\w]*)[\s,]+([-\w].+)$/; 
    return adressesRegex.test(adresses);
  },
  isValidZipCode(zipcode:string){
    const zipcodeRegex =   /^(0[1-9]|[1-8][0-9]|9[0-8])\d{3}$/;
    //const zipcodeRegex =   /^\d{5}$/;        //  /^([0-9]{5})$/ ; 
    return zipcodeRegex.test(zipcode);
  },
};
export default checkFormat;
