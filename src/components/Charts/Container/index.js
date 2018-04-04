import React from 'react'
import { ResponsiveContainer } from 'recharts';

const Container = ( { children, ...rest }) => {
    return(
        <ResponsiveContainer 
            width= "100%" 
            height= {200}
        >
            {children} 
        </ResponsiveContainer>
    );
};

export default Container;