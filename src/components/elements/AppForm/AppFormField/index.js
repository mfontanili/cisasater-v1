import * as React from 'react';
import PropTypes from 'prop-types';

import {
    BackButton,
    Button,
    FieldCheckbox,
    FieldDate,
    FieldHidden,
    FieldRadio,
    FieldSelect,
    FieldText,
    SubmitButton,
} from './AppFields';

const AppFormField = ({ item, ...props }) => {
    const { type, isDisabled, ...rest } = item;

    switch (type) {
        case 'text':
        case 'password':
        case 'email':
            return (
                <FieldText
                    {...item}
                    {...props}
                />
            );

        case 'date':
            return (
                <FieldDate
                    {...item}
                    {...props}
                />
            );

        case 'select':
            return (
                <FieldSelect
                    {...item}
                    {...props}
                />
            );

        case 'radio':
            return (
                <FieldRadio
                    {...item}
                    {...props}
                />
            );

        case 'checkbox':
            return (
                <FieldCheckbox
                    {...item}
                    {...props}
                />
            );

        case 'hidden':
            return (
                <FieldHidden
                    {...item}
                    {...props}
                />
            );

        case 'submit':
            return !isDisabled ? <SubmitButton {...rest} {...props} /> : null;

        case 'back':
            return <BackButton {...rest} {...props} />;

        case 'button':
            return <Button {...rest} {...props} />;

        default:
            return null;
    }
};

export default React.memo(AppFormField);

AppFormField.propTypes = {
    item: PropTypes.object,
};