import React from 'react';
import { Statistic, Icon, Segment } from 'semantic-ui-react';

const StatisticWidget = ({ 
    stats
}) => {
    return(
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
};

export default StatisticWidget;
