import React from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  noDivider?: boolean;
}

const Footer: React.FC<Props> = ({noDivider}: Props): JSX.Element => {
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
  console.log({errors})

  return <div className="footer-container">
    {!noDivider 
      ? <div id="hline" style={{width: "80%"}}/>
      : <div/>
    }
    <div className="footer-content">
      <div>
        <h4>Contact Me:</h4>
        <p>Blurb</p>
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
          onChange={(value: any): void => setValue('captcha', !!value)}
          theme="dark"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
}

export default Footer;