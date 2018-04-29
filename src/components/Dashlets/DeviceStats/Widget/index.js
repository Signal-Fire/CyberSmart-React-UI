import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

const StatisticWidget = ({ 
    stats
}) => {
    return(
        <Statistic
            color = {stats.color}>
            <Statistic.Value >
                    <Icon name = {stats.icon}/> 
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
};

export default StatisticWidget;
