import Image from "next/image";
import { React, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const HomeForm = () => {
  const router = useRouter();
  const [term, setTerm] = useState(null);

  const search = (e) => {
    e.preventDefault();
    term ? router.push(`/search?${term}`) : "";
  };

  return (
    <form className="flex flex-col items-center w-full px-5 mt-32 flex-grow ">
      <Image
        className="object-contain"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        height={95}
        width={285}
        priority
        layout="fixed"
      />

      <div className="w-full flex items-center px-5 py-3 mt-5 max-w-md sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          onChange={(e) => setTerm(e.target.value)}
          className="flex-grow focus:outline-none"
          type="text"
          placeholder=""
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="mt-8 flex justify-evenly items-center space-x-4">
        <button onClick={search} type="submit" className="formButtons">
          Google Search
        </button>
        <button className="formButtons">I'm Feeling Lucky</button>
      </div>
    </form>
  );
};

export default HomeForm;
