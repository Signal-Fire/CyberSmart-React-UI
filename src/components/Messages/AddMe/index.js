import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

export default class AddMe extends React.Component {
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
        const { objects, ...rest } = this.props;
        const isMobile = width <= 500;
        
        return (
            <Message 
                info
                compact
                style = {{
                    width : isMobile ? '80%' : '20%'
                }}
                {...rest}>
                <Icon name = 'exclamation' size = 'big'/>
                <Message.Header>Hey! You are yet to add any {objects}!</Message.Header>
                <Message.Content>
                    <p>Not to worry, hit that + button on the Control Panel above me to add one!</p>
                </Message.Content>
            </Message>
        )
    }
}