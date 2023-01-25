import React, { useState } from 'react'
import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data, ...props }) => {

  const [state, setState] = useState(0);

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
          <div 
            onClick={() => setState(0)}
            style={{
              color: '#000000',
              fontSize: '16px',
              fontWeight: 'bold',
              position: 'absolute',
              top: 10,
              left: 20,
              zIndex: 999,
              cursor: 'pointer',
            }}>
              성별 통계
          </div>
          <div 
            onClick={() => setState(1)}
            style={{
              color: '#000000',
              fontSize: '16px',
              fontWeight: 'bold',
              position: 'absolute',
              top: 10,
              left: 100,
              zIndex: 999,
              cursor: 'pointer',
            }}>
              연령별 통계
          </div>
          {state === 0 &&
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
                    itemHeight: 30,
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
          }
          {state === 1 &&
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
            colors={['#FF8282', '#FFD37C', '#95FFB2', '#69F6FF', '#95B2FF']}
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
                  translateX: 0,
                  translateY: 65,
                  itemsSpacing: 5,
                  itemWidth: 80,
                  itemHeight: 30,
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
        }
                
      </div>
    </>
  );
};

export default PieChart;