import { GrLocationPin } from "react-icons/gr";
import styled from "styled-components";
import LocationIcon from "../assets/location_icon.png";
import CardComponent from "../component/CardComponent";
import { useState } from "react";
import { useNavigate } from "react-router";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: var(--spacing-lg);

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const EventDetailsCard = styled.div`
  background: radial-gradient(
    circle at bottom,
    var(--color-primary) 20%,
    var(--color-secondary) 80%
  );
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-sm) var(--spacing-lg);
  text-align: center;
  margin-bottom: var(--spacing-md);
  box-shadow: var(--color-shadow-card) 0px 1px 4px;

  h3 {
    margin: 0;
    font-family: "Road Rage";
    font-size: 2rem;
  }

  p {
    margin: 0;
    font-size: 14px;
    margin-bottom: var(--spacing-xs);
  }

  span {
    font-size: 14px;
    color: var(--color-text);
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
  gap: var(--spacing-xs);
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
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
  border-color: var(--color-secondary);
`;

const TicketTypeSection = styled.div`
  p {
    margin-bottom: var(--spacing-xs);
  }
`;

const TicketTypeGrid = styled.div`
  box-shadow: var(--color-shadow-ticket) 0px 50px 100px -20px,
    var(--color-shadow-ticket-dark) 0px 30px 60px -30px,
    var(--color-shadow-ticket-inset) 0px -2px 6px 0px inset;
  border: 1px solid var(--color-secondary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-sm);
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 500px) {
    display: grid;
  }
`;

const TicketOption = styled.div`
  flex: 1;
  cursor: pointer;
  gap: var(--spacing-md);
  border: 1px solid var(--color-accent-dark);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-md);
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--color-accent-dark)" : "transparent"};
  min-width: 70px;
  p {
    margin: 0;
  }

  &:hover {
    background-color: var(--color-accent-dark);
    transition: all 0.3s;
  }
`;

const TicketPrice = styled.div`
  white-space: nowrap;
`;

const TicketType = styled.div`
  p {
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    white-space: nowrap;
    display: block;
  }
`;
const TicketQuantitySelector = styled.div`
  p {
    margin-bottom: 0;
  }

  select {
    display: flex;
    width: 100%;
    border: 1px solid var(--color-secondary);
    background-color: var(--color-input-bg);
    padding: var(--spacing-md);
    border-radius: var(--border-radius-md);
    margin-bottom: var(--spacing-lg);
    color: var(--color-text);

    &:focus {
      border: 1px solid var(--color-secondary);
      outline: 1px solid var(--color-text);
    }

    option {
      background-color: var(--color-secondary);
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: var(--spacing-md) var(--spacing-lg);
  width: 40%;
  border: 1px solid var(--color-secondary);
  background-color: var(--color-primary);
  color: var(--color-text);

  &:hover {
    background-color: var(--color-accent-dark);
    color: var(--color-text);
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
            <TicketPrice>Free</TicketPrice>
            <TicketType>
              <p>Regular Access</p>
              <span>20/52</span>
            </TicketType>
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
            <TicketPrice>$50</TicketPrice>
            <TicketType>
              <p>VIP Access</p>
              <span>20/52</span>
            </TicketType>
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
            <TicketPrice>$150</TicketPrice>
            <TicketType>
              <p>VVIP Access</p>
              <span>20/52</span>
            </TicketType>
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
