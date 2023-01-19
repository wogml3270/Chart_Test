import * as React from 'react'
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data, ...props }) => {

  const handle = {
    pieClick: (data) => {
        console.log(data);
    },

    legendClick: (data) => {
        console.log(data);
    },
  };

  return (
    <div style={{ 
      width: '457px', 
      height: '300px', 
      margin: '0 auto',
      }}>
      <ResponsivePie
          {...props}
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={3}
          cornerRadius={5}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
              from: 'color',
              modifiers: [
                  [ 'darker', 0.5 ]
              ]
          }}
          colors={['#5E81F4', '#FF8282']}
          // arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLabelsSkipAngle={10}
          axisBottom={{
            format: (v) => `${Math.abs(v)}%`,
          }}
          // arcLabelsTextColor={{
          //     from: 'color',
          //     modifiers: [
          //         [ 'darker', 4 ]
          //     ]
          // }}
          // defs={[
          //     {
          //         id: 'dots',
          //         type: 'patternDots',
          //         background: 'inherit',
          //         color: 'rgba(255, 255, 255, 0.3)',
          //         size: 4,
          //         padding: 1,
          //         stagger: true
          //     },
          //     {
          //         id: 'lines',
          //         type: 'patternLines',
          //         background: 'inherit',
          //         color: 'rgba(255, 255, 255, 0.3)',
          //         rotation: -45,
          //         lineWidth: 6,
          //         spacing: 10
          //     }
          // ]}
          onClick={handle.pieClick}

          legends={[
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: -120,
                  translateY: 65,
                  itemsSpacing: 5,
                  itemWidth: 70,
                  itemHeight: 18,
                  itemTextColor: '#000000',
                  itemBackground: '#EEEEEE',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 0.75
                          }
                      }
                  ],
                  onClick: handle.legendClick,
              },
          ]}
      />
    </div>
  );
};

export default PieChart;