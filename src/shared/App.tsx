import React from "react";
import { BurgerImg } from "./images/BurgerImg";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";

function AppComponent() {
  return (
    <div>
      <Header />
      <Catalog />
    </div>
  );
}

const App = () => <AppComponent />;

export default App;
