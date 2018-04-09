/* jshint esversion: 6 */
import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './Messages';
import { connect } from 'react-redux';
import store from '../../../store';
import { performLogin } from '../../../actions/loginAction';
import Yup from 'yup';
import { USER_COOKIE_IDENTIFIER } from '../../../config';

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
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                placeholder='Username'
                type = 'text'
                value={values.username}
                onChange={handleChange}
            />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
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

        store.subscribe(() => {
            var storeState = store.getState().loginReducer;
            if (storeState.token !== null) {
                localStorage.setItem(USER_COOKIE_IDENTIFIER, storeState.token);
                window.location.reload();
            } else if (!storeState.loginError) {
                setSubmitting(false); 
            }
        })        
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
        token : state.loginReducer.token,
        loginError : state.loginReducer.error
    }
}

export default connect(mapStateToProps, { performLogin })(LoginForm);
