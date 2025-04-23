import React from "react";
import PublicLayout from "./layout/public/PublicLayout";
import HomePage from "./pages/public/HomePage";

const App = () => {
  return (
    <PublicLayout>
      <HomePage />
    </PublicLayout>
  );
};

export default App;
