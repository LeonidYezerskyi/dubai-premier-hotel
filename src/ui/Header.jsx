import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 2.8rem 3.4rem;
border-bottom: 1px solid #1a0e0e;
`
export default function Header() {
    return (
        <StyledHeader>Header</StyledHeader>
    )
}
