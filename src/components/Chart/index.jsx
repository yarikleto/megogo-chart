import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Legend, ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts'

import styles from './styles'

const formatYAxis = data => data + ' kb'
const formatTooltipValue = value => `${value}kb/s`

const Chart = props => {
  const { data } = props

  return (
    <div className="chart">
      <ResponsiveContainer width='100%' aspect={16 / 9}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tickSize={4}/>
          <YAxis tickFormatter={formatYAxis}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Area
            name="Video rate"
            type="monotone"
            dataKey="videoRate"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            formatter={formatTooltipValue}
          />
          <Area
            name="Net speed"
            formatter={formatTooltipValue}
            type="monotone"
            dataKey="netSpeed"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <style jsx>{styles}</style>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default memo(Chart)
