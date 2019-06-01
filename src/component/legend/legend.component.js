import React from 'react'
import { LegendStyle, ButtonWrapper } from './legend.style';

const ChartLegend = ({data, toogleHighlightOn, resetTable, loadSecondTable}) => {
  return(
    <div>
        {data.map(({label, angle, style, key}) => {
          return(
            <LegendStyle color={style} key={key}>
              <p onClick={() => toogleHighlightOn(key)}>
                {label} : 
                <span>
                  {angle}
                </span>
              </p>
            </LegendStyle>
          )
        })}
        <ButtonWrapper>
          <button onClick={resetTable}>Reset</button>
          <button onClick={loadSecondTable}>Get Data</button>
        </ButtonWrapper>
      </div>
    )
}
    
export default ChartLegend