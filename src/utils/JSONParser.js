import CompData from "../data/salary_data.json";

const key_mapping = [
  "Date",
  "Age",
  "Industry",
  "Title",
  "Salary",
  "Currency",
  "Location",
  "YOE",
  "Other",
];

export const parseData = (start, end) => {
  const loadedData = JSON.stringify(CompData);
  let json = JSON.parse(loadedData);
  json = fetchDataRange(json, start, end);
  return json;
};

export const dataFields = () => {
  const item = parseData()[0];
  return Object.keys(item);
};

export const fetchDataRange = (data, first, last) => {
  const json = data;
  const rangeData = json.slice(first, last);
  return rangeData;
};

// map entire json object to modified objects
// internal map to modify keys in current object
// inside this iterate through new keys list to modify

export const renameKeys = (objArray) => {
  let renamed = [];
  objArray.forEach((obj) => {
    let oldFields = dataFields();
    for (let i = 0; i < key_mapping.length; i++) {
      delete Object.assign(obj, { [key_mapping[i]]: obj[oldFields[i]] })[
        oldFields[i]
      ];
    }
    renamed.push(obj);
  });

  return renamed;
};

export const filterData = (data, field, filter, start, end) => {
  let filteredData = [];
  console.log(field, filter);
  // const loadedData = JSON.stringify(CompData);
  // let json = JSON.parse(loadedData);
  data.forEach((obj) => {
    if (obj[field] === filter) {
      filteredData.push(obj);
    }
  });
  console.log(filteredData);
  return filteredData;
};
