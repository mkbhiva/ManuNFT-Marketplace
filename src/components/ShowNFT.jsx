import { FaTimes } from 'react-icons/fa'
import { setAlert, setGlobalState, setLoadingMsg, truncate, useGlobalState } from '../store'
import Identicon from 'react-identicons'
import { buyNFT } from '../Blockchain.Services'


const ShowNFT = () => {
    const [showModal] = useGlobalState('showModal')
    const [nft] = useGlobalState('nft')
    const [connectedAccount] = useGlobalState('connectedAccount')

    const onChangePrice = () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('updateModal', 'scale-100')
        setGlobalState('nft', nft)
    }
    
    const handleNFTPurchase = async () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('loading', {
          show: true,
          msg: 'Initializing NFT transfer...',
        })
    
        try {
            setLoadingMsg('Purchasing awaiting Metamask approval.')
          await buyNFT(nft)
          setAlert('Transfer completed...', 'green')
          window.location.reload()
        } catch (error) {
            console.log('Error transfering NFT: ', error)
          setAlert('Purchase failed...', 'red')
        }
      }


    const closeModal = () => {
        setGlobalState('showModal', 'scale-0')
    }


  return (
      <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-900 bg-opacity-50 transform transition-transform duration-300 ${showModal}`}>
          
          <div className="bg-blue-900 shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
              <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                      <p className="font-semibold text-blue-200">Show NFT</p>
                  

                      <button
                          type="button"
                          onClick={closeModal}
                          className="border-0 bg-transparent focus:outline-none"
                      >
                          <FaTimes />
                      </button>
                  </div>
                  <div className='flex justify-center items-center rounded-xl mt-5'>
                      <div className='shrink-0 h-40 w-40 rounded-xl overflow-hidden'>
                          <img className='h-full w-full object-cover cursor-pointer' src={nft?.metadataURI} alt={nft?.title} />
                      </div>
                  </div>

                  <div className='flex flex-col justify-start rounded-xl mt-5'>
                      <h4 className='text-blue-100 font-semibold'>{nft?.title}</h4>
                      <p className='text-blue-300 text-xs my-1'>
                      {nft?.description}
                      </p>

                      <div className='flex justify-between items-center mt-3 text-blue-100'>
                          <div className='flex justify-start items-center'>
                              <Identicon className="h-10 w-10 object-contain rounded-full mr-3" string={nft?.owner ? nft?.owner : ''} size={50} />

                              <div className='flex flex-col justify-center items-start'>
                                  <small className='text-blue-100 font-bold'>@owner</small>
                                  <small className='text-blue-400 font-semibold'>{ nft?.owner ? truncate(nft?.owner, 4, 4, 11) : '' }</small>
                              </div>
                          </div>
                          <div className='flex flex-col text-blue-100'>
                              <small className='text-sm font-semibold'>Current Price</small>
                              <p className='text-sm font-semibold'>{nft?.cost} ETH</p>
                          </div>
                      </div>
                  </div>

                  <div className='flex justify-between items-center space-x-2'>
                      
                  {connectedAccount == nft?.owner ? (
                    <button
                    className="shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-blue-200 hover:text-black  rounded-full mt-5 p-2 w-full"
                    onClick={onChangePrice}
                    >
                        Change Price
                    </button>
                      ) : (
                              <button className="shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-blue-200 hover:text-black  rounded-full mt-5 p-2 w-full"
                              onClick={handleNFTPurchase}
                              >
                        Purchase
                    </button>
                  ) }

                  
                      

                      
                  </div>

              </div>
          </div>
    </div>
  )
}

export default ShowNFT