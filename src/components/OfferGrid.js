import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import OfferCard from "./OfferCard";

function OfferGrid() {
  const { offerList } = useContext(GlobalContext);
  const offers = offerList.map((d, index) => (
    <div>
      <OfferCard
        key={index}
        title={d.title}
        description={d.description}
        equity={d.equity}
        salary={d.salary}
        bonus={d.bonus}
        id={d.id}
      ></OfferCard>
    </div>
  ));

  return <div class="grid grid-cols-2 place-items-stretch gap-4">{offers}</div>;
}

export default OfferGrid;
