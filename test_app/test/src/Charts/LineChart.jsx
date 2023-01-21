import * as React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = ({ data, ...props }) => {

  const handle = {
    LineClick: (data) => {
        console.log(data);
    },

    legendClick: (data) => {
        console.log(data);
    },
  };

  return(
    <div style={{ 
      width: '534px', 
      height: '300px', 
      margin: '0 auto', 
      }}>
      <ResponsiveLine
        {...props}
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
        xScale={{ type: 'point' }}
        enableGridX={false}
        colors={["#5E81F4"]}
        enableArea={true}
        areaOpacity={0.3}
        enableSlices={false}
        crosshairType="cross"
        yScale={{
            type: 'linear',
            stacked: true,
        }}
        theme={{
          grid: {
            line: {
              stroke: "#EEEEEE",
              strokeWidth: 3,
              strokeDasharray: "4 4"
            },
          },
        }}
        yFormat={(v) => `${v}명`}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 15,
            tickRotation: 0,
        }}
        axisLeft={{
            orient: 'left',
            tickValues: 5,
            tickSize: 5,
            tickPadding: 25,
            tickRotation: 0,
        }}
        pointSize={7.5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
    </div>
  );
}

export default LineChart;