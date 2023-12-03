import Primeiro from "./components/basic/Primeiro";
import Segundo from "./components/basic/Segundo";
import Card from "./components/layout/Card";
import ParOuImpar from "./components/basic/ParOuImpar";
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
                <Card title="Condicional #1" color="#FF00FF">
                    <ParOuImpar numero={16} />
                    <ParOuImpar numero={7} />
                </Card>
            </div>
        </div>
    )
}

export default app;