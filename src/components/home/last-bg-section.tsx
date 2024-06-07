import Image from 'next/image'
import React from 'react'

const LastBgSection = () => {
  return (
    <section className="flex w-full  md:w-[1200px] h-[400px] md:h-[728px] relative mt-12 md:mt-24">
      <picture className="w-full">
        <Image src="/images/last-section-bg.webp" alt="Routes" fill />
      </picture>
    </section>
  )
}

export default LastBgSection
