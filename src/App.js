import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Products from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";
import { Container } from "react-bootstrap";

function App() {
	return (
		<Container>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/products" element={<Products></Products>}></Route>
				<Route path="/orders" element={<Orders></Orders>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</Container>
	);
}

export default App;
