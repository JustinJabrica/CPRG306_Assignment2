export default function Footer(){
    return (
        <>
            <div className="mt-2.5rem pt-1rem flex gap-6 items-center justify-normal">
                <div className="flex flex-1 items-center justify-normal sm:items-stretch">
                    <div className="flex gap-3">
                        <a className="" target="_blank" href="https://www.instagram.com/SAIT">
                            <svg width="21" height="21" fill="gray" className="h-6 w-6" viewBox="0 0 21 21"> <path d="M10.7 5.1c-3 0-5.5 2.4-5.5 5.4 0 3 2.4 5.4 5.5 5.4 3 0 5.5-2.4 5.5-5.4-.1-3-2.5-5.4-5.5-5.4zm0 8.9c-2 0-3.6-1.6-3.6-3.5S8.7 7 10.7 7s3.6 1.6 3.6 3.5c-.1 1.9-1.7 3.5-3.6 3.5zm6.9-9.1c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3c.8 0 1.3.6 1.3 1.3zm3.7 1.3c-.1-1.7-.5-3.2-1.7-4.4C18.4.6 16.8.2 15.1.1 13.3 0 8 0 6.3.1 4.6.2 3.1.5 1.8 1.8.5 3 .2 4.5.1 6.2 0 7.9 0 13.1.1 14.8c.1 1.7.5 3.2 1.7 4.4 1.3 1.2 2.8 1.6 4.5 1.7 1.8.1 7 .1 8.8 0 1.7-.1 3.2-.5 4.5-1.7 1.2-1.2 1.6-2.7 1.7-4.4.1-1.7.1-6.9 0-8.6zM19 16.7c-.4.9-1.1 1.6-2 2-1.4.5-4.7.4-6.3.4-1.6 0-4.9.1-6.3-.4-.9-.4-1.7-1.1-2-2-.6-1.4-.4-4.7-.4-6.2s-.1-4.8.4-6.2c.4-.9 1.1-1.6 2-2 1.4-.5 4.7-.4 6.3-.4 1.6 0 4.9-.1 6.3.4.9.4 1.7 1.1 2 2 .6 1.4.4 4.7.4 6.2s.2 4.8-.4 6.2z"></path> </svg></a>
                        <a className="" target="_blank" href="https://twitter.com/sait">
                            <svg width="20" height="20" fill="gray" className="h-6 w-6" viewBox="0 0 20 20"> <path d="M17,0h3.3l-7.2,8.3l8.5,11.2h-6.7l-5.2-6.8l-6,6.8H0.4l7.7-8.8L0,0h6.8l4.7,6.2L17,0z M15.8,17.5h1.8L5.8,1.9h-2L15.8,17.5z"></path> </svg></a>
                        <a className="" target="_blank" href="https://www.linkedin.com/edu/southern-alberta-institute-of-technology-20153">
                            <svg width="26" height="26" fill="gray" className="h-6 w-6" viewBox="0 0 26 26"> <path d="M22.7 25H2.3C1 25 0 24 0 22.8V2.2C0 1 1 0 2.3 0h20.5C24 0 25 1 25 2.2v20.5c0 1.3-1 2.3-2.3 2.3zM2.3 1C1.6 1 1 1.6 1 2.2v20.5c0 .7.6 1.3 1.3 1.3h20.5c.7 0 1.3-.6 1.3-1.2V2.2C24 1.6 23.4 1 22.7 1H2.3z"></path> <path d="M3.8 5.9c0-2.8 4.1-2.8 4.1 0s-4.1 2.7-4.1 0zM4.1 21h3.6V9.5H4.1V21zM17.4 21H21v-6.3c0-3.1-.7-5.5-4.3-5.5-1.7 0-2.9 1-3.4 1.9V9.5H9.9V21h3.6v-5.7c0-1.5.3-2.9 2.1-2.9s1.9 1.7 1.9 3V21z"></path> </svg></a>
                        <a className="" target="_blank" href="https://www.facebook.com/sait/">
                            <svg width="26" height="26" fill="gray" className="h-6 w-6" viewBox="0 0 26 26"> <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM1 12C1 5.9 5.9 1 12 1s11 4.9 11 11c0 5.7-4.3 10.3-9.7 11v-7h2.5l.5-3.1h-3v-2c0-.9.4-1.7 1.8-1.7h1.4V6.5s-1.2-.2-2.4-.2c-2.5 0-4.1 1.5-4.1 4.2v2.4H7.2V16h2.7v6.9C4.8 21.9 1 17.4 1 12z"></path> </svg></a>
                        <a className="" target="_blank" href="https://www.youtube.com/channel/UCVAqa3U8cTowb92y4NgLQVg">
                            <svg width="25" height="25" fill="gray" className="h-6 w-6 mt-1" viewBox="0 0 25 25"> <path d="M11.9 17c-.3 0-7.2 0-9-.5-1.2-.3-2-1.2-2.3-2.3C0 12.3 0 8.7 0 8.5s0-3.8.5-5.6C.7 1.8 1.6.9 2.8.6 4.7 0 11.6 0 11.9 0s7.2 0 9 .5c1.1.2 2 1.1 2.3 2.3.5 1.8.5 5.5.5 5.6s0 3.8-.5 5.6c-.2 1.1-1.1 2-2.3 2.3-1.8.7-8.7.7-9 .7zm0-16c-.1 0-7.1 0-8.8.5-.9.2-1.5.8-1.6 1.6C1 4.8 1 8.5 1 8.5s0 3.7.5 5.4c.2.8.8 1.4 1.7 1.7 1.6.4 8.6.4 8.7.4s7.1 0 8.8-.5c.9-.3 1.5-.9 1.6-1.6.5-1.7.5-5.4.5-5.4s0-3.6-.5-5.4c-.3-.9-.9-1.5-1.6-1.6C19 1 12 1 11.9 1zM9.1 12.8V4.2l7.4 4.3-7.4 4.3zm1-6.8v5l4.4-2.5L10.1 6z"></path> </svg></a>
                    </div>
                </div>
                <div className="gap-3">
                    <p className="">© SAIT 2025</p>
                </div>
            </div>
        </>
    )
}