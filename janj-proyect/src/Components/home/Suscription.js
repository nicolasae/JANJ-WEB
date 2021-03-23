import '../../App.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css'


export default function Suscription(){

    return (
        <section id="call-to-action">
            <div className="container">
                <div className="row" data-aos="zoom-in">
                    <div className="col-lg-9 text-center text-lg-left">
                    <h3 className="cta-title">Suscríbete</h3>
                    <p className="cta-text"> 
                    Mantente al día con los cambios en las divisas y acciones, y recibe actualizaciones de nuevo contenido
                    </p>
                    </div>

                    <div className="col-lg-3  text-center">
                    <input placeholder="Correo Eléctronico"/>

                    <a className="cta-btn align-middle" href="#">Enviar</a>
                    </div>
                </div>
            </div>
        </section>
    );
}