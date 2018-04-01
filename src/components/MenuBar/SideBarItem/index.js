/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react';

export default class SideBarItem extends Component {
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
        if (!this.state.isMobile) {
            return (            
                <Item>
                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                        <Icon name={this.props.icon} />
                            {this.props.title}
                        </Item.Header>
                    </Item.Content>
                </Item>      
            );
        } else {
            return(
                <Item>
                    <Icon name={this.props.icon} />  
                </Item>
            );
        }
    }
}
