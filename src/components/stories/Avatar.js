import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@kadira/react-storybook-decorator-centered';

import Avatar from '../Avatar.jsx';

const styles = {
    sizes: {
        width: '200px',
        textAlign: 'left',
        margin: '0 auto 0 auto',
    },
};

storiesOf('Avatar', module)
    .addDecorator(getStory => {
        return (
            <div className="ui center aligned container">
                {getStory()}
            </div>
        );
    })
    .addDecorator(centered)
    .add('text', () => <Avatar name="John Smith" />)
    .add('text with rounded borders', () => <Avatar name="John Smith" round />);
