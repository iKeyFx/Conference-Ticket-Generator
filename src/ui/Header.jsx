import { FaLongArrowAltRight } from "react-icons/fa";
import LogoIconTicket from "../assets/icon_ticket.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-header-bg);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-lg);

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
    gap: var(--spacing-lg);
  }

  li {
    cursor: pointer;
    color: var(--color-text-muted);

    &:hover {
      color: var(--color-text);
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
  gap: var(--spacing-xs);

  span {
    font-family: "Road Rage", serif;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-text);
  color: var(--color-dark);

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-text-light);
  }
`;

const ImageDiv = styled.div`
  background-color: var(--color-header-bg);
  border: 2px solid var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: var(--border-radius-md);
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
