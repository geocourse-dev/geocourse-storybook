import Image from 'next/image'

export default function Social({ icon, link }) {
  return (
    <Image
      src={`/assets/social/${icon}.svg`}
      width={30}
      height={30}
      alt={`logo ${icon}`}
      onClick={() => window.open(`${link}`, '_blank')}
      className="cursor-pointer"
    />
  )
}
