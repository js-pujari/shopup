import React, { useState } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import Header from './components/Header';
import Calendar from './components/Calendar'
import Attendance from './components/Attendance';
import PerformanceBlock from './components/PerformanceBlock';


const items = ['University', 'Dashboard', 'Calendar', 'Teachers', 'Course', 'Attendance', 'Assignment'];



function App() {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="main">
      <Sidebar items={items} selectedItem={selectedItem} onSelect={(e) => setSelectedItem(e)} />
      <div className="container">
        <Header title={selectedItem} />
        <br />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex',flexDirection: 'column', width: '330px'}}>
            <Attendance />
            <PerformanceBlock />
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
