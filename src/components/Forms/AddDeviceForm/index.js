/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';

import store from '../../../store';
import { addDevice, getConnectedDevices } from '../../../containers/Devices/action';

this.state = {

}

const Gubbins = ({
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
}) => {
    return(
        <Form
            loading = { isSubmitting }
            error = { errors.overall }
            >
            <Form.Group widths = {2}>
                <Form.Input
                    fluid
                    label = 'Device Name'
                    placeholder = 'Device Name'
                    name = 'deviceName'
                    value = { values.deviceName }
                    onChange = {handleChange}
                />
                <Form.Select
                    fluid
                    label = 'Physical Device'
                    options = { values.devices }
                    onChange = { selectPhysicalDevice }
                    noResultsMessage = 'No devices available'
                    placeholder = 'Physical Devices'
                    loading = { this.state.connectedLoading }
                    error = { this.state.locationsError }
                />
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select 
                    fluid
                    label = 'Device Location'    
                    options = { this.state.deviceLocations }
                    onChange = { selectLocation }
                    noResultsMessage = 'No locations available'
                    placeholder = 'Device Location'
                    loading = { this.state.locationsLoading }
                    error = { this.state.locationsError }
                />
            </Form.Group>
        </Form>
    );
}

const createLocationDropdown = (data) => {    
    data.forEach(item => {           
        item.key = item._id;  
        item.text = item.name;
        item.value = item._id;               
    });
    return data;
}

const selectPhysicalDevice = (e, { value, key }) => {        
    this.setState({
        selectedAddress : value
    });        
}

const selectLocation = (e, { value, key }) => {
    this.setState({
        selectedLocation : value
    });
}

const AddDeviceForm = withFormik({
    mapPropsToValues : () => ({
         
    }),
    validationSchema: Yup.object().shape({
               
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
              
    },
    displayName : 'Add Device'
})(Gubbins);

AddDeviceForm.propTypes = {

}

const mapStateToProps = state => {
    return {
        
    }
}

export default connect(mapStateToProps, { addDevice })(AddDeviceForm);
