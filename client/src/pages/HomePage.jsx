import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <header className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-md p-10 rounded-lg">
        <h1 className="text-5xl py-2 font-bold text-black">Recomendaciones Restaurantes</h1>
        <p className="text-md text-slate-800">
          Descubre una experiencia gastronómica única en nuestra selección de restaurantes 
          cuidadosamente elegidos. Desde encantadores bistros locales hasta elegantes 
          establecimientos gourmet, cada opción ofrece una deliciosa variedad de platos 
          preparados con ingredientes frescos y pasión culinaria. Ya sea que estés 
          buscando una cena romántica, una comida familiar o simplemente explorar 
          nuevos sabores, nuestra lista de recomendaciones te llevará a lugares 
          donde los aromas tentadores y los sabores exquisitos te esperan en cada bocado. 
          Sumérgete en la diversidad culinaria y déjate llevar por una experiencia 
          gastronómica inolvidable.
        </p>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Empezar
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
