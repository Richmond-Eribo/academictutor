import Nav from 'components/Nav'
import TextWrapper from 'components/TextWrapper'
import Image from 'next/image'

const UniAssist = () => {
  return (
    <div>
      <Nav />

      <section className='lg:px-36 py-10 relative h-[190px] lg:h-[440px] '>
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

            <h4 className='font-bold'>Tuition fee countries</h4>
            <ol className='list-disc list-inside'>
              <li>UK</li>
              <li>United States of America</li>
              <li>Canada</li>
              <li>Australia</li>
            </ol>
          </TextWrapper>
        </div>
      </section>
    </div>
  )
}

export default UniAssist
