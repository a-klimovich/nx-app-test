import styled from 'styled-components';
import Button from './button/button';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui!</h1>
      <Button />
    </StyledUi>
  );
}

export default Ui;
