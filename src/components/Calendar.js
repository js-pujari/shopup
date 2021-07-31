import React from 'react'

const Calendar = () => {
  const calData = [{day: 'Monday', date: '13'}, 
  {day: 'Tuesday', date: '14'}, {day: 'Wednesday', date: '15'}, {day: 'Thursday', date: '16'},
  {day: 'Friday', date: '17'}, {day: 'Saturday', date: '18'}, {day: 'Sunday', date: '19'}]
  const dayData = ['Accounts', 'Income tax', 'Off day', 'French', 'Income tax', 'OffDay', 'Offday']
  return (
    <div>
      <table>
        <thead>
          <tr>
            {calData.map((x) => <td key={x.date}><div>{x.day}</div><div>{x.date}</div></td>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dayData.map((x, i) => <td><div className={((i + 1) % 2 === 0 && i< 4) ? 'r' : ((i + 1) % 3 === 0 || i > 4) ? 'o' : 'g'}>{x}</div></td>)}
          </tr>
          <tr>
            {dayData.map((x, i) => <td><div className={((i + 1) % 2 === 0 && i< 4) ? 'g' : ((i + 1) % 3 === 0 || i > 4) ? 'o' : 'r'}>{x}</div></td>)}
          </tr>
          <tr>
            {dayData.map((x, i) => <td><div className={((i + 1) % 2 === 0 && i< 4) ? 'r' : ((i + 1) % 3 === 0 || i > 4) ? 'o' : 'g'}>{x}</div></td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;