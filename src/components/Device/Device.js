/* jshint esversion: 6*/
import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';

export default class componentName extends Component {
    render() {
        return (
            <Card>
                <Card.Content>                    
                    <Card.Header>
                    {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                    State: {this.props.state}
                    </Card.Meta>
                    <Card.Description>
                    
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>ON</Button>
                    <Button basic color='red'>OFF</Button>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}
