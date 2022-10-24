import Navbar from 'components/client/navbar'

export default function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <main className=" min-w-[800px]">
        <div className="w-11/12 m-auto max-w-7xl">{children}</div>
      </main>
    </>
  )
}
