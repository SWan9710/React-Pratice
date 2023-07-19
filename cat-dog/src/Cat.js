import React from 'react';
import './Cat.css'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { catImageState } from './Atom';

function Cat() {
    const [data, setData] = useRecoilState((catImageState))
    const click = () => {
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then((res) => {
                const CatImg = res.data[0].url
                setData([...data, CatImg])
            })
            .catch((err) => {
                console.error('Error', err)
            })
    }
    return (
        <div className='cat'>
            <div className="cat_header">
                    <h1>cat page</h1>
                    <button onClick={click}>가져오기</button>
            </div>

            <div className="cat_body">
                {data.map((CatImg, index) => (
                    <div className="cat_img" key={index}>
                        <p>{index+1}</p>
                        <img src={CatImg} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cat;