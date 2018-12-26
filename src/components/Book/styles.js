import styled from 'styled-components';

export const BookCell = styled.div`
  width: 96.2%;
  height: 64px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 25px 35px -20px rgba(25, 25, 25, 0.07);
  display: flex;
  padding: 0 24px;
  margin-bottom: 24px;
  &::last-of-type {
    margin-bottom: 0;
  }
  justify-content: flex-start;
  align-items: center;
`;