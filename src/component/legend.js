import React from 'react'
import { LegendStyle } from './legend.style';

const ChartLegend = ({state, toogleHighlightOn, resetTable, loadSecondTable}) => {

  return(
    <div>
        {state.map(({label, angle, style, key}) => {
          return(
            <LegendStyle color={style} key={key}>
              <ul>
                <li>
                  <p onClick={() => toogleHighlightOn(key)}>
                    {label} : 
                    <span>
                      {angle}
                    </span>
                  </p>
                </li>
              </ul>
            </LegendStyle>
          )
        })}
        <div>
          <button onClick={resetTable}>Reset</button>
          <button onClick={loadSecondTable}>Get Data</button>
        </div>
      </div>
    )
}
    
export default ChartLegend