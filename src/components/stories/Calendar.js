import React from 'react';
import { IntlProvider } from 'react-intl';
import { storiesOf } from '@storybook/react';
import centered from '@kadira/react-storybook-decorator-centered';
import { action } from '@storybook/addon-actions';
import { subDays, addDays } from 'date-fns';

import Calendar, { YearMonthForm } from '../Calendar.jsx';
import { Icon } from 'semantic-ui-react';

storiesOf('Calendar', module)
    .addDecorator(centered)
    .addDecorator(getStory => (
        <IntlProvider locale="en">{getStory()}</IntlProvider>
    ))
    .add('default', () => <Calendar onChange={action('onChange')} />)
    .add('with placeholder', () => (
        <Calendar placeholder="Select date" onChange={action('onChange')} />
    ))
    .add('with icon', () => (
        <Calendar
            icon={<Icon name="calendar" />}
            iconPosition="left"
            placeholder="Select date"
            onChange={action('onChange')}
        />
    ))
    .add('with value', () => (
        <Calendar
            icon={<Icon name="calendar" />}
            iconPosition="left"
            value={new Date()}
            onChange={action('onChange')}
        />
    ))
    .add('with multiple months', () => (
        <Calendar
            icon={<Icon name="calendar" />}
            iconPosition="left"
            value={new Date()}
            dayPickerProps={{
                numberOfMonths: 2,
                fixedWeeks: true,
            }}
            onChange={action('onChange')}
        />
    ))
    .add('switch years and months', () => (
        <Calendar
            icon={<Icon name="calendar" />}
            iconPosition="left"
            value={new Date()}
            onChange={action('onChange')}
            switchYearMonth
        />
    ))
    .add('with min and max date', () => (
        <Calendar
            icon={<Icon name="calendar" />}
            iconPosition="left"
            value={new Date()}
            onChange={action('onChange')}
            minDate={subDays(new Date(), 5)}
            maxDate={addDays(new Date(), 5)}
            switchYearMonth
        />
    ));
