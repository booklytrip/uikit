/**
 * @flow
 */

import React from 'react';
import classNames from 'classnames';
import { isNil } from 'lodash';

import { Button, Popup } from 'semantic-ui-react';
import popupWithCondition from '../lib/popupWithCondition';

type CounterSize = 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';

type CounterProps = {
    style?: Object,
    inputStyle?: Object,
    placeholder?: string,
    value: string,
    formatValue?: Function,
    min?: number,
    max?: number,
    maxMessage?: string,
    size?: CounterSize,
    onChange?: Function,
};

const styles = {
    input: {
        textAlign: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderLeft: 0,
        borderRight: 0,
    },
    leftButton: {
        borderRadius: '0.28571429rem 0px 0px 0.28571429rem',
        borderWidth: 0,
    },
    rightButton: {
        borderRadius: '0px 0.28571429rem 0.28571429rem 0px',
        borderWidth: 0,
    },
    disabledButton: {
        opacity: 0.45,
    },
};

const ConditionalPopup = popupWithCondition(Popup);

/**
 * Return incremented value. If value is greater then max return max value.
 *
 * @param {Number} originalValue - The current value
 * @param {Number} max           - The max allowed value
 *
 * @return {Number}
 */
const incValue = (originalValue: number, max: number) => {
    if (max === undefined) {
        return originalValue + 1;
    }

    const value = originalValue || 0;
    return value + 1 < max ? value + 1 : max;
};

/**
 * Return decremented value. If value is less than min, return min value.
 *
 * @param {Number} originalValue - The current value
 * @param {Number} min           - The min allowed value
 *
 * @return {Number}
 */
const decValue = (originalValue: number, min: number) => {
    if (min === undefined) {
        return originalValue - 1;
    }

    const value = originalValue || min;
    return value - 1 > min ? value - 1 : min;
};

const Counter = ({
    style,
    inputStyle,
    value: originalValue,
    formatValue,
    placeholder,
    min,
    max,
    maxMessage,
    size,
    onChange,
}: CounterProps) => {
    const value = !isNil(originalValue) ? parseInt(originalValue, 10) : '';

    if (!formatValue) {
        formatValue = value => value;
    }

    return (
        <div className={classNames('ui action input', size)} style={style}>
            <Button
                style={Object.assign(
                    {},
                    styles.leftButton,
                    min === value && styles.disabledButton,
                )}
                onClick={e => {
                    e.preventDefault();
                    onChange(decValue(value, min));
                }}
                size={size}
                basic
            >
                -
            </Button>
            <input
                style={Object.assign({}, styles.input, inputStyle)}
                type="text"
                placeholder={placeholder}
                value={value}
                readOnly
            />
            <ConditionalPopup
                content={maxMessage}
                condition={value === max}
                position="top right"
                size="small"
                on="click"
                trigger={
                    <Button
                        style={Object.assign(
                            {},
                            styles.rightButton,
                            max === value && styles.disabledButton,
                        )}
                        onClick={e => {
                            e.preventDefault();
                            onChange(incValue(value || min, max));
                        }}
                        size={size}
                        basic
                    >
                        +
                    </Button>
                }
            />
        </div>
    );
};

export default Counter;
