import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react';

const StatisticWidget = ({ icon, number, title }) => {
    return(
        <Statistic>
            <Statistic.Value >
                    <Icon name = {icon}/> 
                    <p>{number}</p> 
                </Statistic.Value> 
                <Statistic.Label > 
                    <p>{title}</p>
                </Statistic.Label> 
        </Statistic>
    );
};

export default StatisticWidget;
