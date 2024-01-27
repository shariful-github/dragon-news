import React, { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import './style.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h6 className='fw-bold'>All Category</h6>
            <nav className='mt-4 ps-4'>
                {categories.map(category => 
                    <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className='text-decoration-none text-secondary d-block mb-4'
                    >
                        {category.name}
                    </NavLink>
                )}
            </nav>
        </div>
    );
};

export default LeftNav;