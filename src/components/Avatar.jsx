import styled from 'styled-components';
import BaseAvatar from 'react-avatar';

const Avatar = styled(BaseAvatar)`
    ${props => props.spaced === 'left' && `margin-left: 0.5em;`}
    ${props => props.spaced === 'right' && `margin-right: 0.5em;`}
`;

export default Avatar;