import { css } from "@emotion/react";
import { mq } from "./AppStyle";
export const AddformStyle = {
  backdropBox: css`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(100px);
  `,
  container: css`
    left: 25%;
    width: 50%;
    background-color: #576a66e6;
    font-family: "Montserrat", sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    border-radius: 10px;
    box-shadow: 0 0.9rem 0.7rem 0.1rem #0a0303;
    top: 120px;
    ${mq[3]} {
      width: 95%;
      left: 10px;
    }
    ${mq[1]} {
      width: 98%;
      left: 1px;
      transition: all 1s ease-in;
    }
  `,
  Box: css`
    margin: 1px;
    width: 100%;
  `,
  FormContainer: css`
    width:100%;
    height:100%,  
    position: relative;
    gap:2rem;
    justify-content:center;
    ${mq[3]} {
      gap:1rem;
    }
    ${mq[1]} {
      width: 98%;
      left: 0.1px;
    }
     `,

  InputBox: css`
    width: 90%;
    height: 100%;
    padding: 4px;
    label {
      margin: 5px;
    }
    input {
      width: 90%;
      height: 38px;
      outline: none;
      border: none;
      font-family: "Montserrat", sans-serif;
    }
    input:focus {
      outline: #a3eafa;
      // border-color: #a3eafa80;
      border: none;
      box-shadow: 0rem 0rem 0.1rem 0.1rem #a3eafa80;
    }
    select {
      width: 90%;
      height: 38px;
      outline: none;
      border: none;
      font-family: "Montserrat", sans-serif;
    }
    option {
      padding: 10px;
      margin: 10px;
    }
    select:focus {
      outline: #a3eafa;
      border: none;
      box-shadow: 0rem 0rem 0.1rem 0.1rem #a3eafa80;
    }
    ${mq[3]} {
      input {
        width: 95%;
        left: 10px;
      }
    }
    ${mq[1]} {
      input {
        width: 95%;
        left: 1px;
      }
    }
  `,

  ButtonBox: css`
    margin: 10px;
    display: flex;
    gap: 3rem;
    button {
      width: 130px;
      cursor: pointer;
    }
    #btn1:hover {
      background-color: #11c3ea;
    }
    #btn1:disabled {
      opacity: 0.4;
      background-color: #11c3ea;
    }
    #btn2:hover {
      background-color: #f90707;
      word-break: break-all;
    }
    ${mq[3]} {
      margin: 5px;
      gap: 1rem;
      button {
        width: 130px;
      }
    }
    ${mq[1]} {
      margin: 1px;
      gap: 0.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  audioBox: css`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    label {
      display: flex;
      flex-direction: column;
    }
    #AudioImg {
      width: 50%;
      background-color: #576a66e6;
    }
  `,
};
