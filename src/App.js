import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Stats from "./pages/Stats";
import Trade from "./pages/Trade";
import History from "./pages/History";
import Header from "./components/Header/Header";
import Notifications from "./pages/Notifications";
import Landing from "./pages/components/Landing/Landing";
import Cart from "./components/Cart/Cart";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <Router>
      <SkeletonTheme>
        <Header />
        <Routes>
          <Route path="/" exact element={<Navigate to="/Landing" />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/trade" element={<Trade />}>
            <Route path={`cart/:dealingStatus/:cartId`} element={<Cart />} />
          </Route>
          <Route path="/History" element={<History />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Stats" element={<Stats />} />
        </Routes>
      </SkeletonTheme>
    </Router>
  );
}

export default App;
