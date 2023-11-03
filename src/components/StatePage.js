
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import StateData from '../data/StateData.json'; 
import NavigationButton from './Statesidebar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles.css"

const Chart=({name,state})=>{
  const getChartData = (name,state) => {
    // Extracting data for the chart from industriesData

  
 // ---------------------------------------------------------------------------------------------// 
    // For Now we don't have data for each state hence making state to always uttarakhand
    //But if data is present replace  StateData['Uttarakhand'] to ---> StateData[state];
    const stateName=StateData[`Uttarakhand`];
//--------------------------------------------------------------------------------------------------//


    const selectedData = stateName[name];

    if (selectedData) {
      const items = selectedData.map((iterator) => ({
        type: iterator.name,
        value: iterator.waterFootprint,
      }));
      
      var chartData = [...items];
    //   const industriesData = UttarakhandData.industriesData.map((iterator) => ({
    //     type: iterator.name,
    //     value: iterator.waterFootprint,
    //   }));
    //   var chartData = [...industriesData];
    }

    return chartData;
  };

  // Get the data for the pie chart
  const data = getChartData(name,state);

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
}


const StatePage = ({ selectedState }) => {
  
  return (
    <div className="d-flex justify-content-between m-5">
            <div className="col-md-2 mt-4">
            <ButtonGroup className="fixed-button-group" vertical>
      <Button className="bg-dark" href="#industriesData" >Industries</Button>
      <DropdownButton 
        as={ButtonGroup }
        title="Agriculture "
        id="bg-vertical-dropdown-3"
        variant="dark"
      >
        <Dropdown.Item className="bg-dark text-light" eventKey="1" href="#fruitsData">Fruits</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="2" href='#vegetablesData'>Vegetables</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="3" href='#spicesData'>Spices</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="4" href='#floricultureData'>Flowers</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="5" href='#rabiCropsData'>Rabi Crops</Dropdown.Item>
        <Dropdown.Item className="bg-dark text-light" eventKey="6" href='#kharifCropsData'>Kharif Crops</Dropdown.Item>
      </DropdownButton>
      <Button variant="dark" href="#livestockData">Livestock</Button>
      <Button variant="dark">Environment</Button>
      <Button variant="dark">Overall Analysis</Button>

      
    </ButtonGroup>
            </div>
            <div className="right col-md-10">
            <div className="mt-4">
      <h2>State Page of {selectedState}</h2>
      <br></br>
      <h3 id="industriesData">Industries Data</h3>
      <Chart name='industriesData' state={selectedState} />
      <h3 id="agricultureData">Agriculture Data</h3>
      
      <div id="fruitsData"><h4>Fruits</h4><Chart name='fruitsData' state={selectedState} /></div>
      <div id="vegetablesData"><h4>Vegetables</h4><Chart name='vegetablesData' state={selectedState} /></div>
      <div id="spicesData"><h4>Spices</h4><Chart name='spicesData' state={selectedState}/></div>
      <div id="floricultureData"><h4>Flowers</h4><Chart name='floricultureData' state={selectedState}/></div>
      <div id="rabiCropsData"><h4>Rabi Crops</h4><Chart name='rabiCropsData' state={selectedState} id="rabiCropsData"/></div>
      <div id="kharifCropsData"><h4>Kharif Crops</h4><Chart name='kharifCropsData' state={selectedState} /></div>
      <div id="livestockData"><h4>Livestocks</h4><Chart name='livestockData' state={selectedState} /></div>
     </div>
            </div>
            
        </div>

  );
};

export default StatePage;
