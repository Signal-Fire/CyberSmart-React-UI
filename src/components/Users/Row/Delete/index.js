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
      onClick = {() => { deleteUser(props.id, props.token, props.deleter) }}>
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
  deleteUser : (id, token, deleter) => { 
    dispatch(deleteUser(id, token, deleter, () => {
      window.location.reload();
    }))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
