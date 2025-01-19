import React from 'react';

const Documents = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Documentación del Proyecto</h1>
      <section style={{ textAlign: 'left' }}>
        <h2>1. Introducción</h2>
        <p>
          Este proyecto es una aplicación React que utiliza el enfoque de Atomic Design para
          desarrollar componentes escalables y reutilizables. El objetivo es crear una solución modular
          que facilite la adición de nuevas funcionalidades y mantenga un código limpio.
        </p>
      </section>
      <section style={{ textAlign: 'left' }}>
        <h2>2. Arquitectura del Proyecto</h2>
        <h3>2.1 Atomic Design</h3>
        <p>
          El proyecto se organiza en cinco niveles: Átomos, Moléculas, Organismos, Plantillas y
          Páginas. Cada nivel representa un grado de complejidad creciente y se basa en los
          componentes más simples.
        </p>
        <h3>2.2 Organización de Carpetas</h3>
        <ul>
          <li><strong>/atoms:</strong> Componentes básicos como botones y párrafos.</li>
          <li><strong>/molecules:</strong> Combinación de átomos, como formularios simples.</li>
          <li><strong>/organisms:</strong> Componentes más complejos que combinan moléculas.</li>
          <li><strong>/templates:</strong> Estructuras que definen el diseño de páginas.</li>
          <li><strong>/pages:</strong> Páginas completas que renderizan templates y organismos.</li>
        </ul>
      </section>
      <section style={{ textAlign: 'left' }}>
        <h2>3. Árbol de Organización</h2>
        <p>A continuación, se muestra la organización del proyecto según Atomic Design:</p>
        <pre
          style={{
            background: '#f4f4f4',
            padding: '15px',
            borderRadius: '8px',
            overflow: 'auto',
          }}
        >
{`
src
├── components
│   ├── atoms
│   │   ├── Button.jsx
│   │   ├── Paragraph.jsx
│   │   └── Title.jsx
│   ├── molecules
│   │   ├── Card.jsx
│   │   └── Menu.jsx
│   ├── organisms
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── templates
│       └── MainTemplate.jsx
├── pages
│   ├── HomePage.jsx
│   └── Documents.jsx
└── styles
    └── App.css
`}
        </pre>
      </section>
      <section style={{ textAlign: 'left' }}>
        <h2>4. Filosofía del Diseño</h2>
        <p>
          Este proyecto sigue principios como:
        </p>
        <ul>
          <li><strong>KISS:</strong> Mantener las cosas simples y claras.</li>
          <li><strong>DRY:</strong> No repetir código.</li>
          <li><strong>SOLID:</strong> Asegurar una buena arquitectura en los componentes.</li>
        </ul>
        <p>
          Además, se priorizan los componentes mínimos indispensables para asegurar la escalabilidad
          del proyecto.
        </p>
      </section>
    </div>
  );
};

export default Documents;
