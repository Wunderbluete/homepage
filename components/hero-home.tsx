import VideoThumb from '@/public/images/hero-image-01.png'
import ModalVideo from '@/components/modal-video'

export default function HeroHome() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Wir sind deine <br></br><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400">Cannabis-Community</span></h1>
            <div className="max-w-3xl mx-auto">
            {/* <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"><b>Das bekommst du bei uns:</b><br></br>
              - Werde Mitglied in einen offiziellen Cannabis Club* (Erteilung der behördlichen Genehmigungen vorausgesetzt)<br></br>
- Riesiger Wissensspeicher über Eigenanbau und einer Vielzahl an Cannabis-Sorten<br></br>
- Guidelines um unkompliziert an medizinisches Cannabis zu kommen<br></br>
- Tausche dich mit Gleichgesinnten aus und nutzt unsere praktischen Online-Tools
              <br></br><b><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400"></span></b>
  </p>*/}
   {/* Items */}<br></br>
   <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-none lg:max-w-none">

{/* 1st item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2 " viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
        <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
        <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
        <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
      </g>
    </g>
  </svg>
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Offizieller Cannabis Club</h4>
  <p className="text-gray-600 text-center">Wenn du dich hier registriert, hast du die Möglichkeit, nach Erteilung aller behördlichen Genehmigungen, dein Cannabis aus unserer offiziellen Anbauvereinigung (nach §11 KCanG) zu erhalten</p>
</div>

{/* 2nd item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2" transform="translate(19.429 20.571)">
        <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
        <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
        <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
      </g>
    </g>
  </svg>  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Große Blüten-Datenbank</h4>
  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

{/* 3rd item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <path className="stroke-current text-blue-300" d="M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286" />
        <path className="stroke-current text-white" strokeLinecap="square" d="M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286" />
        <path className="stroke-current text-blue-300" d="M36.571 32H40" />
        <path className="stroke-current text-white" d="M24 32h3.429" strokeLinecap="square" />
      </g>
    </g>
  </svg>
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Cannabis auf Rezept</h4>
  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

{/* 4th item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
        <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
        <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
        <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
      </g>
    </g>
  </svg>  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Riesiges Lernangebot</h4>
  <p className="text-gray-600 text-center">Du willst lieber selbst Anbauen? Oder du willst im Cannabis Club auch mal selbst mithelfen? Wir geben dir alle Informationen die du fürs Cannabisgrowing brauchst - Egal ob Anfänger oder schon lange dabei </p>
</div>

{/* 5th item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
        <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
        <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
        <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
      </g>
    </g>
  </svg>
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Austausch</h4>
  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>

{/* 6th item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
  <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
      <g strokeWidth="2">
        <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
        <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
        <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
        <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
      </g>
    </g>
  </svg>
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Digital mitbestimmen</h4>
  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

</div><br></br><br></br>
              <div className="max-w-xs  sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-green-600 hover:bg-green-700 w-full mb-8 sm:w-auto sm:mb-0" href="#0">Jetzt dem Wunderblüte-Club beitreten!</a>
                </div>
               
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}