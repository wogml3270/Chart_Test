import * as React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const LevelChart = ({data, type, ...props}) => {

    const handle = {
      barClick: (data) => {
          console.log(data);
      },

      legendClick: (data) => {
          console.log(data);
      },
    };
  if (type === '급') {
    return (
        // chart height 값이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
        <div style={{ 
          width: '381px', 
          height: '420px',
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
                layout="horizontal"

                keys={['value']}
                /**
                 * keys들을 그룹화하는 index key (분류하는 값)
                 */
                indexBy="level"
                /**
                 * chart margin
                 */
                margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
                /**
                 * chart padding (bar간 간격)
                 */
                padding={0.5}
                /**
                 * chart 색상
                 */
                colors={['#5E81F4']} // 커스텀하여 사용할 때
                // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
                /**
                 * color 적용 방식
                 */
                colorBy="id" // 색상을 keys 요소들에 각각 적용
                // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
                theme={{
                    /**
                     * label style (bar에 표현되는 글씨)
                     */
                    labels: {
                        text: {
                            fontSize: 16,
                            fill: '#000000',
                        },
                    },
                    /**
                     * legend style (default로 우측 하단에 있는 색상별 key 표시)
                     */
                    // legends: {
                    //     text: {
                    //         fontSize: 16,
                    //         fill: '#000000',
                    //     },
                    // },
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
                                fontSize: 16,
                                fill: '#000000',
                            },
                        },
                    },
                }}
                /**
                 * axis bottom 설정
                 */
                axisBottom={{
                    tickValues: 5, // tick 개수
                    tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
                    tickPadding: 5, // tick padding
                    tickRotation: 0, // tick 기울기
                    legend: false, // bottom 글씨
                    legendPosition: 'middle', // 글씨 위치
                    legendOffset: 20, // 글씨와 chart간 간격
                }}
                /**
                 * axis left 설정
                 */
                axisLeft={{
                    tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
                    tickPadding: 1, // tick padding
                    tickRotation: 0, // tick 기울기
                    legend: false, // left 글씨
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
                labelSkipWidth={9999}
                /**
                 * bar 클릭 이벤트
                 */
                onClick={handle.barClick}
                /**
                 * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
                 */
                borderRadius={5} // legend border radius
                enableGridX={false} // x축 grid line
                enableGridY={false} // y축 grid line
            />
        </div>
    );
  }
  if(type === '품') 
    return (
      // chart height 값이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
      <div style={{ 
        width: '381px', 
        height: '277px',
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
              layout="horizontal"

              keys={['value']}
              /**
               * keys들을 그룹화하는 index key (분류하는 값)
               */
              indexBy="level"
              /**
               * chart margin
               */
              margin={{ top: 50, right: 50, bottom: 50, left: 70 }}
              /**
               * chart padding (bar간 간격)
               */
              padding={0.5}
              /**
               * chart 색상
               */
              colors={['#5E81F4']} // 커스텀하여 사용할 때
              // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
              /**
               * color 적용 방식
               */
              colorBy="id" // 색상을 keys 요소들에 각각 적용
              // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
              theme={{
                  /**
                   * label style (bar에 표현되는 글씨)
                   */
                  labels: {
                      text: {
                          fontSize: 14,
                          fill: '#000000',
                      },
                  },
                  /**
                   * legend style (default로 우측 하단에 있는 색상별 key 표시)
                   */
                  legends: {
                      text: {
                          fontSize: 16,
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
                              fontSize: 16,
                              fontWeight: 600,
                              fill: '#000000',
                          },
                      },
                  },
              }}
              /**
               * axis bottom 설정
               */
              axisBottom={{
                tickValues: 5, // tick 개수
                tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
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
                  tickSize: 0, // 값 설명하기 위해 튀어나오는 점 크기
                  tickPadding: 1, // tick padding
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
              labelSkipWidth={9999}
              /**
               * bar 클릭 이벤트
               */
              onClick={handle.barClick}
              /**
               * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
               */
              borderRadius={5} // legend border radius
              enableGridX={false} // x축 grid line
              enableGridY={false} // y축 grid line
              
          />
      </div>
    )
};

export default LevelChart;