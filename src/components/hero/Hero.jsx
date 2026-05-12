function Hero() {
  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url(https://img.freepik.com/premium-photo/cup-hot-coffee-coffee-beans-dynamic-background_889227-355.jpg)`}}>
      <div className="m-auto pt-22 pb-16 md:pt-24 lg:pt-28 bg-linear-90 from-slate-900 to-transparent" >
        <div className="container px-2 flex flex-col items-center m-auto lg:px-5">
          <h1 className="text-3xl font-extrabold text-center text-white mb-2 md:text-4xl md:w-4/5 lg:text-5xl xl:text-6xl xl:mb-5">Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="text-sm text-center text-white md:text-lg xl:text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
