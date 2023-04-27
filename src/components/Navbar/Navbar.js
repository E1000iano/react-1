import './Navbar.css'
import CartWidget  from '../CartWidget/CartWidget'


const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div>
                <button className = 'botonbarra'>Aperitivos</button>
                <button className = 'botonbarra'>Licores</button>
                <button className = 'botonbarra'>Destilados</button>
                <button className = 'botonbarra'>Cervezas</button>
            </div>

            <CartWidget/>
        </nav>
    )
}
export default Navbar