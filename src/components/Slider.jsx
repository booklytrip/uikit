/**
 * The component is thin wrapper around noUiSlider library
 *
 * Documentation: https://refreshless.com/nouislider/
 *
 * @flow
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import noUiSlider from 'nouislider';
import classNames from 'classnames';
import { upperFirst } from 'lodash';

import './stylesheets/Slider.css';

type SliderRange = {
    min: number,
    max: number,
};

type SliderFormat = {
    from: Function,
    to: Function,
};

type SliderProps = {
    start: Array<number>,
    step: number,
    range: SliderRange,
    connect: boolean | Array<boolean>,
    onUpdate?: Function,
    onSlide?: Function,
    onSet?: Function,
    onChange?: Function,
    onStart?: Function,
    onEnd?: Function,
    format?: SliderFormat,
    disabled?: boolean,
    className?: string,
    style?: Object,
};

class Slider extends Component {
    props: SliderProps;

    static defaultProps: SliderProps = {
        start: [0, 100],
        step: 1,
        range: {
            min: 0,
            max: 100,
        },
        connect: true,
        format: {
            from: i => parseInt(i, 10),
            to: i => parseInt(i, 10),
        },
    };

    componentDidMount() {
        const { start, step, range, connect, format } = this.props;

        // Init noUiSlider
        const node = ReactDOM.findDOMNode(this);
        noUiSlider.create(node, {
            start,
            step,
            range,
            connect,
            format,
        });

        // Set up events
        const events = ['update', 'slide', 'set', 'change', 'start', 'end'];
        events.forEach(eventName => {
            const eventHandler = `on${upperFirst(eventName)}`;
            if (this.props[eventHandler]) {
                node.noUiSlider.on(eventName, this.props[eventHandler]);
            }
        });
    }

    componentWillReceiveProps(nextProps: SliderProps) {
        const { range, step, start } = nextProps;

        const node = ReactDOM.findDOMNode(this);
        if (range !== this.props.range) {
            node.noUiSlider.updateOptions({ range });
        }

        if (step !== this.props.step) {
            node.noUiSlider.updateOptions({ step });
        }

        if (start !== this.props.start) {
            node.noUiSlider.set(start, false);
        }
    }

    render() {
        const { className, style, disabled } = this.props;
        return (
            <div
                className={classNames('slider', className)}
                style={style}
                disabled={disabled}
            />
        );
    }
}

export default Slider;
