/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';

import { NameInput, PasswordInput, SubmitButton } from './Input';
import { getUserDetailsFrom } from '../../../containers/User/action';

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
    handleReset
}) => {
    return(
        <Form 
            onSubmit = { handleSubmit }
            loading = { isSubmitting }>
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
                    <SubmitButton
                        loading = { isSubmitting }
                        />
                </Form.Field>
            </Form.Group>                     
        </Form>
    );
}

const UserSettingsForm = withFormik({
    mapPropsToValues : () => ({
        first_name : '',
        last_name : '',
        username: '',
        password : ''
    }),
    validationSchema: Yup.object().shape({
        first_name : Yup.string('Please only use letters for your name!'),
        last_name : Yup.string('Please only use letters for your name!')  
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        setSubmitting(true);  
        console.log(values);               
        //Wait 3 seconds, ensures login system is dodge  
        setTimeout(() => setSubmitting(false), 1000);              
    },
    displayName : 'User Settings'
})(Gubbins);

UserSettingsForm.propTypes = {
    first_name : PropTypes.string,
    last_name : PropTypes.string,
    username : PropTypes.string,
    password : PropTypes.string
}

const mapStateToProps = state => {
    return {
        token : state.login.token
    }
}

const mapDispatchToProps = dispatch => ({
    getUserDetailsFrom :  (token) => { dispatch(getUserDetailsFrom(token)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsForm);