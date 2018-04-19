/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { withFormik } from 'formik';

import Yup from 'yup';
import { addDevice } from '../../../../containers/Devices/action';
import { SubmitButton } from '../Inputs';

const AddDeviceForm = props => {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleSubmit,
        stateErrors,
        stateLoading,
        stateObjects
    } = props;

    const _handleSelect = (e, { value, name }) => {
        setFieldValue(name, value);
    }

    const _mapDropdown = (options) => {
        if (!options)
            return [];
       
        options.forEach(option => {
            option.key = option._id;
            option.id = option._id;
            option.name = option.name;
            option.value = option.name;
            option.text = option.name;
        });

        return options;
    }   

    return (
        <Form
            loading = { isSubmitting || stateLoading.locations || stateLoading.connected }>
            <Form.Group widths = {2}>
                <Form.Input
                    fluid
                    placeholder = 'Device Name'
                    label =  { errors.name ? 'Device Name is required' : 'Device Name' }
                    value = {values.name}
                    onChange = {handleChange}
                    name = 'name'
                    error = { errors.name ? true : false }
                />
                <Form.Select
                    fluid
                    label =  { errors.physical ? 'Physical Device is required' : 'Physical Device' }
                    placeholder = 'Select Location...'
                    onChange = { _handleSelect }
                    value = { values.physical }   
                    options = { _mapDropdown(stateObjects.connected) }        
                    name = 'physical'
                    error = { (errors.physical || stateErrors.connected) ? true : false }
                />             
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select
                    fluid
                    label = { errors.location ? 'Location is required' : 'Location' }
                    onChange = { _handleSelect }
                    options = { _mapDropdown(stateObjects.locations) }
                    value = { values.location }     
                    placeholder = 'Select Location...'    
                    name = 'location'
                    error = { (errors.location || stateErrors.locations) ? true : false }
                />        
            </Form.Group>
            <SubmitButton 
                handleSubmit = {handleSubmit}
                name = 'Add'
            />
        </Form>
    );
}

const deviceFormik = withFormik({
    mapPropsToValues : () => ({
        name : '',
        location : '',
        physical : ''
    }),
    validationSchema : Yup.object().shape({
        location : Yup.string().required('Device Location is required!'),
        name : Yup.string().required('Device Name is required!'),
        //physical : Yup.string().required('Physical Device is required!')
    }),
    handleSubmit : (values, { props, setSubmitting }) => {
        values.created_by_user = props.user.name;
        props.addDevice(values, props.user.auth);
        setTimeout(() => window.location.reload(), 1000);   
    },
    displayName : 'Add Device'
})(AddDeviceForm);

const mapStateToProps = state => ({
    user : {
        auth : state.login.token,
        name : state.login.name
    },
    stateLoading : {
        locations : state.locations.isLoading,
        connected : state.connected.isLoading
    },
    stateObjects : {
        locations : state.locations.locations,
        connected : state.connected.devices,
    },    
    stateErrors : {
        locations : state.locations.error,
        connected : state.connected.error
    }
})

const mapDispatchToProps = dispatch => ({
    addDevice : (device, auth) => { dispatch(addDevice(device, auth)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(deviceFormik)




