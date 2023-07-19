import React, {useState} from 'react';
import { useLocation ,Link} from 'react-router-dom';
import axios from 'axios';

function Register(props) {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    let original_id = 111
    let original_pw = 111
    const location = useLocation();

    const handleInputID = e => {
        setID(e.target.value);
    }

    const handleInputPassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = { 
            username: ID,
            password: Password,
        };

        try {
            // axios를 이용해 POST 요청을 보내는 코드
            const response = await axios.post('http://172.10.9.15:80/login/', data);
        
            // result를 활용한 코드 작성. 예: 로그인 성공/실패에 따른 처리 등
            console.log(response.data);
        } catch (error) {
            console.error('Failed to load data', error);
        }
    }

    return (
        <div>
            <div>
                <h1>Login Page</h1>
            </div>
            <h1>ID : {ID} </h1>
            <h1>Password : {Password} </h1>
            <form onSubmit={handleSubmit}>
                <h2>Test</h2>
                <input
                    name="ID"
                    value={ID}
                    placeholder="아이디"
                    onChange={handleInputID}
                />
                <input
                    name="Password"
                    value={Password}
                    placeholder="비밀번호"
                    onChange={handleInputPassword}
                />
                <button type="submit">Submit</button>
            </form>
            <Link to="/signup">회원가입</Link> {}
        </div>
    );
}

export default Register;
