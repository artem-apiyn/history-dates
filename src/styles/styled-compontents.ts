import styled from "styled-components";

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #94a3b8;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
`;
export const Circle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  margin: 100px auto 0 auto;
  width: 380px;
  height: 380px;
  border: 2px solid rgba(180, 188, 204, 0.2);
  border-radius: 50%;
`;

export const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
`;

export const DatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 15px 0;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;


export const NavButtonInSlider = styled.button<{ disabled?: boolean }>`
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border: 0;
  z-index: 10;
  transition: opacity 0.3s;
  width: 40px;
  height: 40px;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
