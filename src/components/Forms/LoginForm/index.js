/* jshint esversion: 6 */
import React from 'react';
import { withFormik } from 'formik';
import { Button, Form } from 'semantic-ui-react';
import { ErrorMessage } from './Messages';

const LoginForm = ({
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
            onSubmit = { handleSubmit }>
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Username'
                type = 'text'
                value={values.username}
                onChange={handleChange}
                error={errors.email}
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
                error = {errors.password}
            />
            <ErrorMessage 
                hidden = {errors.password && errors.username}
                message = 'There was an error logging you in! Please check your details'/>
            <Button 
                positive 
                icon ='home' 
                labelPosition='right' 
                content="Login"
                type='button'
                onClick='handleReset'
                disabled={!dirty || isSubmitting} />
        </Form>
    );
}

export default LoginForm;
