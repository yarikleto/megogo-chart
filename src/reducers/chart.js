import { CHART_PUSH_DATA } from 'constants/actions/chart'

const INITIAL_STATE = {
  data: []
}

const chart = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHART_PUSH_DATA:
      return {
        ...state,
        data: state.data.concat(payload)
      }
    default:
      return state
  }
}

export default chart
