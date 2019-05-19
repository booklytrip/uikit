import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Tabs, Tab } from '../Tab';

describe('Tab', () => {
    it('renders without crashing', () => {
        mount(<Tab />);
    });
    
    describe('Snapshots', () => {
        it('renders in loading state', () => {
            const rendered = renderer.create(<Tab loading>Tab</Tab>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders in active state', () => {
            const rendered = renderer.create(<Tab active>Tab</Tab>);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});

describe('Tabs', () => {
    it('renders without crashing', () => {
        mount(<Tabs />);
    });
    
    describe('Snapshots', () => {
        it('renders with multiple tabs', () => {
            const rendered = renderer.create(
                <Tabs>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                </Tabs>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders formated menu with tabs', () => {
            const rendered = renderer.create(
                <Tabs tabular>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                </Tabs>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders menu as a secondary', () => {
            const rendered = renderer.create(
                <Tabs secondary>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                </Tabs>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with a pointing menu', () => {
            const rendered = renderer.create(
                <Tabs pointing>
                    <Tab>First</Tab>
                    <Tab>Second</Tab>
                </Tabs>
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
