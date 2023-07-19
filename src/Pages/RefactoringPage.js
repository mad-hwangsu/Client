import React from 'react';
import Header from '../Layout/Header';
import { useLocation ,useParams} from 'react-router-dom';

function RefactoringPage(props) {
    const location = useLocation();
    const { level , p_id} = useParams();
  const data = location.state.data;  
  const answer = location.state.answer;
  const refactoringAnswer = location.state.currentRefactoringAnswer
  console.log(location.state);
    return (
        <div>
            <Header />
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
                    </div>

                    <div className="answer_areas">
                        <div className="answer_area">
                            <button type="button" class="btn btn-warning btn">Your Answer</button>
                            <textarea className="answer_input" value={answer} readOnly />
                        </div>
                        <div className="answer_area">
                            <button type="button" class="btn btn-danger btn">GPT-3.5 Refactoring Answer</button>
                            <textarea className="answer_input" value={refactoringAnswer} readOnly />
                    </div>
</div>

                </div>
                
            </div>
        </div>
    );
}

export default RefactoringPage;