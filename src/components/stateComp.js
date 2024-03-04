// StateComparison.js
import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { Pie } from '@ant-design/plots';
import './statecomp.css';
const StateComparison = ({ stateData }) => {
  const [selectedState1, setSelectedState1] = useState(null);
  const [selectedState2, setSelectedState2] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const handleShowComparison = () => {
    // Implement logic to handle the comparison
    console.log('Show Comparison Clicked');
    console.log('Selected State 1:', selectedState1);
    console.log('Selected State 2:', selectedState2);
    console.log('Selected Field:', selectedField);

    setShowComparison(true);
  };

  const getChartData = (state, fieldName) => {
    const selectedData = state[fieldName];
    if (selectedData) {
      return selectedData.map((item) => ({
        type: item.name,
        value: item.waterFootprint,
      }));
    }
    return [];
  };

  // Reset showComparison state when selected states or field change
  const handleState1Change = (state) => {
    setSelectedState1(state);
    setShowComparison(false);
  };

  const handleState2Change = (state) => {
    setSelectedState2(state);
    setShowComparison(false);
  };

  const handleFieldChange = (field) => {
    setSelectedField(field);
    setShowComparison(false);
  };

  const fieldOptions = Object.keys(stateData.Uttarakhand);

  return (
    <Container fluid className="mt-5">
      <Row className="mb-3">
        <Col>
          <h5 >Choose State 1</h5>
          <Dropdown className="mt-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedState1 || 'Select State 1'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(stateData).map((state) => (
                <Dropdown.Item
                  key={state}
                  onClick={() => handleState1Change(state)}
                >
                  {state}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <h5 >Choose State 2</h5>
          <Dropdown className="mt-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedState2 || 'Select State 2'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.keys(stateData).map((state) => (
                <Dropdown.Item
                  key={state}
                  onClick={() => handleState2Change(state)}
                >
                  {state}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <h5 >Choose Field</h5>
          <Dropdown className="mt-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedField || 'Select Field'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {fieldOptions.map((field) => (
                <Dropdown.Item key={field} onClick={() => handleFieldChange(field)}>
                  {field}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="justify-content-center">
  <Col className="col-auto">
    <Button variant="success" size="m" onClick={handleShowComparison}>
      Show Comparison
    </Button>
  </Col>
</Row>

      {showComparison && selectedState1 && selectedState2 && selectedField && (
        <Row className="mt-4">
          <Col>
            <h2 className="text-center">{selectedState1} - {selectedField}</h2>
            <Pie
              appendPadding={10}
              data={getChartData(stateData[selectedState1], selectedField)}
              angleField="value"
              colorField="type"
              radius={0.8}
              label={{
                type: 'outer',
                content: '{name} {percentage}',
              }}
              interactions={[
                { type: 'pie-legend-active' },
                { type: 'element-active' },
              ]}
            />
          </Col>

          <Col className="ml-4">
            <h2 className="text-center">{selectedState2} - {selectedField}</h2>
            <Pie
              appendPadding={10}
              data={getChartData(stateData[selectedState2], selectedField)}
              angleField="value"
              colorField="type"
              radius={0.8}
              label={{
                type: 'outer',
                content: '{name} {percentage}',
              }}
              interactions={[
                { type: 'pie-legend-active' },
                { type: 'element-active' },
              ]}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default StateComparison;
