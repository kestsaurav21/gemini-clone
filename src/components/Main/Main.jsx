import { assets } from "../../assets/assets";


const Main = () => {

    return(
        <main className="min-h-screen flex-1 relative pb-15vh">
            <nav className="w-full p-5 flex flex-row items-center justify-between  ">
                <p className="text-start flex-item text-22px">Gemini</p>
                <img className="rounded-full h-20 mt-5 flex-item" src={assets.user_icon} alt="" />
            </nav>
            
        </main>
    )
}


export default Main;