import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    text-decoration: underline;
    border-color: black;
  }
`;
