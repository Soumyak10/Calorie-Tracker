import "./App.css";
import Header from "./components/Header";
import Entries from "./components/Entries";
import { useState } from "react";

import CreateEntry from "./components/CreateEntry";

function App() {
  const [refreshData, setRefreshData] = useState(false);

  return (
    <div className="App">
      <Header />

      <CreateEntry setRefreshData={setRefreshData} />

      <Entries refreshData={refreshData} setRefreshData={setRefreshData} />
    </div>
  );
}

export default App;
