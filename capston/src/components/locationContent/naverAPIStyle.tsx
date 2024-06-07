// NaverSearchStyles.ts
import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
`;

export const AutocompleteResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
`;

export const AutocompleteItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Result = styled.div`
  padding: 8px;
  border-top: 1px solid #ddd;
  margin-top: 10px;
`;
