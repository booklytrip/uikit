import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@kadira/react-storybook-decorator-centered';

import EllipsisLoader from '../EllipsisLoader.jsx';

storiesOf('EllipsisLoader', module)
    .addDecorator(centered)
    .add('default', () => <EllipsisLoader />)
    .add('with label', () => <EllipsisLoader label="Loading..." />)
    .add('inline', () => (
        <div>
            Loaders can appear inline with content
            <EllipsisLoader size="mini" inline />
        </div>
    ))
    .add('different collor', () => (
        <EllipsisLoader color="rgb(161, 183, 195)" />
    ))
    .add('different sizes', () => (
        <div>
            <EllipsisLoader size="mini" label="mini" />
            <EllipsisLoader size="tiny" label="tiny" />
            <EllipsisLoader size="small" label="small" />
            <EllipsisLoader size="medium" label="medium" />
            <EllipsisLoader size="large" label="large" />
            <EllipsisLoader size="big" label="big" />
            <EllipsisLoader size="huge" label="mihugeni" />
            <EllipsisLoader size="massive" label="massive" />
        </div>
    ))
    .add('custom size', () => (
        <div>
            <EllipsisLoader size="0.5em" />
            <EllipsisLoader size="0.6em" />
            <EllipsisLoader size="0.7em" />
            <EllipsisLoader size="0.8em" />
            <EllipsisLoader size="0.9em" />
        </div>
    ));
