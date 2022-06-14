const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const validateEmail = (value) => EMAIL_REGEX.test(value);

export const ERROR_MESSAGES = {
  required: 'This field can’t be empty',
  email: 'Please, enter valid email address'
}
