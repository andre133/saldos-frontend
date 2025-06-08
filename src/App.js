import React from "react";
import AdicionarSiteForm from "./components/AdicionarSiteForm";
import ListaSaldos from "./components/ListaSaldos";

function App() {
  return (
    <div>
      <h1>Saldo dos Sites</h1>
      <AdicionarSiteForm />
      <ListaSaldos />
    </div>
  );
}

export default App;
