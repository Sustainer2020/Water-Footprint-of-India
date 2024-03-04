import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import './dashboard.css';
const Dashboard = ({stateData}) => {
  const fieldOptions = Object.keys(stateData.Uttarakhand);
  return (
    <div className="col-md-2 bg-dark p-3">
      <h4 className="text-light mb-4">Dashboard</h4>

      {/* States Dropdown */}
      <Dropdown as={ButtonGroup}
        title="Fields"
        id="bg-vertical-dropdown-2"
        variant="dark"
        className="mb-2 w-100 text-left">
            <Dropdown.Toggle  id="dropdown-basic">
              States
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(stateData).map((state) => (
                <Dropdown.Item
                  key={state}
                 
                >
                  {state}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

      {/* Fields Dropdown */}
      <Dropdown as={ButtonGroup}
        title="Fields"
        id="bg-vertical-dropdown-2"
        variant="dark"
        className="mb-2 w-100 text-left">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Fields
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {fieldOptions.map((field) => (
                <Dropdown.Item key={field} >
                  {field}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

      {/* State Comparison Button */}
      <Button variant="dark" href="/stateComparison" className="mb-2 w-100">State Comparison</Button>
    </div>
  );
};

export default Dashboard;