import React from "react";
import styled from "@emotion/styled";

const Div = styled.div({
  width: "80%",
  margin: "0 auto",
  display: "flex"
});
const Input = styled.input({
  whiteSpace: "normal",
  padding: " 10px",
  flexGrow: "1",
  border: "1px solid #d4d4d4",
  outline: "none",
  lineHeight: "1rem",
  "&:focus": { border: "1px solid #e53170", outline: "none" }
});

const SearchForm = props => {
  console.log(props);
  // TODO:low performance
  return (
    <Div>
      <Input
        onChange={e => {
          props.setUserName(e.target.value);
        }}
      />
    </Div>
  );
};

export default SearchForm;
