import Link from 'next/link'
const Nav = () => {


    return (


        <nav id="header" className="w-full z-30 top-10 py-1 bg-green-200 shadow-lg border-b border-green-400 ">
            <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">

                    <ul className="md:flex items-center justify-between text-base text-green-800 pt-4 md:pt-0">
                        <Link href="/">
                            <a className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2  "  >Home</a>
                        </Link>

                        <Link href="/list-employees">
                            <a className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2" >Show-Employees</a>
                        </Link>

                        <Link href="/Edit-employees">
                            <a className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2" >Edit-employees</a>
                        </Link>

                        <Link href="/Record-employees">
                            <a className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2" >Record-employees</a>
                        </Link>



                    </ul>

                </div>

                <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" >
                    <div className="auth flex items-center w-full md:w-full ">

                        {/* <Link href="/signIn">
                            <a className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700 font-bold" >Sign in</a>
                        </Link>

                        <Link href="/signUp">
                            <a className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700 font-bold">Sign up</a>
                        </Link>

                        <Link href="/logout">
                            <a className="bg-green-600 text-gray-200  p-2 rounded  hover:bg-green-500 hover:text-gray-100 font-bold">Log out</a>
                        </Link> */}

                    </div>
                </div>
            </div>
        </nav>

    )


}

export default Nav