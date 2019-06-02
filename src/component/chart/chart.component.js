import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import { table1, table2 } from '../table'
import ChartLegend from '../legend/legend.component';
import { DefaultChartStyle } from './chart.style';

class Chart extends Component {
  state = {
    default: table1,
    data: [],
    toogleHighlightOn: this.toogleHighlightOn
  }

  componentDidMount() {
    this.resetTable()
  }

  toogleHighlightOn = key => {
    const data = this.state.data.map(
      item => item.key === key 
        ? {...item, innerRadius: 2} 
        : {...item, innerRadius: 0}
    )
    this.setState({ data })
  }

  resetTable = () => {
    this.setState({data: this.state.default})
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
    const { data } = this.state
    return(
      <DefaultChartStyle>
        <RadialChart
          data={data}
          width={400}
          height={400}
          innerRadius={80}
          showLabels={true}
          padAngle={0.03}
          radius={120}
          labelsRadiusMultiplier={0.9}
          animation={"wobbly"}
        />
        <ChartLegend 
          data={data}
          toogleHighlightOn={this.toogleHighlightOn}
          resetTable={() => this.resetTable()}
          loadSecondTable={() => this.loadSecondTable()}
        />
      </DefaultChartStyle>
    )
  }
}

export default Chart