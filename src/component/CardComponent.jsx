import { GrLocationPin } from "react-icons/gr";
import styled from "styled-components";
import LocationIcon from "../assets/location_icon.png";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const TicketCardContainer = styled.div`
  background-color: var(--color-primary);
  border-radius: 40px;
  border: 1px solid var(--color-secondary);
  box-shadow: 0px 0px 19px 2px var(--color-box-shadow);
  padding: 24px;
  /* max-width: 500px; */
  min-width: 350px;
  /* width: 350px; */

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
  height: 5px;
  background-color: var(--color-secondary);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--color-gray-text);
  flex: 1;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 5px;
  transition: width 0.3s ease;
`;

const TicketBody = styled.div`
  background: ${({ readyPage }) =>
    readyPage
      ? "none"
      : `radial-gradient(circle at bottom, var(--color-primary) 20%, var(--color-card-background) 80%)`};
  border: ${({ readyPage }) =>
    readyPage ? "none" : `1px solid var(--color-card-border)`};
  padding: 12px;
  margin-top: 20px;
  border-radius: 32px;
`;

function CardComponent({
  children,
  title,
  ContainerWidth,
  readyPage,
  progress,
}) {
  const progressWidth = (progress * 100) / 3;
  return (
    <SectionContainer>
      <TicketCardContainer style={{ width: ContainerWidth }}>
        <div>
          <CardHeader>
            <h3>{title}</h3>
            <p>Step {progress}/3</p>
          </CardHeader>
          <ProgressBarWrapper>
            <ProgressBarBackground>
              <ProgressBarFill style={{ width: `${progressWidth}%` }} />
            </ProgressBarBackground>
          </ProgressBarWrapper>
          <TicketBody readyPage>{children}</TicketBody>
        </div>
      </TicketCardContainer>
    </SectionContainer>
  );
}

export default CardComponent;
