import Image from 'next/image'

type Props = {
  srcImg: string
  altImg: string
  href: string
}

const GuideSocialIcon = ({ srcImg, altImg, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="size-9 rounded-full bg-main-200 p-2 flex items-center justify-center"
    >
      <picture>
        <Image
          src={srcImg}
          alt={altImg}
          fill
          className="object-cover size-full aspect-square"
        />
      </picture>
    </a>
  )
}

export default GuideSocialIcon
