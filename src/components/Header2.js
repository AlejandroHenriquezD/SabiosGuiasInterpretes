import "./Header2.css"


export default function Header2() {
    return (
        <header>
            <div class="header-banner">
                <h1>Sabios Guias Intérpretes</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/all-routes">Rutas ⮕</a></li>
                    <li><a href="/route-detail/0">Agüimes</a></li>
                    <li><a href="/route-detail/1">Alemán</a></li>
                    <li><a href="/route-detail/2">Tras las huellas británicas</a></li>
                    <li><a href="/route-detail/3">Inmersión Lingüística</a></li>
                    <li><a href="/route-detail/4">Jardín Canario</a></li>
                    <li><a href="/route-detail/5">Transhumancia</a></li>
                </ul>
            </nav>
        </header>

    );
}