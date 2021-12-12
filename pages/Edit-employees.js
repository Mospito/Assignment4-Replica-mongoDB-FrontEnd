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
    const [flag, setFlag] = useState(true)


    useEffect(() => {
        profileEmployees()
    }, [])

    const profileEmployees = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${URL}`)
            console.log('user: ', users.data)
            setEmployees(users.data)


        }
        catch (e) {
            console.log(e)
        }

    }

    const updateEmployees = async (id) => {
        try {
            // console.log('token: ', token)
            const users = await axios.put(`http://localhost:3000/api/disease/${id}`, {
                id,
                name,
                position,
                salary,
                address
            })
            // console.log('user: ', users.data)
            setEmployees(users.data)
            alert("แก้ไขข้อมูลเสร็จสิ้น")
            setFlag(false)


        }
        catch (e) {
            console.log(e)
            alert(e)
        }

    }


    const deleteEmployee = async (id) => {
        try {
            // console.log('token: ', token)
            const users = await axios.delete(`http://localhost:3000/api/disease/${id}`)
            // console.log('user: ', users.data)
            setEmployees(users.data)
            alert("ลบข้อมูลเสร็จสิ้น")
            setFlag(false)
        }
        catch (e) {
            console.log(e)
            alert(e)
        }

    }

    const printEmployees = (ID) => {
        employees.map((item, index) => {

            if (ID == item.id) {
                // console.log(item.name);
                setName(item.name)
                SetPosition(item.position)
                setSalary(item.salary)
                setAddress(item.address)
                setFlag(false)

            }
        


        })

    }

    const difindFlag = () => {
        setFlag(!flag)
    }
    return (
        <div className='flex  flex-col justify-start items-center h-screen w-screen'>
            <div className='flex flex-row justify-center items-center w-full mt-8'>
                <label className='flex mr-2 font-bold'>ค้นหาพนักงาน:</label>
                <input className='flex pl-2 rounded-md h-8 w-1/5 border-2 border-green-600 pl-1 items-center' type='text' autocomplete="id" required onChange={(e) => setId(e.target.value)} />
                <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => printEmployees(id)}> ค้นหา</button>
            </div>


            <div >
                <text className='flex  justify-center mt-5 font-bold text-2xl'>แก้ไขข้อมูลพนักงาน</text>
                <div className='card rounded-5 mt-5 bg-yellow-100 flex flex-col'>
                    <div className='flex flex-col '>
                        <text className='font-bold'>ID: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={id} onChange={(e) => setId(e.target.value)} />
                        <br></br>
                    </div>

                    <div className='flex flex-col '>
                        <text className='font-bold'>Name: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={name} onChange={(e) => setName(e.target.value)} />
                        <br></br>
                    </div>

                    <div className='flex flex-col '>
                        <text className='font-bold'>Position: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={position} onChange={(e) => SetPosition(e.target.value)} />
                        <br></br>
                    </div>

                    <div className='flex flex-col '>
                        <text className='font-bold'>Salary: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={salary} onChange={(e) => setSalary(e.target.value)} />
                        <br></br>
                    </div>

                    <div className='flex flex-col '>
                        <text className='font-bold'>Address: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className='flex justify-end'>
                        <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => updateEmployees(id)}> แก้ไข</button>
                        <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => deleteEmployee(id)}> ลบ</button>
                    </div>

                </div>

            </div>

         



            {/* {flag == true ?
                <div>
                    <text className='flex justify-center mt-5 font-bold text-2xl'>แก้ไขข้อมูลพนักงาน</text>
                    <div className='card rounded-5 mt-5 bg-yellow-100 flex flex-col '>
                        <div className='flex justify-center '>
                            <text className='font-bold'>ID: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={id} onChange={(e) => setId(e.target.value)} />
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Name: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={name} onChange={(e) => setName(e.target.value)} />
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Position: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={position} onChange={(e) => SetPosition(e.target.value)} />
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Salary: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={salary} onChange={(e) => setSalary(e.target.value)} />
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Address: </text>  <input className='rounded-md drop-shadow-lg  border-2 border-black pl-1 m-2' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>

                        <div className='flex justify-end'>
                            <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => updateEmployees()}> บันทึก</button>
                            <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => difindFlag()}> ลบ</button>
                        </div>

                    </div>

                </div> :
                <div> ลบ

                    <div className='card rounded-5 mt-5 bg-yellow-100'>
                        <div >
                            <text className='font-bold'>ID: </text> {id}
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Name: </text> {name}
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Position: </text> {position}
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Salary: </text> {salary} Bath
                            <br></br>
                        </div>

                        <div>
                            <text className='font-bold'>Address: </text> {address}
                        </div>

                        <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => difindFlag()}> แก้ไข</button>
                        <button className='flex border-2 border-green-600 ml-2 bg-green-300 p-1.5 rounded-md h-8 items-center hover:bg-green-200' onClick={() => difindFlag()}> ลบ</button>
                    </div>
                </div>} */}



        </div>
    )
}
