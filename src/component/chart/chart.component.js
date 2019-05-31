import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import { table1, table2 } from '../table'
import ChartLegend from '../legend/legend.component';
import { DefaultChartStyle } from './chart.style';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      default: table1,
      data: [],
      toogleHighlightOn: this.toogleHighlightOn,
      toogleHighlightOff:this.toogleHighlightOff
    }
  }

  toogleHighlightOn = key => {
    this.state.default&&this.state.data.forEach(i => i.innerRadius = 0);
    const newElement = this.state.default&&this.state.data.find(i => i.key === key);
    if (newElement) {
      newElement.innerRadius = 2;
    }
    return this.setState({
      default: [...this.state.default],
      data: [...this.state.data]
    })
  }

  resetTable = () => {
    table1.forEach(i => i.innerRadius = 0)
    return this.setState({
      default: [...table1],
      data: []
    })
  }

  loadSecondTable = () => {
    const setTable = table1.map(item => {
      const findItem = table2.find(n => n.label === item.label)
      const sum = findItem.angle + item.angle
      return {
        ...item, angle: sum
      }
    })
     return this.setState({
       data: [...setTable]
     })
  }

  render() {
    console.log(this.state)
    return(
      <DefaultChartStyle>
        <RadialChart
          data={this.state.data.length > 1 ? this.state.data : this.state.default}
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
          state={this.state.default}
          toogleHighlightOn={this.state.toogleHighlightOn}
          resetTable={() => this.resetTable()}
          loadSecondTable={() => this.loadSecondTable()}
        />
      </DefaultChartStyle>
    )
  }
}

export default Chart