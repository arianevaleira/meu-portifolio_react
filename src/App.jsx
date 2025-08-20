import { useEffect, useState } from "react";
import './App.css'
export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-['Inter'] text-gray-800">
      <header className="cabecalho bg-white shadow-sm sticky top-0 z-50">
        <div className="container1 py-4 px-6">
          <h1 className="text-2xl md:text-3xl font-bold">Ariane Valéria</h1>
          <nav className="flex flex-wrap gap-4">
            {["home", "sobre", "habilidades", "projetos", "contato"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="hover:text-blue-500"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      
      <section id="home" className="hero text-center py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bem-vindo ao Meu Portfólio!
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Sou Ariane Valéria, estudante de Técnico em Informática para Internet,
            estou cursando meu último ano do curso.
          </p>
          <button
            onClick={() => scrollToSection("projetos")}
            className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition"
          >
            Veja Meus Projetos
          </button>
        </div>
      </section>

      
      <section id="sobre" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="mb-6 text-lg leading-relaxed">
            Estudante do último ano do{" "}
            <span className="text-blue-600 font-semibold">
              Técnico em Informática para Internet
            </span>
            , com experiência em desenvolvimento{" "}
            <span className="text-blue-600 font-semibold">full-stack</span>.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-100 p-5 rounded-lg">
              <h3 className="text-xl font-bold texto mb-3 flex items-center">
                <i className="fas fa-server mr-2 text-blue-600"></i> Back-end
              </h3>
              <p>APIs com Python (FastAPI, Flask), autenticação e integrações.</p>
            </div>
            <div className="bg-blue-100 p-5 rounded-lg">
              <h3 className="text-xl font-bold texto mb-3 flex items-center">
                <i className="fas fa-laptop-code mr-2 text-blue-600"></i> Front-end
              </h3>
              <p>Interfaces responsivas com React, Google Maps API, componentes reutilizáveis.</p>
            </div>
            <div className="bg-blue-100 p-5 rounded-lg">
              <h3 className="text-xl font-bold texto mb-3 flex items-center">
                <i className="fas fa-database mr-2 text-blue-600"></i> Banco de Dados
              </h3>
              <p>MySQL: modelagem, consultas e otimização.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="habilidades" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python",
            "React",
            "FastAPI",
            "Flask",
            "MySQL",
            "HTML/CSS",
            "JavaScript",
            "UX/UI",
            "Google Maps",
            "Linux",
            "VirtualBox",
            "Git",
            "Word/Excel/PowerPoint",
          ].map((skill) => (
            <span key={skill} className="badge bg-blue-100 text-blue-700 py-2 px-3 rounded-lg text-center">
              {skill}
            </span>
          ))}
        </div>
      </section>

      
      <section id="projetos" className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Sistema Árbitros +</h3>
            <p>
              Sistema que conecta Árbitros a contratantes usando Google Maps API
              para cálculos de distância.
            </p>
            <a
              href="https://github.com/arianevaleira/Projeto-Arbitros"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Sistema de Login</h3>
            <p>
              Sistema Usando o React + JavaScript para fazer login.
            </p>
            <a
              href="https://github.com/arianevaleira/Projeto-Arbitros"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Sistema de Biblioteca</h3>
            <p>API em FastAPI + React, banco SQL e integração com API do SUAP.</p>
            <a
              href="https://github.com/arianevaleira/SmartLibrary"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        </div>
      </section>

      
      <section id="contato" className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 bg-white shadow rounded">
            <i className="fas fa-envelope text-blue-600 text-2xl mb-2"></i>
            <h3 className="font-semibold">E-mail</h3>
            <a href="mailto:valeriaariane20@gmail.com" className="text-blue-600 hover:underline">
              valeriaariane20@gmail.com
            </a>
          </div>
          <div className="card p-6 bg-white shadow rounded">
            <i className="fab fa-github text-blue-600 text-2xl mb-2"></i>
            <h3 className="font-semibold">GitHub</h3>
            <a href="https://github.com/arianevaleira" target="_blank" className="text-blue-600 hover:underline">
              /arianevaleira
            </a>
          </div>
          <div className="card p-6 bg-white shadow rounded">
            <i className="fab fa-linkedin-in text-blue-600 text-2xl mb-2"></i>
            <h3 className="font-semibold">LinkedIn</h3>
            <a href="https://linkedin.com/in/ariane-valeria" target="_blank" className="text-blue-600 hover:underline">
              /ariane-valeria
            </a>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Baixar Currículo
          </a>
        </div>
      </section>

      
      <footer className="bg-blue-100 py-6 text-center">
        <p>&copy; 2025 Ariane Valéria. Todos os direitos reservados.</p>
      </footer>
      {showButton && (
        <button
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
