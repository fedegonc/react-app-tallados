import React from "react";

const Documents = () => {
  return (
    <div className="documentation-container">
      <div className="content">
        <h1>Documentación del Proyecto</h1>

        <section>
          <h2>1. Introducción</h2>
          <p>
            Este proyecto es una aplicación React que utiliza el enfoque de Atomic
            Design para desarrollar componentes escalables y reutilizables. El
            objetivo es crear una solución modular que facilite la adición de
            nuevas funcionalidades y mantenga un código limpio.
          </p>
        </section>

        <section>
          <h2>2. Arquitectura del Proyecto</h2>
          
          <div className="subsection">
            <h3>2.1 Atomic Design</h3>
            <p>
              El proyecto se organiza en cinco niveles: Átomos, Moléculas,
              Organismos, Plantillas y Páginas. Cada nivel representa un grado de
              complejidad creciente y se basa en los componentes más simples.
            </p>
          </div>

          <div className="subsection">
            <h3>2.2 Organización de Carpetas</h3>
            <ul>
              <li>
                <strong>/atoms:</strong> Componentes básicos como botones y
                párrafos.
              </li>
              <li>
                <strong>/molecules:</strong> Combinación de átomos, como
                formularios simples.
              </li>
              <li>
                <strong>/organisms:</strong> Componentes más complejos que combinan
                moléculas.
              </li>
              <li>
                <strong>/templates:</strong> Estructuras que definen el diseño de
                páginas.
              </li>
              <li>
                <strong>/pages:</strong> Páginas completas que renderizan
                templates y organismos.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>3. Árbol de Organización</h2>
          <p>
            A continuación, se muestra la organización del proyecto según Atomic
            Design:
          </p>
          <pre className="code-block">src/</pre>
        </section>
      </div>

      <style jsx>{`
        .documentation-container {
          padding: 2rem;
          max-width: 1200px;
          margin: 0;
          font-family: 'Marcellus', serif;
        }

        .content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        h1 {
          font-size: 2.5rem;
          color: #2d3748;
          margin-bottom: 2rem;
          text-align: left;
          font-family: 'Marcellus', serif;
        }

        h2 {
          font-size: 2rem;
          color: #2d3748;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Marcellus', serif;
          text-align: left;
        }

        h3 {
          font-size: 1.5rem;
          color: #4a5568;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-family: 'Marcellus', serif;
          text-align: left;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 1rem;
          font-family: 'Marcellus', serif;
          text-align: left;
        }

        .subsection {
          margin-left: 0;
          margin-top: 1.5rem;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin-left: 0;
        }

        li {
          margin-bottom: 0.8rem;
          font-size: 1.1rem;
          color: #4a5568;
          font-family: 'Marcellus', serif;
          text-align: left;
        }

        strong {
          color: #2d3748;
          font-weight: 600;
        }

        .code-block {
          background: #f7fafc;
          padding: 1rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #4a5568;
          margin-top: 1rem;
          text-align: left;
        }

        @media (max-width: 768px) {
          .documentation-container {
            padding: 1rem;
          }

          .content {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.75rem;
          }

          h3 {
            font-size: 1.25rem;
          }

          p, li {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Documents;
