import { useState } from "react";

import FormField from "../components/FormField";

import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();

  // state
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const isEmpty = (str) => {
    return str.trim() === "";
  };

  const isValidEmail = (eml) => {
    const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

    return pattern.test(email);
  };

  const submitHandler = async () => {
    try {
      if (isEmpty(fname) || isEmpty(lname) || isEmpty(email)) {
        setErrorMessage("Please enter all the fields!");
        return;
      }

      if (!isValidEmail(email)) {
        setErrorMessage("Invalid email!");
        return;
      }

      if (password.length < 8) {
        setErrorMessage("Password needs to of minimum length 8");
        return;
      }

      let body = {
        first_name: fname,
        last_name: lname,
        email,
        password,
      };

      const { data } = await axios.post("http://localhost:3030/signup", body);
      console.log(data);

      history.push("/login");
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <form>
        <FormField
          label="First Name"
          name="fname"
          data={fname}
          changeHandler={(val) => setFname(val)}
          type="text"
        />

        <FormField
          label="Last Name"
          name="lname"
          data={lname}
          changeHandler={(val) => setLname(val)}
          type="text"
        />

        <FormField
          label="Email"
          name="email"
          data={email}
          changeHandler={(val) => setEmail(val)}
          type="text"
        />

        <FormField
          label="Password"
          name="password"
          data={password}
          changeHandler={(val) => setPassword(val)}
          type="password"
        />

        <div>
          <p>{errorMessage}</p>
        </div>

        <button type="button" onClick={submitHandler}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
