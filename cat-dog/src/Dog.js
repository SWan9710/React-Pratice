import React from 'react';
import './Dog.css'
import { useRecoilState } from 'recoil';
import axios from 'axios'
import { dogImageState } from './Atom';

function Dog() {

    const [data, setData] = useRecoilState((dogImageState))
    const click = () => {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((res) => {
                const DogImg = res.data.message
                setData([...data, DogImg])
            })
            .catch((err) => {
                console.error('Error', err)
            })
    }
    return (
        <div className='dog'>
            <div className="dog_header">
                    <h1>dog page</h1>
                    <button onClick={click}>가져오기</button>
            </div>

            <div className="dog_body">
                {data.map((DogImg, index) => (
                    <div className="dog_img" key={index}>
                        <p>{index+1}</p>
                        <img src={DogImg} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dog;