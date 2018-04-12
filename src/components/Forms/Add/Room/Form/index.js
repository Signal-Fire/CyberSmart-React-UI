import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { TextInput, SubmitButton } from '../../Inputs';


const LocationsForm = props => {
    const {
        values,        
        isSubmitting,
        handleChange,
        handleSubmit
    } = props;

    return (
        <Form
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <TextInput
                    type = 'Location'
                    value = { values.locationName }
                    onChange = { handleChange }
                />                
            </Form.Group>
            <SubmitButton
                handleSubmit = { handleSubmit }
                type = 'Add'
            />
        </Form>
    );
}

const LocationsFormik = withFormik({
    mapPropsToValues : () => ({
        
    }),
    validationSchema: Yup.object().shape({
                
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
              
    },
    displayName : 'Add Device'
})(LocationsForm)

export default LocationsFormik;