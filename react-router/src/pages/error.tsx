import styled from "styled-components";

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7fafc;
`;

const Message = styled.div`
  text-align: center;
  color: #e53e3e;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Error = () => {
  return (
    <ErrorMessage>
      <Message>Oops! This page does not exist.</Message>
    </ErrorMessage>
  );
};

export default Error;
