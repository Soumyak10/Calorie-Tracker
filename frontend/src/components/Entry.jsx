import React, { useState } from "react";
import axios from "axios";

import Modal from "./Modal";

function Entry({ entryData, setRefreshData }) {
  const [currentEntry, setCurrentEntry] = useState({ ...entryData });
  const [updateModal, setUpdateModal] = useState(false);

  function changeSingleEntry() {
    console.log(currentEntry);
    var url = "http://localhost:8000/entry/update/" + currentEntry._id;
    axios.put(url, currentEntry).then((response) => {
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

  return (
    <div className="my-5 flex justify-between entry items-center">
      {updateModal ? (
        <Modal
          open={updateModal}
          setOpen={setUpdateModal}
          entry={currentEntry}
          saveFunc={changeSingleEntry}
        />
      ) : (
        ""
      )}
      <div className="p-4 flex flex-col w-4/5 text-white">
        <div className="w-full flex">
          <div className="w-1/3 font-bold">Food : {entryData.dish}</div>
          <div className="w-1/3 font-bold">
            Calorie : <span className="font-light">{entryData.calories}</span>{" "}
            Cal
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/3 font-bold">
            Protein : <span className="font-light">{entryData.proteins}</span> g
          </div>
          <div className="w-1/3 font-bold">
            Carbs : <span className="font-light">{entryData.carbs}</span> g
          </div>
          <div className="w-1/3 font-bold">
            Fats : <span className="font-light">{entryData.fats}</span> g
          </div>
        </div>
      </div>

      <div className="flex justify-center w-28">
        <button
          onClick={() => {
            setCurrentEntry(entryData);
            setUpdateModal(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8 m-2"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>
        </button>

        <button
          className="w-8 h-8 m-2"
          onClick={() => deleteSingleEntry(entryData._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className=""
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Entry;
