import React from "react";
import styled from "styled-components";

function RefactoringModal({ onClose, refactoring}) {
    console.log(refactoring)
  const handleClose = () => {
    onClose?.();
  };
  return (
    
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
          <Contents>
            자신의 정답을 기준으로 코드를 최적화 시켜줍니다.
              <>
                <h1>GPT-3.5가 제안해준 Refactoring Code입니다.</h1>
                <h1>{refactoring}</h1>
              </>
            
            <Button onClick={handleClose}>Close</Button>
          </Contents>
        </ModalWrap>
      </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  //background: #5d5d5d;
  width: fit-content;
  margin: 50px 80px;
  text-align: center; // 중앙 정렬 스타일 추가
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
const Button = styled.button`
  font-size: 14px;
  width: 150px;
  padding: 10px 20px;
  border: none;
  background-color: #8bc2d3;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default RefactoringModal;