import styled from "styled-components";

const Wrapper = styled.div`
  .pie {
    background: #639;
    border-radius: 100%;
    height: calc(var(--size, 200) * 1px);
    position: relative;
    width: calc(var(--size, 200) * 1px);
  }
  .pie__segment {
    height: 100%;
    overflow: hidden;
    position: absolute;
    transform: translate(0, -50%) rotate(90deg) rotate(calc((45, 0) * 1deg));
    transform-origin: 50% 100%;
    width: 100%;
  }
  .pie__segment:before {
    background: #f00;
    content: "";
    height: 100%;
    position: absolute;
    transform: translate(0, 100%) rotate(calc((90, 45) * 1deg));
    transform-origin: 50% 0;
    width: 100%;
  }
`;
export default Wrapper;
