/**
 * @flow
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';

import { size as stylesSize } from './styles.js';

type Size =
    | string
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';

type EllipsisLoaderProps = {
    size: Size,
    color?: string,
    label?: string,
    inline?: boolean,
};

const bounce = keyframes`
    0%, 80%, 100% { 
        transform: scale(0);
    } 40% { 
        transform: scale(1.0);
    }
`;

const RootContainer = styled.div`
    text-align: center;
    ${props => props.inline && `display: inline-block;`}
`;

const BounceWrapper = styled.div`
    & > div {
        width: 1rem;
        height: 1rem;
        borderRadius: 100%;
        display: inline-block;
        animation: ${bounce} 1.4s infinite ease-in-out both;        
        ${props => props.color && `background-color: ${props.color};`}
        ${props => props.size && `
            width: ${stylesSize[props.size] ? stylesSize[props.size].width : props.size};
            height: ${stylesSize[props.size] ? stylesSize[props.size].height : props.size};
        `}
    }
`;

const FirstBounce = styled.div`
     animation-delay: -0.32s !important;
`;

const SecondBounce = styled.div`
    animation-delay: -0.16s !important;
`;

const ThirdBounce = styled.div``;

const Label = styled.div`
    ${props => props.size && `
        font-size: ${stylesSize[props.size] ? stylesSize[props.size].fontSize : props.size};
    `}
`;

const EllipsisLoader = ({
    size,
    color,
    label,
    inline,
}: EllipsisLoaderProps) => (
    <RootContainer inline={inline}>
        <BounceWrapper size={size} color={color}>
            <FirstBounce />
            <SecondBounce />
            <ThirdBounce />
        </BounceWrapper>
        <Label size={size}>{label}</Label>
    </RootContainer>
);

EllipsisLoader.defaultProps = {
    size: 'medium',
    color: '#333',
};

export default EllipsisLoader;
