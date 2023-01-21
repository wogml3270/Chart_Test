import * as React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({data, ...props}) => {

    const handle = {
      barClick: (data) => {
          console.log(data);
      },

      legendClick: (data) => {
          console.log(data);
      },
    };

    return (
        // chart height 값이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <div style={{ 
          width: '1011px', 
          height: '400px', 
          margin: '0 auto', 
          }}>
            <ResponsiveBar
            {...props}
                /**
                 * chart에 사용될 데이터
                 */
                data={data}
                /**
                 * chart에 보여질 데이터 key (측정되는 값)
                 */
                keys={['value']}
                /**
                 * keys들을 그룹화하는 index key (분류하는 값)
                 */
                indexBy="region"
                /**
                 * chart margin
                 */
                margin={{ top: 50, right: 50, bottom: 50, left: 80 }}
                /**
                 * chart padding (bar간 간격)
                 */
                padding={0.3}
                /**
                 * chart 색상
                 */
                colors={['#5E81F4']} // 커스텀하여 사용할 때
                // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
                /**
                 * color 적용 방식
                 */
                colorBy="region" // 색상을 keys 요소들에 각각 적용
                // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
                theme={{
                    /**
                     * label style (bar에 표현되는 글씨)
                     */
                    // labels: {
                    //     text: {
                    //         fontSize: 14,
                    //         fill: '#000000',
                    //     },
                    // },
                    /**
                     * legend style (default로 우측 하단에 있는 색상별 key 표시)
                     */
                    legends: {
                        text: {
                            fontSize: 14,
                            fill: '#000000',
                        },
                    },
                    axis: {
                        /**
                         * axis legend style (bottom, left에 있는 글씨)
                         */
                        // legend: {
                        //     text: {
                        //         fontSize: 18,
                        //         fill: '#000000',
                        //     },
                        // },
                        /**
                         * axis ticks style (bottom, left에 있는 값)
                         */
                        ticks: {
                            text: {
                                fontSize: 14,
                                fill: '#000000',
                            },
                        },
                        domain: {
                            line: {
                                stroke: '#000000',
                                strokeWidth: 1,
                            },
                        },
                    },
                    grid: {
                        line: {
                          stroke: "#EEEEEE",
                          strokeWidth: 3,
                          strokeDasharray: "4 4"
                        },
                    },
                }}
                /**
                 * axis bottom 설정
                 */
                axisBottom={{
                    tickSize: 3, // 값 설명하기 위해 튀어나오는 점 크기
                    tickPadding: 5, // tick padding
                    tickRotation: 0, // tick 기울기
                    legend: false, // bottom 글씨
                    legendPosition: 'middle', // 글씨 위치
                    legendOffset: 40, // 글씨와 chart간 간격
                }}
                /**
                 * axis left 설정
                 */
                axisLeft={{
                    // format: (value) => `${value} 명`, // 값에 단위 붙이기
                    tickValues: 5, // tick 개수
                    tickSize: 3, // 값 설명하기 위해 튀어나오는 점 크기
                    tickPadding: 10, // tick padding
                    tickRotation: 0, // tick 기울기
                    //legend: 'price', // left 글씨
                    legendPosition: 'middle', // 글씨 위치
                    legendOffset: -60, // 글씨와 chart간 간격
                }}
                /**
                 * label 안보이게 할 기준 width
                 */
                // labelSkipWidth={36}
                /**
                 * label 안보이게 할 기준 height
                 */
                labelSkipHeight={9999}
                /**
                 * bar 클릭 이벤트
                 */
                onClick={handle.barClick}
                /**
                 * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
                 */
                borderRadius={5} // legend border radius
                enableGridX={false} // x축 grid line
                enableGridY={true} // y축 grid line
                // legends={[
                //     {
                //         dataFrom: 'keys', // 보일 데이터 형태
                //         anchor: 'top-right', // 위치
                //         direction: 'row', // item 그려지는 방향
                //         justify: false, // 글씨, 색상간 간격 justify 적용 여부
                //         translateX: 0, // chart와 X 간격
                //         translateY: -30, // chart와 Y 간격
                //         itemsSpacing: 0, // item간 간격
                //         itemWidth: 100, // item width
                //         itemHeight: 0, // item height
                //         itemDirection: 'left-to-right', // item 내부에 그려지는 방향
                //         itemOpacity: 0.85, // item opacity
                //         symbolSize: 20, // symbol (색상 표기) 크기
                //         symbolShape: 'circle',
                //         effects: [
                //             {
                //                 // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                //                 on: 'hover',
                //                 style: {
                //                     itemOpacity: 0.5,
                //                 },
                //             },
                //         ],
                //         onClick: handle.legendClick, // legend 클릭 이벤트
                //     },
                // ]}
            />
        </div>
    );
};

export default BarChart;