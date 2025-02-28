'use client'
import Link from "next/link"
import { useState } from "react"

const handleAboutClick = () => {
    alert("This is Assignment2 from 306F-Web2 Grp2 ")
}

export default function Header(){
    const [mobileMenu, setMobileMenu] = useState('hidden')

    const handelMobileMenu = () => {
        if (mobileMenu === 'hidden'){
            setMobileMenu('')
        }else{
            setMobileMenu('hidden')
        }
    }

    return (
        <nav className="bg-rose-900 w-full">
            <div className="mx-full max-w-8xl px-2 sm:px-6 lg:px-8"> 
                <div className="relative flex h-16 items-center "> 
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-between"> 
                        {/* Mobile menu button */ }
                        <button onClick={() => {handelMobileMenu()}} type="button">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg width="18" height="18" viewBox="0 0 18 18">
                                <polyline fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 12, 16 12">
                                    <animate attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate>
                                    <animate attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate>
                                </polyline>
                                <polyline fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" points="2 5, 16 5">
                                    <animate attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate>
                                    <animate attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate>
                                </polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-normal sm:items-stretch">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-rose-100 rounded-md font-bold">Home</Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/studentList" className="text-rose-100 rounded-md font-bold">List Students</Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/studentAdd" className="text-rose-100 rounded-md font-bold">Add Students</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <button type="button" className="relative rounded-full bg-rose-800" onClick={handleAboutClick}>
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View Notifactions</span>
                            <svg
                                width="52"
                                height="52"
                                fill="white"
                                className="m-1 h-7 w-7"
                                viewBox="0 0 52 52">
                                <path d="M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z"/>
                                <path d="M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z"/>
                                <circle cx="26" cy="15.71" r="2.57"/>
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <a className="" target="_blank" href="https://www.sait.ca/">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open profile</span>
                                    <img className="h-8 w-8 rounded-full" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABAlBMVEX////G5/im2POt2/TC5fcWr+iGzfAAoeVzy/P47u+64vYKsOuw5/+czuzHrLnIcXivAySmAADZoqcAp+mNmLX019jaqK3EWGCuAACxAAmXACLEfYbRjpSFEDBgLlIAUI2NuNr89PWqAAzl3OiWW5u6ZGbesbX0//8AarkAbLqqxuOrABlhAHi7ncBcv+0mfsEAbrugeqzw6PDh+P/B1upmoNLJXmKyJDeSY6G/OkGAQI7g6/UAb7vWyNtPOobxY1zsAAClN0BxIYLvSkHuJRTvLyGEPWDDs9BxN46ph7Tzg37/0MlJda75lY7Mpr+ybHvvQTZSF2vqw8dIm9RBicb4t7Q694apAAABIElEQVR4Ac2QRXYDMRQE28zMzLbMzMNjZrz/VaKwQuu4Vt2vhB//jUar+0vpDUaDyQxYLD+d1QbYHU6X2+Nxe79Lnz8QDIUjkWgs7va4wAKdLxH2eELJVBrIZD0BRuXyZlvBVcyUSLlCq7vKHJyp1W2Nl9RsNTOBeDVb/JTtTtfkeEk90uoPPNUhPhnBaNK8xn6LpMehDHPjZGqz4ZUAx5EeGPhaTfC/RlGSqS2xdlJTahOeBnU2lxYc1wfLckX1GpvZTAxsdxyZsnK/P6yU2lGaibRM6WdZeVKB/Hk+n/dooZNIg5UbgHfPpQuhe9Jl0mPlZgYEpdnmWia3JuGaYLFIp400n2HaIq0W4aZgwV2SZlKAhvTtlsZ3Avu9BQ/AEx3iJ+4w9/CZAAAAAElFTkSuQmCC" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute w-full bg-rose-800 sm:hidden ${mobileMenu}`}>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link onClick={() => {handelMobileMenu()}} href="/" className="text-rose-100 hover:bg-rose-700 hover:text-white font-bold">Home</Link>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link onClick={() => {handelMobileMenu()}} href="/studentList" className="text-rose-100 hover:bg-rose-700 hover:text-white font-bold">List Students</Link>
                </div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link onClick={() => {handelMobileMenu()}} href="/studentAdd" className="text-rose-100 hover:bg-rose-700 hover:text-white font-bold">Add Students</Link>
                </div>
            </div>
        </nav>
    )
}