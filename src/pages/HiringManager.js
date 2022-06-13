import OfferMaker from "../components/OfferMaker";

function HiringManager() {
  return (
    <>
      <div class="md:container md:mx-auto flex justify-center">
        <p class="text-4xl bold border-4 border-indigo-500/100 p-2 rounded-lg uppercase ... mt-6">
          Hiring Dashboard
        </p>
      </div>
      <div class="grid grid-cols-4 gap-4 pt-12">
        <div class="..."></div>
        <div class="col-span-2 ">
          <p class="text-2xl bold pb-3 rounded-lg uppercase ...">
            Create An Offer
          </p>
          <OfferMaker></OfferMaker>
        </div>
        <div class="..."></div>
        <div class="..."></div>
        <div class="col-span-2"></div>
        <div class="..."></div>
      </div>
    </>
  );
}

export default HiringManager;
