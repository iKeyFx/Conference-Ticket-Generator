import { FaLongArrowAltRight } from "react-icons/fa";
import LogoIconTicket from "../assets/icon_ticket.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #052f35;
  padding: 0.2rem 0.8rem;
  border-radius: 24px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
  }

  li {
    cursor: pointer;
    color: #b3b3b3;

    &:hover {
      color: #ffffff;
    }
  }

  @media (max-width: 900px) {
    ul {
      display: none;
    }
  }
`;

const StyledLogoDiv = styled.div`
  display: flex;
  place-items: center;
  gap: 0.2rem;

  span {
    font-family: "Road Rage", serif;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #0a0c11;

  &:hover {
    background-color: #24a0b5;
    color: #d9d9d9;
  }
`;
const ImageDiv = styled.div`
  background-color: #052f35;
  border: 2px solid #0e464f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 12px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogoDiv>
          <ImageDiv>
            <img src={LogoIconTicket} alt="ticket icon" />
          </ImageDiv>
          <span>Ticket.com</span>
        </StyledLogoDiv>
        <ul>
          <li>Events</li>
          <li>My Tickets</li>
          <li>About Projects</li>
        </ul>
        <Button>
          MY TICKETS <FaLongArrowAltRight />
        </Button>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
