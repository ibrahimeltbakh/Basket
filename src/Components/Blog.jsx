import Figure1 from "../assets/Figure1.png";
import Figure2 from "../assets/Figure2.png";
import Figure3 from "../assets/Figure3.png";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import sidebar from "../assets/sidebar.png";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { useState } from 'react'




function Blog() {
  const [tags, setTags] = useState([
    { title: 'advertising', id: 1 },
    { title: 'best', id: 2 },
    { title: 'grocery', id: 3 },
    { title: 'summary', id: 4 },
    { title: 'organic', id: 5 },
    { title: 'sharp', id: 6 },
    { title: 'website', id: 7 },
    { title: 'visual', id: 8 }
  ])

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <article className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden '>
              <div className=' &quot;aspect-[16/9]&quot; overflow-hidden'>
                <img src={blog1} alt="photo" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-4 md:p-8'>
                <h2 className='font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer text-2xl md:text-3xl '>
                  But I must explain to you how all this mistaken idea
                </h2>
                <div className='flex items-center text-sm text-gray-500 mb-4 space-x-4'>
                  <div className='flex items-center space-x-1'>
                    <CiCalendar /> <span>Jan 17, 2018</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <FiUser /> <span>Dima Perk</span>
                  </div>
                </div>
                <p className='text-gray-600 leading-relaxed &quot;text-base&quot'>
                  Dorem interdum face diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros tempor lorem,
                  vitae suscipit lorem enim sit amet lectus. Quisque egestas lorem ut nulla aliquam...
                </p>
              </div>
            </article>

            <article className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden '>
              <div className=' &quot;aspect-[16/9]&quot; overflow-hidden'>
                <img src={blog2} alt="photo" className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-4 md:p-8'>
                <h2 className='font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer text-2xl md:text-3xl '>
                  The Problem With Typefaces on the Web
                </h2>
                <div className='flex items-center text-sm text-gray-500 mb-4 space-x-4'>
                  <div className='flex items-center space-x-1'>
                    <CiCalendar /> <span>Jan 17, 2018</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <FiUser /> <span>Dima Perk</span>
                  </div>
                </div>
                <p className='text-gray-600 leading-relaxed &quot;text-base&quot'>
                  Dorem interdum face diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros tempor lorem,
                  vitae suscipit lorem enim sit amet lectus. Quisque egestas lorem ut nulla aliquam...
                </p>
              </div>
            </article>
            <ul className='flex justify-center space-x-2 mt-8'>
              <li className='w-3 h-3 bg-teal-500 rounded-full'></li>
              <li className='w-3 h-3 bg-gray-300 rounded-full'></li>
              <li className='w-3 h-3 bg-gray-300 rounded-full'></li>
            </ul>
          </div>
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-sm p-6 mb-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>
                RECENT POSTS
              </h3>
              <div className='space-y-4'>
                <div className='flex space-x-3 group cursor-pointer'>
                  <div className='w-16 h-16 rounded-l-lg overflow-hidden flex-shrink-0'>
                    <img loading='lazy' src={Figure1} alt="photo" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h4 className=' flex-1 text-sm font-medium text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                    Get Premium Style in Business Apps, Business Style
                  </h4>
                </div>
                <div className='flex space-x-3 group cursor-pointer'>
                  <div className='w-16 h-16 rounded-l-lg overflow-hidden flex-shrink-0'>
                    <img loading='lazy' src={Figure2} alt="photo" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h4 className=' flex-1 text-sm font-medium text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                    Top Problems With Typefaces on the Web
                  </h4>
                </div>
                <div className='flex space-x-3 group cursor-pointer'>
                  <div className='w-16 h-16 rounded-l-lg overflow-hidden flex-shrink-0'>
                    <img loading='lazy' src={Figure3} alt="photo" className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h4 className=' flex-1 text-sm font-medium text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                    English Breakfast Tea with Tasty Brand Concerns
                  </h4>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm p-6 mb-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>SOCIAL MEDIA</h3>
              <div className='space-y-2'>
                <a href="#" className='block bg-blue-600 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>Facebook</a>
                <a href="#" className='block bg-pink-500 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>Instagram</a>
                <a href="#" className='block bg-blue-700 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>LinkedIn</a>
                <a href="#" className='block bg-blue-400 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>Twitter</a>
                <a href="#" className='block bg-red-600 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>YouTube</a>
                <a href="#" className='block bg-red-500 text-white text-center py-3 px-4 rounded hover:opacity-90 transition-opacity duration-200 font-medium text-sm uppercase tracking-wide'>Pinterest</a>
              </div>
            </div>

            <div className='rounded-lg  m-6'>
              <div>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Widget Banner</h3>
                <img loading='lazy' src={sidebar} alt="photo" width="100%" />
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm p-6'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>TAGS</h3>
              <div className="flex flex-wrap gap-2" >
              {tags.map((tag) => (
                <span key={tag.id} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer">{tag.title}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}

export default Blog
