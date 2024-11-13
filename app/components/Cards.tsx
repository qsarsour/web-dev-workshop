import {Coffee, BellOff, AlarmClock} from "lucide-react"

export default function Cards() {

    const cards = [
        {
            title: "Pro Tips for Looking Better",
            icon: <Coffee />,
            description: "Learn proven techniques for moving with style and confidence."
        },
        {
            title: "Weekly (Optional) Reminders",
            icon: <BellOff />,
            description: "Get reminders about your next haircut service and deals."
        },
        {
            title: "Last-Minute Date Prep",
            icon: <AlarmClock />,
            description: "Learn the tricks to tackle anything... even for last minute dates?"
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-x-4">
            {
              cards.map((card, index) => {
                return(
                    <div className="border-4 border-black p-3 mt-10">
                        <h3>{card.title}</h3>
                        <div className= "w-fit mx-auto my-5">
                         {
                            card.icon
                         }   
                        </div>
                        <p>
                            {card.description}
                        </p>
                    </div>
                )
              })  
            }
        </div>
    )
}