type JednostkaWagi = 'ml' | 'l' | 'kg' | 'g';

export interface Produkt {
  id?: string;

  img?: string;
  name: string;

  quantity?: number;
  units: {
    kg: boolean;
    g: boolean;
    l: boolean;
    mil: boolean;
  };
  weight: number;

  calories?: number;
  carbohydrates?: number;
  proteines?: number;
  fat?: number;

  eaten?: boolean;
  eatenDate?: number;
}
