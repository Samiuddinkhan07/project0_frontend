import styled from "styled-components";

const HomePageLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fffae5;
    position: relative;
    z-index: 9;
    .header-section{
        border-bottom: 1px solid #000;
    }
    .page-body{
        width: 95%;
        margin: 0 auto;
    }
    `;

export default HomePageLayout

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  .form-wrapper {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #f1f1f1;
    padding: 15px 40px;
    border-radius: 10px;
    background-color: #fff;
    label {
      display: block;
      text-align: left;
    }
    input {
      width: 100%;
      outline: none;
      border: 1px solid #e8317e;
      margin: 12px 0px;
      padding: 8px;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 6px 10px;
      color: #fff;
      background-color: #e8317e;
      border: 1px solid #e8317e;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        opacity: 0.6;
      }
    }
    h1 {
      margin: 10px auto;
      text-align: center;
    }
    p {
      margin: 9px auto;
      width: 84%;
    }

    .err-msg {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        background-color: rgb(255, 15, 15, 0.7);
        padding: 5px 10px;
        margin: 10px 0px;
        border-radius: 4px;
        color: white;
      }
    }
  }
`;

