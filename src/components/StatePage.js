import React, { useState } from 'react';
import { Pie, Bar } from '@ant-design/plots';
import StateData from '../data/StateData.json';
import Dashboard from './dashboard';
import './statePage.css';
// import '../styles.css'; // Import your custom styles

const StatePage = ({ selectedState }) => {
  const [chartType, setChartType] = useState('pie');

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const renderChart = (name, state) => {
    const chartComponent =
      chartType === 'pie' ? (
        <PieChart name={name} state={state} />
      ) : chartType === 'bar' ? (
        <BarChart name={name} state={state} />
      ) : null;

    return <div className="chart-box">{chartComponent}</div>;
  };

  return (
    <div className='d-flex flex-column h-100'>
      <div className="col-md-10 p-5 vh-100">
        <div className="mt-4">
          <h2>State Page of Uttarakhand</h2>
          <br />
          <div>
            <label>Select Chart Type:</label>
            <select className="form-control" value={chartType} onChange={(e) => handleChartTypeChange(e.target.value)}>
              <option value="pie">Pie Chart</option>
              <option value="bar">Bar Chart</option>
            </select>
          </div>
          <br />
              
            <h3 id="industriesData">Industries Data</h3>
            {renderChart('industriesData', selectedState)}
          
          <h3 id="agricultureData">Agriculture Data</h3>
          {renderChart('fruitsData', selectedState)}
          <h3 id="vegetablesData">Vegetables Data</h3>
          {renderChart('vegetablesData', selectedState)}
          <h3 id="spicesData">Spices Data</h3>
          {renderChart('spicesData', selectedState)}
          {/* ... other charts ... */}
        </div>
      </div>
    </div>
  );
};

  const PieChart = ({ name, state }) => {
    const getChartData = (name, state) => {
      const stateName = StateData[`Uttarakhand`];
      const selectedData = stateName[name];

      if (selectedData) {
        const items = selectedData.map((iterator) => ({
          type: iterator.name,
          value: iterator.waterFootprint,
        }));
        var chartData = [...items];
      }

      return chartData;
    };

    // Get the data for the pie chart
    const data = getChartData(name, state);

    // Config for the pie chart
    const config = {
      appendPadding: 10,
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      interactions: [
        {
          type: 'pie-legend-active',
        },
        {
          type: 'element-active',
        },
      ],
    };

    return <Pie {...config} />;
  };


  const BarChart = ({ name, state }) => {
    const getChartData = (name, state) => {
      const stateName = StateData[`Uttarakhand`];
      const selectedData = stateName[name];

      if (selectedData) {
        const items = selectedData.map((iterator) => ({
          type: iterator.name,
          value: iterator.waterFootprint,
        }));
        var chartData = [...items];
      }

      return chartData;
    };

    // Get the data for the bar chart
    const data = getChartData(name, state);

    // Config for the bar chart
    const config = {
      data,
      xField: 'value',
      yField: 'type',
      label: {
        position: 'middle',
        content: '',
        style: { fill: '#ffffff' }, // Text color
      },
      tooltip: {
        shared: true,
        showMarkers: false,
      },
      xAxis: { title: { text: 'Value' } },
      yAxis: { title: { text: 'Type' } },
      meta: { type: { alias: 'Type' }, value: { alias: 'Value' } },
    };

    return <Bar {...config} />;
  };




export default StatePage;
