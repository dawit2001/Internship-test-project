import { css } from "@emotion/react";

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
  Button: css`
      border: none;
      background-color: none;
      background: transparent;
      cursor: pointer;
      fontFamily: 'Montserrat'; sans-serif;
      &:hover{
        background-color:#648B82;
        border-radius:120px;
      }
      `,

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
