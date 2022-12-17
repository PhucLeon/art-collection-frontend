/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAnArt } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import { getAnArtSuccess } from "../../redux/artSlice";

const DetailArt = () => {
  const { artId } = useParams();
  const user = useSelector((state) => state.auth.login.currentUser);
  const admin = user?.admin;
  const accessToken = user?.accessToken;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, getAnArtSuccess);

  const art = useSelector((state) => state.art.getAnArt?.anArt);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (user?.accessToken) {
      getAnArt(artId, accessToken, dispatch, axiosJWT);
    }
  }, [artId]);

  //   console.log(artId);

  return (
    <>
      {art ? (
        <section className="flex flex-col items-center">
          <div className="flex flex-row flex-wrap gap-6 justify-center items-center">
            <div className="px-8 max-w-[30rem]">
              <img src={art?.image} alt="" />
            </div>

            <div className="px-16 flex flex-col gap-4 items-center justify-center self-start w-[30rem]">
              <h3 className="font-semibold text-[2rem]">{art.title}</h3>
              <h3 className="font-semibold text-[1.5rem]">
                Author: {art.user.username}
              </h3>
              <p className="text-[1rem] text-justify">{art.description}</p>

              {admin ? (
                <div className="flex flex-wrap gap-4">
                  <Link to={`/updateArt/${artId}`} className="">
                    <button className="w-[8rem] h-[2rem] bg-slate-800 text-white rounded-2xl hover:bg-slate-400 hover:text-black">
                      Update Art
                    </button>
                  </Link>
                  

                  <Link to={`/deleteArt/${artId}`} className="">
                    <button className="w-[8rem] h-[2rem] bg-slate-800 text-white rounded-2xl hover:bg-slate-400 hover:text-black">
                      Delete Art
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <button className="w-[8rem] h-[2rem] bg-slate-800 text-white rounded-2xl hover:bg-slate-400 hover:text-black">
                    Booking Artist
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetailArt;
