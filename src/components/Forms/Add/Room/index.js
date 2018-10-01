import React from 'react';
import { Form } from 'semantic-ui-react';
import Yup from 'yup';
import { Add } from '../../../../containers/actions/add';
import * as Thing from '../../../../containers/Things';
import { withFormik } from 'formik';
import { SubmitButton } from '../Inputs';
import { setModalOpen } from '../../../../containers/Location/action';
import { connect } from 'react-redux';

const LocationsForm = props => {
    const {
        values,        
        isSubmitting,
        handleChange,
        handleSubmit  
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
        values.created_by_user = props.first_name
        props.addLocation(values, props.jwt);
        setTimeout(() => props.setModalOpen(false), 500);     
    },
    displayName : 'Add Device'
})(LocationsForm)

const mapStateToProps = state => ({
    first_name : state.user.first_name,
    jwt : state.login.token
})

const mapDispatchToProps = (state) => dispatch => ({
    addLocation : (location, auth) => { dispatch(Add(Thing.Location, location, auth)) },
    setModalOpen : (modalState) => { dispatch(setModalOpen(false)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationsFormik);