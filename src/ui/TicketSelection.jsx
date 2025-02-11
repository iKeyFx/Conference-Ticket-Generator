import { GrLocationPin } from "react-icons/gr";
import styled from "styled-components";
import LocationIcon from "../assets/location_icon.png";
import CardComponent from "../component/CardComponent";
import { useState } from "react";
import { useNavigate } from "react-router";

// Styled Components
const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const TicketCardContainer = styled.div`
  background-color: #041e23;
  border-radius: 40px;
  border: 1px solid #0e464f;
  box-shadow: 0px 0px 19px 2px rgba(4, 30, 35, 0.68);
  padding: 24px;
  width: 350px;

  @media (max-width: 500px) {
    padding: 16px 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
`;

const ProgressBarBackground = styled.div`
  width: 20%;
  height: 5px;
  background-color: #0e464f;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--color-gray-text);
  flex: 1;
`;

const EventDetailsCard = styled.div`
  background: radial-gradient(circle at bottom, #031c20 20%, #072b30 80%);
  border: 1px solid #0e464f;
  border-radius: 32px;
  padding: 12px 24px;
  text-align: center;
  margin-bottom: 15px;
  box-shadow: rgba(7, 55, 63, 1) 0px 1px 4px;

  h3 {
    margin: 0;
    font-family: "Road Rage";
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 14px;
    margin-bottom: 5px;
  }

  span {
    font-size: 14px;
    color: #ffffff;
  }

  @media (max-width: 500px) {
    h3 {
      margin: 0;
      font-family: "Road Rage";
      font-size: 1.5rem;
    }
    p {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }
  }
`;

const LocationWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  @media (max-width: 500px) {
    div {
      span {
        font-size: 10px;
      }
    }
  }
`;

export const Divider = styled.hr`
  border-color: #07373f;
`;

const TicketTypeSection = styled.div`
  p {
    margin-bottom: 5px;
  }
`;

const TicketTypeGrid = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border: 1px solid #07373f;
  border-radius: 24px;
  padding: 10px;
  display: grid;
  gap: 1rem;
`;

const TicketOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 1rem;
  border: 1px solid #07373f;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ isSelected }) => (isSelected ? "#197686" : "none")};

  p {
    margin: 0;
  }

  &:hover {
    background-color: #197686;
    border: 1px solid #197686;
    transition: all 0.3s;
  }
`;

const TicketPrice = styled.div`
  background-color: #0e464f;
  border: 1px solid #2ba4b9;
  padding: 0px 5px;
  border-radius: 8px;
`;

const TicketQuantitySelector = styled.div`
  p {
    margin-bottom: 0;
  }

  select {
    display: flex;
    width: 100%;
    border: 1px solid #07373f;
    background-color: inherit;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 24px;

    &:focus {
      border: 1px solid #07373f;
      outline: 1px solid#ffffff;
    }

    option {
      background-color: #07373f;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 12px 24px;
  width: 40%;
  border: 1px solid #07373f;
  background-color: #041e23;
  color: #ffffff;

  &:hover {
    background-color: #197686;
    color: #ffffff;
    transition: all 0.3s;
  }
`;

function TicketSelection() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const navigate = useNavigate();

  const handleTicketSelection = (ticketType) => {
    setSelectedTicketType(ticketType);
  };

  const handleQuantityChange = (e) => {
    setTicketQuantity(Number(e.target.value));
  };

  const handleNext = () => {
    if (!selectedTicketType) {
      alert("Please select a ticket type.");
      return;
    }

    navigate("/step-2", {
      state: {
        ticketType: selectedTicketType,
        quantity: ticketQuantity,
      },
    });
  };

  return (
    <CardComponent title="Ticket Selection" progress={1}>
      <EventDetailsCard>
        <h3>Techember Fest "25</h3>
        <p>
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <LocationInfo>
          <LocationWrapper>
            <img src={LocationIcon} alt="location icon" />
            Ikoyi, Lagos
          </LocationWrapper>{" "}
          ||{" "}
          <div>
            <span>March 15, 2025 </span> || <span> 7:00 PM</span>
          </div>
        </LocationInfo>
      </EventDetailsCard>
      <Divider />

      <TicketTypeSection>
        <p>Select Ticket Type:</p>
        <TicketTypeGrid>
          <TicketOption
            role="button"
            tabIndex="0"
            onClick={() => handleTicketSelection("Regular Access")}
            isSelected={selectedTicketType === "Regular Access"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleTicketSelection("Regular Access");
              }
            }}
          >
            <div>
              <p>Regular Access</p>
              <span>20 left</span>
            </div>
            <TicketPrice>Free</TicketPrice>
          </TicketOption>
          <TicketOption
            role="button"
            tabIndex="0"
            onClick={() => handleTicketSelection("VIP Access")}
            isSelected={selectedTicketType === "VIP Access"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleTicketSelection("VIP Access");
              }
            }}
          >
            <div>
              <p>VIP Access</p>
              <span>20 left</span>
            </div>
            <TicketPrice>$50</TicketPrice>
          </TicketOption>
          <TicketOption
            role="button"
            tabIndex="0"
            onClick={() => handleTicketSelection("VVIP Access")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleTicketSelection("VVIP Access");
              }
            }}
            isSelected={selectedTicketType === "VVIP Access"}
          >
            <div>
              <p>VVIP Access</p>
              <span>20 left</span>
            </div>
            <TicketPrice>$150</TicketPrice>
          </TicketOption>
        </TicketTypeGrid>
      </TicketTypeSection>
      <TicketQuantitySelector>
        <p>Number of Tickets</p>
        <select
          name="ticketQuantity"
          id="ticket-quantity"
          value={ticketQuantity}
          onChange={handleQuantityChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </TicketQuantitySelector>
      <ActionButtons>
        <Button onClick={() => navigate("/")}>Cancel</Button>
        <Button onClick={handleNext}>Next</Button>
      </ActionButtons>
    </CardComponent>
  );
}

export default TicketSelection;
