import africa from './africa.json';
import antarctica from './antarctica.json';
import asia from './asia.json';
import europe from './europe.json';
import middleEast from './middle-east.json';
import northAmerica from './north-america.json';
import oceania from './oceania.json';
import southAmerica from './south-america.json';

export type RecipeCategory = 'Snack' | 'Beverage';

interface RawRecipe {
  id: number;
  name: string;
  country: string;
  category: RecipeCategory;
  time: string;
  servings: string;
  difficulty: string;
  ingredients: Record<string, string[]>;
  steps: string[];
  making_tips: string[];
  health_rating: number;
  cultural_authenticity: string;
  better_than_store_bought: string;
  hidden_nutrients: string;
}

export interface Recipe extends RawRecipe {
  slug: string;
  continent: string;
}

const REGIONS: Array<{ continent: string; recipes: RawRecipe[] }> = [
  { continent: 'Africa', recipes: africa as unknown as RawRecipe[] },
  { continent: 'Antarctica', recipes: antarctica as unknown as RawRecipe[] },
  { continent: 'Asia', recipes: asia as unknown as RawRecipe[] },
  { continent: 'Europe', recipes: europe as unknown as RawRecipe[] },
  { continent: 'Middle East', recipes: middleEast as unknown as RawRecipe[] },
  { continent: 'North America', recipes: northAmerica as unknown as RawRecipe[] },
  { continent: 'Oceania', recipes: oceania as unknown as RawRecipe[] },
  { continent: 'South America', recipes: southAmerica as unknown as RawRecipe[] },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitCountry(country: string): string[] {
  return country.split('/').map((part) => part.trim());
}

export const ALL_RECIPES: Recipe[] = REGIONS.flatMap(({ continent, recipes }) =>
  recipes.map((recipe) => ({
    ...recipe,
    continent,
    slug: slugify(recipe.name),
  })),
);

const RECIPES_BY_SLUG = new Map(ALL_RECIPES.map((recipe) => [recipe.slug, recipe]));

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES_BY_SLUG.get(slug);
}

export const RECIPE_COUNTRIES: string[] = [
  ...new Set(ALL_RECIPES.flatMap((recipe) => splitCountry(recipe.country))),
].sort((a, b) => a.localeCompare(b));

export function getRandomRecipeForCountry(country: string): Recipe | undefined {
  const matches = ALL_RECIPES.filter(
    (recipe) =>
      recipe.country === country || splitCountry(recipe.country).includes(country),
  );
  if (matches.length === 0) return undefined;
  return matches[Math.floor(Math.random() * matches.length)];
}

export const COUNTRY_CODE: Record<string, string> = {
  'South Africa': '710',
  Morocco: '504',
  Nigeria: '566',
  Kenya: '404',
  Ghana: '288',
  Ethiopia: '231',
  Tanzania: '834',
  Senegal: '686',
  Uganda: '800',
  Antarctica: '010',
  Japan: '392',
  China: '156',
  India: '356',
  'South Korea': '410',
  Thailand: '764',
  Vietnam: '704',
  Malaysia: '458',
  Philippines: '608',
  Indonesia: '360',
  Taiwan: '158',
  France: '250',
  Italy: '380',
  Spain: '724',
  Germany: '276',
  Austria: '040',
  'United Kingdom': '826',
  Greece: '300',
  Netherlands: '528',
  Portugal: '620',
  Turkey: '792',
  Russia: '643',
  Iran: '364',
  'Saudi Arabia': '682',
  Egypt: '818',
  Jordan: '400',
  Lebanon: '422',
  Israel: '376',
  Qatar: '634',
  'United Arab Emirates': '784',
  Yemen: '887',
  Palestine: '275',
  Syria: '760',
  'United States': '840',
  Canada: '124',
  Mexico: '484',
  Cuba: '192',
  Jamaica: '388',
  Panama: '591',
  'Costa Rica': '188',
  'Dominican Republic': '214',
  'Puerto Rico': '630',
  'Trinidad & Tobago': '780',
  Australia: '036',
  'New Zealand': '554',
  Fiji: '242',
  'Solomon Islands': '090',
  Vanuatu: '548',
  Samoa: '882',
  Tonga: '776',
  Kiribati: '296',
  'Cook Islands': '184',
  Brazil: '076',
  Argentina: '032',
  Peru: '604',
  Colombia: '170',
  Venezuela: '862',
  Chile: '152',
  Ecuador: '218',
  Bolivia: '068',
  Paraguay: '600',
  Uruguay: '858',
};

export const COUNTRY_POINT: Record<string, [number, number]> = {
  'South Africa': [24.59, -28.45],
  Morocco: [-9.07, 28.59],
  Nigeria: [8.63, 9.05],
  Kenya: [37.87, 0.42],
  Ghana: [-1.09, 7.9],
  Ethiopia: [40.37, 9.19],
  Tanzania: [34.83, -6.34],
  Senegal: [-14.55, 14.47],
  Uganda: [32.31, 1.4],
  Antarctica: [0, -74.44],
  Japan: [135.66, 36.2],
  China: [104.35, 36.87],
  India: [82.79, 21.73],
  'South Korea': [127.79, 36.5],
  Thailand: [101.48, 13.05],
  Vietnam: [105.75, 15.98],
  Malaysia: [114.42, 3.85],
  Philippines: [122.03, 15.52],
  Indonesia: [100.7, -0.2],
  Taiwan: [121.03, 23.63],
  France: [1.75, 46.75],
  Italy: [12.61, 42.51],
  Spain: [-3.18, 39.85],
  Germany: [10.5, 51.14],
  Austria: [13.23, 47.74],
  'United Kingdom': [-2.23, 54.3],
  Greece: [23.38, 39.12],
  Netherlands: [5.2, 52.16],
  Portugal: [-7.96, 39.56],
  Turkey: [35.48, 38.93],
  Russia: [90, 62.0],
  Iran: [53.71, 32.4],
  'Saudi Arabia': [45.15, 24.25],
  Egypt: [30.78, 26.79],
  Jordan: [37.06, 31.29],
  Lebanon: [35.87, 33.87],
  Israel: [35.05, 31.39],
  Qatar: [51.18, 25.34],
  'United Arab Emirates': [53.99, 24.28],
  Yemen: [47.86, 15.79],
  Palestine: [35.24, 31.94],
  Syria: [39.02, 34.77],
  'United States': [-95.83, 37.23],
  Canada: [-98.34, 56.8],
  Mexico: [-101.97, 23.63],
  Cuba: [-79.58, 21.52],
  Jamaica: [-77.27, 18.11],
  Panama: [-80.1, 8.42],
  'Costa Rica': [-84.24, 9.72],
  'Dominican Republic': [-70.16, 18.74],
  'Puerto Rico': [-66.42, 18.23],
  'Trinidad & Tobago': [-61.42, 10.45],
  Australia: [133.45, -24.85],
  'New Zealand': [170.38, -43.57],
  Fiji: [178.0, -17.8],
  'Solomon Islands': [160.16, -9.65],
  Vanuatu: [166.95, -15.18],
  Samoa: [-172.1, -13.76],
  Tonga: [-175.2, -21.18],
  Kiribati: [173.0, 1.35],
  'Cook Islands': [-159.78, -21.24],
  Brazil: [-54.36, -14.26],
  Argentina: [-63.52, -37.09],
  Peru: [-75.04, -9.2],
  Colombia: [-72.93, 4.07],
  Venezuela: [-66.53, 6.44],
  Chile: [-71.31, -35.72],
  Ecuador: [-78.1, -1.79],
  Bolivia: [-63.54, -16.32],
  Paraguay: [-58.49, -23.45],
  Uruguay: [-55.82, -32.53],
};
