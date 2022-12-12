import axios from "axios";

function addSingleEntry(setAddNewEntry, newEntry) {
  setAddNewEntry(false);
  var url = "http://localhost:8000/entry/create";
  axios
    .post(url, {
      dish: newEntry.dish,
      calories: parseFloat(newEntry.calories),
      fats: parseFloat(newEntry.fats),
    })
    .then((response) => {
      if (response.status == 200) {
        setRefreshData(true);
      }
    });
}

function getAllEntries(setEntries) {
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

function changeSingleEntry() {
  changeEntry.change = false;
  var url = "http://localhost:8000/entry/update/" + changeEntry.id;
  axios.put(url, newEntry).then((response) => {
    if (response.status == 200) {
      setRefreshData(true);
    }
  });
}

function deleteSingleEntry(id) {
  var url = "http://localhost:8000/entry/delete/" + id;
  axios.delete(url, {}).then((response) => {
    if (response.status == 200) {
      console.log(id);
    }
  });
}

export { addSingleEntry, getAllEntries, changeSingleEntry, deleteSingleEntry };
