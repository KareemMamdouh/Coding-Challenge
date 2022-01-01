import styled from 'styled-components';
export const Container = styled.div`
  width:1200px;
  margin:0 auto;
  background: none;
`;
export const Select = styled.select`
    border:1px solid #ccc;
    padding:5px 10px;
    width:250px;
    margin:20px 15px;
    border-radius:2px;
`;
export const ButtonReset = styled.button`
  text-decoration: underline;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const CardsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: start;
`;
export const Card = styled.div`
  width: 25%;
  overflow: hidden;
  margin: 10px auto;
  padding: 10px;
`;
export const CardBody = styled.div`
  border: 1px solid #ddd;
  border-radius:5px;
  box-shadow:0 2px 8px 1px #ddd;
  padding: 10px;
  h4{
    font-weight: 600;
    margin:0;
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;
  };
  p{
      color:#888;
      font-size:12px;
      height:60px;
      overflow:hidden; 
      font-style: italic;
  };
  .card-footer{
    display: flex;
    
    div{
        padding:0 10px 0 0 ;
        font-size:13px;
        font-weight: 600;
        font-style: italic;
        display: flex;
        img{
            width:18px;
            height:18px;
            margin:0 5px 0 0 ;
        };
    };
  };
`;
