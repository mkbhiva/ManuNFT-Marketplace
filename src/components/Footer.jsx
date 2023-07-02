
const Footer = () => {
  return (
      <div className="w-full flex flex-col justify-between bg-gray-900 md:justify-center items-center p-4">
          <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
              <div className="flex flex-[0.25] justify-center items-center">
                  <div className="text-white font-bold text-3xl">ManuNFT</div>
              </div>

              <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center">
                  <p className="cursor-pointer mx-2">Market</p>
                  <p className="cursor-pointer mx-2">Artists</p>
                  <p className="cursor-pointer mx-2">Features</p>
                  <p className="cursor-pointer mx-2">Community</p>
              </div>
              <div className="flex flex-[0.25] justify-center items-center mt-4 md:mt-0">
                  <p className="text-white">&copy; 2023 All rights reserved.</p>
              </div>
          </div>
    </div>
  )
}

export default Footer