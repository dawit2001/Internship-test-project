import { css } from "@emotion/react";
import { mq } from "./AppStyle";
export const MusicListStyle = {
  container: css`
      width: 100%;
      height: 75.5%;
      background-color: #151514;
      font-family:'Montserrat', sans-serif;
      overflow: auto;
      padding: 15px;
      padding-top: 2px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
    height: `90px`,
    display: `flex`,
    backgroundColor: `#3A4840`,
    padding: `5px`,
    gap: `2.5rem`,
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
      height: `350px`,
      flexDirection: `column`,
      justifyContent: `flex-start`,
      alignItems: `flex-start`,
    },
  }),

  Image: css({
    width: `130px`,
    height: `80px`,
    borderRadius: `5px`,
    backgroundColor: `blue`,
    [mq[1]]: {
      width: `90%`,
      height: `130px`,
    },
  }),
  ButtonContainer: css({
    width: `100px`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    position: `absolute`,
    top: `0`,
    left: `89%`,

    [mq[2]]: {
      position: `absolute`,
      top: `0`,
      left: `85%`,
      gap: `1rem`,
      width: `60px`,
    },
    [mq[1]]: {
      width: `50px`,
      position: `absolute`,
      top: `0`,
      left: `86%`,
      display: `flex`,
      flexDirection: "column",
      gap: `0`,
    },
  }),
  Text: css({
    width: `20%`,
    wordBreak: `break-all`,
    [mq[1]]: {
      width: `60%`,
      fontWeight: `800`,
      paddingLeft: `10px`,
    },
  }),
  Lists: css({
    display: "flex",
    flexDirection: "column",
    [mq[1]]: {
      display: "flex",
    },
  }),
  ListsTitle: css({
    display: "none",
    [mq[1]]: {
      display: "inline",
    },
  }),
  DateText: css({
    wordBreak: `break-all`,
    width: `25%`,
    marginRight: `100px`,
    [mq[2]]: {
      marginRight: `70px`,
    },
    [mq[1]]: {
      [mq[1]]: {
        width: `60%`,
        fontWeight: `800`,
        paddingLeft: `10px`,
      },
    },
  }),
  Loading: css`
            height:20px;
            font-size:20px;
            text-align: center;
            border-radius:5px;
            position:absolute;
            top:10px;
            left:80%;   
            display:flex;        
            justify-content:center; 
            color:#f5f6f7;  
            ${mq[1]} {
              position:absolute;
              top:50px;
              left:70%;
              font-size:18px;
              font-weight:600;
              color:#f5f6f7;  
            },    
            `,

  NoMusicAdded: css`
    width: 100%;
    height: 10%;
    margin-top: 15%;
    font-size: 30px;
    text-align: center;
    background-color: #3a4840d9;
    border-radius: 5px;
    justify-content: center;
    color: #f5f6f7;
  `,
};
