import './Form.css';
import { FiEye } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as yup from 'yup';

const initError = {
  RegisterEmail: '',
  RegisterPassword: '',
  ConfirmPassword: '',
};

let schema = yup.object().shape({
  Email: yup.string().email().required(),
  Password: yup.string().required().min(8),
});
export default function Form(props) {
  const { setPage } = props;
  const changePage = () => {
    setPage(false);
  };
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [Error, SetError] = useState(initError);

  const [submitted, setSubmitted] = useState(false);
  const data = { Email, Password };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    schema
      .validate(data, { abortEarly: false })
      .then((valid) => {
        console.log(valid);
        if (valid) {
          //store info
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
        console.dir(err);
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        SetError(newErrors);
      });
  };

  const Setters = {
    Email: SetEmail,
    Password: SetPassword,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    Setters[name](value);
  };

  useEffect(() => {
    if (submitted) {
      schema
        .validate(data, { abortEarly: false })
        .then((valid) => {
          console.log(valid);
          if (valid) {
            //store info
          } else {
          }
        })
        .catch((err) => {
          console.log(err);
          console.dir(err);
          const newErrors = err.inner.reduce((acc, curr) => {
            acc[curr.path] = curr.message;
            return acc;
          }, {});
          SetError(newErrors);
        });
    }
  }, [Email, Password]);
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Your email</label>
        <input
          name="Email"
          value={Email}
          onChange={handleChange}
          type="text"
          placeholder="Write your email"
        ></input>
        {Error.Email && <div className="error">{Error.Email}</div>}
        <label>Enter your password</label>
        <input
          name="Password"
          value={Password}
          onChange={handleChange}
          placeholder="•••••••••"
          type="password"
        ></input>
        {Error.Password && <div className="error">{Error.Password}</div>}
        <input type="submit" className="submit" value="Login"></input>
        <Router>
          <Link to="/register">
            <span className="register" onClick={changePage}>
              Don’t have an account? <span className="regiter2">Register</span>
            </span>
          </Link>
        </Router>
      </form>
    </div>
  );
}
