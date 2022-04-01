import Image from "next/image";
import { React, useRef } from "react";
import { useRouter } from "next/router";
import {
  ViewGridIcon,
  MicrophoneIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import {
  CogIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
  MapIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import SearchHeaderOption from "./SearchHeaderOption";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const defaultTerm = router.query.term;

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    term ? router.push(`/search?term=${term}`) : "";
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full px-5 py-7 items-center">
        <Image
          onClick={() => router.push("/")}
          className="object-contain cursor-pointer"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          height={30}
          width={100}
          priority
          layout="fixed"
        />

        <form className="flex flex-grow space-x-3 px-5 py-2 ml-10 mr-5 border border-gray-200 rounded-full items-center max-w-2xl shadow-md hover:shadow-lg">
          <input
            className="flex-1 focus:outline-none cursor-pointer"
            type="text"
            ref={searchInputRef}
            defaultValue={defaultTerm}
          />

          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 cursor-pointer text-gray-500"
          />

          <MicrophoneIcon className="h-6 cursor-pointer hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 pl-3" />
          <SearchIcon className="h-6 cursor-pointer text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search} />
        </form>

        <div className="ml-auto flex space-x-4 items-center">
          <CogIcon className="searchHeaderIcons" />
          <ViewGridIcon className="searchHeaderIcons" />
          <img
            className="h-8 w-8 object-cover rounded-full cursor-pointer hover:scale-105 transition duration-150 transform"
            loading="lazy"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU"
            alt="profile"
          />
        </div>
      </div>

      {/* header options section below input bar div */}
      <div className="flex justify-between lg:justify-start lg:space-x-36 lg:pl-44 px-7 text-gray-700 text-sm border-b-[1px]">
        <div className="flex space-x-4 items-center">
          <SearchHeaderOption Icon={SearchIcon} option="All" selected />
          <SearchHeaderOption Icon={PhotographIcon} option="Images" />
          <SearchHeaderOption Icon={PlayIcon} option="Videos" />
          <SearchHeaderOption Icon={NewspaperIcon} option="News" />
          <SearchHeaderOption Icon={MapIcon} option="Maps" />
          <SearchHeaderOption Icon={DotsVerticalIcon} option="More" />
        </div>
        <div className="flex space-x-4 ">
          <p className="link">Settings</p>
          <p className="link">Tools</p>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
