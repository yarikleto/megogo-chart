import React, { PureComponent } from 'react'
import Highcharts from 'highcharts'

import CONFIG, {
  BUFFERING_SERIES, NET_SPEED_SERIES, VIDEO_RATE_SERIES, BUFFERED_TIME_SERIES
} from './config'
import styles from './styles'

class Chart extends PureComponent {
  highchartsContainerRef = React.createRef()
  highchartsInstance = null

  bufferingSeries = null
  netSpeedSeries = null
  videoRateSeries = null
  bufferedTimeSeries = null

  componentDidMount() {
    this.highchartsInstance = Highcharts.chart(this.highchartsContainerRef.current, CONFIG)

    this.bufferingSeries = this.highchartsInstance.get(BUFFERING_SERIES)
    this.netSpeedSeries = this.highchartsInstance.get(NET_SPEED_SERIES)
    this.videoRateSeries = this.highchartsInstance.get(VIDEO_RATE_SERIES)
    this.bufferedTimeSeries = this.highchartsInstance.get(BUFFERED_TIME_SERIES)
  }

  update = ({ bufferedTimeSeries, bufferingSeries, netSpeedSeries, videoRateSeries }) => {

    this.bufferingSeries.setData(bufferingSeries, false)
    this.netSpeedSeries.setData(netSpeedSeries, false)
    this.videoRateSeries.setData(videoRateSeries, false)
    this.bufferedTimeSeries.setData(bufferedTimeSeries, false)
  
    this.highchartsInstance.redraw();
  }

  render() {
    return (
      <div className="chart">
        <div ref={this.highchartsContainerRef} />

        <style jsx>{styles}</style>
      </div>
    )
  }
}

export default Chart
