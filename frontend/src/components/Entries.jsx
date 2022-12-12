import React, { useState, useEffect } from "react";
import Entry from "./Entry";
// import { getAllEntries } from "../utils";
import axios from "axios";

function Entries() {
  const [entries, setEntries] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [addNewEntry, setAddNewEntry] = useState([]);
  const [changeEntry, setChangeNewEntry] = useState(false);
  const [deleteEntry, setDeleteEntry] = useState(false);

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
        entries.map((entry, ind) => <Entry key={entry.id} entryData={entry} />)}
    </div>
  );
}

export default Entries;
