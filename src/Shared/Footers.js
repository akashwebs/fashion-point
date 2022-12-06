import Image from 'next/image';
import logo from '../assets/fashion.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import payment from '../assets/payment-logo.webp'
import NewsLetter from '../Components/Home/NewsLetter/NewsLetter';
import Link from 'next/link';

const Footers = () => {
  return (
    <>
      <div className=" lg:pb-3 pb-20 lg:pt-5">
        <div className="mid-container">
          <div>
            <footer className="footer px-0  sm:px-4 py-10 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-10  text-base-content">
              <div>
                {/* <img src={logo} alt=""/> */}
                <Link href={'/'}>
                  <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={100}
                  >
                  </Image>
                </Link>

                <p>Fashion Point Ltd.<br />Providing reliable tech since 1992</p>
              </div>
              <div>
                <span className="font-bold text-xl">Company</span>
                <p className="link link-hover">About Us</p>
                <p className="link link-hover">Team Member</p>
                <p className="link link-hover">Careers</p>
                <p className="link link-hover">Latest News</p>
              </div>
              <div>
                <span className="font-bold text-xl">My Account</span>
                <p className="link link-hover">Dashboard</p>
                <p className="link link-hover">My Orders</p>
                <p className="link link-hover">View Cart</p>
                <p className="link link-hover">My Wishlist</p>
                <p className="link link-hover">My Profile</p>
              </div>
              <div>
                <span className="font-bold text-xl">Customer Service</span>
                <p className="link link-hover">Payment Methods</p>
                <p className="link link-hover">Product Returns</p>
                <p className="link link-hover">Support Center</p>
                <Link href={'/privacy-policy'}><p className="link link-hover">Privacy & Policy</p></Link>
                <Link href={'/terms'}><p className="link link-hover">Terms & Conditions</p></Link>
              </div>
            </footer>
          </div>
          <div>
            <div className='bg-[#10b9811c] px-7 py-8 rounded-xl mt-5'>
              <div className='md:flex  items-center'>
                <div className='md:w-[33%]'>
                  <h1 className='font-bold text-center'>Follow Us</h1>
                  <div className='flex justify-center items-center gap-2 mt-2 text-xl'>
                    <div className='social-icon'>
                      <FaFacebookF />
                    </div>
                    <div className='social-icon'>
                      <BsTwitter />
                    </div>
                    <div className='social-icon'>
                      <IoLogoYoutube />
                    </div>
                    <div className='social-icon'>
                      <FaLinkedinIn />
                    </div>
                  </div>
                </div>

                <div className='text-center md:w-[33%] mb-7 md:mb-0 hidden md:block'>
                  <h1 className='font-bold'>Call Us Today</h1>
                  <h1 className='text-xl font-semibold text-warning'>01309-091104</h1>
                </div>

                <div className='text-end md:w-[34%] hidden md:block'>
                  <div className='flex justify-center'>
                    <Image
                      src={payment}
                      alt="payment"
                      width={200}
                      height={100}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>

            <h1 className='text-sm text-center mt-5'>Design & Developed By <span className='font-bold text-[#FF9800] cursor-pointer'>PRO-IT-GUYS</span></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footers;
