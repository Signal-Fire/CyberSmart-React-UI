/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';

import { NameInput, PasswordInput, SubmitButton } from './Input';
import { getUserDetailsFrom, updateUserDetails } from '../../../containers/User/action';

const Gubbins = ({
    values,
    touched,
    errors,
    loginError,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    formError
}) => {    
    return(       
        <Form 
            readOnly
            onSubmit = { handleSubmit }
            loading = { isSubmitting || formError }>
            <Form.Group widths = {2}>
                <Form.Field>
                    <NameInput
                        name = 'First Name'
                        onBlur = { handleBlur }
                        value = { values.first_name }
                        onChange = { handleChange }
                    />
                </Form.Field>          
                <Form.Field>
                    <NameInput
                        name = 'Last Name'
                        value = { values.last_name }
                        onChange = { handleChange }
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Field>
                    <NameInput
                        name = 'Username'
                        value = { values.username }
                        onChange = { handleChange }
                    />
                </Form.Field>
                <Form.Field>
                    <PasswordInput
                        name = 'Password'
                        value = { values.password }
                        onChange = { handleChange }
                    />
                </Form.Field>               
            </Form.Group> 
            <Form.Group widths = {2}>
                <Form.Field>
                </Form.Field>
                <Form.Field>
                    <SubmitButton />
                </Form.Field>
            </Form.Group>                     
        </Form>
    );
}

const upperCase = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const UserSettingsForm = withFormik({
    mapPropsToValues : ({
        first_name,
        last_name,
        username
    }) => ({
        first_name : upperCase(first_name),
        last_name : upperCase(last_name),
        username: username,
        password : ''
    }),
    validationSchema: Yup.object().shape({
        first_name : Yup.string('Please only use letters for your name!'),
        last_name : Yup.string('Please only use letters for your name!')  
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        setSubmitting(true);   

        props.updateUserDetails(values, props.token);

        setTimeout(() => setSubmitting(false), 1000);              
    },
    displayName : 'User Settings'
})(Gubbins);

UserSettingsForm.propTypes = {
    first_name : PropTypes.string,
    last_name : PropTypes.string,
    username : PropTypes.string,
    password : PropTypes.string,
    updateUserDetails : PropTypes.func
}

const mapStateToProps = state => {
    return {
        token : state.login.token,
        first_name : state.user.first_name,
        last_name : state.user.last_name,
        username : state.user.username,
        formError : state.user.error
    }
}

const mapDispatchToProps = dispatch => ({
    getUserDetailsFrom :  (token) => { dispatch(getUserDetailsFrom(token)) },
    updateUserDetails : (user, token) => { dispatch(updateUserDetails(user, token)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsForm);