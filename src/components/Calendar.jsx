/**
 * @flow
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { format as formatDate, parse, startOfDay, isSameYear } from 'date-fns';
import styled from 'styled-components';
import { compose, withHandlers, withState } from 'recompose';
import { range } from 'lodash';

import { List, Input, Popup, Dropdown } from 'semantic-ui-react';
import DayPicker from 'react-day-picker';

require('semantic-ui-css/semantic.css');
import 'react-day-picker/lib/style.css';

import LocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ru';
import 'moment/locale/lv';

import type { Intl } from '../types';

type IconPosition = 'left' | 'right';
type PopupPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right';

type CalendarProps = {
    className?: string,
    value?: Date,
    // A calendar can be formatted with an icon
    icon?: string | Object,
    // An icon can have different position
    iconPosition?: IconPosition,
    placeholder?: string,
    position?: PopupPosition,
    format?: string,
    // day for first day column (0 = Sunday)
    firstDayOfWeek?: number,
    disabled?: boolean,
    onChange: Function,
    onOpen: Function,
    onClose: Function,
    open: boolean,
    dayPickerProps?: Object,
    intl: Intl,
    // if set as true, show form to switch yearn and month
    switchYearMonth: boolean,
    minDate: Object,
    maxDate: Object,
};

const CalendarPopup = styled(Popup)`padding: 0px !important;`;

// Component will receive date, locale and localeUtils props
export const YearMonthForm = ({
    date,
    minDate,
    maxDate,
    localeUtils,
    onChange,
}) => {
    const currentYear = new Date().getFullYear();
    const fromMonth = minDate || new Date(currentYear, 0);
    const toMonth = maxDate || new Date(currentYear + 10, 11);

    const years = [];
    for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
        years.push(i);
    }

    const localizedMonths = localeUtils.getMonths();
    let months = [];
    if (isSameYear(fromMonth, toMonth)) {
        for (let i = fromMonth.getMonth(); i <= toMonth.getMonth(); i += 1) {
            months.push(i);
        }
    } else {
        months = range(0, 12);
    }

    return (
        <form className="DayPicker-Caption">
            <List horizontal>
                <List.Item>
                    <Dropdown
                        name="month"
                        onChange={(e, { value }) => {
                            onChange(new Date(date.getFullYear(), value));
                        }}
                        value={date.getMonth()}
                        options={months.map(month => ({
                            value: month,
                            text: localizedMonths[month],
                        }))}
                        scrolling
                        inline
                    />
                </List.Item>
                <List.Item>
                    <Dropdown
                        name="year"
                        onChange={(e, { value }) => {
                            onChange(new Date(value, date.getMonth()));
                        }}
                        value={date.getFullYear()}
                        options={years.map(year => ({
                            value: year,
                            text: year,
                        }))}
                        scrolling
                        inline
                    />
                </List.Item>
            </List>
        </form>
    );
};

/**
 * Return true if provided date should be disabled
 * 
 * @param {String} date     - The date to verify 
 * @param {String} fromDate - All dates before this should be disabled 
 * @param {String} toDate   - All dates after this should be disabled
 */
const disabledDays = (date, fromDate, toDate) => {
    if (
        fromDate &&
        startOfDay(fromDate).getTime() > startOfDay(date).getTime()
    ) {
        return true;
    }

    if (toDate && startOfDay(toDate).getTime() < startOfDay(date).getTime()) {
        return true;
    }

    return false;
};

/**
 * A calendar component attachable to input element
 */
const Calendar = ({
    className,
    value,
    placeholder,
    disabled,
    icon,
    iconPosition,
    position,
    format,
    onChange,
    onOpen,
    onClose,
    open,
    dayPickerProps,
    intl,
    switchYearMonth,
    minDate,
    maxDate,
}: CalendarProps) => {
    return (
        <CalendarPopup
            trigger={
                <Input
                    className={className}
                    icon={icon}
                    iconPosition={iconPosition}
                    value={value && formatDate(value, format)}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly
                />
            }
            on="click"
            position={position}
            open={open}
            onOpen={onOpen}
            onClose={() => {
                onClose(value && formatDate(value, format));
            }}
            flowing
        >
            <Popup.Content>
                <DayPicker
                    month={value ? parse(value) : new Date()}
                    onDayClick={date => {
                        onChange(formatDate(date, format), true);
                    }}
                    localeUtils={LocaleUtils}
                    locale={intl.locale}
                    captionElement={
                        switchYearMonth && (
                            <YearMonthForm
                                onChange={onChange}
                                minDate={minDate}
                                maxDate={maxDate}
                            />
                        )
                    }
                    disabledDays={date => disabledDays(date, minDate, maxDate)}
                    {...dayPickerProps}
                />
            </Popup.Content>
        </CalendarPopup>
    );
};

Calendar.defaultProps = {
    format: 'YYYY-MM-DD',
    position: 'bottom left',
};

// Hold current state of the popup
const openState = withState('open', 'setOpen', false);

// Handle actions and transition the popup in correct state
const handlers = withHandlers({
    onOpen: ownProps => () => {
        ownProps.setOpen(true);
        if (ownProps.onFocus) {
            ownProps.onFocus();
        }
    },
    onClose: ownProps => value => {
        ownProps.setOpen(false);
        if (ownProps.onBlur) {
            ownProps.onBlur(value);
        }
    },
    onChange: ownProps => (value, close) => {
        ownProps.onChange(value);

        if (close) {
            ownProps.setOpen(false);
        }
    },
});

export default compose(openState, handlers, injectIntl)(Calendar);
