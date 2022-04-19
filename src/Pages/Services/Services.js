import React, { useEffect, useState } from 'react';
import Service from '../../Pages/Shared/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className='course-bx-holder'>
            <div className='container'>
            <h2 className='text-center text-primary my-5 fw-bold'>My Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;