import React, {  Component  } from 'react';
import { Card } from 'semantic-ui-react'
import { AreaChart, Area } from 'recharts';


export default class charts extends Component {
  render() {
    return (
  <Card.Group>
  <Card fluid color={this.props.color} header={this.props.name} />
  </Card.Group>
    );
  }
}
