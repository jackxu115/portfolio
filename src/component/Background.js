
import "../style/Background.scss"



export const Background = () => {

    const starList = () => {
        const stars = []
        for (let star = 0; star < 200; star++) {
            stars.push(star)
        }

        return stars
    }


    return (
        <div className="origin">
            <div className="control">
                <div className="galaxy">
                    {starList().map(index => <div className="star" key={index}></div>)}
                </div>
            </div>
        </div>

    )
}