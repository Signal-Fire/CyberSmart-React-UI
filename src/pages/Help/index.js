import React, { Component } from 'react';
import HelpTabs from '../../components/Help';
import * as Styles from '../Styles';

export default class HelpPage extends Component {
    render() {
        return (
            <header style = { Styles.PageBody }>
                <HelpTabs />
            </header>
        )
    }
}
