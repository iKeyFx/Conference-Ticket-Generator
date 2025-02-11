import styled from "styled-components";
import Header from "./Header";
import TicketSelection from "./TicketSelection";
import { Outlet } from "react-router";

const StyledAppLayout = styled.div`
  padding: 1rem 8rem;

  @media (max-width: 900px) {
    padding: 1rem 1rem;
  }
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <main>
        {/* <TicketSelection /> */}
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
