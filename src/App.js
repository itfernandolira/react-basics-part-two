import Primeiro from "./components/basic/Primeiro";
import Segundo from "./components/basic/Segundo";
import Card from "./components/layout/Card";

const app = () => {
    return (
        <div>
            <Card title="Primeiro">
                <Primeiro />
                <Primeiro />
            </Card>
            <Card title="Segundo">
                <Segundo />
                <Segundo />
            </Card>
        </div>
    )
}

export default app;