import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Modal({ open, setOpen, entry, saveFunc }) {
  const keys = ["Dish", "Calories", "Proteins", "Carbs", "Fats"];

  const [i, setI] = useState(0);
  const [value, setValue] = useState(entry[keys[i].toLowerCase()]);

  const handleNext = () => {
    entry[keys[i].toLowerCase()] = i === 0 ? value : parseFloat(value);
    if (i === keys.length - 1) {
      saveFunc();
      setOpen(false);
    }
    setI(i + 1);

    setValue(entry[keys[i + 1].toLowerCase()]);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {keys.map((key, ind) => {
                  if (ind != i) {
                    return;
                  }
                  return (
                    <div className="p-1 mx-2 my-2" key={ind}>
                      <p>{key}</p>
                      <input
                        className="w-full border-b-2 border-gray-600 outline-transparent"
                        type="text"
                        placeholder={`Enter your ${key}`}
                        value={value}
                        autoFocus={true}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                  );
                })}
                <div className="bg-gray-50 px-4 py-3 flex justify-end px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-neutral-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleNext()}
                  >
                    {i === keys.length - 1 ? "Save" : "Next"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default Modal;
