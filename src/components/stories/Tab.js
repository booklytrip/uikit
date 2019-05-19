import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@kadira/react-storybook-decorator-centered';

import { Tabs, Tab } from '../Tab.jsx';

storiesOf('Tab', module)
    .addDecorator(centered)
    .add('one tab', () => (
        <Tabs>
            <Tab label="First">
                First tab
            </Tab>
        </Tabs>
    ))
    .add('few tabs', () => (
        <Tabs>
            <Tab label="First">
                First tab
            </Tab>
            <Tab label="Second">
                Second tab
            </Tab>
            <Tab label="Third">
                Third tab
            </Tab>
        </Tabs>
    ));
