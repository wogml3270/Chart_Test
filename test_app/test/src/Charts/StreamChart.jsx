import * as React from 'react'
import { ResponsiveStream } from '@nivo/stream'

const StreamChart = ({ data, ...props }) => {

  const handle = {
    streamClick: (data) => {
        console.log(data);
    },

    legendClick: (data) => {
        console.log(data);
    },
  };

  return (
    <div style={{ 
      width: '534px', 
      height: '300px', 
      margin: '0 auto', 
      }}>
      <ResponsiveStream
            {...props}
          data={data}
          keys={[
              'Raoul',
              'Josiane',
              'Marcel',
              'René',
              'Paul',
              'Jacques'
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: 36
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendOffset: -40
          }}
          enableGridX={true}
          enableGridY={false}
          offsetType="silhouette"
          colors={{ scheme: 'nivo' }}
          fillOpacity={0.85}
          borderColor={{ theme: 'background' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#2c998f',
                  size: 4,
                  padding: 2,
                  stagger: true
              },
              {
                  id: 'squares',
                  type: 'patternSquares',
                  background: 'inherit',
                  color: '#e4c912',
                  size: 6,
                  padding: 2,
                  stagger: true
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'Paul'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'Marcel'
                  },
                  id: 'squares'
              }
          ]}
          dotSize={8}
          dotColor={{ from: 'color' }}
          dotBorderWidth={2}
          dotBorderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      0.7
                  ]
              ]
          }}
          onClick={handle.streamClick}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 100,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: '#999999',
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000000'
                          }
                      }
                  ],
                  onClick : handle.legendClick,
              }
          ]}
      />
    </div>
  )
}

export default StreamChart