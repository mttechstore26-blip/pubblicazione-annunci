import Link from "next/link";

// Home — versione 1
//
// Per ora solo il pulsante principale per iniziare un nuovo annuncio.
// Le sezioni "Da pubblicare / Pubblicati / Venduti / Errori" della
// dashboard le aggiungeremo quando colleghiamo la pagina Inventario.

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-4 pt-10 max-w-md mx-auto flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-2">I tuoi annunci</h1>
      <p className="text-sm text-gray-500 mb-10">Subito + Vinted, insieme</p>

      <Link
        href="/nuovo-annuncio"
        className="w-full h-16 rounded-2xl bg-black text-white text-lg font-semibold flex items-center justify-center"
      >
        + Nuovo annuncio
      </Link>
    </main>
  );
}
