const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 rotating">
        <img className="logo" width="150" src="/assets/8.png" />
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        ou un bref aperçu de ces huit dernières années !
      </h4>
    </section>
  )
}

export default Intro
