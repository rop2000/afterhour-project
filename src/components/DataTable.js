import { useEffect, useState, useRef } from "react";
import { dataFields } from "../utils/JSONParser";
import {
  parseData,
  fetchDataRange,
  renameKeys,
  filterData,
} from "../utils/JSONParser";

function DataTable() {
  // const [data, setData] = useState([]);
  const [dataInterval, setDataInterval] = useState(20);
  const [curIndex, setCurIndex] = useState(dataInterval);
  const [filtering, setFiltering] = useState(false);
  const [filter, setFilter] = useState("");
  const filterRef = useRef(null);
  const [flag, setFlag] = useState(false);
  // Load all json items
  //have render function that takes range 0-50 items for example
  // check if it exceeds length both ways (0 and last index)
  // have front and back arrows control range state so table updates with new values
  //have small text below to indicate which range of data is being shown
  //8/4 split of page grid with flex columns. 8 width contains table, 4 width smaller charts
  //Include search bars in each column header to filter by column (maybe)

  const nextPage = () => {
    setCurIndex(curIndex + dataInterval);
  };

  const prevPage = () => {
    if (curIndex !== dataInterval) {
      setCurIndex(curIndex - dataInterval);
    }
  };

  const createRows = () => {
    let data = [];
    if (filtering) {
      data = parseData(curIndex - dataInterval, curIndex);
      data = renameKeys(data);
      data = filterData(
        data,
        filter.split(":")[0],
        filter.split(":")[1],
        curIndex - dataInterval,
        curIndex
      );
      console.log(data);
    } else {
      data = parseData(curIndex - dataInterval, curIndex);
      console.log(data);
      data = renameKeys(data);
    }

    // change renameKeys to async and then slap in a state here to track that. put loading spinner until data loads
    console.log(data);
    const rows = data.map((d, index) => (
      <tr
        key={index}
        class="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          {d.Date}
        </th>
        <td class="px-6 py-4">{d.Age}</td>
        <td class="px-6 py-4">{d.Industry}</td>
        <td class="px-6 py-4">{d.Title}</td>
        <td class="px-6 py-4">{d.Salary}</td>
        <td class="px-6 py-4">
          {d.Currency === "Other" ? d.Other : d.Currency}
        </td>
        <td class="px-6 py-4">{d.Location}</td>
        <td class="px-6 py-4">{d.YOE}</td>
      </tr>
    ));
    return rows;
  };

  const useFilter = (e) => {
    e.preventDefault();
    setFilter(filterRef.current.value);
    console.log(filter);
    setFiltering(true);
    setFlag(false);
  };
  useEffect(() => {
    if (filter === "") {
      setFlag(false);
    }
  }, []);
  return (
    <div class="flex flex-col">
      <div class="flex flew-row justify-between">
        <div class="inline-flex rounded-md shadow-sm mb-5" role="group">
          <div class="flex flex-col">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {`Responses ${curIndex - dataInterval}-${curIndex}`}
            </label>
            <div class="flex flew-row">
              <button
                type="button"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-blue-900 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                onClick={prevPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H6M12 5l-7 7 7 7" />
                </svg>
                Prev Page
              </button>
              <button
                type="button"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-blue-900 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                onClick={nextPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg>
                Next Page
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={useFilter} class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search/Filter
          </label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={filter}
              onChange={(e) => {
                setFlag(true);
                setFilter(e.target.value);
              }}
              ref={filterRef}
            />
          </div>

          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>

        <div class="flex flex-col">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="small_size"
          >
            Upload Data
          </label>
          <input
            class="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
          ></input>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Age
              </th>
              <th scope="col" class="px-6 py-3">
                Industry
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Salary
              </th>
              <th scope="col" class="px-6 py-3">
                Currency
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              <th scope="col" class="px-6 py-3">
                YOE
              </th>
            </tr>
          </thead>
          <tbody>{flag ? <> </> : createRows()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
