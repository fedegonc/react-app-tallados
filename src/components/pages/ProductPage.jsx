import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Content from '../molecules/Content';

const ProductPage = ({ type, onBack }) => {
  // Configuración según el tipo de tallado
  const productConfig = {
    relieve: {
      title: "Tallado en Relieve",
      description: "Nuestras piezas de tallado en relieve destacan por su profundidad y detalle, creando figuras que sobresalen de la superficie de la madera. Cada pieza es única y trabajada a mano por nuestros artesanos expertos.",
      images: [
        "/static/imagen3.jpg",
        "/static/imagen5.jpg",
        "/static/imagen8.jpg"
      ],
      products: [
        {
          name: "Relieve Floral",
          price: "$1,200",
          description: "Tallado en madera de cedro con motivos florales."
        },
        {
          name: "Relieve Geométrico",
          price: "$950",
          description: "Patrones geométricos tallados en roble."
        },
        {
          name: "Relieve Personalizado",
          price: "Desde $1,500",
          description: "Diseño personalizado según tus especificaciones."
        }
      ]
    },
    pintado: {
      title: "Tallado Pintado",
      description: "Nuestros tallados pintados combinan la técnica tradicional del tallado con hermosos acabados de pintura. Cada pieza es una obra de arte que añade color y vida a cualquier espacio.",
      images: [
        "/static/imagen5.jpg",
        "/static/imagen9.jpg",
        "/static/imagen10.jpg"
      ],
      products: [
        {
          name: "Tallado Pintado Rústico",
          price: "$1,350",
          description: "Tallado con acabado de pintura rústica."
        },
        {
          name: "Tallado Multicolor",
          price: "$1,100",
          description: "Diseño con variedad de colores vivos."
        },
        {
          name: "Tallado Pintado Personalizado",
          price: "Desde $1,600",
          description: "Diseño y colores personalizados."
        }
      ]
    },
    hundido: {
      title: "Tallado Hundido",
      description: "El tallado hundido es una técnica donde rebajamos la superficie de la madera para crear diseños con profundidad. El juego de luces y sombras resalta cada detalle de estas piezas únicas.",
      images: [
        "/static/imagen7.jpg",
        "/static/imagen11.jpg",
        "/static/imagen12.jpg"
      ],
      products: [
        {
          name: "Tallado Hundido Clásico",
          price: "$1,150",
          description: "Diseño clásico con técnica de tallado hundido."
        },
        {
          name: "Tallado Hundido Minimalista",
          price: "$980",
          description: "Líneas simples y elegantes en madera de nogal."
        },
        {
          name: "Tallado Hundido Personalizado",
          price: "Desde $1,400",
          description: "Diseño personalizado con la profundidad que desees."
        }
      ]
    }
  };

  // Función para contactar por WhatsApp
  const contactWhatsApp = () => {
    const phoneNumber = '59892224955';
    const message = `Hola, me gustaría obtener más información sobre sus productos de ${productConfig[type].title.toLowerCase()}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Obtener la configuración según el tipo
  const config = productConfig[type] || productConfig.relieve;

  return (
    <MainTemplate>
      <div className="product-page">
        <button className="back-button" onClick={onBack}>
          ← Volver
        </button>
        
        <h1 className="product-title">{config.title}</h1>
        <p className="product-description">{config.description}</p>
        
        <div className="product-gallery">
          {config.images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`${config.title} ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <h2 className="products-heading">Productos disponibles</h2>
        
        <div className="products-list">
          {config.products.map((product, index) => (
            <div className="product-card" key={index}>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-desc">{product.description}</p>
              <button 
                className="buy-button"
                onClick={contactWhatsApp}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
        
        <div className="contact-info">
          <h3>¿Interesado en un diseño personalizado?</h3>
          <p>Contáctanos para crear una pieza única adaptada a tus necesidades.</p>
          <button 
            className="contact-button"
            onClick={contactWhatsApp}
          >
            Contactar
          </button>
        </div>
        
        <style jsx>{`
          .product-page {
            padding: 2rem;
            color: #fff;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .back-button {
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
          }
          
          .back-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          .product-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-family: 'Alkatra', sans-serif;
          }
          
          .product-description {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            max-width: 800px;
          }
          
          .product-gallery {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }
          
          .gallery-item {
            flex: 1;
            min-width: 250px;
            max-width: 350px;
            height: 250px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          }
          
          .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          
          .gallery-item:hover img {
            transform: scale(1.05);
          }
          
          .products-heading {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            font-family: 'Alkatra', sans-serif;
          }
          
          .products-list {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
          }
          
          .product-card {
            background-color: rgba(20, 20, 20, 0.8);
            border-radius: 8px;
            padding: 1.5rem;
            flex: 1;
            min-width: 250px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
          }
          
          .product-card:hover {
            transform: translateY(-5px);
          }
          
          .product-name {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            font-family: 'Alkatra', sans-serif;
          }
          
          .product-price {
            font-size: 1.2rem;
            color: #4A5D4E;
            margin-bottom: 0.5rem;
            font-weight: bold;
          }
          
          .product-desc {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            color: #ddd;
          }
          
          .buy-button {
            background-color: #1A2D2E;
            color: white;
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
          }
          
          .buy-button:hover {
            background-color: #fff;
            color: #1A2D2E;
          }
          
          .contact-info {
            background-color: rgba(20, 20, 20, 0.8);
            padding: 2rem;
            border-radius: 8px;
            margin-top: 2rem;
          }
          
          .contact-info h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-family: 'Alkatra', sans-serif;
          }
          
          .contact-button {
            background-color: #1A2D2E;
            color: white;
            border: none;
            padding: 0.7rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 1rem;
            transition: all 0.3s ease;
          }
          
          .contact-button:hover {
            background-color: #fff;
            color: #1A2D2E;
          }
          
          @media (max-width: 768px) {
            .product-gallery, .products-list {
              flex-direction: column;
              align-items: center;
            }
            
            .gallery-item, .product-card {
              max-width: 100%;
            }
          }
        `}</style>
      </div>
    </MainTemplate>
  );
};

export default ProductPage;
