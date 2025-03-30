import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Content from "../molecules/Content";
import ProductSection from "../organisms/ProductSection";

const HomePage = () => {
  return (
    <MainTemplate>
      <div className="scroll-container">
        {/* Sección de bienvenida */}
        <section className="welcome-section">
          <div className="welcome-container">
            <div className="welcome-content">
              <Content
                titleText="Bienvenido"
                paragraphText="Descubre nuestras piezas únicas y personalizadas, hechas con la mejor calidad de madera y diseño artesanal."
                buttonText="Explorar"
                onButtonClick={() => {
                  // Scroll suave hacia la sección de productos
                  document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
            <div className="welcome-image">
              <img src="/static/img2.jpg" alt="Tallado en madera" />
            </div>
          </div>
        </section>

        {/* Sección de productos */}
        <section id="productos" className="products-section">
          <h2 className="section-title">Nuestros Tallados</h2>
          <p className="section-description">Explorá nuestras técnicas artesanales de tallado en madera</p>
          
          <div className="products-container">
            {/* Tallado en relieve */}
            <ProductSection 
              title="Tallado en Relieve" 
              description="Técnica que eleva las figuras sobre la superficie de la madera, creando profundidad y dimensión."
              imagePath="/static/imagen3.jpg"
              buttonText="Ver productos"
            />
            
            {/* Tallado pintado */}
            <ProductSection 
              title="Tallado Pintado" 
              description="Combinación de tallado tradicional con técnicas de pintura para dar vida y color a cada pieza."
              imagePath="/static/imagen5.jpg"
              buttonText="Ver productos"
            />
            
            {/* Tallado hundido */}
            <ProductSection 
              title="Tallado Hundido" 
              description="Arte de crear diseños rebajando la superficie de la madera, generando contrastes de luz y sombra."
              imagePath="/static/imagen7.jpg"
              buttonText="Ver productos"
            />
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="contact-section">
          <Content
            titleText="Contacto"
            paragraphText="¿Interesado en un diseño personalizado? Contáctanos para crear una pieza única adaptada a tus necesidades."
            buttonText="Contactar"
            onButtonClick={() => {
              // Aquí puedes implementar la funcionalidad de contacto
              window.location.href = "mailto:contacto@guiadeltallado.com";
            }}
          />
        </section>

        <style jsx>{`
          .scroll-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            scroll-behavior: smooth;
          }
          
          section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2rem 0;
          }
          
          .welcome-section {
            align-items: center;
            padding: 0 50px;
          }
          
          .welcome-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            gap: 2rem;
          }
          
          .welcome-content {
            flex: 0.66; /* 66% del espacio para el texto */
            padding-right: 1rem;
          }
          
          .welcome-image {
            flex: 0.33; /* 33% del espacio para la imagen */
            max-width: 33%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
          }
          
          .welcome-image img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
            object-fit: cover;
          }
          
          .welcome-image:hover img {
            transform: scale(1.03);
          }
          
          .products-section {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 3rem 2rem;
          }
          
          .section-title {
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 1rem;
            text-align: center;
            font-family: 'Alkatra', sans-serif;
          }
          
          .section-description {
            font-size: 1.2rem;
            color: #ddd;
            margin-bottom: 3rem;
            text-align: center;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .products-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
          }
          
          .contact-section {
            align-items: flex-start;
            padding-left: 50px;
          }
          
          @media (max-width: 768px) {
            .welcome-container {
              flex-direction: column;
            }
            
            .welcome-content {
              flex: 1;
              width: 100%;
              padding-right: 0;
            }
            
            .welcome-image {
              flex: 1;
              max-width: 80%;
              margin-top: 2rem;
            }
            
            .products-container {
              flex-direction: column;
              align-items: center;
            }
            
            .welcome-section, .contact-section {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        `}</style>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
