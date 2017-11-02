import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './main.css';
import {
    Nav,
    NavItem
} from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        console.log("This is Nav: ", < Nav / > );
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    render() {
        return ( <
            div className = "container" >
            <
            h2 > Hello World < /h2> <
            Nav bsStyle = "pills"
            activeKey = {
                1
            }
            onSelect = {
                this.handleSelect
            } >
            <
            NavItem eventKey = {
                1
            }
            href = "/home" > NavItem 1 content < /NavItem> <
            NavItem eventKey = {
                2
            }
            title = "Item" > NavItem 2 content < /NavItem> <
            NavItem eventKey = {
                3
            }
            disabled > NavItem 3 content < /NavItem> < /
            Nav >
        ); < /div>
    );
}
}

export default Main;
