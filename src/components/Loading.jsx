import { useGlobalState } from "../store"

const Loading = () => {
  const [loading] = useGlobalState('loading')
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-blue-900 bg-opacity-50 transform transition-transform duration-300 ${loading.show ? 'scale-100' : 'scale-0'}`}>
          
      <div className="bg-blue-900 shadow-xl shadow-black rounded-xl min-w-min px-10 pb-2">
        <div className="flex flex-col text-blue-100">
          <div className="flex justify-center items-center">
            <div className="lds-dual-ring scale-50"></div>
            <p className="text-lg">Processing.....</p>
          </div>
          <small className="text-center">{loading.msg}</small>
        </div>
      </div>
    </div>
  )
}

export default Loading