import React from 'react'
import { Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteLocation } from '../../../../containers/Location/action';

const Delete = ({
  props,
  deleteLocation
}) => {
  return (
    <Label 
      color = 'red' 
      as = 'a' 
      onClick = {() => { deleteLocation(props.id, props.token, props.deleter) }}>
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
  deleteLocation : (id, token, deleter) => { 
    dispatch(deleteLocation(id, token, deleter, (cb) => {
      window.location.reload();
    }))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
