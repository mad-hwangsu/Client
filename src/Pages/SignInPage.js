import React, {useState, useEffect} from 'react';
import { useLocation ,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
  }
function SignInPage(props) {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idValid, setIdValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const handleUsername = e => {
        setId(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if(regex.test(id)){
            setIdValid(true);
        }       
        else {
            setIdValid(false);
        }

    }
    const handleInputPassword = e => {
        setPassword(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(password)){
            setPasswordValid(true);
        }       
        else {
            setPasswordValid(false);
        }
    }

    useEffect(() => {
        if(idValid && passwordValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    },[idValid,passwordValid])
    const onClickConfirmButton = async () =>{
        const data = { 
            id: id,
            password: password,
        };

        try {
            // axios를 이용해 POST 요청을 보내는 코드
            const response = await axios.post('http://172.10.9.15:80/login/', data);
            if(response.data.status === 'success'){
                
                window.id = id;
                console.log(window.id);
                navigate('/home');
                alert('로그인에 성공했습니다.')
            }
            else{
                alert('실패')
            }
            // result를 활용한 코드 작성. 예: 로그인 성공/실패에 따른 처리 등
            console.log(response.data);
        } catch (error) {
            console.error('Failed to load data', error);
        }

        

    }
    
    return (
        <div className='page'>
            <div className='titleWrap'>
                아이디와 비밀번호를 
                <br/>
                입력해주세요
            </div>
            <div className='contentWrap'>
                <div className='inputTitle'> ID를 입력해주세요 </div>
                <div className='inputWrap'>
                    <input 
                        type = "text"
                        className='input' 
                        placeholder='test'
                        value={id}
                        onChange={handleUsername}>
                    </input>
                </div>
                <div className='errorMessageWrap'>
                    {!idValid && id.length>0 &&(
                        <div>올바른 아이디를 입력해주세요.</div>)
                    }
                    
                </div>

                <div style ={{marginTop: "26px"}}className='inputTitle'> 비밀번호를 입력해주세요 </div>
                <div className='inputWrap'>
                    <input 
                        type = "password"
                        className='input'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.'
                        value = {password}
                        onChange={handleInputPassword}>
                    </input>
                </div>
                <div className='errorMessageWrap'>
                {!passwordValid && password.length>0 &&(
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>)
                    }
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                <p className="text-body-secondary" style = {{marginTop : '10px'}}>  계정이 없으신가요? </p>
                <Link to="/signup"><p className="text-body-secondary" style = {{marginTop : '10px', marginLeft : '10px'}}>  Sign up </p></Link>
                </div>
            </div>
            <div>
                <button className="bottomButton" onClick={onClickConfirmButton} >SIGN IN</button>

            </div>

        </div>
    );
}

export default SignInPage;