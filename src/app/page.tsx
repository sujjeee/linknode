"use client"
import React from 'react'
import AdditionalLinksForm from '@/components/forms/AdditionalLinksForm'
import ProfileForm from '@/components/forms/ProfileForm'
import SocialLinksForm from '@/components/forms/SocialLinksForm'
import MobileMockup from '@/components/MobileMockup'


export default function Home() {

  const [data, setData] = React.useState({
    n: "",
    i: "",
    d: "",
    f: "",
    t: "",
    ig: "",
    gh: "",
    tg: "",
    l: "",
    e: "",
    w: "",
    y: "",
    ls: [],
  });

  return (
    <main className='relative grid lg:grid-cols-3 h-screen container '>
      <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen '>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5'>
          <ProfileForm
            name={data.n}
            image={data.i}
            desc={data.d}
            onUpdate={(name, image, desc) =>
              setData(prevData => ({ ...prevData, n: name, i: image, d: desc }))
            }
          />
          <SocialLinksForm />
          <AdditionalLinksForm />
        </div>
      </section>
      <section className='hidden lg:flex justify-end items-center'>
        <MobileMockup data={data} />
      </section>
    </main>
  )
}
