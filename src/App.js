import React from 'react';
import logo from './logo.svg';
import './App.css';
import pic from "./pic.jpg";
import pic2 from "./pic2.jpg"

function App() {
  return (
    <div className="App">
      <div className="h">hello</div>
      <div className="link"><a href="https://www.youtube.com/" target="_blank">click to open youtube</a></div>
      <div className="scrollable-ctn">
        <div className="scrollable-text">
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
          filler text filler text filler text
        </div>
      </div>
      <div className="table">
        <table className ="table">
          {/* <caption>Monthly savings</caption> */}
          <tr className="tr">
            <th className="th">Month</th>
            <th className="th">Savings</th>
            <th className="th">expenditure</th>
          </tr>
          <tr className="tr">
            <td className="td">January</td>
            <td className="td">$100</td>
            <td className="td">$40</td>
          </tr>
          <tr className="tr">
            <td className="td">February</td>
            <td className="td">$50</td>
            <td className="td"> $40</td>
          </tr>
          <tr className="tr">
            <td className="td">March</td>
            <td className="td">$100</td>
            <td className="td">$40</td>
          </tr>
          <tr className="tr">
            <td className="td">April</td>
            <td className="td">$50</td>
            <td className="td">$40</td>
          </tr>
        </table>
      </div>
      <div className="img-ctn">
          <div className="img1"> <img className="img" src={pic}/></div>
          <div className="img2"> <img className="img" src={pic2}/></div>
      </div>
    </div>
  );
}

export default App;
