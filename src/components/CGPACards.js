import React, {useState} from 'react';

const CGPACards = ({marks}) => {
  const [selectedSem, setSelectedSem] = useState(marks[0].semester)

  const onNextSem = () => {
    if (selectedSem < marks.length) {
      setSelectedSem(+selectedSem + 1);
    }
  }
  const onPrevSem = () => {
    if (selectedSem > 1) {
      setSelectedSem(+selectedSem - 1);
    }
  }

  return (
    <div data-testid="cgpa-cards" className="cgpa-cards">
      <div className="flex">
        <div>Performance (CGPA)</div>
        <div>
          <span className="lt" onClick={onPrevSem}></span>
          <span>{'sem ' + selectedSem}</span>
          <span className="rt" onClick={onNextSem}></span>
        </div>
      </div>
      <div  className="cgpa-card-container">
        {marks.filter(y => y.semester == selectedSem).map((x) => {
          return (
            <>
            {Object.keys(x.cgpa).map((v, i) => {
              return (
                <div key={i} className="cgpa-card">
                <div>{x.cgpa[v]}</div>
                 <div>{v}</div>
              </div>
              )
            })}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default CGPACards