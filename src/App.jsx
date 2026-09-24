import Vitrine from './components/Vitrine';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className="layout-base">

      {/* 1. Área do Componente Navbar */}
      <header>
        <h2>Logo BarberSaaS (Header)</h2>
      </header>

      {/* 2. Área do Componente Hero/Vitrine */}

      <Vitrine />

      {/* 3. Área do Componente Footer */}

      <Footer />

    </div>
  );
}

