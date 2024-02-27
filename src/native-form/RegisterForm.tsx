import React from "react";
import "./RegisterForm.css"; // Import the CSS file for styling
import { useForm } from "react-hook-form";

interface Values {
  userName: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Values>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Values) => {
    console.log(data);
  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...(register("userName"), { required: true })} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" {...(register("email"), { required: true })} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...(register("password"),
            { required: true, minLength: 6, maxLength: 12 })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
