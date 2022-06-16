import type {NextPage} from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import LandingPageSlide from '../components/LandingPageSlide'
import Nav from '../components/Nav'
import ProfileSlider from '../components/ProfileSlider'
import TextWrapper from '../components/TextWrapper'

const Home: NextPage = () => {
  return (
    <div className=''>
      <section className=' px-6 pt-8 bg-[#D1644D]/5 lg:px-10 lg:pt-10 '>
        <Nav />
        <LandingPageSlide />
      </section>

      <section className='px-6 py-10 lg:px-36 lg:py-20' id='About us'>
        <h2 className='heading-1'>About Us</h2>

        <div className='grid grid-cols-1  grid-rows-1  lg:grid-cols-2 lg:gap-28 justify-around items-center '>
          <Image
            src='/classroom.png'
            height={400}
            width={426}
            alt='classroom'
            className='rounded-lg'
          />
          <TextWrapper>
            <p className='mb-5  pt-4'>
              Academic tutors is a business established to provide students at
              all levels of the National Curriculum to receive the appropriate
              help they need to achieve the grades they deserve. We have fully
              vetted qualified and unqualified (university graduates) teachers
              to provide students the extra support in their subjects of
              interest at affordable price to parents or guardians.
            </p>

            <p className='mb-5'>
              We ensure that students taking tuition from our teachers are
              safeguarded. This is why we invest in Bramble Education, where
              lessons are automatically recorded for all parties to be able to
              access. We also offer tuition session for cluster groups of three
              students where each session lasts for an hour.
            </p>

            <p className='mb-5'>
              In some cases, our tutors do offer face to face tuition, depending
              on the need of some parents as well as the willingness of the
              tutor. Parents will have the possibility to select the tutor of
              their choice, from a variety in our list. We ensure our tutors
              follow the UK schools’ curriculum or international Baccalaureate.
            </p>
          </TextWrapper>
        </div>

        <div className='grid grid-cols-1  grid-rows-1 my-10  lg:grid-cols-2 lg:gap-28 justify-around items-center '>
          <Image
            src='/learning.png'
            height={400}
            width={426}
            alt='classroom'
            className='rounded-lg'
          />
          <TextWrapper>
            <p className='mb-5 pt-4'>
              We also ensure that tutors registered with us have both practical
              and industrial experience as well as sound knowledge of the
              subject registered for.
            </p>

            <p className='mb-5'>
              Academic tutors are independent educators committed to the
              actualization of students’ goals.{' '}
              <strong>
                Trust us, we do everything possible to ensure your child is
                getting the best of tuition from our tutors.
              </strong>
            </p>

            <p className='mb-5'>
              If you are unable to find the tutor of your choice on our website,
              contact us and inform us of the subject (s) you are interested in,
              we would link you with the appropriate tutor (s).
            </p>

            <p className='mb-5'>
              We also provide 11 plus examination lessons to progress your child
              into a Grammar School or Private School. Get in touch and we are
              here to help.
            </p>

            <p className=''>
              <strong>
                The tutoring fee starts from as little as £16 per hour.
              </strong>
              The trial lessons are half the price of the original tutor
              charges.
            </p>
          </TextWrapper>
        </div>
      </section>

      <section
        className='lg:px-36 px-6 py-10 lg:py-20 bg-[#42B9D1]/5'
        id='Services'
      >
        <h2 className='heading-1'>Services</h2>

        <div className='grid grid-cols-1  grid-rows-1 my-10  lg:grid-cols-2 lg:gap-28 justify-around items-center'>
          <div>
            <Image
              src='/services.png'
              height={400}
              width={426}
              alt='classroom'
              className='rounded-lg'
            />
          </div>

          <TextWrapper>
            <p className='mb-5 pt-4'>
              Learning online has put many pupils on course since the start of
              the pandemic. This has helped learners to close the gaps in
              learning and widen their knowledge with the help of expertise from
              our dedicated and experienced tutors. The continuation of this
              practice is imperative for achieving the desired grades. We are
              here to help, tell us your child’s needs and relax, we would take
              it on from there to support your child at every step the way
              towards the attainment of better grades
            </p>
            <p className='mb-5'>
              Maths, English, and Science are compulsory subjects taught all
              over the world at all key stages. Our teachers provide their
              expertise in many subject areas such as:
            </p>
            <p className=''>
              Primary English | Secondary English | Primary Maths | Secondary
              Maths | Combined Science | Physics | Chemistry | Biology | French
              | Spanish | Geography | German | History | Yoruba | Hausa | Igbo |
              Urdu Others
            </p>
          </TextWrapper>
        </div>
      </section>

      <section className='lg:px-36  py-10 bg-[#42B9D1]/5'>
        <h2 className='heading-1'>Our Team</h2>

        <div className='flex  h-[930px] lg:h-[300px]  items-center flex-col lg:flex-row justify-around  mx-auto'>
          {[
            {name: 'Dr. O. Akinyemi', role: 'Manager, Recruitment'},
            {name: 'Mrs R. Wilson', role: 'Finance'},
            {name: 'Mr. T. Taiwo', role: 'Senior Administrator'},
          ].map(profile => (
            <figure
              key={profile.name}
              className=' w-[287px] h-[295px] bg-white rounded-xl shadow-lg flex flex-col justify-center items-center  text-center '
            >
              <Image
                height={159}
                width={159}
                src='/Profile1.png'
                alt='Profile Image'
                className='rounded-full'
              />
              <h3 className='font-bold mt-4 w-32 '>{profile.name}</h3>
              <figcaption>{profile.role} </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className=' h-[260px] px-4 lg:px-36 py-10  bg bg-contain bg-no-repeat lg:h-[408px]  flex flex-col items-center justify-center'>
        <h3 className='uppercase  w-[200px] text-white text-center font-semibold'>
          we are hiring
        </h3>
        <p className='lg:text-4xl lg:w-[723px] text-white text-center my-5 '>
          We are currently looking for qualified and unqualified tutors to
          deliver 1:1 online tutoring in Maths, English and Science.
        </p>
        <button className='bg-[#D1644D] button tracking-wide  button p-2 px-5  text-white rounded-full '>
          Sign up today
        </button>
      </section>

      <section className=' hidden lg:block py-10 bg-[#42B9D1]/5' id='Teachers'>
        <h2 className='heading-1'>Some or our experienced teachers</h2>
        <ProfileSlider />
      </section>

      <section className='lg:px-36 py-10 relative h-[180px] lg:h-[440px] '>
        <Image
          layout='fill'
          src='/uni.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>

      <section className='lg:px-36 px-4 py-10'>
        <h2 className='heading-1'>University Admission Assist</h2>

        <div className='flex px-2 flex-col lg:flex-row text-text-light justify-around'>
          <article className='lg:w-[400px]'>
            <p className='mb-5'>
              We are UK based outstanding teachers providing 1st class tuition
              to students all over the world to help them build their future.
            </p>

            <h4 className='font-bold'>Target segments</h4>
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
            <h4 className='font-bold'>Tuition free countries</h4>
            <ol className='list-disc mb-5 list-inside'>
              <li>Germany</li>
              <li>Denmark</li>
              <li>Austria</li>
              <li>Norway</li>
              <li>Sweden</li>
              <li>and many more</li>
            </ol>

            <h4 className='font-bold'>Tuition free countries</h4>
            <ol className='list-disc list-inside'>
              <li>UK</li>
              <li>United States of America</li>
              <li>Canada</li>
              <li>Australia</li>
            </ol>
          </TextWrapper>
        </div>
      </section>

      <section className=' bg-[#42B9D1]/5 flex lg:flex-row lg:justify-around flex-col items-start px-6 lg:px-36 py-10'>
        <div className='text-text-light w-[248px] mb-10'>
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
          <h2 className='font-bold lg:text-4xl text-[35px]   text-text-dark lg:mb-10'>
            Get in touch
          </h2>
          <form className=' w-[330px] flex flex-col  lg:grid   lg:grid-cols-2 gap-2 lg:gap-y-4 lg:my-5 lg:w-[580px] lg:h-[200px]'>
            <input
              type='text'
              placeholder='Name'
              className='border border-[#C4C4C4] rounded-md p-1 px-5 focus:border-blue-500 outline-blue-400'
            />
            <input
              type='email'
              placeholder='Email'
              className='border border-[#C4C4C4] rounded-md p-1 px-5 outline-blue-400'
            />
            <textarea
              name='message'
              placeholder='Message'
              id=''
              cols={10}
              rows={5}
              className='border border-[#C4C4C4] rounded-md p-1 px-5 lg:col-span-2 outline-blue-400'
            />
            <button
              onClick={e => {
                e.preventDefault()
              }}
              className='bg-[#42B9D1] button text-15px justify-self-end  p-3 px-5 tracking-wide text-white rounded-md   col-start-2'
            >
              SEND REQUEST
            </button>
          </form>
        </div>
      </section>

      <section className='lg:px-36 lg:py-20 relative h-[440px] '>
        <Image
          layout='fill'
          src='/map.png'
          alt='Profile Image'
          // className='rounded-full'
        />
      </section>

      <Footer />

      <style jsx>
        {`
          .bg {
            background: linear-gradient(
              259.62deg,
              #42b9d1 17.24%,
              #197385 71.78%
            );
          }
        `}
      </style>
    </div>
  )
}

export default Home
