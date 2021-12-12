import Footer from '../components/footer'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URL = `http://localhost:3000/api/disease/`



export default function Home() {

    const [employees, setEmployees] = useState([])


    useEffect(() => {
        profileEmployees()
    }, [])

    const profileEmployees = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(URL)
            console.log('user: ', users.data)
            setEmployees(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    const printEmployees = () => {
        return employees.map((item, index) => (
            <div key={index} className='card rounded-5 mt-5 bg-yellow-100'>
                <div >
                   <text className='font-bold'>ID: </text>{item.id}
                    <br></br>
                </div>

                <div>
                   <text className='font-bold'>Name: </text>{item.name}
                    <br></br>
                </div>

                <div>
                <text className='font-bold'>Position: </text>{item.position}
                    <br></br>
                </div>

                <div>
                <text className='font-bold'>Salary: </text>{item.salary} Bath
                    <br></br>
                </div>

                <div>
                <text className='font-bold'>Address: </text> {item.address}
                </div>

            </div>
        ))
    }



    return (
        <div className='bg-lime-100 bg-blend-normal hover:bg-blend-darken '>


            <div className='flex fixed flex-col justify-start items-center h-screen w-screen scroll-smooth hover:scroll-auto '>
                <title>ShowEmployees</title>
                <div className='flex justify-center items-center w-full mt-12'>
                    <div className='flex flex-col justify-center items-center font-bold text-green-800  animate-pulse '>
                        <h1 className='text-4xl uppercase tracking-wider'>Show Employees</h1>
                    </div>
                </div>

                <div class="grid grid-cols-4 gap-4 mt-4 border-4 rounded-md shadow-xl border-green-900 w-3/4 h-3/4 overflow-y-auto p-2">
                    {printEmployees()}
                </div>


                {/* <div className='w-screen'>
                <Footer />
            </div> */}

            </div>
        </div>
    )
}
