import Primeiro from "./components/basic/Primeiro";
import Segundo from "./components/basic/Segundo";
import Card from "./components/layout/Card";
import ParOuImpar from "./components/basic/ParOuImpar";
import UserInfo from "./components/basic/UserInfo";
import OnClick from "./components/basic/OnClick";
import ElementParent from "./components/basic/ElementParent";
import Uncontrolled from "./components/basic/Uncontrolled";
import Controlled from "./components/basic/Controlled";
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
                    <UserInfo user={{ nome: 'Carlos'}} />
                </Card>
                <Card title="onClick" color="#AA3163">
                    <OnClick />
                </Card>
                <Card title="Binding" color="#AC3163">
                    <ElementParent />
                </Card>
                <Card title="Uncontrolled" color="#BF3163">
                    <Uncontrolled />
                </Card>
                <Card title="Controlled" color="#FF3163">
                    <Controlled />
                </Card>
            </div>
        </div>
    )
}

export default app;