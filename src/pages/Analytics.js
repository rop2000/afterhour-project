import { parseData, fetchDataRange, renameKeys } from "../utils/JSONParser";

import DataTable from "../components/DataTable";
import SalaryChart from "../components/SalaryChart";

function Analytics() {
  return (
    <div class="grid grid-cols-12 gap-4 mt-12 ml-6">
      <div class="col-span-9">
        <p class="text-4xl dark:text-white bold mb-3">Table Views</p>
        <DataTable></DataTable>
      </div>
      <div class="col-span-3 pr-6">
        <p class="text-4xl dark:text-white bold mb-3">Data Vis</p>
        <SalaryChart></SalaryChart>
      </div>
    </div>
  );
}

export default Analytics;
