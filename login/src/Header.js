import React from 'react';
import { Link } from 'react-router-dom'
import { LoginState } from './Atom'
import { useRecoilValue } from 'recoil';



function Header() {
    const status = useRecoilValue(LoginState)
    console.log(status)
    const flag = (status ? '로그아웃' : '로그인')
    return (
        <div>
            <h1>네비바</h1>
            <Link to='/'>
                <h1>메인으로 이동</h1>
            </Link>

            <Link to='/login'>
                <h1 >{flag}</h1>
            </Link>
        </div>
    );
}

export default Header;