import React, { MutableRefObject, useRef } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  noDivider?: boolean;
}

const Footer: React.FC<Props> = ({noDivider}: Props): JSX.Element => {
  const reCaptchaRef = useRef<ReCAPTCHA>() as MutableRefObject<ReCAPTCHA>;

  type FormValues = {
    captcha: string;
    email: string;
    message: string;
  }

  const { register, handleSubmit, setValue, formState: { errors }, reset: resetForm } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({email, message, captcha}: FormValues): void => {
    const serviceId = 'service_41rxfni', templateId = 'template_lkudgz6', publicKey = 'FM9c9meJTDfqqGXQ3';
    emailjs.send(
      serviceId, templateId,
      {reply_email: email, message, "g-recaptcha-response": captcha},
      publicKey,
    ).then((response) => {
      if(response.status === 200) {
        alert("Success! I'll get back to you ASAP.")
        resetForm();
        if(reCaptchaRef.current) reCaptchaRef.current.reset();
      } else {
        alert("Failed! " + response.text)
      }
    }, ( error ) => {
      alert("Failed! " + error.text)
    })
  }

  return <div className="footer-container">
    {!noDivider 
      ? <div id="hline" style={{width: "80%"}}/>
      : <div/>
    }
    <div className="footer-content">
      <div>
        <h4>Contact Me:</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="footer-form">
        <input 
          placeholder="Email"
          className={"footer-input " + (errors?.email ? "error" : "")} 
          {...register("email", {
            required: 'This field is required.',
            pattern: {value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: 'Invalid email.'},
          })}
        />
        {errors.email && <p className="form-error">{errors?.email?.message}</p>}
        <textarea 
          className={"footer-input message " + (errors?.message ? "error" : "")} 
          placeholder="Message"
          {...register("message", {required: 'This field is required.'})}
        />
        {errors.message && <p className="form-error">{errors?.message?.message}</p>}
        <ReCAPTCHA
          sitekey="6LctD2ogAAAAAMoXtzQK7uV2_2Yee0xOBDN-6wbp"
          ref={reCaptchaRef}
          onChange={(value: any): void => setValue('captcha', value)}
          theme="dark"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
}

export default Footer;