import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@kadira/react-storybook-decorator-centered';

import Slider from '../Slider.jsx';

storiesOf('Slider', module)
    .addDecorator(getStory => (
        <div className="ui center aligned container">
            {getStory()}
        </div>
    ))
    .addDecorator(centered)
    .add('basic', () => (
        <Slider
            range={{ min: 0, max: 100 }}
            start={0}
            connect={[true, false]}
            onUpdate={value => action('onUpdate')(value[0])}
        />
    ))
    .add('range', () => (
        <Slider
            range={{ min: 0, max: 100 }}
            start={[0, 100]}
            onUpdate={value => action('onUpdate')(value[0], value[1])}
        />
    ))
    .add('custom step', () => (
        <Slider
            range={{ min: 0, max: 100 }}
            start={0}
            connect={[true, false]}
            step={10}
            onUpdate={value => action('onUpdate')(value[0])}
        />
    ))
    .add('disabled', () => (
        <Slider
            range={{ min: 0, max: 100 }}
            start={0}
            connect={[true, false]}
            disabled
        />
    ));
