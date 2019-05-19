import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@kadira/react-storybook-decorator-centered';

import CheckboxList from '../CheckboxList.jsx';

import { checkboxListOptions } from './fixtures';

storiesOf('CheckboxList', module)
    .addDecorator(centered)
    .add('default', () => (
        <CheckboxList
            options={checkboxListOptions}
            onChange={action('onChange')}
            onUncheckOther={action('onUncheckOther')}
        />
    ))
    .add('with select all', () => (
        <CheckboxList
            options={checkboxListOptions}
            onChange={action('onChange')}
            onSelectAll={action('onSelectAll')}
            onUncheckOther={action('onUncheckOther')}
        />
    ));
