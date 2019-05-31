import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import { table1, table2 } from './table'
import ChartLegend from './legend';
import { DefaultChartStyle } from './defaultChart.style';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      default: table1,
      table2,
      toogleHighlightOn: this.toogleHighlightOn,
      toogleHighlightOff:this.toogleHighlightOff
    }
  }

  toogleHighlightOn = key => {
    table1.forEach(i => i.innerRadius = 0);
    const newElement = table1.find(i => i.key === key);
    if (newElement) {
      newElement.innerRadius = 2;
    }

    return this.setState({
      default: [...table1]
    })
  }

  render() {
    console.log(this.state)
    return(
      <DefaultChartStyle>
        <RadialChart
          data={this.state.default}
          width={400}
          height={400}
          innerRadius={80}
          showLabels={true}
          padAngle={0.03}
          radius={120}
          labelsRadiusMultiplier={0.9}
          colorRange={this.state.default.map(e => e.style)}
        />
        <ChartLegend 
          state={table1}
          toogleHighlightOn={this.state.toogleHighlightOn}
        />
      </DefaultChartStyle>
    )
  }
}

export default Chart