import React from 'react';
import './subscription.css';

export const SubscriptionForm = () => {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Your email address..."
                aria-label="Email address"
            />
            
            <button type="submit" id="submit">Notify me</button>
        </form>
    )
}
