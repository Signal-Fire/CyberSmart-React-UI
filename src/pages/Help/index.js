/*jshint esversion: 6*/
import React, { Component } from 'react';

//Component imports
import { HelpTabs } from '../../components/Exports';

//CSS import
import '../Master.css';
import './HelpPage.css';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


export default class HelpPage extends Component {
    render() {
        return (
          <Segment color='teal' inverted tertiary style={{ minHeight: 600, padding: '1em 0em' }}>
            <header className="page-body">
                <HelpTabs />
            </header>
            </Segment>
        )
    }
}
