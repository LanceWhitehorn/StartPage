// https://codepen.io/joshbader/pen/EjXgqr

const Icon = ({ weather }) => {
    switch (weather) {
        case 'Rain':
            return (
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
            )
        case 'Clouds':
            return (
                <div className="icon cloudy">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>
            )
        case 'Clear':
            return (
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
            )
        case 'Snow':
            return (
                <div className="icon flurries">
                    <div className="cloud"></div>
                    <div className="snow">
                        <div className="flake"></div>
                        <div className="flake"></div>
                    </div>
                </div>
            )
        case 'Storm':
            return (
                <div className="icon thunder-storm">
                    <div className="cloud"></div>
                    <div className="lightning">
                        <div className="bolt"></div>
                        <div className="bolt"></div>
                    </div>
                </div>
            )
        case 'Shower':
            return (
                <div className="icon sun-shower">
                    <div className="cloud"></div>
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                    <div className="rain"></div>
                </div>
            )
        default:
            return (
                <div className="icon cloudy">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>
            )
    }
}

export default Icon




/*
const sunShower = () => {
    return (
        <div class="icon sun-shower">
            <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
            <div class="rain"></div>
        </div>
    )
}
const thunderStorm = () => {
    return (
        <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
        </div>
    )
}
const cloudy = () => {
    return (
        <div class="icon cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
    )
}
const snowy = () => {
    return (
        <div class="icon flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
        </div>
    )
}
const sunny = () => {
    return (
        <div class="icon sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
    )
}
const rainy = () => {
    return (
        <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
        </div>
    )
}
*/