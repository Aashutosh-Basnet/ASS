import NewsResources from "./NewsResources"
import WhatDoWeDo from "./WhatDoWeDo"
import WhoAreWe from "./WhoAreWe"

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-screen text-white bg-blue-600">
      <div className="flex flex-col items-center">
        <div className="w-[80vw]">
        <div className="my-10 border-b-2 border-white py-10">
            <h2 className="text-2xl font-semibold">Agricultural Support Program | Nepal Government</h2>
        </div>
        <div className="flex gap-20 my-10">
            <WhatDoWeDo/>
            <WhoAreWe/>
            <NewsResources/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer