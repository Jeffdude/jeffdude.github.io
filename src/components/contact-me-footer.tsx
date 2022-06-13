import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import ReCAPTCHA from "react-google-recaptcha";

const ContactMeFooter: React.FC<{}> = (): JSX.Element => {
  /*
  const [captcha, setCaptcha]: [boolean, (r: boolean) => void] = useState(false);
  const [email, setEmail]: [string, (s: string) => void] = useState('');
  const [message, setMessage]: [string, (s: string) => void] = useState('');
  */

  type FormValues = {
    captcha: boolean;
    email: string;
    message: string;
  }

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = ({email, message, captcha}: FormValues): void => {
    console.log({email, message, captcha})
  }

  return <div className="contact-me-footer-container">
    <div id="hline" style={{width: "50%"}}/>
    <div className="footer-content">
      <h4>Contact Me:</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          placeholder="Email"
          className={"footer-input " + errors.email ? "error" : ""} 
          {...register("email", {
            required: 'This field is required.',
            pattern: {value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, message: 'Invalid email.'},
          })}/>
        {errors.email && <p className="form-error">{errors?.email?.message}</p>}
        <input {...register("message", {required: 'This field is required.'})} placeholder="Message"/>
        {errors.message && <p className="form-error">{errors?.message?.message}</p>}
        <ReCAPTCHA
          sitekey="6LctD2ogAAAAAMoXtzQK7uV2_2Yee0xOBDN-6wbp"
          onChange={(value: any): void => setValue('captcha', !!value)}
        />
        <input type="submit"/>
      </form>
    </div>
  </div>
}

export default ContactMeFooter;