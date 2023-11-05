export default function Badge({ className, name }) {
  return (
    <div
      className={`${
        className ? className + " " : ""
      }text-xs font-medium whitespace-nowrap text-green-500 bg-green-100 px-2 py-0.5 rounded`}
    >
      {name}
    </div>
  )
}
