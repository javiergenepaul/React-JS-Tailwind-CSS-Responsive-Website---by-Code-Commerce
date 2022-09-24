import React from 'react'
import { Laptop } from '../assets';

function Analytics() {
  return (
      <section className="w-full py-16 px-4 bg-white h-screen flex content-center">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img src={Laptop} alt="laptop" className="w-500px mx-auto my-auto" />
              <div className="flex flex-col justify-center">
                  <p className="text-[#00df8a] font-bold">DATA ANALYTICS DASHBOARD</p>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                      Manage Data Analytics Centrally
                  </h1>
                  <p className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae
                      delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam
                      sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
                  </p>
                  <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df8a]">
                      Get Started
                  </button>
              </div>
          </div>
      </section>
  )
}

export default Analytics