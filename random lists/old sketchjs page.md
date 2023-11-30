import styles from 'app/page.module.css'
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Sketches',
    description: '-',
  }


const data = [
  {
    image: '/images/sketches/sketch test scan website2.png',
  },
  {
  image: '/images/sketches/sketch test scan website.png',
  },
  {
  image: '/images/sketches/sketch test scan website3.png',
  },
  {
  image: '/images/sketches/sketch test scan website4.png',
  },
  {
  image: '/images/sketches/sketch test scan website5.png',
  },
];

const data2 = [
  {
    image: '/images/sketches/metal2.png',
  },
  {
    image: '/images/sketches/cat3.png',
  },
  {
    image: '/images/sketches/dragon2.png',
  },
  {
  image: '/images/sketches/illusions2.png',
  },
];

const data3 = [
{ image: '/images/sketches/cartoon2.png' },
{ image: '/images/sketches/corona memory3.png' },
{ image: '/images/sketches/spaceship sketch2.png' },
]

export default function sketches() {
    return (
        <main className={styles.main}>
              <div className="relative 
   flex 
   place-items-center 
   before:absolute 
   before:h-[300px] 
   before:w-[480px] 
   before:-translate-x-1/2 
   before:rounded-full 
   before:bg-gradient-radial 
   before:from-white 
   before:to-transparent 
   before:blur-2xl 
   before:content-[''] 
   after:absolute 
   after:-z-20 
   after:h-[180px] 
   after:w-[240px] 
   after:translate-x-1/3 
   after:bg-gradient-conic 
   after:from-sky-200 
   after:via-blue-200 
   after:blur-2xl 
   after:content-[''] 
   before:dark:bg-gradient-to-br 
   before:dark:from-transparent 
   before:dark:to-blue-700 
   before:dark:opacity-10 
   after:dark:from-sky-900 
   after:dark:via-[#0141ff] 
   after:dark:opacity-40 
   before:lg:h-[360px] 
   z-[-1]">
          </div>
      
            <h1 className={styles.title}>
             Sketches
            </h1>

            {/* <div className={styles.container}>
              <div className={styles.header}>
                <h1 className={styles.title}> Sketches </h1>
                  <div className={styles.backbutton}> 
                    <h1> <Link href="/projects"> Back to Projects </Link> </h1> 
                </div> 
              </div>              
            </div> */}

            <div className={styles.subtitledescription}>
            <p>
            A collection of sketches, designs and artworks ranging from 2018 
            to 2023.   
             </p>
            </div>

            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>

 {/* for media resizing */}

                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-2">
                    {data.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data2.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data3.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>

   
        </main>
    )
}