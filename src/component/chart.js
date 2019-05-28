import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import { table1, table2 } from './table'
import ChartLegend from './legend';
import { DefaultChartStyle } from './defaultChart.style';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table1,
      table2,
      getItem: this.getItem
    }
  }
  
  getItem = key => {
    let getInnerRadius = this.state.table1
      .filter(e => e.key === key)
      .reduce(i => i);
    getInnerRadius.innerRadius = 1.5
    getInnerRadius.active = true
    console.log(getInnerRadius)
    return this.setState(this.state)
  }


  render() {
    console.log(this.state)
    return(
      <DefaultChartStyle>
        <RadialChart
          data={this.state.table1}
          width={300}
          height={300}
          innerRadius={80}
          showLabels={true}
          padAngle={0.03}
          radius={120}
          labelsRadiusMultiplier={0.9}
          colorRange={this.state.table1.map(e => e.style)}
          // active={this.state.active}
          // onValueClick={e => this.getItem(e)}
        />
        <ChartLegend 
          state={this.state.table1}
          getItem={this.state.getItem}/>
      </DefaultChartStyle>
    )
  }
}

export default Chart