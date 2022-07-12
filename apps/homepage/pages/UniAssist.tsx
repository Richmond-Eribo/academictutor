import Nav from 'components/Nav'
import TextWrapper from 'components/TextWrapper'
import Image from 'next/image'
import {GetInTouchForm} from 'ui'

const UniAssist = () => {
  return (
    <div>
      <Nav />

      <section className='lg:px-36 hidden lg:block py-10 relative h-[160px] md:h-[270px] lg:h-[440px] '>
        <Image
          layout='fill'
          src='/uni.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>
      <section className='lg:px-36 lg:hidden py-10 relative h-[230px] md:h-[270px] '>
        <Image
          layout='fill'
          src='/uniMobile.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>
      <section className='lg:px-36 px-4 py-10'>
        <h2 className='heading-1 capitalize'>about university assist</h2>

        <div className='flex px-2 mx-auto flex-col lg:w-[500px]  text-text-light justify-around'>
          <article className=''>
            <p className='mb-5'>
              University Assist is under the umbrella of Academic Tutors that
              help prospectus students to gain study admission to many
              universities around the world. Our services are based on
              commission. Our job is to advise and help you put your study
              admission package together and send it to some of the universities
              that recognised us as partners. We also advice prospective
              students on what the requirements for student visas are. We do
              help to assess applicants’ eligibility for a study visa.
            </p>
            <p>
              We are a UK-based outstanding education prospective students’
              representative all over the world to help them build their
              educational future.
            </p>

            <h4 className='font-bold mt-5'>Target segments</h4>
            <ol className='mb-5'>
              <li>We started locally with UK and diaspora children.</li>
              <li>
                We have now expanded internationally to children of both high
                and low income parents abroad who want to invest on their
                children&apos;s education
              </li>
            </ol>

            <h4 className='font-bold'>Other areas</h4>
            <p>
              We help students in developing countries gain admission to
              universities in the following countries:
            </p>
          </article>

          <TextWrapper>
            <h4 className='font-bold mt-5'>Tuition free countries</h4>
            <ol className='list-disc mb-5 list-inside'>
              <li>Germany</li>
              <li>Denmark</li>
              <li>Austria</li>
              <li>Norway</li>
              <li>Sweden</li>
              <li>and many more</li>
            </ol>
            <h4 className='font-bold'>Tuition fee countries</h4>
            <ol className='list-disc list-inside'>
              <li>UK</li>
              <li>United States of America</li>
              <li>Canada</li>
              <li>Australia</li>
            </ol>
            <h4 className='font-bold mt-5'>Our success in admission</h4>
            <p className='shrink'>
              We have been able to help students gain admission to reputable
              universities around the world through advice provision and putting
              together their application packages. Some of the institutions our
              applicants have gained admission to include:
            </p>
            <ol className='list-disc list-inside mt-3'>
              <li>Oxford</li>
              <li>Cambridge</li>
              <li>Imperial College</li>
              <li>University of Leicester</li>
              <li>University of Bradford</li>
              <li>University of Kassel</li>
              <li>University of Göttingen</li>
              <li>Hohenheim University</li>
              <li>University of Arkansas</li>
              <li>Wycliffe College</li>
              <li>Ontario</li>
              <li>And many more</li>
            </ol>
            <p className='mt-5'>
              We currently have contact agents in the following countries:
            </p>
            <ol className='list-disc list-inside'>
              <li>Nigeria</li>
              <li>Ghana</li>
              <li>India</li>
              <li>The Gambia</li>
              <li>Cameroon</li>
              <li>Senegal</li>
            </ol>
          </TextWrapper>
        </div>
      </section>

      <section className=' bg-[#42B9D1]/5 flex md:flex-row md:justify-around flex-col items-start px-6 lg:px-36 py-10'>
        <div className='text-text-light mx-auto lg:mx-0 text-center lg:text-left  w-[248px] mb-10'>
          <h2 className='font-bold lg:text-4xl text-[35px]  text-text-dark lg:mb-10'>
            Reach Us
          </h2>
          <h4 className='font-bold text-15px'>Address</h4>
          <p className='text-15px mb-3 '>
            Academic Tutors Limited Whittlesey, Peterborough PE7, United Kingdom
          </p>
          <h4 className='font-bold text-15px'>Contact</h4>
          <p className='text-15px'>+44 173 377 0106</p>
          <p className='text-15px mb-3'>admin@academictutors.org.uk</p>
          <h4 className='font-bold text-15px'>Visit</h4>
          <h2 className=' text-15px '>07:30 AM - 05:00 PM</h2>
        </div>

        <div>
          <h2 className='font-bold text-center lg:text-left lg:text-4xl text-[35px]   text-text-dark lg:mb-10'>
            Get in touch
          </h2>
          {/* get in touch form */}
          <GetInTouchForm />
        </div>
      </section>
    </div>
  )
}

export default UniAssist
