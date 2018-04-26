import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Item, Icon } from 'semantic-ui-react';
import { operateSidebar } from '../../../containers/Login/action';

class SideBarItem extends Component {
    constructor() {
        super();

        this.state = {
            isMobile: false
        };        
    }

    updateDimensions() {
        if (window.innerWidth < 500) {
            this.setState({ isMobile: true});
        } else {
            this.setState({ isMobile: false});
        }
    } 

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (     
            <NavLink 
                to= {this.props.navPage}
                onClick = { () => this.props.operateSidebar() }>
                <Item>
                    { !this.state.isMobile ? 
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                            <Icon name={this.props.icon} />
                                <br />
                                {this.props.title}
                            </Item.Header>
                        </Item.Content>
                    : 
                        <Item>
                            <Icon name={this.props.icon} />  
                        </Item>
                    }
                </Item>           
            </NavLink>               
        );
    }
}

const mapDispatchToProps = dispatch => ({
    operateSidebar : () => { dispatch(operateSidebar()) }
})

export default connect(null, mapDispatchToProps)(SideBarItem);