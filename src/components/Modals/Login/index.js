/* jshint esversion: 6*/
import React from 'react';
import { Message, Grid, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { operateModal } from '../../../containers/Login/action';
import { LoginForm } from '../../Forms';
import { SemanticModal } from '../';

const LoginModal = ({
    isOpen,
    operateModal
}) => {
    return (
        <SemanticModal
                open={isOpen}
                onClose={() => { operateModal(false) }}
                size='small'
            >
            <Modal.Header></Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Grid
                            textAlign='center'
                            style={{ height: '100%' }}
                            verticalAlign='middle'
                            >
                            <Grid.Row>
                                <Grid.Column style={{ maxWidth: 450 }}>
                                    <Message compact>
                                        Please login! <br />
                                        Just enter your hub login details to get started!
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{ maxWidth: 450 }}>
                                   <LoginForm />      
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions></Modal.Actions>
            </SemanticModal>
    );
}

const mapStateToProps = state => ({
    isOpen : state.login.token === null
})

const mapDispatchToProps = dispatch => ({
    operateModal : (modalState) => { dispatch(operateModal(modalState)) } 
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
