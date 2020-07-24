import styled from "styled-components";

export default styled.div`
  height: 400px;
  width: 600px;
  max-width: 90%;
  box-shadow: 10px 10px 25px -8px rgba(0, 0, 0, 0.75);
  background: white;
  position: fixed;
  top: 200px;
  z-index: 100;
  left: 30%;
  padding: 30px;
  border-radius: 30px;
  transition: all 0.2s;
  transform: ${({ visibility }) => (visibility ? "translateY(0)" : "translateY(-200%)")};

  .form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
    }
  }
`;
