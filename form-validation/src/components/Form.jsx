import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    hobbies: [],
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("Name: ", name, "Value: ", value);
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;
    console.log("Value: ", value, "Checked: ", checked);

    setFormData((prevState) => {
      const hobbies = prevState.hobbies;

      if (checked) {
        return {
          ...prevState,
          hobbies: [...hobbies, value],
        };
      } else {
        return {
          ...prevState,
          hobbies: hobbies.filter((hobby) => hobby !== value),
        };
      }
    });
  }

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Regular expression for basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    // Regular expressions for password validation
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    return (
      password.length >= 8 &&
      symbolRegex.test(password) &&
      numberRegex.test(password) &&
      upperCaseRegex.test(password) &&
      lowerCaseRegex.test(password)
    );
  };

  const isValidAge = (age) => {
    return parseInt(age) >= 18 && parseInt(age) <= 100;
  };

  function validateForm() {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required!";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required!";
    }
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required!";
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required!";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required!";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    if (!formData.age) {
      newErrors.age = "Age is required!";
    } else if (!isValidAge(formData.age)) {
      newErrors.age =
        "You must be at least 18 years old and not older than 100 years";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required!";
    }

    if (!formData.hobbies.length === 0) {
      newErrors.hobbies = "Select at least one hobby";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateForm();
    console.log(isValid);
    if (isValid) {
      console.log("Form Submitted: ", formData);
      setIsSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        hobbies: [],
        gender: "",
      });
    } else {
      console.log("Form Validation Failed!");
    }
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {isSubmitSuccess && (
              <div
                className="text-center alert alert-success mb-3"
                role="alert"
              >
                Form submitted successfully!
              </div>
            )}
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Registration Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your First Name"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Last Name"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Your Email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.phoneNumber ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Your Phone Number"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                        placeholder="Enter Your Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.age ? "is-invalid" : ""
                      }`}
                      id="age"
                      placeholder="Enter Your Age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    {errors.age && (
                      <div className="invalid-feedback">{errors.age}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        onChange={handleChange}
                        checked={formData.gender === "Male"}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        onChange={handleChange}
                        checked={formData.gender === "Female"}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                    {errors.gender && (
                      <div className="text-danger mt-1">{errors.gender}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="form-label d-block">Hobbies</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="cricket"
                        value="Cricket"
                        onChange={handleCheckbox}
                      />
                      <label className="form-check-label" htmlFor="cricket">
                        Cricket
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        id="music"
                        value="Music"
                        onChange={handleCheckbox}
                      />
                      <label className="form-check-label" htmlFor="music">
                        Music
                      </label>
                    </div>
                    {errors.hobbies && (
                      <div className="text-danger mt-1">{errors.hobbies}</div>
                    )}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
