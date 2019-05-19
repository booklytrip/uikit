/**
 * @flow
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { isObject, isString, has, isFunction } from 'lodash';
import { Form, Label } from 'semantic-ui-react';

type Meta = {
    touched: boolean,
    error: string,
};

type FormErrorMessageProps = {
    reason: string | Object,
    pointer?: string,
};

type FormFieldProps = {
    input: Object,
    meta: Meta,
    label?: string,
    inline?: boolean,
    required?: boolean,
    width: any,
    errorPointer?: string,
    className?: string,
    simpleValue?: boolean,
    type: string,
    props: any,
};

/**
 * A thin helper that decices how to present an error message.
 * It supports two cases:
 *   1. The error is react-intl message descriptor and should
 *      be rendered in context of FormattedMessage component.
 *   2. The error is a regular string and can be rendered as it is.
 *
 * @param {String|Object} message - The error message
 */
const renderErrorMessage = (message: any) => {
    // The case for object of react-intl message description
    if (
        isObject(message) &&
        has(message, 'id') &&
        has(message, 'defaultMessage')
    ) {
        return <FormattedMessage {...message} />;
    } else if (isString(message)) {
        // The basic string can be just returned
        return message;
    }

    return '';
};

/**
 * Render error message for single field
 *
 * @param {String} reason - Reason of the error
 */
const FormErrorMessage = ({ reason, pointer }: FormErrorMessageProps) => (
    <Label color="red" pointing={pointer || true} basic>
        {renderErrorMessage(reason)}
    </Label>
);

/**
 * Render component with specified list of props.
 */
const renderComponent = (Component: any, props: Object) => {
    if (isFunction(Component)) {
        return <Component {...props} />;
    }

    return React.cloneElement(Component, props);
};

/**
 * Extract and return value from specified data object
 * provided by input onChange event.
 */
const getSimpleValue = (data: Object, type?: string) => {
    if (type === 'checkbox') {
        return data.checked;
    } else {
        return data.value;
    }
};

/**
 * Takes input property provided by redux-form and distruct it
 * algon side with other props and pass them to the component.
 *
 * @param {Node} Component - Wrapped component
 */
const FormComponent = (Component: any) => ({
    input,
    meta: { touched, error },
    simpleValue,
    ...props
}: {
    input: Object,
    meta: Meta,
    simpleValue: boolean,
    props: any,
}) =>
    renderComponent(Component, {
        ...input,
        ...props,
        onChange: (e, data) => {
            if (data) {
                return input.onChange(
                    simpleValue ? getSimpleValue(data, props.type) : data,
                );
            }
            return input.onChange(e);
        },
    });

/**
 * Takes input property provided by redux-form and distruct it
 * algon side with other props and pass them to the component.
 *
 * @param {Node} component - Wrapped component
 */
const FormField = (component: Function) => ({
    input,
    meta: { touched, error },
    label,
    inline,
    required,
    width,
    errorPointer,
    className,
    simpleValue,
    type,
    ...props
}: FormFieldProps) => {
    return (
        <Form.Field
            className={className}
            error={touched && !!error}
            required={required}
            inline={inline}
            width={width}
        >
            {label && <label>{label}</label>}
            {renderComponent(component, {
                ...input,
                ...props,
                type,
                onChange: (e, data) => {
                    if (data) {
                        return input.onChange(
                            simpleValue ? getSimpleValue(data, type) : data,
                        );
                    }
                    return input.onChange(e);
                },
            })}
            {touched &&
                (isObject(error) || isString(error)) && (
                    <FormErrorMessage reason={error} pointer={errorPointer} />
                )}
        </Form.Field>
    );
};

export { FormComponent, FormField, FormErrorMessage };
