export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white bg-transparent text-center uppercase text-xl font-bold flex justify-center items-center">
      {children}
    </div>
  )
}