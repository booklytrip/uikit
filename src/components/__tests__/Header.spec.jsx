import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header, SubHeader } from '../Header';

describe('Header', () => {
    it('renders header without crashing', () => {
        mount(<Header />);
    });

    it('renders sub-header without crashing', () => {
        mount(<SubHeader />);
    });

    describe('Snapshots', () => {
        it('renders header of different type', () => {
            const rendered = renderer.create(
                <Header type="h2">My Header</Header>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders header with an icon', () => {
            const rendered = renderer.create(
                <Header icon>
                    My Header
                </Header>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders centered header', () => {
            const rendered = renderer.create(
                <Header centered>
                    My Header
                </Header>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders dividing header', () => {
            const rendered = renderer.create(
                <Header dividing>
                    My Header
                </Header>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
