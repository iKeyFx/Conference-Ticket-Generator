import React from "react";
import styled from "styled-components";
import BarCode from "../assets/BarCode.png";

const Container = styled.div`
  /* min-height: 100vh; */
  padding: 0rem;
  position: relative;
`;

const TicketContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const TicketWrapper = styled.div`
  padding: 1rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    var(--color-primary) 0%,
    var(--color-primary) 30%,
    var(--color-secondary) 70%,
    var(--color-secondary) 100%
  );
`;

const TicketContent = styled.div`
  border: 1px solid rgba(20, 184, 166, 0.5);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary)
  );
  box-shadow: 0 4px 15px var(--color-secondary);
  border-radius: 1rem;
  padding: 1rem;
`;

const EventDetails = styled.div`
  color: white;
  /* margin-bottom: 1rem; */
  /* text-align: center; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventTitle = styled.h1`
  font-family: "Road Rage";
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0rem;
  margin-top: 0;
`;

const EventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    color: #ef4444;
  }
  p {
    margin: 0.2rem;
  }
`;

const EventDate = styled(EventLocation)`
  /* margin-top: 0.25rem; */

  span {
    color: white;
  }
`;

const AvatarSection = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  padding: 10px 5px;
  font-size: 14px;

  label {
    color: #94a3b8;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    white-space: nowrap;
  }

  div {
    color: white;
    font-weight: 700;
    /* white-space: nowrap; */
  }
`;

const TearLine = styled.div`
  border-top: 1px dashed #0f766e;
  margin: 1rem 0;
`;

const BarcodeSection = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 60px;
  height: 60px;
  position: absolute;
  top: -40px;
  left: -40px;
`;

const Circle1 = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 60px;
  height: 60px;
  position: absolute;
  top: -40px;
  right: -40px;
`;

const Circle2 = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: -40px;
  right: -40px;
`;

const Circle3 = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: -40px;
  left: -40px;
`;

const Circle4 = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 75px;
  right: -20px;
`;
const Circle5 = styled.div`
  border-radius: 50%;
  background-color: var(--color-primary);
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 75px;
  left: -20px;
`;
const FormDetails = styled.div`
  background-color: #08343c;
  border: 1px solid #133d44;
  border-radius: 8px;
  padding: 5px 8px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid var(--color-accent);
`;
function NewReady({ ticketType, quantity, imageUrl, name, email, textarea }) {
  return (
    <Container>
      <TicketContainer>
        <TicketWrapper>
          <Circle />
          <Circle1 />
          <Circle2 />
          <Circle3 />
          <Circle4 />
          <Circle5 />
          <TicketContent>
            <EventDetails>
              <EventTitle>Techember Fest '25</EventTitle>
              <EventLocation>
                <span>📍</span>
                <p>04 Burnside road, Ikoyi, Lagos</p>
              </EventLocation>
              <EventDate>
                <span>📅</span>
                <p>March 15, 2025 | 7:00 PM</p>
              </EventDate>
            </EventDetails>

            <AvatarSection>
              <Avatar src={imageUrl} alt="image" />
            </AvatarSection>
            <FormDetails>
              <FormGrid>
                <FormField>
                  <label>Enter your name</label>
                  <div>{name}</div>
                </FormField>
                <FormField>
                  <label>Enter your email *</label>
                  <div>{email}</div>
                </FormField>
                {/* </FormGrid> */}

                {/* <FormGrid> */}
                <FormField>
                  <label>Ticket Type:</label>
                  <div>{ticketType}</div>
                </FormField>
                <FormField>
                  <label>Ticket for:</label>
                  <div>{quantity}</div>
                </FormField>
              </FormGrid>

              <FormField>
                <label>Special request?</label>
                <div>{textarea}</div>
              </FormField>
            </FormDetails>
          </TicketContent>

          <TearLine />

          <BarcodeSection>
            <img src={BarCode} alt="Barcode" />
          </BarcodeSection>
        </TicketWrapper>
      </TicketContainer>
    </Container>
  );
}

export default NewReady;
