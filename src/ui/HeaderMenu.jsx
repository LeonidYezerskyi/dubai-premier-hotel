import styled from "styled-components"
import Logout from "../features/authentication/Logout"
import ButtonIcon from "./ButtonIcon"
import { HiOutlineUser } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import DarkModeToggle from "./DarkModeToggle"

const StyledHeadeMenu = styled.ul`
    display: flex;
    gap: 04 rem;
`
const HeaderMenu = () => {
    const navigate = useNavigate();

    return (
        <StyledHeadeMenu>
            <li>
                <ButtonIcon onClick={() => navigate('/account')}>
                    <HiOutlineUser />
                </ButtonIcon>
            </li>
            <li>
                <DarkModeToggle />
            </li>
            <li>
                <Logout />
            </li>
        </StyledHeadeMenu>
    )
}

export default HeaderMenu