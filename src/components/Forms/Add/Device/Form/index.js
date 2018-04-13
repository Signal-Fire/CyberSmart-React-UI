import React from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import Yup from 'yup';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { TextInput, DropdownSelector, SubmitButton } from '../../Inputs';

import { addDevice } from '../../../../../containers/Devices/action';

const Gubbins = (props) => {
    const {
        state,
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;

    const createOptions = (options) => {
        options.forEach(item => {            
            item.label = item.name;
            item.value = item._id;
        })
        
        return options;
    }   

    const _handleSelect = (e, {name, value}) => {
        setFieldValue(name, value);    
    }

    return(
        <Form
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <TextInput
                    type = 'Device'
                    value = {values.deviceName}
                    onChange = {handleChange}
                />
                <DropdownSelector
                    objects = {state.connected}
                    type = 'Device'
                    handleSelect = { _handleSelect }
                />               
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select
                    fluid
                    label = 'Location'
                    onChange = { handleChange }
                    value = { values.location }                    
                    name = 'location'
                    text = { values.location }
                />        
            </Form.Group>
            <SubmitButton 
                handleSubmit = {handleSubmit}
                name = 'Add'
            />
        </Form>
    );
}

const withSemanticUIFormik = props=> WrappedComponent=>{

    return withFormik(props)(class extends React.Component{
      handleBlur = (e, data) => {
        if(data && data.name){
          this.props.setFieldValue(data.name,data.value);
          this.props.setFieldTouched(data.name);
        }
      }
      handleChange = (e,data) =>{
          console.log(data);
      }
  
      render(){
        return <WrappedComponent {...this.props}
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          />
      }
    })
  }

/*const blah = () => {
    <Form.Select
                    fluid
                    label = 'Location'
                    options = { anyRooms() ? 
                        createOptions(state.locations.locations) : null}
                    onChange = { _handleSelect }
                    placeholder = { !anyRooms() ? 
                        'No available locations' : 'Locations'}
                    loading = { roomsLoading() }
                    error = { roomsError() }
                    value = { values.location }
                    name = 'location'
                />   
}*/

const AddDeviceForm = withSemanticUIFormik({
    mapPropsToValues : () => ({
         
    }),
    validationSchema: Yup.object().shape({
               
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    },
    displayName : 'Add Device'
})(Gubbins);

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addDevice })(AddDeviceForm);
