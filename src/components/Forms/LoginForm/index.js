/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import Yup from 'yup';

import { ErrorMessage } from './Messages';
import { TextInput } from './Input';
import { performLogin } from '../../../containers/Login/action';

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
            size='large'
            onSubmit = { handleSubmit }
            loading = {isSubmitting}>
            <TextInput
                icon='user'
                name='username'
                placeholder='Username'
                type = 'text'
                value={values.username}
                onChange={handleChange}
            />
            <TextInput
                icon='lock'
                placeholder='Password'
                name='password'
                type='password'
                value={values.password}
                onChange={handleChange}
            />
            <ErrorMessage 
                hidden = {!loginError}
                message = 'Something went wrong, please try again'/>
            <Button 
                positive 
                icon ='home' 
                labelPosition='right' 
                content="Login"
                type='submit'
                disabled={isSubmitting} />             
        </Form>
    );
}

const LoginForm = withFormik({
    mapPropsToValues : () => ({
         username: '',
         password : '',
         performLogin : performLogin()
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password : Yup.string().required('Password is required!')       
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        props.performLogin(values.username, values.password);              
        setSubmitting(true);     
    },
    displayName : 'Login'
})(Gubbins);

LoginForm.propTypes = {
    username : PropTypes.string,
    password : PropTypes.string,
    performLogin : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        token : state.login.token,
        loginError : state.login.error
    }
}

const mapDispatchToProps = dispatch => ({
    performLogin : (username, password) => { dispatch(performLogin(username, password)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
