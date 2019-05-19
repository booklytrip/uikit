/**
 * A checkbox allows a user to select a value from a small set of options,
 * often binary.
 *
 * @flow
 */

import React from 'react';
import classNames from 'classnames';

export type CheckboxProps = {
    style: Object,
    radio?: boolean,
    checked?: boolean,
    disabled?: boolean,
    toggle?: boolean,
    label?: string | Object,
    value: string,
    name: string,
    onChange: Function,
};

const styles = {
    checkbox: {
        display: 'flex',
    },
    label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
};

const Checkbox = (
    {
        style,
        radio,
        checked,
        disabled,
        toggle,
        label,
        value,
        name,
        onChange,
    }: CheckboxProps,
) => (
    <div
        className={classNames('ui checkbox', {
            radio,
            toggle,
            disabled,
        })}
        style={Object.assign({}, styles.checkbox, style)}
    >
        <input
            type={radio ? 'radio' : 'checkbox'}
            id={`${name}-${value}`}
            name={name}
            value={value}
            checked={checked}
            onChange={e => onChange(radio ? value : !checked)}
        />
        {label &&
            <label style={styles.label} htmlFor={`${name}-${value}`}>
                {label}
            </label>}
    </div>
);

export default Checkbox;
