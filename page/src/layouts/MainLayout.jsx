import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

import "./MainLayout.scss";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="main-layout__content">
        <Home />
      </main>
    </div>
  );
}

export default MainLayout;