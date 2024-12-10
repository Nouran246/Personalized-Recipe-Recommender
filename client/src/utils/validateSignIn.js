// validation.js
export const validateLogin = (data) => {
    const errors = {};
  
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
  
    if (!data.password) errors.password = 'Password is required';
  
    return errors;
  };
  