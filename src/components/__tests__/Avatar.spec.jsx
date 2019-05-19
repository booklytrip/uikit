import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ImageAvatar, NameAvatar } from '../Avatar';

describe('ImageAvatar', () => {
    it('renders without crashing', () => {
        mount(<ImageAvatar />);
    });
    
    describe('Snapshots', () => {
        it('renders with specified image', () => {
            const rendered = renderer.create(
                <ImageAvatar image="/avatars/image.png" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with specified name', () => {
            const rendered = renderer.create(
                <ImageAvatar name="Name" />    
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different border radius', () => {
            const rendered = renderer.create(
                <ImageAvatar radius={ 10 } />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});

describe('NameAvatar', () => {
    it('renders without crashing', () => {
        mount(<NameAvatar name="User Name" />);
    });
    
    describe('Snapshots', () => {
        it('renders with different number of characters', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B C" maxChars={ 3 } />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different border radius', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" radius={ 2 } />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different text color', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" textColor="FF0000" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different font', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" fontFamily="Arial" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different font weight', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" fontWeight="400" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different font size', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" fontWeight="12px" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different width', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" width="300" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different height', () => {
            const rendered = renderer.create(
                <NameAvatar name="A B" height="300" />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
