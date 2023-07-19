import React from 'react';
import { useNavigate } from 'react-router-dom';
function StartPage(props) {
    const navigate = useNavigate();
    const goToNext = () => {
        navigate('/signin'); // '/next-path'를 원하는 경로로 변경하세요.
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style = {{marginTop : '150px'}}>코딩 공부 혼자 하기 힘드셨죠?</h1>
            <h3 style = {{marginTop : '75px'}}>저희 Code Help가 도와드리겠습니다.</h3>
            <p style = {{marginTop : '60px'}}><img src='/image/start.jpg' width = '300px'/></p>
            <p className="text-body-secondary" style = {{marginTop : '40px'}}>  Are you ready to get started?</p>
            
            
            <button style = {{marginTop : '30px'}} type="button" className="btn btn-primary btn-lg" onClick={goToNext}>GO TO Code Helper</button>
        </div>
    );
}

export default StartPage;