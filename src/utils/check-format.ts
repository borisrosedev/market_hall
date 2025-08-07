const checkFormat = {
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword(password) {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },

  isValidName(name) {
    // Name must be at least 8 characters long and can contain letters, spaces, and hyphens
    const nameRegex = /^[A-Za-z\s-]{8,}$/;
    return nameRegex.test(name);
  },
};
export default checkFormat;
