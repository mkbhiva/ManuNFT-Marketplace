import Identicon from 'react-identicons'
import { setGlobalState, truncate, useGlobalState } from '../store'


const imghero = "https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg.webp"

const Hero = () => {

    const [connectedAccount] = useGlobalState('connectedAccount')


    return (
        <div className='bg-blue-100'>
            <div className='flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10'>
                <div className='md:w-3/6 w-full'>
                    <div>
                        <h1 className='text-5xl font-bold text-blue-900'>
                            Buy and Sell <br />
                            Digital Arts, <br />
                            <span>NFTs </span>
                            collections
                        </h1>
                        <p className='font-semibold mt-3'>Mint and collect the hottest NFTs arround.</p>
                    </div>
                    <div className='flex mt-5'>
                        <button className='shadow-lg shadow-black text-yellow-200 bg-black hover:bg-yellow-200 hover:text-black py-2 px-8 rounded-full'
                            onClick={() => setGlobalState('modal', 'scale-100')}
                        >Create NFT</button>
                    </div>
                    <div className='w-3/4 flex justify-between items-center mt-10'>
                        <div className='text-blue-900'>
                            <p className='font-bold text-3xl'>123K</p>
                            <small className='text-black font-semibold text-lg'>Users</small>
                        </div>
                        <div className='text-blue-900'>
                            <p className='font-bold text-3xl'>860K</p>
                            <small className='text-black font-semibold text-lg'>Artworks</small>
                        </div>
                        <div className='text-blue-900'>
                            <p className='font-bold text-3xl'>200K</p>
                            <small className='text-black font-semibold text-lg'>Artist</small>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl shadow-black md:w-2/4 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
                    
                    <img className="h-80 w-full object-cover" src={imghero} alt="hero" />
                    
                    
                    <div className='flex flex-start items-center p-3'>
                        <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={connectedAccount} size={50} />
                        
                        <div>
                            <p className='text-white font-semibold'>{truncate(connectedAccount, 4, 4, 11) }</p>
                            <small className='text-yellow-200 font-bold'>@you</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero