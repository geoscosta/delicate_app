import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Delicate app</h1>
                    <p className="lead">Cadastro e listagem de produtos</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir todos os produtos cadastrados como também realizar o cadastro de novos produtos e atualização do mesmo.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar Lista
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;