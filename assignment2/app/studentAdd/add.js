'use client'

import { useState } from "react"

// export const revalidate = 10

const clearReqMsg = () => {
    // document.getElementById('reqMsg').innerText = '‎'
}

const clearReqMsgAndInputs = () => {
    
}

export default function Add(){
    const [state, setState] = useState('')

    const FormAction = async(formData) => {
        const res = await fetch('http://localhost:3000/api?a=add&q=students', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()
        setState(data)
        
        if(data.message === 'Saved!'){
            document.getElementById('reqMsg').class = 'font-medium text-green-600'
            document.getElementById('reqMsg').className = 'font-medium text-green-600'
        } else {
            document.getElementById('reqMsg').class = 'font-medium text-red-600'
            document.getElementById('reqMsg').className = 'font-medium text-red-600'
        }
    }

    return(
        <>
            <div><h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-3xl lg:text-3xl dark:text-white">Add Student</h1></div>
            <form action={FormAction}>
                <div id="reqMsg" className="">{state.message} ‎ </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input onChange={() => {clearReqMsg()}} type="text" name="fn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                        <input onChange={() => {clearReqMsg()}} type="text" name="ln" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <input onChange={() => {clearReqMsg()}} type="text" name="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2021-12-31" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" required />
                    </div>  
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade</label>
                        <input onChange={() => {clearReqMsg()}} type="number" min="0" max="100" name="grd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}