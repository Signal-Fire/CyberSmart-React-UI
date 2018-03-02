import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'

export default class LoginScreen extends Component {

  state = { open: true }

 show = dimmer => () => this.setState({ dimmer, open: true })
 close = () => this.setState({ open: false })

  render() {
     const { open, dimmer } = this.state

        return (
          <div>
            <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <Modal.Header>Start controlling your home</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                <Form>
                  <Form.Field>
                   <label>Username</label>
                   <input placeholder='Username' />
                 </Form.Field>
                 <Form.Field>
                   <label>Password</label>
                   <input type='Password' placeholder='Password' />
                 </Form.Field>
                </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color='black' onClick={this.close}>
                  Cancel
                </Button>
                <Button positive icon='checkmark' labelPosition='right' content="Login" onClick={this.close} />
              </Modal.Actions>
            </Modal>
          </div>
        )
      }
    }
