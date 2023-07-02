import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { truncate, useGlobalState } from '../store'
import { useEffect, useState } from 'react'


const Transactions = () => {
    const [transactions] = useGlobalState('transactions')
    const [end, setEnd] = useState(6)
    const [count] = useState(1)
    const [collection, setCollection] = useState([])

    const getCollection = () => {
        return transactions.slice(0, end)
    }
    
    useEffect(() => {
        setCollection(getCollection())
    }, [transactions, end])
    

  return (
      <div className="bg-blue-900">
          <div className="w-4/5 py-10 mx-auto">
              <h4 className="text-white text-3xl font-bold uppercase">
              {collection.length > 0 ? 'Latest Transactions' : 'No Transactions yet'}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-3 py-2 mt-4">
                  
                  
              {collection.map((tx, i) => (
                      <Transaction key={i} tx={tx} />
                  ))}
                  


              </div>

              <div className="text-center my-5">
              {collection.length > 0 && transactions.length > collection.length ? (
                
                
                <button className="shadow-lg shadow-black bg-blue-200 text-blue-900 hover:bg-yellow-200 hover:text-black  rounded-full  px-6 py-2 mt-4" onClick={() => setEnd(end + count)}>Load More</button>
                
                  ) : null}
                  
                  </div>

          </div>
    </div>
  )
}


const Transaction = ({ tx }) => (
    <div className="flex justify-between items-center border border-blue-200 text-white w-full shadow-lg shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        
        <div className='rounded-md shadow-sm shadow-blue-200 p-2'>
            <BiTransfer />
        </div>

        <div>
            <h4 className='text-sm'>NFT Transfered</h4>
            <small className='flex justify-start items-center'>
                <span className='mr-1'>Received by</span>
                <a className='text-blue-200 mr-2' href="#" target='_blank'>{ truncate(tx.owner, 4, 4, 11) }</a>
                <MdOpenInNew />
            </small>
        </div>
        <p className='text-sm font-medium'>{ tx.cost } ETH</p>
    </div>
)

export default Transactions