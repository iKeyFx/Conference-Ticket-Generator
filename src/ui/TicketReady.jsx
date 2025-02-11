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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-primary);
  border: 1px solid var(--color-secondary);
  border-radius: 14px;
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  h2 {
    color: var(--color-accent);
    margin-bottom: 1rem;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid var(--color-accent);
`;

const EventContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TicketBadgeRight = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
`;

const TicketBadgeLeft = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
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

const EventDateTime = styled.div`
  h4 {
    margin-bottom: 0;
    color: var(--color-accent);
  }

  p {
    margin: 4px 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

function TicketReady() {
  const location = useLocation();
  const {
    ticketType,
    quantity,
    formData: { imageUrl, firstName, lastName, email },
  } = location.state;
  const navigate = useNavigate();
  const [badgeImage, setBadgeImage] = useState(null);

  useEffect(() => {
    if (ticketType === "Regular Access") {
      setBadgeImage(TicketReg);
    }
    if (ticketType === "VIP Access") {
      setBadgeImage(TicketVIP);
    }
    if (ticketType === "VVIP Access") {
      setBadgeImage(TicketVVIP);
    }
  }, [ticketType]);

  const handleGetNewTicket = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("imagePreview");
    navigate("/step-1");
  };

  return (
    <CardComponent title="Your Ticket Is Ready" readyPage={true} progress={3}>
      <Container>
        <p>You can download or check your email for a copy.</p>
        <Ticket>
          <TicketBadgeRight src={badgeImage} alt="Ticket Badge" />
          <TicketBadgeLeft src={badgeImage} alt="Ticket Badge" />
          <h2>Techember Fest</h2>

          <TicketHeader>
            <p>Event Ticket</p>
          </TicketHeader>

          <EventContent>
            <div>
              <EventTitle>
                <h4>Techember Fest 2025</h4>
                <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
              </EventTitle>
              <EventDateTime>
                <p>📅 March 15, 2025</p>
                <p>
                  <WiTime8 />
                  8:00 PM
                </p>
              </EventDateTime>
            </div>
            <div>
              <Avatar src={imageUrl} alt="Avatar" />
            </div>
          </EventContent>

          <TicketDetails>
            <div>
              <span>Name:</span>
              <p>{`${firstName} ${lastName}`}</p>
            </div>
            <div>
              <span>Email:</span>
              <p>{email}</p>
            </div>
            <div>
              <span>Ticket Number:</span>
              <p>123546707390383930</p>
            </div>
          </TicketDetails>
        </Ticket>
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
