import React from 'react'
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteDevice } from '../../../../containers/Devices/action';

const Delete = ({
  props,
  deleteDevice
}) => {
  return (
    <Label 
      color = 'red' 
      as = 'a' 
      onClick = {() => { deleteDevice(props.id, props.token, props.deleter) }}>
        Remove
        <Icon name = 'close' />
    </Label>
  )
}

const mapStateToProps = (state, ownProps) => ({
  props : {
    id : ownProps.id,
    token : state.login.token,
    deleter : state.user.first_name
  }
})

const mapDispatchToProps = dispatch => ({
  deleteDevice : (id, token, deleter) => { 
    dispatch(deleteDevice(id, token, deleter, (cb) => {      
      window.location.reload();
    }))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
