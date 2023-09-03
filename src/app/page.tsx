import React from 'react'
import AdditionalLinksForm from '@/components/forms/AdditionalLinksForm'
import ProfileForm from '@/components/forms/ProfileForm'
import SocialLinksForm from '@/components/forms/SocialLinksForm'
import MobileMockup from '@/components/MobileMockup'
import PreviewButton from '@/components/PreviewButton'

export default function Home() {
  return (
    <main className='relative grid lg:grid-cols-3 h-screen px-2 md:px-0 md:container'>
      <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen'>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 md:pb-0'>
          <ProfileForm />
          <SocialLinksForm />
          <AdditionalLinksForm />
        </div>
      </section>
      <section className='hidden lg:flex justify-end items-center'>
        <MobileMockup />
      </section>
      <div className='md:hidden'>
        <PreviewButton />
      </div>
    </main>
  )
}
