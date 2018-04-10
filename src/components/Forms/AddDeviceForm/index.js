/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import Yup from 'yup';
import store from '../../../store';
import { addDevice, getConnectedDevices } from '../../../containers/Devices/action';
import * as deviceActions from '../../../containers/Devices/reducer';

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
                    options = { deviceActions.createConnectedDevicesDropdown }
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
                    options = { deviceActions.createConnectedDevicesDropdown }
                    onChange = { selectLocation }
                    noResultsMessage = 'No locations available'
                    placeholder = 'Device Location'
                    loading = { this.state.locationsLoading }
                    error = { this.state.locationsError }
                />
            </Form.Group>
            <Button 
                positive 
                type='submit'
                icon='checkmark' 
                labelPosition='right' 
                content="Add" 
                onClick={handleSubmit} 
                name = 'add'/>
        </Form>
    );
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
