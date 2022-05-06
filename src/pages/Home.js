import "./Home.css"
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import Images from "../components/Images";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
    return (
        <>
            <Header2 />
            <ScrollToTop />

            <div class="background">
                <div class="row">
                    <div class="col-8">
                        <h2 class="title">Descubre Sabíos Guías Intérpretes</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ml-5">
                        <p class="text">Es un programa intergeneracional de promoción del patrimonio y la cultura a través de la sabiduría de las personas mayores.</p>
                        <p class="text">Guiar y saber interpretar el paisaje y su historia acercándolo de forma peculiar a todos los públicos, es una labor que los Sabios Guías Intérpretes desarrollan con gran orgullo y capacidad.</p>
                    </div>
                    <div class="col-6 ml-5">
                        <img class="image" width="450" height="301" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Arucas_02.jpg" alt="SGI" />
                    </div>
                </div>
            </div>
            <div class="background1">
                <div class="row">
                    <div class="col-8">
                        <h2 class="title">¿Qué hace un Sabío Guía Intérprete?</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ml-5">
                        <p class="text1">Un Sabio Guía Intérprete es aquella persona de edad avanzada que, de forma voluntaria, comparte sus vivencias relacionadas con algún elemento de nuestro patrimonio histórico, etnográfico o ambiental, y que participa activamente en la transmisión del mismo.</p>
                    </div>
                    <div class="col-6 ml-5">
                        <p class="text1">Los Sabios Guías Intérpretes realizan esta tarea contando con el apoyo de un grupo de profesionales que colaboran en dicha labor.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 ml-5">
                    <img class="image2" width="570" height="432" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Arucas_01.jpg" alt="SGI" />
                    </div>
                    <div class="col-6 ml-5">
                    <img class="image2" width="550" height="420" src="https://www.sabiosguiasinterpretes.com/wp-content/uploads/2019/12/SGI_Firgas_02.jpg" alt="SGI" />
                    </div>
                </div>
                

            </div>



            <Images />
            <Footer2 />
        </>
    );
}