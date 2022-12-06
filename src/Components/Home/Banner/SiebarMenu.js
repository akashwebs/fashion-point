import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";

const SiebarMenu = () => {
  return (
    <div>
      <ul id="catagory-menu">
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FaTshirt size={18} /> Parent item 1
              </span>

              <BiChevronRight size={25} />
            </span>
          </a>
          {/* dropdown */}
          <ul>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
            <li>
              <a>items 1</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SiebarMenu;
