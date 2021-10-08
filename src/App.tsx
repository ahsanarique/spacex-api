import React, { FC } from "react";
import Header from "./Components/Header/Header";
import ItemContainer from "./Components/ItemContainer/ItemContainer";
import Footer from "./Components/Footer/Footer";

const App: FC = () => {
  return (
    <React.Fragment>
      <Header />
      <ItemContainer />
      <Footer />
    </React.Fragment>
  );
};

export default App;
