import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Content from "../molecules/Content";
import ProductSection from "../organisms/ProductSection";
import ProductPage from "./ProductPage";

const HomePage = () => {
  const [currentView, setCurrentView] = useState("home");
  const [productType, setProductType] = useState(null);

  // Función para navegar a la página de productos
  const navigateToProduct = (type) => {
    setProductType(type);
    setCurrentView("product");
    window.scrollTo(0, 0); // Scroll al inicio de la página
  };

  // Función para volver a la página principal
  const navigateToHome = () => {
    setCurrentView("home");
  };

  // Función para contactar por WhatsApp
  const contactWhatsApp = () => {
    const phoneNumber = '59892224955';
    const message = 'Hola, me gustaría obtener más información sobre sus productos de tallado.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Si estamos en la vista de producto, mostrar la página de producto
  if (currentView === "product") {
    return <ProductPage type={productType} onBack={navigateToHome} />;
  }

  // Vista principal con scroll
  return (
    <MainTemplate>
      <div className="scroll-container">
        {/* Sección de bienvenida */}
        <section className="welcome-section">
          <div className="welcome-container">
            <div className="welcome-content">
              <div className="welcome-text-container">
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
            </div>
            <div className="welcome-image">
              <img src="/static/img2.jpg" alt="Tallado en madera" />
              <div className="image-overlay"></div>
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
              onButtonClick={() => navigateToProduct("relieve")}
            />
            
            {/* Tallado pintado */}
            <ProductSection 
              title="Tallado Pintado" 
              description="Combinación de tallado tradicional con técnicas de pintura para dar vida y color a cada pieza."
              imagePath="/static/imagen5.jpg"
              buttonText="Ver productos"
              onButtonClick={() => navigateToProduct("pintado")}
            />
            
            {/* Tallado hundido */}
            <ProductSection 
              title="Tallado Hundido" 
              description="Arte de crear diseños rebajando la superficie de la madera, generando contrastes de luz y sombra."
              imagePath="/static/imagen7.jpg"
              buttonText="Ver productos"
              onButtonClick={() => navigateToProduct("hundido")}
            />
          </div>
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
            padding: 0;
            position: relative;
            overflow: hidden;
          }
          
          .welcome-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
          }
          
          .welcome-content {
            flex: 0.66; /* 66% del espacio para el texto */
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }
          
          .welcome-text-container {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 2rem;
            border-radius: 8px;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .welcome-image {
            flex: 0.33; /* 33% del espacio para la imagen */
            max-width: 33%;
            height: 100%;
            position: relative;
            overflow: hidden;
          }
          
          .welcome-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
          }
          
          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
            z-index: 1;
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
          
          @media (max-width: 768px) {
            .welcome-container {
              flex-direction: column;
              height: 100vh;
            }
            
            .welcome-content {
              flex: 1;
              width: 100%;
              padding: 1rem;
              margin-bottom: 2rem;
            }
            
            .welcome-image {
              flex: 1;
              max-width: 100%;
              height: 50vh;
              order: -1; /* Coloca la imagen arriba en móviles */
            }
            
            .image-overlay {
              background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
            }
            
            .products-container {
              flex-direction: column;
              align-items: center;
            }
            
            .welcome-section {
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        `}</style>
      </div>
    </MainTemplate>
  );
};

export default HomePage;
