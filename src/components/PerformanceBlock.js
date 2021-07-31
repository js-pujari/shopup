import React, {useEffect} from 'react';
import CGPACards from './CGPACards';
import {MARKS} from '../__mocks__/data';

/**
 * Kindly use the mock data provided for rendering the performance block component
 * use CGPACards component to design CGPA cards
 */

const PerformanceBlock = () => {
  useEffect(() => {
    console.log(MARKS);
  }, [])
  return (
    <CGPACards marks={MARKS} />
  )
}

export default PerformanceBlock