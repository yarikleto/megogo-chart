import { CHART_PUSH_DATA } from 'constants/actions/chart'

export const pushData = data => ({
  type: CHART_PUSH_DATA,
  payload: data
})

