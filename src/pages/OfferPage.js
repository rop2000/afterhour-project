import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function OfferPage() {
  const { offerId } = useParams();
  const { offerList } = useContext(GlobalContext);

  const offer = offerList.filter((x) => x.id === offerId)[0];
  console.log(offer);
  console.log("offerpage");

  return (
    <div class="grid grid-cols-8 gap-4 pt-12">
      <div></div>
      <div></div>
      <div class="col-span-4">
        <p class="text-6xl dark:text-white font-extrabold uppercase mb-3">
          {offer.title}
        </p>
        <div class="flex flex-row mb-6">
          <span class="bg-green-100 text-green-800 text-xl font-medium mr-2 px-2 pb-0.5 rounded dark:bg-green-200 dark:text-green-900">
            <strong>Salary:</strong> {offer.salary}
          </span>
          <span class="bg-yellow-100 text-yellow-800 text-xl font-medium mr-2 px-2 pb-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            <strong>Bonus:</strong> {offer.bonus}
          </span>
        </div>
        <p class="text-5xl dark:text-white font-extrabold uppercase mb-6">
          Description
        </p>
        <p class="text-xl mb-6">{offer.description}</p>
        <p class="text-4xl dark:text-white font-extrabold uppercase mb-6">
          Equity & Benefits
        </p>
        <p class="text-xl mb-12">{offer.equity}</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default OfferPage;
