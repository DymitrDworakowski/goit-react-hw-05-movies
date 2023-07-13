import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  margin-right: 10px;
  outline: none;

  &:hover {
    color: blue;
    
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  

  &:hover {
    color: blue;
    
  }
`;
