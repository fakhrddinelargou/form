import React from "react";

// import {  useEffect } from "react";
import Success from "./componentes/Success";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";


const schema = z.object({
  fName: z.string().min(6, "This field is required"),
  lName: z.string().min(6, "This field is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  radio: z.string().min(1, "This field is required"),
  isCheck: z.literal(true).refine((val) => val === true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

type FormEntry = z.infer<typeof schema>;



function App() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors , isSubmitting  },
  } = useForm<FormEntry>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormEntry> = async (data) => {
    try{
      await new Promise((resolve)=> setTimeout(resolve,3000))
      console.log(data);
      reset();
      throw new Error();
    }catch(error){
      setError("root",{
       message : "not complated"
      })
    }
  };
  // const [showSuccess, setShowSuccess] = useState(false);
  // useEffect(() => {
  //   if (showSuccess) {
  //     const timer = setTimeout(() => {
  //       setShowSuccess(false);
  //     }, 3000);

  //     return () => clearTimeout(timer); // Cleanup
  //   }
  // }, [showSuccess, setShowSuccess]);

  return (
    <div className="card">
    {isSubmitting &&   <Success />}
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label htmlFor="" className="flex-column fName">
            First Name <span className="star">*</span>
            <input
              {...register("fName")}
              type="text"
              className={`fName ${errors.fName ? "border-red" : ""}`}
            />
            {errors.fName && (
              <div className="red-text">{errors.fName.message}</div>
            )}
          </label>
          <label htmlFor="" className="flex-column lName">
            Last Name <span className="star">*</span>
            <input
                       {...register("lName")}
              type="text"
               className={`lName ${errors.lName ? "border-red" : ""}`}
            />
            {errors.lName && (
              <div className="red-text">{errors.lName.message}</div>
            )}
          </label>
        </div>
        <label htmlFor="" className="flex-column">
          Email Address <span className="star">*</span>
          <input
            {...register("email")}
            type="email"
             className={`email ${errors.email ? "border-red" : ""}`}
          />
          {errors.email && (
            <div className="red-text">{errors.email.message}</div>
          )}
        </label>

        <label htmlFor="" className="flex-column ">
          Query Type <span className="star">*</span>
          <div className="radios">
            <label className={`radio-button ${errors.radio ? "border-red" : ""}`} >
              <input
                {...register("radio")}
                type="radio"
                name="radio"
                className="radioCheck"
                value="general"
              />
              <span className="radio radio1"></span>
              General Enquiry
            </label>

            <label className={`radio-button ${errors.radio ? "border-red" : ""}`}>
              <input
                {...register("radio")}
                type="radio"
                name="radio"
                className="radioCheck"
                value="support"
              />
              <span className="radio radio2"></span>
              Support Request
            </label>
          </div>
          {errors.radio && (
            <div className="red-text">{errors.radio.message}</div>
          )}
        </label>

        <label htmlFor="" className="flex-column">
          Message <span className="star">*</span>
          <textarea
            {...register("message")}
            name="message"
            className={`mssg ${errors.message ? "border-red" : ""}`}
          ></textarea>
          {errors.message && (
            <div className="red-text">{errors.message.message}</div>
          )}
        </label>

        <div>
          <label htmlFor="" className="check">
            <input
              {...register("isCheck")}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            I hereby consent to being contacted by the team{" "}
            <span className="star">*</span>
          </label>
          {errors.isCheck && (
            <div className="red-text">{errors.isCheck.message}</div>
          )}
        </div>

         <button disabled={isSubmitting } type="submit"  className="submit" >
          {isSubmitting  ? "Loading..." : "Submit"}
          </button>  
      </form>
    </div>
  );
}

export default App;
