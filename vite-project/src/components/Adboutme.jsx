import React from 'react'

export default function Adboutme() {

    let data = [
        {title1:'your name' ,title2:'text'},
        {title1:'your email',title2:'email'},
        {title1:'message',title2:'text'},
    ];


  return (
    <div className=' bg-black text-white'>

        <div className=' text-4xl px-10'>
        <h1>About me</h1>
        </div>

        <div className=' flex justify-between py-5 text-2xl gap-10 px-15'>
            <div>
                <h1>Aspiring software developer with hands-on experience from a 6-month internship at Sqilco. Passionate about coding, problem-solving, and building innovative solutions. Currently in 11th standard, continuously learning and exploring new technologies to shape the future of software development.</h1>
            </div>

            <div className='  w-500  text-center bg-black text-white'>
                <h1>Let's connect</h1>
                <div className='py-5'>
                {
                    data.map((item,key)=>(
                        <div className='py-2'>

                            <input type={item.title2} placeholder={item.title1} />
                        </div>
                    ))
                }
                </div>
                <div>
                <a href="">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[50px] w-[270px] rounded " type="button">
                Send message
      </button>
      </a>
                </div>
            </div>
        </div>
    </div>
  )
}
