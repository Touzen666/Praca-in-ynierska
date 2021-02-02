type JednostkaWagi = "ml" | "l" | "kg" | "g"

export interface Produkt {
  nazwa: string;
  ilosc: number;
  jednostkaWagi: JednostkaWagi;
  waga: number;

  img?: string;
  energia?: number;
  weglowodany?: number;
  bialko?: number;
  tluszcze?: number;
}
