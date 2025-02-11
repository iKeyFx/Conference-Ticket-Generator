import Header from "./ui/Header";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import TicketSelection from "./ui/TicketSelection";
import OrderDetails from "./ui/OrderDetails";
import TicketReady from "./ui/TicketReady";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="step-1" />} />
            <Route path="step-1" element={<TicketSelection />} />
            <Route path="step-2" element={<OrderDetails />} />
            <Route path="step-3" element={<TicketReady />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
