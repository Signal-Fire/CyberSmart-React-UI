import React from 'react'
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../../containers/User/action';

const Delete = ({
  props,
  deleteUser
}) => {
  return (
    <Label 
      color = 'red' 
      as = 'a' 
      onClick = {() => { deleteUser(props.id, props.token) }}>
        Remove
        <Icon name = 'close' />
    </Label>
  )
}

const mapStateToProps = (state, ownProps) => ({
  props : {
    id : ownProps.id,
    token : state.login.token
  }
})

const mapDispatchToProps = dispatch => ({
  deleteUser : (id, token) => { 
    dispatch(deleteUser(id, token, () => {
      window.location.reload();
    }))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
