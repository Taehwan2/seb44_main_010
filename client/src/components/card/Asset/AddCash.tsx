import styled from "styled-components";
import {useState} from "react";
import Cash from "../../../assets/Cash.svg";
import CashContainer from "../../../containers/CashContainer";

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 20vh;
  width: 8vw;
  border-radius: 3rem;
  box-shadow: 0px 4px 13px 0px rgb(0, 0, 0, 0.1);
  border: 1px solid #d9d9d9;
  padding: 3rem;
  margin: 5rem;
  cursor: pointer;
  &:hover {
    background-color: #ffce0b;
    color: #ffffff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
`;

const CashImg = styled.img`
  width: 10vw;
  height: 10vh;
`;
const Title = styled.div`
  font-size: 3rem;
`;

export default function AddCash() {
  const [modal, setModal] = useState(false);
  const [propertyType, setPropertyType] = useState("")

  const toggleModal = () => {
    setModal(!modal);
    setPropertyType("현금")
  };

  const closeModal = () => {
    setModal(false); // 모달 상태를 false로 업데이트하여 닫음
  };

  return (
    <Main onClick={toggleModal}>
      <CashImg src={Cash}></CashImg>
      <Title>현금 추가하기</Title>
      {modal && <CashContainer closeModal={closeModal} propertyType={propertyType}/>}
    </Main>
  );
}
