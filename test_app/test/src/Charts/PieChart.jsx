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
    <>
      <div style={{ 
        width: '457px', 
        height: '300px', 
        margin: '0 auto',
        position: 'relative',
        }}>
          <div style={{
            color: '#000000',
            fontSize: '16px',
            fontWeight: 'bold',
            position: 'absolute',
            top: 10,
            left: 20,
            }}>
              성별 통계
          </div>
        <ResponsivePie
            {...props}
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.65}
            padAngle={3}
            cornerRadius={5}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [ 'darker', 0 ]
                ]
            }}
            theme={{
              legends: {
                text: {
                  fontSize: 10,
                  fill: '#000000',
                },
              },
            }}
            colors={['#5E81F4', '#FF8282']}
            arcLinkLabelsSkipAngle={false}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLabelsSkipAngle={99999}
            onClick={handle.pieClick}

            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: -120,
                    translateY: 65,
                    itemsSpacing: 5,
                    itemWidth: 80,
                    itemHeight: 25,
                    itemTextColor: '#000000',
                    itemBackground: '#EEEEEE',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 16,
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
    </>
  );
};

export default PieChart;