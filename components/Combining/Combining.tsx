'use client'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Combining() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5], color: "#e9e63a" }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}