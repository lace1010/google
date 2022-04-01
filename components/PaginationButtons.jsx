import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;

  return (
    <div className=" flex max-w-xl mb-5 justify-evenly lg:pl-44">
      {startIndex >= 10 ? (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="paginationButton">
            <ChevronLeftIcon className="h-7 w-7" />
            <p>Previous</p>
          </div>
        </Link>
      ) : (
        //   added this invisble div to center google image for home page when there is no previous button. Because justify evenely needs a div here to keep 3
        <div className="flex-grow"></div>
      )}

      <Image
        className="object-contain"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        height={40}
        width={150}
        priority
        layout="fixed"
      />

      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10} `}
      >
        <div className="paginationButton">
          <ChevronRightIcon className="h-7 w-7" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
