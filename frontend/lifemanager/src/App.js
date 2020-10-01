import React from 'react';
import './App.scss';
import MainHeaderBar from './component/MainHeaderBar';
import RecodeInput from './component/RecodeInput';
import RecodeList from './component/RecodeList';

function App() {
  return (
    <div>
      <MainHeaderBar></MainHeaderBar>
      <RecodeInput></RecodeInput>
      <RecodeList></RecodeList>
    </div>
  );
}

export default App;
