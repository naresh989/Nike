import { services } from "../constants"
import ServiceCard from "../Components/ServiceCard"
const Services = () => {
  return (
    <section className='flex flex-1 justify-center items-center max-container flex-wrap  gap-9'>

      {
        services.map((service)=>(
          <ServiceCard key = {service.label}  {...service}/>
        ))
      }

    </section>
  )
}

export default Services