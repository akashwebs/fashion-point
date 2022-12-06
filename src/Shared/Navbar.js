import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { BiChevronRight } from "react-icons/bi";
import logo from '../assets/fashion.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* ------top small menu------------------ */}
      <div className="py-2 hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2  mid-container mx-auto text-xs  px-2">
          <div>
            <p>Please Call us to check the Stock before Placing the order!</p>
          </div>
          <div>
            <ul className="flex justify-end gap-2">
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  Call: 09678-300400
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  FB Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-8 inline-block border-r-2 border-slate-300"
                >
                  FB Group{" "}
                </a>
              </li>
              <li>
                <a href="#" className="pl-8 inline-block">
                  Pay Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* --------------------main navbar------------------------ */}
      <div className="bg-primary ">
        <div className="navbar mid-container mx-auto">
          <div className="navbar-start hidden lg:block w-[25%]">
            {/* <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div> */}
            <a className="">
              <Image
                src={logo}
                alt="logo"
                height={50}
                width={180}
                className="w-[180px] object-cover py-2"
              />
            </a>
          </div>
          {/* ------serachbar center-------- */}
          <div className="navbar-center block lg:flex lg:w-[55%] w-full">
            <div className="form-control w-full">
              <div className="input-group input-group-md">
                <input
                  type="text"
                  placeholder="I am looking for...."
                  className="input input-bordered input-md block w-full"
                  style={{ outline: "none" }}
                />
                <button className="btn btn-square btn-md bg-white border-none hover:bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>


          <div className="navbar-end text-end w-[20%]  lg:block hidden">
            <div className="flex-none">
              {/* --------------wishilist--------------------------- */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <AiOutlineHeart className="text-white" size={28} />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* -------------------------cart box----------------------- */}
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* <img src="https://placeimg.com/80/80/people" /> */}
                    <Image
                      src='https://placeimg.com/80/80/people'
                      className="rounded-full"
                      height={400}
                      width={400}
                      alt="profile"
                    >

                    </Image>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------3rd menu--------------- */}
      <div className="lg:block hidden">
        {/* ------second bg color write in global.css */}
        <div className="mid-container mx-auto">
          <div>
            {/* ----------catgoriy dropdown---- */}

            <div className="navbar py-0 min-h-0 z-50">
              <div className="flex-none">
                <ul className="menu menu-horizontal p-0 w-50">
                  <li tabIndex={0}>
                    <a className="w-[300px] shadow-sm ">
                      <GiHamburgerMenu size={25} />
                      Shop By Department
                      <svg
                        className="fill-current ml-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2 bg-base-100 w-[300px]">
                      <li>
                        <a className="flex items-center">
                          <GiClothes size={25} />
                          <span className="mr-auto">Cloths</span>
                          <BiChevronRight size={24} />
                        </a>
                      </li>

                      <li>
                        <a className="flex items-center">
                          <GiClothes size={25} />
                          <span className="mr-auto">Cloths</span>
                        </a>
                      </li>
                      <li>
                        <a className="flex items-center">
                          <GiClothes size={25} />
                          <span className="mr-auto">Cloths</span>
                          <BiChevronRight size={24} />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* -----------end 3rd emnu dropdown */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
