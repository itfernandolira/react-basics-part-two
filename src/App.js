import Primeiro from "./components/basic/Primeiro";
import Segundo from "./components/basic/Segundo";
import Card from "./components/layout/Card";
import './App.css';

const app = () => {
    return (
        <div className="App">
            <div className="Cards">
                <Card title="Primeiro" color="#FFBF00">
                    <Primeiro />
                    <Primeiro />
                </Card>
                <Card title="Segundo" color="#DE3163">
                    <Segundo />
                    <Segundo />
                </Card>
            </div>
        </div>
    )
}

export default app;