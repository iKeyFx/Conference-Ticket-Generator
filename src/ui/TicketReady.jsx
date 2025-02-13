import styled from "styled-components";
import CardComponent from "../component/CardComponent";
import PreviewImageDefault from "../assets/default_image.png";
import { StyledButton } from "./OrderDetails";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import TicketReg from "../assets/Property_Reg.png";
import TicketVIP from "../assets/Property_VIP.png";
import TicketVVIP from "../assets/Property_VVIP.png";
import { WiTime8 } from "react-icons/wi";
import NewReady from "./NewReady";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  /* text-align: center; */
`;

const ActionButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    padding: 8px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    border-radius: 8px;
    border: 1px solid var(--color-secondary);
    background-color: var(--color-primary);
    color: var(--color-accent);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-accent);
      color: var(--color-primary);
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

const TicketDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-gray-text);
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font-weight: 400;
    color: var(--color-accent);
  }
`;

const EventTitle = styled.div`
  h4 {
    margin-bottom: 0;
    color: var(--color-accent);
  }

  p {
    margin: 4px 0;
    color: var(--color-gray-text);
  }
`;

const TicketHeader = styled.div`
  background-color: var(--color-secondary);
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  p {
    margin: 0;
    color: var(--color-accent);
    font-weight: 600;
  }
`;
const TextDiv = styled.div`
  text-align: center;
`;
function TicketReady() {
  const location = useLocation();
  const {
    ticketType,
    quantity,
    formData: { imageUrl, name, email, textarea },
  } = location.state;
  const navigate = useNavigate();

  const handleGetNewTicket = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("imagePreview");
    navigate("/step-1");
  };

  return (
    <CardComponent
      // ContainerWidth="500px"
      title="Ready"
      readyPage={true}
      progress={3}
    >
      <Container>
        <TextDiv>
          <h3>Your Ticket Booked Ready!</h3>
          <p>You can download or check your email for a copy.</p>
        </TextDiv>

        <NewReady
          ticketType={ticketType}
          quantity={quantity}
          imageUrl={imageUrl}
          name={name}
          email={email}
          textarea={textarea}
        />

        <ActionButtons>
          <StyledButton onClick={handleGetNewTicket}>
            Get Another Ticket
          </StyledButton>
          <StyledButton submit={true}>Download Ticket</StyledButton>
        </ActionButtons>
      </Container>
    </CardComponent>
  );
}

export default TicketReady;
