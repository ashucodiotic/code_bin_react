import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListWrapper from './screen/ProductListWrapper';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ViewProduct } from './screen/ViewProduct';
import CardPage from './screen/CardPage';
import { LoginPage } from './screen/login/LoginPage';
import RegisterComponent from './screen/register/RegisterComponent';
function App() {

  return (
   <>
{   <Provider store={store}>
   <BrowserRouter>
    <Routes>
     <Route path='/' element={ <LoginPage/>}></Route> 
    <Route path='/register' element={ <RegisterComponent/>}/>
    <Route path='/product' element={ <ProductListWrapper/>}/>
    <Route path='/list/:id' element={ <ViewProduct/>}/>
    <Route path='/cart' element={ <CardPage/>}/> 
   </Routes>
   </BrowserRouter>
   </Provider>}
   </>
  );
}

export default App;
