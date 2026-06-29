import Image from "next/image"


function Hero () {
    const stats= [
        {
           number: "10yrs", 
           text: "Experiences"
        },
        {
            number: "20K",
            text: "Happy Costumers"
        },
        {
            number: "1000+",
            text: "Monthly Deliveries"
        },
        {
            number: "20+",
            text: "Country"
        }
    ]

    const heroImg = "https://assets-global.website-files.com/633f955964f4f97fdcf650af/6357144deb2c55583f9f0764_About%20Header%20Image-p-1600.webp"
  return (
    <section className="space-y-8">
        <div className="lg:flex ">
            <div className="lg:w-1/4">
                <h1>About Us</h1>
            </div>
            <div className="lg:w-3/4">
                <p>For over 10 years, Furnira has been creating authentic, eclectic, and timeless furniture from solid wood only.It has made us amongst the specialist in delivering sustainable furniture around the world. While our core comes from our technology combine to craftmanship,our success is the result of one essential substance – The human one.</p>
                <div className="lg:flex justify-between">
                    {stats.map((stat, index) => {
                        return (
                            <div key={index}>
                                <h1>{stat.number}</h1>
                                <p>{stat.text}</p>
                            </div>
                        )
                    })}
                </div>
            
            </div>
        </div>
        <div>
            <Image src={heroImg} alt="" width={1000} height={1080} />
        </div>

    </section>
  )
}

export default Hero