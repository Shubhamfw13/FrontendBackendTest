import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Styles from "./Login.module.css";
import { useState } from "react";
import { login } from "../../Auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;
  const dispatch = useDispatch();
  console.log(email, password);

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(login(email, password));
    if (!error) {
      alert("Login Success");
      navigate("/");
    }
  };

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>error</p>}

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", marginTop: "40px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          value={email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          value={password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />

        <Button
          className="button"
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
