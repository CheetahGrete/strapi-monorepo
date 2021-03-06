import classNames from 'classnames'
import { useState } from 'react'
import NextImage from '../elements/image'
import CustomLink from '../elements/custom-link'
const TestimonialsGroup = ({ data }) => {
  // Only show one testimonial at a time
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex]
  return (
    <section className="pt-12 pb-16 text-lg text-center bg-gray-200">
      <h2 className="mb-4 title">{data.title}</h2>
      <p className="mb-4 text-gray-700">{data.description}</p>
      <CustomLink link={data.link}>
        <span className="text-primary-700 hover:underline with-arrow">
          {data.link.text}
        </span>
      </CustomLink>

      <div className="flex flex-col mx-auto mt-10 w-8/12 max-w-5xl text-left bg-white shadow-md sm:flex-row sm:w-8/12 sm:shadow-xl">
        <div className="flex-shrink-0 w-full md:w-4/12">
          <NextImage media={selectedTestimonial.picture} />
        </div>
        <div className="flex flex-col justify-between py-4 px-4 sm:px-12 sm:pt-12 sm:pb-4">
          <div>
            <NextImage
              width="120"
              height="33"
              media={selectedTestimonial.logo}
            />
            <p className="mb-6 italic">
              &quot;{selectedTestimonial.text}&quot;
            </p>
            <p className="text-base font-bold sm:text-sm">
              {selectedTestimonial.authorName}
            </p>
            <p className="text-base sm:text-sm">
              {selectedTestimonial.authorTitle}
            </p>
          </div>
          <CustomLink
            link={{
              url: selectedTestimonial.link,
              text: '',
              newTab: false,
              title: selectedTestimonial.text,
              id: 0,
            }}
          >
            <span className="mt-6 tracking-wide text-primary-700 uppercase sm:self-end sm:mt-0 hover:underline with-arrow">
              Read story
            </span>
          </CustomLink>
        </div>
      </div>

      {data.testimonials.length > 1 && (
        <div className="flex flex-row gap-4 justify-center mt-10">
          {data.testimonials.map((testimonial, index) => (
            <button
              onClick={() => setSelectedTestimonialIndex(index)}
              className={classNames(
                // Common classes
                'rounded-full h-3 w-3',
                {
                  'bg-gray-500': index !== selectedTestimonialIndex,
                  'bg-primary-600': index === selectedTestimonialIndex,
                }
              )}
              key={testimonial.id}
            />
          ))}
        </div>
      )}

      <div className="flex flex-row flex-wrap gap-6 justify-center items-center px-6 mt-10 sm:gap-20 sm:px-0">
        {data.logos.map((logo) => (
          <NextImage key={logo.id} width="120" height="33" media={logo.logo} />
        ))}
      </div>
    </section>
  )
}
export default TestimonialsGroup
