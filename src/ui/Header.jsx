import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../features/authentication/UserAvatar'

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 2.8rem 3.4rem;
    border-bottom: 1px solid #1a0e0e;

    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
`
export default function Header() {
    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
        </StyledHeader>
    )
}
