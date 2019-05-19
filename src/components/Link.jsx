/**
 * A basic anchor component.
 *
 * It will use react router if a router object
 * is passed over context.
 *
 * @flow
 */

import React, {Component} from 'react';

type Props = {
    href?: string,
    onClick?: Function,
    className?: string,
    style?: Object,
};

class Link extends Component {
    props: Props;

    onClick: Function;

    constructor(props: Props, context: Object) {
        super(props, context);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e: Object) {
        const {href, onClick} = this.props;
        if (onClick) {
            onClick(e);
        }

        if (e.defaultPreed) {
            return;
        }

        if (this.context.router) {
            e.preventDefault();
            this.context.router.transitionTo(href);
        }
    }

    render() {
        return <a {...this.props} onClick={this.onClick} />;
    }
}

Link.contextTypes = {
    router: React.PropTypes.func,
};

export default Link;
