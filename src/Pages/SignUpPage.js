import React, {useState, useEffect} from 'react';
import { useLocation ,useNavigate,Link} from 'react-router-dom';
import axios from 'axios';



function SignUpPage(props) {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [weak_algorithm, setWeak_algorithm] = useState("")
    const [university, setUniversity] = useState("")

    const location = useLocation();
    const navigate = useNavigate();

    const [changeColor, setChangeColor] = useState(false)
    const handleClick = () =>{
        setChangeColor(!changeColor)
    }

    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
      };
    const onClickConfirmButton = async () =>{
        const data = { 
            username : username,
            id: id,
            password: password,
            university: university
        };
        console.log(data);
        try {
            // axios를 이용해 POST 요청을 보내는 코드
            const response = await axios.post('http://172.10.9.15:80/signup/', data);
            if(response.data.status === 'success'){
                navigate('/home');
                alert('로그인에 성공했습니다.')
            }
            else{
                alert('이미 있는 아이디입니다.')
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
                회원가입을 
                <br/>
                진행해주세요
            </div>
            <div className='contentWrap'>
                <div className='inputTitle'> 이름을 입력해주세요 </div>
                <div className='inputWrap'>
                    <input 
                        type = "text"
                        className='input' 
                        placeholder='이황근'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}>
                    </input>
                </div>
                <div className='errorMessageWrap'>
                    {id.length>0 &&(
                        <div>올바른 아이디를 입력해주세요.</div>)
                    }
                    
                </div>

                <div style ={{marginTop: "26px"}}className='inputTitle'> ID를 입력해주세요 </div>
                <div className='inputWrap'>
                    <input 
                        type = "text"
                        className='input'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.'
                        value = {id}
                        onChange={(e)=>setId(e.target.value)}>
                    </input>
                </div>
                
                <div style ={{marginTop: "26px"}} className='inputTitle'> 비밀번호를 입력해주세요 </div>
                <div className='inputWrap'>
                    <input 
                        type = "password"
                        className='input' 
                        placeholder='test'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}>
                    </input>
                </div>
                
                <div class="form-group" style={{marginTop: "26px"}}>
                <label for="exampleSelect1" class="form-label mt-4">당신의 학교를 선택하세요</label>
                <select 
                    class="form-select" 
                    id="exampleSelect1"
                    value={university}
                    onChange={handleUniversityChange}
                    style={{ height: "55px" }}
                >
                    <option>성균관대학교</option>
                    <option>숙명여자대학교</option>
                    <option>KAIST</option>
                    <option>고려대학교</option>
                    <option>한양대학교</option>
                    <option>UNIST</option>
                    <option>부산대학교</option>
                </select>
                <div style={{display:'flex', flexDirection:'row'}}>
                <p className="text-body-secondary" style = {{marginTop : '10px'}}>  이미 계정이 있으신가요? </p>
                <Link to="/signin"><p className="text-body-secondary" style = {{marginTop : '10px', marginLeft : '10px'}}>  Sign In </p></Link>
                </div>
                </div>

                
            </div>
            <div>
                <button className="bottomButton" onClick={onClickConfirmButton}  >SIGN UP</button>

            </div>

        </div>
    );
}

export default SignUpPage;