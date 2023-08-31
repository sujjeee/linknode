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
    ls: []
  });

  const socialLinksProvider: SocialLinkProviderProps[] = [
    { name: 'facebook', icon: "ph:facebook-logo-duotone", id: "f" },
    { name: 'twitter', icon: "ph:twitter-logo-duotone", id: "t" },
    { name: 'instagram', icon: "ph:instagram-logo-duotone", id: "ig" },
    { name: 'github', icon: "ph:github-logo-duotone", id: "gh" },
    { name: 'telegram', icon: "ph:telegram-logo-duotone", id: "tg" },
    { name: 'linkedin', icon: "ph:linkedin-logo-duotone", id: "l" },
    { name: 'email', icon: "ph:envelope-duotone", id: "e" },
    { name: 'whatsapp', icon: "ph:youtube-logo-duotone", id: "w" },
    { name: 'youtube', icon: "ph:whatsapp-logo-duotone", id: "y" }
  ]

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
          <SocialLinksForm
            socialLinksProvider={socialLinksProvider}
            data={data}
            onUpdate={(linkId: keyof typeof socialLinksData, value: string) =>
              setData(prevData => ({ ...prevData, [linkId]: value }))
            }
          />
          <AdditionalLinksForm
            links={data.ls}
            onUpdate={(links) =>
              console.log('get', links)
              // setData((prevData) => ({ ...prevData, ls: links }))
            } />
        </div>
      </section>
      <section className='hidden lg:flex justify-end items-center'>
        <MobileMockup data={data} />
      </section>
    </main>
  )
}
