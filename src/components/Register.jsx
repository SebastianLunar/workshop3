import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import logo from '../assets/Logo1.png'
import icong from '../assets/google.png'
import iconf from '../assets/facebook.png'
import { Boton, SOCIAL } from '../styles/Global';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFacebook, loginGoogle } from '../redux/actions/actionLogin';
import { actionRegisterAsync, actionRegisterSync } from '../redux/actions/actionRegister';
import { Form as Formboot } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [result, setResult] = useState("");
    const [otp, setOtp] = useState("");

    function setCaptcha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }

    const handleSubmit = async (number) => {
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            const response = await setCaptcha(number);
            setResult(response);
            setFlag(true);
        } catch (err) {
            setError(err.message);
        }
    }

    const verifyNumber = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            navigate("/login")
        } catch (err) {
            setError(err.message);
        }
    };

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, 'Name too short').max(20).required("This field is required"),
        email: Yup.string().email('Should be example@mail.com').required("This field is required"),
        phone: Yup.string().min(10, 'Phone should be at least 10 digits long').max(20).required("This field is required"),
        country: Yup.string().min(3, 'This field should be at least 3 digits long').max(20).required("This field is required"),
        password: Yup.string().min(6, 'Password too short').max(20).required("This field is required")
    })

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "65px" }}>
                <img src={logo} alt="" />
                <div style={{ display: !flag ? "block" : "none" }}>
                    <h1>Sign Up</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            country: '',
                            password: '',
                            image: 'https://res.cloudinary.com/dd5yolnde/image/upload/v1656300664/buffalo-sprint3/user_fa0maw.png'
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            dispatch(actionRegisterAsync(values.name, values.email, values.phone, values.country, values.password, values.image),
                                handleSubmit(values.phone),
                            )
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field className="entrada" type="text" placeholder="Full name" name="name" style={{ marginBottom: "10px" }} />
                                {errors.name && touched.name ?
                                    (<div>{errors.name}</div>) : null}

                                <Field className="entrada" type="email" placeholder="Email" name="email" style={{ marginBottom: "10px" }} />
                                {errors.email && touched.email ?
                                    (<div>{errors.email}</div>) : null}

                                <Field className="entrada" type="tel" placeholder="Phone number" name="phone" style={{ marginBottom: "10px" }} />
                                {errors.phone && touched.phone ?
                                    (<div>{errors.phone}</div>) : null}
                                <div id="recaptcha-container" style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}></div>
                                <Field className="entrada" type="text" placeholder="Country" name="country" style={{ marginBottom: "10px" }} />
                                {errors.country && touched.country ?
                                    (<div>{errors.country}</div>) : null}
                                <Field className="entrada" type="password" placeholder="Create password" name="password" style={{ marginBottom: "54px" }} />
                                {errors.password && touched.password ?
                                    (<div>{errors.password}</div>) : null}
                                <Boton type='submit'>Sign Up</Boton>
                            </Form>
                        )}
                    </Formik>
                    <div>
                        <h4>OR Sign in with</h4>
                        <SOCIAL>
                            <img src={icong} alt="" onClick={() => dispatch(loginGoogle(), navigate('/measures'))} />
                            <img src={iconf} alt="" onClick={() => dispatch(loginFacebook(), navigate('/measures'))} />
                        </SOCIAL>
                    </div>
                </div>

                <div className="p-4 box" style={{ display: flag ? "block" : "none" }}>
                    <h1>Phone verification</h1>
                    <h3>Enter the six-digit code you received from SMS.</h3>
                    <Formboot onSubmit={verifyNumber}>
                        <Formboot.Group className="mb-3" controlId="formBasicOtp">
                            <Formboot.Control
                                type="otp"
                                placeholder="Enter Verification Code"
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </Formboot.Group>
                    </Formboot>
                </div>


            </div>
        </>
    );
};

export default Register;