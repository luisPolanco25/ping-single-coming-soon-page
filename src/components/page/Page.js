import React from 'react';
import { SubscriptionForm } from '../subscription/SubscriptionForm';
import logo from '../../assets/logo.svg';
import dashboard from '../../assets/illustration-dashboard.png';
import './page.css';

export const Page = () => {
    return (
        <main>
            <img src={logo} alt="Logo" id="logo" />
            <h1>We are launching <span>soon!</span></h1>
            <h2>Subscribe and get notified</h2>

            <SubscriptionForm />

            <img src={dashboard} alt="Dashboard" id="dashboard" />

            <div id="social-media">
                <button aria-label="Facebook button"><i className="fab fa-facebook-f"></i></button>
                <button aria-label="Twitter button"><i className="fab fa-twitter"></i></button>
                <button aria-label="Instagram button"><i className="fab fa-instagram"></i></button>
            </div>
            <p>&copy; Copyright Ping. All rights reserved.</p>
        </main>
    )
}
