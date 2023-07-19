import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import AlertPage from './AlertPage';
import Layout from '../Layout/Layout';
import Header from '../Layout/Header';
import axios from 'axios';
import Modal from './Modal';
import HintModal from './HintModal';
import RefactoringModal from './RefactoringModal';
import { ThreeDots } from 'react-loader-spinner';


function ProblemPage(props) {
  
    const { level , p_id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [answer, setAnswer] = useState("");
    const [hint, setHint] = useState("");
    const [refactoringAnswer, setRefactoringAnswer] = useState("");
    const [hintValid, setHintValid] = useState(true);
    const [refactoringValid, setRefactoringValid] = useState(true);
    const [successAlert, setSuccessAlert] = useState(false); // 성공 알림 상태 추가
    const [errorAlert, setErrorAlert] = useState(false); // 에러 알림 상태 추가
    const [showAlert, setShowAlert] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRe, setIsOpenRe] = useState(false);
    const [isOpenHint, setIsOpenHint] = useState(false);
    const [condition, setCondition] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add this
    
    let type = "submit";
    const id = window.id
    useEffect(() => {
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const response = await axios.post('http://172.10.9.15:80/prob/', { p_id });

            console.log(response.data);
            setData(response.data);
            
            setIsLoading(false);
            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
        
      }, []); 


      const handleSubmit = async () => {
        try {
            type = "submit";
            
          const response = await axios.post('http://172.10.9.15:80/submit/', {p_id, answer, id,type});
          console.log(response.data);
          setShowAlert(true);
          if(response.data.status === "success"){
            setIsOpen(true);
            setRefactoringValid(false);
            setCondition(false);
          }
          else{
            setIsOpen(true);
            setHintValid(false);
            setCondition(true);
          }
          
        } catch (error) {
          console.error(error);
        }
    };
    const handleRefactoring = async () => {
        try {
            type = "refactoring";
            setIsLoading(true);
            console.log(refactoringAnswer);
          const response = await axios.post('http://172.10.9.15:80/submit/', {p_id, answer, id,type});
          //console.log(response.data.content);
          const currentRefactoringAnswer = response.data.content;
          setRefactoringAnswer(response.data.content);
          setIsOpenRe(true);
          navigate(`/level/${level}/${p_id}/refactoring`,{ state: { data,currentRefactoringAnswer,answer }});
          // You can update the state or perform any action based on the response
        } catch (error) {
          console.error(error);
        }
    };

    const handleHint = async () => {
        try {
            type = "hint";
          const response = await axios.post('http://172.10.9.15:80/submit/', {p_id, answer, id,type});
          setHint(response.data.content);
          setIsOpenHint(true);
          console.log(response.data);
          // You can update the state or perform any action based on the response
        } catch (error) {
          console.error(error);
        }
    }
    console.log(refactoringAnswer);
    console.log(data);
     return (
        
            isLoading ? (
          // If isLoading is true, show loading spinner
          <div style={{ 
           
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' // 변경: 전체 뷰포트의 높이를 차지하도록 변경 
             
          }}>
            <ThreeDots color="#00BFFF" height={80} width={80}  />
          </div>
        ) : (
            <>
            <Header />
            {isOpen && (<Modal
                open={isOpen}
                condition={condition}
                onClose={() => {
                setIsOpen(false);
                }}
            />)}
            {isOpenHint && (<HintModal
                open={isOpenHint}
                hint={hint}
                onClose={() => {
                setIsOpenHint(false);
                }}
            />)}
            {isOpenRe && (<RefactoringModal
                open={isOpenRe}
                refactoring={refactoringAnswer}
                onClose={() => {
                setIsOpenRe(false);
                }}
            />)}

            <div className="problem_page">
                <div className="problem_area">
                    <div className="problem_title">{data.prob_name}</div>
                    <div className="provlem_content">{data.prob_desc}</div>
                    <div className="io_example_area">
                        <div className="problem_input">{data.prob_input}</div>
                        <br />
                    </div>
                </div>
                <div className="midline"></div>
                <div className='answer_section'>
                <div className='answer_title'>
                    <button type="button" className="btn btn-primary my-button btn2">{p_id} 번 문제</button>
                    <div className="button-group">
                        <button disabled={refactoringValid} className="btn btn-primary submit-button" onClick={handleRefactoring}>Refactor</button>
                        <button disabled={hintValid} className="btn btn-primary submit-button" onClick={handleHint}>Hint</button>
                        <button className="btn btn-primary submit-button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                
                    <div className="answer_area">
                        <textarea className="answer_input" value={answer} onChange={e => setAnswer(e.target.value)} />
                    </div>

                </div>
                
            </div>
            </>
        )
        
       
    );
}

export default ProblemPage;