import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <Link to='/'>
                    <div className='header_cat'>
                        cat
                    </div>
                </Link>

                <Link to='/dog'>
                    <div className='header_dog'>
                        dog
                    </div>
                </Link>
            </div>

            <div className="header_right">
                <h1>네비바</h1>
            </div>
        </div>
    );
}

export default Header;