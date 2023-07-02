import { useEffect, useState } from "react"
import { setGlobalState, useGlobalState } from "../store"

const Artworks = () => {
    const [nfts] = useGlobalState('nfts')
    const [end, setEnd] = useState(4)
    const [count] = useState(1)
    const [collection, setCollection] = useState([])

    const getCollection = () => {
        return nfts.slice(0, end)
    }
    
    useEffect(() => {
        setCollection(getCollection())
      }, [nfts, end])

  return (
      <div>
          <div className="w-4/5 py-10 mx-auto">
              <h4 className="text-blue-900 text-3xl font-bold uppercase">
                  {collection.length > 0 ? 'Latest Artworks' : 'No Artworks yet'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2 mt-4">
                  {collection.map((nft, i) => (
                      <Card key={i} nft={nft} />
                  ))}
              </div>

              
              <div className="text-center my-5">
              {collection.length > 0 && nfts.length > collection.length ? (
                
                
                <button className="shadow-lg shadow-black text-blue-200 bg-blue-900 hover:bg-yellow-200 hover:text-black  rounded-full px-6 py-2 mt-4" onClick={() => setEnd(end + count)}>Load More</button>
                
                  ) : null}
                  
                  </div>
              


          </div>
    </div>
  )
}

const Card = ({ nft }) => {
    const setNft = () => {
        setGlobalState('nft', nft)
        setGlobalState('showModal', 'scale-100')
    }
    return (
        <div className="w-full shadow-lg shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">

        <img
            className="h-60 w-full object-cover rounded-lg mb-3" src={nft.metadataURI}
            alt={nft.title}
        />


        <h4 className="text-white font-semibold">{nft.title}</h4>
        <p className="text-white text-sm my-1">{nft.description}</p>
        <div className="flex justify-between items-center mt-3 text-white">
            <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">{ nft.cost } ETH</p>
            </div>

            <button className="shadow-lg shadow-black text-blue-900 bg-blue-200 hover:bg-yellow-200 hover:text-black  rounded-full px-3 py-0.5"
            onClick={setNft}
            >View Details</button>
        </div>
    </div>
)
}


export default Artworks