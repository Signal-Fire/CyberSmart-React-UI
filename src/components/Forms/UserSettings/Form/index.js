/* jshint esversion: 6 */
import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import Yup from 'yup';

import { NameInput, PasswordInput } from '../Input';

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
            loading = { isSubmitting }>
            <Form.Group widths = {2}>
                <Form.Field>
                    <NameInput
                        name = 'First Name'
                        value = { values.firstname }
                        onChange = { handleChange }
                    />
                </Form.Field>          
                <Form.Field>
                    <NameInput
                        name = 'Last Name'
                        value = { values.lastname }
                        onChange = { handleChange }
                    />
                </Form.Field>
            </Form.Group>
            <Form.Group widths = {2}>
                <Form.Field>
                    <NameInput
                        name = 'Hub Username'
                        values = { values.hubusername }
                        onChange = { handleChange }
                    />
                </Form.Field>
                <Form.Field>
                    <PasswordInput
                        name = 'Password'
                        values = { values.password }
                        onChange = { handleChange }
                    />
                </Form.Field>               
            </Form.Group> 
            <Form.Group widths = {2}>
                <Form.Field>

                </Form.Field>
                <Form.Field>
                    <Button
                        positive 
                        icon='checkmark' 
                        labelPosition='right' 
                        content="Save" 
                        onClick = {this.handleOpen} 
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
        console.log(props);               
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
    //TODO - map function to update yh
})

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsForm);