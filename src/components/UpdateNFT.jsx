import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from '../store'
import { updateNFT } from '../Blockchain.Services'



const UpdateNFT = () => {
    const [modal] = useGlobalState('updateModal')
    const [nft] = useGlobalState('nft')
    const [price, setPrice] = useState(nft?.cost)
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!price || price <= 0) return
    
        setGlobalState('modal', 'scale-0')
        setGlobalState('loading', { show: true, msg: 'Initiating price update...' })
    
        try {
          setLoadingMsg('Price updating...')
          setGlobalState('updateModal', 'scale-0')
    
          await updateNFT({ id: nft.id, cost: price })
          setAlert('Price updated...', 'green')
          window.location.reload()
        } catch (error) {
          console.log('Error updating file: ', error)
          setAlert('Update failed...', 'red')
        }
      }

    const closeModal = () => {
        setGlobalState('updateModal', 'scale-0')
        resetForm()
    }

    const resetForm = () => {
        setPrice('')
    }

  return (
      <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-900 bg-opacity-50 transform transition-transform duration-300 ${modal}`}>
          
          <div className="bg-blue-900 shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
              <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex justify-between items-center">
                      <p className="font-semibold text-blue-200">{ nft?.title }</p>
                  

                      <button
                          type="button"
                          onClick={() => setGlobalState('updateModal', 'scale-0')}
                          className="border-0 bg-transparent focus:outline-none"
                      >
                          <FaTimes />
                      </button>
                  </div>
                  <div className='flex justify-center items-center rounded-xl mt-5'>
                      <div className='shrink-0 h-20 w-20 rounded-xl overflow-hidden'>
                          <img className='h-full w-full object-cover cursor-pointer' src={nft?.metadataURI} alt={nft?.title} />
                      </div>
                  </div>


                  <div className='flex justify-between items-center bg-blue-200 rounded-xl mt-5'>
                      
                          <input
                              type="number"
                          className='block w-full text-sm text-slate-800 focus:outline-none focus:ring-0 rounded-xl border-0 bg-transparent'
                          placeholder='NFT Price (ETH)'
                          min={0.01}
                          step={0.01}
                          name='price'
                          onChange={(e) => setPrice(e.target.value)}
                          //value={nft?.cost}
                          required
                          />
                      
                  </div>

                  

                  <button
                      className="shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-blue-200 hover:text-black  rounded-full mt-5 py-2"
                      onClick={handleSubmit}
                  >
                      Update Price
                  </button>

              </form>
          </div>
    </div>
  )
}

export default UpdateNFT