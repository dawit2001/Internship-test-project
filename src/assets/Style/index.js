import { css } from "@emotion/react";

//breaking points for the screen
export const breakPoints = [320, 490, 640, 768, 936, 1024, 1280];

// mapping the breaking points to media quiery array
export const mq = breakPoints.map((bp) => `@media (max-width: ${bp}px)`);

// scrollbar style
const scrollbar = `-webkit-scrollbar-track `;

//style for the app component
export const AppStyle = {
  box: css({
    width: "70%",
    height: "100%",
    borderRadius: "10px",
    [mq[3]]: {
      width: `100%`,
      height: `100%`,
    },
  }),
  card: css({
    display: `flex`,
    height: `100vh`,
    flexDirection: `column`,
    alignItems: `center`,
    padding: `8px`,
    backgroundColor: `#3C4039`,
    [mq[3]]: {
      width: `100%`,
      padding: `0`,
    },
  }),
};
// style for header components
export const Headercss = {
  Header: css({
    width: `100%`,
    height: `70px`,
    backgroundColor: `#2A4E45`,
    display: `flex`,
    gap: 10,
    alignItems: `center`,
    borderStartStartRadius: `10px`,
    borderStartEndRadius: `10px`,
    padding: `4px`,
  }),
  Logo: css({
    width: `50px`,
    height: "50px",
  }),
  Title: css({
    fontSize: `25px`,
    color: `white`,
    fontFamily: `'Montserrat', sans-serif;
      `,
  }),
};
// style for musicinfobar component
export const BarStyle = {
  container: css({
    width: `100%`,
    height: `50px`,
    backgroundColor: `#3E5F57`,
    borderTop: `1px solid black`,
    display: `flex`,
    alignItems: `center`,
    borderBottom: `1px solid black`,
  }),
  lists: css({
    listStyle: `none`,
    width: `100%`,
    fontFamily: `'Montserrat', sans-serif`,
    color: `white`,
    gap: `3rem`,
    justifyContent: `flex-start`,
    [mq[2]]: {
      gap: `1rem`,
    },
  }),
  list: css({
    width: `20%`,
    [mq[2]]: {
      width: `20%`,
    },
  }),
  text: css({
    marginLeft: `120px`,
    [mq[2]]: {
      marginLeft: `100px`,
      wordBreak: `break-all`,
    },
    [mq[1]]: {
      marginLeft: `50px`,
      wordBreak: `break-all`,
    },
  }),
};

// style for useroption component
export const userOptionsStyle = {
  ContainerFlex: css({
    width: `100%`,
    height: `40px`,
    backgroundColor: `#3E5F57`,
    padding: `5px`,
    alignItems: `center`,
    justifyContent: `flex-end`,
  }),
  searchIcon: css({
    marginTop: "8px",
  }),
  Button: css({
    border: `none`,
    backgroundColor: `none`,
    background: `transparent`,
    cursor: `pointer`,
    fontFamily: `'Montserrat', sans-serif;
    `,
  }),
  InputFlex: css({
    backgroundColor: `white`,
    height: `25px`,
    borderRadius: `100px`,
    boxShadow: `0.1rem 0.1rem white`,
  }),
  Input: css({
    outline: `none`,
    border: `none`,
    backgroundColor: `white`,
    borderRadius: `900px`,
    fontFamily: `'Montserrat', sans-serif;
    `,
  }),
};

// styles for music list component
export const MusicListStyle = {
  container: css`
    width: 100%;
    height: 75.5%;
    background-color: #151514;
    overflow: auto;
    padding: 20px;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    borderbottomleftradius: 10px;
    borderbottomrightradius: 10px;

    &::-webkit-scrollbar {
      width: 6px;
      height: 10px;
      background-color: #151514;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3a4840;
      border-radius: 80px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ${mq[2]} {
      padding: 4px;
      gap: 1rem;
    },
    ${mq[2]} {
      padding: 4px;
      gap: 1rem;
    },
  `,

  List: css({
    width: `100%`,
    height: `60px`,
    display: `flex`,
    backgroundColor: `#3A4840`,
    padding: `5px`,
    gap: `3rem`,
    fontFamily: `'Montserrat', sans-serif`,
    color: `white`,
    alignItems: `center`,
    borderRadius: `10px`,
    position: `relative`,
    [mq[2]]: {
      padding: `4px`,
      gap: `1rem`,
    },
    [mq[1]]: {
      width: `100%`,
      height: `100px`,
    },
  }),
  text: css({
    wordBreak: `break-all`,
  }),
  Image: css({
    width: `50px`,
    height: `50px`,
    borderRadius: `5px`,
    backgroundColor: `blue`,
  }),
  ButtonContainer: css({
    width: `30px`,
    display: `flex`,
    height: `30px`,
    position: `absolute`,
    top: `0`,
    left: `90%`,
    gap: `1rem`,
    [mq[2]]: {
      position: `absolute`,
      top: `0`,
      left: `85%`,
      gap: `1rem`,
    },
    [mq[1]]: {
      position: `absolute`,
      top: `0`,
      left: `85%`,
      display: `flex`,
      flexDirection: "column",
      gap: `0`,
    },
  }),
  Text: css({
    wordBreak: `break-all`,
  }),
};
// styles for form components
export const AddformStyle = {
  backdropBox: css`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  `,
  container: css`
    left: 16%;
    width: 68%;
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
  ${mq[3]} {
    gap:1rem;
  }
  ${mq[1]} {
    width: 98%;
    left: 0.1px;
  }
   `,
  ImageBox: css`
    width: 20%;
    height: 100px;
    padding: 4px;
    background-color: #7a8885;
    border-radius: 10px;
    #image {
      width: 100%;
    }
    label {
      margin: 5px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    &:hover {
      background-color: #95a09e;
    }

    ${mq[3]} {
      width: 40%;
    }
    ${mq[1]} {
      width: 40%;
    }
  `,
  InputBox: css`
    width: 80%;
    height: 100%;
    padding: 4px;
    label {
      margin: 5px;
    }
    input {
      width: 60%;
      height: 35px;
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
