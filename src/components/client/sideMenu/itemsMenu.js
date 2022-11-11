import Link from 'next/link'

export default function ItemsMenu({ elements }) {
  return (
    <>
      <div>
        <ul>
          {elements.map((item) => {
            return (
              <li key={item.name} className="flex">
                <Link href={item.link}>
                  <a className="pt-2 pb-2 pl-3 w-full rounded-lg hover:bg-slate-200">
                    <div className="flex items-center">
                      <div>{item.icon}</div>
                      <p className="text-base ml-2">{item.name}</p>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
