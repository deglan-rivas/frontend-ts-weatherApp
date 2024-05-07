export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white bg-transparent text-center uppercase text-xl font-bold">
      {children}
    </div>
  )
}