const customerFormConstraint = {
  address: {
    presence: {
      allowEmpty: false,
      message: '^Enter address. ',
    },
    length: {
      minimum: 4,
      message: 'must be at least 4 characters. ',
    },
  },
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^Enter first name. ',
    },
    length: {
      minimum: 2,
      message: 'must be at least 2 characters. ',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: '^Enter last name. ',
    },
    length: {
      minimum: 2,
      message: 'must be at least 2 characters. ',
    },
  },
  city: {
    presence: {
      allowEmpty: false,
      message: '^Please enter city. ',
    },
    length: {
      minimum: 2,
      message: 'must be at least 2 characters. ',
    },
  },
  postalCode: {
    presence: {
      allowEmpty: false,
      message: '^Please enter postal code. ',
    },
    length: {
      minimum: 2,
      message: 'must be at least 2 characters. ',
    },
  },
  country: {
    presence: {
      allowEmpty: false,
      message: '^Please enter country. ',
    },
    length: {
      minimum: 2,
      message: 'must be at least 2 characters. ',
    },
  },
};
export default customerFormConstraint;
