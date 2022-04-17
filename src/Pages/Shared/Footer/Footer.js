import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p>Copyright &copy; E-Tutor {year} </p>
        </div>
    );
};

export default Footer;