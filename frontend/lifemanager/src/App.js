import React from 'react';
import './App.scss';
import MainHeader from './component/MainHeader';
import RecodeInput from './component/RecodeInput';
import RecodeList from './component/RecodeList';

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <RecodeInput></RecodeInput>
      <RecodeList></RecodeList>
    </div>
  );
}

export default App;
