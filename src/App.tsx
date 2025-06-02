import React from "react";
import { useState , useEffect } from "react";
import Success from "./componentes/Success";
import "./App.css";

function App() {
  // type FormEntry = {
  //   fName: string;
  //   lName: string;
  //   email: string;
  //   message: string;
  //   radio: string;
  // };
  const [fName, setfName] = useState<string>("");
  const [lName, setlName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [radio, setRadio] = useState<string>("");
 // const [entries, setEntries] = useState<FormEntry[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCheck, setIscheck] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);




useEffect(() => {
  if (showSuccess) {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 3000); 
    
    return () => clearTimeout(timer); // Cleanup
  }
}, [showSuccess, setShowSuccess]);

const submit = (): void => {


if (
  fName !== "" &&
  lName !== "" &&
  email.endsWith("@gmail.com") &&
  radio !== "" &&
  message !== "" &&
  isCheck 
) {
  setShowSuccess(true);

  setfName("")
  setlName("")
  setEmail("")
  setMessage("")
  setRadio("")
      setIsSubmitted(false);
}
  //  let isValid = true;
    // if (isValid) {
    //   const newEnter: FormEntry = { fName, lName, email, message, radio };
    //   setEntries((prev) => [...prev, newEnter]);
    // }
    setIsSubmitted(true);
  };



  const handleCheck = () => {
    setIscheck(true);
  };

  console.log(isCheck);

  const handleRadio = (value: string) => {
    setRadio(value);
  };
  console.log(radio);

  return (
    <div className="card">
      <Success showSuccess ={showSuccess}  />
      <h2>Contact Us</h2>
      <div className="name">
        <label htmlFor="" className="flex-column fName">
          First Name <span className="star">*</span>
          <input
            type="text"
            value={fName}
            onChange={(el) => {
              setfName(el.target.value);
            }}
            className={`fName ${
              isSubmitted && fName === "" ? "border-red" : " "
            }`}
          />
          <p
            className={`last-name color ${
              isSubmitted && fName === "" ? " " : " hidden "
            }`}
          >
            This field is required
          </p>
        </label>
        <label htmlFor="" className="flex-column lName">
          Last Name <span className="star">*</span>
          <input
            type="text"
            value={lName}
            onChange={(el) => {
              setlName(el.target.value);
            }}
            className={`lNameV ${
              isSubmitted && lName === "" ? "border-red" : " "
            }`}
          />
          <p
            className={`last-name color ${
              isSubmitted && lName === "" ? "" : "hidden"
            } `}
          >
            This field is required
          </p>
        </label>
      </div>
      <label htmlFor="" className="flex-column">
        Email Address <span className="star">*</span>
        <input
          type="email"
          value={email}
          onChange={(el) => {
            setEmail(el.target.value);
          }}
          className={`emailV ${
            isSubmitted && !email.endsWith("@gmail.com") ? "border-red" : ""
          }`}
        />
        <p
          className={`email color ${
            isSubmitted && !email.endsWith("@gmail.com") ? " " : " hidden"
          }`}
        >
          Please enter a valid email address
        </p>
      </label>

      <label htmlFor="" className="flex-column ">
        Query Type <span className="star">*</span>
        <div className="radios">
          <label
            className={`radio-button ${
              isSubmitted && radio === "" ? "border-red" : ""
            }`}
          >
            <input
              type="radio"
              name="example-radio"
              className="radioCheck"
              value="general"
              checked={radio === "general"}
              onChange={(e) => handleRadio(e.target.value)}
            />
            <span className="radio radio1"></span>
            General Enquiry
          </label>

          <label
            className={`radio-button ${
              isSubmitted && radio === "" ? "border-red" : ""
            }`}
          >
            <input
              type="radio"
              name="example-radio"
              className="radioCheck"
              value="support"
              checked={radio === "support"}
              onChange={(e) => handleRadio(e.target.value)}
            />
            <span className="radio radio2"></span>
            Support Request
          </label>
        </div>
        <p className={isSubmitted && radio === "" ? "color" : "hidden"}>
          This field is required
        </p>
      </label>

      <label htmlFor="" className="flex-column">
        Message <span className="star">*</span>
        <textarea
          name="message"
          className={`mssg ${
            isSubmitted && message === "" ? "border-red" : ""
          }`}
          value={message}
          onChange={(el) => {
            setMessage(el.target.value);
          }}
        ></textarea>
        <p
          className={`message color ${
            isSubmitted && message === "" ? "" : "hidden"
          }`}
        >
          This field is required
        </p>
      </label>

      <div>
        <label htmlFor="" className="check">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={handleCheck}
          />
          I hereby consent to being contacted by the team{" "}
          <span className="star">*</span>
        </label>
        <p className={`check color ${isSubmitted && !isCheck ? "" : "hidden"}`}>
          To submit this form, please consent to being contacted
        </p>
      </div>

      <input type="submit" value="Submit" className="submit" onClick={submit} />
    </div>
  );
}

export default App;
