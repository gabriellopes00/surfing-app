import styled from 'styled-components'

export const GithubWrapper = styled.div`
  position: fixed;
  top: 0;
  border: 0;
  right: 0;
  z-index: 20;
`

export const SVGWrapper = styled.svg`
  fill: #499251;
  color: #e5e5e5;
  cursor: pointer;
  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    & .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`
