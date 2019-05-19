import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@kadira/react-storybook-decorator-centered';

import Counter from '../Counter.jsx';

storiesOf('Counter', module)
    .addDecorator(centered)
    .add('with placeholder', () => (
        <Counter placeholder="Enter value" onChange={action('onChange')} />
    ))
    .add('with value', () => (
        <Counter
            placeholder="Enter value"
            value={5}
            onChange={action('onChange')}
        />
    ))
    .add('message when max is reached', () => (
        <Counter
            placeholder="Enter value"
            value={1}
            max={1}
            maxMessage="The max value is reached"
            onChange={action('onChange')}
        />
    ))
    .add('different size', () => (
        <div>
            <p><Counter size="mini" placeholder="mini" /></p>
            <p><Counter size="small" placeholder="small" /></p>
            <p><Counter size="large" placeholder="large" /></p>
            <p><Counter size="big" placeholder="big" /></p>
            <p><Counter size="huge" placeholder="huge" /></p>
            <p><Counter size="massive" placeholder="massive" /></p>
        </div>
    ));
