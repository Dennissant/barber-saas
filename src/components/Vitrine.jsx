function Vitrine() {
  return (
    <main>
      <section className="hero">

        <h1>Na régua e sem enrolação!</h1>
        <p>Agende seu horário.</p>
        <a href="#planos">Ver planos</a>
      </section>

      <section className="planos" id="planos">

        <div className="flex flex-col md:flex-row gap-5 justify-center">

          <div className="p-5 border border-[rgb(193,177,177)] rounded-lg text-center">
            <h3>Corte Cabelo</h3>
            <p>Corte mais lavagem.</p>
            <span>R$50,00 reais</span>
            <button>Agendar</button>
          </div>

          <div className="p-5 border border-[rgb(193,177,177)] rounded-lg text-center">
            <h3>Barba</h3>
            <p>Modelagem e corte.</p>
            <span>R$30,00 reais</span>
            <button>Agendar</button>
          </div>

          <div className="p-5 border border-[rgb(193,177,177)] rounded-lg text-center">
            <h3>Corte Cabelo + Barba</h3>
            <p>Corte de cabelo e modelagem de barba.</p>
            <span>R$70,00 reais</span>
            <button>Agendar</button>
          </div>

        </div>

      </section>
    </main >
  );
}

export default Vitrine;