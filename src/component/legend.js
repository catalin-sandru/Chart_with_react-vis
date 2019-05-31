import React from 'react'
import { LegendStyle } from './legend.style';

const ChartLegend = ({state, toogleHighlightOn}) => {

  return(
    <div>
        {state.map(({label, angle, style, key}) => {
          return(
            <LegendStyle color={style} key={key}>
              <ul>
                <li>
                  <p onClick={() => 
                    toogleHighlightOn(key)
                  }>
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
      </div>
    )
}
    
export default ChartLegend