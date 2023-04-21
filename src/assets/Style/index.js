import { css } from "@emotion/react";
export const AppStyle = {
  box: css({
    width: `70%`,
    height: `100%`,
    backgroundColor: `green`,
    borderRadius: `10px`,
    boxShadow: `0.2rem 0.5rem 0.3rem 0.3rem #3C4039 `,
  }),
  card: css({
    display: `flex`,
    height: `100vh`,
    flexDirection: `column`,
    alignItems: `center`,
    padding: `8px`,
    backgroundColor: `#3C4039`,
  }),
};

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
    // margin: `5px`,
  }),
  Title: css({
    fontSize: `25px`,
    // margin: `4px`,
    color: `white`,
    fontFamily: `'Montserrat', sans-serif;
      `,
  }),
};
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
  }),
  list: css({
    width: `20%`,
  }),
};
export const MusicListStyle = {
  container: css({
    width: `100%`,
    height: `75.5%`,
    backgroundColor: `#151514`,
    overflow: `auto`,
    padding: `20px`,
    paddingTop: `2px`,
    display: `flex`,
    flexDirection: `column`,
    gap: `2rem`,
    borderBottomLeftRadius: `10px`,
    borderBottomRightRadius: `10px`,
  }),
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
  }),
  Text: css({
    wordBreak: `break-all`,
  }),
};
export const userOptionsStyle = {
  ContainerFlex: css({
    width: `100%`,
    height: `40px`,
    backgroundColor: `#3E5F57`,
    padding: `5px`,
    alignItems: `center`,
    justifyContent: `flex-end`,
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
