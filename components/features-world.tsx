import Image from 'next/image'
import PlanetImage from '@/public/images/planet.png'
import PlanetAvatar01 from '@/public/images/planet-avatar-01.png'
import PlanetAvatar02 from '@/public/images/planet-avatar-02.png'

export default function FeaturesWorld() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
            <h1 className="h2 mb-4">Unsere Heimat: Berlin und Brandenburg</h1>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div>

          {/* World illustration */}
          <div className="flex flex-col items-center text-center">
 
              {/* Halo effect */}
              <div className="relative">


              {/* Globe image */}
              <Image className="relative rounded-full shadow-x2" src={PlanetImage} width={450} alt="Planet" />
           
                            {/* Avatars   */}
                            <Image className="absolute max-w-full transform animate-float" src={PlanetAvatar01} width={130} height={52} alt="Planet avatar 01" style={{ width: '65.25%', top: '-3%', right: '27%' }} />
              <Image className="absolute max-w-full transform animate-float animation-delay-1000" src={PlanetAvatar02} width={355} height={173} alt="Planet avatar 02" style={{ width: '88.7%', bottom: '-3%', right: '-49%' }} />
  
              </div>

                  <div className="max-w-xl  sm:max-w-none sm:flex" data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                  <br></br>  <a className="btn text-white bg-blue-600 hover:bg-blue-900 w-full text-2xl" href="#0"><b>Mehr über unsere Standorte erfahren</b></a> 
                    </div>
                  </div>



          </div>

        </div>
      </div>
    </section>
  )
}