import React, { useState, useEffect } from "react";
import Entry from "./Entry";

import axios from "axios";

function Entries({ addNewEntry, setAddNewEntry }) {
  const [entries, setEntries] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [changeEntry, setChangeEntry] = useState({ change: false, id: 0 });
  const [newEntry, setNewEntry] = useState({
    dish: "",
    calories: 0,
    fats: 0,
    proteins: 0,
    carbs: 0,
  });

  useEffect(() => {
    getAllEntries(setEntries);
  }, []);

  if (refreshData) {
    setRefreshData(false);
    getAllEntries();
  }

  function changeSingleEntry() {
    changeEntry.change = false;
    var url = "http://localhost:8000/entry/update/" + changeEntry.id;
    axios.put(url, newEntry).then((response) => {
      if (response.status == 200) {
        setRefreshData(true);
      }
    });
  }

  function addSingleEntry() {
    setAddNewEntry(false);
    var url = "http://localhost:8000/entry/create";
    axios
      .post(url, {
        dish: newEntry.dish,
        calories: parseFloat(newEntry.calories),
        proteins: parseFloat(newEntry.proteins),
        carbs: parseFloat(newEntry.calories),
        fats: parseFloat(newEntry.fats),
      })
      .then((response) => {
        if (response.status == 200) {
          setRefreshData(true);
        }
      });
  }

  function deleteSingleEntry(id) {
    var url = "http://localhost:8000/entry/delete/" + id;
    axios.delete(url, {}).then((response) => {
      if (response.status == 200) {
        setRefreshData(true);
      }
    });
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
    <div className="z-50 m-3">
      {entries != null &&
        entries.map((entry, ind) => (
          <Entry
            key={entry._id}
            entryData={entry}
            deleteSingleEntry={deleteSingleEntry}
            setChangeEntry={setChangeEntry}
          />
        ))}
    </div>
  );
}

export default Entries;
