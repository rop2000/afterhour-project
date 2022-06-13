import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import OfferGrid from "./OfferGrid";
import uuid from "react-uuid";

function OfferMaker() {
  const { addOfferToList } = useContext(GlobalContext);

  const [offerData, setOfferData] = useState({
    title: "",
    description: "",
    salary: "",
    bonus: "",
    equity: "",
    id: uuid(),
  });

  const handleOffer = (e) => {
    e.preventDefault();
    console.log(offerData);
    addOfferToList(offerData);
  };

  return (
    <>
      <form onSubmit={handleOffer} class="mb-12">
        <div class="mb-3">
          <label
            for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Job Title
          </label>
          <input
            id="title"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Fullstack Engineer"
            onChange={(e) =>
              setOfferData({ ...offerData, title: e.target.value })
            }
            value={offerData.title}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Job Description (Include Role, Team, Organization, Learning
            Opportunities, Benefits etc.)
          </label>
          <textarea
            id="description"
            rows="4"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) =>
              setOfferData({ ...offerData, description: e.target.value })
            }
            value={offerData.description}
          />
        </div>

        <div class="mb-3">
          <label
            for="salary"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Salary
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              $
            </span>
            <input
              type="text"
              id="salary"
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$120,000"
              onChange={(e) =>
                setOfferData({ ...offerData, salary: e.target.value })
              }
              value={offerData.salary}
            />
          </div>
        </div>
        <div class="mb-3">
          <label
            for="bonus"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Sign-On Bonus
          </label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              $
            </span>
            <input
              type="text"
              id="bonus"
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="$15,000"
              onChange={(e) =>
                setOfferData({ ...offerData, bonus: e.target.value })
              }
              value={offerData.bonus}
            />
          </div>
        </div>

        <div class="mb-3">
          <label
            for="equity"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Equity & Terms
          </label>
          <input
            id="equity"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1.5% vested over 4 years, 1 year worked minimum"
            required
            onChange={(e) =>
              setOfferData({ ...offerData, equity: e.target.value })
            }
            value={offerData.equity}
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Offer
        </button>
      </form>
      <p class="text-2xl bold pb-3 rounded-lg uppercase ...">
        Your Offer Listings
      </p>
      {OfferGrid()}
    </>
  );
}

export default OfferMaker;
