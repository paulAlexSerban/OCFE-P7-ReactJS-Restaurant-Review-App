import React from "react";
import Main from "../../structure/main/Main";
import Header from "../../structure/header/Header";
import Footer from "../../structure/footer/Footer";

const basepage = () => {
  return (
    <div className="basepage">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default basepage;
