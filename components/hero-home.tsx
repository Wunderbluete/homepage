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
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Wir sind dein<br></br><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400">unkomplizierter Cannabis-Club</span></h1>
            <div className="max-w-7xl mx-auto">
        {/*      <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"><b>Das bekommst du bei uns:</b><br></br>
              - keine monatliche Gebühren oder Mindestmengen<br></br>
- alles digital<br></br>
- Mitwirkung auch digital möglich
              <br></br><b><span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400"></span></b>
  
   {/* Items */}<br></br>
   <div className="max-w-sm mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-none lg:max-w-none">

{/* 1st item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 310.75 310.75" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
        <stop stopColor="#4FD1C5" offset="0%" />
        <stop stopColor="#81E6D9" offset="25.871%" />
        <stop stopColor="#338CF5" offset="100%" />
      </radialGradient>
    </defs>    
    <rect width="310.75" height="310.75" rx="155.375" fill="url(#footer-logo)" />
    <g strokeWidth="1" transform="translate(45 59) scale(0.6)">
      <path className="stroke-current bg-white" fill="#FFF" d="M183.815,265.726c-32.444,0-60.868-21.837-76.306-54.325h102.101v-45.023H95.643c-0.284-3.642-0.437-7.29-0.437-11.016
	    c0-3.691,0.152-7.384,0.437-10.977h113.969V99.353H107.51c15.438-32.485,43.861-54.315,76.306-54.315
	    c31.01,0,60.21,20.759,76.2,54.152l40.626-19.418C277.091,30.554,232.329,0,183.815,0c-36.47,0-70.51,16.665-95.851,46.966
	    C75.219,62.209,65.481,79.995,59.079,99.353H10.108v45.031h40.39c-0.217,3.617-0.329,7.311-0.329,10.977
	    c0,3.704,0.112,7.351,0.329,11.016h-40.39V211.4h48.971c6.402,19.356,16.14,37.122,28.886,52.351
	    c25.341,30.303,59.381,46.999,95.851,46.999c48.515,0,93.275-30.55,116.826-79.767l-40.626-19.454
	    C244.025,244.965,214.825,265.726,183.815,265.726z"/>
    </g>
</svg>
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Keine regelmäßigen Kosten</h4>
  <p className="text-gray-600 text-center">Zahle nur, wenn du auch wirklich verbrauchst! Reserviere deine bevorzugten Cannabis-Sorten, bezahle digital und hole sie bequem in Potsdam ab – ganz ohne unflexible Cannabis-Abos, die dich zu hohen Konsummengen zwingen.</p>
</div>

{/* 2nd item */}
<div className="relative flex flex-col items-center p-4 bg-white rounded shadow-xl">
<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 310.75 310.75" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
        <stop stopColor="#4FD1C5" offset="0%" />
        <stop stopColor="#81E6D9" offset="25.871%" />
        <stop stopColor="#338CF5" offset="100%" />
      </radialGradient>
    </defs>    
    <rect width="310.75" height="310.75" rx="155.375" fill="url(#footer-logo)" />
    <g strokeWidth="1" transform="scale(8) translate(7 9)">
      <path fill="none" stroke="#FFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </g>
</svg>
 <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Alles digital und entspannt </h4>
  <p className="text-gray-600 text-center">Einfach digital mitbestimmen im Club! Beteilige dich bequem von zuhause aus am Geschehen unseres Clubs. Willst du  beim Anbauen mithelfen oder auch nur mehr lernen? Unsere Kurse machen dich auch vom heimischen Sofa aus zum Cannabis-Experten.</p>
</div>


</div><br></br><br></br><br></br>
              <div className="max-w-xl  sm:max-w-none sm:flex sm:justify-center sm:items-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                <center>  <a className="btn text-white bg-green-600 hover:bg-green-700 w-full mb-8 sm:w-auto sm:mb-0 text-3xl" href="#0">Jetzt dem Wunderblüte-Club beitreten!</a> </center>
                </div>
               
              </div>
            </div>
          </div>

          {/* Hero image
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
          <div className="flex justify-center"><a href="https://www.provenexpert.com/wunderbluete-e-v/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget" title="Kundenbewertungen &amp; Erfahrungen zu Wunderblüte e.V.. Mehr Infos anzeigen." target="_blank" rel="noopener noreferrer">
  <img src="https://images.provenexpert.com/15/63/9b507d2870c3fcb86a601788afd0/widget_recommendation_465_0.png?t=1713903052161" alt="Kundenbewertungen &amp; Erfahrungen zu Wunderblüte e.V. Mehr Infos anzeigen."  /></a></div>

        </div>

      </div>
    </section>
  )
}