import * as React from 'react';
import './App.css'
import Guide from './Components/uploadPage/mainRows/functional/Guide';
import Header from './Components/uploadPage/mainRows/classBased/header/Header';
import MainPanel from './Components/uploadPage/mainRows/classBased/mainPanel/mainPanel';
import GrandPanel from './Components/regularOrder/classBased/slide1/GandPanel';
import PictureSide from './Components/productPage/MainCols/PictureSideComponents/PictureSide';
import DataSide from './Components/productPage/MainCols/DataSideComponents/DataSide';

export default function App() {
  return (
    <div className='page-1 row'>
      {/* <div dir='rtl' className='col-9 container rounded bg-light row'>
        <PictureSide />
        <DataSide />
      </div> */}
      {/* <div className='container d-flex flex-column align-items-center w-100'>
        <Guide />
        <Header />
        <MainPanel />
      </div> */}
      <GrandPanel />
    </div>
  )
}
