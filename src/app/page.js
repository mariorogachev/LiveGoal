import Image from "next/image"
import P1 from '../../public/main.jpg'
import P2 from '../../public/stadium.jpg'



export default function Home(){
  return(
    <><div className="relative">
    <Image className="w-full"
      src={P1}
      alt="Main"
      width={1000000000000000}
      height={1500}
      priority 
    />
    <h2 id="header" className="text-gray-200 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 font-bold font-nunito text-8xl pt-80 pb-60 ml-20">Your  Gateway to Sports in Real Time!</h2>
    </div>
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-2/3 bg-white p-8 shadow-lg rounded-md flex">
      <Image className="w-1/2 h-auto rounded-md mr-4"
      src={P2}
      alt="Stadium"
      width={400}
      height={1500}
      priority 
    />
        <h2 className="font-bold font-nunito text-7xl mb-4 text-center space-x-8">
          Where Every Score Unveils a Story, Every Match is an Event, and Every Fan Lives the Game
        </h2>
      </div>
    </div>
    </>
  )
}