import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { withFormik } from 'formik';
import { SubmitButton } from '../Inputs';
import { connect } from 'react-redux';
import { addUser, setCreateModalOpen } from '../../../../containers/User/action';

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
            firstname : '',
            lastname : '',
            username : '',
            password : ''        
    }),
    validationSchema: Yup.object().shape({
        firstname : Yup.string().required('First Name is required!'),
        lastname : Yup.string().required('Last Name is required!'),
        username : Yup.string().required('Username is required!'),
        password : Yup.string().required('Password is required!')
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        var user = {
            first_name : values.firstname,
            last_name : values.lastname,
            username : values.username,
            password : values.password
        }

        props.addUser(user, props.token)
        
        props.setCreateModalOpen(false);

    },
    displayName : 'Add User'
})(AddUserForm)

const mapStateToProps = state => ({
    token : state.login.token
})

const mapDispatchToProps = dispatch => ({
    addUser : (user, token) => { dispatch(addUser(user, token, () => {
        window.location.reload();
    })) },
    setCreateModalOpen : (modalState) => { dispatch(setCreateModalOpen(modalState)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddUserFormik);