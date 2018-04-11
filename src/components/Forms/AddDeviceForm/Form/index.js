import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Yup from 'yup';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { addDevice } from '../../../../containers/Devices/action';
import * as connectedReducer from '../../../../containers/ConnectedDevices/reducer';
import * as deviceReducer from '../../../../containers/Devices/reducer';
import * as locationsReducer from '../../../../containers/Location/reducer'; 

const Gubbins = (props) => {
    const {
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

    const _handleSelect = (choice) => {
        switch(choice.type) {
            case 'device':
                return setFieldValue('selectedDeviceId', choice.value);
            case 'connected':
                return setFieldValue('selectedConnectedId', choice.value);
            default:
                return null;
        }        
    }

    const _locationsDropdown = () => {
        var locations = locationsReducer.getLocations()
        if (locations === null) {
            return [];
        }
        var data = locations.forEach(item => {           
            item.label = item.name;
            item.value = item._id;
            item.type = 'location';              
        });

        return data;
    }

    const _connectedDropdown = () => {
        var devices = connectedReducer.getDevices()
        if (devices === null) { 
            return [];
        }
        var data = devices.forEach(item => {       
            item.label = item.name;
            item.value = item._id;
            item.type = 'connected';          
        });

        return data;
    }

    return(
        <Form
            loading = { isSubmitting }
            >
            <Form.Group widths = {2}>
                <Form.Input
                    fluid
                    label = 'Device Name'
                    placeholder = 'Device Name'
                    name = 'deviceName'
                    value = {values.deviceName}
                    onChange = {handleChange}
                />
                <Form.Select
                    fluid
                    label = 'Physical Device'
                    options = { _connectedDropdown() }
                    onChange = {_handleSelect }
                    placeholder = 'Physical Devices'
                    loading = { connectedReducer.isLoading() }
                    error = { connectedReducer.isError() }
                />
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Select
                    fluid
                    label = 'Device Location'
                    options = { _locationsDropdown() }
                    onChange = { _handleSelect }
                    placeholder = 'Device Location'
                    loading = { locationsReducer.isLoading() }
                    error = { locationsReducer.isError() }
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

const AddDeviceForm = withFormik({
    mapPropsToValues : () => ({
         
    }),
    validationSchema: Yup.object().shape({
               
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
              
    },
    displayName : 'Add Device'
})(Gubbins);

export default connect(null, { addDevice })(AddDeviceForm);
