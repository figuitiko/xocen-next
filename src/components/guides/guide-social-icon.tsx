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
      className="rounded-full bg-main-200 max-w-[32px]  flex items-center justify-center size-full aspect-square"
    >
      <picture className="relative size-5 flex items-center justify-center">
        <Image
          src={srcImg}
          alt={altImg}
          fill
          className="object-cover size-full aspect-square "
        />
      </picture>
    </a>
  )
}

export default GuideSocialIcon
