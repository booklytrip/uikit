import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@kadira/react-storybook-decorator-centered';

import Checkbox from '../Checkbox.jsx';

storiesOf('Checkbox', module)
    .addDecorator(centered)
    .add('default', () => (
        <Checkbox
            label="Lorem ipsum dolor sit amet"
            onChange={action('onChange')}
        />
    ))
    .add('disabled', () => (
        <Checkbox
            label="Lorem ipsum dolor sit amet"
            onChange={action('onChange')}
            disabled
        />
    ))
    .add('checked', () => (
        <Checkbox
            label="Lorem ipsum dolor sit amet"
            onChange={action('onChange')}
            checked
        />
    ))
    .add('toggle', () => (
        <Checkbox
            label="Lorem ipsum dolor sit amet"
            onChange={action('onChange')}
            toggle
        />
    ));
