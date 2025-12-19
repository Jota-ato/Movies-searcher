import BarraSuperior from "./components/BarraSuperior"
import MySlider from "./components/Slider"

function App() {

    return (
        <>
            <div>
                <BarraSuperior />
                <div className="h-200">
                    <MySlider/>
                </div>
            </div>
        </>
    )
}

export default App
