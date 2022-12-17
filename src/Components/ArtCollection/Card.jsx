/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { arts } = props;

  return (
    <div className="flex flex-row gap-9 flex-wrap justify-center items-center">
      {arts?.map((art) => {
        return (
          <div className="p-4 rounded-2xl max-w-[18rem] bg-slate-300 text-black">
            <img src={art.image} alt="" />
            <h3 className="my-3 text-[1.5rem] font-semibold">{art.title}</h3>
            <h3 className="my-3 text-[1rem] font-semibold">
              Author: {art.user.username}
            </h3>

            <Link
              to={`/detailArt/${art._id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Detail
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
