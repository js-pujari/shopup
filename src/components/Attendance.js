import React, {useState} from 'react';
import {MARKS} from '../__mocks__/data';

const Attendance = () => {
  const [semData, setSemData] = useState(MARKS[0])
  const onSemChange = (e) => {
    console.log(e.target.value);
    const [val] = MARKS.filter(x => x.semester == e.target.value);
    setSemData(val)
  }
  return (
    <div data-testid="attendance-card" className="at-c">
      <div className="at-c-left">
        <div>
          <div>Attendance</div>
          <div>{semData ? semData.attendance : 0} %</div>
        </div>
        <div style={{flexDirection: 'column'}} className="flex">
          <label for="select">Semester</label>
          <select onChange={onSemChange}>
            {MARKS.map(x => <option key={x.semester} value={x.semester}>{x.semester}</option>)}
          </select>
        </div>
      </div>
      <div className="at-c-rgt">
            {semData && Object.keys(semData.total).map((v, i) => {
              return (
                <div key={i} className="at-c-card">
                <div>{v}</div>
                <div>{semData.total[v]}/100</div>
              </div>
              )
            })}
      </div>

    </div>
  )
}

export default Attendance