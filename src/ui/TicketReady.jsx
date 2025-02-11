import styled from "styled-components";
import CardComponent from "../component/CardComponent";
import TicketBg from "../assets/Ticket.png";
import PreviewImageDefault from "../assets/default_image.png";
import { StyledButton } from "./OrderDetails";
import { useLocation, useNavigate } from "react-router";
import { use, useEffect, useState } from "react";
import TicketReg from "../assets/Property_Reg.png";
import TicketVIP from "../assets/Property_VIP.png";
import TicketVVIP from "../assets/Property_VVIP.png";
const TicketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const TicketWrapper = styled.div`
  background-image: url(${TicketBg});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 250px;
  height: auto;
  aspect-ratio: 2.8 / 1;

  @media (max-width: 430px) {
    max-width: 230px;
  }

  @media (max-width: 400px) {
    max-width: 200px;
  }
`;

const AvatarImage = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 3%;
  top: 8%;

  @media (max-width: 330px) {
    width: 50px;
    height: 50px;
  }
`;

const EventDetails = styled.div`
  color: white;
  text-align: left;
  flex-grow: 1;
  padding: 0 10px;
  position: absolute;
  left: 28%;
  top: 2%;

  h3 {
    margin: 0;
    font-size: 1.7rem;
    font-family: "Road Rage";
    display: grid;
    line-height: 1.1;
  }

  p {
    font-size: 10px;
    margin: 0 0;
  }

  @media (max-width: 430px) {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 9px;
    }
  }

  @media (max-width: 400px) {
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 8px;
    }
  }
  @media (max-width: 330px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 7px;
    }
  }
`;

const RegistrationLabel = styled.img`
  position: absolute;
  top: 2%;
  right: 15%;
  width: 50px;

  @media (max-width: 330px) {
    width: 30px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  button {
    padding: 8px 20px;
    margin: 5px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap; // Ensure button text stays on one line
  }

  @media (max-width: 450px) {
    display: grid;
    button {
      width: 100%;
    }
  }
`;

const VerticalContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 7%;
  top: 7%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: right center;

  h3 {
    margin: 0;
    font-size: 0.4rem;
    color: white;
    white-space: nowrap;
  }

  span {
    display: block;
    font-size: 0.4rem;
    color: white;
    white-space: nowrap;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TicketLabel = styled.img`
  width: 40px;
  height: auto;
  margin-bottom: 4px;
  transform: rotate(270deg);

  @media (max-width: 430px) {
    width: 30px;
  }
`;

const TicketInfo = styled.span`
  position: absolute;
  bottom: 5%;
  font-size: 9px;
  color: #0e464f;
  font-weight: 600;
`;

function TicketReady() {
  const location = useLocation();
  const {
    ticketType,
    quantity,
    formData: { imageUrl, firstName, lastName },
  } = location.state;
  const navigate = useNavigate();
  const [stickerImage, setStickerImage] = useState(null);
  useEffect(() => {
    if (ticketType === "Regular Access") {
      setStickerImage(TicketReg);
    }
    if (ticketType === "VIP Access") {
      setStickerImage(TicketVIP);
    }
    if (ticketType === "VVIP Access") {
      setStickerImage(TicketVVIP);
    }
  }, [ticketType]);

  const handleGetNewTicket = () => {
    localStorage.removeItem("formData");
    localStorage.removeItem("imagePreview");
    navigate("/step-1");
  };
  return (
    <CardComponent title="Your Ticket Is Ready" readyPage={true} progress={3}>
      <TicketContainer>
        <p>You can download or check your email for a copy.</p>
        <TicketWrapper>
          <AvatarImage src={imageUrl} alt="Avatar" />
          <EventDetails>
            <h3>Techember</h3>
            <h3>Fest "25</h3>
            <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
            <p>📅 March 15, 2025 | 7:00 PM</p>
          </EventDetails>
          <RegistrationLabel src={stickerImage} alt="Registration Label" />
          <TicketInfo>Ticket for 1 entry only</TicketInfo>

          <VerticalContent>
            <TicketLabel src={stickerImage} alt="Ticket Regular" />
            <div>
              <h3>Techember Fest "25</h3>
              <span>
                User Name: {firstName} {lastName}
              </span>
            </div>
          </VerticalContent>
        </TicketWrapper>
        <ButtonContainer>
          <StyledButton onClick={handleGetNewTicket}>
            Get Another Ticket
          </StyledButton>
          <StyledButton submit={true}>Download Ticket</StyledButton>
        </ButtonContainer>
      </TicketContainer>
    </CardComponent>
  );
}

export default TicketReady;
