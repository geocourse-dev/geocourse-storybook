import Image from 'next/image'

export default function Social({ icon, link, width, height }) {
  return (
    <Image
      src={`/assets/social/${icon}.svg`}
      width={width}
      height={height}
      alt={`logo ${icon}`}
      onClick={() => window.open(`${link}`, '_blank')}
      className="cursor-pointer"
    />
  )
}
