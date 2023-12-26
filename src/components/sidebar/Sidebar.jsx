import { useState } from "react";
const openVarient ={
    
}
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="h-screen bg-sky-500">
            <div
                className="abulute bg-white h-screen w-3/12"
            >
                <button
                    onClick={()=>setOpen(!open)}
                    className="m-4 p-2 bg-white rounded-full"
                >
                    {!open ?

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>


                    }
                </button>
            </div>

        </div>
    );
};

export default Sidebar;