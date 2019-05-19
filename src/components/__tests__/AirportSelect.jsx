import React from 'react';
import { mountWithIntl } from '../../lib/jest/intl';
import { AirportSelect } from '../AirportSelect';

describe('AirportSelect', () => {
    it('renders without crashing', () => {
        mountWithIntl(<AirportSelect loadOptions={() => []} />);
    });
});
