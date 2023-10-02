



export default function Hero() {
    return (
        <div className=" text-customWhite relative h-[100vh] lg:max-h-[70vh] flex justify-center items-center uppercase  text-2xl md:text-3xl text-center">
            <img className="h-full w-full object-cover" src="./Hero.png" alt="banner" />
            <div className="absolute flex flex-col gap-4 items-center [&>*]:px-4 sm:[&>*]:px-10 md:[&>*]:my-5">
                <h2 className="font-regular z-40 drop-shadow-md">
                    Potenciamos la ventana con la que tu marca saldrá al mundo,
                    <span className="font-bold"> Bienvenido a la web.</span>
                </h2>
                <img className="w-[250px] drop-shadow-md" src="/NG_LOGOW.png" alt="logo" />
                <h1 className=" z-40 drop-shadow-lg">
                    Tecnologías y soluciones digitales
                </h1>
            </div>


        </div>
    )
}

