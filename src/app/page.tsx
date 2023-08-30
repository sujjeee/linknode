import OtherLinksDetails from '@/components/forms/OtherLinks'
import ProfileDetails from '@/components/forms/ProfileDetails'
import SocialLinksDetails from '@/components/forms/SocialLinksDetails'
import MobileMockup from '@/components/MobileMockup'


export default function Home() {
  return (
    <main className='relative grid lg:grid-cols-3 h-screen container '>
      <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen '>
        <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5'>
          <ProfileDetails />
          <SocialLinksDetails />
          <OtherLinksDetails />
        </div>
      </section>
      <section className='hidden lg:flex justify-end items-center'>
        <MobileMockup />
      </section>
    </main>
  )
}
