import { css } from "@emotion/react";

export const breakPoints = [320, 490, 640, 768, 936, 1024, 1280];

// mapping the breaking points to media quiery array
export const mq = breakPoints.map((bp) => `@media (max-width: ${bp}px)`);

export const AppStyle = {
  box: css({
    width: "80%",
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
