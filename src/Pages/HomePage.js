import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Layout from '../Layout/Layout'
import { ThreeDots } from 'react-loader-spinner';

function HomePage(props) {
    
    const onClickConfirmButton = async () =>{
        
        

    }

    return (
        <div style={{ position: 'relative', height: '100vh'}}>
            {/* <div style={{ position: 'absolute', top: '0%', left: '5%' , textAlign:'center', paddingTop : '32px'}}>
                <h1 >자신의 수준에 맞게 Level을 선택해보아요</h1>
            </div> */}
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '100%', position: 'absolute', top: '5%', left: '5%'}}>
            <div className="card-body">
                <h4 className="card-title">자신의 수준에 맞게 Level을 선택해보아요</h4>
                <p className="card-text">각 level별로 약 50개 가량의 문제가 준비 되어있습니다. 자신의 실력에 맞게 level을 정해 학습하세요.</p>
            </div>
            </div>

            <div style={{ position: 'absolute', top: '30%', left: '5%' }}>
                <Link to={{pathname: "/level/1", state: { data: 1 }}}>
                    <img src="image/story_1.png" alt="Level 1" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 1</p>
            </div>
            
            <div style={{ position: 'absolute', top: '27%', left: '12%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '27%', left: '19%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>

            <div style={{ position: 'absolute', top: '30%', left: '30%'}}>
                <Link to="/level/2">
                    <img src="image/story_1.png" alt="Level 2" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 2</p>
            </div>

            <div style={{ position: 'absolute', top: '27%', left: '37%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '27%', left: '44%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '30%', left: '55%' }}>
                <Link to="/level/3">
                    <img src="image/story_1.png" alt="Level 3" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'> Level 3</p>
            </div>

            <div className = "image-container" style={{ position: 'absolute', top: '32%', left: '62%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>

            <div className = "image-container" style={{ position: 'absolute', top: '40%', left: '69%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '80%' }}>
                <Link to="/level/4">
                    <img src="image/story_1.png" alt="Level 4" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 4</p>
            </div>
            
            <div className = "image-container2" style={{ position: 'absolute', top: '63%', left: '62%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>

            <div className = "image-container2" style={{ position: 'absolute', top: '57%', left: '69%' }}>
                    <img src="image/bear.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>

            <div style={{ position: 'absolute', top: '70%', left: '55%'}}>
                <Link to="/level/5">
                    <img src="image/story_1.png" alt="Level 5" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 5</p>
            </div>
            
            <div style={{ position: 'absolute', top: '67%', left: '44%' }}>
                    <img src="image/bear_rotate.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '67%', left: '37%' }}>
                    <img src="image/bear_rotate.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>

            <div style={{ position: 'absolute', top: '67%', left: '18%' }}>
                    <img src="image/bear_rotate.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            <div style={{ position: 'absolute', top: '67%', left: '11%' }}>
                    <img src="image/bear_rotate.png" alt="bear1" style={{ width: '150px', height: '150px' }} />
            </div>
            

            <div style={{ position: 'absolute', top: '70%', left: '30%'}}>
                <Link to="/level/6">
                    <img src="image/story_1.png" alt="Level 6" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 6</p>
            </div>

            <div style={{ position: 'absolute', top: '70%', left: '5%' }}>
                <Link to="/level/7">
                    <img src="image/story_1.png" alt="Level 7" style={{ width: '80px', height: '80px' }} />
                </Link>
                <p className = 'level'>Level 7</p>
            </div>
        </div>
    );
}

export default HomePage;