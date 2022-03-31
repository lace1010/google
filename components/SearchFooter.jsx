import { React } from "react";
import useGeoLocation from "../util/useGeoLocation.js";
import { LocationMarkerIcon } from "@heroicons/react/solid";
// import Geocode from "react-geocode";

const SearchFooter = () => {
  const location = useGeoLocation();
  const lat = location.coordinates.lat;
  const long = location.coordinates.long;

  // WOULD WORK BUT NEED TO ENABLE BILLING ON GOOGLE CLOUD AND I DONT WANNA
  //   // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  //   Geocode.setApiKey(process.env.API_KEY);

  //   // set response language. Defaults to english.
  //   Geocode.setLanguage("en");

  //   Geocode.fromLatLng("48.8583701", "2.2922926").then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );

  return (
    <footer className="w-full flex flex-col bg-[#f2f2f2] px-6 py-5 lg:pl-44">
      <div className="flex flex-col space-y-5">
        <div className="flex space-x-2 items-center">
          <LocationMarkerIcon className="h-4 text-gray-700" />
          <p className="font-bold text-sm">
            Pleasure Ridge Park, Louisville, Ky
          </p>

          <p className="text-sm text-blue-500 hidden sm:inline-flex">
            {" "}
            - Based on your places (Home) -{" "}
            <span className="hover:underline cursor-pointer">
              Update Location
            </span>
          </p>
        </div>

        <div className="flex space-x-6">
          <p className="searchFooterLink">Help</p>
          <p className="searchFooterLink">Send Feedback</p>
          <p className="searchFooterLink">Privacy</p>
          <p className="searchFooterLink">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default SearchFooter;
