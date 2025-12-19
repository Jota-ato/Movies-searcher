import BarraSuperior from "./components/BarraSuperior"
import MySlider from "./components/Slider"

function App() {

    return (
        <>
            <div>
                <BarraSuperior />
                <div className="h-[50rem]">
                    <MySlider/>
                </div>
            </div>
        </>
    )
}

export default App
