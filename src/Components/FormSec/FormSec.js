import './FormSec.css';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import or from '../imgs/or.png';

let schema = yup.object().shape({
  RegisterEmail: yup.string().email().required(),
  RegisterPassword: yup.string().required().min(8),
  ConfirmPassword: yup.string().required(),
});

const initialError = {
  RegisterEmail: '',
  RegisterPassword: '',
  ConfirmPassword: '',
};

export default function FormSec() {
  const [RegisterEmail, SetRegisterEmail] = useState('');
  const [RegisterPassword, SetRegisterPassword] = useState('');
  const [ConfirmPassword, SetConfirmPassword] = useState('');
  //check box
  const [Error, SetError] = useState(initialError);

  const [submitted, setSubmitted] = useState(false);
  const data = { RegisterEmail, RegisterPassword, ConfirmPassword };

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
    RegisterEmail: SetRegisterEmail,
    RegisterPassword: SetRegisterPassword,
    ConfirmPassword: SetConfirmPassword,
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
  }, [RegisterEmail, RegisterPassword, ConfirmPassword]);
  return (
    <div className="FormSec">
      <form onSubmit={handleSubmit}>
        <label>Email address*</label>
        <input
          type="text"
          placeholder="Enter email address"
          name="RegisterEmail"
          value={RegisterEmail}
          onChange={handleChange}
        ></input>
        {Error.RegisterEmail && (
          <div className="error">{Error.RegisterEmail}</div>
        )}
        <label>Create password*</label>
        <input
          placeholder="Password"
          type="password"
          name="RegisterPassword"
          value={RegisterPassword}
          onChange={handleChange}
        ></input>
        {Error.RegisterPassword && (
          <div className="error">{Error.RegisterPassword}</div>
        )}
        <label>Repeat Password*</label>
        <input
          placeholder="Repeat password"
          type="password"
          name="ConfirmPassword"
          value={ConfirmPassword}
          onChange={handleChange}
        ></input>
        {Error.ConfirmPassword && (
          <div className="error">{Error.ConfirmPassword}</div>
        )}
        <div className="checkFlex">
          <input
            type="checkbox"
            name="vehicle1"
            value="Bike"
            required
            id="check"
          ></input>
          <label>I agree to terms & conditions</label>
        </div>
        <input
          type="submit"
          className="submit"
          value="Register Account"
        ></input>
        <img src={or}></img>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}
