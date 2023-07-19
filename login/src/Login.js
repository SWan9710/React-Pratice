import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { LoginState } from './Atom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useRecoilState(LoginState)
    const navigate = useNavigate()


    const Login = () => {
        if (!email) {
            return alert('ID를 입력하세요')
        } else if (!password) {
            return alert('PassWord를 입력하세요')
        } else {
            let body = {
                email, password
            }
            setData(body)
            navigate('/')
        }
    }
    return (
        <div>
            <h1>로그인페이지</h1>
            <input type="text" placeholder='이메일' id='id' value={email} onChange={(event) => setEmail(event.target.value)}/>
            <br />
            <input type="password" placeholder='비밀번호' value={password} onChange={(event) => setPassword(event.target.value)}/>
            
            <br />
            <button onClick={Login}>로그인하기</button>
            <button>회원가입</button>
        </div>
    );
}

export default Login;