import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Yup from 'yup';
import { connect } from 'react-redux';
import VirtualizedSelect from 'react-virtualized-select';
import { withFormik } from 'formik';

import { addDevice } from '../../../../containers/Devices/action';
import * as deviceReducer from '../../../../containers/Devices/reducer';
import * as locationsReducer from '../../../../containers/Location/reducer'; 

var devicesDropdown = deviceReducer.getConnectedDevicesDropdown();

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
                <VirtualizedSelect
                    fluid
                    name = 'physicalDevices'
                    value = 'Connected Devices'
                    options = { devicesDropdown }
                    onChange = { _handleSelect }
                />
            </Form.Group>
            <Form.Group widths = {2}>
                <VirtualizedSelect
                    fluid
                    name = 'deviceLocation'
                    value = 'Device Location'
                    options = { locationsReducer.createLocationsDropdown() }
                    onChange = { _handleSelect }
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
