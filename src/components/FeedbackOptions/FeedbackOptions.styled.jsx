import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 1px solid gray;
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  :hover {
    background: #0000ffa3;
  }
  :active {
    background: blue;
  }
`;
