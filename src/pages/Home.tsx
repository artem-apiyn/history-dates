import React from 'react';
import {HistoryDates} from '../components/history-dates';

export const Home: React.FC = () => { 
  return (
    <div className='home'>
      <div className = 'title-history'>
          <div />
          <h1><b>Исторические <br />даты</b></h1>
      </div>
      <HistoryDates />
    </div>
  )
}

