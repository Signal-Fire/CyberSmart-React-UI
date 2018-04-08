/* jshint esversion: 6 */
import React from 'react';
import { withFormik } from 'formik';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './Messages';
import Yup from 'yup';

const Gubbins = ({
    values,
    touched,
    errors,
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
                hidden = {!errors.password || !errors.username}
                message = {errors.username || errors.password ? 'Username and password are required' : 'Something went wrong, please try again'}/>
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
         password : ''
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password : Yup.string().required('Password is required!')       
    }),
    handleSubmit: (values, { setSubmitting, errors }) => {        
        alert(JSON.stringify(values));   
        setSubmitting(false);     
    },
    displayName : 'Login'
})(Gubbins);

export default LoginForm;
