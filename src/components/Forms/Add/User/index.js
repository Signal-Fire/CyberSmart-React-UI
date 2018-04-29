import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { SubmitButton } from '../Inputs';
import { connect } from 'react-redux';

const AddUserForm = props => {
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
                    placeholder = 'First Name'
                    label = 'First Name'
                    value = { values.firstName }
                    onChange = { handleChange }
                    name = 'firstname'
                /> 
                <Form.Input
                    placeholder = 'Last Name'
                    label = 'Last Name'
                    value = { values.lastName }
                    onChange = { handleChange }
                    name = 'lastname'
                /> 
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Input
                    placeholder = 'Username'
                    label = 'Username'
                    value = { values.username }
                    onChange = { handleChange }
                    name = 'username'
                /> 
                <Form.Input
                    type = 'password'
                    placeholder = 'Password'
                    label = 'Password'
                    value = { values.password }
                    onChange = { handleChange }
                    name = 'password'
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

const AddUserFormik = withFormik({
    mapPropsToValues : () => ({

    }),
    validationSchema: Yup.object().shape({
    }),
    handleSubmit: (values, { props, setSubmitting }) => {

    },
    displayName : 'Add User'
})(AddUserForm)

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUserFormik);