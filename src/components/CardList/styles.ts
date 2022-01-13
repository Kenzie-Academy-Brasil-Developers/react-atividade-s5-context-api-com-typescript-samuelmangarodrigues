import styled from "styled-components";

export const Img = styled.img`
  width: 100px;
  height: 200px;
  margin: 10px;
`;
export const Cointainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #efe9e9;
  padding: 10px;
  margin: 40px;
  height: 340px;
`;
export const CardItems = styled.li`
  width: 200px;
  font-size: 13px;
  color: black;
  font-family: "Roboto Condensed", sans-serif;
`;
export const Button = styled.button`
  margin: 10px;
  background-color: white;
  color: gray;
  border: 1px solid black;
  border-radius: 4px;
  width: 180px;
  height: 30px;
  :hover {
    border: 1px solid lightblue;
    transition: 0.5s;
    color: lightblue;
  }
`;
