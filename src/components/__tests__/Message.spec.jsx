import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Message, MessageHeader } from '../Message';

describe('Message', () => {
    it('renders without crashing', () => {
        mount(<Message />)
    });

    describe('Snapshots', () => {
        it('renders with custom size', () => {
            const rendered = renderer.create(<Message size="small">Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with custom color', () => {
            const rendered = renderer.create(<Message color="orange">Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders of basic type', () => {
            const rendered = renderer.create(<Message basic>Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders of warning type', () => {
            const rendered = renderer.create(<Message warning>Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders of info type', () => {
            const rendered = renderer.create(<Message info>Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders of error type', () => {
            const rendered = renderer.create(<Message error>Message</Message>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with header', () => {
            const rendered = renderer.create(
                <Message>
                    <MessageHeader>Header</MessageHeader>
                    Message
                </Message>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
