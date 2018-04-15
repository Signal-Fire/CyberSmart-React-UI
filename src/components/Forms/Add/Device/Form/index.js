import React from 'react';
import { Form, Button } from 'semantic-ui-react';
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

    const rooms = () => {
        return state.locations;
    }

    const connected = () => {
        return state.connected;
    }

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
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <TextInput
                    type = 'Device'
                    value = {values.deviceName}
                    onChange = {handleChange}
                />
                <DropdownSelector
                    objects = {connected()}
                    type = 'Device'
                    handleSelect = { _handleSelect }
                />               
            </Form.Group>
            <Form.Group widths = {2}>
                <DropdownSelector
                    objects = {rooms()}
                    type = 'Location'
                    handleSelect = { _handleSelect }
                />    
            </Form.Group>
            <SubmitButton 
                handleSubmit = {handleSubmit}
                name = 'Add'
            />
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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addDevice })(AddDeviceForm);
