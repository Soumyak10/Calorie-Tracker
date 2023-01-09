import React, { useState, useEffect } from "react";
import Entry from "./Entry";

import axios from "axios";

function Entries({ refreshData, setRefreshData }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getAllEntries();
  }, []);

  if (refreshData) {
    setRefreshData(false);
    getAllEntries();
  }

  function getAllEntries() {
    var url = "http://localhost:8000/entries";
    axios
      .get(url, {
        reponseType: "json",
      })
      .then((response) => {
        if (response.status == 200) {
          setEntries(response.data);
        }
      });
  }

  return (
    <div className="z-50 m-5">
      {entries != null &&
        entries.map((entry) => (
          <Entry
            key={entry._id}
            entryData={entry}
            setRefreshData={setRefreshData}
          />
        ))}
    </div>
  );
}

export default Entries;
