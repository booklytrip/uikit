/**
 * The component represents a menu with list of checkbox components
 *
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { every, map } from 'lodash';

import { Checkbox as BaseCheckbox, List as BaseList } from 'semantic-ui-react';

type CheckboxOption = {
    className: string,
    name: string,
    label: string | Object,
    checked?: boolean,
    details?: string | Object,
};

type CheckboxListItemProps = {
    onChange: Function,
    onUncheckOther?: Function,
} & CheckboxOption;

type CheckboxListProps = {
    className: string,
    options: Array<CheckboxOption>,
    onChange: Function,
    onSelectAll?: Function,
    onUncheckOther?: Function,
};
const ListItem = styled(BaseList.Item)`
    display: flex !important;
    flex-direction: row;

    overflow: hidden;
    position: relative;
    line-height: 2.25rem;

    &:hover {
        & .details {
            opacity: 0;
        }

        & .uncheck {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const ListItemContent = styled(BaseList.Content)`flex: 0 0 auto;`;

const Checkbox = styled(BaseCheckbox)`flex: 1 1 auto;`;

const List = styled(BaseList)`margin: 0px !important;`;

const Details = styled.span`text-align: right;`;

const UncheckOther = styled.a`
    position: absolute;
    top: 7px;
    right: 8px;
    bottom: 8px;
    opacity: 0;
    transform: translateY(30px);
    text-transform: uppercase;
    cursor: pointer;
    color: #1b1c1d;
    font-weight: 600;
    font-size: 0.9em;
`;

const Label = styled.label`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

/**
 * A single row in checkbox list
 */
const CheckboxListItem = ({
    name,
    label,
    checked,
    details,
    onChange,
    onUncheckOther,
}: CheckboxListItemProps) => (
    <ListItem>
        <Checkbox
            name={name}
            label={<Label>{label}</Label>}
            checked={checked}
            onChange={onChange}
        />

        <ListItemContent floated="right">
            <Details className="details">{details}</Details>
            {onUncheckOther && (
                <UncheckOther className="uncheck" onClick={onUncheckOther}>
                    ONLY
                </UncheckOther>
            )}
        </ListItemContent>
    </ListItem>
);

const CheckboxList = ({
    className,
    options,
    onChange,
    onSelectAll,
    onUncheckOther,
}: CheckboxListProps) => (
    <List
        className={className}
        size="large"
        verticalAlign="middle"
        relaxed
        selection
    >
        {onSelectAll && (
            <CheckboxListItem
                name="all"
                label="All"
                checked={every(options, i => i.checked)}
                onChange={onSelectAll}
            />
        )}

        {map(options, option => (
            <CheckboxListItem
                key={option.name}
                onChange={(e, { checked }) => {
                    onChange(option.name, checked);
                }}
                onUncheckOther={
                    onUncheckOther &&
                    (() => {
                        onUncheckOther(option.name);
                    })
                }
                {...option}
            />
        ))}
    </List>
);

export default CheckboxList;
