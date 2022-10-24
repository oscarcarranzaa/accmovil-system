import MoreSVG from '@/components/icons/more'
import Img from 'components/img'

export default function Produts({ item }) {
  return (
    <>
      <div className="border-b border-zinc-400">
        <div className="w-full flex items-center p-1 hover:bg-slate-100  rounded-md overflow-hidden">
          <div className="w-16 h-16 min-w-[64px] select-none rounded-md overflow-hidden">
            <Img src={item.image} width={100} height={100} />
          </div>
          <div className="grid grid-cols-7 w-full ml-3 gap-20">
            <div className="col-span-4">
              <p className="line-clamp-2 w-full max-w-md text-sm  font-medium">
                {item.name}
              </p>
              <p className="text-sm text-slate-700">{item.code}</p>
            </div>
            <div className="w-20 col-span-1 flex items-center">
              <p>L. {item.price}</p>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <p>{item.units}</p>
            </div>
            <div className="col-span-1 flex justify-end items-center">
              <button className="p-3 rounded-full hover:bg-zinc-300">
                <MoreSVG size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
