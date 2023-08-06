import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles.css"

function NavigationButton(props) {
  return (
    <div>
        <ButtonGroup className="fixed-button-group" vertical>
      <Button href="#props.id" >Industries</Button>
      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>

      
    </ButtonGroup>
    </div>
    
  );
}

export default NavigationButton;