import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

import { pushData as pushDataAction } from 'actionCreators/chart'
import { useActions } from 'helpers/hooks'
import DefaultLayout from 'layouts/Default'
import { ShakaPlayer, Chart } from 'components'

const Main = () => {
  const chartRef = useRef(null)
  const chartData = useSelector(state => state.chart)
  const [pushData] = useActions([pushDataAction])

  useEffect(() => {
    chartRef.current.update(chartData)
  }, [chartData])

  return (
    <DefaultLayout>
      <ShakaPlayer
        uri='https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
        onTickUpdate={pushData}
      />
      <Chart ref={chartRef} data={chartData} />
    </DefaultLayout>
  )
}

export default Main
