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
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        enableGridX={false}
        colors={["#5E81F4"]}
        enableArea={true}
        // areaOpacity={1}
        enableSlices={false}
        crosshairType="cross"
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            // orient: 'bottom',
            // tickSize: 5,
            // tickPadding: 5,
            // tickRotation: 0,
            // legend: 'Dates',
            // legendOffset: 36,
            // legendPosition: 'middle'
        }}
        axisLeft={{
            // orient: 'left',
            // tickSize: 5,
            // tickPadding: 5,
            // tickRotation: 0,
            // legend: 'Rates',
            // legendOffset: -40,
            // legendPosition: 'middle'
        }}
        pointSize={7.5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
    </div>
  );
}

export default LineChart;