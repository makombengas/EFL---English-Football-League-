import Link from "next/link"


const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center flex-col gap-6">
            <span className="text-6xl text-[#BA0C2F] font-extrabold ">404</span>
            <h1 className="text-3xl"> The page you are looking for does not exist </h1>
            <h2 className="text-3xl font-light"> Please go back to the previous page </h2>
            <button className="text-3xl font-light">
                <Link className="text-3xl bg-[#001389] text-white py-2 px-4 rounded-md " href='/'>Go back</Link>
            </button>
        </div>
    </div>
  )
}

export default NotFound