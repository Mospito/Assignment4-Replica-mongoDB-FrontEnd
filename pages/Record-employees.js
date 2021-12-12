import Footer from '../components/footer'
import axios from 'axios'
import { useState, useEffect } from 'react'

const URL = `http://localhost:3000/api/disease/`

export default function Home() {

  const [employees, setEmployees] = useState([])
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [position, SetPosition] = useState("")
  const [salary, setSalary] = useState(0)
  const [address, setAddress] = useState("")



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

  const postEmployees = async (id, name, position, salary, address) => {
    try {
      // console.log('token: ', token)
      const users = await axios.post(URL, {
        id,
        name,
        position,
        salary,
        address

      })
      // console.log('user: ', users.data)
      setEmployees(users.data)
      alert("Success")
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='flex fixed flex-col justify-center items-center h-screen w-screen'>
      <title>RecordEmployees</title>
      {/* <div className='flex justify-center items-center w-full h-3/4'>
        <div className='flex flex-col justify-center items-center font-bold text-green-800 mt-12 '>
          <h1 className='text-6xl uppercase tracking-wider'>Record</h1>
          <h2 className='text-3xl tracking-wider mt-8 italic'> " Record " </h2>
        </div>
      </div>


      <div className='w-screen'>
        <Footer />
      </div> */}
      <div>
        <div className='flex flex-col justify-center border-2 border-black w-full p-4 rounded-xl drop-shadow-lg bg-red-100 -mt-12'>
          <div >
            <label className='pr-4' for="id">ID</label>
            <input className='rounded-md drop-shadow-lg h-6 w-full border-2 border-black pl-1' id="id" type="text" autocomplete="id" required onChange={(e) => setId(e.target.value)} />
            <br></br>
            <br></br>
          </div>

          <div >
            <label for="name" className='pr-4'>Name</label>
            <input className='rounded-md drop-shadow-lg h-6 w-full border-2 border-black pl-1' id="name" type="text" autocomplete="name" required onChange={(e) => setName(e.target.value)} />
            <br></br>
            <br></br>
          </div>

          <div>


            <label for="position">Position</label>
            <input className='rounded-md drop-shadow-lg h-6 w-full border-2 border-black pl-1' id="position" type="text" autocomplete="position" required onChange={(e) => SetPosition(e.target.value)} />
            <br></br>
            <br></br>
          </div>


          <div>
            <label for="salary">Salary</label>
            <input className='rounded-md drop-shadow-lg h-6 w-full border-2 border-black pl-1' id="salary" type="number" autocomplete="salary" required onChange={(e) => setSalary(e.target.value)} />
            <br></br>
            <br></br>
          </div>
          <div>


            <label for="address">Address</label>
            <input className='rounded-md drop-shadow-lg h-6 w-full border-2 border-black pl-1' id="address" type="text" autocomplete="address" required onChange={(e) => setAddress(e.target.value)} />
            <br></br>
            <br></br>
          </div>

          <br></br>

          <div className='flex justify-center -mt-6'>
            <button className='flex justify-center  border-2 border-green-900 w-24 rounded-md drop-shadow-lg cursor-pointer bg-green-500 hover:bg-green-300' onClick={() => postEmployees(id, name, position, salary, address)}>Register</button>
          </div>

        </div>
      </div>

    </div>
  )
}
