import { css } from "@emotion/react";
import { mq } from "./AppStyle";

export const BarStyle = {
  container: css({
    width: `100%`,
    height: `50px`,
    backgroundColor: `#3E5F57`,
    borderTop: `1px solid black`,
    display: `flex`,
    alignItems: `center`,
    borderBottom: `1px solid black`,
    [mq[1]]: {
      display: "none",
    },
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
    marginLeft: `150px`,
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
