import React, { useContext, useRef } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import { ErrorContext } from '../../context/ErrorContext';
import { useForm } from '../../hooks/useForm';
import './subscription.css';

export const SubscriptionForm = () => {
    
    const emailRef = useRef();
    
    const [values, handleInputChange] = useForm({
        email: ''
    });
    const {isEmailCorrect, setIsEmailCorrect} = useContext(ErrorContext);

    const {email} = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validator.isEmail(email)) {
            setIsEmailCorrect(false);
            emailRef.current.focus();
        } else {
            emailRef.current.value = '';
            return Swal.fire('Subscribed', 'From now on, you will receive our notifications', 'success');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="email"
                aria-label="Email address"
                placeholder="Your email address..."
                value={email}
                onChange={handleInputChange}
                autoComplete="off"
                ref={emailRef}
                style={(!isEmailCorrect) ? {border: '1px solid hsl(354, 100%, 66%)'} : null}
            />

            <p 
                id="error-text"
                style={(isEmailCorrect) ? {display: 'none'} : null}
            >
                Please provide a valid email address
            </p>
            
            <button type="submit" id="submit">Notify me</button>
        </form>
    )
}
