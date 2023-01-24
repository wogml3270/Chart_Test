import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './Charts/BarChart';
import { BarData } from './Charts/Data/BarData';

import PieChart from './Charts/PieChart';
import { PieData } from './Charts/Data/PieData';
import { PieData2 } from './Charts/Data/PieData2';

import LevelChart from './Charts/LevelChart';
import { LevelData1, LevelData2 } from './Charts/Data/LevelData';

import LineChart from './Charts/LineChart';
import { LineData } from './Charts/Data/LineData';

function App() {

  const [state, setState] = useState(false);

  useEffect(() => {
    // PieData value 합계
    const sum1 = PieData.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);

    // LevelData1 value 합계
    const sum2 = LevelData1.reduce((acc, cur) => {
      return acc + cur.value;
    }
    , 0);

    // LevelData2 value 합계
    const sum3 = LevelData2.reduce((acc, cur) => {
      return acc + cur.value;
    }
    , 0);


    // PieData value를 합계의 퍼센트 값으로 변경
    PieData.forEach((d) => {
        d.value = Math.round((d.value / sum1) * 100);
      }
    );

    // LevelData1 value를 합계의 퍼센트 값으로 변경
    LevelData1.forEach((d) => {
        d.value = Math.round((d.value / sum2) * 100);
      }
    );

    // LevelData2 value를 합계의 퍼센트 값으로 변경
    LevelData2.forEach((d) => {
        d.value = Math.round((d.value / sum3) * 100);
      }
    );


  }, []);



  return (
    <>
      <h1>React Charts Test App</h1>

      <div className="container">
        <div className="main">
          <div className="top">
            <LineChart data={LineData} />
            <PieChart valueFormat={(v) => `${v}%`} data={state ? PieData : PieData2 } />
          </div>
          <div className="bottom">
            <BarChart valueFormat={(v) => `${v}명`} data={BarData} />
          </div>
        </div>

        <div className="right">
          <LevelChart valueFormat={(v) => `${v}%`} data={LevelData1} type='급' />
          <LevelChart valueFormat={(v) => `${v}%`} data={LevelData2} type="품" />
        </div>
      </div>
    </>
  );
}

export default App;
