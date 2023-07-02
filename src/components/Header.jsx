import React from 'react'
import { connectWallet } from '../Blockchain.Services'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <div className='bg-blue-900'>
      <div className='w-4/5 flex justify-between items-center p-3 mx-auto'>
          <div className='text-white text-3xl font-extrabold'>
              ManuNFT
          </div>

          <ul className='w-5/12 flex text-white list-none justify-between justify-items-auto'>
              <li>Market</li>
              <li>Artlist</li>
              <li>Features</li>
              <li>Community</li>
          </ul>
          
        {connectedAccount ? (
        <button
        className='shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-yellow-200 hover:text-black px-6 py-2 rounded-full'
        
      >
        {truncate(connectedAccount, 4,4, 11)}
      </button>
        ) : (
          <button
          className='shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-yellow-200 hover:text-black px-6 py-2 rounded-full'
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
        )}
        </div>
    </div>
  )
}

export default Header