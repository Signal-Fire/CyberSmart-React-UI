import React from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux'

const MessageStyle = {
    marginTop : '15px'
}

const ConnectedErrorMessage = ({
    connectedError
}) => {
    return (
        <Message
                hidden = { !connectedError }
                error
                compact
                style = {MessageStyle}>
                The Nodes are currently experiencing issues, please try again later!
            </Message>
    )
}

const mapStateToProps = state => ({
    connectedError : state.connected.error
})

export default connect(mapStateToProps, null)(ConnectedErrorMessage);