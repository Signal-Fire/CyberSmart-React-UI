import React from 'react';
import { Statistic, Icon, Segment } from 'semantic-ui-react';

class StatisticWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width : window.innerWidth
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const { stats } = this.props;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <Statistic
                    color = { stats.color }>
                    <Statistic.Value >
                            <Icon name = { stats.icon } className = 'inline'/> 
                            <p>{ stats.number }</p> 
                        </Statistic.Value> 
                        <Statistic.Label> 
                            <p 
                            style = {
                                { color : stats.color }
                                }>
                                { stats.title }
                                </p>
                        </Statistic.Label> 
                </Statistic>
            );
        } else {
            return (
            <Segment>
                <Statistic
                    color = { stats.color }>
                    <Statistic.Value >
                            <Icon name = { stats.icon } className = 'inline'/> 
                            <p>{ stats.number }</p> 
                        </Statistic.Value> 
                        <Statistic.Label> 
                            <p 
                            style = {
                                { color : stats.color }
                                }>
                                { stats.title }
                                </p>
                        </Statistic.Label> 
                </Statistic>
            </Segment>
            );
        }
    }
}

export default StatisticWidget;
