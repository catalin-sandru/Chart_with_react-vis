import React from 'react'
import { LegendStyle, ButtonWrapper, LegendButtonsWrapper } from './legend.style';

const ChartLegend = ({data, toogleHighlightOn, resetTable, loadSecondTable}) => {
  return(
    <LegendStyle>
        {data.map(({label, angle, style, key}) => {
          return(
            <LegendButtonsWrapper color={style} key={key}>
              <p onClick={() => toogleHighlightOn(key)}>
                {label}: {angle}
              </p>
            </LegendButtonsWrapper>
          )
        })}
        <ButtonWrapper>
          <button onClick={resetTable}>Table 1</button>
          <button onClick={loadSecondTable}>Table 2</button>
        </ButtonWrapper>
      </LegendStyle>
    )
}
    
export default ChartLegend