export const validateSignUp = (data) => {
    const errors = {};
  
    if (!data.firstName) errors.firstName = 'First name is required';
    if (!data.lastName) errors.lastName = 'Last name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.password) errors.password = 'Password is required';
    else if (data.password.length < 6)
      errors.password = 'Password must be at least 6 characters';
  
    return errors;
  };