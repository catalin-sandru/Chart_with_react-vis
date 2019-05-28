import styled from 'styled-components'

export const LegendStyle = styled.div`
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