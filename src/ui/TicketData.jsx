import styled from "styled-components";

const TicketWrapper = styled.div`
  display: flex;
`;

const DetailsCon = styled.div`
  display: flex;
`;
function TicketData() {
  return (
    <TicketWrapper>
      <div>
        <div>Techember Fest</div>

        <div>Event Ticket</div>

        <DetailsCon>
          <div>
            <div>
              <p>Techember Fest 2025</p>
              <p>location</p>
            </div>
            <div>
              <p>Date</p>
              <p>Time</p>
            </div>
          </div>
          <div>Image</div>
        </DetailsCon>

        <div>
          <div>
            <p>Name:</p>
            <p>Sodiq</p>
          </div>
          <div>
            <p>Ticket Number:</p>
            <p>123546707390383930</p>
          </div>
        </div>
      </div>
    </TicketWrapper>
  );
}

export default TicketData;
