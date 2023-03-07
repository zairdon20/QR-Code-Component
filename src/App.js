import images from '../src/images/image-qr-code.png'




function App() {
  return (
    <main className="bg-[#d6e2f0] h-screen  flex justify-center  items-center">
      <article className="bg-[#ffffff]   p-4 rounded-lg ">
      <div className="flex justify-center">
        <img className="w-64  rounded-md"src={images} alt=""/>
        </div>
        <div className='mt-4'>
        <h6 className="flex justify-center font-semibold">Improve your front-end <br />skills by building projects</h6>
        <p className=" mt-4 flex justify-center text-gray-220 text-center" style={{
          color: 'hsl(220, 15%, 55%)',
        }}>Scan the QR code to visit front end <br /> mentor and take your coding skills to <br /> the next level</p>
        </div>
        </article>
     </main>
    // <div>
    //   <ul className='flex space-x-4 m-2'>
    //     <li className='border p-1' >hello</li>
    //     <li className='border p-1'>hello</li>
    //     <li className='border p-1'>hello</li>
    //     <li className='border p-1'>hello</li>
    //   </ul>
    // </div>

    );
}

export default App;
