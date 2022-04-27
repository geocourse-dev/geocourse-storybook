/* eslint-disable @next/next/no-img-element */

export default function CardBlog({
  date,
  title,
  description,
  image,
  author,
  size,
}) {
  const cardSize = {
    small: {
      width: 'w-full md:w-60',
      'font-size': 'text-xl',
    },
    large: {
      width: 'w-full',
      'font-size': 'text-2xl',
    },
  }
  const pickedSize = size ? size : 'w-full'
  return (
    <>
      <div
        className={`bg-geocourse-gray p-3 rounded-md ${cardSize[pickedSize].width} shadow-lg cursor-pointer`}
      >
        <img
          src={`/assets/card-image/${image}`}
          alt={image}
          className=" object-fill rounded-lg h-48 w-full"
        />
        <div className="mt-2">
          <p className="text-primary font-bold">Blog • {date}</p>
          <h1 className={`${cardSize[pickedSize]['font-size']} `}>{title}</h1>
          <p className="text-left font-light text-base mt-2">{description}</p>
        </div>
        {/* author */}
        <div className="mt-2 flex gap-5">
          <div className="rounded-full p-1 border-2 border-orange-500">
            <img
              src={`/assets/card-image/${image}`}
              alt={image}
              className="w-10 h-10 object-fill rounded-full"
            />
          </div>
          <div className="text-primary">
            <p className="font-bold">{author}</p>
            <p>Author</p>
          </div>
        </div>
      </div>
    </>
  )
}
