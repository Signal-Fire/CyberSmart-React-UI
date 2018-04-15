import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { TextInput, SubmitButton } from '../Inputs';
import { addLocation } from '../../../../containers/Location/action';
import { connect } from 'react-redux';

const LocationsForm = props => {
    const {
        values,        
        isSubmitting,
        handleChange,
        handleSubmit,
    } = props;

    return (
        <Form
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <TextInput
                    type = 'Location'
                    value = { values.locationName }
                    onChange = { handleChange }
                    name = 'location'
                /> 
            </Form.Group>
                <SubmitButton
                    handleSubmit = { handleSubmit }
                    type = 'Add'
                    name = 'Add'
                />      
        </Form>
    );
}

const LocationsFormik = withFormik({
    mapPropsToValues : () => ({
        location : ''
    }),
    validationSchema: Yup.object().shape({
        location : Yup.string().required('Location is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.addLocation(values);
        setSubmitting(false);
        window.location.reload();
    },
    displayName : 'Add Device'
})(LocationsForm)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addLocation : (location) => { dispatch(addLocation(location))}    
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationsFormik);