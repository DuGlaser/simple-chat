import React from "react";
import styled from "@emotion/styled";

export const P = styled.p({
  fontSize: "24px",
  fontWeight: "bold",
  color: "#f00",
  textAlign: "center",
  "&:after,&:before": {
    content: '""',
    display: "inline-block",
    width: "50px",
    height: "2px",
    margin: "0 8px",
    backgroundColor: "#f00",
    verticalAlign: "middle"
  }
});

const SideListTitle = () => {
  return <P>Your Friends</P>;
};

export default SideListTitle;
