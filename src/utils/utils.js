export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
    console.log(password)
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    // Password must contain at least one uppercase letter, one lowercase letter, and one digit
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password)) {
        return false;
    }
    return true;
};