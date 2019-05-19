/**
 * @flow
 */

import React, { Component } from 'react';
import classNames from 'classnames';
import { map } from 'lodash';

import { Menu, Loader } from 'semantic-ui-react';

type TabMenuItemProps = {
    className: string,
    onClick: Function,
    label: string,
    index: number,
    active?: boolean,
};

type TabProps = {
    className: string,
    label: string,
    style?: Object,
    children: any,
    loading?: boolean,
    active?: boolean,
};

type TabsProps = {
    className: string,
    children: any,
    menuItemComponent: Object,
    tabular?: boolean,
    secondary?: boolean,
    pointing?: boolean,
};

const styles = {
    loader: {
        marginTop: '20px',
        marginBottom: '20px',
    },
};

/**
 * Single menu item element
 *
 * @param {String}   label   - An item label
 * @param {Number}   value   - A value of item
 * @param {Bool}     active  - Activates current menu item if set as true
 * @param {Function} onClick - A callback to trigger when item is clicked
 */
const TabMenuItem = ({
    className,
    label,
    value,
    active,
    onClick,
}: TabMenuItemProps) => (
    <Menu.Item
        onClick={onClick}
        className={className}
        active={active}
        value={value}
        link
    >
        {label}
    </Menu.Item>
);

/**
 * A single tab element
 *
 * @param {Bool}       loading  - Show loader for this tab
 * @param {Bool}       active   - Activates current tab if set as true
 * @param {Array|Node} children - A content to present inside tab
 * @param {Object}     style    - An object with styles applied to the tab
 */
const Tab = ({ className, loading, active, children, style }: TabProps) => (
    <div
        className={classNames('ui bottom attached tab segment', className, {
            active,
        })}
        style={style}
    >
        {active && loading
            ? <Loader size="big" style={styles.loader} inline centered />
            : children}
    </div>
);

/**
 * Tabs container manage internal state of active tab
 */
class Tabs extends Component {
    props: TabsProps;

    static defaultProps: {
        menuItemComponent: Object,
    };

    state: {
        active: number,
    };

    constructor(props: TabsProps) {
        super(props);

        this.state = {
            active: 0,
        };
    }

    onClick = (e, { value }) => {
        this.setState({ active: value });
    };

    render() {
        const { active } = this.state;

        const {
            className,
            children,
            menuItemComponent,
            secondary,
            pointing,
        } = this.props;

        const labels = React.Children.map(children, (child, idx) => ({
            key: idx,
            value: idx,
            label: child.props.label,
            active: active === idx,
        }));

        const MenuItemComponent = menuItemComponent;

        return (
            <div>
                <Menu
                    className={className}
                    items={labels}
                    activeIndex={active}
                    attached="top"
                    secondary={secondary}
                    pointing={pointing}
                    tabular
                >
                    {map(labels, label => (
                        <MenuItemComponent
                            key={label.key}
                            {...label}
                            onClick={this.onClick}
                        />
                    ))}
                </Menu>
                {React.Children.map(children, (child, idx) =>
                    React.cloneElement(child, {
                        active: active === idx,
                    }),
                )}
            </div>
        );
    }
}

Tabs.defaultProps = {
    menuItemComponent: TabMenuItem,
};

export { Tabs, Tab };
