import axios from "axios";
import { useState } from "react";
import FormField from "../components/FormField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isEmpty = (str) => {
    return str.trim() === "";
  };

  const submitHandler = async () => {
    if (isEmpty(email) || isEmpty(password)) {
      setErrorMessage("Please enter all the fields!");
      return;
    }

    try {
      let body = { password: password };

      let { data } = await axios.post(
        `http://localhost:3030/users/${email}/login`,
        body
      );

      console.log(data);

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("expires_in", data.expires_in);
    } catch (err) {
      console.log(err);
      alert("something went wrong!");
    }
  };

  return (
    <div>
      <form>
        <FormField
          data={email}
          name="email"
          changeHandler={(val) => setEmail(val)}
          type="text"
          label="Email"
        />

        <FormField
          label="Password"
          name="password"
          data={password}
          changeHandler={(val) => setPassword(val)}
          type="password"
        />

        <button type="button" onClick={submitHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
