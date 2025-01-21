export default function NavBar() { 
    return (
        <>
            <div className=" p-5 flex justify-between  mt-0 bg-opacity-90 backdrop-blur-xl  bg-transparent h-20 ">
                <h1 className="text-slate-200 text-2xl">SellTech</h1>
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-200">Home</a>
                    <a href="#" className="text-slate-200">Products</a>
                    <a href="#" className="text-slate-200">Contact</a>
                </div>
            </div>  
        </>
    )
}