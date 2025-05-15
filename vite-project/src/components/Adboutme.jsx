import React from 'react'

export default function Adboutme() {

    let data = [
        {title1:'your name' ,title2:'text'},
        {title1:'your email',title2:'email'},
        {title1:'message',title2:'text'},
    ];


  return (
    <div className=' bg-black text-white '>

        <div className='text-3xl md:text-5xl px-10 md:px-2 '>
        <h1>About me</h1>
        </div>

        <div className='flex flex-col md:flex md:flex-row  justify-between py-5 text-sm md:text-2xl gap-10 px-15'>
            <div>
                <h1>Aspiring software developer with hands-on experience from a 6-month internship at Sqilco. Passionate about coding, problem-solving, and building innovative solutions. Currently in college 1st year, continuously learning and exploring new technologies to shape the future of software development.</h1>
            </div>

            <div className='w-full  md:w-500 border-2 rounded-4xl border-cyan-400 p-5  bg-black text-white'>
                <h1 className=' '>Let's connect</h1>
                <div className='py-5 flex flex-col gap-4'>
                {
                    data.map((item,key)=>(
                        <div className='py-2  border-2 p-5 rounded-2xl '>

                            <input type={item.title2} placeholder={item.title1} />
                        </div>
                    ))
                }
                </div>
                <div>
                <a href="">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[50px] w-[170px] rounded " type="button">
                Send message
      </button>
      </a>
                </div>
            </div>
        </div>
    </div>
  )
}
