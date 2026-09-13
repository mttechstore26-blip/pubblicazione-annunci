// product-catalog.ts
//
// Cos'è, in parole semplici: una lista dei prodotti che vendi più spesso
// (quelli che mi hai elencato all'inizio), con delle "parole chiave" che
// aiutano il programma a riconoscerli quando scrivi il titolo.
//
// Esempio: se scrivi "switch oled" o "nintendo switch oled", il programma
// cerca nella lista qui sotto e trova la riga con alias "switch oled" →
// sa che marca è Nintendo, modello è "Switch OLED", categoria è Console.
//
// Questo file NON è intelligenza artificiale: è una lista scritta a mano.
// Funziona benissimo per i prodotti che vendi di solito; per un prodotto
// mai visto prima, dirà semplicemente "non l'ho riconosciuto con certezza".
// Aggiungere un nuovo prodotto = aggiungere una riga qui sotto.

export interface CatalogEntry {
  brand: string;
  model: string;
  category: string;
  variant?: string;
  // Parole/frasi che, se trovate nel titolo, indicano questo prodotto.
  // Le più specifiche vanno per prime (es. "switch oled" prima di "switch").
  aliases: string[];
  priceRange: { min: number; max: number };
}

export const PRODUCT_CATALOG: CatalogEntry[] = [
  {
    brand: "Nintendo", model: "Switch OLED", category: "Console", variant: "OLED",
    aliases: ["switch oled"], priceRange: { min: 220, max: 300 },
  },
  {
    brand: "Nintendo", model: "Switch Lite", category: "Console", variant: "Lite",
    aliases: ["switch lite"], priceRange: { min: 130, max: 190 },
  },
  {
    brand: "Nintendo", model: "Switch", category: "Console",
    aliases: ["nintendo switch", "switch"], priceRange: { min: 150, max: 220 },
  },
  {
    brand: "Sony", model: "PlayStation 5", category: "Console",
    aliases: ["playstation 5", "ps5"], priceRange: { min: 350, max: 480 },
  },
  {
    brand: "Sony", model: "PlayStation 4", category: "Console",
    aliases: ["playstation 4", "ps4"], priceRange: { min: 100, max: 200 },
  },
  {
    brand: "Microsoft", model: "Xbox Series X", category: "Console",
    aliases: ["xbox series x"], priceRange: { min: 300, max: 420 },
  },
  {
    brand: "Microsoft", model: "Xbox Series S", category: "Console",
    aliases: ["xbox series s"], priceRange: { min: 180, max: 260 },
  },
  {
    brand: "Microsoft", model: "Xbox", category: "Console",
    aliases: ["xbox"], priceRange: { min: 150, max: 300 },
  },
  {
    brand: "Apple", model: "MacBook Air", category: "Notebook",
    aliases: ["macbook air"], priceRange: { min: 550, max: 1100 },
  },
  {
    brand: "Apple", model: "MacBook Pro", category: "Notebook",
    aliases: ["macbook pro"], priceRange: { min: 800, max: 1800 },
  },
  {
    brand: "Apple", model: "MacBook", category: "Notebook",
    aliases: ["macbook"], priceRange: { min: 500, max: 1200 },
  },
  {
    brand: "Apple", model: "iPhone", category: "Smartphone",
    aliases: ["iphone"], priceRange: { min: 200, max: 900 },
  },
  {
    brand: "Apple", model: "iPad", category: "Tablet",
    aliases: ["ipad"], priceRange: { min: 150, max: 700 },
  },
  {
    brand: "Apple", model: "AirPods Pro", category: "Auricolari",
    aliases: ["airpods pro"], priceRange: { min: 120, max: 200 },
  },
  {
    brand: "Apple", model: "AirPods", category: "Auricolari",
    aliases: ["airpods"], priceRange: { min: 60, max: 150 },
  },
  {
    brand: "Apple", model: "Apple Watch", category: "Smartwatch",
    aliases: ["apple watch"], priceRange: { min: 120, max: 400 },
  },
  {
    brand: "Canon", model: "Fotocamera EOS", category: "Fotocamera",
    aliases: ["canon eos", "canon"], priceRange: { min: 150, max: 900 },
  },
  {
    brand: "Dyson", model: "Aspirapolvere/Styler", category: "Elettrodomestico",
    aliases: ["dyson"], priceRange: { min: 150, max: 450 },
  },
  {
    brand: "Meta", model: "Quest 3S", category: "Cuffie VR",
    aliases: ["meta quest 3s", "quest 3s", "oculus quest 3s"],
    priceRange: { min: 220, max: 350 },
  },

];
