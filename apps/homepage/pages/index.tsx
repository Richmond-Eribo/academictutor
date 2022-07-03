import GoodTick from 'components/Svg/GoodTick'
import TeacherCard from 'components/TeacherCard'
import type {NextPage} from 'next'
import Image from 'next/image'
import {GetInTouchForm} from 'ui'
import {Footer} from 'ui'
import LandingPageSlide from '../components/LandingPageSlide'
import Nav from '../components/Nav'
import ProfileSlider from '../components/ProfileSlider'
import TextWrapper from '../components/TextWrapper'

const Home: NextPage = () => {
  return (
    <div className='scroll-smooth'>
      <section className='bg-gradient-to-b from-primary-light to-white '>
        <Nav />

        <div className=' px-6 pt-8 lg:px-10 lg:pt-10  '>
          <LandingPageSlide />
        </div>
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
              actualization of students’ goals.
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

        <div className='flex  items-center flex-col lg:flex-row justify-around  mx-auto'>
          {[
            {
              name: 'Dr. O. Akinyemi',
              role: 'Manager, Recruitment',
              image: '/teampic/Profile1.png',
            },
            {
              name: 'Mrs R. Wilson',
              role: 'Finance Manager',
              image: '/teampic/wilson.png',
            },
            {name: 'Mr. T. Taiwo', role: 'Senior Administrator'},
            {
              name: 'Mr Oladotun Akinwole',
              role: 'Project Manager',
              image: '/teampic/Oladotun.png',
            },
          ].map(profile => (
            <figure
              key={profile.name}
              className=' w-[287px] p-2 m-2 h-[295px] bg-white1 rounded-xl shadow-lg1 flex flex-col justify-center items-center  text-center '
            >
              <Image
                height={159}
                width={159}
                src={profile.image ? profile.image : '/teampic/grey.png'}
                alt='Profile Image'
                className='rounded-full'
              />
              <h3 className='font-bold mt-4 w-32 '>{profile.name}</h3>
              <figcaption>{profile.role} </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className=' h-[260px] px-4 lg:px-36 py-10 lg:my-28 bg-primary-mid  bg-contain bg-no-repeat lg:h-[408px]  flex flex-col items-center justify-center'>
        <h3 className='uppercase  w-[200px] text-white text-center font-semibold'>
          we are hiring
        </h3>
        <p className='lg:text-4xl lg:w-[723px] text-white text-center my-5 '>
          We are currently looking for qualified and unqualified tutors to
          deliver 1:1 online tutoring in Maths, English and Science.
        </p>
        <button className='bg-[#D1644D] capitalize button tracking-wide  button p-2 px-5  text-white rounded-full '>
          Sign up today
        </button>
      </section>

      <section className='  lg:block py-10 bg-[#42B9D1]/5' id='Teachers'>
        <h2 className='heading-1'>Some of our experienced Teachers</h2>
        {/* <ProfileSlider /> */}
        <div className='carousel carousel-end  p-4 space-x-4  rounded-box'>
          {[
            {
              name: 'Dr Stephen Adegbite',
              subjects: 'Maths | Science | English',
              bio: 'I have the competence and experience to engage and inspire learnersin the teaching and learning of Mathematics so that they can develop confidence and achieve their full potentials. I use good questioning strategies to assess students&apos; understanding and progress. My students make significant progress in understanding Mathematics, evidenced by their increased confidence in answering questions and performance improvements in assessments',
              image: '/teacherspic/stephen.png',
            },
            {
              name: 'Khamis Mohammed',
              subjects: 'Science',
              bio: 'Specialising in Chemistry and Biology, with excellent knowledge in Physics, with proven teaching experience in mainstream school and some voluntary sector. I am creative, and innovative and can demonstrate strong curriculum knowledge.  Able to create engaging lessons and provide a supportive and stimulating environment, I am passionate about teaching independent and imaginative students and guiding them to academic success.',
              image: '/teacherspic/khamis.png',
            },
            {
              name: 'Mr Michael Madame Chahwanda',
              subjects: 'Math Teacher',
              bio: 'I am a qualified teacher of Maths and ICT. I hold teaching qualifications for high school and further education in these subjects. I am a qualified Health and Safety trainer and a member of IOSH and I am registered with GTC-the general teaching council. I am also a part time website developer and software developer and I have tested various software for private educational institutions and public bodies .',
              image: '/teacherspic/michael.png',
            },
            {
              name: 'David Silman',
              subjects: 'English tutor',
              bio: 'I deliver online English tuition to students of all ages and abilities. I specialise in preparing primary school students for their 7+ and 11+ tests, and secondary school students for their GCSE English Language and English Literature examinations. I also tutor adults who have registered for IELTS or the B1 citizenship exam.',
              image: '/teacherspic/david.png',
            },
          ].map(teacher => (
            <div key={teacher.name}>
              <TeacherCard {...teacher} />
            </div>
          ))}
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

      <section className='lg:px-36 mb-5 lg:pt-10 relative h-[440px] '>
        {/* <Image
          layout='fill'
          src='/map.png'
          alt='Profile Image'
          // className='rounded-full'
        /> */}
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.5234047045915!2d-0.10751307817614424!3d52.560145316277186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877fba2b8a1b101%3A0xe509ea20ddc82487!2sAcademic%20Tutors%20Limited!5e0!3m2!1sen!2sng!4v1656102803057!5m2!1sen!2sng'
          width={'100%'}
          height='400'
          style={{border: 0}}
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
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
