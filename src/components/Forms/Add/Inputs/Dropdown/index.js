import React from 'react';
import { Form } from 'semantic-ui-react';

const Dropdown = ({
    objects,
    type,
    handleSelect,
    ...rest
}) => {
    const anyObjects = () => {
        switch(type) {
            case 'Device':
                return objects.devices !== null &&
                        objects.devices.length > 0;
            case 'Location':
                return objects.locations !== null &&
                        objects.locations.length > 0;
            default:
                return false;
        }
    }

    const objectsError = () => {
        return objects.error;
    }

    const objectsLoading = () => {
        return objects.isLoading;
    }

    const _dropdownData = (objects) => {
        if (objectsError() || !anyObjects())
            return [];
        
        var data = objects.forEach(item => {           
            item.label = item.name;
            item.value = item._id;
            item.type = type;              
        });

        return data;
    }  

    return(
        <Form.Select
            fluid
            label = { type }
            options = { _dropdownData() }
            onChange = { handleSelect }
            placeholder = { !anyObjects() ? 'No available ' + type + 's...' : type }
            loading = { objectsLoading() }
            error = { objectsError() || !anyObjects() }
            {...rest}
        />
    );
};


export default Dropdown;