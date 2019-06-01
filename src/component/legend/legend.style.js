import styled from 'styled-components'

export const LegendStyle = styled.div`
  align-items: center;

  p {
    background: ${props => props.color.fill};
    color: #fff;
    font-size: 1rem;
    padding: 0.3rem;
    border: 1px solid grey;
    border-radius: 0.2rem;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 0.4rem;
    margin: 0.5rem 0;
    border-radius: 0.3rem;
    cursor: pointer;
    outline: none;
    background: rgba(185, 24, 33, 0.8);
    color: #fff;

    &:nth-last-of-type(1) {
      background: rgba(66, 194, 69, 0.8)
    }
  }

`