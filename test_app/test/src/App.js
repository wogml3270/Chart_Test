import React from 'react';
import './App.css';
import BarChart from './Charts/BarChart';
import { BarData } from './Charts/Data/BarData';

import PieChart from './Charts/PieChart';
import { PieData } from './Charts/Data/PieData';

import LevelChart from './Charts/LevelChart';
import { LevelData1, LevelData2 } from './Charts/Data/LevelData';

import LineChart from './Charts/LineChart';
import { LineData } from './Charts/Data/LineData';

function App() {

  return (
    <>
      <h1>React Charts Test App</h1>

      <div className="container">
        <div className="main">
          <div className="top">
            <LineChart valueFormat={(v) => `${v}명`} data={LineData} />
            <PieChart valueFormat={(v) => `${v}명`} data={PieData} />
          </div>
          <div className="bottom">
            <BarChart valueFormat={(v) => `${v}명`} data={BarData} />
          </div>
        </div>

        <div className="right">
          <LevelChart valueFormat={(v) => `${v}명`} data={LevelData1} type='급' />
          <LevelChart valueFormat={(v) => `${v}명`} data={LevelData2} type="품" />
        </div>
      </div>
    </>
  );
}

export default App;
