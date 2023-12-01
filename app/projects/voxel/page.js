'use client'
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState, useEffect} from 'react';



  const image1 = [ 
    { image : '/images/voxel/voxel room transparent.png'},
  ];

  const image2 = [
    { image : '/images/voxel/voxel space transparent.png'},
  ];

export default function voxel() {

  useEffect(() => {
    document.title = 'Voxel';
  }, []);

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
{/* 
          <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back to Projects </Link> </h1>
            </div> */}

            <h1 className={styles.title}>
             Voxel Art 
            </h1>

            <div className={styles.subtitledescription}>
            <p>
            Voxel art, made in MagicaVoxel.
             </p>
            </div>

            {/* <Image src="/images/voxel/voxel room transparent.png"width={800} height={800}/> 
            <Image src="/images/voxel/voxel space transparent.png"width={800} height={800}/>  */}

            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {image1.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={800}
                        height={400}
                        className="max-h-800 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
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
                    {image2.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={800}
                        height={400}
                        className="max-h-800 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
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