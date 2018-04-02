import React from 'react';
import { Dropdown, Message } from 'semantic-ui-react';

const Announcements = () => {
    return (
        <Dropdown 
            item 
            icon='announcement' 
            pointing = 'top right'
        >                        
            <Dropdown.Menu>                
                <Message>            
                    <p>
                        You left x lights on this week!
                    </p>
                </Message>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Announcements;