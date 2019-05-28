import React from 'react'
import { LegendStyle } from './legend.style';

const ChartLegend = ({state, getItem}) => {

  return(
    <div>
        {state.map(({label, angle, style, key}) => {
          return(
            <LegendStyle color={style}>
              <ul>
                <li>
                  <p onClick={() => getItem(key)}>{label} : <span>{angle}</span></p>
                </li>
              </ul>
            </LegendStyle>
          )
        })}
      </div>
    )
}
    
export default ChartLegend