import Budget from "./Budget"


import Services from "./Services"

const Form = () => {
  return (
    <div className="text-black rounded-md  bg-slate-50 w p-6 m-6">
      <form action="">

      <div className="grid grid-cols-2">

        <div className="m-4 p-4">
        <label className=" text-xl" htmlFor="Name">Name*</label><br/>
        <input className="bg-white rounded-md  border-2  w-full mt-3 p-2" placeholder="Enter Your Name" type="text" name="" id="" />
        </div>

        <div className="m-4 p-4">
        <label className=" text-xl " htmlFor="Email"><span className="text-left">Email*</span></label><br/>
        <input className="bg-white rounded-md border-2  w-full mt-3 p-2" type="email"  placeholder="Enter Your Email"  name="" id="" />
        </div>
         
        <div className="m-4 p-4">
        <label className=" text-xl" htmlFor="">Phone Number(optional)</label><br/>
        <input className="bg-white rounded-md border-2  w-full mt-3 p-2" type="number" placeholder="Enter your phone Number" name="" id="" />
        </div>
        
        <div className="m-4 p-4">
        <label className=" text-xl" htmlFor="Company Name">Company(Name)</label><br/>
        <input className="bg-white rounded-md border-2  w-full mt-3 p-2" type="text" placeholder="Enter your Company Name" name="" id="" />
        </div>

      </div>

      
      <div className="services m-4 p-4">
        <p className="mb-3 text-xl">Services You Need <span className="text-slate-400">(Optional)</span></p>
        <Services />
      </div>

      <div className="budget m-4 p-4">
        <p className="mb-3 text-xl">Services You Need <span className="text-slate-400">(Optional)</span></p>
        <Budget />
      </div>

      <div className="m-4 p-4">
        <label className="text-xl" htmlFor="textarea">Deep Deatails About Your Query <span className="text-slate-400">(Optional)</span> </label><br/>
        <textarea className="bg-white rounded-md mt-4 p-4 w-full h-32 border-solid border-2 border-slate-300 "  placeholder="Tell About Your Query" />
      </div>


      <div className="Achivement">
      <label className="text-xl" htmlFor="textarea">Add Achivements <span className="text-slate-400">(Optional)</span> </label><br/>

    
       
      </div>
        
      </form>
    </div>
  )
}

export default Form