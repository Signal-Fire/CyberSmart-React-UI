import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { SubmitButton } from '../Inputs';
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
                <Form.Input
                    type = 'Location'
                    placeholder = 'Location Name'
                    label = 'Location Name'
                    value = { values.locationName }
                    onChange = { handleChange }
                    name = 'name'
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
        name : ''
    }),
    validationSchema: Yup.object().shape({
        name : Yup.string().required('Location is required')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        values.created_by_user = props.username
        props.addLocation(values);
        setTimeout(() => window.location.reload(), 1000);        
    },
    displayName : 'Add Device'
})(LocationsForm)

const mapStateToProps = state => ({
    username : state.login.name
})

const mapDispatchToProps = dispatch => ({
    addLocation : (location) => { dispatch(addLocation(location))}
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationsFormik);