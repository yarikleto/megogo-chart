import { CHART_PUSH_DATA } from 'constants/actions/chart'

const INITIAL_STATE = {
  bufferingSeries: [],
  netSpeedSeries: [],
  videoRateSeries: [],
  bufferedTimeSeries: []
}

const chart = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHART_PUSH_DATA: {
      const { tickTime, buffering, netSpeed, videoRate, bufferedTime } = payload

      return {
        bufferingSeries: [...state.bufferingSeries, [tickTime, buffering]],
        netSpeedSeries: [...state.netSpeedSeries, [tickTime, netSpeed]],
        videoRateSeries: [...state.videoRateSeries, [tickTime, videoRate]],
        bufferedTimeSeries: [...state.bufferedTimeSeries, [tickTime, bufferedTime]]
      }
    }
    default:
      return state
  }
}

export default chart
