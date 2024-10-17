import Budget from "./Budget"


import Services from "./Services"

const Form = () => {
  return (
    <div className="text-black rounded-md w p-6 m-6">
      <form action="">
      <div className=" bg-slate-50 mb-4 ">
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


      <div className="Achivement m-4 p-4">
      <label className="text-xl" htmlFor="textarea">Add Achivements <span className="text-slate-400">(Optional)</span> </label><br/>

        <div className="bg-white relative mb-6 rounded-md mt-4 p-4 w-full h-16 border-solid border-2 border-slate-300 ">
          <p className="text-slate-500">(a breif, idea, branding guideline,old desing...)</p>
          <button className="absolute h-12 disabled: w-48 bottom-2 text-white right-0 bg-emerald-600">Add file(5mb)</button>
        </div>
       
      </div>

      </div>

      <div className=" submitButton mt-16 ">
        <button className="bg-blue-700 h-16 w-56 font-bold text-xl text-white"> Send Inquary</button>
      </div>
        
      </form>
    </div>
  )
}

export default Form