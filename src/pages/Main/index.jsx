import React from 'react'
import { useSelector } from 'react-redux'

import { pushData as pushDataAction } from 'actionCreators/chart'
import { useActions } from 'helpers/hooks'
import DefaultLayout from 'layouts/Default'
import { ShakaPlayer, Chart } from 'components'

const Main = () => {
  const chartData = useSelector(
    state => state.chart.data
  )
  const [pushData] = useActions([pushDataAction])

  return (
    <DefaultLayout>
      <ShakaPlayer
        uri='https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        onTickUpdate={pushData}
      />
      <Chart data={chartData} />
    </DefaultLayout>
  )
}

export default Main
