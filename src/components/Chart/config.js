export const BUFFERING_SERIES = 'BUFFERING_SERIES'
export const NET_SPEED_SERIES = 'NET_SPEED_SERIES'
export const VIDEO_RATE_SERIES = 'VIDEO_RATE_SERIES'
export const BUFFERED_TIME_SERIES = 'BUFFERED_TIME_SERIES'


export default {
  chart: {
    animation: {
      duration: 200
    }
  },
  title: {
    text: 'Video stats'
  },
  subtitle: {
    text: 'Useful video stats monitoring'
  },
  xAxis: {
    pointStart: Date.now(),
    type: 'datetime'
  },
  yAxis: [
    {
      title: {
        text: 'Net Speed, kb/s'
      },
    },
    {
      title: {
        text: 'Time, seconds',
      },
      opposite: true
    },
    {
      title: {
        text: 'Buffering on/off'
      },
      visible: false,
      max: 1,
      min: 0
    }
  ],
  plotOptions: {
    series: {
        marker: {
            enabled: false
        }
    }
  },
  series: [
    {
      name: 'Net Speed, kb/s',
      type: 'spline',
      id: NET_SPEED_SERIES,
      yAxis: 0,
      color: '#455a64',
      zIndex: 2,
    },
    {
      name: 'Video rate, kb/s',
      type: 'spline',
      id: VIDEO_RATE_SERIES,
      color: '#1565c0',
      yAxis: 0,
      zIndex: 2,
    },
    {
      name: 'Buffered time, s',
      type: 'areaspline',
      id: BUFFERED_TIME_SERIES,
      color: '#fff59d',
      yAxis: 1,
      zIndex: 0,
    },
    {
      name: 'Buffering',
      type: 'area',
      color: '#b3e5fc',
      step: true,
      yAxis: 2,
      id: BUFFERING_SERIES,
      zIndex: 1,
    }
  ]
}