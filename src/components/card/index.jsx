import Button from '../button'

export default function Card({ title, TextButton, img }) {
  const pickedImage = img ? img : 'dummy.png'
  return (
    <div
      className={`bg-[url('../assets/dummy.png')] rounded-xl shadow-lg p-4 w-[350px] h-[150px]`}
    >
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <Button className="self-end" variant="secondary">
          {TextButton}
        </Button>
      </div>
    </div>
  )
}
