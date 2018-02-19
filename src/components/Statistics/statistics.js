import React, { Component } from 'react';
import { Icon, Image, Statistic } from 'semantic-ui-react'

export default class statistics extends Component {
    render() {
        return (
          <Statistic.Group widths='four'>
          <Statistic>
            <Statistic.Value>
              <Icon name='power' />
              1
            </Statistic.Value>
            <Statistic.Label>Devices on</Statistic.Label>
          </Statistic>


      <Statistic>
        <Statistic.Value>
          <Icon name='power' />
          4
        </Statistic.Value>
        <Statistic.Label>Devices off</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name='plug' />
          5
        </Statistic.Value>
        <Statistic.Label>Known smart plugs</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
          <Icon name='warning' />
          5
        </Statistic.Value>
        <Statistic.Label>Errors</Statistic.Label>
      </Statistic>
    </Statistic.Group>
);
}
}
