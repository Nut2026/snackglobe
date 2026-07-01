// Auto-generated from recipe JSON databases
// Hardcoded in code — NOT stored in Supabase

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  country: string;
  continent: string;
  category: "Snack" | "Beverage";
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

export const ALL_RECIPES: Recipe[] = [
  {
    "id": 76,
    "name": "Koeksisters",
    "country": "South Africa",
    "category": "Snack",
    "time": "2 hours (includes chilling and resting)",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g all-purpose flour",
        "2 tsp baking powder",
        "½ tsp salt",
        "2 tbsp butter, cold",
        "1 large egg",
        "200ml milk",
        "1 tsp vanilla extract"
      ],
      "Syrup": [
        "400g sugar",
        "250ml water",
        "1 cinnamon stick",
        "1 lemon peel",
        "1 tsp cream of tartar"
      ],
      "Frying": [
        "Vegetable oil for deep frying"
      ]
    },
    "steps": [
      "Make Syrup: Combine sugar, water, cinnamon, lemon peel, and cream of tartar. Boil until slightly thickened. Cool completely and refrigerate.",
      "Make Dough: Sift flour, baking powder, and salt. Rub in butter until crumbly.",
      "Add Wet: Whisk egg, milk, and vanilla. Add to flour mixture. Knead into soft dough.",
      "Rest: Cover and rest 30 minutes.",
      "Roll: Roll dough to 5mm thickness. Cut into strips.",
      "Braid: Braid strips into small plaits.",
      "Chill: Chill braided dough for 30 minutes.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry koeksisters until golden brown and crisp (3-4 minutes).",
      "Soak: Immediately dip in cold syrup. Let soak for 30 seconds.",
      "Drain: Drain on a wire rack.",
      "Serve: Serve at room temperature."
    ],
    "making_tips": [
      "The syrup must be ice-cold for the signature sticky coating.",
      "The dough should be rolled thin for the perfect crispiness.",
      "Fry in small batches to maintain oil temperature.",
      "The braids should be tight so they don't unravel during frying.",
      "These are best eaten the same day they're made."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Cape Malay and Afrikaner classic",
    "better_than_store_bought": "Commercial versions are often stale and soggy. Homemade koeksisters are perfectly crisp and syrup-drenched.",
    "hidden_nutrients": "Eggs provide protein. The dish is primarily sugar and flour, so enjoy sparingly.",
    "continent": "Africa",
    "slug": "koeksisters"
  },
  {
    "id": 77,
    "name": "Melktert (Milk Tart)",
    "country": "South Africa",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "1 tart (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "200g all-purpose flour",
        "100g butter, cold",
        "50g sugar",
        "1 egg yolk",
        "2 tbsp cold water"
      ],
      "Filling": [
        "500ml milk",
        "3 eggs, separated",
        "100g sugar",
        "2 tbsp cornflour",
        "1 tsp vanilla extract",
        "1 tbsp butter"
      ],
      "Topping": [
        "Ground cinnamon"
      ]
    },
    "steps": [
      "Make Pastry: Cut butter into flour and sugar. Add egg yolk and water. Knead gently. Chill 30 minutes.",
      "Line Pan: Roll pastry and line a tart pan. Prick with fork.",
      "Blind Bake: Bake at 180°C for 15 minutes.",
      "Make Filling: Heat milk until steaming. Whisk egg yolks, sugar, and cornflour.",
      "Temper: Gradually add hot milk to egg mixture while whisking.",
      "Cook: Return to pan. Cook until thickened.",
      "Add Butter: Add vanilla and butter. Cool slightly.",
      "Beat Egg Whites: Beat egg whites to soft peaks. Fold into custard.",
      "Fill: Pour filling into pastry shell.",
      "Bake: Bake at 180°C for 25-30 minutes until set.",
      "Cool: Cool completely.",
      "Dust: Dust with cinnamon."
    ],
    "making_tips": [
      "The filling should be silky and smooth—strain if necessary.",
      "The egg whites give the filling its light, fluffy texture.",
      "Don't overbake; the filling should still jiggle slightly.",
      "Cinnamon is traditionally dusted through a stencil.",
      "Serve chilled or at room temperature."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – South Africa's favorite dessert",
    "better_than_store_bought": "Store-bought melktert often has a rubbery texture. Homemade has a delicate, creamy filling.",
    "hidden_nutrients": "Milk and eggs provide calcium and protein. Cinnamon has anti-inflammatory properties.",
    "continent": "Africa",
    "slug": "melktert-milk-tart"
  },
  {
    "id": 78,
    "name": "Samoosas (Sweet)",
    "country": "South Africa",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "½ tsp salt",
        "2 tbsp vegetable oil",
        "150ml warm water"
      ],
      "Filling": [
        "200g mixed dried fruit, chopped",
        "100g desiccated coconut",
        "50g sugar",
        "1 tsp cinnamon",
        "½ tsp nutmeg",
        "2 tbsp butter, melted"
      ],
      "Frying": [
        "Vegetable oil for deep frying"
      ]
    },
    "steps": [
      "Make Pastry: Mix flour and salt. Add oil and rub in. Add water gradually to form soft dough. Rest 30 minutes.",
      "Make Filling: Combine dried fruit, coconut, sugar, cinnamon, nutmeg, and melted butter.",
      "Divide Dough: Roll dough thinly. Cut into strips.",
      "Fill: Place filling on one end. Fold into triangles.",
      "Seal: Seal edges with water.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and crisp (3-4 minutes).",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve warm or at room temperature."
    ],
    "making_tips": [
      "The pastry should be paper-thin for the best crispiness.",
      "Seal edges well so the filling doesn't leak.",
      "Sweet samoosas are a Cape Malay specialty.",
      "Can be dusted with powdered sugar.",
      "Serve with tea or coffee."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Cape Malay sweet specialty",
    "better_than_store_bought": "Store-bought samoosas are often dry. Homemade has a moist, fragrant filling.",
    "hidden_nutrients": "Dried fruits provide iron and fiber. Coconut offers healthy fats.",
    "continent": "Africa",
    "slug": "samoosas-sweet"
  },
  {
    "id": 79,
    "name": "Hertzoggies",
    "country": "South Africa",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 tartlets",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "200g all-purpose flour",
        "100g butter, cold",
        "50g sugar",
        "1 egg yolk"
      ],
      "Filling": [
        "150g apricot jam",
        "100g desiccated coconut",
        "50g sugar",
        "1 egg white"
      ]
    },
    "steps": [
      "Make Pastry: Rub butter into flour and sugar. Add egg yolk. Knead gently. Chill 30 minutes.",
      "Line Tins: Press pastry into tartlet tins.",
      "Add Jam: Place 1 tsp apricot jam in each tartlet.",
      "Make Topping: Whisk egg white until foamy. Add coconut and sugar. Mix well.",
      "Top: Spoon coconut mixture over jam.",
      "Bake: Bake at 180°C for 20-25 minutes until golden.",
      "Cool: Cool in tins for 5 minutes, then remove.",
      "Serve: Serve at room temperature."
    ],
    "making_tips": [
      "The pastry should be short and buttery.",
      "The coconut topping should be golden and crisp.",
      "These are named after the Hertzog family, who loved them.",
      "Traditional South African teatime treat.",
      "Can be stored in an airtight container."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – South African teatime classic",
    "better_than_store_bought": "Commercial versions use artificial flavorings. Homemade has authentic butter flavor.",
    "hidden_nutrients": "Coconut provides healthy fats. Apricot jam offers vitamin A.",
    "continent": "Africa",
    "slug": "hertzoggies"
  },
  {
    "id": 80,
    "name": "Mosbolletjies (Aniseed Bread Rolls)",
    "country": "South Africa",
    "category": "Snack",
    "time": "2 hours 30 minutes (includes rising)",
    "servings": "12 rolls",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "1 tbsp instant yeast",
        "2 tbsp sugar",
        "1 tsp salt",
        "1 tbsp aniseed",
        "300ml warm milk",
        "50g butter, melted"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, yeast, sugar, salt, and aniseed.",
      "Add Wet: Add warm milk and melted butter. Mix to dough.",
      "Knead: Knead for 10 minutes until smooth and elastic.",
      "First Rise: Cover and let rise 1 hour until doubled.",
      "Punch Down: Knock back dough.",
      "Shape: Divide into 12 balls. Place in a greased baking dish.",
      "Second Rise: Let rise 30 minutes.",
      "Bake: Brush with milk. Bake at 190°C for 20-25 minutes.",
      "Cool: Cool on wire rack.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Aniseed gives these rolls their signature licorice flavor.",
      "These are traditionally made with grape juice instead of milk.",
      "The rolls should be soft and pillowy.",
      "This is a Cape Dutch specialty.",
      "Best served warm with butter."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Cape Dutch specialty",
    "better_than_store_bought": "Commercial versions often lack the aromatic aniseed flavor. Homemade is more fragrant.",
    "hidden_nutrients": "Milk provides calcium and vitamin D. Aniseed aids digestion.",
    "continent": "Africa",
    "slug": "mosbolletjies-aniseed-bread-rolls"
  },
  {
    "id": 81,
    "name": "Rooibos Iced Tea",
    "country": "South Africa",
    "category": "Beverage",
    "time": "20 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 rooibos tea bags",
        "1 litre boiling water",
        "100g sugar (or to taste)",
        "1 lemon, sliced",
        "Ice cubes",
        "Fresh mint (optional)"
      ]
    },
    "steps": [
      "Brew Tea: Steep rooibos tea bags in boiling water for 5-7 minutes.",
      "Sweeten: Remove tea bags. Add sugar while still hot, stir to dissolve.",
      "Add Lemon: Add lemon slices.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour over ice cubes in glasses.",
      "Garnish: Top with fresh mint.",
      "Serve: Enjoy chilled."
    ],
    "making_tips": [
      "Rooibos is naturally caffeine-free.",
      "This is South Africa's gift to the world.",
      "Can be sweetened with honey.",
      "Add extra lemon for brightness.",
      "Serve ice-cold."
    ],
    "health_rating": 75,
    "cultural_authenticity": "100% – South Africa's signature tea",
    "better_than_store_bought": "Bottled rooibos has preservatives. Homemade is fresher and naturally sweet.",
    "hidden_nutrients": "Rooibos is rich in antioxidants. Lemon adds vitamin C.",
    "continent": "Africa",
    "slug": "rooibos-iced-tea"
  },
  {
    "id": 82,
    "name": "Ouma Rusks",
    "country": "South Africa",
    "category": "Snack",
    "time": "3 hours (includes drying)",
    "servings": "24 rusks",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Dough": [
        "500g all-purpose flour",
        "1 tsp baking powder",
        "½ tsp salt",
        "100g butter",
        "100g sugar",
        "250ml buttermilk",
        "2 eggs"
      ]
    },
    "steps": [
      "Preheat: Preheat oven to 180°C.",
      "Mix Dry: Sift flour, baking powder, and salt.",
      "Rub in Butter: Rub butter into flour until crumbly.",
      "Add Wet: Whisk buttermilk, eggs, and sugar. Add to flour mixture. Mix to dough.",
      "Shape: Divide dough and shape into logs.",
      "Bake First: Bake for 45 minutes until golden.",
      "Cool: Cool completely.",
      "Break: Break into pieces.",
      "Dry: Dry in oven at 100°C for 2-3 hours until crisp.",
      "Cool: Cool completely.",
      "Store: Store in airtight container."
    ],
    "making_tips": [
      "Rusks are traditionally dunked in tea or coffee.",
      "The drying process gives them their signature crunch.",
      "These are a South African breakfast staple.",
      "Ouma is the Afrikaans word for grandmother.",
      "Store in a cool, dry place."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – South African breakfast tradition",
    "better_than_store_bought": "Commercial rusks have preservatives. Homemade has authentic buttermilk flavor.",
    "hidden_nutrients": "Buttermilk provides calcium and probiotics.",
    "continent": "Africa",
    "slug": "ouma-rusks"
  },
  {
    "id": 83,
    "name": "Gazelle Horns (Kaab el Ghazal)",
    "country": "Morocco",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "20 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "300g all-purpose flour",
        "100g butter, melted",
        "1 tbsp orange blossom water",
        "Pinch of salt",
        "100ml warm water"
      ],
      "Filling": [
        "250g ground almonds",
        "150g powdered sugar",
        "1 tbsp orange blossom water",
        "1 egg white"
      ],
      "Coating": [
        "Icing sugar"
      ]
    },
    "steps": [
      "Make Filling: Mix ground almonds, powdered sugar, orange blossom water, and egg white to form a paste.",
      "Make Pastry: Combine flour, melted butter, orange blossom water, and salt. Add water gradually to form dough. Rest 30 minutes.",
      "Roll Pastry: Roll pastry very thin.",
      "Shape Filling: Roll almond paste into small cylinders.",
      "Wrap: Cut pastry into strips. Wrap around almond filling.",
      "Shape: Bend into crescent shapes.",
      "Bake: Bake at 180°C for 15-18 minutes until golden.",
      "Cool: Cool completely.",
      "Dust: Dust generously with icing sugar.",
      "Serve: Serve with mint tea."
    ],
    "making_tips": [
      "The pastry should be paper-thin for the perfect texture.",
      "The orange blossom water gives the signature Moroccan flavor.",
      "These cookies are named for their gazelle horn shape.",
      "The filling should be smooth and not too dry.",
      "These are traditional during Ramadan and celebrations."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Moroccan signature cookie",
    "better_than_store_bought": "Commercial versions often use artificial flavorings. Homemade has authentic orange blossom fragrance.",
    "hidden_nutrients": "Almonds provide healthy fats, vitamin E, and magnesium.",
    "continent": "Africa",
    "slug": "gazelle-horns-kaab-el-ghazal"
  },
  {
    "id": 84,
    "name": "Chebakia (Sesame Flower Cookies)",
    "country": "Morocco",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "150g sesame seeds, toasted",
        "50g butter, melted",
        "1 tsp yeast",
        "1 tbsp orange blossom water",
        "150ml warm water"
      ],
      "Syrup": [
        "300g honey",
        "1 tbsp rose water",
        "1 tsp cinnamon"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Toast Sesame: Toast sesame seeds until golden and fragrant.",
      "Make Dough: Mix flour, sesame seeds, butter, yeast, and orange blossom water. Add water gradually.",
      "Knead: Knead until smooth and pliable. Rest 30 minutes.",
      "Roll: Roll dough thinly. Cut into flower shapes.",
      "Heat Syrup: Heat honey, rose water, and cinnamon until combined.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry cookies until golden and crisp.",
      "Soak: Dip in warm honey syrup.",
      "Drain: Drain on wire rack.",
      "Cool: Let cool completely.",
      "Serve: Serve with mint tea."
    ],
    "making_tips": [
      "The dough must be rolled very thin.",
      "Sesame seeds should be toasted for maximum flavor.",
      "This is a Ramadan specialty in Morocco.",
      "The syrup should coat the cookies evenly.",
      "Can be stored for up to a week."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Moroccan Ramadan specialty",
    "better_than_store_bought": "Commercial chebakia is often chewy. Homemade has the perfect crisp texture.",
    "hidden_nutrients": "Sesame seeds provide calcium and iron. Honey has antibacterial properties.",
    "continent": "Africa",
    "slug": "chebakia-sesame-flower-cookies"
  },
  {
    "id": 85,
    "name": "Briouat (Sweet)",
    "country": "Morocco",
    "category": "Snack",
    "time": "1 hour",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry",
        "100g butter, melted"
      ],
      "Filling": [
        "250g ground almonds",
        "100g sugar",
        "1 tsp cinnamon",
        "1 tbsp orange blossom water",
        "1 egg yolk"
      ],
      "Syrup": [
        "200g honey"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Filling: Mix ground almonds, sugar, cinnamon, orange blossom water, and egg yolk to form a paste.",
      "Cut Phyllo: Cut phyllo into strips.",
      "Fill: Place filling on one end of each strip.",
      "Fold: Fold into triangles, brushing with butter.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and crisp.",
      "Soak: Dip in honey.",
      "Drain: Drain on wire rack.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Phyllo pastry should be covered with a damp cloth to prevent drying.",
      "The triangles should be well-sealed.",
      "Briouat can also be baked instead of fried.",
      "These are often served during Ramadan.",
      "Honey can be flavored with cinnamon."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Moroccan sweet pastry classic",
    "better_than_store_bought": "Commercial versions often use low-quality oil. Homemade is more delicate.",
    "hidden_nutrients": "Almonds provide healthy fats and vitamin E. Honey has trace minerals.",
    "continent": "Africa",
    "slug": "briouat-sweet"
  },
  {
    "id": 86,
    "name": "M'hanncha (Snake Cake)",
    "country": "Morocco",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "1 cake (10 slices)",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry",
        "100g butter, melted"
      ],
      "Filling": [
        "400g ground almonds",
        "200g sugar",
        "2 tsp cinnamon",
        "1 tbsp orange blossom water",
        "2 egg yolks"
      ],
      "Decoration": [
        "Icing sugar",
        "Ground cinnamon"
      ]
    },
    "steps": [
      "Make Filling: Mix almonds, sugar, cinnamon, orange blossom water, and egg yolks to form a paste.",
      "Prepare Pastry: Lay phyllo sheets flat. Brush with melted butter.",
      "Add Filling: Spread almond paste along one side.",
      "Roll: Roll tightly into a long cylinder.",
      "Coil: Coil the roll into a spiral, like a snake.",
      "Bake: Bake at 180°C for 30-35 minutes until golden.",
      "Cool: Cool completely.",
      "Dust: Dust with icing sugar and cinnamon.",
      "Serve: Serve with mint tea."
    ],
    "making_tips": [
      "The snake shape gives the cake its name—M'hanncha means snake.",
      "The spiral should be tight and even.",
      "This is a Moroccan tea-time favorite.",
      "Traditionally filled with spiced almond paste.",
      "Can be served warm or at room temperature."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Moroccan pastry masterpiece",
    "better_than_store_bought": "Commercial versions are often dry. Homemade has a moist, fragrant filling.",
    "hidden_nutrients": "Almonds provide healthy fats and vitamin E. Cinnamon aids blood sugar regulation.",
    "continent": "Africa",
    "slug": "mhanncha-snake-cake"
  },
  {
    "id": 87,
    "name": "Sellou (Sweet Flour and Almond Paste)",
    "country": "Morocco",
    "category": "Snack",
    "time": "1 hour",
    "servings": "24 pieces or 1 batch of paste",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "300g all-purpose flour",
        "250g almonds, toasted",
        "150g sesame seeds, toasted",
        "150g powdered sugar",
        "100ml argan oil (or olive oil)",
        "100g honey",
        "1 tsp cinnamon",
        "½ tsp aniseed"
      ]
    },
    "steps": [
      "Toast Flours: Toast flour in a dry pan until golden and fragrant (5-7 minutes).",
      "Toast Almonds: Toast almonds until golden. Cool and grind coarsely.",
      "Toast Sesame: Toast sesame seeds until golden.",
      "Combine: Mix flour, ground almonds, sesame seeds, sugar, and spices.",
      "Add Oil: Add argan oil and honey. Mix until combined.",
      "Rest: Let rest for 30 minutes.",
      "Shape: Roll into small balls or press into a pan.",
      "Cool: Let cool completely.",
      "Cut: If pressed, cut into squares.",
      "Serve: Serve with mint tea."
    ],
    "making_tips": [
      "Sellou is often eaten during Ramadan for energy.",
      "The flour must be toasted for the nutty flavor.",
      "Argan oil gives it a distinctive Moroccan taste.",
      "This is a no-bake, energy-dense snack.",
      "Can be stored for up to a month."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Moroccan energy treat",
    "better_than_store_bought": "Commercial versions often use cheap oils. Homemade has authentic argan oil.",
    "hidden_nutrients": "Argan oil provides vitamin E and healthy fats. Almonds offer protein and magnesium.",
    "continent": "Africa",
    "slug": "sellou-sweet-flour-and-almond-paste"
  },
  {
    "id": 88,
    "name": "Moroccan Mint Tea (Atay)",
    "country": "Morocco",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "2 tbsp Chinese gunpowder green tea",
        "1 large bunch fresh mint (about 30g)",
        "1 litre boiling water",
        "4 tbsp sugar (or to taste)"
      ]
    },
    "steps": [
      "Rinse Tea: Place tea leaves in a teapot. Add a little boiling water, swirl, and discard.",
      "Add Mint: Add fresh mint to the pot.",
      "Add Sugar: Add sugar.",
      "Add Water: Pour boiling water over tea and mint.",
      "Steep: Let steep for 5 minutes.",
      "Pour: Pour into glasses from a height to create foam.",
      "Return: Pour back into pot.",
      "Repeat: Repeat the pouring 2-3 times to aerate.",
      "Serve: Pour into small glasses.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "The pouring from a height is essential—it's called 'the Moroccan pour.'",
      "Moroccan tea is served in three glasses: 'life, love, and friendship.'",
      "Use fresh mint for the best flavor.",
      "The sugar is abundant—Moroccan tea is famously sweet.",
      "The tea should be poured with a dramatic flourish."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Morocco's national drink",
    "better_than_store_bought": "Cafe versions often use too much sugar. Homemade allows you to control the sweetness.",
    "hidden_nutrients": "Green tea provides antioxidants. Mint aids digestion.",
    "continent": "Africa",
    "slug": "moroccan-mint-tea-atay"
  },
  {
    "id": 89,
    "name": "Orange Blossom Lemonade",
    "country": "Morocco",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 lemons",
        "1 litre water",
        "100g sugar",
        "1 tbsp orange blossom water",
        "Ice cubes"
      ]
    },
    "steps": [
      "Juice Lemons: Squeeze lemons to extract fresh juice.",
      "Combine: Mix lemon juice, water, sugar, and orange blossom water.",
      "Stir: Stir until sugar dissolves.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour over ice cubes.",
      "Garnish: Add a lemon slice.",
      "Serve: Enjoy immediately."
    ],
    "making_tips": [
      "Orange blossom water is the signature Moroccan touch.",
      "Balance the tartness and sweetness.",
      "This is a refreshing drink for hot days.",
      "Can be served with mint leaves.",
      "Use fresh lemons, not bottled juice."
    ],
    "health_rating": 65,
    "cultural_authenticity": "100% – Moroccan signature drink",
    "better_than_store_bought": "Bottled lemonade has artificial flavors. Homemade has authentic orange blossom fragrance.",
    "hidden_nutrients": "Lemons provide vitamin C. Orange blossom water has trace antioxidants.",
    "continent": "Africa",
    "slug": "orange-blossom-lemonade"
  },
  {
    "id": 90,
    "name": "Avocado Milkshake (Moroccan)",
    "country": "Morocco",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 ripe avocados",
        "500ml milk",
        "4 tbsp sugar",
        "Ice cubes",
        "Orange blossom water (optional)"
      ]
    },
    "steps": [
      "Prepare Avocados: Peel and pit avocados.",
      "Blend: In a blender, combine avocado, milk, and sugar.",
      "Add Ice: Add ice cubes.",
      "Blend: Blend until smooth and creamy.",
      "Add Orange Blossom Water: Add if desired.",
      "Pour: Pour into chilled glasses.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Use very ripe avocados for the creamiest texture.",
      "This is a Moroccan café favorite.",
      "Orange blossom water adds a traditional touch.",
      "Chill the glasses for the best experience.",
      "Serve immediately to prevent oxidation."
    ],
    "health_rating": 75,
    "cultural_authenticity": "95% – Moroccan café favorite",
    "better_than_store_bought": "Cafe versions often use too much sugar. Homemade has better balance.",
    "hidden_nutrients": "Avocado provides healthy fats, potassium, and fiber. Milk adds calcium.",
    "continent": "Africa",
    "slug": "avocado-milkshake-moroccan"
  },
  {
    "id": 91,
    "name": "Puff-Puff (Nigerian Sweet Doughnuts)",
    "country": "Nigeria",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "500g all-purpose flour",
        "100g sugar",
        "2 tsp instant yeast",
        "½ tsp salt",
        "¼ tsp nutmeg",
        "300ml warm water",
        "1 egg (optional)"
      ],
      "Frying": [
        "Vegetable oil for deep frying"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, sugar, yeast, salt, and nutmeg.",
      "Add Water: Gradually add warm water. Add egg if using.",
      "Knead: Knead until smooth and elastic. The dough will be soft.",
      "First Rise: Cover and let rise 1 hour until doubled.",
      "Punch Down: Knock back the dough.",
      "Heat Oil: Heat oil to 170°C.",
      "Form Balls: Using wet hands, form small balls of dough.",
      "Fry: Drop balls into oil. Fry until golden, turning to ensure even coloring.",
      "Drain: Drain on paper towels.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The dough should be soft and sticky for the lightest texture.",
      "Wet hands prevent the dough from sticking.",
      "Puff-puff is often described as 'golden brown and pillowy.'",
      "Don't overcrowd the pot.",
      "Best served warm, fresh from the fryer."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Nigeria's favorite street snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter and fresher.",
    "hidden_nutrients": "Eggs provide protein. The dish is primarily carbohydrates, so enjoy in moderation.",
    "continent": "Africa",
    "slug": "puff-puff-nigerian-sweet-doughnuts"
  },
  {
    "id": 92,
    "name": "Chin Chin",
    "country": "Nigeria",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "30 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "100g sugar",
        "1 tsp baking powder",
        "¼ tsp nutmeg",
        "50g butter, melted",
        "1 egg",
        "100ml milk"
      ],
      "Frying": [
        "Vegetable oil for deep frying"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, sugar, baking powder, and nutmeg.",
      "Add Wet: Add melted butter, egg, and milk. Mix to dough.",
      "Knead: Knead until smooth.",
      "Rest: Rest dough for 15 minutes.",
      "Roll: Roll dough to 5mm thickness.",
      "Cut: Cut into small squares or strips.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and crisp.",
      "Drain: Drain on paper towels.",
      "Cool: Cool completely.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "The nutmeg gives Chin Chin its signature flavor.",
      "Cut evenly for even frying.",
      "These are very addictive—called 'African popcorn.'",
      "Can be stored in an airtight container for up to a week.",
      "Fry until deep golden for the crispiest texture."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Nigerian favorite snack",
    "better_than_store_bought": "Commercial versions can be stale. Homemade is fresh and crisp.",
    "hidden_nutrients": "Butter provides vitamin A. The dish is primarily sugar and flour.",
    "continent": "Africa",
    "slug": "chin-chin"
  },
  {
    "id": 93,
    "name": "Kuli-Kuli (Peanut Snack Cakes)",
    "country": "Nigeria",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "300g roasted peanuts",
        "100g sugar",
        "1 egg white",
        "½ tsp salt",
        "Oil for frying"
      ]
    },
    "steps": [
      "Grind Peanuts: Grind roasted peanuts until fine (not paste).",
      "Mix: Combine ground peanuts, sugar, and salt.",
      "Add Egg White: Add egg white. Mix until it holds together.",
      "Shape: Roll into small balls or cakes.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and crisp.",
      "Drain: Drain on paper towels.",
      "Cool: Cool completely.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "The peanuts should be ground but still have texture.",
      "Kuli-kuli is a popular Nigerian street snack.",
      "Can be made savory or sweet.",
      "The egg white helps bind the mixture.",
      "Store in an airtight container."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Nigerian street snack",
    "better_than_store_bought": "Commercial versions often use low-quality peanuts. Homemade is fresher.",
    "hidden_nutrients": "Peanuts provide protein, healthy fats, and vitamin E.",
    "continent": "Africa",
    "slug": "kuli-kuli-peanut-snack-cakes"
  },
  {
    "id": 94,
    "name": "Coconut Candy (Nigerian)",
    "country": "Nigeria",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "20 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g desiccated coconut",
        "150g sugar",
        "100ml water",
        "1 tsp ginger, grated",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Combine: In a pan, combine coconut, sugar, water, ginger, and salt.",
      "Cook: Cook over medium heat, stirring continuously.",
      "Thicken: The mixture will thicken and come together.",
      "Pour: Pour onto a greased surface.",
      "Spread: Spread evenly.",
      "Cool: Let cool completely.",
      "Cut: Cut into squares.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "The ginger gives a lovely warmth.",
      "This is a popular Nigerian sweet.",
      "Can be rolled into balls instead.",
      "Don't overcook or it will become hard.",
      "Store in an airtight container."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Nigerian favorite sweet",
    "better_than_store_bought": "Commercial versions have artificial flavors. Homemade has real ginger and coconut.",
    "hidden_nutrients": "Coconut provides healthy fats and fiber. Ginger aids digestion.",
    "continent": "Africa",
    "slug": "coconut-candy-nigerian"
  },
  {
    "id": 95,
    "name": "Alkaki (Sweet Fried Bean Cakes)",
    "country": "Nigeria",
    "category": "Snack",
    "time": "45 minutes (plus soaking)",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "250g black-eyed peas",
        "100g sugar",
        "1 tsp ginger powder",
        "1 tsp cinnamon",
        "Oil for frying"
      ]
    },
    "steps": [
      "Soak Beans: Soak black-eyed peas in water for 2-3 hours.",
      "Blend: Drain and blend peas with little water to form a paste.",
      "Mix: Add sugar, ginger, and cinnamon. Mix well.",
      "Heat Oil: Heat oil to 170°C.",
      "Form Cakes: Drop spoonfuls of batter into hot oil.",
      "Fry: Fry until golden brown and crisp.",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "The batter should be thick enough to hold its shape.",
      "Alkaki is a popular Hausa snack.",
      "The spices can be adjusted to taste.",
      "Fry in small batches.",
      "Best served warm."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Hausa specialty snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "Black-eyed peas provide protein, fiber, and iron.",
    "continent": "Africa",
    "slug": "alkaki-sweet-fried-bean-cakes"
  },
  {
    "id": 96,
    "name": "Zobo (Hibiscus Drink)",
    "country": "Nigeria",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried hibiscus petals",
        "1.5 litres water",
        "150g sugar",
        "1 inch ginger, grated",
        "Pineapple chunks (optional)"
      ]
    },
    "steps": [
      "Boil: Bring water and hibiscus petals to boil.",
      "Simmer: Reduce heat and simmer for 30 minutes.",
      "Add Ginger: Add ginger.",
      "Add Sugar: Add sugar and stir until dissolved.",
      "Strain: Strain through a sieve.",
      "Cool: Let cool completely.",
      "Add Pineapple: Add pineapple chunks if desired.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Zobo is Nigeria's favorite party drink.",
      "The hibiscus gives a deep red color.",
      "Ginger gives a lovely warmth.",
      "Can be flavored with clove.",
      "Serve ice-cold."
    ],
    "health_rating": 65,
    "cultural_authenticity": "100% – Nigeria's signature drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher and more vibrant.",
    "hidden_nutrients": "Hibiscus is rich in antioxidants. Ginger aids digestion.",
    "continent": "Africa",
    "slug": "zobo-hibiscus-drink"
  },
  {
    "id": 97,
    "name": "Kunun Zaki (Sweet Fermented Millet Drink)",
    "country": "Nigeria",
    "category": "Beverage",
    "time": "2 hours (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "200g millet",
        "1 litre water",
        "100g sugar",
        "½ tsp ginger powder"
      ]
    },
    "steps": [
      "Soak Millet: Soak millet in water for 6 hours.",
      "Blend: Drain and blend with fresh water until smooth.",
      "Ferment: Let ferment for 12-24 hours (optional, for sour version).",
      "Strain: Strain through cheesecloth.",
      "Add Sugar: Add sugar and ginger.",
      "Cook: Cook over medium heat for 15-20 minutes.",
      "Cool: Let cool.",
      "Chill: Refrigerate.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Kunun zaki is a traditional Nigerian drink.",
      "It can be made without fermentation for a sweeter version.",
      "Serve with groundnut cake.",
      "The drink should be slightly thick.",
      "Can be flavored with clove or cinnamon."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Hausa traditional drink",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is more authentic.",
    "hidden_nutrients": "Millet provides protein, fiber, and B vitamins.",
    "continent": "Africa",
    "slug": "kunun-zaki-sweet-fermented-millet-drink"
  },
  {
    "id": 98,
    "name": "Chapman (Nigerian Punch)",
    "country": "Nigeria",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml Sprite (or 7Up)",
        "200ml orange juice",
        "100ml pineapple juice",
        "2 tbsp grenadine syrup",
        "Lemon slices",
        "Orange slices",
        "Ice cubes"
      ]
    },
    "steps": [
      "Mix Juices: Combine orange juice and pineapple juice.",
      "Add Sprite: Add Sprite.",
      "Add Grenadine: Add grenadine syrup. Stir gently.",
      "Chill: Refrigerate.",
      "Serve: Pour over ice.",
      "Garnish: Add lemon and orange slices.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Chapman is Nigeria's signature party punch.",
      "The grenadine gives the beautiful red color.",
      "Traditionally served at weddings and celebrations.",
      "Can be made in large batches.",
      "Serve ice-cold."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Nigerian party favorite",
    "better_than_store_bought": "Cafe versions often skimp on fruit juice. Homemade uses real juice.",
    "hidden_nutrients": "Orange and pineapple juice provide vitamin C.",
    "continent": "Africa",
    "slug": "chapman-nigerian-punch"
  },
  {
    "id": 99,
    "name": "Mandazi (Sweet Coconut Doughnuts)",
    "country": "Kenya",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "100g sugar",
        "1 tsp yeast",
        "½ tsp cardamom",
        "200ml coconut milk",
        "2 tbsp coconut oil"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, sugar, yeast, and cardamom.",
      "Add Wet: Add coconut milk and coconut oil. Mix to dough.",
      "Knead: Knead until smooth and elastic.",
      "First Rise: Cover and let rise 1 hour.",
      "Punch Down: Knock back dough.",
      "Roll: Roll dough to 10mm thickness. Cut into triangles.",
      "Second Rise: Let rise 15 minutes.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and puffed.",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The cardamom and coconut give mandazi its East African identity.",
      "The triangular shape is traditional.",
      "Often served with chai.",
      "Dough should be soft for pillowy texture.",
      "Best served fresh."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – East African breakfast favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter and more flavorful.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Cardamom aids digestion.",
    "continent": "Africa",
    "slug": "mandazi-sweet-coconut-doughnuts"
  },
  {
    "id": 100,
    "name": "Kaimati (Sweet Fried Dumplings)",
    "country": "Kenya",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "300g all-purpose flour",
        "1 tsp yeast",
        "2 tbsp sugar",
        "1 tsp cardamom",
        "Pinch of salt",
        "200ml warm water"
      ],
      "Sugar Syrup": [
        "200g sugar",
        "100ml water",
        "1 tsp cardamom"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar, water, and cardamom until slightly thickened. Cool.",
      "Make Dough: Mix flour, yeast, sugar, cardamom, and salt. Add water gradually.",
      "Knead: Knead until smooth. Rest 30 minutes.",
      "Form Balls: Roll dough into small balls.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and puffed.",
      "Soak: Dip in warm syrup.",
      "Drain: Drain on wire rack.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Kaimati is a popular Swahili snack.",
      "The cardamom gives the signature flavor.",
      "Often served during Ramadan.",
      "The syrup should be light, not heavy.",
      "Best served warm."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Swahili favorite snack",
    "better_than_store_bought": "Commercial versions can be dry. Homemade is soft and fragrant.",
    "hidden_nutrients": "Cardamom provides antioxidants and digestive benefits.",
    "continent": "Africa",
    "slug": "kaimati-sweet-fried-dumplings"
  },
  {
    "id": 101,
    "name": "Mutura (Sweet Potato Cake)",
    "country": "Kenya",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "1 cake (8 slices)",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "400g sweet potatoes, boiled and mashed",
        "100g sugar",
        "100g desiccated coconut",
        "1 egg",
        "50g butter, melted",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Preheat: Preheat oven to 180°C.",
      "Mash Sweet Potatoes: Boil and mash until smooth.",
      "Combine: Mix mashed sweet potato, sugar, coconut, egg, butter, and vanilla.",
      "Pour: Pour into a greased baking dish.",
      "Bake: Bake for 25-30 minutes until golden.",
      "Cool: Cool in the pan.",
      "Cut: Cut into squares.",
      "Serve: Serve warm or at room temperature."
    ],
    "making_tips": [
      "Use orange-fleshed sweet potatoes for sweetness.",
      "The coconut gives a lovely texture.",
      "This is a healthy Kenyan treat.",
      "Can be served with tea.",
      "Store in the refrigerator."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Kenyan sweet potato treat",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is more natural.",
    "hidden_nutrients": "Sweet potatoes provide vitamin A, vitamin C, and fiber. Coconut adds healthy fats.",
    "continent": "Africa",
    "slug": "mutura-sweet-potato-cake"
  },
  {
    "id": 102,
    "name": "Bajia (Banana Fritters)",
    "country": "Kenya",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "12 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "50g rice flour",
        "100g sugar",
        "200ml coconut milk",
        "½ tsp cardamom"
      ],
      "Bananas": [
        "4 ripe bananas"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flours, sugar, and cardamom. Add coconut milk gradually.",
      "Slice Bananas: Peel and slice bananas.",
      "Heat Oil: Heat oil to 170°C.",
      "Dip: Dip banana slices in batter.",
      "Fry: Fry until golden and crisp.",
      "Drain: Drain on paper towels.",
      "Dust: Dust with powdered sugar.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Use ripe bananas for natural sweetness.",
      "The batter should be thick enough to coat the bananas.",
      "This is a popular Swahili snack.",
      "Serve with tea or coffee.",
      "Best eaten fresh."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Swahili banana treat",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "Bananas provide potassium and fiber. Coconut milk adds healthy fats.",
    "continent": "Africa",
    "slug": "bajia-banana-fritters"
  },
  {
    "id": 103,
    "name": "Tangawizi (Ginger Tea)",
    "country": "Kenya",
    "category": "Beverage",
    "time": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 inch fresh ginger, grated",
        "1 litre water",
        "4 tbsp honey",
        "1 lemon",
        "1 cinnamon stick (optional)"
      ]
    },
    "steps": [
      "Boil Water: Bring water to boil.",
      "Add Ginger: Add grated ginger.",
      "Simmer: Simmer for 10 minutes.",
      "Add Honey: Stir in honey.",
      "Add Lemon: Add lemon juice.",
      "Strain: Strain into cups.",
      "Serve: Serve hot."
    ],
    "making_tips": [
      "Tangawizi is the Swahili word for ginger.",
      "This is a healing Kenyan tea.",
      "Add cinnamon for extra warmth.",
      "Excellent for cold weather.",
      "Use fresh ginger for the best flavor."
    ],
    "health_rating": 80,
    "cultural_authenticity": "100% – Kenyan healing drink",
    "better_than_store_bought": "Bottled ginger tea has preservatives. Homemade is medicinal.",
    "hidden_nutrients": "Ginger has anti-inflammatory properties. Lemon provides vitamin C. Honey has antibacterial benefits.",
    "continent": "Africa",
    "slug": "tangawizi-ginger-tea"
  },
  {
    "id": 104,
    "name": "Dawa (Honey Lemon Tonic)",
    "country": "Kenya",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 lemons",
        "500ml water",
        "4 tbsp honey",
        "Ice cubes",
        "Fresh mint"
      ]
    },
    "steps": [
      "Juice Lemons: Squeeze lemons to extract fresh juice.",
      "Combine: Mix lemon juice, water, and honey.",
      "Stir: Stir until honey dissolves.",
      "Add Ice: Add ice cubes.",
      "Add Mint: Add fresh mint.",
      "Pour: Pour into glasses.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Dawa means 'medicine' in Swahili.",
      "This is Kenya's classic cocktail (also made with vodka).",
      "The honey and lemon are healing.",
      "Can be served hot or cold.",
      "Use fresh mint for best flavor."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Kenyan favorite drink",
    "better_than_store_bought": "Cafe versions often use syrup. Homemade has real honey.",
    "hidden_nutrients": "Lemons provide vitamin C. Honey has antibacterial properties.",
    "continent": "Africa",
    "slug": "dawa-honey-lemon-tonic"
  },
  {
    "id": 105,
    "name": "Kelewele (Spicy Sweet Fried Plantains)",
    "country": "Ghana",
    "category": "Snack",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 ripe plantains",
        "2 tbsp sugar",
        "1 tsp cinnamon",
        "1 tsp ginger powder",
        "Oil for frying"
      ]
    },
    "steps": [
      "Peel Plantains: Peel and slice plantains.",
      "Season: Mix sugar, cinnamon, and ginger. Toss plantain slices in the mixture.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry plantains until golden and caramelized.",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Use very ripe plantains for sweetness.",
      "The cinnamon and ginger give the Ghanaian flair.",
      "This is Ghana's favorite street snack.",
      "Serve with groundnuts.",
      "Best eaten fresh."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Ghanaian street favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade has better spice balance.",
    "hidden_nutrients": "Plantains provide potassium, vitamin A, and fiber. Cinnamon aids blood sugar regulation.",
    "continent": "Africa",
    "slug": "kelewele-spicy-sweet-fried-plantains"
  },
  {
    "id": 106,
    "name": "Groundnut Cake (Sweet Peanut Brittle)",
    "country": "Ghana",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "300g roasted peanuts",
        "200g sugar",
        "50g sesame seeds",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Dry Roast: Lightly toast peanuts and sesame seeds.",
      "Make Caramel: Heat sugar in a pan until it melts and turns golden.",
      "Add Nuts: Add peanuts and sesame seeds. Stir quickly.",
      "Pour: Pour onto a greased surface.",
      "Spread: Spread evenly.",
      "Cool: Let cool completely.",
      "Break: Break into pieces.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Work quickly; the caramel sets fast.",
      "The sesame seeds add a lovely nuttiness.",
      "This is Ghana's favorite holiday treat.",
      "Can be made with different nuts.",
      "Store in an airtight container."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Ghanaian favorite treat",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is purer.",
    "hidden_nutrients": "Peanuts provide protein and healthy fats. Sesame seeds offer calcium and iron.",
    "continent": "Africa",
    "slug": "groundnut-cake-sweet-peanut-brittle"
  },
  {
    "id": 107,
    "name": "Coconut Chips (Ghanaian)",
    "country": "Ghana",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 fresh coconut",
        "100g sugar",
        "1 tsp cinnamon"
      ]
    },
    "steps": [
      "Prepare Coconut: Crack coconut and remove meat in large pieces.",
      "Slice: Slice coconut thinly.",
      "Coat: Toss coconut slices with sugar and cinnamon.",
      "Bake: Place on a baking sheet. Bake at 160°C for 20-25 minutes, turning once.",
      "Cool: Let cool completely on the baking sheet.",
      "Store: Store in an airtight container.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "The thinner the slices, the crispier the chips.",
      "Watch carefully; they burn easily.",
      "This is a healthy Ghanaian snack.",
      "Can be flavored with ginger.",
      "Store in an airtight container."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Ghanaian healthy snack",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade is more natural.",
    "hidden_nutrients": "Coconut provides healthy fats and fiber. Cinnamon aids blood sugar regulation.",
    "continent": "Africa",
    "slug": "coconut-chips-ghanaian"
  },
  {
    "id": 108,
    "name": "Palm Wine (Sweet Non-Alcoholic)",
    "country": "Ghana",
    "category": "Beverage",
    "time": "15 minutes (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "1 litre fresh palm wine (non-alcoholic version)",
        "50g sugar (optional)",
        "Ice cubes"
      ]
    },
    "steps": [
      "Source: Obtain fresh palm wine from a local source.",
      "Sweeten: Add sugar if desired.",
      "Chill: Refrigerate until cold.",
      "Strain: Strain if there are bits.",
      "Serve: Pour over ice cubes.",
      "Serve: Enjoy fresh."
    ],
    "making_tips": [
      "Fresh palm wine is naturally sweet and slightly fizzy.",
      "It ferments quickly, so drink within a day.",
      "This is Ghana's traditional drink.",
      "The non-alcoholic version is called 'sweet wine.'",
      "Serve ice-cold."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Ghanaian traditional drink",
    "better_than_store_bought": "Bottled versions have preservatives. Fresh is incomparable.",
    "hidden_nutrients": "Palm wine contains vitamin C and B vitamins.",
    "continent": "Africa",
    "slug": "palm-wine-sweet-non-alcoholic"
  },
  {
    "id": 109,
    "name": "Sobolo (Hibiscus Ginger Drink)",
    "country": "Ghana",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried hibiscus petals",
        "1.5 litres water",
        "150g sugar",
        "1 inch ginger, grated",
        "Pineapple chunks"
      ]
    },
    "steps": [
      "Boil: Bring water and hibiscus to boil.",
      "Simmer: Simmer for 30 minutes.",
      "Add Ginger: Add ginger.",
      "Add Sugar: Add sugar and stir to dissolve.",
      "Strain: Strain through a sieve.",
      "Cool: Let cool completely.",
      "Add Pineapple: Add pineapple chunks.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Sobolo is Ghana's version of hibiscus drink.",
      "The ginger gives it a warming kick.",
      "Often served at parties and celebrations.",
      "Can be flavored with clove.",
      "Serve ice-cold."
    ],
    "health_rating": 65,
    "cultural_authenticity": "100% – Ghanaian party drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is richer and fresher.",
    "hidden_nutrients": "Hibiscus is rich in antioxidants. Ginger aids digestion.",
    "continent": "Africa",
    "slug": "sobolo-hibiscus-ginger-drink"
  },
  {
    "id": 110,
    "name": "Brukina (Sweet Fermented Millet Milk Drink)",
    "country": "Ghana",
    "category": "Beverage",
    "time": "2 hours (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "200g millet",
        "1 litre water",
        "500ml milk",
        "100g sugar",
        "1 tsp cinnamon"
      ]
    },
    "steps": [
      "Soak Millet: Soak millet in water for 6 hours.",
      "Blend: Drain and blend with fresh water until smooth.",
      "Ferment: Let ferment for 12-24 hours (optional).",
      "Strain: Strain through cheesecloth.",
      "Add Milk: Add milk, sugar, and cinnamon.",
      "Cook: Cook over medium heat for 15 minutes.",
      "Cool: Let cool.",
      "Chill: Refrigerate.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Brukina is a Northern Ghana specialty.",
      "The fermentation gives it a slightly sour taste.",
      "Can be flavored with vanilla.",
      "Serve with groundnuts.",
      "Store in the refrigerator."
    ],
    "health_rating": 75,
    "cultural_authenticity": "100% – Ghanaian Northern specialty",
    "better_than_store_bought": "Commercial versions have additives. Homemade is more authentic.",
    "hidden_nutrients": "Millet provides protein and B vitamins. Milk adds calcium.",
    "continent": "Africa",
    "slug": "brukina-sweet-fermented-millet-milk-drink"
  },
  {
    "id": 111,
    "name": "Dabo (Sweet Honey Bread)",
    "country": "Ethiopia",
    "category": "Snack",
    "time": "2 hours (includes rising)",
    "servings": "1 loaf (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "500g all-purpose flour",
        "1 tbsp instant yeast",
        "100g honey",
        "1 tsp salt",
        "100ml milk",
        "50g butter, melted",
        "1 egg"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, yeast, and salt.",
      "Add Wet: Add honey, milk, melted butter, and egg.",
      "Knead: Knead until smooth and elastic.",
      "First Rise: Cover and let rise 1 hour.",
      "Punch Down: Knock back dough.",
      "Shape: Shape into a round loaf.",
      "Second Rise: Let rise 30 minutes.",
      "Bake: Bake at 190°C for 30-35 minutes.",
      "Cool: Cool on a wire rack.",
      "Slice: Slice and serve."
    ],
    "making_tips": [
      "Dabo is Ethiopia's version of sweet bread.",
      "The honey gives it a lovely sweetness.",
      "Often served with coffee.",
      "The crust should be golden and slightly crisp.",
      "Best served warm."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Ethiopian sweet bread",
    "better_than_store_bought": "Commercial versions often have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Honey provides trace minerals. Milk adds calcium.",
    "continent": "Africa",
    "slug": "dabo-sweet-honey-bread"
  },
  {
    "id": 112,
    "name": "Sambusa (Sweet Ethiopian)",
    "country": "Ethiopia",
    "category": "Snack",
    "time": "1 hour",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry",
        "Butter, melted"
      ],
      "Filling": [
        "200g mixed dried fruit",
        "100g ground almonds",
        "50g sugar",
        "1 tsp cinnamon",
        "1 tbsp honey"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Filling: Combine dried fruit, almonds, sugar, cinnamon, and honey.",
      "Cut Phyllo: Cut phyllo into strips.",
      "Fill: Place filling on one end.",
      "Fold: Fold into triangles, brushing with butter.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and crisp.",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Sweet sambusas are an Ethiopian specialty.",
      "Can also be baked instead of fried.",
      "Often served during celebrations.",
      "The filling should be moist but not wet.",
      "Serve with honey drizzle."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Ethiopian sweet pastry",
    "better_than_store_bought": "Commercial versions can be dry. Homemade has a moist filling.",
    "hidden_nutrients": "Dried fruits provide iron and fiber. Almonds offer vitamin E.",
    "continent": "Africa",
    "slug": "sambusa-sweet-ethiopian"
  },
  {
    "id": 113,
    "name": "Gofio (Roasted Barley and Honey Balls)",
    "country": "Ethiopia",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "15 balls",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "300g barley flour",
        "100g honey",
        "50g butter, melted",
        "1 tsp cinnamon"
      ]
    },
    "steps": [
      "Toast Flour: Toast barley flour in a dry pan until golden (5-7 minutes).",
      "Combine: Mix toasted flour with cinnamon.",
      "Add Honey: Add honey and melted butter. Mix to form a paste.",
      "Shape: Roll into small balls.",
      "Cool: Let cool completely.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Gofio is an Ethiopian energy snack.",
      "The barley flour must be toasted for the nutty flavor.",
      "Can be rolled in coconut.",
      "Often eaten with coffee.",
      "Store in an airtight container."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Ethiopian energy snack",
    "better_than_store_bought": "Commercial versions often use cheap honey. Homemade has pure honey.",
    "hidden_nutrients": "Barley provides fiber and B vitamins. Honey has antibacterial properties.",
    "continent": "Africa",
    "slug": "gofio-roasted-barley-and-honey-balls"
  },
  {
    "id": 114,
    "name": "Tihlo (Roasted Barley Snack with Honey)",
    "country": "Ethiopia",
    "category": "Snack",
    "time": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "300g roasted barley flour",
        "100g honey",
        "1 tsp cardamom"
      ]
    },
    "steps": [
      "Combine: Mix roasted barley flour and cardamom.",
      "Add Honey: Add honey gradually, mixing until it forms a thick paste.",
      "Shape: Roll into small bite-sized balls.",
      "Cool: Let cool.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Tihlo is an Ethiopian favorite.",
      "The cardamom adds a lovely warmth.",
      "Often eaten as a snack with coffee.",
      "Can be made with different grains.",
      "Store in an airtight container."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Ethiopian traditional snack",
    "better_than_store_bought": "Commercial versions often have artificial flavors. Homemade is purer.",
    "hidden_nutrients": "Barley provides fiber and minerals. Cardamom aids digestion.",
    "continent": "Africa",
    "slug": "tihlo-roasted-barley-snack-with-honey"
  },
  {
    "id": 115,
    "name": "Kolo (Roasted Barley and Chickpea Snack)",
    "country": "Ethiopia",
    "category": "Snack",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g barley",
        "100g chickpeas",
        "50g sugar",
        "1 tsp salt"
      ]
    },
    "steps": [
      "Soak Chickpeas: Soak chickpeas overnight if raw.",
      "Roast: In a dry pan, roast barley and chickpeas separately until golden and fragrant.",
      "Cool: Let cool.",
      "Season: Toss with sugar and salt.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Kolo is Ethiopia's favorite snack.",
      "Can be made with other grains and legumes.",
      "Often served with coffee.",
      "The roasting brings out the nutty flavors.",
      "Store in an airtight container."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Ethiopian favorite snack",
    "better_than_store_bought": "Commercial versions can be stale. Homemade is fresh and crunchy.",
    "hidden_nutrients": "Barley and chickpeas provide protein and fiber. Chickpeas are rich in iron.",
    "continent": "Africa",
    "slug": "kolo-roasted-barley-and-chickpea-snack"
  },
  {
    "id": 116,
    "name": "Tej (Ethiopian Honey Wine - Non-Alcoholic)",
    "country": "Ethiopia",
    "category": "Beverage",
    "time": "15 minutes (plus resting)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml water",
        "100g honey",
        "1 cinnamon stick",
        "1 tsp cardamom",
        "Lemon slices"
      ]
    },
    "steps": [
      "Boil: Bring water to boil.",
      "Add Spices: Add cinnamon and cardamom.",
      "Simmer: Simmer for 10 minutes.",
      "Strain: Strain.",
      "Add Honey: Add honey and stir to dissolve.",
      "Cool: Let cool.",
      "Chill: Refrigerate.",
      "Serve: Serve chilled with lemon slices."
    ],
    "making_tips": [
      "Traditional tej is fermented honey wine.",
      "This non-alcoholic version is spiced tea with honey.",
      "It's Ethiopia's signature drink.",
      "Often served in a flask (berele).",
      "The cinnamon and cardamom are essential."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Ethiopia's signature drink",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade has pure honey.",
    "hidden_nutrients": "Honey provides antioxidants. Cinnamon and cardamom have health benefits.",
    "continent": "Africa",
    "slug": "tej-ethiopian-honey-wine-non-alcoholic"
  },
  {
    "id": 117,
    "name": "Ethiopian Coffee (Sweetened)",
    "country": "Ethiopia",
    "category": "Beverage",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "50g Ethiopian coffee beans",
        "500ml water",
        "Sugar to taste"
      ]
    },
    "steps": [
      "Roast: Roast coffee beans until dark (or use pre-roasted).",
      "Grind: Grind beans to medium-fine grind.",
      "Boil: Bring water to boil in a jebena (traditional pot).",
      "Add Coffee: Add coffee grounds. Stir.",
      "Simmer: Simmer for 10-15 minutes.",
      "Pour: Pour into cups.",
      "Sweeten: Add sugar to taste.",
      "Serve: Serve in small cups."
    ],
    "making_tips": [
      "Ethiopia is the birthplace of coffee.",
      "Coffee ceremonies are a social ritual.",
      "Add sugar generously—it's how it's traditionally served.",
      "The flavor is rich, earthy, and complex.",
      "Serve with popcorn."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Ethiopia's gift to the world",
    "better_than_store_bought": "Cafe versions can't match the ceremony. Homemade has authentic Ethiopian flavor.",
    "hidden_nutrients": "Coffee provides antioxidants. It may have various health benefits.",
    "continent": "Africa",
    "slug": "ethiopian-coffee-sweetened"
  },
  {
    "id": 118,
    "name": "Avocado Juice (Ethiopian)",
    "country": "Ethiopia",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 ripe avocados",
        "500ml milk",
        "4 tbsp sugar",
        "1 lime",
        "Ice cubes"
      ]
    },
    "steps": [
      "Prepare Avocados: Peel and pit avocados.",
      "Blend: In a blender, combine avocado, milk, sugar, and lime juice.",
      "Add Ice: Add ice cubes.",
      "Blend: Blend until smooth.",
      "Pour: Pour into glasses.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "This is a popular Ethiopian café drink.",
      "The lime prevents oxidation.",
      "Use very ripe avocados for creaminess.",
      "Chill the glasses for the best experience.",
      "Serve immediately."
    ],
    "health_rating": 75,
    "cultural_authenticity": "100% – Ethiopian café favorite",
    "better_than_store_bought": "Cafe versions often have too much sugar. Homemade has better balance.",
    "hidden_nutrients": "Avocado provides healthy fats and potassium. Milk adds calcium.",
    "continent": "Africa",
    "slug": "avocado-juice-ethiopian"
  },
  {
    "id": 119,
    "name": "Kashata (Coconut and Peanut Candy)",
    "country": "Tanzania",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "200g desiccated coconut",
        "200g roasted peanuts",
        "200g sugar",
        "100ml water",
        "1 tsp cardamom"
      ]
    },
    "steps": [
      "Toast Coconut: Lightly toast coconut.",
      "Crush Peanuts: Roughly crush peanuts.",
      "Make Syrup: Heat sugar and water until it reaches soft ball stage.",
      "Add: Add coconut, peanuts, and cardamom. Stir quickly.",
      "Press: Press into a greased pan.",
      "Cool: Let cool completely.",
      "Cut: Cut into squares.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Kashata is East Africa's favorite sweet.",
      "Work quickly; it sets fast.",
      "Can be rolled into balls.",
      "The cardamom gives it a lovely flavor.",
      "Store in an airtight container."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – East African favorite sweet",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is purer.",
    "hidden_nutrients": "Coconut provides healthy fats. Peanuts offer protein and vitamin E.",
    "continent": "Africa",
    "slug": "kashata-coconut-and-peanut-candy"
  },
  {
    "id": 120,
    "name": "Maandazi (Swahili Sweet Doughnuts)",
    "country": "Tanzania",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "100g sugar",
        "1 tsp yeast",
        "½ tsp cardamom",
        "200ml coconut milk",
        "2 tbsp coconut oil"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix Dry: Combine flour, sugar, yeast, and cardamom.",
      "Add Wet: Add coconut milk and oil. Mix to dough.",
      "Knead: Knead until smooth.",
      "First Rise: Cover and let rise 1 hour.",
      "Punch Down: Knock back dough.",
      "Roll: Roll dough and cut into triangles.",
      "Second Rise: Let rise 15 minutes.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden and puffed.",
      "Drain: Drain on paper towels.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Maandazi is the Swahili word for doughnuts.",
      "The triangular shape is traditional.",
      "Often served with chai.",
      "The dough should be soft for pillowy texture.",
      "Best served fresh."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Swahili favorite snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Cardamom aids digestion.",
    "continent": "Africa",
    "slug": "maandazi-swahili-sweet-doughnuts"
  },
  {
    "id": 121,
    "name": "Vibibi (Fermented Rice Cakes)",
    "country": "Tanzania",
    "category": "Snack",
    "time": "2 hours (includes fermentation)",
    "servings": "12 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "300g rice flour",
        "150g coconut milk",
        "100g sugar",
        "1 tsp yeast",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Mix: Combine all ingredients to form a smooth batter.",
      "Ferment: Cover and let ferment for 1-2 hours.",
      "Heat Pan: Heat a small round pan.",
      "Grease: Lightly grease.",
      "Pour: Pour batter into the pan.",
      "Cook: Cover and cook until bubbles form on top.",
      "Flip: Flip and cook other side.",
      "Remove: Remove from pan.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Vibibi is a traditional Swahili snack.",
      "The fermentation gives it a slight tang.",
      "Can be served with coconut.",
      "The texture should be soft and spongy.",
      "Best served warm."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Swahili traditional snack",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is more authentic.",
    "hidden_nutrients": "Rice flour is gluten-free. Coconut milk provides healthy fats.",
    "continent": "Africa",
    "slug": "vibibi-fermented-rice-cakes"
  },
  {
    "id": 122,
    "name": "Kasuku (Sweet Banana Bread)",
    "country": "Tanzania",
    "category": "Snack",
    "time": "1 hour",
    "servings": "1 loaf (8 slices)",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "3 ripe bananas, mashed",
        "200g all-purpose flour",
        "100g sugar",
        "50g desiccated coconut",
        "1 tsp baking powder",
        "2 eggs",
        "100ml coconut oil"
      ]
    },
    "steps": [
      "Preheat: Preheat oven to 180°C.",
      "Mash Bananas: Mash bananas until smooth.",
      "Combine: Mix mashed bananas with sugar, coconut, baking powder, eggs, and oil.",
      "Add Flour: Gradually add flour. Mix until just combined.",
      "Pour: Pour into a greased loaf pan.",
      "Bake: Bake for 40-45 minutes until a toothpick comes out clean.",
      "Cool: Cool in the pan.",
      "Remove: Remove from pan.",
      "Slice: Slice and serve."
    ],
    "making_tips": [
      "Use very ripe bananas for sweetness.",
      "The coconut gives it a Tanzanian twist.",
      "This is a popular afternoon snack.",
      "Can be served with tea.",
      "Store in an airtight container."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Tanzanian banana bread",
    "better_than_store_bought": "Commercial versions often have preservatives. Homemade is more natural.",
    "hidden_nutrients": "Bananas provide potassium. Coconut adds healthy fats.",
    "continent": "Africa",
    "slug": "kasuku-sweet-banana-bread"
  },
  {
    "id": 123,
    "name": "Mkate wa Kumimina (Steamed Sweet Cornbread)",
    "country": "Tanzania",
    "category": "Snack",
    "time": "1 hour",
    "servings": "1 cake (8 slices)",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Batter": [
        "250g cornmeal",
        "100g sugar",
        "200ml coconut milk",
        "2 eggs",
        "1 tsp baking powder",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Mix Dry: Combine cornmeal, sugar, baking powder, and salt.",
      "Add Wet: Add coconut milk and eggs. Mix well.",
      "Prepare Steamer: Grease a cake pan.",
      "Pour: Pour batter into the pan.",
      "Steam: Steam for 40-45 minutes until cooked through.",
      "Cool: Cool in the pan.",
      "Remove: Remove from pan.",
      "Slice: Slice and serve."
    ],
    "making_tips": [
      "Steaming gives this cake its moist texture.",
      "This is a Tanzanian breakfast favorite.",
      "Can be baked instead of steamed.",
      "Serve with tea or coffee.",
      "Store in the refrigerator."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Tanzanian breakfast favorite",
    "better_than_store_bought": "Commercial versions can be dry. Homemade is moist and tender.",
    "hidden_nutrients": "Cornmeal provides fiber and B vitamins. Coconut milk adds healthy fats.",
    "continent": "Africa",
    "slug": "mkate-wa-kumimina-steamed-sweet-cornbread"
  },
  {
    "id": 124,
    "name": "Tanga Tangawizi (Spiced Ginger Soda)",
    "country": "Tanzania",
    "category": "Beverage",
    "time": "20 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 inch ginger, grated",
        "1 litre soda water",
        "100g sugar",
        "1 lime",
        "Ice cubes"
      ]
    },
    "steps": [
      "Make Syrup: Combine ginger, sugar, and 100ml water. Heat until sugar dissolves.",
      "Strain: Strain out ginger.",
      "Cool: Let syrup cool.",
      "Combine: In a pitcher, combine syrup and soda water.",
      "Add Lime: Add lime juice.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour over ice cubes.",
      "Serve: Enjoy chilled."
    ],
    "making_tips": [
      "Tangawizi is Swahili for ginger.",
      "This is Tanzania's signature soda.",
      "Adjust sweetness to taste.",
      "Can be made with fresh ginger for maximum flavor.",
      "Serve ice-cold."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Tanzanian signature soda",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Ginger aids digestion. Lime provides vitamin C.",
    "continent": "Africa",
    "slug": "tanga-tangawizi-spiced-ginger-soda"
  },
  {
    "id": 125,
    "name": "Madafu (Fresh Young Coconut Water)",
    "country": "Tanzania",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 young coconuts",
        "Ice cubes"
      ]
    },
    "steps": [
      "Open Coconuts: Carefully open young coconuts.",
      "Drain: Drain coconut water into a pitcher.",
      "Strain: Strain if desired.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour into glasses.",
      "Add Ice: Add ice cubes.",
      "Serve: Enjoy fresh."
    ],
    "making_tips": [
      "Young coconuts have the sweetest water.",
      "Madafu is the Swahili word for coconut water.",
      "This is nature's sports drink.",
      "No sugar needed—it's naturally sweet.",
      "Drink fresh for the best flavor."
    ],
    "health_rating": 90,
    "cultural_authenticity": "100% – Tanzania's natural drink",
    "better_than_store_bought": "Bottled coconut water has preservatives. Fresh is incomparable.",
    "hidden_nutrients": "Rich in potassium and electrolytes. Low in calories.",
    "continent": "Africa",
    "slug": "madafu-fresh-young-coconut-water"
  },
  {
    "id": 126,
    "name": "Tamarind Juice (Tanzanian)",
    "country": "Tanzania",
    "category": "Beverage",
    "time": "30 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g tamarind paste",
        "1 litre water",
        "100g sugar",
        "1 tsp ginger (optional)"
      ]
    },
    "steps": [
      "Soak: Soak tamarind paste in water for 15 minutes.",
      "Strain: Strain through a sieve to remove seeds and fibers.",
      "Add Sugar: Add sugar and stir to dissolve.",
      "Add Ginger: Add ginger if desired.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Tamarind juice is popular across East Africa.",
      "The sweet-sour balance is key.",
      "Can be flavored with lime.",
      "Serve ice-cold.",
      "Keep in the refrigerator."
    ],
    "health_rating": 65,
    "cultural_authenticity": "100% – East African favorite drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Tamarind provides iron, potassium, and magnesium.",
    "continent": "Africa",
    "slug": "tamarind-juice-tanzanian"
  },
  {
    "id": 127,
    "name": "Thiakry (Sweet Millet Porridge)",
    "country": "Senegal",
    "category": "Snack",
    "time": "1 hour (plus soaking)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Porridge": [
        "300g millet",
        "500ml milk",
        "200g yogurt",
        "100g sugar"
      ],
      "Toppings": [
        "Fresh fruit",
        "Groundnuts"
      ]
    },
    "steps": [
      "Soak Millet: Soak millet for 2 hours.",
      "Cook: Cook millet in water until soft.",
      "Cool: Let cool completely.",
      "Mix: Add milk, yogurt, and sugar. Stir well.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve topped with fruit and groundnuts."
    ],
    "making_tips": [
      "Thiakry is Senegal's favorite dessert.",
      "The yogurt gives a lovely tang.",
      "Can be made with other grains.",
      "Serve ice-cold.",
      "Traditionally eaten with a spoon."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Senegalese favorite dessert",
    "better_than_store_bought": "Commercial versions often have additives. Homemade is more authentic.",
    "hidden_nutrients": "Millet provides protein and B vitamins. Yogurt offers probiotics and calcium.",
    "continent": "Africa",
    "slug": "thiakry-sweet-millet-porridge"
  },
  {
    "id": 128,
    "name": "Ngalakh (Millet and Peanut Dessert)",
    "country": "Senegal",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "200g millet",
        "200g peanut butter",
        "100g sugar",
        "500ml milk",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Cook Millet: Cook millet in water until soft.",
      "Mix: In a bowl, combine peanut butter, sugar, salt, and milk.",
      "Stir: Stir until smooth.",
      "Add Millet: Add cooked millet. Mix well.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Ngalakh is a Senegalese specialty.",
      "The peanut butter gives it richness.",
      "Can be made with different nuts.",
      "Serve with fruit.",
      "Store in the refrigerator."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Senegalese traditional dessert",
    "better_than_store_bought": "Commercial versions have additives. Homemade is purer.",
    "hidden_nutrients": "Millet provides fiber and B vitamins. Peanut butter offers protein and healthy fats.",
    "continent": "Africa",
    "slug": "ngalakh-millet-and-peanut-dessert"
  },
  {
    "id": 129,
    "name": "Beignets de Banane (Sweet Banana Fritters)",
    "country": "Senegal",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "12 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "50g sugar",
        "1 tsp baking powder",
        "200ml milk",
        "1 egg"
      ],
      "Bananas": [
        "4 ripe bananas"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flour, sugar, and baking powder. Add milk and egg.",
      "Slice Bananas: Peel and slice bananas.",
      "Heat Oil: Heat oil to 170°C.",
      "Dip: Dip banana slices in batter.",
      "Fry: Fry until golden.",
      "Drain: Drain on paper towels.",
      "Dust: Dust with powdered sugar.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "These are Senegal's favorite fritters.",
      "Use ripe bananas for sweetness.",
      "The batter should be thick.",
      "Serve with honey or syrup.",
      "Best served fresh."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Senegalese street snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Africa",
    "slug": "beignets-de-banane-sweet-banana-fritters"
  },
  {
    "id": 130,
    "name": "Gateau de Riz (Sweet Rice Cakes)",
    "country": "Senegal",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Batter": [
        "200g rice flour",
        "100g sugar",
        "200ml coconut milk",
        "2 eggs",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Preheat: Preheat oven to 180°C.",
      "Mix: Combine rice flour, sugar, coconut milk, eggs, and vanilla.",
      "Pour: Pour into a greased cake pan.",
      "Bake: Bake for 35-40 minutes.",
      "Cool: Cool in the pan.",
      "Cut: Cut into squares.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Gateau de riz is Senegal's rice cake.",
      "The coconut gives it a lovely flavor.",
      "Can be made as mini cakes.",
      "Serve with tea.",
      "Store in an airtight container."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Senegalese rice cake",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade is more natural.",
    "hidden_nutrients": "Rice flour is gluten-free. Coconut milk provides healthy fats.",
    "continent": "Africa",
    "slug": "gateau-de-riz-sweet-rice-cakes"
  },
  {
    "id": 131,
    "name": "Mankanya (Sweet Fried Dough)",
    "country": "Senegal",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "50g sugar",
        "1 tsp yeast",
        "200ml water",
        "Sesame seeds"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, sugar, yeast, and water.",
      "Knead: Knead until smooth.",
      "Rest: Rest 30 minutes.",
      "Shape: Roll into balls and coat with sesame seeds.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry until golden.",
      "Drain: Drain on paper towels.",
      "Cool: Cool slightly.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Mankanya is a Senegalese street snack.",
      "The sesame seeds give a lovely crunch.",
      "Can be flavored with vanilla.",
      "Best served fresh.",
      "Store in an airtight container."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Senegalese street favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "Sesame seeds provide calcium and iron.",
    "continent": "Africa",
    "slug": "mankanya-sweet-fried-dough"
  },
  {
    "id": 132,
    "name": "Bissap (Hibiscus and Ginger Drink)",
    "country": "Senegal",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried hibiscus petals",
        "1.5 litres water",
        "150g sugar",
        "1 inch ginger, grated"
      ]
    },
    "steps": [
      "Boil: Bring water and hibiscus to boil.",
      "Simmer: Simmer for 30 minutes.",
      "Add Ginger: Add ginger.",
      "Add Sugar: Add sugar and stir to dissolve.",
      "Strain: Strain through a sieve.",
      "Cool: Let cool completely.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Bissap is Senegal's national drink.",
      "The ginger gives it a warming kick.",
      "Often served at celebrations.",
      "Can be flavored with mint.",
      "Serve ice-cold."
    ],
    "health_rating": 65,
    "cultural_authenticity": "100% – Senegal's national drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is richer.",
    "hidden_nutrients": "Hibiscus is rich in antioxidants. Ginger aids digestion.",
    "continent": "Africa",
    "slug": "bissap-hibiscus-and-ginger-drink"
  },
  {
    "id": 133,
    "name": "Ginger Juice (Senegalese)",
    "country": "Senegal",
    "category": "Beverage",
    "time": "15 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 inch fresh ginger, grated",
        "1 litre water",
        "100g sugar",
        "2 limes"
      ]
    },
    "steps": [
      "Make Syrup: Combine ginger, sugar, and 100ml water. Heat until sugar dissolves.",
      "Strain: Strain out ginger.",
      "Cool: Let syrup cool.",
      "Add Lime: Add lime juice.",
      "Add Water: Add remaining water.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "This is Senegal's favorite tonic.",
      "The lime balances the ginger's heat.",
      "Adjust sweetness to taste.",
      "Can be made with honey.",
      "Serve ice-cold."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Senegalese favorite drink",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Ginger aids digestion. Lime provides vitamin C.",
    "continent": "Africa",
    "slug": "ginger-juice-senegalese"
  },
  {
    "id": 134,
    "name": "Bouye (Baobab Fruit Drink)",
    "country": "Senegal",
    "category": "Beverage",
    "time": "20 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g baobab powder",
        "1 litre water",
        "100g sugar"
      ]
    },
    "steps": [
      "Mix: Combine baobab powder and water.",
      "Strain: Strain to remove bits.",
      "Add Sugar: Add sugar and stir to dissolve.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Baobab is Senegal's superfood.",
      "The fruit has a tart, citrusy flavor.",
      "Can be flavored with vanilla.",
      "Serve with sugar to balance tartness.",
      "Store in the refrigerator."
    ],
    "health_rating": 80,
    "cultural_authenticity": "100% – Senegal's superfood drink",
    "better_than_store_bought": "Commercial versions have additives. Homemade is purer.",
    "hidden_nutrients": "Baobab is rich in vitamin C, calcium, and antioxidants.",
    "continent": "Africa",
    "slug": "bouye-baobab-fruit-drink"
  },
  {
    "id": 135,
    "name": "Nsenene (Sweetened Fried Grasshoppers)",
    "country": "Uganda",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "200g grasshoppers",
        "50g sugar",
        "Oil for frying"
      ]
    },
    "steps": [
      "Prepare: Clean grasshoppers thoroughly.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry grasshoppers until crisp.",
      "Drain: Drain on paper towels.",
      "Sprinkle: Sprinkle with sugar.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Nsenene is a Ugandan delicacy.",
      "They are harvested during the rainy season.",
      "This is a seasonal snack.",
      "Can be flavored with spices.",
      "Store in an airtight container."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Ugandan seasonal delicacy",
    "better_than_store_bought": "Commercial versions can be greasy. Homemade is fresher.",
    "hidden_nutrients": "Grasshoppers are rich in protein and minerals.",
    "continent": "Africa",
    "slug": "nsenene-sweetened-fried-grasshoppers"
  },
  {
    "id": 136,
    "name": "Kikomando (Sweetened Chapati Bits)",
    "country": "Uganda",
    "category": "Snack",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Chapati": [
        "300g all-purpose flour",
        "50g sugar",
        "1 tsp salt",
        "200ml water",
        "Oil for frying"
      ],
      "Syrup": [
        "100g honey"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, sugar, and salt. Add water to form dough.",
      "Knead: Knead until smooth. Rest 30 minutes.",
      "Roll: Roll into thin circles.",
      "Cook: Cook on a hot griddle until puffed.",
      "Cut: Cut into small bits.",
      "Heat Syrup: Warm honey.",
      "Toss: Toss chapati bits in honey.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Kikomando is a Ugandan street snack.",
      "The honey gives it sweetness.",
      "Can be flavored with spices.",
      "Best served warm.",
      "Store in an airtight container."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Ugandan street favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade is fresher.",
    "hidden_nutrients": "Honey provides trace minerals.",
    "continent": "Africa",
    "slug": "kikomando-sweetened-chapati-bits"
  },
  {
    "id": 137,
    "name": "Ntule (Sweet Banana Chips)",
    "country": "Uganda",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 green bananas",
        "100g sugar",
        "Oil for frying"
      ]
    },
    "steps": [
      "Slice Bananas: Peel and slice bananas very thinly.",
      "Heat Oil: Heat oil to 170°C.",
      "Fry: Fry slices until golden.",
      "Drain: Drain on paper towels.",
      "Sprinkle: Sprinkle with sugar.",
      "Cool: Cool completely.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Ntule is Uganda's favorite snack.",
      "The chips should be thin for crispiness.",
      "Can be made with ripe bananas for sweetness.",
      "Store in an airtight container.",
      "Best served fresh."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Ugandan favorite snack",
    "better_than_store_bought": "Commercial versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Africa",
    "slug": "ntule-sweet-banana-chips"
  },
  {
    "id": 138,
    "name": "Kawunga (Sweet Cassava Cakes)",
    "country": "Uganda",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "500g cassava",
        "100g sugar",
        "100g coconut",
        "1 tsp cinnamon"
      ]
    },
    "steps": [
      "Boil Cassava: Boil cassava until soft.",
      "Mash: Mash until smooth.",
      "Mix: Add sugar, coconut, and cinnamon.",
      "Shape: Shape into small cakes.",
      "Cook: Cook on a griddle until golden.",
      "Cool: Cool slightly.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Kawunga is a Ugandan cassava cake.",
      "The coconut gives it a lovely flavor.",
      "Can be baked instead of fried.",
      "Serve with tea.",
      "Store in the refrigerator."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Ugandan cassava cake",
    "better_than_store_bought": "Commercial versions have additives. Homemade is purer.",
    "hidden_nutrients": "Cassava provides carbohydrates. Coconut adds healthy fats.",
    "continent": "Africa",
    "slug": "kawunga-sweet-cassava-cakes"
  },
  {
    "id": 139,
    "name": "Enkoko (Sweet Groundnut Cakes)",
    "country": "Uganda",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "15 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "300g groundnuts",
        "100g sugar",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Roast Groundnuts: Roast groundnuts until golden.",
      "Grind: Grind coarsely.",
      "Mix: Add sugar and salt.",
      "Form: Shape into small cakes.",
      "Serve: Serve as a snack."
    ],
    "making_tips": [
      "Enkoko is a Ugandan groundnut snack.",
      "No cooking required after roasting.",
      "Store in an airtight container.",
      "Can be made with honey.",
      "Great with tea."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Ugandan groundnut cake",
    "better_than_store_bought": "Commercial versions have additives. Homemade is purer.",
    "hidden_nutrients": "Groundnuts provide protein, healthy fats, and vitamin E.",
    "continent": "Africa",
    "slug": "enkoko-sweet-groundnut-cakes"
  },
  {
    "id": 140,
    "name": "Omubisi (Fresh Fermented Banana Juice)",
    "country": "Uganda",
    "category": "Beverage",
    "time": "30 minutes (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "6 ripe bananas",
        "1 litre water",
        "100g sugar"
      ]
    },
    "steps": [
      "Peel Bananas: Peel and mash bananas.",
      "Mix: Add water and sugar.",
      "Ferment: Let ferment for 12-24 hours (optional).",
      "Strain: Strain through a sieve.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Omubisi is Uganda's traditional banana drink.",
      "It has a sweet, slightly tangy flavor.",
      "Can be served fresh without fermentation.",
      "This is the non-alcoholic version.",
      "Serve ice-cold."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Ugandan traditional drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is more authentic.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Africa",
    "slug": "omubisi-fresh-fermented-banana-juice"
  },
  {
    "id": 141,
    "name": "Sweet Tea (Ugandan)",
    "country": "Uganda",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 black tea bags",
        "1 litre water",
        "200ml milk",
        "100g honey",
        "1 tsp cinnamon (optional)"
      ]
    },
    "steps": [
      "Boil: Bring water to boil.",
      "Steep: Add tea bags and steep for 5 minutes.",
      "Add: Remove tea bags. Add milk, honey, and cinnamon.",
      "Heat: Heat until warm.",
      "Serve: Serve hot."
    ],
    "making_tips": [
      "Ugandan sweet tea is a comfort drink.",
      "The honey gives it a unique sweetness.",
      "Can be made with other spices.",
      "Serve with chapati or mandazi.",
      "Best served warm."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Ugandan favorite tea",
    "better_than_store_bought": "Cafe versions use sugar. Homemade uses honey.",
    "hidden_nutrients": "Black tea provides antioxidants. Honey has antibacterial properties.",
    "continent": "Africa",
    "slug": "sweet-tea-ugandan"
  },
  {
    "id": 142,
    "name": "Passion Fruit Juice (Ugandan)",
    "country": "Uganda",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "10 passion fruits",
        "500ml water",
        "100g sugar",
        "Ice cubes"
      ]
    },
    "steps": [
      "Cut Passion Fruits: Cut passion fruits in half.",
      "Scoop: Scoop out the pulp.",
      "Blend: Blend pulp with water.",
      "Strain: Strain to remove seeds.",
      "Add Sugar: Add sugar.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve over ice cubes."
    ],
    "making_tips": [
      "Passion fruit is abundant in Uganda.",
      "The seeds add texture; they can be kept in.",
      "Adjust sweetness to taste.",
      "Serve ice-cold.",
      "Store in the refrigerator."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Ugandan fresh juice",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Passion fruit provides vitamin C and vitamin A.",
    "continent": "Africa",
    "slug": "passion-fruit-juice-ugandan"
  },
  {
    "id": 1,
    "name": "Matcha Mochi",
    "country": "Japan",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes resting)",
    "servings": "12 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Mochi Dough": [
        "200g glutinous rice flour (shiratamako)",
        "50g granulated sugar",
        "300ml water",
        "2 tbsp matcha powder (ceremonial grade)",
        "Potato starch for dusting"
      ],
      "Filling": [
        "200g sweet red bean paste (anko)",
        "1 tbsp matcha powder for dusting"
      ]
    },
    "steps": [
      "Prepare Filling: Roll red bean paste into 12 small balls (about 15g each). Chill in refrigerator.",
      "Mix Dry Ingredients: Sift glutinous rice flour, sugar, and matcha powder into a microwave-safe bowl.",
      "Add Water: Gradually add water while whisking until smooth batter forms.",
      "Steam/Cook: Microwave on high for 2 minutes. Stir vigorously. Microwave another 1-2 minutes until dough becomes translucent and sticky.",
      "Knead Dough: Dust work surface with potato starch. Turn out hot dough (use wet spatula). Knead until smooth and elastic, about 5 minutes.",
      "Divide: Dust hands with starch. Divide dough into 12 equal portions.",
      "Fill: Flatten each portion into a disc. Place red bean ball in center. Wrap dough around filling, pinch to seal.",
      "Finish: Dust with additional matcha powder. Serve at room temperature."
    ],
    "making_tips": [
      "The secret to perfect mochi is patience—never rush the kneading.",
      "When the dough becomes warm to the touch and stretches without tearing, you know it's ready.",
      "Always keep your hands dusted with potato starch; it prevents sticking better than flour and won't affect the flavor.",
      "The microwave timing may vary; cook until dough becomes translucent and pulls away from the bowl sides.",
      "Chill the filling balls until firm—this makes wrapping much easier and prevents them from breaking."
    ],
    "health_rating": 65,
    "cultural_authenticity": "95% – Traditional New Year's treat",
    "better_than_store_bought": "Fresh mochi has a tender, pillowy texture that packaged versions lose within hours. The matcha flavor is more vibrant and aromatic.",
    "hidden_nutrients": "Matcha provides EGCG antioxidants, L-theanine for calm focus, and fiber from rice flour.",
    "continent": "Asia",
    "slug": "matcha-mochi"
  },
  {
    "id": 2,
    "name": "Dorayaki",
    "country": "Japan",
    "category": "Snack",
    "time": "40 minutes",
    "servings": "6 pancakes (3 sandwiches)",
    "difficulty": "Easy",
    "ingredients": {
      "Pancakes": [
        "3 large eggs",
        "100g granulated sugar",
        "1 tbsp honey",
        "180g all-purpose flour",
        "1 tsp baking powder",
        "3 tbsp water"
      ],
      "Filling": [
        "300g sweet red bean paste (tsubuan or koshian)"
      ]
    },
    "steps": [
      "Make Batter: In a bowl, whisk eggs and sugar until pale and thick. Add honey and mix.",
      "Sift Dry: Sift flour and baking powder into egg mixture. Fold gently until just combined.",
      "Add Water: Stir in water gradually until batter has ribbon-like consistency.",
      "Rest: Let batter rest 15 minutes (this makes pancakes fluffier).",
      "Cook: Heat non-stick pan over low-medium heat. Wipe with oiled paper towel. Pour ¼ cup batter per pancake.",
      "Watch Bubbles: Cook until surface bubbles start popping (2-3 minutes). Flip and cook other side 1 minute.",
      "Assemble: Spread 2 tbsp red bean paste on one pancake. Top with another pancake.",
      "Wrap: Wrap in plastic wrap for 10 minutes to let flavors meld."
    ],
    "making_tips": [
      "The honey is non-negotiable—it gives dorayaki that signature moistness and caramelized edge.",
      "Cook on the lowest heat possible; patience yields that perfect golden-brown color without burning.",
      "When you flip, the pancake should release easily; if it sticks, wait a few more seconds.",
      "The batter should flow in a ribbon-like stream when lifted with a spoon—adjust with more flour or water accordingly.",
      "Wrapping in plastic while warm traps steam and softens the pancakes, making them meld beautifully with the filling."
    ],
    "health_rating": 55,
    "cultural_authenticity": "90% – Modern version of Edo-period treat",
    "better_than_store_bought": "Factory-made versions are often dry and overly sweet. Homemade has a delicate honey perfume and custard-like interior.",
    "hidden_nutrients": "Red bean paste provides iron, magnesium, and dietary fiber. Eggs add protein and vitamin D.",
    "continent": "Asia",
    "slug": "dorayaki"
  },
  {
    "id": 3,
    "name": "Taiyaki",
    "country": "Japan",
    "category": "Snack",
    "time": "1 hour",
    "servings": "6 fish-shaped cakes",
    "difficulty": "Medium (requires mold)",
    "ingredients": {
      "Batter": [
        "200g cake flour",
        "1½ tsp baking powder",
        "50g sugar",
        "2 large eggs",
        "300ml milk",
        "1 tbsp honey",
        "1 tbsp vegetable oil"
      ],
      "Fillings": [
        "250g sweet red bean paste",
        "OR 250g custard cream",
        "OR 200g sweet potato paste"
      ]
    },
    "steps": [
      "Make Batter: Whisk eggs, milk, honey, and oil. Sift in flour, baking powder, and sugar. Mix until smooth. Rest 30 minutes.",
      "Preheat Mold: Heat taiyaki mold over medium flame. Grease both sides lightly with oil.",
      "Pour Batter: Pour batter into bottom mold, filling about ⅔ full.",
      "Add Filling: Place 2 tbsp filling in center of batter.",
      "Cover with Batter: Pour more batter over filling to cover completely.",
      "Close Mold: Close mold firmly. Cook 2-3 minutes each side, flipping twice, until golden brown.",
      "Release: Carefully open mold. Taiyaki should release easily when fully cooked.",
      "Cool: Cool on wire rack to maintain crispiness."
    ],
    "making_tips": [
      "The mold must be screaming hot before you pour the first batter.",
      "The key is the flip—you need to turn the mold over twice to ensure even cooking.",
      "If your taiyaki isn't crispy on the outside and fluffy inside, your heat is too low or you're not pouring enough batter on top of the filling.",
      "Grease the mold lightly with a brush between batches to prevent sticking.",
      "Let the batter rest—this relaxes the gluten and creates a lighter texture."
    ],
    "health_rating": 60,
    "cultural_authenticity": "95% – Iconic since Meiji era",
    "better_than_store_bought": "Fresh taiyaki has a crispy, waffle-like exterior with a steamy, soft interior that no frozen version can replicate. The custard is particularly superior when homemade.",
    "hidden_nutrients": "Red bean filling adds iron and folate. Custard version provides calcium and vitamin B12.",
    "continent": "Asia",
    "slug": "taiyaki"
  },
  {
    "id": 4,
    "name": "Castella (Kasutera)",
    "country": "Japan",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "1 loaf (8 slices)",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Main": [
        "6 large eggs, separated",
        "150g granulated sugar",
        "50g honey",
        "2 tbsp mirin (or water)",
        "120g bread flour (high protein)",
        "1 tbsp corn syrup"
      ]
    },
    "steps": [
      "Prepare Pan: Line 18x18cm square pan with parchment paper, extending above edges.",
      "Warm Honey: Microwave honey and mirin for 10 seconds until fluid.",
      "Beat Yolks: Whisk egg yolks with half the sugar until pale and thick (ribbon stage).",
      "Meringue: Beat egg whites until foamy. Gradually add remaining sugar. Beat to stiff peaks.",
      "Combine: Fold ⅓ meringue into yolk mixture to lighten. Gently fold in remaining meringue.",
      "Add Flour: Sift flour over batter in 3 additions, folding gently after each.",
      "Add Honey: Drizzle honey mixture along side of bowl. Fold in gently.",
      "Bake: Pour batter into pan. Tap pan firmly to remove bubbles. Bake at 170°C for 40-45 minutes.",
      "Cool: Invert onto rack. Cover with plastic wrap while warm (keeps moisture).",
      "Rest: Wait until next day to slice—flavor improves overnight."
    ],
    "making_tips": [
      "Real castella is all about the meringue and the overnight rest.",
      "The flour must be sifted three times—this is what makes the honeycomb texture.",
      "Never open the oven door during the first 30 minutes, or your cake will collapse.",
      "The day-old slice is always better than the fresh one.",
      "Fold the batter with a gentle hand—over-mixing deflates the meringue and creates a dense cake."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Original Portuguese recipe preserved in Nagasaki",
    "better_than_store_bought": "Commercial castella often contains additives and shortening. Traditional version has pure honey fragrance, a crisp sugar crust on bottom, and a moist, springy crumb.",
    "hidden_nutrients": "Eggs provide complete protein and choline. Honey offers trace antioxidants and minerals.",
    "continent": "Asia",
    "slug": "castella-kasutera"
  },
  {
    "id": 5,
    "name": "Kakigori",
    "country": "Japan",
    "category": "Snack",
    "time": "20 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Base": [
        "500g ice block (must be completely frozen solid)"
      ],
      "Syrups": [
        "150ml simple syrup (1:1 sugar:water)",
        "Food coloring or natural fruit purees",
        "Flavor extracts (matcha, strawberry, melon)"
      ],
      "Toppings": [
        "Sweetened condensed milk",
        "Strawberry syrup",
        "Matcha powder",
        "Sweet red beans",
        "Fresh fruit"
      ]
    },
    "steps": [
      "Make Syrups: Prepare flavored syrups (strawberry, melon, matcha, etc.) in squeeze bottles.",
      "Prepare Ice: Remove ice from freezer 5 minutes before shaving to temper.",
      "Shave Ice: Use electric shaver or manual ice shaver. Shave ice into fluffy, snow-like consistency directly into serving bowls.",
      "Form Mountain: Pile ice into a dramatic mountain shape, packing gently.",
      "Drizzle Syrups: Pour syrup over ice in your preferred pattern. Don't over-saturate.",
      "Add Toppings: Drizzle condensed milk generously. Add red beans, fruit, or matcha powder.",
      "Serve Immediately: Kakigori melts fast—serve with a spoon."
    ],
    "making_tips": [
      "The ice must be pure—use filtered water and freeze overnight.",
      "Never use ice cubes from the freezer for drinks; they melt too fast.",
      "The shaver must be sharp; dull blades create coarse ice that doesn't absorb syrup.",
      "Syrup goes on top and is absorbed as you eat, not all at once.",
      "Serve immediately in chilled bowls to slow melting."
    ],
    "health_rating": 35,
    "cultural_authenticity": "90% – Modern variations evolved from Heian-era ice treats",
    "better_than_store_bought": "Shaved at home has a fluffier, more ethereal texture than the hard, compressed ice sold at festivals. You control the sweetness and use real fruit.",
    "hidden_nutrients": "Fresh fruit toppings add vitamins. Red beans provide fiber and iron.",
    "continent": "Asia",
    "slug": "kakigori"
  },
  {
    "id": 6,
    "name": "Matcha Latte",
    "country": "Japan",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 cups",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 tsp matcha powder (ceremonial grade)",
        "120ml hot water (80°C, not boiling)",
        "400ml milk (dairy or oat/soy)",
        "2 tbsp honey or maple syrup",
        "Optional: cinnamon or vanilla"
      ]
    },
    "steps": [
      "Sift Matcha: Sift matcha powder into a bowl to remove lumps.",
      "Add Water: Pour 120ml hot water over matcha.",
      "Whisk: Use bamboo whisk (chasen) in M-shape motion until frothy (20-30 seconds).",
      "Heat Milk: Heat milk in saucepan until steaming (not boiling). Or use milk frother.",
      "Froth Milk: Froth milk until foamy and creamy.",
      "Combine: Pour matcha into cups. Add sweetener and stir.",
      "Top with Milk: Gently pour frothed milk over matcha. Use spoon to hold back foam, then top with foam.",
      "Serve: Optional dust with extra matcha powder."
    ],
    "making_tips": [
      "The water temperature is everything—never use boiling water or you'll burn the matcha, turning it bitter.",
      "Use 80°C water and whisk with conviction.",
      "The M-shape motion is not just for show; it incorporates air properly.",
      "Use ceremonial grade for drinking—culinary grade is for baking.",
      "Sift the matcha powder before whisking to eliminate lumps."
    ],
    "health_rating": 78,
    "cultural_authenticity": "85% – Modern interpretation of traditional tea",
    "better_than_store_bought": "Coffee shop versions use syrups and lower-quality matcha. Homemade has brighter color, complex umami notes, and no artificial flavors.",
    "hidden_nutrients": "Matcha contains L-theanine (promotes relaxation), EGCG (antioxidants), and vitamin C. Milk adds calcium and protein.",
    "continent": "Asia",
    "slug": "matcha-latte"
  },
  {
    "id": 7,
    "name": "Ramune",
    "country": "Japan",
    "category": "Beverage",
    "time": "30 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "200ml water",
        "150g sugar",
        "1 tsp citric acid",
        "1 tbsp lemon juice",
        "600ml carbonated water",
        "Flavorings: strawberry syrup, melon syrup, or yuzu juice",
        "Food coloring (optional)"
      ]
    },
    "steps": [
      "Make Simple Syrup: Combine water and sugar in saucepan. Heat until sugar dissolves. Cool completely.",
      "Add Citrus: Stir in citric acid and lemon juice.",
      "Add Flavor: Add your chosen flavoring (2 tbsp strawberry syrup, 1 tbsp yuzu juice, etc.).",
      "Add Color: If desired, add a drop of food coloring.",
      "Chill Syrup: Refrigerate syrup until cold.",
      "Carbonate: Pour cold syrup into glasses (about 50ml each).",
      "Top with Soda: Add carbonated water to fill. Stir gently.",
      "Serve: The traditional glass bottle with marble stopper is optional but fun! Pour carefully."
    ],
    "making_tips": [
      "The carbonation must be strong—use fresh, very cold soda water.",
      "The flavor should be sweet but not cloying; balance the sugar with enough citric acid.",
      "Always chill the syrup and soda water separately before mixing—this preserves the bubbles.",
      "The marble bottle is for show; the drink itself is what matters.",
      "Pour soda water down the side of the glass to retain carbonation."
    ],
    "health_rating": 30,
    "cultural_authenticity": "80% – Homemade version of 19th-century British-influenced soda",
    "better_than_store_bought": "Commercial ramune uses artificial sweeteners and preservatives. Homemade has bright, natural fruit flavors and customizable sweetness.",
    "hidden_nutrients": "Lemon juice provides vitamin C. Real fruit flavorings add trace nutrients.",
    "continent": "Asia",
    "slug": "ramune"
  },
  {
    "id": 8,
    "name": "Egg Tarts (Dan Tat)",
    "country": "China",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12 tarts",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "150g unsalted butter, cold",
        "50g powdered sugar",
        "1 egg yolk",
        "1 tbsp cold water"
      ],
      "Custard": [
        "150ml water",
        "100g sugar",
        "3 large eggs",
        "150ml evaporated milk",
        "1 tsp vanilla extract"
      ]
    },
    "steps": [
      "Make Pastry: Cut cold butter into flour and sugar until crumbly. Add egg yolk and water. Knead gently into dough.",
      "Chill Pastry: Wrap and refrigerate 30 minutes.",
      "Roll Pastry: Roll dough to 3mm thickness. Cut circles large enough for tart tins.",
      "Line Tins: Press pastry into greased tart tins. Chill again 15 minutes.",
      "Make Custard: Dissolve sugar in warm water. Cool. Beat eggs, milk, and vanilla. Add sugar water. Strain.",
      "Fill Tarts: Pour custard into pastry shells, leaving 2mm rim.",
      "Bake: 220°C for 12-15 minutes until custard is set and surface has charred spots.",
      "Cool: Cool in tins 5 minutes before removing."
    ],
    "making_tips": [
      "The secret to the flaky crust is keeping everything cold—use ice water if needed.",
      "The filling should be strained three times through a fine sieve for that silky texture.",
      "The charred spots on top are not a mistake; they're the mark of a perfect dan tat, achieved with very high heat.",
      "Don't overfill the shells—the custard puffs up during baking.",
      "Remove from tins while still slightly warm to prevent sticking."
    ],
    "health_rating": 45,
    "cultural_authenticity": "95% – Hong Kong classic, perfecting Portuguese inspiration",
    "better_than_store_bought": "Fresh-baked tarts have a shatteringly crisp crust and a custard that jiggles like a dream—delicacies that degrade within hours. Factory versions can't match this texture.",
    "hidden_nutrients": "Eggs provide protein and choline. Milk adds calcium and vitamin D.",
    "continent": "Asia",
    "slug": "egg-tarts-dan-tat"
  },
  {
    "id": 9,
    "name": "Tangyuan",
    "country": "China",
    "category": "Snack",
    "time": "1 hour",
    "servings": "4 servings (16 balls)",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Dough": [
        "250g glutinous rice flour",
        "200ml warm water"
      ],
      "Filling": [
        "150g black sesame seeds, toasted",
        "100g powdered sugar",
        "60g unsalted butter or lard, softened"
      ],
      "Soup": [
        "500ml water",
        "100g rock sugar",
        "5 slices ginger"
      ]
    },
    "steps": [
      "Make Filling: Grind sesame seeds to powder. Mix with sugar and butter until paste forms. Roll into 16 small balls. Chill.",
      "Make Dough: Gradually add warm water to rice flour, mixing until dough forms. Knead until smooth and elastic.",
      "Divide: Roll dough into a log. Cut into 16 pieces.",
      "Fill: Flatten each piece. Place sesame ball in center. Wrap carefully, sealing completely.",
      "Prepare Soup: In a pot, combine water, rock sugar, and ginger. Bring to boil, then simmer 10 minutes.",
      "Cook Tangyuan: Carefully drop balls into boiling water. They'll sink, then float when cooked (about 3-5 minutes).",
      "Serve: Remove with slotted spoon. Place in bowls with ginger soup.",
      "Garnish: Optional with osmanthus flowers."
    ],
    "making_tips": [
      "The dough must be smooth like a baby's cheek—if it cracks when you roll it, add a few drops more water.",
      "The filling should be frozen solid before wrapping; this makes sealing much easier.",
      "Always serve immediately—these are best hot, fresh from the pot.",
      "The chewy texture is the soul of tangyuan.",
      "Don't overcrowd the pot; cook in batches for even cooking."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Ancient Chinese festival food (Yuanxiao festival)",
    "better_than_store_bought": "Frozen tangyuan are often cracked and leak filling. Homemade has a perfectly smooth, resilient skin that yields the right chewiness.",
    "hidden_nutrients": "Sesame seeds provide calcium, iron, and healthy fats. Ginger aids digestion.",
    "continent": "Asia",
    "slug": "tangyuan"
  },
  {
    "id": 10,
    "name": "Pineapple Buns (Bo Lo Bao)",
    "country": "China",
    "category": "Snack",
    "time": "2 hours (includes rising)",
    "servings": "8 buns",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "350g bread flour",
        "50g sugar",
        "5g instant yeast",
        "1 tsp salt",
        "1 large egg",
        "180ml warm milk",
        "40g unsalted butter"
      ],
      "Topping": [
        "100g cake flour",
        "80g powdered sugar",
        "60g unsalted butter, cold",
        "1 egg yolk",
        "½ tsp baking powder",
        "½ tsp vanilla"
      ]
    },
    "steps": [
      "Make Dough: Combine flour, sugar, yeast, salt. Add egg and milk. Mix to dough.",
      "Knead: Knead 10 minutes until smooth. Add butter and knead 10 more minutes until elastic.",
      "First Rise: Cover and let rise 1 hour until doubled.",
      "Make Topping: Cut butter into flour, sugar, baking powder until crumbly. Add egg yolk and vanilla. Press into dough. Chill 15 minutes.",
      "Shape Buns: Punch down dough. Divide into 8 balls.",
      "Add Topping: Divide topping into 8 portions. Flatten each into disc. Place over each dough ball, pressing down.",
      "Score: Use knife to score crisscross pattern on topping.",
      "Second Rise: Proof 45 minutes.",
      "Bake: Egg wash buns. 190°C for 15-18 minutes until golden."
    ],
    "making_tips": [
      "The topping must be cold when you put it on—this creates the signature cracking pattern.",
      "Don't over-prove the dough; it shouldn't double in size during the second rise.",
      "These are best eaten fresh from the oven with a thick slab of butter inside—it melts into the bun's crumb, perfection.",
      "Score the topping deeply enough for dramatic cracks but not so deep you cut through to the dough.",
      "Brush with egg wash for that glossy, golden finish."
    ],
    "health_rating": 40,
    "cultural_authenticity": "90% – Hong Kong classic, no pineapple involved",
    "better_than_store_bought": "Commercial versions have dough conditioners and inferior butter. Homemade has a fragrant, milky interior and crispy, buttery topping.",
    "hidden_nutrients": "Milk adds calcium. Butter provides fat-soluble vitamins A and D.",
    "continent": "Asia",
    "slug": "pineapple-buns-bo-lo-bao"
  },
  {
    "id": 11,
    "name": "Sesame Balls (Jian Dui)",
    "country": "China",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 balls",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g glutinous rice flour",
        "50g sugar",
        "150ml warm water",
        "1 tbsp vegetable oil"
      ],
      "Filling": [
        "150g sweet red bean paste"
      ],
      "Coating": [
        "100g white sesame seeds"
      ],
      "Frying": [
        "Vegetable oil for deep frying"
      ]
    },
    "steps": [
      "Make Dough: Mix rice flour and sugar. Gradually add warm water and oil. Knead until smooth dough forms.",
      "Rest Dough: Cover and rest 15 minutes.",
      "Prepare Filling: Roll red bean paste into 12 small balls.",
      "Form Balls: Divide dough into 12 pieces. Flatten each into disc.",
      "Fill: Place bean paste in center. Wrap and seal, roll into smooth ball.",
      "Moisten: Lightly wet each ball with water.",
      "Coat: Roll in sesame seeds, pressing gently so seeds stick.",
      "Fry: Heat oil to 160°C. Fry balls in batches, 4-5 minutes, turning constantly.",
      "Press: Gently press balls against side of wok while frying—this helps them expand.",
      "Finish: They're done when golden and floating. Drain on paper towel."
    ],
    "making_tips": [
      "The oil temperature control is everything—too hot and the outside burns before the inside cooks; too cool and they absorb oil.",
      "Press them gently while frying; this creates the hollow center that makes them light and airy.",
      "The sesame seeds should be raw; they toast during frying.",
      "Keep the filling balls small and uniform for even cooking.",
      "Drain on paper towels to remove excess oil immediately after frying."
    ],
    "health_rating": 35,
    "cultural_authenticity": "95% – Classic dim sum item, over 1,000 years old",
    "better_than_store_bought": "Restaurant versions often use low-quality oil and are greasy. Homemade has a perfectly crisp exterior, chewy interior, and no oily aftertaste.",
    "hidden_nutrients": "Sesame seeds provide calcium, zinc, and healthy fats.",
    "continent": "Asia",
    "slug": "sesame-balls-jian-dui"
  },
  {
    "id": 12,
    "name": "Mooncakes",
    "country": "China",
    "category": "Snack",
    "time": "3 hours (includes chilling)",
    "servings": "12 mooncakes",
    "difficulty": "Hard",
    "ingredients": {
      "Skin": [
        "300g golden syrup",
        "80g vegetable oil",
        "1 tsp lye water (kansui)",
        "400g cake flour"
      ],
      "Filling": [
        "500g lotus seed paste (or red bean paste)",
        "6 salted egg yolks, halved"
      ],
      "Egg Wash": [
        "1 egg yolk",
        "1 tbsp water"
      ]
    },
    "steps": [
      "Make Skin: Mix golden syrup, oil, and lye water. Add flour. Knead gently just until combined. Rest 2 hours.",
      "Prepare Filling: Divide lotus paste into 12 portions. Flatten each, place half egg yolk in center, wrap into ball.",
      "Divide Skin: Roll skin into 12 portions.",
      "Wrap: Flatten skin portion. Place filling in center. Gently push skin up and seal completely.",
      "Shape: Dust mooncake mold with flour. Press filled ball into mold. Knock out onto baking sheet.",
      "Bake (First): 190°C for 10 minutes.",
      "Egg Wash: Remove and brush with egg wash.",
      "Bake (Second): Return and bake 10-12 minutes until golden.",
      "Cool: Let cool completely on rack.",
      "Rest: Mooncakes need 2-3 days to 'return oil' before serving."
    ],
    "making_tips": [
      "The lye water is essential—it gives the skin its characteristic color and texture.",
      "Resting the dough is non-negotiable; it prevents shrinking during baking.",
      "Never skip the 'return oil' period—this is when the mooncake becomes soft and aromatic, the oils redistributing throughout.",
      "Good mooncakes are always made in advance.",
      "Dust the mold with flour between each pressing to prevent sticking."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Mid-Autumn Festival icon",
    "better_than_store_bought": "Store-bought mooncakes are often dry and use artificial lotus paste. Homemade has a tender, melting skin and rich, authentic filling.",
    "hidden_nutrients": "Lotus seed paste contains magnesium, potassium, and B vitamins.",
    "continent": "Asia",
    "slug": "mooncakes"
  },
  {
    "id": 13,
    "name": "Bubble Tea (Boba Milk Tea)",
    "country": "China",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "2 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Tapioca Pearls": [
        "100g tapioca starch (or quick-cooking boba)",
        "80ml boiling water",
        "50g brown sugar"
      ],
      "Tea": [
        "4 black tea bags (or 2 tbsp loose leaf)",
        "400ml boiling water",
        "200ml milk",
        "50ml brown sugar syrup"
      ]
    },
    "steps": [
      "Make Tapioca Pearls: If making from scratch, mix boiling water with brown sugar, add tapioca starch gradually to form dough. Roll into small balls.",
      "Cook Boba: Boil water. Add boba and cook until they float and become translucent (20-30 minutes).",
      "Sugar Soak: Drain boba, cover with brown sugar syrup, and let soak 15 minutes.",
      "Brew Tea: Steep tea bags in boiling water for 5 minutes. Remove bags.",
      "Sweeten Tea: Add brown sugar syrup to taste.",
      "Assemble: Place soaked boba in glass. Add ice cubes.",
      "Add Tea: Pour in tea, leaving room for milk.",
      "Add Milk: Top with milk. Stir well.",
      "Serve: Insert thick straw for drinking with boba."
    ],
    "making_tips": [
      "The boba must be perfectly chewy—not too soft, not too hard.",
      "Always let them rest in sugar syrup after cooking; this is what gives them sweetness.",
      "The tea should be strong enough to taste through the milk and sugar.",
      "Never use boiling water for the tea—it makes it bitter. 85°C is perfect.",
      "Cook the boba in plenty of water to prevent sticking."
    ],
    "health_rating": 25,
    "cultural_authenticity": "90% – Taiwanese invention from the 1980s",
    "better_than_store_bought": "Commercial versions use powdered milk and artificial sweeteners. Homemade uses real tea and high-quality milk, with boba that's perfectly cooked.",
    "hidden_nutrients": "Black tea provides antioxidants. Milk adds calcium. Tapioca offers carbohydrates for energy.",
    "continent": "Asia",
    "slug": "bubble-tea-boba-milk-tea"
  },
  {
    "id": 14,
    "name": "Soy Milk (Doujiang)",
    "country": "China",
    "category": "Beverage",
    "time": "12 hours (soaking + preparation)",
    "servings": "4 cups",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "200g dried soybeans",
        "1.5 litres water (for blending)",
        "Sugar or honey to taste (optional)",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Soak Soybeans: Soak soybeans in plenty of water overnight (at least 8 hours). Drain and rinse.",
      "Blend: Combine soaked beans and 1.5 litres water in blender. Blend until very smooth (3-4 minutes).",
      "Strain: Pour mixture through cheesecloth or nut milk bag. Squeeze firmly to extract all liquid.",
      "Boil: Transfer milk to large pot. Bring to boil over medium heat, stirring constantly to prevent scorching.",
      "Simmer: Reduce heat and simmer 15 minutes. Skim off foam.",
      "Season: Add sugar and salt to taste.",
      "Serve: Hot with breakfast, or chilled."
    ],
    "making_tips": [
      "The boiling is non-negotiable—raw soy milk contains toxins that must be destroyed.",
      "Stir constantly at the bottom; it scorches easily.",
      "The soybean-to-water ratio is crucial; too thin and it's watery, too thick and it's paste.",
      "Always add a pinch of salt—it enhances sweetness.",
      "Skim the foam that rises during boiling for a smoother milk."
    ],
    "health_rating": 85,
    "cultural_authenticity": "100% – Classic Chinese breakfast staple",
    "better_than_store_bought": "Homemade has a fresh, nutty flavor and creamy texture that packaged versions lose through processing and preservatives.",
    "hidden_nutrients": "Soy milk is rich in complete protein, calcium (especially fortified), iron, and isoflavones (antioxidants).",
    "continent": "Asia",
    "slug": "soy-milk-doujiang"
  },
  {
    "id": 15,
    "name": "Leung Cha (Herbal Tea)",
    "country": "China",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 cups",
    "difficulty": "Easy",
    "ingredients": {
      "Herbs": [
        "15g chrysanthemum flowers",
        "10g honeysuckle flowers",
        "5g licorice root",
        "5g dried tangerine peel",
        "5g dried hawthorn berries"
      ],
      "Other": [
        "1.5 litres water",
        "Rock sugar to taste"
      ]
    },
    "steps": [
      "Rinse Herbs: Briefly rinse all herbs under cold water.",
      "Combine: Place herbs in a pot. Add water.",
      "Boil: Bring to boil, then reduce to simmer.",
      "Simmer: Cook for 45 minutes, covered.",
      "Add Sugar: Add rock sugar during last 10 minutes.",
      "Strain: Strain into pitcher.",
      "Chill: Serve hot or chilled over ice."
    ],
    "making_tips": [
      "The balance is everything—bitter herbs are always balanced with something sweet.",
      "The longer you simmer, the more bitterness extracts; 45 minutes is optimal.",
      "Use rock sugar, not white sugar—it has a smoother sweetness.",
      "This drink should be slightly bitter with a sweet aftertaste; that's how you know it's working.",
      "Store in the refrigerator and consume within 2 days."
    ],
    "health_rating": 80,
    "cultural_authenticity": "100% – Centuries-old medicinal tea tradition",
    "better_than_store_bought": "Bottled versions are loaded with sugar. Homemade has authentic bitter-sweet balance and real medicinal properties.",
    "hidden_nutrients": "Herbs provide various bioactive compounds, antioxidants, and trace minerals.",
    "continent": "Asia",
    "slug": "leung-cha-herbal-tea"
  },
  {
    "id": 16,
    "name": "Gulab Jamun",
    "country": "India",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "12-15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g khoya (milk solids) or milk powder",
        "50g all-purpose flour (maida)",
        "½ tsp baking soda",
        "2 tbsp milk",
        "1 tbsp ghee"
      ],
      "Sugar Syrup": [
        "400g sugar",
        "400ml water",
        "4 cardamom pods, crushed",
        "1 tsp rose water",
        "Saffron strands (optional)"
      ],
      "Frying": [
        "Ghee or vegetable oil"
      ]
    },
    "steps": [
      "Make Syrup: Combine sugar, water, and cardamom. Boil until sticky (1-string consistency). Add rose water and saffron. Keep warm.",
      "Make Dough: Mix khoya, flour, and baking soda. Rub together until crumbly.",
      "Add Milk: Add milk gradually, kneading into soft, smooth dough. Don't over-knead.",
      "Rest: Cover and rest 10 minutes.",
      "Shape: Divide dough into small balls (about 20g each). Roll perfectly smooth without cracks.",
      "Heat Oil: Heat ghee/oil to 150°C (medium-low).",
      "Fry: Gently drop balls in oil. Fry, moving continuously to ensure even color.",
      "Golden Brown: Fry until deep golden brown (5-7 minutes), turning frequently.",
      "Soak: Remove from oil and drop directly into warm syrup.",
      "Rest: Let soak at least 30 minutes before serving."
    ],
    "making_tips": [
      "The dough must be silky smooth—any cracks will cause the balls to split open during frying.",
      "The oil temperature is crucial; too hot and they brown without cooking inside. Always fry them slowly.",
      "The syrup should be warm, not hot, when soaking the jamuns; this ensures they absorb without becoming mushy.",
      "Roll the balls gently without applying too much pressure—overworking creates dense jamuns.",
      "The syrup should reach 1-string consistency (sticky when touched between fingers)."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Essential Indian sweet, originated in medieval India",
    "better_than_store_bought": "Commercial versions are often dry and hard. Homemade are pillowy soft, infused with cardamom and saffron fragrance.",
    "hidden_nutrients": "Khoya provides calcium and protein. Cardamom has digestive benefits.",
    "continent": "Asia",
    "slug": "gulab-jamun"
  },
  {
    "id": 17,
    "name": "Jalebi",
    "country": "India",
    "category": "Snack",
    "time": "1 hour (plus fermentation)",
    "servings": "15-20 pieces",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Batter": [
        "200g all-purpose flour",
        "1 tbsp gram flour (besan)",
        "½ tsp baking powder",
        "1 tsp active dry yeast",
        "300ml warm water",
        "Pinch of turmeric (for color)"
      ],
      "Syrup": [
        "400g sugar",
        "400ml water",
        "4 cardamom pods",
        "1 tsp rose water",
        "Saffron"
      ],
      "Frying": [
        "Ghee or vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flours, baking powder, and turmeric. Dissolve yeast in warm water. Combine into smooth batter (pouring consistency).",
      "Ferment: Cover and ferment 6-8 hours or overnight (batter should be bubbly).",
      "Make Syrup: Boil sugar and water with cardamom until 1-string consistency. Add rose water and saffron. Keep warm.",
      "Prepare Piping: Fill a piping bag or squeeze bottle with batter (no nozzle needed, just a small hole).",
      "Heat Oil: Heat ghee/oil to 170°C.",
      "Pipe Jalebi: Pipe batter into oil in spiral/pretzel shapes.",
      "Fry: Fry until golden and crisp on both sides.",
      "Soak: Remove and immediately dip in warm syrup for 30 seconds.",
      "Serve: Remove from syrup and serve warm, crisp, and juicy."
    ],
    "making_tips": [
      "The fermentation makes jalebi—the slight tang is what sets it apart.",
      "The batter should fall in a continuous ribbon without breaking; if it's too thick, add water; if too thin, add flour.",
      "The spirals must be uniform for even cooking.",
      "Serve immediately after soaking; they lose crispiness quickly.",
      "The syrup should be warm, not hot, to maintain the crisp texture."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Ancient Indian sweet, popular during festivals",
    "better_than_store_bought": "Fresh jalebi has a perfect balance of crisp exterior and syrupy interior that mass-produced versions can't achieve.",
    "hidden_nutrients": "Gram flour adds protein and fiber. Cardamom provides antioxidants and aids digestion.",
    "continent": "Asia",
    "slug": "jalebi"
  },
  {
    "id": 18,
    "name": "Rasgulla",
    "country": "India",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12-15 pieces",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Chenna (Cheese Curds)": [
        "2 litres full-fat milk",
        "3 tbsp lemon juice or vinegar"
      ],
      "Syrup": [
        "400g sugar",
        "600ml water",
        "2 cardamom pods",
        "1 tsp rose water"
      ]
    },
    "steps": [
      "Make Chenna: Boil milk. Add lemon juice gradually, stirring until curds separate from whey.",
      "Strain: Pour through cheesecloth. Rinse under cold water to remove lemon taste. Hang to drain for 30 minutes.",
      "Knead: Transfer chenna to a plate. Knead with heel of palm for 10-12 minutes until smooth and buttery. (This is crucial!)",
      "Shape: Divide into small balls (about 25g each). Roll until smooth without cracks.",
      "Make Syrup: Combine sugar, water, and cardamom. Bring to boil.",
      "Cook Rasgulla: Drop chenna balls into boiling syrup. Cover and cook for 12-15 minutes.",
      "Expand: They will double in size. Turn off heat and let sit in syrup for 5 more minutes.",
      "Cool: Transfer to serving bowl with syrup. Chill before serving."
    ],
    "making_tips": [
      "The kneading is the most critical step—the chenna must be smooth and free of graininess. This takes at least 10 minutes of patient kneading.",
      "The syrup must be boiling when you add the rasgulla; this creates the spongy texture.",
      "Don't overcrowd the pot—they need room to expand and double in size.",
      "The cooking time determines the texture; undercook and they're dense, overcook and they're tough.",
      "Use full-fat milk for the richest chenna."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Bengali classic, over 150 years old",
    "better_than_store_bought": "Commercial rasgulla often contains preservatives and has a rubbery texture. Homemade is ethereally spongy and delicate.",
    "hidden_nutrients": "Chenna provides high-quality protein and calcium. Cardamom offers digestive benefits.",
    "continent": "Asia",
    "slug": "rasgulla"
  },
  {
    "id": 19,
    "name": "Kaju Katli",
    "country": "India",
    "category": "Snack",
    "time": "1 hour",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "250g cashew nuts",
        "200g sugar",
        "100ml water",
        "½ tsp cardamom powder",
        "1 tsp ghee (for greasing)",
        "Edible silver leaf (varak) for decoration (optional)"
      ]
    },
    "steps": [
      "Grind Cashews: Grind cashews to a fine powder in a blender. Sift to remove any coarse pieces.",
      "Make Sugar Syrup: Combine sugar and water in a heavy-bottomed pan. Heat until sugar dissolves and syrup reaches 1-string consistency.",
      "Add Cashew Powder: Reduce heat to low. Add cashew powder and cardamom. Stir continuously.",
      "Cook: The mixture will start to thicken and come together. Cook until it forms a smooth dough that leaves the sides of the pan (5-7 minutes).",
      "Cool Slightly: Transfer mixture to a greased plate. Let cool slightly until warm enough to handle.",
      "Knead: Knead the warm mixture until smooth and pliable (2-3 minutes).",
      "Roll: Place between two sheets of parchment paper. Roll to 5mm thickness.",
      "Shape: Cut into diamond shapes. Decorate with silver leaf.",
      "Cool Completely: Let set completely before separating pieces."
    ],
    "making_tips": [
      "Grind the cashews to the finest powder possible—any graininess affects the texture.",
      "The sugar syrup consistency is critical; 1-string is perfect for the right fudge texture.",
      "Cook the mixture just until it leaves the sides of the pan; overcooking makes it hard.",
      "Work quickly while warm; the mixture hardens as it cools.",
      "Store in an airtight container with parchment between layers."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Traditional Indian festive sweet",
    "better_than_store_bought": "Store-bought kaju katli often contains additives and artificial flavors. Homemade has pure cashew flavor with a melt-in-the-mouth texture.",
    "hidden_nutrients": "Cashews provide healthy fats, copper, magnesium, and zinc.",
    "continent": "Asia",
    "slug": "kaju-katli"
  },
  {
    "id": 20,
    "name": "Masala Chai",
    "country": "India",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 cups",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "400ml water",
        "200ml milk (full-fat)",
        "2 tbsp black tea leaves (Assam or CTC)",
        "2 tbsp sugar (or to taste)",
        "4 cardamom pods, crushed",
        "1-inch ginger, grated",
        "1 cinnamon stick",
        "4 cloves",
        "4 black peppercorns"
      ]
    },
    "steps": [
      "Crush Spices: Lightly crush cardamom, cloves, and peppercorns to release flavors.",
      "Boil Spices: In a pot, combine water, all spices, and ginger. Bring to boil and simmer for 5 minutes.",
      "Add Tea: Add tea leaves. Boil for 2-3 minutes until deep color develops.",
      "Add Milk: Pour in milk and bring to a rolling boil.",
      "Add Sugar: Stir in sugar to taste.",
      "Simmer: Let it boil and reduce slightly (2-3 minutes), allowing flavors to meld.",
      "Strain: Strain into cups using a tea strainer.",
      "Serve: Serve hot. Optional: top with a sprinkle of cardamom powder."
    ],
    "making_tips": [
      "The spices should be crushed, not ground, to release oils without becoming gritty.",
      "Never use boiling water for the tea—add it to the boiling spiced water and let it simmer.",
      "The longer you simmer, the stronger and spicier the chai becomes.",
      "Use full-fat milk for the richest, creamiest texture.",
      "The tea should 'boil over' once or twice; this is a sign of perfect chai making."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – India's beloved everyday beverage",
    "better_than_store_bought": "Chain cafe chai often uses syrups and has a watered-down flavor. Homemade masala chai has a complex spice profile and genuine warmth.",
    "hidden_nutrients": "Ginger aids digestion and reduces inflammation. Cardamom provides antioxidants. Cinnamon helps regulate blood sugar.",
    "continent": "Asia",
    "slug": "masala-chai"
  },
  {
    "id": 21,
    "name": "Rose Milk",
    "country": "India",
    "category": "Beverage",
    "time": "10 minutes (plus chilling)",
    "servings": "2 glasses",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml chilled milk",
        "3 tbsp rose syrup (rooh afza or similar)",
        "1 tbsp sugar (optional)",
        "Ice cubes",
        "Crushed pistachios for garnish",
        "Rose petals for garnish (optional)"
      ]
    },
    "steps": [
      "Chill Milk: Ensure milk is well chilled.",
      "Mix: In a pitcher, combine chilled milk, rose syrup, and sugar (if using). Stir until fully dissolved.",
      "Add Ice: Add ice cubes to serving glasses.",
      "Pour: Pour the rose milk over ice.",
      "Garnish: Sprinkle with crushed pistachios and rose petals.",
      "Serve: Stir before drinking and enjoy chilled."
    ],
    "making_tips": [
      "The milk must be ice-cold; warm milk won't absorb the rose flavor properly.",
      "Adjust rose syrup to taste; quality syrups vary in intensity.",
      "Use full-fat milk for the creamiest, most decadent result.",
      "Chill the serving glasses for an extra refreshing experience.",
      "Stir well before serving as the syrup tends to settle at the bottom."
    ],
    "health_rating": 45,
    "cultural_authenticity": "95% – Popular summer drink across India",
    "better_than_store_bought": "Bottled rose milk uses preservatives. Homemade is fresher and allows control over sweetness.",
    "hidden_nutrients": "Milk provides calcium and vitamin D. Pistachios add healthy fats and vitamin B6.",
    "continent": "Asia",
    "slug": "rose-milk"
  },
  {
    "id": 22,
    "name": "Nimbu Pani",
    "country": "India",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 glasses",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 large lemons (or 3 small)",
        "750ml chilled water",
        "4 tbsp sugar (or jaggery, to taste)",
        "½ tsp black salt (kala namak)",
        "½ tsp roasted cumin powder",
        "Regular salt to taste",
        "Ice cubes",
        "Fresh mint for garnish"
      ]
    },
    "steps": [
      "Juice Lemons: Squeeze lemons to extract fresh juice. Remove seeds.",
      "Combine: In a pitcher, combine lemon juice, sugar, black salt, roasted cumin powder, and regular salt.",
      "Add Water: Pour in chilled water and stir until sugar dissolves completely.",
      "Taste: Adjust sweetness and salt to your preference.",
      "Chill: Add ice cubes to serving glasses.",
      "Pour: Pour nimbu pani over ice.",
      "Garnish: Top with fresh mint leaves.",
      "Serve: Serve immediately while ice-cold."
    ],
    "making_tips": [
      "Always use fresh lemons, never bottled juice—the flavor is incomparable.",
      "Roast the cumin seeds before grinding for the most aromatic flavor.",
      "The black salt is essential; it gives the distinctive tangy-savory profile.",
      "Chill the water and glasses beforehand for the most refreshing drink.",
      "Stir well before each sip as the spices settle at the bottom."
    ],
    "health_rating": 75,
    "cultural_authenticity": "100% – Classic Indian summer cooler",
    "better_than_store_bought": "Packaged nimbu pani is loaded with preservatives and artificial flavors. Homemade has bright, fresh citrus flavor with authentic spices.",
    "hidden_nutrients": "Lemons provide vitamin C. Cumin aids digestion and provides iron. Black salt offers trace minerals.",
    "continent": "Asia",
    "slug": "nimbu-pani"
  },
  {
    "id": 23,
    "name": "Mango Lassi",
    "country": "India",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 large glasses",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "400g ripe mango (peeled and chopped)",
        "2 cups plain yogurt (full-fat)",
        "½ cup milk",
        "4 tbsp sugar or honey (to taste)",
        "½ tsp cardamom powder",
        "Ice cubes",
        "Crushed pistachios for garnish",
        "Mint leaves for garnish"
      ]
    },
    "steps": [
      "Prepare Mango: Peel and chop ripe mangoes. Reserve a few small cubes for garnish.",
      "Blend: In a blender, combine mango pieces, yogurt, milk, sugar, and cardamom powder.",
      "Blend Smooth: Blend until completely smooth and creamy (1-2 minutes).",
      "Add Ice: Add a few ice cubes and blend briefly until crushed.",
      "Taste: Adjust sweetness to your preference.",
      "Chill: Pour into tall glasses.",
      "Garnish: Top with mango cubes, crushed pistachios, and mint leaves.",
      "Serve: Enjoy immediately while cold."
    ],
    "making_tips": [
      "Use the sweetest, ripest mangoes you can find—Alphonso or Kesar are ideal.",
      "Full-fat yogurt gives the creamiest texture; avoid low-fat versions.",
      "Chill all ingredients before blending for the best result.",
      "Blend just until smooth; over-blending can make the lassi thin.",
      "For a thicker lassi, strain the yogurt through cheesecloth for an hour."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – India's most beloved summer treat",
    "better_than_store_bought": "Bottled lassi has a long ingredient list of stabilizers. Homemade is thick, creamy, and packed with real mango flavor.",
    "hidden_nutrients": "Mangoes provide vitamin A, C, and fiber. Yogurt offers probiotics and calcium.",
    "continent": "Asia",
    "slug": "mango-lassi"
  },
  {
    "id": 24,
    "name": "Hotteok",
    "country": "South Korea",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "6 pancakes",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "250g all-purpose flour",
        "180ml warm water",
        "1 tbsp sugar",
        "1 tsp active dry yeast",
        "½ tsp salt",
        "1 tbsp vegetable oil"
      ],
      "Filling": [
        "80g brown sugar",
        "1 tbsp cinnamon powder",
        "30g crushed peanuts (optional)"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Dough: Mix yeast, sugar, and warm water. Let sit 5 minutes until foamy.",
      "Combine: Add flour and salt. Knead until smooth dough forms (8-10 minutes).",
      "First Rise: Cover and let rise in warm place for 1 hour until doubled.",
      "Make Filling: Mix brown sugar, cinnamon, and crushed peanuts.",
      "Divide: Punch down dough. Divide into 6 equal balls.",
      "Fill: Flatten each ball. Place 1 tbsp filling in center. Pinch edges to seal.",
      "Second Rise: Let filled balls rest 10 minutes.",
      "Cook: Heat oil in pan over medium. Place ball, seam side down. Cook 2-3 minutes.",
      "Flatten: Flip and press down with spatula. Cook until golden and caramelized.",
      "Serve: Serve warm—the filling will be molten and syrupy."
    ],
    "making_tips": [
      "The dough should be soft and slightly sticky; this creates the chewy texture.",
      "Don't overfill; the hotteok will burst and leak if too stuffed.",
      "Press down firmly when frying to ensure even cooking.",
      "The brown sugar melts and creates pockets of syrup; this is the signature of perfect hotteok.",
      "Serve immediately; the texture changes as it cools."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Iconic Korean winter street food",
    "better_than_store_bought": "Street vendors often use pre-made dough and excessive oil. Homemade has fresher dough and better filling balance.",
    "hidden_nutrients": "Cinnamon has anti-inflammatory properties. Peanuts add protein and healthy fats.",
    "continent": "Asia",
    "slug": "hotteok"
  },
  {
    "id": 25,
    "name": "Bungeoppang",
    "country": "South Korea",
    "category": "Snack",
    "time": "1 hour",
    "servings": "6 fish-shaped pastries",
    "difficulty": "Medium (requires mold)",
    "ingredients": {
      "Batter": [
        "200g all-purpose flour",
        "1 tsp baking powder",
        "50g sugar",
        "2 eggs",
        "300ml milk",
        "2 tbsp vegetable oil"
      ],
      "Filling": [
        "250g sweet red bean paste"
      ]
    },
    "steps": [
      "Make Batter: Whisk eggs, milk, and oil. Sift in flour, baking powder, and sugar. Mix until smooth.",
      "Rest: Let batter rest 30 minutes.",
      "Preheat Mold: Heat fish-shaped mold over medium heat. Grease lightly with oil.",
      "Pour Batter: Pour batter into bottom mold, filling halfway.",
      "Add Filling: Place 1 tbsp red bean paste in center.",
      "Cover with Batter: Pour more batter over filling.",
      "Close Mold: Close mold firmly. Cook 2-3 minutes each side until golden brown.",
      "Release: Carefully open mold. Pastry should release easily.",
      "Cool: Cool on wire rack to maintain crispiness."
    ],
    "making_tips": [
      "The mold must be hot enough that a drop of water sizzles on contact.",
      "Don't overfill—the batter needs room to expand.",
      "Flip the mold halfway through for even cooking.",
      "The finished bungeoppang should be golden with distinct fish shapes.",
      "Traditionally sold in pairs, but one is perfectly satisfying."
    ],
    "health_rating": 50,
    "cultural_authenticity": "95% – Korean winter favorite since 1930s",
    "better_than_store_bought": "Street versions can be dry and overfilled. Homemade has a crisp exterior, tender interior, and balanced filling.",
    "hidden_nutrients": "Red bean filling provides fiber, iron, and folate. Eggs add protein.",
    "continent": "Asia",
    "slug": "bungeoppang"
  },
  {
    "id": 26,
    "name": "Patbingsu",
    "country": "South Korea",
    "category": "Snack",
    "time": "25 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Base": [
        "500g ice block",
        "200g sweet red beans"
      ],
      "Toppings": [
        "Sweetened condensed milk",
        "Fresh fruit (strawberries, banana, kiwi)",
        "Mochi pieces",
        "Ice cream",
        "Red bean paste",
        "Crushed nuts"
      ]
    },
    "steps": [
      "Prepare Red Beans: Cook sweet red beans according to package instructions until soft but intact.",
      "Shave Ice: Use ice shaver to create fluffy, snow-like ice.",
      "Form Mountain: Pile shaved ice into a generous mound in a bowl.",
      "Add Red Beans: Spoon sweet red beans over the ice.",
      "Add Toppings: Arrange fruits, mochi, and other toppings.",
      "Drizzle: Pour condensed milk generously over everything.",
      "Add Ice Cream: Top with a scoop of ice cream.",
      "Serve: Mix before eating and enjoy immediately."
    ],
    "making_tips": [
      "The ice must be fluffy, not chunky—use a quality shaver.",
      "Red beans should be sweet but not cloying; balance with condensed milk.",
      "Arrange toppings beautifully; patbingsu is eaten with the eyes first.",
      "Serve in a chilled bowl to slow melting.",
      "Don't over-sweeten; the toppings should provide varying textures and flavors."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Korea's favorite summer dessert",
    "better_than_store_bought": "Cafe versions use syrups and artificial toppings. Homemade has fresher fruit and better bean texture.",
    "hidden_nutrients": "Red beans provide protein and fiber. Fruits add vitamins and antioxidants.",
    "continent": "Asia",
    "slug": "patbingsu"
  },
  {
    "id": 27,
    "name": "Yakgwa",
    "country": "South Korea",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus chilling)",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g all-purpose flour",
        "2 tbsp sesame oil",
        "3 tbsp honey",
        "3 tbsp soju (or rice wine)",
        "½ tsp salt",
        "2 tbsp chopped ginger juice"
      ],
      "Syrup": [
        "100ml honey",
        "50g sugar",
        "50ml water"
      ],
      "Frying": [
        "Vegetable oil"
      ],
      "Coating": [
        "Crushed pine nuts or sesame seeds"
      ]
    },
    "steps": [
      "Make Dough: Sift flour and salt. Add sesame oil, honey, soju, and ginger juice. Mix into dough.",
      "Knead: Knead until smooth and elastic (5-7 minutes).",
      "Rest: Cover and rest 30 minutes.",
      "Roll: Roll dough to 5mm thickness. Cut into desired shapes (flowers, rectangles).",
      "Heat Oil: Heat oil to 160°C.",
      "Fry: Fry pieces until golden and puffy, turning occasionally (5-7 minutes).",
      "Make Syrup: Combine honey, sugar, and water. Bring to simmer until combined.",
      "Soak: Dip fried pieces in warm syrup for 30 seconds.",
      "Coat: Roll in crushed pine nuts or sesame seeds.",
      "Cool: Let set completely before serving."
    ],
    "making_tips": [
      "The dough should be soft but not sticky; add more flour if needed.",
      "Fry at the correct temperature; too hot and outside burns, too cool and they absorb oil.",
      "The syrup should be warm, not hot, when soaking.",
      "Traditional shapes include flowers and leaves; use cookie cutters.",
      "These improve after resting; the flavors meld overnight."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Ancient Korean confection, over 1,000 years old",
    "better_than_store_bought": "Commercial yakgwa uses vegetable oil instead of sesame oil. Homemade has authentic nutty flavor and perfect texture.",
    "hidden_nutrients": "Sesame oil provides healthy fats and antioxidants. Ginger aids digestion.",
    "continent": "Asia",
    "slug": "yakgwa"
  },
  {
    "id": 28,
    "name": "Hoddeok",
    "country": "South Korea",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "6 pancakes",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "250g all-purpose flour",
        "180ml warm water",
        "1 tbsp sugar",
        "1 tsp active dry yeast",
        "½ tsp salt",
        "1 tbsp vegetable oil"
      ],
      "Filling": [
        "80g brown sugar",
        "1 tbsp honey",
        "1 tbsp cinnamon powder",
        "30g crushed peanuts"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Dough: Mix yeast, sugar, and warm water. Let sit 5 minutes until foamy.",
      "Combine: Add flour and salt. Knead until smooth (8-10 minutes).",
      "First Rise: Cover and let rise 1 hour until doubled.",
      "Make Filling: Mix brown sugar, honey, cinnamon, and crushed peanuts.",
      "Divide: Punch down dough. Divide into 6 equal balls.",
      "Fill: Flatten each ball. Place 1 tbsp filling in center. Pinch edges to seal.",
      "Second Rise: Let filled balls rest 10 minutes.",
      "Cook: Heat oil in pan over medium. Place ball, seam side down. Cook 2 minutes.",
      "Flatten: Flip and press down with spatula. Cook until golden and caramelized.",
      "Serve: Serve warm—the filling will be syrupy and sweet."
    ],
    "making_tips": [
      "This is very similar to hotteok but uses honey for a richer flavor.",
      "The dough should be soft and slightly sticky; this creates the chewy texture.",
      "Press down firmly when frying to ensure even cooking and caramelization.",
      "The brown sugar creates pockets of honey-sweet syrup.",
      "Serve immediately; the texture changes as it cools."
    ],
    "health_rating": 30,
    "cultural_authenticity": "95% – Variation of hotteok, popular in Korean Chinatowns",
    "better_than_store_bought": "Street versions often skimp on filling. Homemade has abundant honey-peanut filling.",
    "hidden_nutrients": "Peanuts add protein and healthy fats. Cinnamon has anti-inflammatory properties.",
    "continent": "Asia",
    "slug": "hoddeok"
  },
  {
    "id": 29,
    "name": "Sikhye",
    "country": "South Korea",
    "category": "Beverage",
    "time": "6 hours (includes fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium-Hard",
    "ingredients": {
      "Main": [
        "200g malt barley powder (yeotgireum)",
        "4 cups cooked rice (short-grain)",
        "8 cups water",
        "150g sugar",
        "1 tbsp ginger, sliced (optional)"
      ]
    },
    "steps": [
      "Prepare Malt Water: Mix malt barley powder with 4 cups water. Let steep for 1 hour, stirring occasionally.",
      "Strain: Strain through cheesecloth to extract malt water.",
      "Combine: In a pot, combine malt water, cooked rice, and remaining 4 cups water.",
      "Ferment: Keep at warm temperature (60-65°C) for 3-4 hours. Rice grains will float when ready.",
      "Strain: Strain out rice grains, reserving them.",
      "Boil: Add sugar and ginger to liquid. Bring to boil, then simmer 15 minutes.",
      "Cool: Let cool completely. Rice grains can be added back for garnish.",
      "Serve: Serve chilled with floating rice grains."
    ],
    "making_tips": [
      "The temperature is critical; too hot kills the enzymes, too cool stops fermentation.",
      "Use short-grain rice for the best texture.",
      "The rice grains should float to the top when fermentation is complete.",
      "This is traditionally served after meals to aid digestion.",
      "Store in the refrigerator and consume within 3 days."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Traditional Korean fermented drink",
    "better_than_store_bought": "Canned sikhye is overly sweet and artificial. Homemade has a complex malty flavor with natural sweetness.",
    "hidden_nutrients": "Malt barley provides B vitamins and digestive enzymes. Rice offers carbohydrates for energy.",
    "continent": "Asia",
    "slug": "sikhye"
  },
  {
    "id": 30,
    "name": "Citron Tea (Yuja Cha)",
    "country": "South Korea",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 cups",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 tbsp citron tea concentrate (yuja-cheong)",
        "2 cups hot water",
        "1 tbsp honey (optional)",
        "Citron slices for garnish"
      ]
    },
    "steps": [
      "Prepare Concentrate: If using homemade citron preserve, ensure it's well mixed.",
      "Heat Water: Heat water until steaming but not boiling (85°C).",
      "Combine: Add citron tea concentrate to mugs.",
      "Add Water: Pour hot water over concentrate.",
      "Stir: Stir well until fully dissolved.",
      "Add Honey: Add honey if desired for extra sweetness.",
      "Garnish: Top with citron slices.",
      "Serve: Serve warm, perfect for cold weather."
    ],
    "making_tips": [
      "Never use boiling water; it can make the drink bitter.",
      "The ratio of concentrate to water is 1:4 or to taste.",
      "This is a soothing drink, especially beneficial for colds.",
      "Homemade yuja-cheong preserves are always superior.",
      "Can also be served chilled over ice in summer."
    ],
    "health_rating": 65,
    "cultural_authenticity": "95% – Korean winter favorite for colds",
    "better_than_store_bought": "Packaged versions often contain corn syrup. Homemade has more authentic flavor and health benefits.",
    "hidden_nutrients": "Citron provides vitamin C and antioxidants. Honey has antibacterial properties.",
    "continent": "Asia",
    "slug": "citron-tea-yuja-cha"
  },
  {
    "id": 31,
    "name": "Mango Sticky Rice (Khao Niao Mamuang)",
    "country": "Thailand",
    "category": "Snack",
    "time": "1 hour (plus soaking)",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Sticky Rice": [
        "200g glutinous rice",
        "200ml coconut milk",
        "50g sugar",
        "½ tsp salt"
      ],
      "Coconut Sauce": [
        "150ml coconut milk",
        "1 tbsp sugar",
        "Pinch of salt",
        "1 tbsp tapioca starch (optional)"
      ],
      "Mango": [
        "2 ripe mangoes",
        "Sesame seeds or mung beans for garnish"
      ]
    },
    "steps": [
      "Soak Rice: Rinse rice until water runs clear. Soak in water for 4 hours or overnight.",
      "Steam Rice: Drain rice. Steam in a bamboo steamer lined with cheesecloth for 20-25 minutes.",
      "Make Coconut Sauce: Heat coconut milk, sugar, and salt until sugar dissolves. Do not boil.",
      "Combine: Pour coconut sauce over steamed rice. Let absorb for 30 minutes.",
      "Prepare Mango: Peel and slice mangoes.",
      "Make Topping: Heat remaining coconut milk, sugar, and salt until just combined.",
      "Plate: Place sticky rice on plate. Add mango slices.",
      "Drizzle: Pour coconut topping over rice and mango.",
      "Garnish: Sprinkle with sesame seeds."
    ],
    "making_tips": [
      "The rice must be soaked thoroughly; this ensures the perfect chewy texture.",
      "Use the sweetest mangoes available—the dish depends on their quality.",
      "The coconut milk should be of high quality; full-fat gives the best flavor.",
      "Don't overcook the rice; it should be tender but still individual grains.",
      "Serve at room temperature, not cold."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Thailand's most famous dessert",
    "better_than_store_bought": "Street versions often use cheap coconut milk. Homemade uses the best ingredients.",
    "hidden_nutrients": "Mangoes provide vitamin A and C. Coconut milk offers healthy fats and minerals.",
    "continent": "Asia",
    "slug": "mango-sticky-rice-khao-niao-mamuang"
  },
  {
    "id": 32,
    "name": "Roti Sai Mai",
    "country": "Thailand",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "8 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Crepes": [
        "200g all-purpose flour",
        "150ml coconut milk",
        "1 egg",
        "Pinch of salt",
        "1 tbsp sugar"
      ],
      "Cotton Candy Filling": [
        "100g sugar",
        "1 tsp pandan extract or food coloring"
      ]
    },
    "steps": [
      "Make Crepe Batter: Mix flour, coconut milk, egg, salt, and sugar until smooth. Rest 15 minutes.",
      "Cook Crepes: Heat non-stick pan. Pour thin layer of batter. Cook until edges lift.",
      "Flip: Flip and cook other side briefly (30 seconds).",
      "Make Cotton Candy: Heat sugar in a pan until it melts and caramelizes.",
      "Spin Sugar: Use a whisk or fork to create thin sugar strands.",
      "Cool Strands: Let sugar strands cool and become flossy.",
      "Assemble: Place sugar floss on crepe.",
      "Roll: Roll crepe tightly around filling.",
      "Cut: Cut into bite-sized pieces.",
      "Serve: Serve immediately, slightly warm."
    ],
    "making_tips": [
      "The crepes should be paper-thin for the best texture.",
      "The sugar floss must be fine and delicate; work quickly.",
      "This is a specialty of Ayutthaya, Thailand's ancient capital.",
      "Serve immediately; the sugar floss melts quickly.",
      "The green pandan coloring is traditional but optional."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Specialty from Ayutthaya province",
    "better_than_store_bought": "Street versions often use pre-made crepes. Homemade has fresher, more delicate texture.",
    "hidden_nutrients": "Coconut milk provides healthy fats. The dish is primarily sugar, so enjoy sparingly.",
    "continent": "Asia",
    "slug": "roti-sai-mai"
  },
  {
    "id": 33,
    "name": "Khanom Bueang",
    "country": "Thailand",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "12 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Crepe Batter": [
        "150g rice flour",
        "50g mung bean flour",
        "300ml coconut milk",
        "2 eggs",
        "50g sugar",
        "½ tsp salt"
      ],
      "Filling": [
        "200ml coconut cream",
        "100g sugar",
        "2 egg yolks",
        "Pinch of salt",
        "Optional: shredded coconut, sesame seeds"
      ]
    },
    "steps": [
      "Make Batter: Mix all batter ingredients until smooth. Rest 15 minutes.",
      "Make Filling: Whisk coconut cream, sugar, egg yolks, and salt in a pan. Cook over low heat until thick.",
      "Heat Pan: Heat a small round pan over medium heat.",
      "Pour Batter: Pour a small amount of batter, tilting to spread thinly.",
      "Cook: Cook until edges begin to crisp and lift.",
      "Add Filling: Spoon filling in center of crepe.",
      "Fold: Fold one side over filling, creating a taco shape.",
      "Add Toppings: Add shredded coconut or sesame on top.",
      "Remove: Carefully remove from pan.",
      "Serve: Serve fresh and slightly warm."
    ],
    "making_tips": [
      "The crepe should be thin and crisp at the edges, soft at the center.",
      "The filling should be thick but spreadable.",
      "This is a traditional Thai royal dessert, requiring practice.",
      "The egg yolk filling is the classic version.",
      "Can be made savory with shrimp and coconut as well."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Traditional Thai royal dessert",
    "better_than_store_bought": "Street versions often use artificial coloring. Homemade has authentic flavors.",
    "hidden_nutrients": "Rice flour is gluten-free. Coconut cream provides healthy fats.",
    "continent": "Asia",
    "slug": "khanom-bueang"
  },
  {
    "id": 34,
    "name": "Tub Tim Krob",
    "country": "Thailand",
    "category": "Snack",
    "time": "30 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Water Chestnuts": [
        "200g water chestnuts (canned or fresh)",
        "50g tapioca flour",
        "Pandan coloring (optional)"
      ],
      "Coconut Milk Syrup": [
        "400ml coconut milk",
        "100g sugar",
        "½ tsp salt"
      ],
      "Toppings": [
        "Crushed ice"
      ]
    },
    "steps": [
      "Prepare Water Chestnuts: Drain and dry water chestnuts.",
      "Coat: Toss water chestnuts with tapioca flour until well coated.",
      "Blanch: Drop coated chestnuts in boiling water for 1 minute.",
      "Ice Bath: Transfer to ice bath to stop cooking.",
      "Make Syrup: Heat coconut milk, sugar, and salt until sugar dissolves. Chill.",
      "Assemble: Place chestnuts in serving bowl.",
      "Add Syrup: Pour chilled coconut syrup over chestnuts.",
      "Add Ice: Top with crushed ice.",
      "Serve: Mix and enjoy cold."
    ],
    "making_tips": [
      "The water chestnuts should retain their crunch; don't overcook.",
      "The tapioca coating creates the signature translucence.",
      "Pandan coloring is optional but adds the classic pink tint.",
      "This dessert is all about contrasting textures—crunchy and creamy.",
      "Serve in chilled bowls for the best experience."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Classic Thai dessert",
    "better_than_store_bought": "Street versions often use artificial colorings. Homemade has fresher chestnuts and coconut milk.",
    "hidden_nutrients": "Water chestnuts provide fiber and potassium. Coconut milk offers healthy fats.",
    "continent": "Asia",
    "slug": "tub-tim-krob"
  },
  {
    "id": 35,
    "name": "Luk Chup",
    "country": "Thailand",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "15 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Marzipan": [
        "200g mung bean flour",
        "200ml coconut milk",
        "100g sugar",
        "½ tsp salt"
      ],
      "Coating": [
        "200g sugar",
        "Food coloring (fruit colors)"
      ],
      "Decoration": [
        "Sesame seeds",
        "Pandan leaves"
      ]
    },
    "steps": [
      "Make Bean Paste: Cook mung bean flour with coconut milk, sugar, and salt until thick paste forms.",
      "Knead: Cool and knead until smooth and pliable.",
      "Color: Divide dough and color with food coloring.",
      "Shape: Shape into miniature fruits (orange, mango, strawberry, etc.).",
      "Make Coating: Heat sugar and water to make a glaze.",
      "Coat: Dip each fruit in sugar glaze.",
      "Set: Let dry completely.",
      "Decorate: Add details like strawberry seeds or mango stripes.",
      "Dry: Let dry completely before serving.",
      "Serve: Beautifully arranged as edible art."
    ],
    "making_tips": [
      "The mung bean paste must be smooth and free of lumps.",
      "Shaping requires patience and attention to detail.",
      "Work quickly; the dough dries out.",
      "Traditional fruits include mango, orange, and watermelon.",
      "Use natural food colorings for a more authentic result."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Thai palace dessert art form",
    "better_than_store_bought": "Commercial versions use artificial ingredients. Homemade is a true artisanal experience.",
    "hidden_nutrients": "Mung beans provide protein and fiber. The dish is mostly sugar, so enjoy visually.",
    "continent": "Asia",
    "slug": "luk-chup"
  },
  {
    "id": 36,
    "name": "Thai Iced Tea (Cha Yen)",
    "country": "Thailand",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 glasses",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "3 tbsp Thai tea leaves (or Ceylon tea)",
        "2 cups boiling water",
        "½ cup sweetened condensed milk",
        "½ cup evaporated milk",
        "2 tbsp sugar",
        "Ice cubes"
      ]
    },
    "steps": [
      "Brew Tea: Steep tea leaves in boiling water for 5 minutes.",
      "Strain: Strain tea into a pitcher.",
      "Sweeten: Stir in sugar while tea is still hot.",
      "Cool: Let tea cool to room temperature.",
      "Prepare Glasses: Fill tall glasses with ice.",
      "Pour Tea: Pour sweetened tea over ice.",
      "Add Milk: Drizzle sweetened condensed milk and evaporated milk over the top.",
      "Layer: The milk will create beautiful layered effect.",
      "Stir: Stir before drinking.",
      "Serve: Serve with a straw."
    ],
    "making_tips": [
      "The tea should be strong and well-brewed; it will dilute with ice.",
      "The signature orange color comes from food coloring, but is optional.",
      "The layered effect is achieved by pouring milk over the back of a spoon.",
      "Use full-fat milks for the creamiest result.",
      "Can also be served as a hot tea without ice."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Thailand's signature drink",
    "better_than_store_bought": "Cafe versions use powdered milk. Homemade has richer, creamier flavor.",
    "hidden_nutrients": "Black tea provides antioxidants. Milk adds calcium and vitamin D.",
    "continent": "Asia",
    "slug": "thai-iced-tea-cha-yen"
  },
  {
    "id": 37,
    "name": "Coconut Water (Nam Maprao)",
    "country": "Thailand",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 young coconuts",
        "Ice cubes (optional)",
        "Sugar syrup (optional)"
      ]
    },
    "steps": [
      "Choose Coconuts: Select young green coconuts.",
      "Open Coconut: Use a machete or heavy knife to cut the top.",
      "Drain Water: Drain coconut water into a bowl.",
      "Strain: Strain through cheesecloth if there are bits.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve cold, in the coconut or a glass.",
      "Add Ice: Add ice cubes if desired.",
      "Optional: Add a little sugar syrup if coconut is not sweet enough.",
      "Serve: Enjoy fresh."
    ],
    "making_tips": [
      "Young coconuts have the sweetest water; older ones have more meat but less water.",
      "Select coconuts that feel heavy for their size—this means more water.",
      "The water should be clear and slightly sweet.",
      "This is nature's sports drink—high in electrolytes.",
      "Coconut water is best consumed fresh; don't store for more than a day."
    ],
    "health_rating": 90,
    "cultural_authenticity": "100% – Thailand's natural hydration",
    "better_than_store_bought": "Bottled coconut water has preservatives and often added sugar. Fresh is incomparable.",
    "hidden_nutrients": "Rich in potassium, magnesium, and electrolytes. Low in calories.",
    "continent": "Asia",
    "slug": "coconut-water-nam-maprao"
  },
  {
    "id": 38,
    "name": "Nam Manao (Lime Juice)",
    "country": "Thailand",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 glasses",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 limes (or lemons)",
        "750ml water",
        "4 tbsp sugar (or to taste)",
        "½ tsp salt",
        "Ice cubes"
      ]
    },
    "steps": [
      "Juice Limes: Squeeze limes to extract fresh juice.",
      "Combine: In a pitcher, combine lime juice, water, sugar, and salt.",
      "Stir: Stir until sugar dissolves completely.",
      "Taste: Adjust sweetness and salt to your preference.",
      "Chill: Add ice cubes.",
      "Pour: Pour into serving glasses.",
      "Garnish: Add a lime slice.",
      "Serve: Enjoy immediately while cold."
    ],
    "making_tips": [
      "The balance between sweet, sour, and salty is key.",
      "Use fresh limes for the best flavor.",
      "This drink is even more refreshing with a sprig of mint.",
      "In Thailand, this is street-side favorite.",
      "Adjust sugar according to the tartness of your limes."
    ],
    "health_rating": 75,
    "cultural_authenticity": "100% – Thailand's classic street drink",
    "better_than_store_bought": "Bottled lime juice has preservatives. Homemade is fresher and perfectly balanced.",
    "hidden_nutrients": "Limes provide vitamin C. The drink is hydrating and alkalizing.",
    "continent": "Asia",
    "slug": "nam-manao-lime-juice"
  },
  {
    "id": 39,
    "name": "Che Ba Mau (Three-Color Dessert)",
    "country": "Vietnam",
    "category": "Snack",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Red Beans": [
        "200g red beans",
        "100g sugar",
        "Pinch of salt"
      ],
      "Green Jelly": [
        "100g mung bean flour or green jelly powder",
        "100g sugar",
        "Pandan extract"
      ],
      "Yellow Mung Beans": [
        "200g mung beans (without skin)",
        "100g sugar"
      ],
      "Coconut Milk": [
        "300ml coconut milk",
        "50g sugar",
        "½ tsp salt"
      ],
      "Toppings": [
        "Crushed ice"
      ]
    },
    "steps": [
      "Cook Red Beans: Boil red beans with sugar and salt until soft. Chill.",
      "Make Green Jelly: Mix jelly powder with sugar and pandan extract. Cook until set. Cut into cubes.",
      "Cook Mung Beans: Steam or boil mung beans with sugar until tender but intact.",
      "Make Coconut Milk: Heat coconut milk, sugar, and salt until combined. Chill.",
      "Assemble: In a glass, layer red beans, mung beans, and green jelly.",
      "Add Ice: Top with crushed ice.",
      "Add Coconut Milk: Pour chilled coconut milk over everything.",
      "Serve: Serve immediately with a spoon."
    ],
    "making_tips": [
      "The layers should be distinct for the best visual effect.",
      "Each component should be cooked perfectly—not too soft or too firm.",
      "This dessert is all about contrasting textures and colors.",
      "Serve cold for the most refreshing experience.",
      "Can be customized with different beans and jellies."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Vietnamese classic dessert",
    "better_than_store_bought": "Street versions often use artificial colorings. Homemade uses natural ingredients.",
    "hidden_nutrients": "Beans provide protein and fiber. Coconut milk offers healthy fats.",
    "continent": "Asia",
    "slug": "che-ba-mau-three-color-dessert"
  },
  {
    "id": 40,
    "name": "Banh Cam (Sesame Balls)",
    "country": "Vietnam",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 balls",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g glutinous rice flour",
        "50g sugar",
        "150ml warm water"
      ],
      "Filling": [
        "200g mung bean paste",
        "100g sugar"
      ],
      "Coating": [
        "100g white sesame seeds"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Filling: Steam mung beans, mash, and mix with sugar.",
      "Make Dough: Mix rice flour and sugar. Gradually add water to form smooth dough.",
      "Divide: Divide dough into 12 pieces.",
      "Fill: Flatten each piece, place filling in center, and seal.",
      "Moisten: Wet each ball slightly with water.",
      "Coat: Roll in sesame seeds.",
      "Heat Oil: Heat oil to 160°C.",
      "Fry: Fry balls in batches, turning frequently, until golden.",
      "Drain: Drain on paper towels.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The mung bean filling gives this Vietnamese version its distinct flavor.",
      "The oil temperature is crucial; too hot and the skin burns.",
      "Press them gently while frying to create the hollow center.",
      "The sesame seeds should be raw; they toast during frying.",
      "These are best enjoyed fresh and warm."
    ],
    "health_rating": 35,
    "cultural_authenticity": "95% – Vietnamese version of Chinese sesame balls",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter and fresher.",
    "hidden_nutrients": "Mung beans provide protein and fiber. Sesame seeds offer calcium and healthy fats.",
    "continent": "Asia",
    "slug": "banh-cam-sesame-balls"
  },
  {
    "id": 41,
    "name": "Banh Bo (Honeycomb Cake)",
    "country": "Vietnam",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "1 cake (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "200g tapioca starch",
        "200g rice flour",
        "400ml coconut milk",
        "200g sugar",
        "4 eggs",
        "1 tbsp baking powder",
        "½ tsp salt",
        "1 tsp pandan extract"
      ]
    },
    "steps": [
      "Activate Yeast: Dissolve yeast and sugar in warm water. Let sit 5 minutes.",
      "Mix Flours: Combine tapioca starch, rice flour, and salt.",
      "Add Coconut Milk: Gradually add coconut milk to flours while mixing.",
      "Add Eggs: Beat eggs and add to batter.",
      "Add Pandan: Add pandan extract.",
      "Rest: Cover and let rest 1 hour.",
      "Preheat Pan: Grease a round cake pan.",
      "Add Baking Powder: Fold in baking powder gently.",
      "Bake: Pour into pan and bake at 180°C for 30-35 minutes.",
      "Cool: Let cool before removing.",
      "Slice: The cake should have a honeycomb texture inside.",
      "Serve: Serve at room temperature."
    ],
    "making_tips": [
      "The batter must rest for the yeast to create the honeycomb texture.",
      "This cake gets its name from the honeycomb pattern inside.",
      "The pandan extract gives its signature green color.",
      "Steaming is also a common method for this cake.",
      "Let it cool completely before slicing."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Vietnamese street food favorite",
    "better_than_store_bought": "Commercial versions often use artificial flavorings. Homemade has a more authentic flavor.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Eggs add protein.",
    "continent": "Asia",
    "slug": "banh-bo-honeycomb-cake"
  },
  {
    "id": 42,
    "name": "Sinh To Bo (Avocado Smoothie)",
    "country": "Vietnam",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 ripe avocados",
        "200ml sweetened condensed milk",
        "400ml milk",
        "Ice cubes",
        "1 tbsp sugar (optional)"
      ]
    },
    "steps": [
      "Prepare Avocados: Peel and pit avocados.",
      "Blend: In a blender, combine avocado, condensed milk, and milk.",
      "Add Ice: Add ice cubes.",
      "Blend: Blend until smooth and creamy.",
      "Taste: Add sugar if desired.",
      "Chill: Pour into chilled glasses.",
      "Serve: Serve immediately, cold."
    ],
    "making_tips": [
      "Use the creamiest avocados for the best texture.",
      "This is essentially avocado ice cream in drink form.",
      "The condensed milk is key to its sweetness.",
      "Serve immediately; avocado oxidizes quickly.",
      "In Vietnam, this is a popular street drink."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Vietnam's healthy smoothie",
    "better_than_store_bought": "Cafe versions often use too much condensed milk. Homemade has better balance.",
    "hidden_nutrients": "Avocados provide healthy fats, potassium, and fiber. Milk adds calcium.",
    "continent": "Asia",
    "slug": "sinh-to-bo-avocado-smoothie"
  },
  {
    "id": 43,
    "name": "Che Chuoi (Banana Pudding)",
    "country": "Vietnam",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Pudding": [
        "6 ripe bananas",
        "500ml coconut milk",
        "100g sugar",
        "Pinch of salt",
        "1 tsp vanilla"
      ],
      "Topping": [
        "Tapioca pearls (cooked)",
        "Crushed peanuts",
        "Sesame seeds"
      ]
    },
    "steps": [
      "Slice Bananas: Peel and slice bananas into rounds.",
      "Heat Coconut Milk: Heat coconut milk with sugar and salt.",
      "Add Bananas: Add banana slices and simmer gently.",
      "Add Tapioca: Add cooked tapioca pearls.",
      "Cook: Simmer until bananas are soft and the mixture thickens.",
      "Add Vanilla: Stir in vanilla.",
      "Cool: Let cool to room temperature or chill.",
      "Serve: Top with crushed peanuts and sesame seeds."
    ],
    "making_tips": [
      "Use bananas that are ripe but still firm.",
      "The tapioca pearls should be soft and translucent.",
      "This is a popular dessert soup in southern Vietnam.",
      "Can be served warm or cold.",
      "The contrast of soft banana and chewy tapioca is key."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Southern Vietnamese dessert",
    "better_than_store_bought": "Street versions can be too sweet. Homemade has balanced sweetness.",
    "hidden_nutrients": "Bananas provide potassium. Coconut milk offers healthy fats.",
    "continent": "Asia",
    "slug": "che-chuoi-banana-pudding"
  },
  {
    "id": 44,
    "name": "Ca Phe Sua Da (Vietnamese Iced Coffee)",
    "country": "Vietnam",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 tbsp Vietnamese coffee grounds (Robusta)",
        "2 cups boiling water",
        "Sweetened condensed milk to taste",
        "Ice cubes"
      ]
    },
    "steps": [
      "Prepare Phin: Place coffee grounds in a Vietnamese coffee filter (phin).",
      "Add Water: Pour boiling water over grounds. Let drip completely.",
      "Sweeten: Add sweetened condensed milk to each glass.",
      "Add Coffee: Pour brewed coffee over condensed milk.",
      "Stir: Stir to combine.",
      "Add Ice: Fill glass with ice cubes.",
      "Stir Again: Stir well before drinking.",
      "Serve: Enjoy slowly."
    ],
    "making_tips": [
      "Vietnamese coffee is traditionally Robusta, which is more bitter and stronger.",
      "The condensed milk is essential to balance the bitterness.",
      "The phin filter creates a slow, concentrated brew.",
      "This coffee is strong—enjoy in moderation.",
      "Can also be served hot without ice."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Vietnam's signature drink",
    "better_than_store_bought": "Cafe versions use the wrong coffee beans. Homemade has authentic Robusta flavor.",
    "hidden_nutrients": "Coffee provides antioxidants. Condensed milk adds calcium.",
    "continent": "Asia",
    "slug": "ca-phe-sua-da-vietnamese-iced-coffee"
  },
  {
    "id": 45,
    "name": "Soda Chanh (Lime Soda)",
    "country": "Vietnam",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 limes",
        "500ml soda water",
        "4 tbsp sugar",
        "Pinch of salt",
        "Ice cubes"
      ]
    },
    "steps": [
      "Juice Limes: Squeeze limes to extract fresh juice.",
      "Mix Sugar and Salt: Combine sugar and salt in a glass.",
      "Add Lime Juice: Stir in lime juice until sugar dissolves.",
      "Add Soda: Top with soda water.",
      "Add Ice: Add ice cubes.",
      "Stir: Stir gently to combine.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "The sweet-sour-salty balance is key.",
      "Use fresh limes for the best flavor.",
      "This is a refreshing drink in Vietnam's hot climate.",
      "Can be garnished with mint.",
      "Serve immediately while the soda is still bubbly."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Vietnamese street favorite",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher and customizable.",
    "hidden_nutrients": "Limes provide vitamin C. The drink is hydrating.",
    "continent": "Asia",
    "slug": "soda-chanh-lime-soda"
  },
  {
    "id": 46,
    "name": "Nuoc Mia (Sugarcane Juice)",
    "country": "Vietnam",
    "category": "Beverage",
    "time": "20 minutes",
    "servings": "2 servings",
    "difficulty": "Medium (requires press)",
    "ingredients": {
      "Main": [
        "4-5 sugarcane stalks",
        "1 lime",
        "Ice cubes"
      ]
    },
    "steps": [
      "Clean Sugarcane: Wash sugarcane thoroughly.",
      "Peel: Remove the outer skin.",
      "Cut: Cut into manageable lengths.",
      "Juice: Use a sugarcane press or heavy-duty juicer.",
      "Strain: Strain through cheesecloth.",
      "Add Lime: Squeeze fresh lime juice into the sugarcane juice.",
      "Chill: Pour over ice cubes.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Sugarcane juice is extremely sweet; the lime balances it.",
      "A sugarcane press is traditional but a heavy juicer works.",
      "This drink is highly popular on Vietnamese streets.",
      "Drink immediately after pressing; it spoils quickly.",
      "Can be combined with other fruit juices."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Vietnam's street drink",
    "better_than_store_bought": "Bottled versions often have added sugar and preservatives. Fresh is incomparable.",
    "hidden_nutrients": "Sugarcane provides electrolytes and some minerals.",
    "continent": "Asia",
    "slug": "nuoc-mia-sugarcane-juice"
  },
  {
    "id": 47,
    "name": "Kuih Lapis (Layered Cake)",
    "country": "Malaysia",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "1 cake (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "200g rice flour",
        "100g tapioca flour",
        "400ml coconut milk",
        "200g sugar",
        "½ tsp salt",
        "Pandan extract (green)",
        "Food coloring (red, yellow)"
      ]
    },
    "steps": [
      "Make Batter: Mix rice flour, tapioca flour, coconut milk, sugar, and salt.",
      "Divide: Divide batter into 3-4 portions. Color each portion.",
      "Prepare Pan: Grease a square pan.",
      "Layer: Pour one colored layer into pan. Steam 5 minutes until set.",
      "Repeat: Continue layering and steaming each layer.",
      "Cool: Let cool completely.",
      "Remove: Remove from pan.",
      "Slice: Slice into diamond shapes.",
      "Serve: Serve at room temperature."
    ],
    "making_tips": [
      "Each layer must be set before adding the next.",
      "The layers should be distinct and colorful.",
      "This is a festive kuih, often served during celebrations.",
      "The pandan extract gives the green layer its flavor.",
      "Patience is key; rushing will mix the layers."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Malaysian festive kuih",
    "better_than_store_bought": "Street versions can be dry. Homemade is moister and more flavorful.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Rice flour is gluten-free.",
    "continent": "Asia",
    "slug": "kuih-lapis-layered-cake"
  },
  {
    "id": 48,
    "name": "Onde-Onde",
    "country": "Malaysia",
    "category": "Snack",
    "time": "1 hour",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g glutinous rice flour",
        "150ml pandan juice",
        "Pinch of salt"
      ],
      "Filling": [
        "100g palm sugar (gula melaka), chopped"
      ],
      "Coating": [
        "100g fresh grated coconut"
      ]
    },
    "steps": [
      "Make Dough: Mix rice flour, pandan juice, and salt until smooth dough forms.",
      "Rest: Cover and rest 15 minutes.",
      "Prepare Filling: Chop palm sugar into small pieces.",
      "Form Balls: Divide dough into 15 pieces. Flatten each.",
      "Fill: Place a piece of palm sugar in center. Seal and roll into ball.",
      "Cook: Drop balls into boiling water. They will sink then float.",
      "Remove: Remove with slotted spoon.",
      "Coat: Roll in fresh grated coconut.",
      "Serve: Serve warm or at room temperature."
    ],
    "making_tips": [
      "The palm sugar should be chopped finely for easier melting.",
      "When the balls float, they are cooked.",
      "The fresh coconut gives a nice texture contrast.",
      "Serve soon after coating; the coconut can become soggy.",
      "The pandan juice gives its distinctive green color."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Malaysian favorite kuih",
    "better_than_store_bought": "Street versions can be dry. Homemade has a softer texture.",
    "hidden_nutrients": "Coconut provides healthy fats and fiber. Rice flour is gluten-free.",
    "continent": "Asia",
    "slug": "onde-onde"
  },
  {
    "id": 49,
    "name": "Cendol",
    "country": "Malaysia",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Cendol": [
        "200g rice flour",
        "100g mung bean flour",
        "400ml pandan juice",
        "½ tsp salt"
      ],
      "Coconut Milk": [
        "500ml coconut milk",
        "100g sugar",
        "Pinch of salt"
      ],
      "Toppings": [
        "Red beans",
        "Corn kernels",
        "Shaved ice"
      ]
    },
    "steps": [
      "Make Cendol Dough: Mix rice flour, mung bean flour, pandan juice, and salt into a paste.",
      "Steam: Steam dough until cooked (10-15 minutes).",
      "Strain: Press through a cendol strainer or potato ricer into ice water.",
      "Chill: The strands will firm up in ice water.",
      "Make Coconut Syrup: Heat coconut milk, sugar, and salt until combined. Chill.",
      "Assemble: Place cendol strands in bowls.",
      "Add Toppings: Add red beans and corn.",
      "Add Shaved Ice: Top with shaved ice.",
      "Add Coconut Syrup: Pour chilled coconut syrup over everything.",
      "Serve: Enjoy immediately."
    ],
    "making_tips": [
      "The cendol strands should be soft but distinct.",
      "The pandan juice gives the green color.",
      "This is one of Malaysia's most popular desserts.",
      "Serve ice-cold for the best experience.",
      "The strainer is essential for the traditional look."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Malaysia's favorite dessert drink",
    "better_than_store_bought": "Street versions can be overly sweet. Homemade has better balance.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Red beans add fiber and protein.",
    "continent": "Asia",
    "slug": "cendol"
  },
  {
    "id": 50,
    "name": "Apam Balik",
    "country": "Malaysia",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "8 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "200g rice flour",
        "50g sugar",
        "1 tsp yeast",
        "300ml water",
        "Pinch of salt"
      ],
      "Filling": [
        "100g crushed peanuts",
        "50g sugar",
        "30g butter"
      ]
    },
    "steps": [
      "Make Batter: Mix rice flour, sugar, yeast, and water. Rest 1 hour.",
      "Heat Pan: Heat a small round pan over medium heat.",
      "Pour Batter: Pour a thin layer of batter.",
      "Add Filling: Sprinkle crushed peanuts and sugar over the batter.",
      "Add Butter: Add small pieces of butter.",
      "Cook: Cook until edges crisp and center is cooked.",
      "Fold: Fold the pancake in half.",
      "Remove: Remove from pan.",
      "Cool: Let cool slightly.",
      "Serve: Serve warm or cold."
    ],
    "making_tips": [
      "The batter should be thin and spreadable.",
      "The filling should be generous for the best flavor.",
      "This is a popular street snack in Malaysia.",
      "The pancake should be crispy on the outside and soft inside.",
      "Fold immediately after cooking while still warm."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Malaysian pancake street snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade has cleaner ingredients.",
    "hidden_nutrients": "Peanuts provide protein and healthy fats.",
    "continent": "Asia",
    "slug": "apam-balik"
  },
  {
    "id": 51,
    "name": "Pisang Goreng (Malaysian)",
    "country": "Malaysia",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "12 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "50g rice flour",
        "1 tsp baking powder",
        "½ tsp salt",
        "200ml water"
      ],
      "Bananas": [
        "12 small bananas (pisang raja or pisang nipah)"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flours, baking powder, and salt. Add water to form batter.",
      "Prepare Bananas: Peel bananas. Optionally slice lengthwise.",
      "Heat Oil: Heat oil to 170°C.",
      "Coat Bananas: Dip bananas in batter to coat.",
      "Fry: Fry until golden brown and crispy, turning once.",
      "Drain: Drain on paper towels.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The batter should be thick enough to coat the bananas.",
      "Use sweet, small bananas for the best flavor.",
      "The rice flour gives extra crispiness.",
      "Serve with chili or cheese for a modern twist.",
      "Best eaten fresh and hot."
    ],
    "health_rating": 25,
    "cultural_authenticity": "95% – Malaysian street snack classic",
    "better_than_store_bought": "Street versions can be greasy. Homemade is crispier and less oily.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Asia",
    "slug": "pisang-goreng-malaysian"
  },
  {
    "id": 52,
    "name": "Teh Tarik (Pulled Tea)",
    "country": "Malaysia",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 cups",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "4 black tea bags",
        "400ml water",
        "200ml sweetened condensed milk",
        "1 tsp sugar (optional)"
      ]
    },
    "steps": [
      "Brew Tea: Brew tea bags in boiling water for 5 minutes.",
      "Remove Bags: Remove tea bags.",
      "Add Condensed Milk: Stir in condensed milk.",
      "Mix: Mix thoroughly.",
      "Pull Tea: Pour tea between two containers from a height.",
      "Repeat: Repeat 5-7 times to create froth.",
      "Pour: Pour into serving cups.",
      "Serve: Serve hot."
    ],
    "making_tips": [
      "The pulling creates the distinctive froth.",
      "Pour from a height to aerate the tea.",
      "The 'pulling' motion is key to the texture.",
      "Use full-fat condensed milk for the best flavor.",
      "This is Malaysia's national drink."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Malaysia's national drink",
    "better_than_store_bought": "Cafe versions often use tea powder. Homemade uses real tea bags.",
    "hidden_nutrients": "Black tea provides antioxidants. Condensed milk adds calcium.",
    "continent": "Asia",
    "slug": "teh-tarik-pulled-tea"
  },
  {
    "id": 53,
    "name": "Air Bandung (Rose Syrup Drink)",
    "country": "Malaysia",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "400ml chilled milk",
        "4 tbsp rose syrup",
        "2 tbsp condensed milk",
        "Ice cubes"
      ]
    },
    "steps": [
      "Chill Milk: Ensure milk is cold.",
      "Mix Syrup: In a pitcher, combine rose syrup and condensed milk.",
      "Add Milk: Pour in chilled milk and stir well.",
      "Taste: Adjust sweetness with more rose syrup.",
      "Chill: Refrigerate until cold.",
      "Pour: Pour over ice cubes in glasses.",
      "Serve: Serve cold."
    ],
    "making_tips": [
      "The rose syrup should be good quality.",
      "The drink should be a pretty pink color.",
      "This is a festive drink in Malaysia.",
      "Can be served with grass jelly for added texture.",
      "Serve chilled for the best experience."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Malaysian festive drink",
    "better_than_store_bought": "Bottled versions often have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Milk provides calcium and protein.",
    "continent": "Asia",
    "slug": "air-bandung-rose-syrup-drink"
  },
  {
    "id": 54,
    "name": "Soy Cincau (Soy Milk with Grass Jelly)",
    "country": "Malaysia",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml sweetened soy milk",
        "200g grass jelly (cincau)",
        "2 tbsp sugar syrup",
        "Ice cubes"
      ]
    },
    "steps": [
      "Prepare Grass Jelly: Cut grass jelly into small cubes.",
      "Chill: Keep grass jelly chilled.",
      "Prepare Glasses: Place grass jelly cubes in glasses.",
      "Add Soy Milk: Pour soy milk over grass jelly.",
      "Add Sugar Syrup: Add sugar syrup to taste.",
      "Add Ice: Add ice cubes.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "The grass jelly should be bouncy and slightly sweet.",
      "Use homemade soy milk for the best flavor.",
      "This is a refreshing Malaysian drink.",
      "Can be made with other flavored jellies.",
      "Serve ice-cold."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Malaysian street drink",
    "better_than_store_bought": "Bottled versions often have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Soy milk provides protein and calcium. Grass jelly offers dietary fiber.",
    "continent": "Asia",
    "slug": "soy-cincau-soy-milk-with-grass-jelly"
  },
  {
    "id": 55,
    "name": "Halo-Halo",
    "country": "Philippines",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Base": [
        "Shaved ice",
        "Sweetened condensed milk"
      ],
      "Toppings": [
        "Sweet red beans",
        "Leche flan",
        "Macapuno (coconut sport)",
        "Sweetened plantains",
        "Jelly cubes",
        "Jackfruit",
        "Ube halaya (purple yam jam)"
      ]
    },
    "steps": [
      "Prepare Toppings: Prepare all toppings individually.",
      "Shave Ice: Shave ice into fine, snow-like consistency.",
      "Layer: In a tall glass, layer sweetened beans, flan, and other toppings.",
      "Add Ice: Top with generous shaved ice.",
      "Add Condensed Milk: Drizzle sweetened condensed milk over ice.",
      "Add Ube: Add a scoop of ube halaya on top.",
      "Garnish: Top with leche flan.",
      "Mix: Mix before eating.",
      "Serve: Enjoy with a long spoon."
    ],
    "making_tips": [
      "Halo-halo means 'mix-mix' in Tagalog.",
      "The ice should be fine, not chunky.",
      "Traditionally, all toppings are mixed together.",
      "The ube halaya gives the purple color.",
      "Serve in tall glasses with a spoon and straw."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Philippines' national dessert",
    "better_than_store_bought": "Street versions often use cheap ingredients. Homemade uses premium toppings.",
    "hidden_nutrients": "Beans provide protein and fiber. Fruits add vitamins.",
    "continent": "Asia",
    "slug": "halo-halo"
  },
  {
    "id": 56,
    "name": "Leche Flan",
    "country": "Philippines",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Caramel": [
        "100g sugar",
        "2 tbsp water"
      ],
      "Custard": [
        "10 egg yolks",
        "1 can sweetened condensed milk",
        "1 can evaporated milk",
        "1 tsp vanilla extract"
      ]
    },
    "steps": [
      "Make Caramel: Heat sugar and water until golden. Pour into flan mold.",
      "Make Custard: Whisk egg yolks, condensed milk, evaporated milk, and vanilla.",
      "Strain: Strain custard mixture through a fine sieve.",
      "Pour: Pour custard over the caramel.",
      "Cover: Cover the mold with foil.",
      "Steam: Steam for 30-40 minutes until set.",
      "Cool: Let cool completely.",
      "Unmold: Invert onto a serving plate.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "The caramel should be deep gold, not dark brown.",
      "Straining ensures silky texture.",
      "Do not overcook; flan should be set but jiggly.",
      "This is a Spanish-inspired Filipino classic.",
      "Chill thoroughly before unmolding."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Filipino-Spanish classic dessert",
    "better_than_store_bought": "Commercial versions use additives. Homemade has superior texture and flavor.",
    "hidden_nutrients": "Eggs provide protein and choline. Milk adds calcium.",
    "continent": "Asia",
    "slug": "leche-flan"
  },
  {
    "id": 57,
    "name": "Ube Halaya (Purple Yam Jam)",
    "country": "Philippines",
    "category": "Snack",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "500g ube (purple yam), boiled and mashed",
        "1 can sweetened condensed milk",
        "1 can evaporated milk",
        "100g butter",
        "100g sugar"
      ]
    },
    "steps": [
      "Mash Ube: Boil ube until tender. Mash until smooth.",
      "Heat: In a pan, melt butter. Add mashed ube.",
      "Add Milk: Add condensed and evaporated milk.",
      "Add Sugar: Add sugar.",
      "Cook: Cook over low heat, stirring continuously until thick.",
      "Cool: Let cool completely.",
      "Shape: Can be served as a spread or shaped into balls.",
      "Serve: Serve as a dessert or topping."
    ],
    "making_tips": [
      "Stir continuously to prevent burning.",
      "The ube should be cooked until it leaves the sides of the pan.",
      "This is a Filipino favorite used in many desserts.",
      "Can be stored in the refrigerator.",
      "The purple color is natural from the ube."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Filipino favorite dessert",
    "better_than_store_bought": "Commercial versions use artificial coloring. Homemade has real ube flavor.",
    "hidden_nutrients": "Ube provides antioxidants and fiber. Milk adds calcium.",
    "continent": "Asia",
    "slug": "ube-halaya-purple-yam-jam"
  },
  {
    "id": 58,
    "name": "Bibingka",
    "country": "Philippines",
    "category": "Snack",
    "time": "1 hour",
    "servings": "1 cake (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "200g rice flour",
        "100g sugar",
        "1 tsp baking powder",
        "300ml coconut milk",
        "2 eggs"
      ],
      "Toppings": [
        "Salted duck eggs, sliced",
        "Grated cheese",
        "Salted butter"
      ]
    },
    "steps": [
      "Make Batter: Mix rice flour, sugar, and baking powder.",
      "Add Coconut Milk: Gradually add coconut milk.",
      "Add Eggs: Beat eggs and fold in.",
      "Prepare Pan: Grease a pan and line with banana leaves.",
      "Pour Batter: Pour batter into pan.",
      "Add Toppings: Top with salted egg slices and cheese.",
      "Bake: Bake at 180°C for 25-30 minutes.",
      "Add Butter: Brush with butter.",
      "Cool: Let cool before serving.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Banana leaves add a distinct flavor.",
      "The salted eggs give a sweet-savory contrast.",
      "This is a Christmas classic in the Philippines.",
      "Can be cooked over coals for authentic flavor.",
      "Serve warm for the best experience."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Filipino Christmas favorite",
    "better_than_store_bought": "Street versions can be dry. Homemade is moister.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Rice flour is gluten-free.",
    "continent": "Asia",
    "slug": "bibingka"
  },
  {
    "id": 59,
    "name": "Banana Cue",
    "country": "Philippines",
    "category": "Snack",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "8 saba bananas (plantains)",
        "200g brown sugar",
        "Vegetable oil for frying"
      ]
    },
    "steps": [
      "Peel Bananas: Peel bananas.",
      "Heat Oil: Heat oil to 170°C.",
      "Caramelize Sugar: Melt brown sugar in the hot oil.",
      "Fry Bananas: Add bananas and fry until caramelized.",
      "Turn: Turn bananas to coat evenly.",
      "Remove: Remove and cool on skewers.",
      "Serve: Serve on a stick."
    ],
    "making_tips": [
      "Use saba bananas (plantains) for the best texture.",
      "The caramelized sugar gives the bananas their signature sweet crust.",
      "This is a popular Filipino street snack.",
      "Don't overcrowd the pan.",
      "Serve on a stick for authentic presentation."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Filipino street favorite",
    "better_than_store_bought": "Street versions can be oily. Homemade is less greasy.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Asia",
    "slug": "banana-cue"
  },
  {
    "id": 60,
    "name": "Sago't Gulaman (Tapioca and Jelly Drink)",
    "country": "Philippines",
    "category": "Beverage",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g tapioca pearls",
        "100g agar-agar jelly (gulaman)",
        "500ml water",
        "200g brown sugar",
        "Ice cubes"
      ]
    },
    "steps": [
      "Cook Tapioca: Cook tapioca pearls until translucent.",
      "Make Jelly: Dissolve agar-agar in water. Add sugar. Let set and cut into cubes.",
      "Make Syrup: Combine brown sugar and water. Heat until dissolved.",
      "Combine: Mix cooked tapioca, jelly cubes, and syrup.",
      "Chill: Refrigerate until cold.",
      "Pour: Pour over ice cubes.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "The tapioca should be soft and chewy.",
      "The jelly should be firm but bouncy.",
      "This is a popular Filipino street drink.",
      "Can be made with various flavored jellies.",
      "Serve ice-cold for the best experience."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Filipino street drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Tapioca provides carbohydrates for energy.",
    "continent": "Asia",
    "slug": "sagot-gulaman-tapioca-and-jelly-drink"
  },
  {
    "id": 61,
    "name": "Buko Juice (Young Coconut Juice)",
    "country": "Philippines",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 young coconuts",
        "Ice cubes",
        "Sugar (optional)"
      ]
    },
    "steps": [
      "Open Coconuts: Carefully open young coconuts.",
      "Drain Water: Drain coconut water into a pitcher.",
      "Scrape Meat: Scrape tender coconut meat.",
      "Mix: Combine coconut water and scraped meat.",
      "Strain: Strain if desired.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour into glasses over ice."
    ],
    "making_tips": [
      "Young coconuts are preferred for the sweetest water.",
      "The tender meat is a delicious addition.",
      "This is the ultimate Filipino thirst-quencher.",
      "No added sugar is needed; it's naturally sweet.",
      "Serve fresh for the best flavor."
    ],
    "health_rating": 85,
    "cultural_authenticity": "100% – Filipino natural drink",
    "better_than_store_bought": "Bottled coconut water has preservatives. Fresh is incomparable.",
    "hidden_nutrients": "Rich in potassium and electrolytes. Low in calories.",
    "continent": "Asia",
    "slug": "buko-juice-young-coconut-juice"
  },
  {
    "id": 62,
    "name": "Melon Juice",
    "country": "Philippines",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 large honeydew melon",
        "Sweetened condensed milk",
        "Ice cubes",
        "Water"
      ]
    },
    "steps": [
      "Prepare Melon: Peel and deseed honeydew. Cut into chunks.",
      "Blend: Blend melon chunks until smooth.",
      "Add Condensed Milk: Add condensed milk and blend again.",
      "Add Water: Add water to achieve desired consistency.",
      "Add Ice: Blend with ice cubes.",
      "Chill: Refrigerate until cold.",
      "Serve: Pour into glasses.",
      "Garnish: Optional with melon balls."
    ],
    "making_tips": [
      "Use a very ripe honeydew for natural sweetness.",
      "The condensed milk gives creaminess.",
      "This is a favorite Filipino summer cooler.",
      "Can be served with bubbles or tapioca pearls.",
      "Serve ice-cold."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Filipino summer cooler",
    "better_than_store_bought": "Cafe versions can be watery. Homemade is richer.",
    "hidden_nutrients": "Melon provides vitamin C and A. Milk adds calcium.",
    "continent": "Asia",
    "slug": "melon-juice"
  },
  {
    "id": 63,
    "name": "Klepon",
    "country": "Indonesia",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "200g glutinous rice flour",
        "Pandan juice",
        "Pinch of salt"
      ],
      "Filling": [
        "100g palm sugar (gula jawa), chopped"
      ],
      "Coating": [
        "100g fresh grated coconut"
      ]
    },
    "steps": [
      "Make Dough: Mix rice flour, pandan juice, and salt.",
      "Rest: Rest dough for 15 minutes.",
      "Prepare Filling: Chop palm sugar into small pieces.",
      "Form Balls: Divide dough into 15 pieces. Flatten each.",
      "Fill: Place a piece of palm sugar in center. Seal.",
      "Cook: Drop balls into boiling water. They will float when cooked.",
      "Remove: Remove with slotted spoon.",
      "Coat: Roll in fresh grated coconut.",
      "Serve: Serve warm or at room temperature."
    ],
    "making_tips": [
      "The palm sugar creates a liquid center when cooked.",
      "The green color comes from pandan juice.",
      "This is a popular Indonesian snack.",
      "The fresh coconut gives a nice texture contrast.",
      "Serve soon after coating."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Indonesian favorite snack",
    "better_than_store_bought": "Street versions can be dry. Homemade is softer.",
    "hidden_nutrients": "Coconut provides healthy fats. Rice flour is gluten-free.",
    "continent": "Asia",
    "slug": "klepon"
  },
  {
    "id": 64,
    "name": "Pisang Goreng (Indonesian)",
    "country": "Indonesia",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "12 pieces",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "50g rice flour",
        "1 tsp baking powder",
        "½ tsp salt",
        "200ml water"
      ],
      "Bananas": [
        "12 small bananas (pisang uli or pisang raja)"
      ],
      "Filling": [
        "Grated cheese",
        "Chocolate"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flours, baking powder, and salt. Add water.",
      "Prepare Bananas: Peel bananas. Optionally slice lengthwise.",
      "Heat Oil: Heat oil to 170°C.",
      "Coat Bananas: Dip bananas in batter.",
      "Add Filling: For filled version, insert cheese or chocolate.",
      "Fry: Fry until golden brown.",
      "Drain: Drain on paper towels.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "Indonesian pisang goreng is known for its crispy coating.",
      "The banana should be sweet and ripe.",
      "Adding cheese or chocolate gives a modern twist.",
      "The batter should be light and crispy.",
      "Serve with chili sauce or cheese."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Indonesian street snack",
    "better_than_store_bought": "Street versions can be greasy. Homemade is crispier.",
    "hidden_nutrients": "Bananas provide potassium and fiber.",
    "continent": "Asia",
    "slug": "pisang-goreng-indonesian"
  },
  {
    "id": 65,
    "name": "Dadar Gulung (Pandan Coconut Pancake)",
    "country": "Indonesia",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "10 rolls",
    "difficulty": "Medium",
    "ingredients": {
      "Crepe Batter": [
        "200g rice flour",
        "400ml coconut milk",
        "Pandan extract",
        "Pinch of salt"
      ],
      "Filling": [
        "100g palm sugar",
        "100g coconut",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Make Filling: Grate fresh coconut. Mix with palm sugar and salt.",
      "Make Crepe Batter: Mix rice flour, coconut milk, pandan extract, and salt.",
      "Cook Crepes: Heat a non-stick pan. Pour thin layer of batter.",
      "Flip: Flip and cook other side.",
      "Add Filling: Place filling on crepe.",
      "Roll: Roll tightly into a cylinder.",
      "Serve: Serve warm or at room temperature."
    ],
    "making_tips": [
      "The pandan gives the distinctive green color.",
      "The filling should be sweet and coconutty.",
      "This is a classic Indonesian snack.",
      "The crepes should be thin and flexible.",
      "Serve with coffee or tea."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Indonesian classic snack",
    "better_than_store_bought": "Street versions can be dry. Homemade is moister.",
    "hidden_nutrients": "Coconut provides healthy fats. Rice flour is gluten-free.",
    "continent": "Asia",
    "slug": "dadar-gulung-pandan-coconut-pancake"
  },
  {
    "id": 66,
    "name": "Es Campur (Mixed Ice)",
    "country": "Indonesia",
    "category": "Snack",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Base": [
        "Shaved ice",
        "Sweet syrup"
      ],
      "Toppings": [
        "Jelly cubes",
        "Nata de coco",
        "Fruits",
        "Red beans",
        "Coconut",
        "Avocado"
      ]
    },
    "steps": [
      "Prepare Toppings: Prepare all toppings individually.",
      "Shave Ice: Shave ice into fine consistency.",
      "Layer: In a bowl, layer toppings.",
      "Add Ice: Top with shaved ice.",
      "Add Syrup: Drizzle with sweet syrup.",
      "Add Condensed Milk: Top with condensed milk.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Es campur means 'mixed ice' in Indonesian.",
      "The toppings should be varied in colors and textures.",
      "This is a popular Indonesian dessert.",
      "Serve in a large bowl.",
      "Mix before eating."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Indonesian favorite dessert",
    "better_than_store_bought": "Street versions can have artificial toppings. Homemade uses real ingredients.",
    "hidden_nutrients": "Fruits provide vitamins. Beans add fiber.",
    "continent": "Asia",
    "slug": "es-campur-mixed-ice"
  },
  {
    "id": 67,
    "name": "Kue Cubit (Mini Pancakes)",
    "country": "Indonesia",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "20 mini pancakes",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "1 tsp baking powder",
        "150ml milk",
        "1 egg",
        "50g sugar"
      ],
      "Toppings": [
        "Chocolate sprinkles",
        "Cheese"
      ]
    },
    "steps": [
      "Make Batter: Mix flour, baking powder, and sugar.",
      "Add Milk: Gradually add milk.",
      "Add Egg: Beat in egg.",
      "Heat Pan: Heat a small round pan (or kue cubit mold).",
      "Pour Batter: Pour small amounts of batter.",
      "Cook: Cook until bubbles form.",
      "Add Toppings: Add chocolate sprinkles or cheese.",
      "Flip: Flip and cook other side.",
      "Remove: Remove with a fork.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The pan should be well-greased.",
      "Kue cubit means 'pinch cake' because of how they're served.",
      "This is a popular Indonesian street snack.",
      "Serve immediately while warm.",
      "Can be made with various toppings."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Indonesian street snack",
    "better_than_store_bought": "Street versions can be dry. Homemade is moister.",
    "hidden_nutrients": "Milk provides calcium. Eggs add protein.",
    "continent": "Asia",
    "slug": "kue-cubit-mini-pancakes"
  },
  {
    "id": 68,
    "name": "Es Cendol (Indonesian Cendol)",
    "country": "Indonesia",
    "category": "Beverage",
    "time": "45 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Cendol": [
        "200g rice flour",
        "100g mung bean flour",
        "400ml pandan juice",
        "½ tsp salt"
      ],
      "Coconut Milk": [
        "500ml coconut milk",
        "100g palm sugar",
        "Pinch of salt"
      ],
      "Toppings": [
        "Red beans",
        "Shaved ice"
      ]
    },
    "steps": [
      "Make Cendol Dough: Mix rice flour, mung bean flour, pandan juice, and salt.",
      "Steam: Steam dough until cooked.",
      "Strain: Press through a strainer into ice water.",
      "Chill: Chill in ice water.",
      "Make Syrup: Heat coconut milk, palm sugar, and salt. Chill.",
      "Assemble: Place cendol in bowls.",
      "Add Toppings: Add red beans.",
      "Add Ice: Top with shaved ice.",
      "Add Syrup: Pour coconut syrup over.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Indonesian cendol uses palm sugar for a richer flavor.",
      "The cendol should be soft and green.",
      "This is a popular Indonesian dessert drink.",
      "Serve ice-cold.",
      "The palm sugar gives a characteristic caramel flavor."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Indonesian favorite dessert drink",
    "better_than_store_bought": "Street versions can be too sweet. Homemade has better balance.",
    "hidden_nutrients": "Coconut milk provides healthy fats. Red beans add fiber.",
    "continent": "Asia",
    "slug": "es-cendol-indonesian-cendol"
  },
  {
    "id": 69,
    "name": "Es Teler (Fruit Cocktail Ice)",
    "country": "Indonesia",
    "category": "Beverage",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 avocados",
        "1 young coconut",
        "1 jackfruit",
        "500ml coconut milk",
        "Condensed milk",
        "Ice cubes"
      ]
    },
    "steps": [
      "Prepare Fruits: Dice avocado, scrape coconut meat, and slice jackfruit.",
      "Chill: Refrigerate fruits.",
      "Make Syrup: Mix coconut milk with condensed milk.",
      "Assemble: Place fruits in glasses.",
      "Add Syrup: Pour coconut syrup over.",
      "Add Ice: Add ice cubes.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Es teler was created in Surabaya in the 1980s.",
      "The combination of fruits is signature.",
      "Serve in a tall glass.",
      "Use ripe fruits for the best flavor.",
      "Can be garnished with coconut."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Indonesian signature drink",
    "better_than_store_bought": "Cafe versions can be watery. Homemade is richer.",
    "hidden_nutrients": "Avocado provides healthy fats. Coconut adds electrolytes.",
    "continent": "Asia",
    "slug": "es-teler-fruit-cocktail-ice"
  },
  {
    "id": 70,
    "name": "Wedang Jahe (Ginger Drink)",
    "country": "Indonesia",
    "category": "Beverage",
    "time": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "50g ginger, sliced",
        "500ml water",
        "100g palm sugar",
        "1 cinnamon stick",
        "2 cloves"
      ]
    },
    "steps": [
      "Boil Water: Bring water to boil.",
      "Add Ginger: Add sliced ginger.",
      "Add Spices: Add cinnamon and cloves.",
      "Add Sugar: Add palm sugar.",
      "Simmer: Simmer for 15 minutes.",
      "Strain: Strain into cups.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "This is a traditional Indonesian healing drink.",
      "The ginger should be fresh, not powdered.",
      "Can be served with additional honey.",
      "Excellent for cold weather.",
      "Use fresh palm sugar for authenticity."
    ],
    "health_rating": 80,
    "cultural_authenticity": "100% – Indonesian traditional drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is healing.",
    "hidden_nutrients": "Ginger has anti-inflammatory properties. Cinnamon aids blood sugar regulation.",
    "continent": "Asia",
    "slug": "wedang-jahe-ginger-drink"
  },
  {
    "id": 71,
    "name": "Pineapple Cake",
    "country": "Taiwan",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12 cakes",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "150g unsalted butter",
        "50g powdered sugar",
        "1 egg"
      ],
      "Filling": [
        "500g pineapple, chopped",
        "200g sugar"
      ]
    },
    "steps": [
      "Make Filling: Cook pineapple with sugar until thick.",
      "Cool: Let filling cool completely.",
      "Make Pastry: Cut butter into flour and sugar. Add egg.",
      "Chill: Chill pastry for 30 minutes.",
      "Divide: Divide pastry into 12 portions.",
      "Fill: Flatten each portion. Place filling in center. Seal.",
      "Mold: Press into molds.",
      "Bake: Bake at 180°C for 20-25 minutes.",
      "Cool: Let cool before removing.",
      "Serve: Serve at room temperature."
    ],
    "making_tips": [
      "The pineapple filling should be thick and jam-like.",
      "This is Taiwan's most famous snack.",
      "The shortbread crust should be buttery and crumbly.",
      "Can be made with other fruit fillings.",
      "Store in airtight container."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Taiwan's number one souvenir",
    "better_than_store_bought": "Commercial versions have additives. Homemade is superior.",
    "hidden_nutrients": "Pineapple provides vitamin C and bromelain.",
    "continent": "Asia",
    "slug": "pineapple-cake"
  },
  {
    "id": 72,
    "name": "Mango Shaved Ice (Mango Bing)",
    "country": "Taiwan",
    "category": "Snack",
    "time": "20 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500g ice block",
        "2 ripe mangoes",
        "Sweetened condensed milk",
        "Mango syrup"
      ]
    },
    "steps": [
      "Shave Ice: Shave ice into fine consistency.",
      "Prepare Mango: Peel and chop mangoes.",
      "Arrange: Arrange mango chunks over ice.",
      "Drizzle: Drizzle with condensed milk.",
      "Add Syrup: Add mango syrup.",
      "Serve: Serve immediately."
    ],
    "making_tips": [
      "Use the sweetest mangoes available.",
      "The ice should be snowy, not chunky.",
      "This is Taiwan's favorite summer dessert.",
      "Can be topped with extra mango chunks.",
      "Serve in a chilled bowl."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Taiwanese summer favorite",
    "better_than_store_bought": "Cafe versions use syrup. Homemade uses fresh mangoes.",
    "hidden_nutrients": "Mango provides vitamin A and C.",
    "continent": "Asia",
    "slug": "mango-shaved-ice-mango-bing"
  },
  {
    "id": 73,
    "name": "Taro Balls",
    "country": "Taiwan",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Taro Balls": [
        "250g taro, boiled and mashed",
        "100g tapioca flour",
        "50g sugar"
      ],
      "Soup": [
        "500ml water",
        "100g sugar",
        "Red beans"
      ]
    },
    "steps": [
      "Mash Taro: Boil taro until tender. Mash until smooth.",
      "Make Dough: Mix taro, tapioca flour, and sugar.",
      "Shape: Roll into small balls.",
      "Cook: Cook balls in boiling water. They will float when done.",
      "Make Soup: Heat water and sugar. Add red beans.",
      "Assemble: Place taro balls in bowls.",
      "Add Soup: Pour sweet soup over.",
      "Serve: Serve warm."
    ],
    "making_tips": [
      "The taro balls should be chewy.",
      "This is a popular Taiwanese dessert soup.",
      "Can be served with other toppings.",
      "The purple color is from the taro.",
      "Serve warm for the best texture."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Taiwanese dessert classic",
    "better_than_store_bought": "Street versions can be tough. Homemade is softer.",
    "hidden_nutrients": "Taro provides fiber and potassium. Red beans add protein.",
    "continent": "Asia",
    "slug": "taro-balls"
  },
  {
    "id": 74,
    "name": "Winter Melon Tea",
    "country": "Taiwan",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "500g winter melon",
        "200g rock sugar",
        "1.5 litres water"
      ]
    },
    "steps": [
      "Prepare Melon: Peel and dice winter melon.",
      "Cook: Combine melon, water, and rock sugar.",
      "Boil: Bring to boil, then reduce heat.",
      "Simmer: Simmer for 45 minutes.",
      "Strain: Strain and discard solids.",
      "Cool: Let cool completely.",
      "Chill: Refrigerate until cold.",
      "Serve: Serve chilled over ice."
    ],
    "making_tips": [
      "Winter melon has a mild, slightly sweet flavor.",
      "The rock sugar gives a smooth sweetness.",
      "This is a traditional Taiwanese drink.",
      "Can be served hot in winter.",
      "Store in the refrigerator."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Taiwanese traditional drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresher.",
    "hidden_nutrients": "Winter melon provides hydration and trace minerals.",
    "continent": "Asia",
    "slug": "winter-melon-tea"
  },
  {
    "id": 75,
    "name": "Aiyu Jelly Drink",
    "country": "Taiwan",
    "category": "Beverage",
    "time": "30 minutes (plus setting)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Jelly": [
        "20g aiyu seeds",
        "500ml water",
        "50g sugar"
      ],
      "Syrup": [
        "Lemon juice",
        "Sugar syrup"
      ]
    },
    "steps": [
      "Prepare Aiyu: Wrap aiyu seeds in a muslin bag.",
      "Soak: Soak bag in water for 10 minutes.",
      "Squeeze: Squeeze the bag to extract the gel.",
      "Set: Let sit for 30 minutes to set.",
      "Make Syrup: Prepare lemon syrup.",
      "Chop Jelly: Cut the set jelly into cubes.",
      "Assemble: Place jelly in glasses.",
      "Add Syrup: Pour lemon syrup over.",
      "Add Ice: Add ice cubes.",
      "Serve: Serve chilled."
    ],
    "making_tips": [
      "Aiyu jelly has a unique, slightly tart flavor.",
      "The jelly should be soft and bouncy.",
      "This is a popular Taiwanese summer drink.",
      "Aiyu seeds are from a plant native to Taiwan.",
      "Serve ice-cold for the best experience."
    ],
    "health_rating": 70,
    "cultural_authenticity": "100% – Taiwanese signature drink",
    "better_than_store_bought": "Bottled versions use artificial jelly. Homemade has real aiyu.",
    "hidden_nutrients": "Aiyu jelly contains fiber and trace minerals.",
    "continent": "Asia",
    "slug": "aiyu-jelly-drink"
  },
  {
    "id": 214,
    "name": "Croissant",
    "country": "France",
    "category": "Snack",
    "time": "8 hours (includes chilling and rising)",
    "servings": "12 croissants",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "60g sugar",
        "10g salt",
        "7g instant yeast",
        "300ml cold water",
        "40g unsalted butter, softened"
      ],
      "Butter Layer": [
        "250g unsalted butter, cold"
      ],
      "Egg Wash": [
        "1 egg",
        "1 tbsp milk"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, sugar, salt, and yeast. Add water and softened butter.",
      "Knead until smooth. Rest in the refrigerator for 1 hour.",
      "Prepare Butter: Flatten cold butter into a rectangle between parchment paper.",
      "Roll dough into a large rectangle. Place butter on one half and fold over.",
      "Roll out the dough and fold into thirds (letter fold). Chill for 1 hour.",
      "Repeat the rolling and folding process two more times, chilling between each.",
      "Roll dough to 5mm thickness. Cut into triangles.",
      "Roll each triangle from the wide end to form crescent shapes.",
      "Place on a baking sheet and let rise for 1-2 hours.",
      "Preheat oven to 200°C.",
      "Brush with egg wash.",
      "Bake for 15-18 minutes until golden and puffed."
    ],
    "making_tips": [
      "Keep the butter cold at all times—this creates the flaky layers.",
      "The dough should rest between each fold to prevent the butter from melting.",
      "The final rise should be at room temperature until the croissants are puffy.",
      "Don't rush the process—croissants require patience.",
      "Serve warm, fresh from the oven."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – The iconic French pastry",
    "better_than_store_bought": "Commercial croissants have additives. Homemade are buttery, flaky, and exquisite.",
    "hidden_nutrients": "Eggs provide protein. Butter offers vitamin A.",
    "continent": "Europe",
    "slug": "croissant"
  },
  {
    "id": 215,
    "name": "Macaron",
    "country": "France",
    "category": "Snack",
    "time": "2 hours (plus resting)",
    "servings": "24 macarons",
    "difficulty": "Hard",
    "ingredients": {
      "Meringue": [
        "120g egg whites, aged",
        "150g granulated sugar",
        "150g powdered sugar",
        "150g almond flour",
        "Food coloring"
      ],
      "Ganache": [
        "150g dark chocolate",
        "150ml heavy cream",
        "30g unsalted butter"
      ]
    },
    "steps": [
      "Sift almond flour and powdered sugar together. Set aside.",
      "Whip egg whites until foamy. Gradually add sugar and beat to stiff peaks.",
      "Fold the almond flour mixture into the meringue gently.",
      "Add food coloring and fold until the batter is smooth and flows like lava.",
      "Pipe small circles onto parchment-lined baking sheets.",
      "Tap the baking sheets to remove air bubbles.",
      "Let macarons rest at room temperature for 30-60 minutes until a skin forms.",
      "Preheat oven to 150°C.",
      "Bake for 14-16 minutes.",
      "Cool completely before removing.",
      "Make Ganache: Heat cream and pour over chocolate. Add butter and stir until smooth.",
      "Pipe ganache onto one macaron and sandwich with another."
    ],
    "making_tips": [
      "The eggs should be aged (left at room temperature for 24 hours).",
      "The batter should be folded gently—overmixing ruins the texture.",
      "The 'skin' is essential for the iconic 'feet' of the macaron.",
      "Macarons are finicky but rewarding.",
      "They taste better the next day after the filling softens."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – French pâtisserie icon",
    "better_than_store_bought": "Homemade macarons have a better almond flavor and fresh ganache.",
    "hidden_nutrients": "Almonds provide vitamin E and healthy fats.",
    "continent": "Europe",
    "slug": "macaron"
  },
  {
    "id": 216,
    "name": "Pain au Chocolat",
    "country": "France",
    "category": "Snack",
    "time": "8 hours (includes chilling and rising)",
    "servings": "12 pastries",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "60g sugar",
        "10g salt",
        "7g instant yeast",
        "300ml cold water",
        "40g unsalted butter, softened"
      ],
      "Butter Layer": [
        "250g unsalted butter, cold"
      ],
      "Filling": [
        "12 chocolate batons (or good dark chocolate)"
      ],
      "Egg Wash": [
        "1 egg",
        "1 tbsp milk"
      ]
    },
    "steps": [
      "Make Dough and fold butter using the same process as croissants.",
      "After the final fold, roll dough into a large rectangle.",
      "Cut into 12 rectangles.",
      "Place a chocolate baton at one edge of each rectangle.",
      "Roll the dough tightly around the chocolate.",
      "Place on a baking sheet, seam side down.",
      "Let rise for 1-2 hours.",
      "Preheat oven to 200°C.",
      "Brush with egg wash.",
      "Bake for 15-18 minutes until golden."
    ],
    "making_tips": [
      "Use high-quality chocolate batons—they should be thick enough to hold their shape.",
      "The dough process is identical to croissants.",
      "Don't overfill or the chocolate will leak.",
      "The pastries should be golden and puffed.",
      "Best served warm."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – French breakfast classic",
    "better_than_store_bought": "Commercial versions use poor-quality chocolate. Homemade uses real chocolate.",
    "hidden_nutrients": "Dark chocolate provides antioxidants. Eggs add protein.",
    "continent": "Europe",
    "slug": "pain-au-chocolat"
  },
  {
    "id": 217,
    "name": "Crème Brûlée",
    "country": "France",
    "category": "Snack",
    "time": "1 hour (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Custard": [
        "500ml heavy cream",
        "1 vanilla bean (or 1 tsp vanilla paste)",
        "5 egg yolks",
        "100g granulated sugar"
      ],
      "Caramel Topping": [
        "50g granulated sugar"
      ]
    },
    "steps": [
      "Preheat oven to 150°C.",
      "In a pot, heat cream with vanilla bean (split and scraped) until steaming. Remove from heat.",
      "In a bowl, whisk egg yolks and sugar until pale.",
      "Slowly pour hot cream into the egg mixture while whisking.",
      "Strain the mixture through a fine sieve.",
      "Pour into four ramekins.",
      "Place ramekins in a baking dish with hot water (water bath).",
      "Bake for 35-40 minutes until set but still jiggly.",
      "Chill for at least 2 hours.",
      "Just before serving, sprinkle sugar on top.",
      "Caramelize with a kitchen torch until golden and crisp."
    ],
    "making_tips": [
      "The water bath ensures even, gentle cooking.",
      "The custard should be silky with no bubbles.",
      "The sugar topping should be caramelized just before serving.",
      "Use a torch for the best results—a broiler can work but watch carefully.",
      "The crack of the caramel is the signature of crème brûlée."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – French dessert elegance",
    "better_than_store_bought": "Commercial crème brûlée is often too firm. Homemade is perfectly silky.",
    "hidden_nutrients": "Cream provides calcium. Egg yolks offer choline and vitamin D.",
    "continent": "Europe",
    "slug": "crme-brle"
  },
  {
    "id": 218,
    "name": "Madeleine",
    "country": "France",
    "category": "Snack",
    "time": "1 hour (plus chilling)",
    "servings": "12 madeleines",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "150g all-purpose flour",
        "150g unsalted butter, melted",
        "150g granulated sugar",
        "3 large eggs",
        "1 tsp baking powder",
        "1 tsp vanilla extract",
        "Zest of 1 lemon"
      ]
    },
    "steps": [
      "In a bowl, whisk eggs and sugar until pale and thick.",
      "Add vanilla and lemon zest.",
      "Sift flour and baking powder together. Fold gently into the egg mixture.",
      "Fold in melted butter.",
      "Cover and chill the batter for 1 hour (essential for the hump).",
      "Preheat oven to 190°C. Grease a madeleine mold.",
      "Spoon batter into the molds, filling ¾ full.",
      "Bake for 10-12 minutes until the hump forms and edges are golden.",
      "Remove from the mold immediately.",
      "Cool on a wire rack."
    ],
    "making_tips": [
      "Chilling the batter creates the signature hump.",
      "The pan should be well-greased for easy release.",
      "Don't overfill—the batter expands.",
      "Madeleines are best eaten the same day.",
      "They are Proust's famous tea cake."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – French classic cake",
    "better_than_store_bought": "Packaged madeleines are dry. Homemade are soft and buttery.",
    "hidden_nutrients": "Eggs provide protein. Butter offers vitamin A.",
    "continent": "Europe",
    "slug": "madeleine"
  },
  {
    "id": 219,
    "name": "Café au Lait",
    "country": "France",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 tbsp dark roast coffee",
        "240ml hot water",
        "240ml hot milk"
      ]
    },
    "steps": [
      "Brew strong coffee using a French press or drip method.",
      "Heat milk until steaming (not boiling).",
      "Pour coffee into large cups.",
      "Add hot milk in equal parts.",
      "Serve immediately."
    ],
    "making_tips": [
      "The classic French café au lait is served in a large bowl.",
      "Milk and coffee should be hot and fresh.",
      "The ratio is 1:1 coffee to milk.",
      "Often served with breakfast.",
      "This is the French version of a latte."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – French breakfast staple",
    "better_than_store_bought": "Cafe versions can't match the simplicity of fresh-brewed.",
    "hidden_nutrients": "Coffee provides antioxidants. Milk adds calcium.",
    "continent": "Europe",
    "slug": "caf-au-lait"
  },
  {
    "id": 220,
    "name": "Tiramisu",
    "country": "Italy",
    "category": "Snack",
    "time": "1 hour (plus chilling)",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Mascarpone Cream": [
        "500g mascarpone cheese",
        "4 egg yolks",
        "100g granulated sugar",
        "240ml heavy cream"
      ],
      "Coffee Mixture": [
        "400ml strong brewed coffee, cooled",
        "2 tbsp sugar (optional)"
      ],
      "Assembly": [
        "300g ladyfinger cookies (savoiardi)",
        "Unsweetened cocoa powder for dusting"
      ]
    },
    "steps": [
      "In a bowl, whisk egg yolks and sugar until pale and thick.",
      "Add mascarpone cheese and mix until smooth.",
      "In another bowl, whip heavy cream to stiff peaks.",
      "Fold whipped cream into the mascarpone mixture.",
      "Brew coffee and let cool completely. Add sugar if desired.",
      "Dip ladyfingers quickly in the coffee—do not soak.",
      "Layer dipped ladyfingers in a dish.",
      "Spread half the mascarpone cream over them.",
      "Repeat with another layer of dipped ladyfingers and cream.",
      "Dust with cocoa powder.",
      "Chill for at least 4 hours.",
      "Serve cold."
    ],
    "making_tips": [
      "Dip ladyfingers quickly—they should be moist but not soggy.",
      "Use high-quality mascarpone for the creamiest texture.",
      "The coffee should be strong and cooled.",
      "Chill thoroughly for the flavors to meld.",
      "Dust with cocoa just before serving."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Italy's most famous dessert",
    "better_than_store_bought": "Commercial tiramisu has stabilizers. Homemade is creamy and luxurious.",
    "hidden_nutrients": "Eggs provide protein. Mascarpone offers calcium.",
    "continent": "Europe",
    "slug": "tiramisu"
  },
  {
    "id": 221,
    "name": "Biscotti",
    "country": "Italy",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "24 biscotti",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "300g all-purpose flour",
        "200g granulated sugar",
        "1 tsp baking powder",
        "½ tsp salt",
        "3 large eggs",
        "1 tsp vanilla",
        "Zest of 1 lemon",
        "200g whole almonds, toasted"
      ]
    },
    "steps": [
      "Preheat oven to 180°C.",
      "Mix flour, sugar, baking powder, and salt.",
      "Add eggs, vanilla, and lemon zest. Mix to a dough.",
      "Fold in toasted almonds.",
      "Shape dough into two logs (about 30cm long).",
      "Place on a lined baking sheet.",
      "Bake for 30 minutes until golden and firm.",
      "Cool for 10 minutes.",
      "Slice logs diagonally into 1cm thick pieces.",
      "Arrange slices cut-side down on the baking sheet.",
      "Bake for another 10-15 minutes until crisp.",
      "Cool completely."
    ],
    "making_tips": [
      "Biscotti are twice-baked—this gives them their signature crunch.",
      "Toast the almonds for a deeper flavor.",
      "They are perfect for dipping in coffee or wine.",
      "The second bake should be until crisp but not dark.",
      "Store in an airtight container for weeks."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Italian coffee companion",
    "better_than_store_bought": "Commercial biscotti are often too hard. Homemade have better texture and flavor.",
    "hidden_nutrients": "Almonds provide vitamin E and healthy fats. Eggs offer protein.",
    "continent": "Europe",
    "slug": "biscotti"
  },
  {
    "id": 222,
    "name": "Cannoli",
    "country": "Italy",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12 cannoli",
    "difficulty": "Hard",
    "ingredients": {
      "Shells": [
        "250g all-purpose flour",
        "25g sugar",
        "½ tsp salt",
        "50g butter or lard",
        "1 egg",
        "60ml marsala wine (or white wine)",
        "Oil for frying"
      ],
      "Filling": [
        "500g ricotta cheese, drained",
        "150g powdered sugar",
        "50g mini chocolate chips",
        "½ tsp vanilla"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, sugar, and salt. Cut in butter.",
      "Add egg and wine. Knead until smooth. Rest 30 minutes.",
      "Roll dough very thinly (2mm). Cut into circles.",
      "Wrap dough around cannoli tubes, sealing edges with egg white.",
      "Heat oil to 170°C.",
      "Fry shells until golden and crisp (2-3 minutes).",
      "Cool slightly and remove from tubes.",
      "Make Filling: Drain ricotta overnight.",
      "Mix ricotta, powdered sugar, chocolate chips, and vanilla.",
      "Fill shells just before serving.",
      "Dust with powdered sugar."
    ],
    "making_tips": [
      "Ricotta must be drained well to prevent a watery filling.",
      "Fill shells just before serving to keep them crisp.",
      "Traditionally, cannoli are filled through the ends.",
      "These are a Sicilian specialty.",
      "The shells should be light and crisp."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Sicilian icon",
    "better_than_store_bought": "Commercial cannoli are often soggy. Homemade shells are crisp, filling is fresh.",
    "hidden_nutrients": "Ricotta provides calcium and protein. Chocolate offers antioxidants.",
    "continent": "Europe",
    "slug": "cannoli"
  },
  {
    "id": 223,
    "name": "Panna Cotta",
    "country": "Italy",
    "category": "Snack",
    "time": "45 minutes (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Custard": [
        "500ml heavy cream",
        "100g granulated sugar",
        "1 vanilla bean",
        "2 tsp powdered gelatin",
        "60ml cold water"
      ],
      "Berry Sauce": [
        "200g mixed berries",
        "50g sugar",
        "1 tbsp lemon juice"
      ]
    },
    "steps": [
      "Sprinkle gelatin over cold water. Let bloom for 10 minutes.",
      "In a pot, heat cream, sugar, and vanilla bean (split) until steaming.",
      "Remove vanilla bean. Add gelatin and stir until dissolved.",
      "Strain into a bowl.",
      "Pour into ramekins or molds.",
      "Chill for at least 4 hours until set.",
      "Make Berry Sauce: Cook berries, sugar, and lemon juice until soft.",
      "Unmold panna cotta onto plates.",
      "Top with berry sauce.",
      "Serve cold."
    ],
    "making_tips": [
      "Panna cotta means 'cooked cream' in Italian.",
      "The gelatin should be just set—not too firm.",
      "Unmold by dipping ramekins in hot water for a few seconds.",
      "The berry sauce adds a tart contrast.",
      "Serve chilled."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Italian cream dessert",
    "better_than_store_bought": "Commercial panna cotta has gums and stabilizers. Homemade is silky and pure.",
    "hidden_nutrients": "Cream provides calcium. Berries add antioxidants.",
    "continent": "Europe",
    "slug": "panna-cotta"
  },
  {
    "id": 224,
    "name": "Espresso",
    "country": "Italy",
    "category": "Beverage",
    "time": "5 minutes",
    "servings": "2 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "30g finely ground espresso coffee",
        "120ml water"
      ]
    },
    "steps": [
      "Use an espresso machine or Moka pot.",
      "For a Moka pot: Fill the lower chamber with water.",
      "Add coffee to the filter basket.",
      "Assemble and heat on medium.",
      "When coffee starts bubbling, remove from heat.",
      "Pour into small cups.",
      "Serve immediately."
    ],
    "making_tips": [
      "The grind should be fine but not too fine.",
      "Water should be hot but not boiling for a Moka pot.",
      "The crema (foam) is the sign of a good espresso.",
      "Italian espresso is served in small cups.",
      "It's meant to be drunk quickly."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Italy's soul in a cup",
    "better_than_store_bought": "Coffee shops can't match the ritual of a homemade espresso.",
    "hidden_nutrients": "Coffee provides antioxidants.",
    "continent": "Europe",
    "slug": "espresso"
  },
  {
    "id": 225,
    "name": "Churros con Chocolate (Spanish)",
    "country": "Spain",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "12 churros",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "250ml water",
        "60g unsalted butter",
        "25g sugar",
        "½ tsp salt",
        "150g all-purpose flour",
        "2 large eggs"
      ],
      "Chocolate Sauce": [
        "200g dark chocolate",
        "200ml heavy cream",
        "1 tbsp sugar"
      ],
      "Coating": [
        "100g sugar",
        "2 tsp cinnamon"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Dough: Boil water, butter, sugar, and salt. Add flour and stir.",
      "Add eggs one at a time, beating well.",
      "Transfer to a piping bag with a star nozzle.",
      "Heat oil to 170°C.",
      "Pipe dough into oil, cutting with scissors.",
      "Fry until golden and crisp.",
      "Drain on paper towels.",
      "Mix sugar and cinnamon. Roll churros in the mixture.",
      "Make Sauce: Heat cream and chocolate until smooth.",
      "Serve warm with the chocolate sauce."
    ],
    "making_tips": [
      "Spanish churros are traditionally eaten with thick chocolate.",
      "The chocolate sauce should be thick and rich.",
      "Use a star nozzle for the signature ridges.",
      "Best served fresh and hot.",
      "This is the Spanish breakfast treat."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Spain's iconic treat",
    "better_than_store_bought": "Commercial churros are often frozen. Homemade are fresh and crisp.",
    "hidden_nutrients": "Dark chocolate provides antioxidants. Eggs offer protein.",
    "continent": "Europe",
    "slug": "churros-con-chocolate-spanish"
  },
  {
    "id": 226,
    "name": "Turrón (Spanish Nougat)",
    "country": "Spain",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "300g honey",
        "200g granulated sugar",
        "2 egg whites",
        "300g whole almonds, toasted",
        "1 tsp vanilla",
        "Zest of 1 lemon",
        "Wafer paper (optional)"
      ]
    },
    "steps": [
      "Toast almonds lightly.",
      "In a heavy pot, combine honey, sugar, and 60ml water. Heat to 150°C.",
      "In a separate bowl, beat egg whites to soft peaks.",
      "Slowly pour hot syrup into egg whites while beating.",
      "Add almonds, vanilla, and lemon zest.",
      "Continue beating until the mixture thickens.",
      "Pour into a mold lined with wafer paper.",
      "Press firmly.",
      "Let cool completely.",
      "Cut into pieces."
    ],
    "making_tips": [
      "Turrón is a Spanish Christmas tradition.",
      "The temperature is critical—use a candy thermometer.",
      "Work quickly as it sets fast.",
      "There are two types: hard (Alicante) and soft (Jijona).",
      "The wafer paper is traditional but optional."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Spanish Christmas tradition",
    "better_than_store_bought": "Commercial turrón has additives. Homemade is pure honey and almond flavor.",
    "hidden_nutrients": "Almonds provide vitamin E and healthy fats. Honey has trace minerals.",
    "continent": "Europe",
    "slug": "turrn-spanish-nougat"
  },
  {
    "id": 227,
    "name": "Horchata de Chufa (Spanish)",
    "country": "Spain",
    "category": "Beverage",
    "time": "8 hours (includes soaking)",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "250g tiger nuts (chufas)",
        "1 litre water",
        "100g sugar",
        "1 cinnamon stick"
      ]
    },
    "steps": [
      "Rinse tiger nuts and soak in water overnight.",
      "Drain and rinse again.",
      "Blend tiger nuts with 500ml fresh water until smooth.",
      "Strain through a cheesecloth or nut milk bag.",
      "Add remaining water, sugar, and cinnamon.",
      "Stir to dissolve sugar.",
      "Chill thoroughly.",
      "Serve cold over ice."
    ],
    "making_tips": [
      "Horchata is Spain's favorite summer drink, especially from Valencia.",
      "Tiger nuts should be soaked thoroughly.",
      "Straining is essential for a smooth drink.",
      "The cinnamon gives it a lovely warmth.",
      "Serve ice-cold."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Spanish summer classic",
    "better_than_store_bought": "Bottled horchata has additives. Homemade is pure and creamy.",
    "hidden_nutrients": "Tiger nuts provide fiber and healthy fats. Cinnamon aids blood sugar regulation.",
    "continent": "Europe",
    "slug": "horchata-de-chufa-spanish"
  },
  {
    "id": 228,
    "name": "Soft Pretzels (German)",
    "country": "Germany",
    "category": "Snack",
    "time": "2 hours (includes rising)",
    "servings": "12 pretzels",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "7g instant yeast",
        "50g sugar",
        "1 tsp salt",
        "300ml warm water",
        "50g unsalted butter, melted"
      ],
      "Lye Bath": [
        "2 litres water",
        "2 tbsp baking soda"
      ],
      "Topping": [
        "Coarse salt",
        "Melted butter"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, and salt. Add water and butter. Knead until smooth.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Divide into 12 pieces.",
      "Roll each into a rope and shape into a pretzel.",
      "Preheat oven to 220°C.",
      "Make Lye Bath: Boil water with baking soda.",
      "Dip each pretzel in the boiling water for 30 seconds.",
      "Place on a baking sheet. Sprinkle with salt.",
      "Bake for 12-15 minutes until golden.",
      "Brush with melted butter."
    ],
    "making_tips": [
      "The baking soda bath gives pretzels their signature crust.",
      "Don't skip the bath—it's essential.",
      "The pretzels should be golden brown.",
      "Serve warm with butter.",
      "German pretzels are a beer garden favorite."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – German baking tradition",
    "better_than_store_bought": "Commercial pretzels are often dry. Homemade are soft and fresh.",
    "hidden_nutrients": "Flour provides carbohydrates. Butter offers vitamin A.",
    "continent": "Europe",
    "slug": "soft-pretzels-german"
  },
  {
    "id": 229,
    "name": "Apfelstrudel (Apple Strudel)",
    "country": "Germany/Austria",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "8 slices",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "1 egg",
        "2 tbsp vegetable oil",
        "Pinch of salt",
        "120ml warm water"
      ],
      "Filling": [
        "6-8 apples, peeled and sliced",
        "100g sugar",
        "100g breadcrumbs",
        "50g raisins",
        "1 tsp cinnamon",
        "Zest of 1 lemon",
        "100g butter, melted"
      ],
      "Topping": [
        "Powdered sugar"
      ]
    },
    "steps": [
      "Make Pastry: Mix flour, egg, oil, salt, and water. Knead until smooth. Rest 1 hour.",
      "Make Filling: Mix apples, sugar, cinnamon, raisins, and lemon zest.",
      "Roll pastry as thin as possible on a floured cloth.",
      "Sprinkle breadcrumbs over the pastry.",
      "Spread filling over the bottom third.",
      "Fold sides over and roll up using the cloth.",
      "Place on a baking sheet. Brush with melted butter.",
      "Bake at 190°C for 40-45 minutes until golden.",
      "Dust with powdered sugar.",
      "Serve warm."
    ],
    "making_tips": [
      "The pastry must be rolled paper-thin—this takes practice.",
      "Breadcrumbs absorb juice and prevent sogginess.",
      "Strudel is originally from Austria but beloved in Germany.",
      "Serve warm with vanilla sauce.",
      "The powdered sugar is a must."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – German-Austrian classic",
    "better_than_store_bought": "Commercial strudel is often soggy. Homemade has crisp pastry and fresh apple filling.",
    "hidden_nutrients": "Apples provide fiber and vitamin C. Raisins offer iron.",
    "continent": "Europe",
    "slug": "apfelstrudel-apple-strudel"
  },
  {
    "id": 230,
    "name": "Scones with Jam (British)",
    "country": "United Kingdom",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "8 scones",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Dough": [
        "350g self-raising flour",
        "1 tsp baking powder",
        "80g unsalted butter, cold",
        "50g sugar",
        "240ml milk",
        "1 egg (for egg wash)"
      ],
      "Toppings": [
        "Strawberry jam",
        "Clotted cream"
      ]
    },
    "steps": [
      "Preheat oven to 220°C.",
      "Sift flour and baking powder into a bowl.",
      "Cut butter into the flour until it resembles breadcrumbs.",
      "Add sugar and mix.",
      "Gradually add milk and mix to a soft dough.",
      "Turn onto a floured surface and knead gently.",
      "Roll to 2cm thickness. Cut into rounds.",
      "Place on a baking sheet.",
      "Brush with egg wash.",
      "Bake for 12-15 minutes until golden.",
      "Serve with jam and clotted cream."
    ],
    "making_tips": [
      "Handle the dough gently for a light texture.",
      "Don't overwork the dough or the scones will be tough.",
      "The debate over jam vs cream first is classic.",
      "Serve warm, fresh from the oven.",
      "This is the British tea-time tradition."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – British tea-time icon",
    "better_than_store_bought": "Commercial scones can be dry. Homemade are light and buttery.",
    "hidden_nutrients": "Milk provides calcium. Jam offers antioxidants.",
    "continent": "Europe",
    "slug": "scones-with-jam-british"
  },
  {
    "id": 231,
    "name": "English Breakfast Tea",
    "country": "United Kingdom",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 English breakfast tea bags (or 2 tsp loose leaf)",
        "500ml boiling water",
        "Milk (to taste)",
        "Sugar (to taste)"
      ]
    },
    "steps": [
      "Boil fresh water.",
      "Warm the teapot with a little boiling water, then discard.",
      "Add tea bags or loose tea.",
      "Pour boiling water over the tea.",
      "Steep for 3-5 minutes.",
      "Strain into cups.",
      "Add milk and sugar to taste.",
      "Serve hot."
    ],
    "making_tips": [
      "Use fresh, cold water—never reboil.",
      "The tea should be strong enough to taste through the milk.",
      "Milk is added after the tea.",
      "This is the classic British cuppa.",
      "Steep for exactly 3 minutes for the perfect brew."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – The great British brew",
    "better_than_store_bought": "Tea bags from cafes can't match a properly brewed pot.",
    "hidden_nutrients": "Tea provides antioxidants. Milk adds calcium.",
    "continent": "Europe",
    "slug": "english-breakfast-tea"
  },
  {
    "id": 232,
    "name": "Baklava (Greek)",
    "country": "Greece",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry (about 20 sheets)",
        "250g unsalted butter, melted"
      ],
      "Filling": [
        "400g walnuts (or a mix of nuts), finely chopped",
        "150g sugar",
        "1 tsp cinnamon"
      ],
      "Syrup": [
        "200g sugar",
        "200ml water",
        "1 tbsp honey",
        "1 cinnamon stick",
        "1 lemon peel"
      ]
    },
    "steps": [
      "Preheat oven to 160°C.",
      "Mix nuts, sugar, and cinnamon.",
      "Butter a baking dish.",
      "Layer 10 sheets of phyllo, brushing each with butter.",
      "Spread half the nut mixture.",
      "Layer 5 more sheets with butter.",
      "Spread remaining nut mixture.",
      "Top with remaining phyllo sheets, buttering each.",
      "Cut into diamond shapes before baking.",
      "Bake for 45-50 minutes until golden.",
      "Make Syrup: Boil sugar, water, honey, cinnamon, and lemon for 15 minutes.",
      "Pour hot syrup over the baked baklava.",
      "Let soak for several hours.",
      "Serve at room temperature."
    ],
    "making_tips": [
      "Phyllo pastry dries out quickly—cover with a damp cloth.",
      "The syrup should be hot, the baklava hot—this is essential.",
      "Let it soak overnight for the best results.",
      "The nuts should be finely chopped for texture.",
      "Greece claims baklava as their own."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Greek Mediterranean classic",
    "better_than_store_bought": "Commercial baklava is often dry. Homemade is syrup-soaked and nutty.",
    "hidden_nutrients": "Walnuts provide healthy fats and omega-3s. Cinnamon aids blood sugar regulation.",
    "continent": "Europe",
    "slug": "baklava-greek"
  },
  {
    "id": 233,
    "name": "Loukoumades",
    "country": "Greece",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "7g instant yeast",
        "50g sugar",
        "½ tsp salt",
        "300ml warm water",
        "1 tsp vanilla"
      ],
      "Syrup": [
        "200g honey",
        "100ml water",
        "1 cinnamon stick"
      ],
      "Topping": [
        "Ground cinnamon",
        "Chopped walnuts"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, and salt. Add warm water and vanilla.",
      "Beat until smooth and sticky. Let rise 1 hour.",
      "Heat oil to 170°C.",
      "Using a spoon, drop small spoonfuls of dough into hot oil.",
      "Fry until golden and puffed (2-3 minutes).",
      "Drain on paper towels.",
      "Make Syrup: Heat honey, water, and cinnamon.",
      "Drizzle syrup over the warm loukoumades.",
      "Sprinkle with cinnamon and walnuts.",
      "Serve warm."
    ],
    "making_tips": [
      "The batter should be thick and sticky.",
      "Don't overcrowd the fryer.",
      "These are Greek honey doughnuts.",
      "Traditionally served during celebrations.",
      "Best served fresh."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Greek honey doughnut",
    "better_than_store_bought": "Street versions can be greasy. Homemade are light and fragrant.",
    "hidden_nutrients": "Walnuts provide healthy fats. Honey has antibacterial properties.",
    "continent": "Europe",
    "slug": "loukoumades"
  },
  {
    "id": 234,
    "name": "Greek Frappe",
    "country": "Greece",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 tsp instant coffee (or Greek frappe coffee)",
        "100ml cold water",
        "Sugar (to taste)",
        "120ml cold milk (optional)",
        "Ice cubes"
      ]
    },
    "steps": [
      "In a shaker or jar, combine coffee, water, and sugar.",
      "Shake vigorously for 30 seconds until frothy.",
      "Pour into tall glasses.",
      "Add ice cubes.",
      "Add cold milk if desired.",
      "Serve with a straw."
    ],
    "making_tips": [
      "The shake creates the signature foam.",
      "Frappe is Greece's favorite iced coffee.",
      "It should be frothy and cold.",
      "Sugar is traditionally added to the coffee before shaking.",
      "Serve with a tall glass and straw."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Greece's national coffee",
    "better_than_store_bought": "Cafe versions can't match the frothy homemade version.",
    "hidden_nutrients": "Coffee provides antioxidants. Milk adds calcium.",
    "continent": "Europe",
    "slug": "greek-frappe"
  },
  {
    "id": 235,
    "name": "Stroopwafel (Dutch)",
    "country": "Netherlands",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12 stroopwafels",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "300g all-purpose flour",
        "100g unsalted butter, softened",
        "100g granulated sugar",
        "1 large egg",
        "1 tsp yeast",
        "1 tsp cinnamon",
        "Pinch of salt",
        "60ml warm milk"
      ],
      "Syrup": [
        "200g dark corn syrup (or golden syrup)",
        "100g brown sugar",
        "60g unsalted butter"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, sugar, yeast, cinnamon, and salt.",
      "Add butter, egg, and milk. Knead until smooth.",
      "Cover and rest 1 hour.",
      "Make Syrup: Heat syrup, brown sugar, and butter until combined. Keep warm.",
      "Divide dough into 24 small balls.",
      "Preheat a waffle iron.",
      "Press two balls together to form one waffle.",
      "Cook for 1 minute until golden.",
      "Carefully split the waffle in half.",
      "Spread warm syrup on one half and top with the other.",
      "Press gently to seal.",
      "Cool on a rack."
    ],
    "making_tips": [
      "A waffle iron is essential for authentic stroopwafels.",
      "The waffles should be thin and crisp.",
      "Splitting the waffle while hot is the tricky part.",
      "The syrup should be warm for spreading.",
      "Traditionally, placed on a cup of coffee to soften."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Dutch sweet icon",
    "better_than_store_bought": "Commercial stroopwafels can be stale. Homemade are fresh and caramel-filled.",
    "hidden_nutrients": "Eggs provide protein. Syrup offers quick energy.",
    "continent": "Europe",
    "slug": "stroopwafel-dutch"
  },
  {
    "id": 236,
    "name": "Dutch Hot Chocolate",
    "country": "Netherlands",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml milk",
        "100g dark Dutch cocoa powder",
        "50g sugar",
        "Whipped cream",
        "Cinnamon or chocolate shavings"
      ]
    },
    "steps": [
      "In a pot, whisk cocoa powder, sugar, and a little cold milk to a paste.",
      "Gradually add remaining milk while whisking.",
      "Heat over medium heat until hot—do not boil.",
      "Pour into cups.",
      "Top with whipped cream.",
      "Sprinkle with cinnamon or chocolate shavings.",
      "Serve immediately."
    ],
    "making_tips": [
      "Dutch cocoa is extra rich and dark.",
      "Don't boil the milk—scald it gently.",
      "This is a winter favorite in the Netherlands.",
      "The whipped cream is essential.",
      "Serve with speculaas cookies."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Dutch winter favorite",
    "better_than_store_bought": "Cafe versions use syrups. Homemade uses real Dutch cocoa.",
    "hidden_nutrients": "Milk provides calcium. Cocoa offers antioxidants.",
    "continent": "Europe",
    "slug": "dutch-hot-chocolate"
  },
  {
    "id": 237,
    "name": "Pastel de Nata (Portuguese Custard Tart)",
    "country": "Portugal",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "12 tarts",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "300g all-purpose flour",
        "150g unsalted butter, cold",
        "1 tsp salt",
        "120ml cold water"
      ],
      "Custard": [
        "500ml milk",
        "200g sugar",
        "6 egg yolks",
        "2 tbsp cornstarch",
        "1 lemon peel",
        "1 cinnamon stick"
      ]
    },
    "steps": [
      "Make Pastry: Rub butter into flour and salt. Add water. Rest 30 minutes.",
      "Roll pastry and fold into layers. Rest again.",
      "Make Custard: Heat milk, sugar, lemon peel, and cinnamon until steaming.",
      "Remove peel and cinnamon.",
      "In a bowl, whisk egg yolks and cornstarch.",
      "Slowly pour hot milk into the egg mixture.",
      "Return to the pot and cook until thick.",
      "Preheat oven to 250°C.",
      "Roll pastry thinly and line tart tins.",
      "Fill with custard.",
      "Bake for 12-15 minutes until the tops are charred and blistered.",
      "Cool slightly before removing."
    ],
    "making_tips": [
      "The pastry should be flaky and thin.",
      "The filling should be smooth and silky.",
      "The charred spots are the hallmark of pastel de nata.",
      "Serve warm with a dusting of cinnamon.",
      "These are from Belém, Lisbon."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Portugal's most famous pastry",
    "better_than_store_bought": "Commercial tarts are often dry. Homemade have the signature blister and custard.",
    "hidden_nutrients": "Egg yolks provide protein and choline. Milk offers calcium.",
    "continent": "Europe",
    "slug": "pastel-de-nata-portuguese-custard-tart"
  },
  {
    "id": 238,
    "name": "Arroz Doce (Portuguese Rice Pudding)",
    "country": "Portugal",
    "category": "Snack",
    "time": "1 hour (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g short-grain rice",
        "1 litre milk",
        "200g sugar",
        "1 cinnamon stick",
        "2 lemon peels",
        "4 egg yolks"
      ],
      "Topping": [
        "Ground cinnamon"
      ]
    },
    "steps": [
      "Rinse rice.",
      "In a pot, combine rice, milk, sugar, cinnamon stick, and lemon peel.",
      "Cook over medium heat, stirring frequently.",
      "Simmer for 40-45 minutes until rice is tender.",
      "Remove cinnamon and lemon peel.",
      "In a bowl, whisk egg yolks.",
      "Temper yolks with a little hot rice mixture.",
      "Fold back into the pot.",
      "Cook for another 5 minutes.",
      "Pour into a dish.",
      "Sprinkle with cinnamon.",
      "Serve warm or chilled."
    ],
    "making_tips": [
      "Arroz doce is Portugal's comfort dessert.",
      "Stir constantly to prevent sticking.",
      "The egg yolks make it rich.",
      "Traditionally served at Christmas.",
      "Serve with a cross of cinnamon on top."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Portuguese comfort dessert",
    "better_than_store_bought": "Canned rice pudding can't compare. Homemade is creamy and comforting.",
    "hidden_nutrients": "Milk provides calcium. Eggs offer protein.",
    "continent": "Europe",
    "slug": "arroz-doce-portuguese-rice-pudding"
  },
  {
    "id": 239,
    "name": "Baklava (Turkish)",
    "country": "Turkey",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry",
        "250g unsalted butter, melted"
      ],
      "Filling": [
        "400g pistachios, finely ground"
      ],
      "Syrup": [
        "200g sugar",
        "200ml water",
        "1 tbsp lemon juice"
      ]
    },
    "steps": [
      "Preheat oven to 160°C.",
      "Butter a baking dish.",
      "Layer 10 phyllo sheets, brushing each with butter.",
      "Spread a layer of pistachios.",
      "Layer 5 more phyllo sheets.",
      "Spread remaining pistachios.",
      "Top with remaining phyllo sheets.",
      "Cut into diamond shapes.",
      "Bake for 45-50 minutes until golden.",
      "Make Syrup: Boil sugar, water, and lemon juice for 15 minutes.",
      "Pour syrup over the hot baklava.",
      "Let soak for several hours.",
      "Serve at room temperature."
    ],
    "making_tips": [
      "Turkish baklava uses pistachios—it's the signature.",
      "The syrup should be cool; the baklava hot.",
      "The diamond cut is traditional.",
      "Turkey and Greece both claim baklava.",
      "Serve with Turkish coffee."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Turkish sweet delight",
    "better_than_store_bought": "Commercial baklava often uses peanuts. Homemade uses real pistachios.",
    "hidden_nutrients": "Pistachios provide healthy fats and protein.",
    "continent": "Europe",
    "slug": "baklava-turkish"
  },
  {
    "id": 240,
    "name": "Lokum (Turkish Delight)",
    "country": "Turkey",
    "category": "Snack",
    "time": "2 hours (plus setting)",
    "servings": "25 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Main": [
        "500g granulated sugar",
        "500ml water",
        "100g cornstarch",
        "1 tsp cream of tartar",
        "1 tbsp rose water",
        "100g pistachios, chopped",
        "Powdered sugar for dusting"
      ]
    },
    "steps": [
      "In a pot, dissolve sugar in 250ml water. Bring to boil and add cornstarch mixture.",
      "Dissolve cornstarch in remaining water with cream of tartar.",
      "Slowly add to the sugar syrup, stirring constantly.",
      "Cook for 30-40 minutes until thick and translucent.",
      "Add rose water and pistachios.",
      "Pour into a lined and greased pan.",
      "Let set for 2-3 hours.",
      "Cut into squares.",
      "Dust with powdered sugar.",
      "Store in an airtight container."
    ],
    "making_tips": [
      "Lokum means 'mouthful' in Turkish.",
      "This is a labor of love—stirring takes patience.",
      "The consistency should be soft and chewy.",
      "Rose water is the classic flavor.",
      "Dust generously with powdered sugar to prevent sticking."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Turkish iconic candy",
    "better_than_store_bought": "Commercial lokum has gums. Homemade is soft and authentic.",
    "hidden_nutrients": "Pistachios provide healthy fats. Rose water has trace antioxidants.",
    "continent": "Europe",
    "slug": "lokum-turkish-delight"
  },
  {
    "id": 241,
    "name": "Turkish Coffee",
    "country": "Turkey",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "2 tbsp very finely ground Turkish coffee",
        "200ml cold water",
        "2 tsp sugar (to taste)",
        "1 cardamom pod (optional)"
      ]
    },
    "steps": [
      "Combine coffee, water, sugar, and cardamom in a cezve (Turkish coffee pot).",
      "Stir gently.",
      "Heat over medium heat until it foams.",
      "Remove from heat just before boiling over.",
      "Allow foam to settle.",
      "Return to heat and foam again.",
      "Pour into small cups, distributing the foam.",
      "Let the grounds settle for 1 minute.",
      "Serve immediately."
    ],
    "making_tips": [
      "The coffee must be very finely ground.",
      "The foam is the sign of perfect Turkish coffee.",
      "Traditionally, served with a glass of water.",
      "The grounds should settle before drinking.",
      "This is an UNESCO intangible cultural heritage."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Turkish cultural treasure",
    "better_than_store_bought": "The ritual is everything—no cafe can replicate this.",
    "hidden_nutrients": "Coffee provides antioxidants. Cardamom aids digestion.",
    "continent": "Europe",
    "slug": "turkish-coffee"
  },
  {
    "id": 242,
    "name": "Medovik (Russian Honey Cake)",
    "country": "Russia",
    "category": "Snack",
    "time": "2 hours (plus chilling)",
    "servings": "10 slices",
    "difficulty": "Hard",
    "ingredients": {
      "Cake Layers": [
        "300g all-purpose flour",
        "150g sugar",
        "150g honey",
        "100g unsalted butter",
        "2 large eggs",
        "1 tsp baking soda"
      ],
      "Cream": [
        "500g sour cream",
        "200g powdered sugar",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Preheat oven to 180°C.",
      "Make Layers: Melt butter, sugar, and honey. Cool slightly.",
      "Add eggs, baking soda, and flour. Mix to dough.",
      "Divide dough into 8 pieces.",
      "Roll each piece into a thin circle.",
      "Bake each layer for 5-7 minutes until golden.",
      "Trim layers to size.",
      "Make Cream: Beat sour cream, powdered sugar, and vanilla.",
      "Assemble: Stack layers with cream between each.",
      "Cover the whole cake with cream.",
      "Crush the trimmings and press onto the sides.",
      "Chill for at least 4 hours."
    ],
    "making_tips": [
      "Medovik is Russia's favorite cake.",
      "The layers should be thin and crisp.",
      "The cream softens the layers as it chills.",
      "Crushed trimmings are traditional decoration.",
      "It's better the next day."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Russian beloved cake",
    "better_than_store_bought": "Commercial medovik is often dry. Homemade is moist and honey-scented.",
    "hidden_nutrients": "Sour cream provides calcium. Honey has trace minerals.",
    "continent": "Europe",
    "slug": "medovik-russian-honey-cake"
  },
  {
    "id": 243,
    "name": "Kvass (Sweetened Fermented Rye Drink)",
    "country": "Russia",
    "category": "Beverage",
    "time": "2 hours (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "200g rye bread, toasted",
        "1 litre water",
        "100g sugar",
        "1 tbsp raisins",
        "7g active dry yeast (or starter)"
      ]
    },
    "steps": [
      "Toast rye bread until dark and crisp.",
      "Place bread in a large jar. Add water, sugar, and raisins.",
      "Add yeast and stir.",
      "Cover and let ferment for 24-48 hours at room temperature.",
      "Strain the liquid.",
      "Chill thoroughly.",
      "Serve cold."
    ],
    "making_tips": [
      "Kvass is Russia's traditional summer drink.",
      "The fermentation creates a slight fizz.",
      "It's mildly sweet and tangy.",
      "Raisins help the fermentation.",
      "Traditionally drunk as a thirst-quencher."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Russian traditional drink",
    "better_than_store_bought": "Bottled kvass has preservatives. Homemade is effervescent and fresh.",
    "hidden_nutrients": "Rye bread provides B vitamins. The drink contains probiotics.",
    "continent": "Europe",
    "slug": "kvass-sweetened-fermented-rye-drink"
  },
  {
    "id": 244,
    "name": "Blini with Jam (Russian Pancakes)",
    "country": "Russia",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "12 blini",
    "difficulty": "Easy",
    "ingredients": {
      "Batter": [
        "200g all-purpose flour",
        "2 large eggs",
        "500ml milk",
        "50g sugar",
        "1 tsp salt",
        "2 tbsp vegetable oil"
      ],
      "Toppings": [
        "Sour cream",
        "Strawberry jam",
        "Butter"
      ]
    },
    "steps": [
      "Whisk eggs, sugar, and salt.",
      "Add flour alternately with milk.",
      "Whisk until smooth batter.",
      "Add oil and mix.",
      "Heat a non-stick pan.",
      "Pour a ladle of batter and swirl.",
      "Cook until bubbles appear, then flip.",
      "Cook other side briefly.",
      "Serve with sour cream and jam."
    ],
    "making_tips": [
      "Blini are thin Russian pancakes.",
      "The batter should be thin and pourable.",
      "They are traditionally served with sour cream.",
      "Jam adds a sweet touch.",
      "These are often eaten during Maslenitsa (butter festival)."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Russian pancake tradition",
    "better_than_store_bought": "Homemade blini are fresh and delicate.",
    "hidden_nutrients": "Eggs provide protein. Milk offers calcium.",
    "continent": "Europe",
    "slug": "blini-with-jam-russian-pancakes"
  },
  {
    "id": 271,
    "name": "Künefe",
    "country": "Turkey",
    "category": "Snack",
    "time": "1 hour",
    "servings": "8 servings",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "500g shredded phyllo dough (kataifi)",
        "250g unsalted butter, melted",
        "300g unsalted cheese (mozzarella or akkawi)"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tsp lemon juice",
        "1 tsp rosewater (optional)"
      ],
      "Topping": [
        "100g pistachios, ground"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water with lemon juice for 15 minutes. Add rosewater. Cool.",
      "Preheat oven to 180°C.",
      "Shred kataifi dough into smaller pieces using your hands.",
      "Pour melted butter over the dough and mix well.",
      "Press half the dough into a baking dish, packing firmly.",
      "Spread cheese evenly over the dough.",
      "Top with the remaining dough, pressing down gently.",
      "Bake for 30-40 minutes until golden and crisp.",
      "Invert onto a serving plate or pour syrup directly over the top.",
      "Sprinkle with ground pistachios.",
      "Serve warm."
    ],
    "making_tips": [
      "The kataifi should be shredded as fine as possible for the best texture.",
      "Use a cheese that melts well but holds its shape.",
      "The syrup should be cold when poured over the hot künefe.",
      "Serve immediately to maintain the crisp pastry.",
      "Künefe is best eaten fresh from the oven."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Turkish sweet classic",
    "better_than_store_bought": "Commercial künefe is often soggy. Homemade has the perfect crisp pastry and stringy cheese.",
    "hidden_nutrients": "Cheese provides calcium and protein. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "knefe"
  },
  {
    "id": 272,
    "name": "Şekerpare",
    "country": "Turkey",
    "category": "Snack",
    "time": "1 hour",
    "servings": "20 cookies",
    "difficulty": "Medium",
    "ingredients": {
      "Cookies": [
        "250g all-purpose flour",
        "150g semolina",
        "250g unsalted butter, softened",
        "100g powdered sugar",
        "1 egg",
        "1 tsp baking powder",
        "1 tsp vanilla"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tsp lemon juice"
      ],
      "Topping": [
        "20 blanched almonds"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water with lemon juice for 15 minutes. Cool.",
      "Preheat oven to 170°C.",
      "In a bowl, cream butter and sugar until fluffy.",
      "Add egg and vanilla.",
      "Mix flour, semolina, and baking powder. Add to the butter mixture.",
      "Knead into a soft dough.",
      "Roll into small balls and flatten slightly.",
      "Press an almond into the center of each.",
      "Place on a baking sheet.",
      "Bake for 25-30 minutes until golden.",
      "Pour cold syrup over the hot cookies.",
      "Let absorb for 1 hour.",
      "Serve at room temperature."
    ],
    "making_tips": [
      "Semolina gives şekerpare its signature texture.",
      "The syrup must be cold when poured over the hot cookies.",
      "Don't overbake—they should be golden, not dark.",
      "The almond in the center is traditional.",
      "These cookies improve after resting in the syrup."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Turkish coffee companion",
    "better_than_store_bought": "Commercial şekerpare is often dry. Homemade is syrup-soaked and tender.",
    "hidden_nutrients": "Almonds provide vitamin E and healthy fats. Semolina offers B vitamins.",
    "continent": "Middle East",
    "slug": "ekerpare"
  },
  {
    "id": 273,
    "name": "Sütlaç (Turkish Rice Pudding)",
    "country": "Turkey",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "200g short-grain rice",
        "1 litre milk",
        "200g sugar",
        "1 tbsp cornstarch",
        "1 tsp vanilla"
      ],
      "Topping": [
        "Ground cinnamon"
      ]
    },
    "steps": [
      "Rinse rice and soak in water for 30 minutes.",
      "Drain rice and place in a pot with 500ml water.",
      "Cook until rice is soft and water is absorbed.",
      "Add milk and sugar, stirring constantly.",
      "Dissolve cornstarch in a little water and add to the pot.",
      "Simmer for 15-20 minutes until thickened.",
      "Add vanilla.",
      "Pour into individual bowls.",
      "Chill for at least 2 hours.",
      "Sprinkle with cinnamon.",
      "Serve cold."
    ],
    "making_tips": [
      "The rice should be very soft before adding milk.",
      "Stir constantly to prevent sticking.",
      "The pudding thickens as it cools.",
      "Serve in small clay bowls for the traditional presentation.",
      "A favorite across Turkey and the Middle East."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Turkish comfort dessert",
    "better_than_store_bought": "Commercial rice pudding is often watery. Homemade is thick, creamy, and comforting.",
    "hidden_nutrients": "Milk provides calcium. Rice offers carbohydrates. Cinnamon aids blood sugar regulation.",
    "continent": "Middle East",
    "slug": "stla-turkish-rice-pudding"
  },
  {
    "id": 274,
    "name": "Boza (Turkish Fermented Millet Drink)",
    "country": "Turkey",
    "category": "Beverage",
    "time": "2 hours (plus fermentation)",
    "servings": "4 servings",
    "difficulty": "Hard",
    "ingredients": {
      "Main": [
        "300g millet flour (or coarse bulgur)",
        "1.5 litres water",
        "200g sugar",
        "1 tbsp yogurt (as a starter)"
      ],
      "Toppings": [
        "Roasted chickpeas",
        "Ground cinnamon"
      ]
    },
    "steps": [
      "Mix millet flour with water to form a thin batter.",
      "Cook over medium heat, stirring constantly, until thickened (about 30 minutes).",
      "Let cool to lukewarm.",
      "Add sugar and yogurt starter.",
      "Cover and let ferment for 24-48 hours at room temperature.",
      "Stir occasionally.",
      "The boza should be slightly tangy and fizzy.",
      "Chill thoroughly.",
      "Serve in glasses.",
      "Top with roasted chickpeas and cinnamon."
    ],
    "making_tips": [
      "Boza is a traditional Turkish winter drink.",
      "Fermentation time varies depending on temperature.",
      "The drink should be tangy but not sour.",
      "Roasted chickpeas and cinnamon are essential toppings.",
      "It is served in brass cups in Istanbul."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Turkish ancient drink",
    "better_than_store_bought": "Bottled boza has preservatives. Homemade is effervescent and authentic.",
    "hidden_nutrients": "Millet provides B vitamins and fiber. The drink contains probiotics.",
    "continent": "Middle East",
    "slug": "boza-turkish-fermented-millet-drink"
  },
  {
    "id": 275,
    "name": "Gaz (Iranian Nougat)",
    "country": "Iran",
    "category": "Snack",
    "time": "1 hour 30 minutes (plus setting)",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Main": [
        "300g sugar",
        "100ml water",
        "100ml glucose syrup",
        "2 egg whites",
        "1 tsp rosewater",
        "250g pistachios",
        "200g sap of Persian manna plant (or substitute with gum arabic)"
      ]
    },
    "steps": [
      "In a pot, combine sugar, water, and glucose syrup. Heat to 120°C.",
      "In a stand mixer, beat egg whites until stiff.",
      "Slowly pour the hot syrup into the egg whites while beating.",
      "Add rosewater.",
      "Continue beating until thick and glossy.",
      "Add the manna sap (or gum arabic dissolved in a little water).",
      "Fold in pistachios.",
      "Pour into a lined pan and press down firmly.",
      "Let set for 2-3 hours.",
      "Cut into pieces.",
      "Dust with powdered sugar."
    ],
    "making_tips": [
      "Gaz is Iran's most famous nougat.",
      "The manna sap gives it a unique texture.",
      "A candy thermometer is essential.",
      "The pistachios should be high quality.",
      "Traditionally served with Persian tea."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Persian nougat classic",
    "better_than_store_bought": "Commercial gaz often uses substitutes. Homemade has authentic ingredients.",
    "hidden_nutrients": "Pistachios provide healthy fats and protein. Egg whites offer protein.",
    "continent": "Middle East",
    "slug": "gaz-iranian-nougat"
  },
  {
    "id": 276,
    "name": "Faloodeh (Persian Rosewater Ice)",
    "country": "Iran",
    "category": "Snack",
    "time": "1 hour (plus freezing)",
    "servings": "6 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Ice Base": [
        "300g sugar",
        "600ml water",
        "1 tbsp rosewater",
        "1 tbsp lime juice"
      ],
      "Noodles": [
        "100g rice vermicelli noodles"
      ],
      "Garnish": [
        "Sour cherry syrup",
        "Ground pistachios"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water until dissolved. Add rosewater and lime juice. Cool.",
      "Cook rice noodles according to package instructions. Cool and cut into small pieces.",
      "Combine the cooled syrup and noodles.",
      "Place in the freezer.",
      "Stir every 30 minutes for 2-3 hours to prevent ice crystals.",
      "The mixture should be slushy and semi-frozen.",
      "Serve in glasses.",
      "Top with sour cherry syrup and pistachios."
    ],
    "making_tips": [
      "Faloodeh is Iran's signature summer dessert.",
      "The stirring is essential for the right texture.",
      "Rosewater is the key flavor.",
      "Sour cherry syrup is the traditional topping.",
      "This is a refreshing Persian dessert."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Iranian iconic dessert",
    "better_than_store_bought": "Commercial faloodeh often lacks real rosewater. Homemade has authentic flavor.",
    "hidden_nutrients": "Pistachios provide healthy fats. Sour cherry syrup offers trace vitamins.",
    "continent": "Middle East",
    "slug": "faloodeh-persian-rosewater-ice"
  },
  {
    "id": 277,
    "name": "Sholeh Zard (Persian Saffron Pudding)",
    "country": "Iran",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Pudding": [
        "250g short-grain rice",
        "1.5 litres water",
        "1 litre milk",
        "300g sugar",
        "½ tsp saffron threads",
        "1 tbsp rosewater",
        "2 tbsp butter",
        "1 tsp cinnamon"
      ],
      "Garnish": [
        "Slivered almonds",
        "Ground cinnamon",
        "Dried barberries (optional)"
      ]
    },
    "steps": [
      "Rinse rice and soak in water for 30 minutes.",
      "In a large pot, cook rice in water until very soft (about 30 minutes).",
      "Add milk, sugar, and saffron (ground and dissolved in a little hot water).",
      "Cook over low heat, stirring frequently, until thickened.",
      "Add rosewater, butter, and cinnamon.",
      "Cook for another 15 minutes.",
      "Pour into a serving dish.",
      "Decorate with slivered almonds in a pattern.",
      "Sprinkle with cinnamon.",
      "Serve warm or chilled."
    ],
    "making_tips": [
      "Sholeh zard is a celebratory Persian dessert.",
      "The rice must be very soft and broken down.",
      "Saffron gives the golden color and distinct flavor.",
      "The decoration is as important as the taste.",
      "Often served at weddings and celebrations."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Persian celebration dessert",
    "better_than_store_bought": "This traditional Persian dessert is best homemade.",
    "hidden_nutrients": "Milk provides calcium. Saffron offers antioxidants. Almonds add vitamin E.",
    "continent": "Middle East",
    "slug": "sholeh-zard-persian-saffron-pudding"
  },
  {
    "id": 278,
    "name": "Sekanjebin (Persian Mint & Vinegar Drink)",
    "country": "Iran",
    "category": "Beverage",
    "time": "20 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Syrup": [
        "200g sugar",
        "200ml water",
        "100ml vinegar (white or apple cider)",
        "1 tbsp mint, dried or fresh"
      ],
      "Serve": [
        "500ml cold water",
        "Ice cubes",
        "Fresh mint",
        "Cucumber slices"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water until dissolved.",
      "Add vinegar and mint. Simmer for 5 minutes.",
      "Strain and let cool.",
      "To serve, mix 1 part syrup with 3 parts cold water.",
      "Add ice cubes.",
      "Garnish with fresh mint and cucumber slices.",
      "Serve immediately."
    ],
    "making_tips": [
      "Sekanjebin is a refreshing Persian drink.",
      "The vinegar gives it a sweet-tangy flavor.",
      "Cucumbers add a cooling element.",
      "Traditionally served in summer.",
      "This is a taste of ancient Persia."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Persian ancient refresher",
    "better_than_store_bought": "This simple drink is best made fresh.",
    "hidden_nutrients": "Mint aids digestion. Vinegar has probiotic properties.",
    "continent": "Middle East",
    "slug": "sekanjebin-persian-mint-vinegar-drink"
  },
  {
    "id": 279,
    "name": "Ma'amoul (Shortbread Cookies)",
    "country": "Saudi Arabia",
    "category": "Snack",
    "time": "2 hours (includes resting)",
    "servings": "24 cookies",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "200g semolina",
        "250g unsalted butter, softened",
        "50g sugar",
        "1 tbsp orange blossom water",
        "1 tbsp milk"
      ],
      "Fillings": [
        "300g date paste",
        "200g pistachios or walnuts (ground with sugar)"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, semolina, and butter until crumbly.",
      "Add sugar, orange blossom water, and milk.",
      "Knead into a soft dough. Rest for 30 minutes.",
      "Prepare fillings: dates are ready to use; nuts should be mixed with a little sugar.",
      "Take small pieces of dough, flatten, and fill.",
      "Seal and place in a ma'amoul mold.",
      "Press and tap out.",
      "Place on a baking sheet.",
      "Bake at 180°C for 15-18 minutes until lightly golden.",
      "Dust with powdered sugar.",
      "Let cool completely."
    ],
    "making_tips": [
      "The wooden ma'amoul mold is essential for traditional patterns.",
      "The dough should be worked quickly to keep it from drying.",
      "Date and nut fillings are both traditional.",
      "These are holiday cookies for Eid and Easter.",
      "They improve after a day."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Middle Eastern holiday favorite",
    "better_than_store_bought": "Commercial ma'amoul is often dry. Homemade is melt-in-your-mouth.",
    "hidden_nutrients": "Dates provide iron and fiber. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "maamoul-shortbread-cookies"
  },
  {
    "id": 280,
    "name": "Basbousa (Semolina Cake)",
    "country": "Saudi Arabia",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Cake": [
        "250g semolina",
        "100g sugar",
        "100g desiccated coconut",
        "150g unsalted butter, melted",
        "1 cup yogurt",
        "1 tsp baking powder",
        "1 tsp vanilla",
        "12 blanched almonds"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tsp orange blossom water"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water for 15 minutes. Add orange blossom water. Cool.",
      "Preheat oven to 180°C.",
      "Mix semolina, sugar, coconut, and baking powder.",
      "Add melted butter, yogurt, and vanilla. Mix well.",
      "Spread in a greased baking dish.",
      "Cut into diamond shapes.",
      "Press an almond into the center of each piece.",
      "Bake for 30-35 minutes until golden.",
      "Pour cold syrup over the hot cake.",
      "Let absorb for 1 hour.",
      "Cut along the score marks and serve."
    ],
    "making_tips": [
      "The almond on each piece is traditional.",
      "Basbousa is beloved across the Middle East.",
      "The cake should be moist and syrup-soaked.",
      "Orange blossom water is essential for the flavor.",
      "Cut before baking for neat pieces."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Middle Eastern sweet staple",
    "better_than_store_bought": "Commercial basbousa is often dry. Homemade is moist and fragrant.",
    "hidden_nutrients": "Coconut provides healthy fats. Semolina offers B vitamins.",
    "continent": "Middle East",
    "slug": "basbousa-semolina-cake"
  },
  {
    "id": 281,
    "name": "Luqaimat (Fried Dough Balls)",
    "country": "Saudi Arabia",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "25 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "7g instant yeast",
        "100g sugar",
        "½ tsp salt",
        "300ml warm water",
        "1 tbsp milk powder"
      ],
      "Syrup": [
        "200g date syrup or honey"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, salt, and milk powder.",
      "Add warm water gradually to form a soft dough.",
      "Cover and let rise for 1 hour.",
      "Heat oil to 170°C.",
      "Using a wet spoon, drop small balls of dough into hot oil.",
      "Fry until golden and puffed, turning once.",
      "Drain on paper towels.",
      "Drizzle with date syrup or honey.",
      "Serve warm."
    ],
    "making_tips": [
      "Luqaimat is a Saudi favorite during Ramadan.",
      "The dough should be sticky and soft.",
      "Date syrup is the traditional accompaniment.",
      "They should be crisp outside and fluffy inside.",
      "Best served fresh and warm."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Saudi Ramadan treat",
    "better_than_store_bought": "Fresh luqaimat with date syrup is a Saudi specialty.",
    "hidden_nutrients": "Date syrup provides trace minerals. The dish is a festive treat.",
    "continent": "Middle East",
    "slug": "luqaimat-fried-dough-balls"
  },
  {
    "id": 282,
    "name": "Saudi Coffee (Qahwa)",
    "country": "Saudi Arabia",
    "category": "Beverage",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "4 tbsp lightly roasted coffee beans",
        "4 cardamom pods",
        "2 cloves",
        "1 small piece of cinnamon",
        "Pinch of saffron",
        "500ml water"
      ]
    },
    "steps": [
      "Grind coffee with cardamom pods.",
      "Place ground coffee and spices in a dallah (traditional pot).",
      "Add cold water.",
      "Bring to a boil over medium heat.",
      "Reduce heat and simmer for 10-15 minutes.",
      "Strain into small cups.",
      "Serve with sweet dates on the side."
    ],
    "making_tips": [
      "Saudi coffee is light roasted and spiced.",
      "The coffee is usually unsweetened—dates provide the sweetness.",
      "Served in small cups without handles.",
      "The dallah pot is the traditional vessel.",
      "Coffee is a sign of hospitality in the Gulf."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Saudi hospitality",
    "better_than_store_bought": "The ritual of Saudi coffee is best experienced at home.",
    "hidden_nutrients": "Coffee provides antioxidants. Cardamom aids digestion.",
    "continent": "Middle East",
    "slug": "saudi-coffee-qahwa"
  },
  {
    "id": 283,
    "name": "Qatayef (Stuffed Pancakes)",
    "country": "Egypt",
    "category": "Snack",
    "time": "1 hour 15 minutes (includes resting)",
    "servings": "20 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Batter": [
        "300g all-purpose flour",
        "50g semolina",
        "1 tsp yeast",
        "1 tbsp sugar",
        "Pinch of salt",
        "500ml warm water"
      ],
      "Filling": [
        "200g sweet cheese (ricotta or akkawi)",
        "100g walnuts or pistachios, ground with sugar"
      ],
      "Syrup": [
        "200g sugar",
        "200ml water",
        "1 tsp orange blossom water"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Batter: Mix flour, semolina, yeast, sugar, and salt. Add water gradually.",
      "Let batter rest for 30 minutes.",
      "Make Syrup: Boil sugar and water for 15 minutes. Add orange blossom water. Cool.",
      "Heat a non-stick pan over medium heat.",
      "Pour small rounds of batter—cook until bubbles appear.",
      "Place filling on one half of each pancake.",
      "Fold over and press edges to seal.",
      "Heat oil and fry the qatayef until golden.",
      "Dip in syrup immediately.",
      "Drain and serve."
    ],
    "making_tips": [
      "Qatayef is the ultimate Ramadan dessert in Egypt.",
      "The pancakes should be cooked on one side only.",
      "The cheese filling is traditional and gooey.",
      "Fried qatayef is preferred; baked is also an option.",
      "Syrup should be cold when the qatayef is hot."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Egyptian Ramadan favorite",
    "better_than_store_bought": "Fresh qatayef is a Ramadan tradition—best made at home.",
    "hidden_nutrients": "Cheese provides calcium and protein. Nuts offer healthy fats.",
    "continent": "Middle East",
    "slug": "qatayef-stuffed-pancakes"
  },
  {
    "id": 284,
    "name": "Karkadeh (Hibiscus Tea)",
    "country": "Egypt",
    "category": "Beverage",
    "time": "30 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "50g dried hibiscus petals",
        "1 litre water",
        "100g sugar (or to taste)"
      ]
    },
    "steps": [
      "Rinse hibiscus petals.",
      "In a pot, combine petals and water.",
      "Bring to a boil, then reduce heat.",
      "Simmer for 15 minutes.",
      "Remove from heat and steep for 30 minutes.",
      "Strain to remove petals.",
      "Add sugar and stir to dissolve.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    "making_tips": [
      "Karkadeh can be served hot or cold.",
      "The cold version is the most popular in Egypt.",
      "The tea should be deep ruby red.",
      "Adjust sweetness to taste.",
      "A refreshing and healthy Egyptian drink."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Egyptian national drink",
    "better_than_store_bought": "Bottled karkadeh has preservatives. Homemade is pure and vibrant.",
    "hidden_nutrients": "Hibiscus is rich in antioxidants. Helps lower blood pressure.",
    "continent": "Middle East",
    "slug": "karkadeh-hibiscus-tea"
  },
  {
    "id": 285,
    "name": "Knafeh (Jordanian Nabulsi)",
    "country": "Jordan",
    "category": "Snack",
    "time": "1 hour",
    "servings": "8 servings",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "500g shredded phyllo dough (kataifi)",
        "250g unsalted butter, melted",
        "400g Nabulsi cheese (or mozzarella)"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tbsp rosewater or orange blossom water"
      ],
      "Topping": [
        "100g pistachios, ground"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water for 15 minutes. Add rosewater. Cool.",
      "Preheat oven to 180°C.",
      "Shred kataifi into small pieces.",
      "Pour melted butter over the dough and mix.",
      "Press half the dough into a pan.",
      "Spread cheese evenly over the dough.",
      "Top with remaining dough.",
      "Bake for 30-40 minutes until golden.",
      "Pour cold syrup over hot knafeh.",
      "Sprinkle with pistachios.",
      "Serve warm."
    ],
    "making_tips": [
      "Nabulsi cheese is the authentic choice for Jordanian knafeh.",
      "The contrast between hot pastry and cold syrup is key.",
      "Knafeh is Jordan's pride.",
      "Serve immediately for the best texture.",
      "Traditionally eaten by hand."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Jordanian national dessert",
    "better_than_store_bought": "Authentic Nabulsi knafeh is a Jordanian specialty best fresh.",
    "hidden_nutrients": "Cheese provides calcium and protein. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "knafeh-jordanian-nabulsi"
  },
  {
    "id": 286,
    "name": "Namoura (Semolina Cake)",
    "country": "Jordan",
    "category": "Snack",
    "time": "1 hour",
    "servings": "15 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Cake": [
        "300g semolina",
        "150g sugar",
        "200g yogurt",
        "100g unsalted butter, melted",
        "1 tsp baking powder",
        "1 tsp vanilla",
        "1 tbsp orange blossom water"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tbsp orange blossom water"
      ],
      "Topping": [
        "15 blanched almonds"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water for 15 minutes. Add orange blossom water. Cool.",
      "Preheat oven to 180°C.",
      "Mix semolina, sugar, and baking powder.",
      "Add yogurt, melted butter, vanilla, and orange blossom water.",
      "Spread into a greased pan.",
      "Cut into diamond shapes.",
      "Press an almond into each piece.",
      "Bake for 30-35 minutes until golden.",
      "Pour cold syrup over hot cake.",
      "Cool completely and cut."
    ],
    "making_tips": [
      "Namoura is similar to basbousa but uses yogurt.",
      "Orange blossom water gives the signature floral note.",
      "The almond decoration is essential.",
      "Syrup absorption makes it moist.",
      "A Middle Eastern tea-time favorite."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Middle Eastern sweet classic",
    "better_than_store_bought": "Fresh namoura is far superior to commercial versions.",
    "hidden_nutrients": "Semolina provides B vitamins. Almonds offer healthy fats.",
    "continent": "Middle East",
    "slug": "namoura-semolina-cake"
  },
  {
    "id": 287,
    "name": "Limonana (Mint Lemonade)",
    "country": "Jordan",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 lemons",
        "100g sugar",
        "1 large bunch fresh mint",
        "750ml water",
        "Ice cubes"
      ]
    },
    "steps": [
      "Juice lemons.",
      "In a blender, combine lemon juice, sugar, and mint with a little water.",
      "Blend until mint is finely chopped.",
      "Add remaining water and ice.",
      "Strain if desired.",
      "Serve immediately."
    ],
    "making_tips": [
      "Limonana is a Jordanian invention.",
      "The mint should be completely blended.",
      "This is the ultimate Middle Eastern summer cooler.",
      "Serve immediately.",
      "Adjust sugar and mint to taste."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Jordanian summer icon",
    "better_than_store_bought": "Freshly blended limonana is a Jordanian specialty.",
    "hidden_nutrients": "Lemons provide vitamin C. Mint aids digestion.",
    "continent": "Middle East",
    "slug": "limonana-mint-lemonade"
  },
  {
    "id": 288,
    "name": "Mhalabiyeh (Milk Custard)",
    "country": "Lebanon",
    "category": "Snack",
    "time": "30 minutes (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Pudding": [
        "500ml milk",
        "100g sugar",
        "50g cornstarch",
        "1 tsp rosewater",
        "½ tsp cardamom"
      ],
      "Topping": [
        "Ground pistachios",
        "Desiccated coconut"
      ]
    },
    "steps": [
      "Dissolve cornstarch in 100ml cold milk.",
      "In a pot, heat remaining milk with sugar and cardamom.",
      "When warm, add cornstarch mixture.",
      "Cook over medium heat, stirring constantly.",
      "Continue until thick and creamy.",
      "Add rosewater.",
      "Pour into individual glasses.",
      "Chill for 2 hours.",
      "Top with pistachios and coconut.",
      "Serve cold."
    ],
    "making_tips": [
      "Mhalabiyeh is Lebanon's silky milk pudding.",
      "The texture should be smooth and creamy.",
      "Rosewater is the classic flavor.",
      "Serve in beautiful glasses.",
      "The topping adds texture."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Lebanese classic dessert",
    "better_than_store_bought": "Homemade mhalabiyeh is silky and perfectly flavored.",
    "hidden_nutrients": "Milk provides calcium. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "mhalabiyeh-milk-custard"
  },
  {
    "id": 289,
    "name": "Sfouf (Turmeric Semolina Cake)",
    "country": "Lebanon",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "12 pieces",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Cake": [
        "250g semolina",
        "150g all-purpose flour",
        "200g sugar",
        "1 tbsp turmeric",
        "1 tsp baking powder",
        "120ml vegetable oil",
        "240ml milk",
        "2 tbsp pine nuts"
      ]
    },
    "steps": [
      "Preheat oven to 180°C.",
      "Mix semolina, flour, sugar, turmeric, and baking powder.",
      "Add oil and milk. Mix to a smooth batter.",
      "Pour into a greased pan.",
      "Sprinkle pine nuts on top.",
      "Bake for 30-35 minutes until golden.",
      "Cool completely.",
      "Cut into squares.",
      "Serve with tea."
    ],
    "making_tips": [
      "Turmeric gives sfouf its golden color.",
      "It's not sweet but subtly flavored.",
      "Pine nuts are the traditional topping.",
      "This is a Lebanese tea-time favorite.",
      "The texture should be dense and moist."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Lebanese tea cake",
    "better_than_store_bought": "Fresh sfouf with its golden color is a Lebanese specialty.",
    "hidden_nutrients": "Turmeric has anti-inflammatory properties. Pine nuts offer healthy fats.",
    "continent": "Middle East",
    "slug": "sfouf-turmeric-semolina-cake"
  },
  {
    "id": 290,
    "name": "Malabi (Rosewater Milk Custard)",
    "country": "Israel",
    "category": "Snack",
    "time": "30 minutes (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Pudding": [
        "500ml milk",
        "100g sugar",
        "50g cornstarch",
        "1 tbsp rosewater"
      ],
      "Topping": [
        "Ground pistachios",
        "Desiccated coconut",
        "Rose petal jam (optional)"
      ]
    },
    "steps": [
      "Dissolve cornstarch in 100ml cold milk.",
      "In a pot, heat remaining milk with sugar.",
      "Add cornstarch mixture.",
      "Cook over medium heat, stirring constantly.",
      "Continue until thick and creamy.",
      "Add rosewater.",
      "Pour into individual glasses.",
      "Chill for 2 hours.",
      "Top with pistachios and coconut.",
      "Serve cold."
    ],
    "making_tips": [
      "Malabi is Israel's favorite milk dessert.",
      "The texture is silky and light.",
      "Rosewater gives the signature floral note.",
      "The toppings add color and texture.",
      "Often served at street food markets."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Israeli street dessert",
    "better_than_store_bought": "Fresh malabi with proper rosewater is best.",
    "hidden_nutrients": "Milk provides calcium. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "malabi-rosewater-milk-custard"
  },
  {
    "id": 291,
    "name": "Sufganiyot (Jelly Doughnuts)",
    "country": "Israel",
    "category": "Snack",
    "time": "2 hours (includes rising)",
    "servings": "15 doughnuts",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "50g sugar",
        "7g instant yeast",
        "½ tsp salt",
        "240ml warm water",
        "2 egg yolks",
        "50g unsalted butter, softened"
      ],
      "Filling": [
        "200g strawberry or raspberry jam"
      ],
      "Topping": [
        "Powdered sugar"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix flour, sugar, yeast, and salt.",
      "Add water, egg yolks, and butter. Knead until smooth.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Roll to 1cm thickness.",
      "Cut into rounds and let rise 30 minutes.",
      "Heat oil to 170°C.",
      "Fry doughnuts until golden on both sides.",
      "Drain on paper towels.",
      "Fill with jam using a piping bag.",
      "Dust with powdered sugar.",
      "Serve immediately."
    ],
    "making_tips": [
      "Sufganiyot are Israel's Hanukkah treat.",
      "The dough should be light and fluffy.",
      "Fill with jam just before serving.",
      "Powdered sugar is essential.",
      "They should be eaten fresh."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Israeli Hanukkah tradition",
    "better_than_store_bought": "Fresh sufganiyot are a Hanukkah necessity.",
    "hidden_nutrients": "Eggs provide protein. The treat is a celebration food.",
    "continent": "Middle East",
    "slug": "sufganiyot-jelly-doughnuts"
  },
  {
    "id": 292,
    "name": "Balaleet (Sweet Vermicelli)",
    "country": "Qatar",
    "category": "Snack",
    "time": "30 minutes",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Noodles": [
        "250g vermicelli noodles",
        "50g sugar",
        "½ tsp saffron",
        "1 tsp cardamom",
        "2 tbsp ghee or butter"
      ],
      "Egg Crepe": [
        "2 eggs",
        "Pinch of salt",
        "Ghee for frying"
      ]
    },
    "steps": [
      "Boil vermicelli in water until cooked. Drain.",
      "In a pan, melt ghee and add noodles.",
      "Add sugar, saffron, and cardamom.",
      "Cook until noodles are coated.",
      "Make Egg Crepe: Beat eggs with salt.",
      "Fry a thin crepe in a pan.",
      "Place noodles on a plate.",
      "Top with the egg crepe.",
      "Serve warm."
    ],
    "making_tips": [
      "Balaleet is a Qatari breakfast favorite.",
      "The saffron gives it a golden color.",
      "The egg crepe is the traditional topping.",
      "Sweet and savory in one dish.",
      "A unique Gulf specialty."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Qatari breakfast staple",
    "better_than_store_bought": "This traditional Gulf dish is best homemade.",
    "hidden_nutrients": "Eggs provide protein. Saffron offers antioxidants.",
    "continent": "Middle East",
    "slug": "balaleet-sweet-vermicelli"
  },
  {
    "id": 293,
    "name": "Esh Asaraya (Bread Pudding)",
    "country": "Qatar",
    "category": "Snack",
    "time": "1 hour",
    "servings": "8 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Pudding": [
        "8 slices white bread, crusts removed",
        "500ml milk",
        "1 can (400ml) sweetened condensed milk",
        "100g sugar",
        "1 tsp rosewater",
        "1 tsp vanilla"
      ],
      "Topping": [
        "Ground pistachios"
      ]
    },
    "steps": [
      "Preheat oven to 160°C.",
      "Tear bread into pieces and place in a dish.",
      "In a pot, heat milk with condensed milk and sugar.",
      "Add rosewater and vanilla.",
      "Pour the milk mixture over the bread.",
      "Let soak for 15 minutes.",
      "Bake for 30-35 minutes until set.",
      "Cool completely.",
      "Top with pistachios.",
      "Serve chilled."
    ],
    "making_tips": [
      "Esh asaraya is a popular Qatari dessert.",
      "The bread absorbs the milky liquid.",
      "It is often served during celebrations.",
      "Rosewater gives a floral note.",
      "A comforting dessert."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Qatari dessert favorite",
    "better_than_store_bought": "Traditional Qatari bread pudding is best fresh.",
    "hidden_nutrients": "Milk provides calcium. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "esh-asaraya-bread-pudding"
  },
  {
    "id": 294,
    "name": "Emirati Coffee (Gahwa)",
    "country": "United Arab Emirates",
    "category": "Beverage",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "4 tbsp lightly roasted coffee beans",
        "4 cardamom pods",
        "2 cloves",
        "1 small piece of cinnamon",
        "Pinch of saffron",
        "500ml water"
      ]
    },
    "steps": [
      "Grind coffee with cardamom.",
      "Place ground coffee and spices in a dallah pot.",
      "Add cold water.",
      "Bring to a boil.",
      "Reduce heat and simmer for 10-15 minutes.",
      "Strain into small cups.",
      "Serve with sweet dates."
    ],
    "making_tips": [
      "Emirati coffee is light and flavored with cardamom.",
      "The dallah pot is the traditional vessel.",
      "Coffee is served unsweetened with dates.",
      "A symbol of hospitality in the UAE.",
      "Often served in small cups."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Emirati hospitality",
    "better_than_store_bought": "The ritual of Emirati coffee is best at home.",
    "hidden_nutrients": "Coffee provides antioxidants. Dates offer iron and fiber.",
    "continent": "Middle East",
    "slug": "emirati-coffee-gahwa"
  },
  {
    "id": 295,
    "name": "Bint Al-Sahn (Yemeni Honey Cake)",
    "country": "Yemen",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes resting)",
    "servings": "8 servings",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "7g instant yeast",
        "½ tsp salt",
        "250ml warm water",
        "50g ghee, melted"
      ],
      "Coating": [
        "100g ghee, melted"
      ],
      "Dip": [
        "200g Yemeni honey (or good quality honey)"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, yeast, salt, and water. Knead until smooth.",
      "Rest for 30 minutes.",
      "Divide dough into 10-12 small balls.",
      "Roll each ball very thinly.",
      "Brush each layer with melted ghee.",
      "Stack the layers on top of each other.",
      "Place the stack in a greased pan.",
      "Bake at 180°C for 20-25 minutes until golden.",
      "Invert onto a plate.",
      "Pour honey over the top.",
      "Serve warm."
    ],
    "making_tips": [
      "Bint Al-Sahn is Yemen's national dessert.",
      "The layers should be paper-thin.",
      "Ghee is essential for the authentic flavor.",
      "Yemeni honey is famous worldwide.",
      "Best eaten by hand."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Yemeni national dessert",
    "better_than_store_bought": "This traditional Yemeni cake is best homemade.",
    "hidden_nutrients": "Honey provides trace minerals. Ghee offers vitamin A.",
    "continent": "Middle East",
    "slug": "bint-al-sahn-yemeni-honey-cake"
  },
  {
    "id": 296,
    "name": "Qishr (Yemeni Coffee-Husk Tea)",
    "country": "Yemen",
    "category": "Beverage",
    "time": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "50g dried coffee husks (or coffee cherry tea)",
        "1 litre water",
        "1 inch ginger, grated",
        "100g sugar"
      ]
    },
    "steps": [
      "Rinse coffee husks.",
      "In a pot, combine husks, water, and ginger.",
      "Bring to a boil.",
      "Reduce heat and simmer for 15 minutes.",
      "Add sugar and stir to dissolve.",
      "Strain into cups.",
      "Serve hot."
    ],
    "making_tips": [
      "Qishr is a Yemeni traditional drink.",
      "It has a mild coffee-like flavor.",
      "Ginger gives it a warming spice.",
      "It is frugal as it uses coffee byproducts.",
      "Served at social gatherings."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Yemeni traditional drink",
    "better_than_store_bought": "This is a traditional Yemeni drink, best made fresh.",
    "hidden_nutrients": "Ginger aids digestion. Coffee husks provide trace antioxidants.",
    "continent": "Middle East",
    "slug": "qishr-yemeni-coffee-husk-tea"
  },
  {
    "id": 297,
    "name": "Knafeh Nabulsiyeh (Palestinian)",
    "country": "Palestine",
    "category": "Snack",
    "time": "1 hour",
    "servings": "8 servings",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "500g shredded phyllo dough",
        "250g unsalted butter, melted",
        "400g Nabulsi cheese"
      ],
      "Syrup": [
        "300g sugar",
        "300ml water",
        "1 tbsp orange blossom water"
      ],
      "Topping": [
        "100g pistachios, ground"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar and water for 15 minutes. Add orange blossom water. Cool.",
      "Preheat oven to 180°C.",
      "Shred kataifi into small pieces.",
      "Pour melted butter over the dough and mix.",
      "Press half the dough into a pan.",
      "Spread cheese evenly.",
      "Top with remaining dough.",
      "Bake for 30-40 minutes until golden.",
      "Pour cold syrup over the hot knafeh.",
      "Sprinkle with pistachios.",
      "Serve warm."
    ],
    "making_tips": [
      "Nabulsi cheese is the authentic Palestinian choice.",
      "Knafeh Nabulsiyeh is Palestine's pride.",
      "The syrup should be cold; the knafeh hot.",
      "Orange blossom water is essential.",
      "Serve immediately."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Palestinian national dessert",
    "better_than_store_bought": "Authentic Nabulsi knafeh is a Palestinian treasure.",
    "hidden_nutrients": "Cheese provides calcium and protein. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "knafeh-nabulsiyeh-palestinian"
  },
  {
    "id": 298,
    "name": "Barazek (Syrian Sesame Cookies)",
    "country": "Syria",
    "category": "Snack",
    "time": "1 hour",
    "servings": "20 cookies",
    "difficulty": "Medium",
    "ingredients": {
      "Cookies": [
        "250g all-purpose flour",
        "100g sugar",
        "100g unsalted butter, softened",
        "1 egg",
        "1 tsp yeast",
        "1 tsp orange blossom water"
      ],
      "Coating": [
        "100g sesame seeds",
        "50g pistachios, ground"
      ]
    },
    "steps": [
      "Preheat oven to 180°C.",
      "Cream butter and sugar until fluffy.",
      "Add egg, orange blossom water, and yeast.",
      "Gradually add flour to form a dough.",
      "Roll small pieces of dough into balls.",
      "Flatten slightly.",
      "Dip one side in sesame seeds, the other in pistachios.",
      "Place on a baking sheet.",
      "Bake for 15-18 minutes until golden.",
      "Cool completely.",
      "Serve with tea."
    ],
    "making_tips": [
      "Barazek is a famous Syrian cookie.",
      "The sesame and pistachio coating is distinctive.",
      "The cookie should be crisp and crumbly.",
      "Often served with Syrian coffee.",
      "A beautiful and delicious cookie."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Syrian delicacy",
    "better_than_store_bought": "Syrian barazek is a specialty—fresh is best.",
    "hidden_nutrients": "Sesame seeds provide calcium and iron. Pistachios offer healthy fats.",
    "continent": "Middle East",
    "slug": "barazek-syrian-sesame-cookies"
  },
  {
    "id": 299,
    "name": "Syrian Baklava",
    "country": "Syria",
    "category": "Snack",
    "time": "1 hour 30 minutes",
    "servings": "24 pieces",
    "difficulty": "Hard",
    "ingredients": {
      "Pastry": [
        "1 packet phyllo pastry",
        "250g clarified butter (semn)"
      ],
      "Filling": [
        "400g pistachios, finely ground"
      ],
      "Syrup": [
        "200g sugar",
        "200ml water",
        "1 tsp lemon juice",
        "1 tsp orange blossom water"
      ]
    },
    "steps": [
      "Make Syrup: Boil sugar, water, and lemon juice for 15 minutes. Add orange blossom water. Cool.",
      "Preheat oven to 160°C.",
      "Butter a baking dish.",
      "Layer 10 phyllo sheets, brushing each with butter.",
      "Spread a layer of pistachios.",
      "Top with 10 more phyllo sheets.",
      "Cut into diamond shapes.",
      "Bake for 45-50 minutes until golden.",
      "Pour cold syrup over hot baklava.",
      "Let soak for 2-3 hours.",
      "Serve at room temperature."
    ],
    "making_tips": [
      "Syrian baklava uses pistachios and is lighter.",
      "Clarified butter (semn) is traditional.",
      "The syrup is less sweet than other versions.",
      "It should be crisp and not too syrupy.",
      "A Damascus specialty."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Syrian sweet classic",
    "better_than_store_bought": "Authentic Syrian baklava is a Damascus specialty.",
    "hidden_nutrients": "Pistachios provide healthy fats and protein. Butter offers vitamin A.",
    "continent": "Middle East",
    "slug": "syrian-baklava"
  },
  {
    "id": 300,
    "name": "Syrian Tea",
    "country": "Syria",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4 tsp black tea (or 4 tea bags)",
        "1 litre boiling water",
        "2 tsp cinnamon (optional)",
        "2 tsp cardamom (optional)",
        "Sugar to taste"
      ]
    },
    "steps": [
      "In a teapot, add tea leaves.",
      "Pour boiling water over the tea.",
      "Add cinnamon or cardamom if desired.",
      "Steep for 5 minutes.",
      "Strain into cups.",
      "Add sugar generously.",
      "Serve hot."
    ],
    "making_tips": [
      "Syrian tea is strong and heavily sweetened.",
      "Spices like cinnamon and cardamom are common.",
      "Tea is a sign of hospitality in Syria.",
      "Often served with pistachio treats.",
      "The tea should be dark amber."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Syrian hospitality",
    "better_than_store_bought": "Syrian tea with spices is best made at home.",
    "hidden_nutrients": "Tea provides antioxidants. Cinnamon aids blood sugar regulation.",
    "continent": "Middle East",
    "slug": "syrian-tea"
  },
  {
    "id": 143,
    "name": "Chocolate Chip Cookies",
    "country": "United States",
    "category": "Snack",
    "time": "1 hour (includes chilling)",
    "servings": "24 cookies",
    "difficulty": "Easy",
    "ingredients": {
      "Dough": [
        "230g unsalted butter, softened",
        "200g brown sugar",
        "100g granulated sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "310g all-purpose flour",
        "1 tsp baking soda",
        "½ tsp salt",
        "340g semi-sweet chocolate chips"
      ]
    },
    "steps": [
      "Preheat oven to 180°C. Line baking sheets with parchment paper.",
      "Cream butter and sugars until light and fluffy (3-4 minutes).",
      "Add eggs one at a time, beating well. Add vanilla.",
      "Whisk flour, baking soda, and salt in a separate bowl.",
      "Gradually add dry ingredients to wet mixture. Mix until just combined.",
      "Fold in chocolate chips.",
      "Chill dough for 30 minutes (prevents spreading).",
      "Scoop 2-tablespoon portions onto baking sheets, spaced apart.",
      "Bake for 10-12 minutes until edges are golden and centers are still soft.",
      "Cool on baking sheet for 5 minutes, then transfer to wire rack."
    ],
    "making_tips": [
      "Use room temperature butter for the best creaming texture.",
      "Don't overmix the dough once flour is added—this keeps cookies tender.",
      "Chilling the dough is essential for thick, chewy cookies.",
      "Remove from oven when edges are golden but centers look under-baked—they continue cooking on the hot sheet.",
      "Bake one sheet at a time for even heat distribution."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – America's iconic cookie",
    "better_than_store_bought": "Commercial cookies have preservatives and artificial flavors. Homemade have rich butter flavor and perfect texture.",
    "hidden_nutrients": "Eggs provide protein. Chocolate offers antioxidants.",
    "continent": "North America",
    "slug": "chocolate-chip-cookies"
  },
  {
    "id": 144,
    "name": "Brownies",
    "country": "United States",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 squares",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Batter": [
        "200g unsalted butter",
        "300g granulated sugar",
        "4 large eggs",
        "1 tsp vanilla extract",
        "100g all-purpose flour",
        "75g unsweetened cocoa powder",
        "½ tsp salt",
        "100g chopped walnuts (optional)"
      ]
    },
    "steps": [
      "Preheat oven to 175°C. Grease a 20x20cm baking pan.",
      "Melt butter in a saucepan over low heat. Remove from heat.",
      "Stir in sugar until well combined.",
      "Add eggs one at a time, mixing well after each. Add vanilla.",
      "Sift flour, cocoa powder, and salt into the wet mixture.",
      "Fold gently until just combined—do not overmix.",
      "Fold in walnuts if using.",
      "Pour batter into prepared pan and smooth the top.",
      "Bake for 35-40 minutes. A toothpick should come out with moist crumbs.",
      "Cool completely in the pan before cutting."
    ],
    "making_tips": [
      "Use natural unsweetened cocoa for the deepest chocolate flavor.",
      "Overmixing the batter creates tough brownies—fold gently.",
      "The toothpick test: fudgy brownies have moist crumbs, not wet batter.",
      "For cleaner cuts, refrigerate brownies for 1 hour before slicing.",
      "Sprinkle sea salt on top before baking for a gourmet touch."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – American classic dessert",
    "better_than_store_bought": "Boxed mixes have artificial ingredients. Homemade brownies are intensely chocolatey and perfectly fudgy.",
    "hidden_nutrients": "Walnuts provide healthy fats and omega-3s. Eggs add protein.",
    "continent": "North America",
    "slug": "brownies"
  },
  {
    "id": 145,
    "name": "Apple Pie",
    "country": "United States",
    "category": "Snack",
    "time": "2 hours (includes chilling)",
    "servings": "1 pie (8 slices)",
    "difficulty": "Hard",
    "ingredients": {
      "Crust": [
        "360g all-purpose flour",
        "1 tsp salt",
        "230g unsalted butter, cold and cubed",
        "6-8 tbsp ice water"
      ],
      "Filling": [
        "6-8 apples (Granny Smith and Honeycrisp), peeled and sliced",
        "150g granulated sugar",
        "100g brown sugar",
        "2 tbsp all-purpose flour",
        "2 tsp cinnamon",
        "¼ tsp nutmeg",
        "1 tbsp lemon juice"
      ],
      "Egg Wash": [
        "1 egg",
        "1 tbsp milk"
      ]
    },
    "steps": [
      "Make Crust: Mix flour and salt. Cut in cold butter until pea-sized crumbs form.",
      "Add ice water gradually, mixing until dough just comes together.",
      "Divide dough in half, flatten into discs, wrap, and chill 1 hour.",
      "Make Filling: Mix apples, sugars, flour, spices, and lemon juice. Let sit 15 minutes.",
      "Roll out one disc and line a 9-inch pie dish.",
      "Add apple filling, mounding slightly in the center.",
      "Roll out second disc and place over filling. Crimp edges.",
      "Cut vents in the top crust. Brush with egg wash.",
      "Bake at 190°C for 45-50 minutes, covering edges with foil if browning too fast.",
      "Cool completely on a wire rack before slicing."
    ],
    "making_tips": [
      "Keep all crust ingredients ice-cold for a flaky texture.",
      "Use a mix of apple varieties for the best flavor complexity.",
      "Don't overfill the pie or the filling will bubble out.",
      "Place the pie on a baking sheet to catch drips.",
      "Let the pie cool for at least 2 hours—hot filling will run."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Symbol of American home baking",
    "better_than_store_bought": "Commercial pies use shortening and preservatives. Homemade has real butter and fresh apples.",
    "hidden_nutrients": "Apples provide fiber and vitamin C. Cinnamon aids blood sugar regulation.",
    "continent": "North America",
    "slug": "apple-pie"
  },
  {
    "id": 146,
    "name": "Cheesecake (New York Style)",
    "country": "United States",
    "category": "Snack",
    "time": "4 hours (includes chilling)",
    "servings": "1 cake (12 slices)",
    "difficulty": "Hard",
    "ingredients": {
      "Crust": [
        "200g graham cracker crumbs",
        "80g unsalted butter, melted",
        "50g sugar"
      ],
      "Filling": [
        "900g cream cheese, softened",
        "250g granulated sugar",
        "3 tbsp all-purpose flour",
        "4 large eggs",
        "2 tsp vanilla extract",
        "1 tsp lemon zest",
        "240ml sour cream"
      ]
    },
    "steps": [
      "Preheat oven to 160°C. Grease a 9-inch springform pan.",
      "Make Crust: Mix graham crumbs, melted butter, and sugar. Press into the bottom of the pan.",
      "Bake crust for 10 minutes. Cool.",
      "Make Filling: Beat cream cheese and sugar until smooth.",
      "Add flour, then eggs one at a time, beating well.",
      "Add vanilla, lemon zest, and sour cream. Beat until just combined.",
      "Pour filling over crust and smooth the top.",
      "Bake for 55-65 minutes—center should still jiggle slightly.",
      "Turn oven off, crack the door, and let cool for 1 hour.",
      "Refrigerate for at least 4 hours before serving."
    ],
    "making_tips": [
      "Use full-fat cream cheese for the creamiest texture—low-fat versions won't set properly.",
      "All ingredients must be at room temperature to avoid lumps.",
      "Don't overbeat the batter or the cheesecake will crack.",
      "Water bath baking prevents cracking—wrap the pan in foil and place in a pan of hot water.",
      "A jiggly center is the sign of a perfectly baked cheesecake."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – New York deli classic",
    "better_than_store_bought": "Commercial cheesecakes use stabilizers. Homemade has pure cream cheese flavor and silky texture.",
    "hidden_nutrients": "Cream cheese provides calcium and protein. Eggs add protein.",
    "continent": "North America",
    "slug": "cheesecake-new-york-style"
  },
  {
    "id": 147,
    "name": "Donuts (Yeast-Raised)",
    "country": "United States",
    "category": "Snack",
    "time": "2 hours 30 minutes (includes rising)",
    "servings": "12 donuts",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g all-purpose flour",
        "7g instant yeast",
        "100g sugar",
        "1 tsp salt",
        "240ml warm milk",
        "2 large eggs",
        "60g unsalted butter, softened"
      ],
      "Glaze": [
        "250g powdered sugar",
        "60ml milk",
        "1 tsp vanilla"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, and salt in a stand mixer.",
      "Add warm milk, eggs, and butter. Knead until smooth and elastic (8-10 minutes).",
      "Cover and let rise until doubled (1 hour).",
      "Punch down dough. Roll to 1cm thickness.",
      "Cut into donut shapes using a cutter. Let rise 30 minutes.",
      "Heat oil to 175°C.",
      "Fry donuts for 1-2 minutes per side until golden brown.",
      "Drain on paper towels.",
      "Make Glaze: Mix powdered sugar, milk, and vanilla until smooth.",
      "Dip warm donuts in glaze and set on a wire rack."
    ],
    "making_tips": [
      "The dough should be soft and slightly sticky—this ensures light donuts.",
      "Oil temperature is critical: too hot burns the outside, too cool makes greasy donuts.",
      "Fry only a few donuts at a time to maintain temperature.",
      "Donuts are best eaten fresh; they lose freshness within hours.",
      "The glaze should be thin enough to coat but thick enough to set."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – American breakfast icon",
    "better_than_store_bought": "Commercial donuts contain dough conditioners. Homemade are pillowy-soft and freshly glazed.",
    "hidden_nutrients": "Eggs and milk provide protein. Homemade has no preservatives.",
    "continent": "North America",
    "slug": "donuts-yeast-raised"
  },
  {
    "id": 148,
    "name": "Milkshake (Classic Vanilla)",
    "country": "United States",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "600ml vanilla ice cream",
        "240ml whole milk",
        "2 tbsp sugar (optional)",
        "1 tsp vanilla extract",
        "Whipped cream for topping"
      ]
    },
    "steps": [
      "Combine ice cream, milk, sugar, and vanilla in a blender.",
      "Blend until smooth and thick (20-30 seconds).",
      "Pour into tall glasses.",
      "Top with whipped cream.",
      "Add a cherry and straw.",
      "Serve immediately."
    ],
    "making_tips": [
      "Use premium ice cream for the richest flavor.",
      "The milk-to-ice-cream ratio determines thickness—add more ice cream for a thicker shake.",
      "Chill the glasses before serving.",
      "Don't overblend or the shake will become thin.",
      "Add a drizzle of chocolate syrup for extra indulgence."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – American diner classic",
    "better_than_store_bought": "Fast-food milkshakes have artificial thickeners. Homemade has real ice cream and pure vanilla.",
    "hidden_nutrients": "Milk and ice cream provide calcium and protein.",
    "continent": "North America",
    "slug": "milkshake-classic-vanilla"
  },
  {
    "id": 149,
    "name": "Lemonade (Classic)",
    "country": "United States",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4-5 large lemons",
        "1 litre water",
        "150g sugar",
        "Ice cubes",
        "Lemon slices for garnish"
      ]
    },
    "steps": [
      "Juice lemons to get 240ml fresh lemon juice.",
      "In a pitcher, combine sugar with 500ml hot water. Stir until sugar dissolves.",
      "Add cold water and lemon juice.",
      "Adjust sweetness to taste.",
      "Chill in the refrigerator.",
      "Serve over ice, garnished with lemon slices."
    ],
    "making_tips": [
      "Roll lemons on the counter before juicing to extract more juice.",
      "Use fresh lemons only—bottled juice has a flat flavor.",
      "Simple syrup (dissolved sugar) prevents gritty sweetness.",
      "Add fresh mint or berries for a twist.",
      "Serve ice-cold for maximum refreshment."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – American summer classic",
    "better_than_store_bought": "Bottled lemonade has preservatives and high-fructose corn syrup. Homemade is fresh and natural.",
    "hidden_nutrients": "Lemons provide vitamin C and antioxidants.",
    "continent": "North America",
    "slug": "lemonade-classic"
  },
  {
    "id": 150,
    "name": "Root Beer Float",
    "country": "United States",
    "category": "Beverage",
    "time": "5 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "600ml root beer (or cola)",
        "2 scoops vanilla ice cream",
        "Whipped cream (optional)",
        "Cherry for garnish"
      ]
    },
    "steps": [
      "Chill tall glasses.",
      "Add 2 scoops of vanilla ice cream to each glass.",
      "Slowly pour root beer over the ice cream.",
      "The foam will rise—pour carefully.",
      "Top with whipped cream if desired.",
      "Add a cherry and a straw.",
      "Serve immediately with a spoon and straw."
    ],
    "making_tips": [
      "Use premium vanilla ice cream for the creamiest flavor.",
      "Pour the root beer slowly down the side to control the foam.",
      "The best root beer floats are served immediately.",
      "Use a wide-brimmed glass for maximum enjoyment.",
      "Let the ice cream soften slightly for easier scooping."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – American soda fountain classic",
    "better_than_store_bought": "Cafe versions use cheap ice cream. Homemade uses premium ingredients.",
    "hidden_nutrients": "Ice cream provides calcium and protein.",
    "continent": "North America",
    "slug": "root-beer-float"
  },
  {
    "id": 151,
    "name": "Nanaimo Bars",
    "country": "Canada",
    "category": "Snack",
    "time": "45 minutes (plus chilling)",
    "servings": "16 bars",
    "difficulty": "Medium",
    "ingredients": {
      "Bottom Layer": [
        "150g graham cracker crumbs",
        "100g desiccated coconut",
        "100g chopped walnuts",
        "100g unsalted butter, melted",
        "50g sugar",
        "2 tbsp cocoa powder",
        "1 egg"
      ],
      "Middle Layer": [
        "120g unsalted butter, softened",
        "3 tbsp custard powder",
        "400g powdered sugar",
        "2 tbsp milk"
      ],
      "Top Layer": [
        "200g semi-sweet chocolate",
        "2 tbsp unsalted butter"
      ]
    },
    "steps": [
      "Bottom Layer: Mix all bottom ingredients. Press into a greased 20x20cm pan. Chill 15 minutes.",
      "Middle Layer: Beat butter, custard powder, sugar, and milk until smooth and fluffy.",
      "Spread middle layer evenly over the chilled bottom layer.",
      "Chill for 30 minutes.",
      "Top Layer: Melt chocolate and butter together until smooth.",
      "Pour over the middle layer and spread evenly.",
      "Chill until completely set (at least 2 hours).",
      "Cut into bars with a warm knife."
    ],
    "making_tips": [
      "The custard powder is essential—no substitutions for authentic flavor.",
      "Chill each layer completely before adding the next.",
      "Use a hot knife for clean cuts—dip in hot water and dry between cuts.",
      "Nanaimo bars are named after Nanaimo, British Columbia.",
      "Store in the refrigerator."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Canadian classic from British Columbia",
    "better_than_store_bought": "Commercial versions have artificial flavors. Homemade has real custard and butter.",
    "hidden_nutrients": "Walnuts provide healthy fats and omega-3s. Coconut offers fiber.",
    "continent": "North America",
    "slug": "nanaimo-bars"
  },
  {
    "id": 152,
    "name": "Butter Tarts",
    "country": "Canada",
    "category": "Snack",
    "time": "1 hour 15 minutes",
    "servings": "12 tarts",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "125g unsalted butter, cold",
        "50g sugar",
        "1 egg yolk",
        "2-3 tbsp cold water"
      ],
      "Filling": [
        "150g brown sugar",
        "100g corn syrup",
        "60g unsalted butter, melted",
        "1 large egg",
        "1 tsp vanilla",
        "100g raisins or pecans (optional)"
      ]
    },
    "steps": [
      "Make Pastry: Cut butter into flour and sugar. Add egg yolk and water. Chill 30 minutes.",
      "Roll pastry and line 12 tart tins. Chill again.",
      "Make Filling: Whisk brown sugar, corn syrup, melted butter, egg, and vanilla.",
      "Add raisins or pecans if using.",
      "Fill pastry shells ⅔ full.",
      "Bake at 190°C for 15-18 minutes until filling is set and bubbly.",
      "Cool completely in tins.",
      "Remove carefully and serve."
    ],
    "making_tips": [
      "The filling will bubble and rise—don't overfill the tarts.",
      "The classic butter tart has a 'runny' center—it should be soft but not liquid.",
      "Raisins are traditional, but many prefer pecans.",
      "The pastry should be flaky and tender.",
      "These are best eaten the day they're made."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Canadian iconic treat",
    "better_than_store_bought": "Commercial versions use shortening. Homemade has real butter and pure filling.",
    "hidden_nutrients": "Eggs provide protein. Raisins offer iron and fiber.",
    "continent": "North America",
    "slug": "butter-tarts"
  },
  {
    "id": 153,
    "name": "Beaver Tails (Fried Dough)",
    "country": "Canada",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "8 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "7g instant yeast",
        "50g sugar",
        "1 tsp salt",
        "240ml warm water",
        "1 egg",
        "30g unsalted butter, melted"
      ],
      "Topping": [
        "100g sugar",
        "1 tbsp cinnamon",
        "Butter for brushing"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, and salt. Add warm water, egg, and melted butter.",
      "Knead until smooth and elastic (8-10 minutes).",
      "Cover and let rise until doubled (1 hour).",
      "Punch down dough. Divide into 8 balls.",
      "Shape each ball into a flat beaver tail shape.",
      "Heat oil to 175°C.",
      "Fry each piece for 1-2 minutes per side until golden.",
      "Drain on paper towels.",
      "Brush with melted butter.",
      "Sprinkle with cinnamon-sugar mixture."
    ],
    "making_tips": [
      "The dough should be very soft—this creates the signature airy texture.",
      "Beaver tails are named after their shape, not the animal.",
      "A traditional Canadian treat from Ottawa.",
      "Serve immediately while warm.",
      "Can be topped with Nutella or maple butter."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Canadian roadside favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter and fresher.",
    "hidden_nutrients": "Egg provides protein. The treat is primarily carbohydrates.",
    "continent": "North America",
    "slug": "beaver-tails-fried-dough"
  },
  {
    "id": 154,
    "name": "Maple Taffy (Snow Candy)",
    "country": "Canada",
    "category": "Snack",
    "time": "20 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml pure maple syrup",
        "Clean snow (or shaved ice)"
      ]
    },
    "steps": [
      "Boil maple syrup in a pot until it reaches 115°C (soft ball stage).",
      "Remove from heat and let cool slightly.",
      "Pack clean snow firmly into a pan or tray.",
      "Drizzle the hot syrup in ribbons over the snow.",
      "Wait 30 seconds for it to set.",
      "Use a fork to roll the taffy onto sticks.",
      "Enjoy immediately."
    ],
    "making_tips": [
      "Use pure maple syrup—no corn syrup substitutions.",
      "The syrup should be hot enough to set but not hot enough to melt the snow.",
      "This is a traditional 'sugar shack' treat.",
      "Work quickly—the taffy sets fast.",
      "The snow must be clean and firmly packed."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Quebec sugar shack tradition",
    "better_than_store_bought": "This is a fresh experience that can't be packaged.",
    "hidden_nutrients": "Maple syrup provides manganese and zinc.",
    "continent": "North America",
    "slug": "maple-taffy-snow-candy"
  },
  {
    "id": 155,
    "name": "Saskatoon Berry Pie",
    "country": "Canada",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes chilling)",
    "servings": "1 pie (8 slices)",
    "difficulty": "Hard",
    "ingredients": {
      "Crust": [
        "360g all-purpose flour",
        "1 tsp salt",
        "230g unsalted butter, cold and cubed",
        "6-8 tbsp ice water"
      ],
      "Filling": [
        "800g Saskatoon berries (fresh or frozen)",
        "200g granulated sugar",
        "50g cornstarch",
        "1 tsp cinnamon",
        "1 tbsp lemon juice"
      ]
    },
    "steps": [
      "Make Crust: Mix flour and salt. Cut in cold butter until pea-sized crumbs form.",
      "Add ice water gradually, mixing until dough comes together.",
      "Divide in half, flatten into discs, chill 1 hour.",
      "Make Filling: Mix berries, sugar, cornstarch, cinnamon, and lemon juice.",
      "Roll out one disc and line a 9-inch pie dish.",
      "Add filling. Roll out second disc and place over filling.",
      "Crimp edges and cut vents. Brush with egg wash.",
      "Bake at 190°C for 50-60 minutes.",
      "Cool completely on wire rack."
    ],
    "making_tips": [
      "Saskatoon berries are a prairie specialty—blueberries can be substituted.",
      "The berries burst during baking, creating a juicy filling.",
      "Serve warm with vanilla ice cream.",
      "The crust should be golden and flaky.",
      "Let the pie rest for 1 hour before slicing."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Canadian prairie favorite",
    "better_than_store_bought": "Commercial pies use canned fillings. Homemade uses fresh berries.",
    "hidden_nutrients": "Saskatoon berries provide antioxidants and vitamin C.",
    "continent": "North America",
    "slug": "saskatoon-berry-pie"
  },
  {
    "id": 156,
    "name": "Maple Lemonade",
    "country": "Canada",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "4-5 large lemons",
        "1 litre water",
        "120ml pure maple syrup",
        "Ice cubes",
        "Lemon slices"
      ]
    },
    "steps": [
      "Juice lemons to get 240ml fresh lemon juice.",
      "In a pitcher, combine lemon juice, maple syrup, and water.",
      "Stir well to combine.",
      "Adjust sweetness to taste with more maple syrup.",
      "Chill in the refrigerator.",
      "Serve over ice with lemon slices."
    ],
    "making_tips": [
      "Use pure maple syrup for authentic Canadian flavor.",
      "Grade A maple syrup is best for this drink.",
      "The sweetness of maple syrup is more complex than sugar.",
      "Serve ice-cold for the best refreshment.",
      "Can be garnished with fresh mint."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Canadian summer twist on classic",
    "better_than_store_bought": "Bottled lemonade has sugar and preservatives. Homemade uses pure maple syrup.",
    "hidden_nutrients": "Lemons provide vitamin C. Maple syrup offers manganese and zinc.",
    "continent": "North America",
    "slug": "maple-lemonade"
  },
  {
    "id": 157,
    "name": "Caesar (Non-Alcoholic)",
    "country": "Canada",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml Clamato juice (or tomato juice)",
        "2 tsp Worcestershire sauce",
        "½ tsp hot sauce",
        "1 tsp horseradish (optional)",
        "Lime wedges",
        "Celery salt",
        "Ice cubes"
      ]
    },
    "steps": [
      "Rim glasses with lime wedge and dip in celery salt.",
      "Fill glasses with ice cubes.",
      "In a pitcher, combine Clamato juice, Worcestershire sauce, hot sauce, and horseradish.",
      "Stir well.",
      "Pour into prepared glasses.",
      "Garnish with lime wedge and celery stalk.",
      "Serve immediately."
    ],
    "making_tips": [
      "The Caesar is Canada's national cocktail.",
      "Clamato juice is the classic base—tomato juice is a substitute.",
      "The celery salt rim is essential.",
      "Adjust hot sauce to your spice preference.",
      "Non-alcoholic version is just as delicious."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Canada's national drink",
    "better_than_store_bought": "Bottled Caesar mix has preservatives. Homemade is customizable.",
    "hidden_nutrients": "Tomato juice provides vitamin C and lycopene.",
    "continent": "North America",
    "slug": "caesar-non-alcoholic"
  },
  {
    "id": 158,
    "name": "Hot Apple Cider (Canadian)",
    "country": "Canada",
    "category": "Beverage",
    "time": "25 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "1 litre apple cider",
        "2 cinnamon sticks",
        "4 cloves",
        "1 star anise",
        "Orange peel strips",
        "Honey to taste (optional)"
      ]
    },
    "steps": [
      "Pour apple cider into a pot.",
      "Add cinnamon sticks, cloves, star anise, and orange peel.",
      "Heat over medium heat until steaming—do not boil.",
      "Simmer for 15 minutes to infuse flavors.",
      "Strain into mugs.",
      "Add honey if desired.",
      "Garnish with a cinnamon stick.",
      "Serve warm."
    ],
    "making_tips": [
      "Never boil the cider—it ruins the flavor.",
      "Use fresh apple cider for the best result.",
      "This is a fall and winter favorite.",
      "Add a shot of rum for adults.",
      "Can be made in a slow cooker for parties."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Canadian winter warmer",
    "better_than_store_bought": "Commercial versions have artificial flavors. Homemade is spiced to perfection.",
    "hidden_nutrients": "Apples provide antioxidants. Cinnamon aids blood sugar regulation.",
    "continent": "North America",
    "slug": "hot-apple-cider-canadian"
  },
  {
    "id": 159,
    "name": "Churros",
    "country": "Mexico",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "12 churros",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "250ml water",
        "60g unsalted butter",
        "25g sugar",
        "½ tsp salt",
        "150g all-purpose flour",
        "2 large eggs"
      ],
      "Coating": [
        "100g sugar",
        "2 tsp cinnamon"
      ],
      "Chocolate Sauce": [
        "200g dark chocolate",
        "200ml heavy cream",
        "1 tbsp sugar"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Make Dough: In a pot, boil water, butter, sugar, and salt.",
      "Reduce heat and add flour. Stir vigorously until dough forms.",
      "Remove from heat. Add eggs one at a time, beating well.",
      "Transfer to a piping bag with a star nozzle.",
      "Heat oil to 175°C.",
      "Pipe dough directly into oil, cutting with scissors.",
      "Fry until golden and crisp (2-3 minutes per side).",
      "Drain on paper towels.",
      "Mix sugar and cinnamon. Roll churros in mixture.",
      "Make Sauce: Heat cream and chocolate until smooth."
    ],
    "making_tips": [
      "The dough should be piped with a star nozzle for the signature ridges.",
      "Churros are best eaten fresh and hot.",
      "The chocolate sauce should be thick and rich.",
      "Oil temperature is critical—too hot burns, too cool makes greasy churros.",
      "In Mexico, churros are dipped in hot chocolate."
    ],
    "health_rating": 15,
    "cultural_authenticity": "100% – Mexican street food classic",
    "better_than_store_bought": "Street versions can be greasy. Homemade is crisp and freshly coated.",
    "hidden_nutrients": "Eggs provide protein. Dark chocolate offers antioxidants.",
    "continent": "North America",
    "slug": "churros"
  },
  {
    "id": 160,
    "name": "Conchas (Sweet Mexican Bread)",
    "country": "Mexico",
    "category": "Snack",
    "time": "2 hours 30 minutes (includes rising)",
    "servings": "12 conchas",
    "difficulty": "Hard",
    "ingredients": {
      "Dough": [
        "500g bread flour",
        "7g instant yeast",
        "100g sugar",
        "½ tsp salt",
        "240ml warm milk",
        "2 large eggs",
        "80g unsalted butter, softened"
      ],
      "Topping": [
        "120g unsalted butter, softened",
        "120g powdered sugar",
        "150g all-purpose flour",
        "1 tsp vanilla",
        "Food coloring (optional)"
      ]
    },
    "steps": [
      "Make Dough: Mix flour, yeast, sugar, and salt.",
      "Add warm milk, eggs, and butter. Knead until smooth (10 minutes).",
      "Cover and let rise until doubled (1 hour).",
      "Make Topping: Beat butter and sugar until fluffy.",
      "Add flour and vanilla—mix into a smooth paste.",
      "Add coloring if desired.",
      "Punch down dough. Divide into 12 balls.",
      "Divide topping into 12. Flatten each into a disc.",
      "Place topping over each dough ball, pressing down.",
      "Score topping with a knife to create shell pattern.",
      "Let rise 30 minutes.",
      "Bake at 180°C for 18-20 minutes."
    ],
    "making_tips": [
      "The topping should be cold for easier handling.",
      "The shell pattern is the signature of conchas.",
      "Conchas mean 'shells' in Spanish.",
      "These are Mexico's favorite breakfast bread.",
      "Serve with coffee or hot chocolate."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Mexico's iconic sweet bread",
    "better_than_store_bought": "Bakery versions can be dry. Homemade is fresh and soft.",
    "hidden_nutrients": "Milk provides calcium. Eggs add protein.",
    "continent": "North America",
    "slug": "conchas-sweet-mexican-bread"
  },
  {
    "id": 161,
    "name": "Flan (Mexican)",
    "country": "Mexico",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus chilling)",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Caramel": [
        "200g sugar",
        "60ml water"
      ],
      "Custard": [
        "1 can (400ml) sweetened condensed milk",
        "1 can (350ml) evaporated milk",
        "4 large eggs",
        "1 tsp vanilla extract"
      ]
    },
    "steps": [
      "Make Caramel: Heat sugar and water until golden. Pour into a flan mold.",
      "Make Custard: Blend condensed milk, evaporated milk, eggs, and vanilla until smooth.",
      "Pour custard over caramel.",
      "Cover mold with foil.",
      "Place mold in a baking dish with hot water (water bath).",
      "Bake at 170°C for 50-60 minutes until set.",
      "Cool completely, then chill for 4 hours.",
      "Unmold onto a serving plate.",
      "Serve chilled."
    ],
    "making_tips": [
      "The caramel should be deep amber, not burnt.",
      "The water bath ensures gentle, even cooking.",
      "The flan should jiggle slightly when done.",
      "Chill thoroughly before unmolding.",
      "This is Mexico's favorite dessert."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Mexican dessert classic",
    "better_than_store_bought": "Commercial flan has stabilizers. Homemade is silky-smooth.",
    "hidden_nutrients": "Eggs provide protein. Milk adds calcium.",
    "continent": "North America",
    "slug": "flan-mexican"
  },
  {
    "id": 162,
    "name": "Tres Leches Cake (Mexican)",
    "country": "Mexico",
    "category": "Snack",
    "time": "2 hours (includes chilling)",
    "servings": "12 slices",
    "difficulty": "Medium",
    "ingredients": {
      "Cake": [
        "200g all-purpose flour",
        "1 tsp baking powder",
        "½ tsp salt",
        "150g unsalted butter, softened",
        "200g sugar",
        "3 large eggs",
        "1 tsp vanilla",
        "120ml milk"
      ],
      "Milk Mixture": [
        "1 can (400ml) sweetened condensed milk",
        "1 can (350ml) evaporated milk",
        "240ml heavy cream"
      ],
      "Topping": [
        "360ml heavy cream",
        "50g powdered sugar",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Preheat oven to 180°C. Grease a 20x30cm baking dish.",
      "Make Cake: Beat butter and sugar until fluffy. Add eggs one at a time.",
      "Add flour mixture alternately with milk. Add vanilla.",
      "Pour into prepared dish. Bake for 25-30 minutes.",
      "Cool cake for 10 minutes. Poke holes all over.",
      "Mix condensed milk, evaporated milk, and heavy cream.",
      "Pour milk mixture slowly over the cake. Refrigerate for 2 hours.",
      "Make Topping: Whip heavy cream, powdered sugar, and vanilla to stiff peaks.",
      "Spread over the cake.",
      "Garnish with fresh berries or cinnamon."
    ],
    "making_tips": [
      "Poke holes with a fork or skewer to help the milk absorb.",
      "The cake should be slightly cooled but still warm when pouring the milk.",
      "Refrigerate for at least 2 hours for the milk to soak.",
      "Tres leches means 'three milks' in Spanish.",
      "This cake is best served cold."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Mexican cake sensation",
    "better_than_store_bought": "Commercial versions are often dry. Homemade is moist and creamy.",
    "hidden_nutrients": "Eggs provide protein. Milk adds calcium.",
    "continent": "North America",
    "slug": "tres-leches-cake-mexican"
  },
  {
    "id": 163,
    "name": "Mangonada",
    "country": "Mexico",
    "category": "Snack",
    "time": "15 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "2 ripe mangoes, frozen",
        "2 tbsp lime juice",
        "2 tbsp sugar",
        "Chamoy sauce",
        "Tajin chili powder",
        "Ice cubes"
      ]
    },
    "steps": [
      "Peel and chop frozen mangoes.",
      "Blend mangoes, lime juice, sugar, and a splash of water until smooth.",
      "Rim glasses with chamoy and dip in Tajin.",
      "Add a layer of blended mango.",
      "Add ice cubes.",
      "Drizzle with chamoy.",
      "Top with more blended mango.",
      "Sprinkle with Tajin.",
      "Serve immediately with a straw and spoon."
    ],
    "making_tips": [
      "Use frozen mangoes for a thick, sorbet-like texture.",
      "Chamoy is a Mexican condiment—sweet, sour, and spicy.",
      "Tajin is a chili-lime-salt seasoning.",
      "This is a popular Mexican street dessert.",
      "Serve with a tamarind straw if available."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Mexican street dessert favorite",
    "better_than_store_bought": "Street versions can be syrupy. Homemade has real mango chunks.",
    "hidden_nutrients": "Mangoes provide vitamin A, vitamin C, and fiber.",
    "continent": "North America",
    "slug": "mangonada"
  },
  {
    "id": 164,
    "name": "Horchata (Mexican)",
    "country": "Mexico",
    "category": "Beverage",
    "time": "8 hours (includes soaking)",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "200g white rice",
        "1 litre water",
        "1 cinnamon stick",
        "150g sugar (to taste)",
        "1 tsp vanilla extract"
      ]
    },
    "steps": [
      "Rinse rice. Soak rice and cinnamon in 1 litre water overnight.",
      "Transfer to a blender and blend until smooth.",
      "Strain through a cheesecloth or nut milk bag.",
      "Add sugar and vanilla.",
      "Stir well to dissolve sugar.",
      "Chill thoroughly.",
      "Stir before serving over ice."
    ],
    "making_tips": [
      "The rice must soak for at least 8 hours for maximum flavor.",
      "Straining is essential for a smooth, silky texture.",
      "Horchata is a popular Mexican 'agua fresca.'",
      "Can be made with almonds for a richer version.",
      "Serve ice-cold with cinnamon on top."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Mexico's signature drink",
    "better_than_store_bought": "Bottled horchata has preservatives. Homemade has authentic cinnamon flavor.",
    "hidden_nutrients": "Rice provides carbohydrates. Cinnamon aids blood sugar regulation.",
    "continent": "North America",
    "slug": "horchata-mexican"
  },
  {
    "id": 165,
    "name": "Aguas Frescas (Fresh Fruit Water)",
    "country": "Mexico",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main (Strawberry)": [
        "500g fresh strawberries",
        "1.5 litres water",
        "100g sugar",
        "2 limes",
        "Ice cubes"
      ]
    },
    "steps": [
      "Wash and hull strawberries.",
      "Blend strawberries with 500ml water until smooth.",
      "Strain through a fine sieve.",
      "Stir in remaining water and sugar.",
      "Add lime juice.",
      "Chill until cold.",
      "Serve over ice with a strawberry slice."
    ],
    "making_tips": [
      "Aguas frescas are Mexico's go-to refreshing drinks.",
      "Can be made with any fruit—watermelon, melon, pineapple, etc.",
      "The fruit should be ripe and sweet.",
      "Strain for a smoother drink or leave pulp for texture.",
      "Serve ice-cold."
    ],
    "health_rating": 50,
    "cultural_authenticity": "100% – Mexico's daily refreshment",
    "better_than_store_bought": "Bottled aguas have preservatives. Homemade is fresh and fruity.",
    "hidden_nutrients": "Fruits provide vitamins and antioxidants.",
    "continent": "North America",
    "slug": "aguas-frescas-fresh-fruit-water"
  },
  {
    "id": 166,
    "name": "Jamaica (Hibiscus Drink)",
    "country": "Mexico",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried hibiscus flowers",
        "1.5 litres water",
        "150g sugar",
        "Lime juice (optional)"
      ]
    },
    "steps": [
      "Bring water to a boil with hibiscus flowers.",
      "Reduce heat and simmer for 15-20 minutes.",
      "Remove from heat and steep for 30 minutes.",
      "Strain through a fine sieve.",
      "Add sugar and stir to dissolve.",
      "Add lime juice if desired.",
      "Chill thoroughly.",
      "Serve over ice with a lime slice."
    ],
    "making_tips": [
      "Jamaica is a Mexican staple drink.",
      "The color should be deep ruby red.",
      "Adjust sweetness to your preference.",
      "It can be served hot in winter.",
      "This is a tart, refreshing, and healthy drink."
    ],
    "health_rating": 60,
    "cultural_authenticity": "100% – Mexico's favorite refresher",
    "better_than_store_bought": "Bottled jamaica has sugar and preservatives. Homemade is pure and vibrant.",
    "hidden_nutrients": "Hibiscus is rich in antioxidants. Lime adds vitamin C.",
    "continent": "North America",
    "slug": "jamaica-hibiscus-drink"
  },
  {
    "id": 167,
    "name": "Cuban Pastries (Guava and Cheese)",
    "country": "Cuba",
    "category": "Snack",
    "time": "45 minutes",
    "servings": "8 pastries",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "1 packet puff pastry (500g), thawed",
        "200g guava paste",
        "150g cream cheese, softened",
        "1 egg yolk (for egg wash)",
        "Sugar for sprinkling"
      ]
    },
    "steps": [
      "Preheat oven to 190°C. Line a baking sheet with parchment paper.",
      "Roll puff pastry to 5mm thickness.",
      "Cut into 10x10cm squares.",
      "Cut guava paste into thin slices.",
      "Place cream cheese and guava paste in the center of each square.",
      "Fold into triangles or envelopes.",
      "Seal edges with a fork.",
      "Brush with egg wash.",
      "Sprinkle with sugar.",
      "Bake for 15-18 minutes until golden and puffed."
    ],
    "making_tips": [
      "Guava paste is available in Latin groceries—it's firm and sweet.",
      "Cream cheese should be softened for easy spreading.",
      "This is a classic Cuban pastry—'pastelitos de guayaba.'",
      "Serve warm or at room temperature.",
      "These are traditionally enjoyed with coffee."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Cuban bakery staple",
    "better_than_store_bought": "Bakery versions can be stale. Homemade is fresh and buttery.",
    "hidden_nutrients": "Guava provides vitamin C and fiber. Cream cheese offers calcium.",
    "continent": "North America",
    "slug": "cuban-pastries-guava-and-cheese"
  },
  {
    "id": 168,
    "name": "Arroz con Leche (Cuban)",
    "country": "Cuba",
    "category": "Snack",
    "time": "1 hour",
    "servings": "6 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g short-grain rice",
        "1 litre whole milk",
        "200g sugar",
        "1 cinnamon stick",
        "1 strip lemon peel",
        "Ground cinnamon for garnish"
      ]
    },
    "steps": [
      "Rinse rice thoroughly.",
      "In a heavy pot, combine rice, milk, sugar, cinnamon stick, and lemon peel.",
      "Cook over medium heat, stirring frequently.",
      "Simmer for 45-50 minutes until rice is tender and creamy.",
      "Remove cinnamon stick and lemon peel.",
      "Pour into serving bowls.",
      "Sprinkle with ground cinnamon.",
      "Serve warm or chilled."
    ],
    "making_tips": [
      "Stir frequently to prevent the rice from sticking to the bottom.",
      "The rice should be soft and the mixture creamy.",
      "This is a Cuban favorite dessert.",
      "Can be made with condensed milk for richness.",
      "Serve with a sprinkle of cinnamon."
    ],
    "health_rating": 30,
    "cultural_authenticity": "100% – Cuban comfort dessert",
    "better_than_store_bought": "Commercial versions are often watery. Homemade is creamy and comforting.",
    "hidden_nutrients": "Milk provides calcium. Rice offers carbohydrates.",
    "continent": "North America",
    "slug": "arroz-con-leche-cuban"
  },
  {
    "id": 169,
    "name": "Cuban Flan",
    "country": "Cuba",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus chilling)",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Caramel": [
        "200g sugar",
        "60ml water"
      ],
      "Custard": [
        "1 can (400ml) sweetened condensed milk",
        "1 can (350ml) evaporated milk",
        "4 large eggs",
        "1 tsp vanilla",
        "1 tsp lime zest"
      ]
    },
    "steps": [
      "Make Caramel: Heat sugar and water until golden. Pour into flan mold.",
      "Make Custard: Blend all ingredients until smooth.",
      "Pour over caramel.",
      "Cover with foil. Place in a water bath.",
      "Bake at 170°C for 50-60 minutes.",
      "Cool completely, then chill 4 hours.",
      "Unmold onto a serving plate.",
      "Serve chilled."
    ],
    "making_tips": [
      "Lime zest gives Cuban flan its distinctive flavor.",
      "The water bath is essential for smooth texture.",
      "Chill thoroughly before unmolding.",
      "The caramel should be deep amber.",
      "This is a Cuban dessert favorite."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Cuban classic flan",
    "better_than_store_bought": "Commercial flan has stabilizers. Homemade is silky and authentic.",
    "hidden_nutrients": "Eggs provide protein. Milk adds calcium.",
    "continent": "North America",
    "slug": "cuban-flan"
  },
  {
    "id": 170,
    "name": "Cafe Cubano (Sweet Espresso)",
    "country": "Cuba",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "4 tbsp Cuban coffee (or dark espresso roast)",
        "240ml water",
        "2 tbsp sugar (or more for 'cortadito' style)"
      ]
    },
    "steps": [
      "Brew espresso coffee with a Moka pot or espresso machine.",
      "In a small cup, add sugar.",
      "Add the first few drops of espresso to the sugar.",
      "Whisk vigorously until it forms a light, foamy paste.",
      "Pour the remaining espresso into the sugar foam.",
      "Stir gently.",
      "Serve immediately in small cups."
    ],
    "making_tips": [
      "The 'espumita' (sugar foam) is the signature of Cafe Cubano.",
      "Use a Moka pot for authentic Cuban coffee.",
      "The coffee should be very strong and dark.",
      "Cuban coffee is served in small, demitasse cups.",
      "This is the coffee of Cuban culture."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Cuba's iconic coffee",
    "better_than_store_bought": "Cafe versions can't replicate the espumita. Homemade is authentic.",
    "hidden_nutrients": "Coffee provides antioxidants. Sugar provides quick energy.",
    "continent": "North America",
    "slug": "cafe-cubano-sweet-espresso"
  },
  {
    "id": 171,
    "name": "Batido (Cuban Fruit Shake)",
    "country": "Cuba",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main (Mango)": [
        "2 ripe mangoes, peeled and chopped",
        "480ml milk",
        "2 tbsp sugar (or to taste)",
        "1 tsp vanilla",
        "Ice cubes"
      ]
    },
    "steps": [
      "Combine mangoes, milk, sugar, vanilla, and ice in a blender.",
      "Blend until smooth and frothy.",
      "Taste and adjust sweetness.",
      "Pour into tall glasses.",
      "Serve immediately."
    ],
    "making_tips": [
      "Batido is Cuba's fresh fruit shake.",
      "Can be made with any tropical fruit—papaya, banana, guava.",
      "The milk should be cold for a refreshing drink.",
      "This is a street-side favorite in Cuba.",
      "Serve with a straw."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Cuban street favorite",
    "better_than_store_bought": "Cafe versions often use syrup. Homemade uses fresh fruit.",
    "hidden_nutrients": "Mangoes provide vitamin A and C. Milk adds calcium.",
    "continent": "North America",
    "slug": "batido-cuban-fruit-shake"
  },
  {
    "id": 172,
    "name": "Guarapo (Sugarcane Juice)",
    "country": "Cuba",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "4-5 sugarcane stalks",
        "2 limes",
        "Ice cubes"
      ]
    },
    "steps": [
      "Peel sugarcane stalks.",
      "Juice using a sugarcane press or heavy-duty juicer.",
      "Strain the juice.",
      "Add fresh lime juice.",
      "Stir well.",
      "Serve over ice cubes."
    ],
    "making_tips": [
      "Guarapo is a refreshing Cuban street drink.",
      "It's intensely sweet—the lime balances it.",
      "Serve ice-cold.",
      "This is best consumed fresh.",
      "Can be mixed with other fruit juices."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Cuban street drink",
    "better_than_store_bought": "Bottled versions have preservatives. Fresh is incomparable.",
    "hidden_nutrients": "Sugarcane provides electrolytes and trace minerals.",
    "continent": "North America",
    "slug": "guarapo-sugarcane-juice"
  },
  {
    "id": 173,
    "name": "Gizzada (Coconut Tart)",
    "country": "Jamaica",
    "category": "Snack",
    "time": "1 hour",
    "servings": "12 tarts",
    "difficulty": "Medium",
    "ingredients": {
      "Pastry": [
        "250g all-purpose flour",
        "125g unsalted butter, cold",
        "50g sugar",
        "1 egg yolk",
        "2-3 tbsp cold water"
      ],
      "Filling": [
        "200g desiccated coconut",
        "200g brown sugar",
        "1 tsp nutmeg",
        "1 tsp ginger",
        "½ tsp salt",
        "1 egg"
      ]
    },
    "steps": [
      "Make Pastry: Cut butter into flour and sugar. Add egg yolk and water. Chill 30 minutes.",
      "Roll pastry and line 12 tart tins. Chill.",
      "Make Filling: Mix coconut, brown sugar, nutmeg, ginger, and salt.",
      "Beat egg and add to the coconut mixture.",
      "Fill pastry shells.",
      "Bake at 180°C for 20-25 minutes.",
      "Cool completely in tins.",
      "Remove carefully."
    ],
    "making_tips": [
      "Gizzada is a Jamaican classic tart.",
      "The filling should be moist but not wet.",
      "Nutmeg and ginger give it the island flavor.",
      "The pastry should be flaky and tender.",
      "Serve with tea or coffee."
    ],
    "health_rating": 25,
    "cultural_authenticity": "100% – Jamaican classic tart",
    "better_than_store_bought": "Bakery versions can be dry. Homemade is moist and freshly spiced.",
    "hidden_nutrients": "Coconut provides healthy fats. Nutmeg has anti-inflammatory properties.",
    "continent": "North America",
    "slug": "gizzada-coconut-tart"
  },
  {
    "id": 174,
    "name": "Jamaican Sorrel Drink",
    "country": "Jamaica",
    "category": "Beverage",
    "time": "2 hours (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried sorrel (hibiscus) petals",
        "1.5 litres water",
        "200g sugar",
        "1 inch ginger, grated",
        "2 cinnamon sticks",
        "4 cloves"
      ]
    },
    "steps": [
      "Bring water to boil. Add sorrel, ginger, cinnamon, and cloves.",
      "Reduce heat and simmer for 15 minutes.",
      "Remove from heat and let steep for 1 hour.",
      "Strain through a fine sieve.",
      "Add sugar and stir to dissolve.",
      "Chill thoroughly.",
      "Serve over ice with a cinnamon stick."
    ],
    "making_tips": [
      "Sorrel is the Jamaican Christmas drink.",
      "The spices give it a festive warmth.",
      "Can be served with a splash of rum.",
      "The color should be deep red.",
      "Serve chilled for the best experience."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Jamaica's holiday drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is vibrant and spiced.",
    "hidden_nutrients": "Sorrel is rich in antioxidants. Ginger aids digestion.",
    "continent": "North America",
    "slug": "jamaican-sorrel-drink"
  },
  {
    "id": 175,
    "name": "Jamaican Ginger Beer",
    "country": "Jamaica",
    "category": "Beverage",
    "time": "30 minutes (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "1 inch fresh ginger, grated",
        "1 litre water",
        "150g sugar",
        "2 limes",
        "1 tsp vanilla",
        "Pinch of salt"
      ]
    },
    "steps": [
      "Combine ginger and water in a pot. Bring to boil.",
      "Reduce heat and simmer for 15 minutes.",
      "Strain to remove ginger bits.",
      "Add sugar, lime juice, vanilla, and salt.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    "making_tips": [
      "Jamaican ginger beer is fiery and sweet.",
      "Fresh ginger is essential for the authentic kick.",
      "It's traditionally non-alcoholic but a popular mixer.",
      "Adjust sweetness to taste.",
      "Serve ice-cold."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Jamaica's signature soda",
    "better_than_store_bought": "Commercial ginger beer has artificial flavors. Homemade is fiery and real.",
    "hidden_nutrients": "Ginger aids digestion and has anti-inflammatory properties. Lime provides vitamin C.",
    "continent": "North America",
    "slug": "jamaican-ginger-beer"
  },
  {
    "id": 176,
    "name": "Hojaldres (Sweet Fried Dough)",
    "country": "Panama",
    "category": "Snack",
    "time": "1 hour 15 minutes (includes rising)",
    "servings": "15 pieces",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "50g sugar",
        "1 tsp yeast",
        "½ tsp salt",
        "240ml warm water",
        "2 tbsp vegetable oil"
      ],
      "Coating": [
        "Powdered sugar"
      ],
      "Frying": [
        "Vegetable oil"
      ]
    },
    "steps": [
      "Mix flour, sugar, yeast, and salt.",
      "Add warm water and oil. Knead until smooth.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Divide into 15 balls.",
      "Roll each ball into a flat disc.",
      "Heat oil to 170°C.",
      "Fry until golden and puffed.",
      "Drain on paper towels.",
      "Dust generously with powdered sugar.",
      "Serve warm."
    ],
    "making_tips": [
      "Hojaldres are Panama's favorite street snack.",
      "The dough should be soft and pillowy.",
      "These are often eaten at festivals.",
      "Can be served with cheese.",
      "Best served fresh and warm."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Panamanian street favorite",
    "better_than_store_bought": "Street versions can be greasy. Homemade is lighter.",
    "hidden_nutrients": "The dish is primarily carbohydrates. Enjoy in moderation.",
    "continent": "North America",
    "slug": "hojaldres-sweet-fried-dough"
  },
  {
    "id": 177,
    "name": "Chicha de Maíz (Sweet Corn Drink)",
    "country": "Panama",
    "category": "Beverage",
    "time": "2 hours (plus soaking)",
    "servings": "4 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "300g dried corn (or cornmeal)",
        "1 litre water",
        "200g sugar",
        "1 cinnamon stick",
        "Pineapple chunks"
      ]
    },
    "steps": [
      "Soak corn in water overnight.",
      "Blend with 500ml water until smooth.",
      "Strain through a cheesecloth.",
      "Boil the liquid with cinnamon and sugar for 30 minutes.",
      "Add pineapple chunks.",
      "Simmer for another 15 minutes.",
      "Cool and chill.",
      "Serve cold over ice."
    ],
    "making_tips": [
      "Chicha is a traditional Panamanian drink.",
      "The pineapple gives it a lovely sweetness.",
      "This is a thicker drink—almost a dessert.",
      "Can be made with fresh corn for a sweeter taste.",
      "Serve ice-cold."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Panamanian traditional drink",
    "better_than_store_bought": "Commercial versions are often watery. Homemade is thick and authentic.",
    "hidden_nutrients": "Corn provides carbohydrates and fiber.",
    "continent": "North America",
    "slug": "chicha-de-maz-sweet-corn-drink"
  },
  {
    "id": 178,
    "name": "Tres Leches Cake (Costa Rican)",
    "country": "Costa Rica",
    "category": "Snack",
    "time": "2 hours (includes chilling)",
    "servings": "12 slices",
    "difficulty": "Medium",
    "ingredients": {
      "Cake": [
        "200g all-purpose flour",
        "1 tsp baking powder",
        "½ tsp salt",
        "150g unsalted butter, softened",
        "200g sugar",
        "3 large eggs",
        "1 tsp vanilla",
        "120ml milk"
      ],
      "Milk Mixture": [
        "1 can sweetened condensed milk",
        "1 can evaporated milk",
        "240ml heavy cream"
      ],
      "Topping": [
        "360ml heavy cream",
        "50g powdered sugar",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Preheat oven to 180°C. Grease a 20x30cm pan.",
      "Beat butter and sugar until fluffy. Add eggs one at a time.",
      "Add flour mixture alternately with milk. Add vanilla.",
      "Bake for 25-30 minutes.",
      "Cool for 10 minutes. Poke holes all over.",
      "Mix three milks and pour slowly over cake.",
      "Refrigerate for 2 hours.",
      "Whip heavy cream, sugar, and vanilla for topping.",
      "Spread topping over cake.",
      "Garnish with cinnamon or berries."
    ],
    "making_tips": [
      "The cake should be moist but not soggy.",
      "Poke holes generously for the milk to soak.",
      "Costa Rican tres leches is slightly lighter.",
      "Chill thoroughly before serving.",
      "Serve with fresh fruit."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Costa Rican favorite cake",
    "better_than_store_bought": "Bakery versions can be dry. Homemade is moist and creamy.",
    "hidden_nutrients": "Eggs provide protein. Milk adds calcium.",
    "continent": "North America",
    "slug": "tres-leches-cake-costa-rican"
  },
  {
    "id": 179,
    "name": "Agua de Tamarindo (Costa Rican)",
    "country": "Costa Rica",
    "category": "Beverage",
    "time": "1 hour",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "200g tamarind paste (or pods)",
        "1.5 litres water",
        "150g sugar"
      ]
    },
    "steps": [
      "If using tamarind pods, shell and remove seeds.",
      "Soak tamarind in 500ml warm water for 30 minutes.",
      "Strain through a sieve, pressing to extract all liquid.",
      "Add remaining water and sugar.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    "making_tips": [
      "Tamarind is sweet and sour—balance the sugar.",
      "This is a popular Costa Rican drink.",
      "Can be flavored with ginger.",
      "Serve ice-cold.",
      "Great with a squeeze of lime."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Costa Rican refresher",
    "better_than_store_bought": "Bottled tamarind juice has preservatives. Homemade is fresh and authentic.",
    "hidden_nutrients": "Tamarind provides iron, potassium, and magnesium.",
    "continent": "North America",
    "slug": "agua-de-tamarindo-costa-rican"
  },
  {
    "id": 180,
    "name": "Habichuelas con Dulce (Sweet Beans)",
    "country": "Dominican Republic",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus soaking)",
    "servings": "6 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Main": [
        "500g red kidney beans",
        "1 litre water",
        "400ml coconut milk",
        "200g sugar",
        "1 cinnamon stick",
        "½ tsp salt",
        "Optional: sweet potato"
      ]
    },
    "steps": [
      "Soak beans overnight.",
      "Rinse and drain.",
      "Boil beans in water until soft (about 1 hour).",
      "Add coconut milk, sugar, cinnamon, and salt.",
      "Simmer for 15-20 minutes until thickened.",
      "Remove cinnamon stick.",
      "Serve warm or chilled."
    ],
    "making_tips": [
      "Habichuelas con dulce is a Dominican Lenten tradition.",
      "The beans should be soft but still whole.",
      "This is a sweet dessert, not a savory dish.",
      "Traditionally served with round crackers.",
      "Can be served with coconut on top."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Dominican Lenten tradition",
    "better_than_store_bought": "Canned versions can't compare to homemade.",
    "hidden_nutrients": "Beans provide protein and fiber. Coconut milk offers healthy fats.",
    "continent": "North America",
    "slug": "habichuelas-con-dulce-sweet-beans"
  },
  {
    "id": 181,
    "name": "Morir Soñando (Orange Milk Drink)",
    "country": "Dominican Republic",
    "category": "Beverage",
    "time": "15 minutes",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500ml fresh orange juice",
        "500ml milk",
        "100g sugar",
        "1 tsp vanilla",
        "Ice cubes"
      ]
    },
    "steps": [
      "Chill orange juice and milk separately.",
      "Combine sugar and 100ml orange juice. Stir to dissolve.",
      "Add remaining orange juice and milk.",
      "Add vanilla.",
      "Stir well.",
      "Serve over ice cubes.",
      "Stir before drinking."
    ],
    "making_tips": [
      "Morir Soñando means 'to die dreaming' in Spanish.",
      "This is the Dominican Republic's signature drink.",
      "Use fresh orange juice for the best flavor.",
      "The milk should be ice-cold to prevent curdling.",
      "Serve immediately."
    ],
    "health_rating": 40,
    "cultural_authenticity": "100% – Dominican iconic drink",
    "better_than_store_bought": "Cafe versions often use powder. Homemade uses real juice.",
    "hidden_nutrients": "Orange juice provides vitamin C. Milk adds calcium.",
    "continent": "North America",
    "slug": "morir-soando-orange-milk-drink"
  },
  {
    "id": 182,
    "name": "Flan de Queso (Cheese Flan)",
    "country": "Puerto Rico",
    "category": "Snack",
    "time": "1 hour 15 minutes (plus chilling)",
    "servings": "8 servings",
    "difficulty": "Medium",
    "ingredients": {
      "Caramel": [
        "200g sugar",
        "60ml water"
      ],
      "Custard": [
        "450g cream cheese, softened",
        "1 can sweetened condensed milk",
        "1 can evaporated milk",
        "4 large eggs",
        "1 tsp vanilla"
      ]
    },
    "steps": [
      "Make Caramel: Heat sugar and water until golden. Pour into flan mold.",
      "Make Custard: Beat cream cheese until smooth.",
      "Add condensed milk, evaporated milk, eggs, and vanilla.",
      "Blend until smooth.",
      "Pour over caramel.",
      "Cover with foil. Place in water bath.",
      "Bake at 170°C for 1 hour.",
      "Cool completely, then chill 4 hours.",
      "Unmold onto a serving plate."
    ],
    "making_tips": [
      "The cream cheese gives Puerto Rican flan its rich, tangy flavor.",
      "This is called 'flan de queso' for a reason.",
      "The water bath is essential for a smooth texture.",
      "Chill thoroughly before unmolding.",
      "Serve with fresh berries."
    ],
    "health_rating": 20,
    "cultural_authenticity": "100% – Puerto Rican flan favorite",
    "better_than_store_bought": "Commercial flan has stabilizers. Homemade is silky and tangy.",
    "hidden_nutrients": "Cream cheese and milk provide calcium. Eggs add protein.",
    "continent": "North America",
    "slug": "flan-de-queso-cheese-flan"
  },
  {
    "id": 183,
    "name": "Piña Colada (Non-Alcoholic)",
    "country": "Puerto Rico",
    "category": "Beverage",
    "time": "10 minutes",
    "servings": "2 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "500g fresh pineapple, chopped",
        "240ml coconut cream",
        "2 tbsp sugar (to taste)",
        "Ice cubes",
        "Pineapple wedges for garnish"
      ]
    },
    "steps": [
      "Combine pineapple, coconut cream, sugar, and ice in a blender.",
      "Blend until smooth and creamy.",
      "Taste and adjust sweetness.",
      "Pour into tall glasses.",
      "Garnish with pineapple wedges.",
      "Serve immediately."
    ],
    "making_tips": [
      "Piña Colada is Puerto Rico's iconic drink.",
      "Use fresh pineapple for the best flavor.",
      "Coconut cream gives it richness.",
      "Blend until completely smooth.",
      "Serve in a chilled glass with a straw."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Puerto Rico's signature drink",
    "better_than_store_bought": "Bottled mixes have artificial flavors. Homemade is fresh and creamy.",
    "hidden_nutrients": "Pineapple provides vitamin C and bromelain. Coconut offers healthy fats.",
    "continent": "North America",
    "slug": "pia-colada-non-alcoholic"
  },
  {
    "id": 184,
    "name": "Tembleque (Coconut Pudding)",
    "country": "Puerto Rico",
    "category": "Snack",
    "time": "1 hour (plus chilling)",
    "servings": "6 servings",
    "difficulty": "Easy-Medium",
    "ingredients": {
      "Main": [
        "500ml coconut milk",
        "100g cornstarch",
        "150g sugar",
        "½ tsp salt",
        "1 tsp vanilla",
        "Ground cinnamon for garnish"
      ]
    },
    "steps": [
      "In a pot, combine coconut milk, cornstarch, sugar, and salt.",
      "Whisk until smooth.",
      "Cook over medium heat, stirring constantly.",
      "Continue until mixture thickens and bubbles.",
      "Remove from heat. Add vanilla.",
      "Pour into a mold or individual ramekins.",
      "Chill for 2 hours until set.",
      "Unmold onto plates.",
      "Sprinkle with cinnamon.",
      "Serve cold."
    ],
    "making_tips": [
      "Tembleque means 'wiggle' in Spanish—it should jiggle.",
      "Stir constantly to prevent lumps.",
      "The mixture thickens quickly at the end.",
      "This is a Puerto Rican coconut dessert.",
      "Serve chilled for the best texture."
    ],
    "health_rating": 35,
    "cultural_authenticity": "100% – Puerto Rican coconut classic",
    "better_than_store_bought": "Commercial versions are often too sweet. Homemade has pure coconut flavor.",
    "hidden_nutrients": "Coconut milk provides healthy fats and minerals.",
    "continent": "North America",
    "slug": "tembleque-coconut-pudding"
  },
  {
    "id": 185,
    "name": "Coconut Bake (Sweet Bread)",
    "country": "Trinidad & Tobago",
    "category": "Snack",
    "time": "1 hour 30 minutes (includes rising)",
    "servings": "1 loaf (8 slices)",
    "difficulty": "Medium",
    "ingredients": {
      "Dough": [
        "400g all-purpose flour",
        "7g instant yeast",
        "50g sugar",
        "½ tsp salt",
        "240ml warm coconut milk",
        "2 tbsp coconut oil",
        "100g desiccated coconut"
      ]
    },
    "steps": [
      "Mix flour, yeast, sugar, and salt.",
      "Add warm coconut milk and coconut oil. Knead until smooth.",
      "Fold in desiccated coconut.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Shape into a round loaf.",
      "Place in a greased pan.",
      "Let rise 30 minutes.",
      "Bake at 180°C for 30-35 minutes.",
      "Cool on a wire rack.",
      "Slice and serve."
    ],
    "making_tips": [
      "Coconut bake is a Trinidadian favorite.",
      "The coconut gives it a lovely sweetness and texture.",
      "Often served with cheese or butter.",
      "The crust should be golden and slightly crisp.",
      "Best eaten fresh."
    ],
    "health_rating": 45,
    "cultural_authenticity": "100% – Trinidadian sweet bread",
    "better_than_store_bought": "Bakery versions can be dry. Homemade is moist and coconutty.",
    "hidden_nutrients": "Coconut provides healthy fats and fiber. Milk adds calcium.",
    "continent": "North America",
    "slug": "coconut-bake-sweet-bread"
  },
  {
    "id": 186,
    "name": "Trinidadian Sorrel",
    "country": "Trinidad & Tobago",
    "category": "Beverage",
    "time": "2 hours (plus chilling)",
    "servings": "4 servings",
    "difficulty": "Easy",
    "ingredients": {
      "Main": [
        "100g dried sorrel petals",
        "1.5 litres water",
        "200g sugar",
        "1 inch ginger",
        "2 cinnamon sticks",
        "4 cloves",
        "Orange peel (optional)"
      ]
    },
    "steps": [
      "Boil water with sorrel, ginger, cinnamon, cloves, and orange peel.",
      "Reduce heat and simmer for 15 minutes.",
      "Remove from heat and steep for 1 hour.",
      "Strain through a fine sieve.",
      "Add sugar and stir to dissolve.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    "making_tips": [
      "Sorrel is the Trinidadian Christmas drink.",
      "The spices give it a festive flavor.",
      "Can be served with a splash of rum.",
      "The color should be deep red.",
      "Serve chilled with a cinnamon stick."
    ],
    "health_rating": 55,
    "cultural_authenticity": "100% – Trinidadian Christmas drink",
    "better_than_store_bought": "Bottled versions have preservatives. Homemade is fresh and spiced.",
    "hidden_nutrients": "Sorrel is rich in antioxidants. Ginger aids digestion.",
    "continent": "North America",
    "slug": "trinidadian-sorrel"
  }
,
  {
    id: 245,
    name: "ANZAC Biscuits",
    slug: "anzac_biscuits",
    country: "Australia",
    continent: "Oceania",
    category: "Snack",
    time: "30 minutes",
    servings: "24 biscuits",
    difficulty: "Easy",
    ingredients: {
      "Main": ["150g rolled oats", "100g desiccated coconut", "150g all-purpose flour", "200g brown sugar", "125g unsalted butter", "2 tbsp golden syrup", "1 tsp baking soda", "2 tbsp boiling water"]
    },
    steps: [
      "Preheat oven to 160°C. Line baking sheets with parchment paper.",
      "In a bowl, mix oats, coconut, flour, and sugar.",
      "In a saucepan, melt butter and golden syrup together.",
      "Dissolve baking soda in boiling water and add to the butter mixture.",
      "Pour the wet mixture into the dry ingredients and mix well.",
      "Roll tablespoon-sized portions into balls and place on baking sheets.",
      "Flatten slightly with a fork.",
      "Bake for 18-20 minutes until golden.",
      "Cool on the baking sheet for 5 minutes, then transfer to a wire rack."
    ],
    making_tips: [
      "ANZAC biscuits were originally sent to soldiers in World War I.",
      "They contain no eggs so they kept well during transport.",
      "The biscuits should be chewy in the center and crisp at the edges.",
      "Golden syrup is essential for the authentic flavor.",
      "Store in an airtight container."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Australian wartime tradition",
    better_than_store_bought: "Commercial ANZAC biscuits are often too sweet. Homemade have the perfect texture and oat flavor.",
    hidden_nutrients: "Oats provide fiber and B vitamins. Coconut offers healthy fats.",
  },
  {
    id: 246,
    name: "Lamingtons",
    slug: "lamingtons",
    country: "Australia",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour (plus chilling)",
    servings: "12 pieces",
    difficulty: "Medium",
    ingredients: {
      "Cake": ["200g unsalted butter, softened", "200g sugar", "4 large eggs", "1 tsp vanilla", "300g self-raising flour", "120ml milk"],
      "Chocolate Coating": ["400g icing sugar", "60g cocoa powder", "150ml boiling water", "30g unsalted butter, melted"],
      "Coating": ["200g desiccated coconut"]
    },
    steps: [
      "Preheat oven to 180°C. Grease a 20x30cm baking pan.",
      "Make Cake: Beat butter and sugar until fluffy. Add eggs one at a time.",
      "Add vanilla. Fold in flour alternately with milk.",
      "Pour into the pan and bake for 25-30 minutes.",
      "Cool completely. Cut into 12 squares.",
      "Make Chocolate Coating: Sift icing sugar and cocoa. Add boiling water and butter. Mix until smooth.",
      "Dip each cake square into the chocolate coating.",
      "Roll immediately in desiccated coconut.",
      "Place on a wire rack to set.",
      "Serve at room temperature."
    ],
    making_tips: [
      "The cake should be slightly dry to absorb the chocolate coating.",
      "Work quickly—the chocolate sets fast.",
      "Coconut should be fine and fresh.",
      "Lamingtons are an Australian icon.",
      "Can be filled with jam or cream."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Australian national cake",
    better_than_store_bought: "Commercial lamingtons are often dry. Homemade are fresh and chocolatey.",
    hidden_nutrients: "Cocoa provides antioxidants. Coconut offers healthy fats.",
  },
  {
    id: 247,
    name: "Pavlova",
    slug: "pavlova",
    country: "Australia/New Zealand",
    continent: "Oceania",
    category: "Snack",
    time: "2 hours (includes cooling)",
    servings: "8 servings",
    difficulty: "Medium-Hard",
    ingredients: {
      "Meringue": ["4 large egg whites", "250g granulated sugar", "1 tsp white vinegar", "1 tsp cornstarch", "1 tsp vanilla"],
      "Topping": ["300ml heavy cream", "2 tbsp powdered sugar", "Mixed fresh fruit (passionfruit, strawberries, kiwi)"]
    },
    steps: [
      "Preheat oven to 150°C. Line a baking sheet with parchment.",
      "Beat egg whites until stiff peaks form.",
      "Gradually add sugar, beating until thick and glossy.",
      "Fold in vinegar, cornstarch, and vanilla.",
      "Spoon onto the baking sheet into a round mound.",
      "Spread into a circle, creating a slight well in the center.",
      "Reduce oven temperature to 120°C.",
      "Bake for 1 hour 15 minutes.",
      "Turn off oven and leave pavlova inside to cool completely.",
      "Whip cream with powdered sugar to soft peaks.",
      "Top pavlova with cream and fresh fruit.",
      "Serve immediately."
    ],
    making_tips: [
      "The vinegar and cornstarch give pavlova its marshmallow center.",
      "Don't open the oven door during baking.",
      "The pavlova should be crisp on the outside and soft inside.",
      "The debate between Australia and New Zealand over its origin continues.",
      "Top with passionfruit for the classic presentation."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – ANZAC dessert icon",
    better_than_store_bought: "Store-bought pavlova is often too crisp. Homemade has the perfect marshmallow interior.",
    hidden_nutrients: "Egg whites provide protein. Fresh fruit adds vitamins and antioxidants.",
  },
  {
    id: 248,
    name: "Fairy Bread",
    slug: "fairy_bread",
    country: "Australia",
    continent: "Oceania",
    category: "Snack",
    time: "10 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 slices white bread", "60g unsalted butter, softened", "50g hundreds and thousands (rainbow sprinkles)"]
    },
    steps: [
      "Spread butter generously on each slice of bread.",
      "Sprinkle hundreds and thousands over the buttered surface.",
      "Press gently to make the sprinkles stick.",
      "Cut into triangles or fingers.",
      "Serve immediately."
    ],
    making_tips: [
      "Fairy bread is Australia's iconic children's party food.",
      "White bread is traditional—use the freshest bread.",
      "The butter should be soft enough to spread but not melted.",
      "The sprinkles must be round (hundreds and thousands).",
      "Never use any other type of sprinkle—this is law."
    ],
    health_rating: 15,
    cultural_authenticity: "100% – Australian childhood icon",
    better_than_store_bought: "This is a homemade classic that can't be bought.",
    hidden_nutrients: "Butter provides vitamin A. The dish is a nostalgic treat.",
  },
  {
    id: 249,
    name: "Flat White",
    slug: "flat_white",
    country: "Australia/New Zealand",
    continent: "Oceania",
    category: "Beverage",
    time: "10 minutes",
    servings: "2 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["4 tbsp freshly ground espresso coffee", "240ml hot water", "240ml milk"]
    },
    steps: [
      "Brew a strong espresso using a machine or stovetop pot.",
      "Heat milk until steaming. Froth until microfoam forms.",
      "Pour espresso into cups.",
      "Pour steamed milk over the espresso, holding back the foam.",
      "Top with a thin layer of microfoam.",
      "Serve immediately."
    ],
    making_tips: [
      "The flat white has a thin layer of microfoam—not thick like a latte.",
      "The coffee should be strong and rich.",
      "The milk should be velvety, not foamy.",
      "Originating in Australia and New Zealand.",
      "A true flat white is served in a tulip cup."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Aussie coffee culture",
    better_than_store_bought: "Cafe versions often use too much foam. Homemade has the perfect balance.",
    hidden_nutrients: "Coffee provides antioxidants. Milk adds calcium.",
  },
  {
    id: 250,
    name: "Lemon Lime Bitters",
    slug: "lemon_lime_bitters",
    country: "Australia",
    continent: "Oceania",
    category: "Beverage",
    time: "10 minutes",
    servings: "2 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["1 lemon", "1 lime", "50ml simple syrup", "500ml soda water", "8 drops aromatic bitters", "Ice cubes"]
    },
    steps: [
      "Juice lemon and lime.",
      "In a shaker, combine citrus juice and simple syrup.",
      "Shake briefly.",
      "Pour into glasses filled with ice.",
      "Top with soda water.",
      "Add bitters on top.",
      "Garnish with lemon and lime slices.",
      "Serve immediately."
    ],
    making_tips: [
      "Aromatic bitters are essential—this is what makes it a 'bitters' drink.",
      "Lemon lime bitters is Australia's pub favorite.",
      "The non-alcoholic version is just as popular.",
      "Use fresh citrus for the best flavor.",
      "The bitters should be added last."
    ],
    health_rating: 35,
    cultural_authenticity: "100% – Australian pub classic",
    better_than_store_bought: "Bottled versions have preservatives. Homemade is fresh and balanced.",
    hidden_nutrients: "Lemons and limes provide vitamin C.",
  },
  {
    id: 251,
    name: "Afghan Cookies (New Zealand)",
    slug: "afghan_cookies_new_zealand",
    country: "New Zealand",
    continent: "Oceania",
    category: "Snack",
    time: "30 minutes",
    servings: "20 cookies",
    difficulty: "Easy-Medium",
    ingredients: {
      "Cookies": ["200g all-purpose flour", "50g cocoa powder", "200g butter, softened", "150g sugar", "100g cornflakes, crushed", "1 tsp vanilla"],
      "Icing": ["200g icing sugar", "30g cocoa powder", "60g butter, melted", "2 tbsp milk"],
      "Topping": ["Walnut halves"]
    },
    steps: [
      "Preheat oven to 180°C. Line baking sheets.",
      "Cream butter and sugar until fluffy. Add vanilla.",
      "Sift flour and cocoa. Add to butter mixture.",
      "Fold in crushed cornflakes.",
      "Roll into balls and place on baking sheets.",
      "Flatten slightly.",
      "Bake for 15-18 minutes.",
      "Cool completely.",
      "Make Icing: Mix icing sugar, cocoa, butter, and milk until smooth.",
      "Spread icing on each cookie.",
      "Top with a walnut half."
    ],
    making_tips: [
      "Afghan cookies are a New Zealand icon.",
      "Cornflakes give them their unique texture.",
      "The icing should be thick and glossy.",
      "Each cookie must have a walnut half on top.",
      "They are a Kiwi baking classic."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – New Zealand baking icon",
    better_than_store_bought: "Commercial versions can't match the homemade chocolate-crunch texture.",
    hidden_nutrients: "Walnuts provide healthy fats and omega-3s. Cocoa offers antioxidants.",
  },
  {
    id: 252,
    name: "Hokey Pokey Ice Cream",
    slug: "hokey_pokey_ice_cream",
    country: "New Zealand",
    continent: "Oceania",
    category: "Snack",
    time: "30 minutes (plus freezing)",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Ice Cream Base": ["500ml heavy cream", "1 can (395g) sweetened condensed milk", "2 tsp vanilla"],
      "Hokey Pokey (Honeycomb)": ["150g sugar", "50ml golden syrup", "2 tsp baking soda"]
    },
    steps: [
      "Make Hokey Pokey: Heat sugar and golden syrup in a pot until dissolved.",
      "Boil until it turns golden and reaches 150°C.",
      "Remove from heat. Add baking soda and stir vigorously—it will foam.",
      "Pour onto a baking sheet. Cool and break into pieces.",
      "Make Ice Cream: Whip heavy cream to soft peaks.",
      "Fold in condensed milk and vanilla.",
      "Fold in the hokey pokey pieces.",
      "Pour into a container and freeze for at least 4 hours.",
      "Serve scoops of the ice cream."
    ],
    making_tips: [
      "Hokey pokey is the Kiwi name for honeycomb.",
      "The baking soda creates the bubbles.",
      "Work quickly when adding baking soda—it sets fast.",
      "The ice cream should be creamy with crunchy honeycomb.",
      "A New Zealand summer favorite."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – New Zealand favorite",
    better_than_store_bought: "Commercial hokey pokey ice cream often lacks crunchy bits. Homemade has generous pieces.",
    hidden_nutrients: "Cream provides calcium. The dish is a treat.",
  },
  {
    id: 253,
    name: "Kiwi Limeade",
    slug: "kiwi_limeade",
    country: "New Zealand",
    continent: "Oceania",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 kiwifruit, peeled", "4 limes", "100g sugar", "750ml soda water", "Ice cubes"]
    },
    steps: [
      "Blend kiwifruit until smooth.",
      "Juice limes.",
      "Combine kiwi puree, lime juice, and sugar.",
      "Stir until sugar dissolves.",
      "Strain if desired.",
      "Pour into glasses with ice.",
      "Top with soda water.",
      "Garnish with kiwi and lime slices."
    ],
    making_tips: [
      "The kiwi should be ripe and sweet.",
      "This is a refreshing Kiwi summer drink.",
      "Adjust sweetness to taste.",
      "The drink should be bright green.",
      "Serve ice-cold."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – New Zealand summer refresher",
    better_than_store_bought: "Bottled limeade has preservatives. Homemade is fresh and vibrant.",
    hidden_nutrients: "Kiwifruit provides vitamin C and fiber. Limes offer additional vitamin C.",
  },
  {
    id: 254,
    name: "Cassava Cake (Fiji)",
    slug: "cassava_cake_fiji",
    country: "Fiji",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour 15 minutes",
    servings: "1 cake (8 slices)",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g cassava, peeled and grated", "1 can (400ml) coconut milk", "200g sugar", "2 large eggs", "1 tsp vanilla", "½ tsp salt"]
    },
    steps: [
      "Preheat oven to 180°C. Grease a baking dish.",
      "Squeeze excess liquid from grated cassava.",
      "In a bowl, combine cassava, coconut milk, sugar, eggs, vanilla, and salt.",
      "Mix well.",
      "Pour into the prepared dish.",
      "Bake for 45-50 minutes until golden and set.",
      "Let cool completely.",
      "Cut into squares.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Cassava must be squeezed well to remove moisture.",
      "This is a Fijian dessert favorite.",
      "The texture should be soft and pudding-like.",
      "Coconut milk is essential for the island flavor.",
      "Serve with fresh fruit."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Fijian island dessert",
    better_than_store_bought: "This traditional pudding is best made fresh.",
    hidden_nutrients: "Cassava provides carbohydrates. Coconut offers healthy fats.",
  },
  {
    id: 255,
    name: "Coconut Balls (Fiji)",
    slug: "coconut_balls_fiji",
    country: "Fiji",
    continent: "Oceania",
    category: "Snack",
    time: "30 minutes (plus chilling)",
    servings: "15 balls",
    difficulty: "Easy",
    ingredients: {
      "Main": ["300g desiccated coconut", "1 can (395g) sweetened condensed milk", "1 tbsp fresh ginger, grated", "1 tsp vanilla"]
    },
    steps: [
      "In a bowl, combine coconut, condensed milk, ginger, and vanilla.",
      "Mix well until it forms a thick paste.",
      "Chill for 30 minutes.",
      "Roll into small balls.",
      "Roll in extra coconut.",
      "Chill until firm.",
      "Serve cold."
    ],
    making_tips: [
      "The ginger gives Fijian coconut candy its unique warmth.",
      "Chill the mixture before rolling.",
      "These are an island favorite.",
      "They should be sweet and coconutty.",
      "Store in the refrigerator."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Fijian coconut candy",
    better_than_store_bought: "Commercial versions have additives. Homemade have real ginger and coconut.",
    hidden_nutrients: "Coconut provides healthy fats and fiber. Ginger aids digestion.",
  },
  {
    id: 256,
    name: "Fijian Kava (Non-Alcoholic)",
    slug: "fijian_kava_nonalcoholic",
    country: "Fiji",
    continent: "Oceania",
    category: "Beverage",
    time: "30 minutes",
    servings: "4 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["50g kava root powder", "500ml water (room temperature)", "Sugar or honey to taste"]
    },
    steps: [
      "Place kava powder in a cloth bag or strainer.",
      "Knead and squeeze the bag in room temperature water for 15 minutes.",
      "The water will turn cloudy and milky.",
      "Strain into a bowl.",
      "Add sugar or honey to sweeten.",
      "Chill thoroughly.",
      "Serve in coconut shells."
    ],
    making_tips: [
      "Kava is a traditional Fijian drink used in ceremony.",
      "The drink has a peppery, earthy taste.",
      "Sweetening makes it more palatable.",
      "It should be consumed immediately.",
      "In Fiji, it's drunk from coconut shell cups."
    ],
    health_rating: 50,
    cultural_authenticity: "100% – Fijian ceremonial drink",
    better_than_store_bought: "Bottled kava is less authentic. Freshly prepared is the traditional way.",
    hidden_nutrients: "Kava has relaxing properties. Sweetener adds energy.",
  },
  {
    id: 257,
    name: "Cassava Puddings (Solomon Islands)",
    slug: "cassava_puddings_solomon_islands",
    country: "Solomon Islands",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour 15 minutes",
    servings: "1 cake (8 slices)",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g cassava, peeled and grated", "400ml coconut milk", "150g sugar", "2 eggs", "1 tsp vanilla", "Pinch of salt"]
    },
    steps: [
      "Preheat oven to 180°C.",
      "Squeeze excess liquid from cassava.",
      "Mix cassava, coconut milk, sugar, eggs, vanilla, and salt.",
      "Pour into a greased baking dish.",
      "Bake for 45-50 minutes.",
      "Cool completely.",
      "Cut into squares.",
      "Serve at room temperature."
    ],
    making_tips: [
      "The pudding should be soft and slightly chewy.",
      "Coconut milk is the key island ingredient.",
      "This is a Solomon Islands staple.",
      "Can be served warm or chilled.",
      "Often eaten as a snack."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Solomon Island pudding",
    better_than_store_bought: "Freshly made island pudding is far superior.",
    hidden_nutrients: "Cassava provides carbohydrates. Coconut offers healthy fats.",
  },
  {
    id: 258,
    name: "Solomon Tea (Ginger Lemon Tea)",
    slug: "solomon_tea_ginger_lemon_tea",
    country: "Solomon Islands",
    continent: "Oceania",
    category: "Beverage",
    time: "20 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["1 inch fresh ginger, grated", "4 tea bags (black tea)", "1 litre water", "2 lemons", "100g sugar or honey"]
    },
    steps: [
      "Boil water with grated ginger for 10 minutes.",
      "Add tea bags and steep for 5 minutes.",
      "Remove tea bags.",
      "Add lemon juice and sugar.",
      "Stir until sugar dissolves.",
      "Serve warm."
    ],
    making_tips: [
      "Solomon tea is a comforting island drink.",
      "The ginger gives it a warming kick.",
      "Fresh lemons are essential.",
      "Honey can be used instead of sugar.",
      "This is served year-round."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – Solomon Island favorite",
    better_than_store_bought: "Bottled versions can't match the fresh ginger and lemon flavor.",
    hidden_nutrients: "Ginger aids digestion. Lemons provide vitamin C.",
  },
  {
    id: 259,
    name: "Pudding de Taro (Vanuatu)",
    slug: "pudding_de_taro_vanuatu",
    country: "Vanuatu",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour 15 minutes",
    servings: "8 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g taro, peeled and grated", "400ml coconut milk", "150g sugar", "2 eggs", "1 tsp vanilla", "Pinch of salt"]
    },
    steps: [
      "Preheat oven to 180°C.",
      "Squeeze excess liquid from grated taro.",
      "Mix taro, coconut milk, sugar, eggs, vanilla, and salt.",
      "Pour into a greased baking dish.",
      "Bake for 45-50 minutes.",
      "Cool completely.",
      "Cut into squares.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Taro pudding is a Vanuatu staple.",
      "The texture should be soft and coconutty.",
      "This is a traditional island dessert.",
      "Can be served with fresh fruit.",
      "A common snack throughout the Pacific."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Vanuatu traditional pudding",
    better_than_store_bought: "Island-style pudding is best when freshly baked.",
    hidden_nutrients: "Taro provides fiber and potassium. Coconut milk offers healthy fats.",
  },
  {
    id: 260,
    name: "Lime Squash (Vanuatu)",
    slug: "lime_squash_vanuatu",
    country: "Vanuatu",
    continent: "Oceania",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["6 limes", "200g sugar", "500ml water", "500ml soda water", "Ice cubes"]
    },
    steps: [
      "Juice limes.",
      "In a pitcher, combine lime juice, sugar, and water.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "To serve, fill glasses with ice.",
      "Pour lime mixture ¾ full.",
      "Top with soda water.",
      "Garnish with lime slices."
    ],
    making_tips: [
      "Lime squash is a refreshing Vanuatu drink.",
      "Adjust sweetness to taste.",
      "The soda water adds fizz.",
      "Serve ice-cold.",
      "A great refresher in tropical heat."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Vanuatu street drink",
    better_than_store_bought: "Freshly made lime squash is far superior to bottled versions.",
    hidden_nutrients: "Limes provide vitamin C.",
  },
  {
    id: 261,
    name: "Panikeke (Samoan Doughnuts)",
    slug: "panikeke_samoan_doughnuts",
    country: "Samoa",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour 15 minutes (includes rising)",
    servings: "15 pieces",
    difficulty: "Medium",
    ingredients: {
      "Dough": ["400g all-purpose flour", "7g instant yeast", "50g sugar", "½ tsp salt", "250ml warm water", "1 egg", "2 tbsp coconut milk (optional)"],
      "Frying": ["Vegetable oil"],
      "Coating": ["Powdered sugar"]
    },
    steps: [
      "Mix flour, yeast, sugar, and salt.",
      "Add warm water, egg, and coconut milk if using.",
      "Knead until smooth and elastic.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Divide into 15 pieces.",
      "Shape each into a ball and flatten slightly.",
      "Heat oil to 170°C.",
      "Fry until golden and puffed, turning once.",
      "Drain on paper towels.",
      "Dust with powdered sugar.",
      "Serve warm."
    ],
    making_tips: [
      "Panikeke is Samoa's favorite sweet bread.",
      "The dough should be soft and light.",
      "Coconut milk adds island flavor.",
      "They are often eaten with tea.",
      "Best served fresh."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Samoan island favorite",
    better_than_store_bought: "Fresh panikeke is a Pacific island treat.",
    hidden_nutrients: "Egg provides protein. Coconut milk offers healthy fats.",
  },
  {
    id: 262,
    name: "Koko Samoan (Samoan Cocoa)",
    slug: "koko_samoan_samoan_cocoa",
    country: "Samoa",
    continent: "Oceania",
    category: "Beverage",
    time: "20 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 tbsp Samoan cocoa powder (or dark cocoa)", "500ml water", "1 can (400ml) coconut milk", "100g sugar", "1 vanilla bean (or 1 tsp vanilla)"]
    },
    steps: [
      "In a pot, combine cocoa powder and water.",
      "Heat while whisking until it comes to a boil.",
      "Add coconut milk, sugar, and vanilla.",
      "Whisk until hot and combined.",
      "Strain if desired.",
      "Serve warm."
    ],
    making_tips: [
      "Koko Samoa is a thick, rich drinking chocolate.",
      "Coconut milk is essential for the Samoan version.",
      "It's traditionally served at breakfast.",
      "The cocoa is not overly sweet.",
      "A comforting island beverage."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Samoan breakfast drink",
    better_than_store_bought: "Bottled versions can't match the rich, coconutty flavor.",
    hidden_nutrients: "Cocoa provides antioxidants. Coconut milk offers healthy fats.",
  },
  {
    id: 263,
    name: "Fa'ausi (Samoan Coconut Pudding)",
    slug: "faausi_samoan_coconut_pudding",
    country: "Samoa",
    continent: "Oceania",
    category: "Snack",
    time: "45 minutes",
    servings: "6 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["400ml coconut cream", "200g brown sugar", "4 tbsp cornstarch", "1 tsp vanilla", "Pinch of salt"]
    },
    steps: [
      "In a pot, combine coconut cream, brown sugar, and salt.",
      "Dissolve cornstarch in a little water.",
      "Add to the pot and whisk.",
      "Cook over medium heat, stirring constantly.",
      "Continue until thick and glossy.",
      "Add vanilla.",
      "Pour into a dish.",
      "Chill until set.",
      "Serve cold."
    ],
    making_tips: [
      "Fa'ausi is a rich Samoan coconut pudding.",
      "It should be thick and creamy.",
      "The caramel flavor from brown sugar is key.",
      "Serve cold for the best texture.",
      "A traditional Samoan dessert."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Samoan coconut pudding",
    better_than_store_bought: "This is a traditional island dessert made fresh.",
    hidden_nutrients: "Coconut cream provides healthy fats. Brown sugar offers trace minerals.",
  },
  {
    id: 264,
    name: "Otai (Tongan Watermelon Drink)",
    slug: "otai_tongan_watermelon_drink",
    country: "Tonga",
    continent: "Oceania",
    category: "Beverage",
    time: "20 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["500g watermelon, deseeded", "400ml coconut milk", "100g sugar", "Ice cubes", "Fresh mint for garnish"]
    },
    steps: [
      "Mash or blend watermelon until it's chunky but not pureed.",
      "Add coconut milk and sugar.",
      "Stir until sugar dissolves.",
      "Add ice cubes.",
      "Garnish with mint.",
      "Serve immediately."
    ],
    making_tips: [
      "Otai is Tonga's national drink.",
      "The watermelon should be very ripe.",
      "The texture should be chunky, not smooth.",
      "It's a sweet, refreshing tropical drink.",
      "Serve ice-cold."
    ],
    health_rating: 50,
    cultural_authenticity: "100% – Tonga's national drink",
    better_than_store_bought: "This is a fresh drink that can't be bottled.",
    hidden_nutrients: "Watermelon provides hydration and vitamin C. Coconut milk offers healthy fats.",
  },
  {
    id: 265,
    name: "Manioke (Tongan Cassava Pudding)",
    slug: "manioke_tongan_cassava_pudding",
    country: "Tonga",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour 15 minutes",
    servings: "8 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g cassava, peeled and grated", "400ml coconut milk", "150g sugar", "2 eggs", "1 tsp vanilla", "Pinch of salt"]
    },
    steps: [
      "Preheat oven to 180°C.",
      "Squeeze excess liquid from cassava.",
      "Mix cassava, coconut milk, sugar, eggs, vanilla, and salt.",
      "Pour into a greased baking dish.",
      "Bake for 45-50 minutes.",
      "Cool completely.",
      "Cut into squares.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Manioke is a Tongan cassava pudding.",
      "It's a staple dessert across the Pacific.",
      "The coconut milk is essential.",
      "Serve with fresh fruit.",
      "A comforting island dish."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Tongan classic pudding",
    better_than_store_bought: "Freshly made manoke is the best.",
    hidden_nutrients: "Cassava provides carbohydrates. Coconut offers healthy fats.",
  },
  {
    id: 266,
    name: "Bwabwai (Kiribati Coconut Dessert)",
    slug: "bwabwai_kiribati_coconut_dessert",
    country: "Kiribati",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour (plus fermentation)",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["2 young coconuts", "200g sugar", "Pinch of salt", "Pandan leaves (optional)"]
    },
    steps: [
      "Crack coconuts and scrape the meat.",
      "Grate the coconut meat finely.",
      "Mix coconut, sugar, and salt.",
      "Let ferment for 1-2 days (traditional method).",
      "Alternatively, cook immediately.",
      "Cook over low heat until thick.",
      "Pour into a dish.",
      "Chill and serve."
    ],
    making_tips: [
      "Bwabwai is a traditional Kiribati coconut dessert.",
      "The fermentation gives it a unique flavor.",
      "The fresh method is quicker and sweeter.",
      "This is a labor of love in Kiribati.",
      "Serve cold."
    ],
    health_rating: 35,
    cultural_authenticity: "100% – Kiribati tradition",
    better_than_store_bought: "This is a traditional island dessert made fresh.",
    hidden_nutrients: "Coconut provides healthy fats and fiber.",
  },
  {
    id: 267,
    name: "Pandanus Drink (Kiribati)",
    slug: "pandanus_drink_kiribati",
    country: "Kiribati",
    continent: "Oceania",
    category: "Beverage",
    time: "30 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["100g pandanus leaves (or pandanus paste)", "1 litre water", "100g sugar", "1 lime"]
    },
    steps: [
      "If using leaves, bruise and boil in water for 20 minutes.",
      "Strain the liquid.",
      "Add sugar and lime juice.",
      "Stir to dissolve.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    making_tips: [
      "Pandanus gives a distinctive island flavor.",
      "The drink is sweet and fragrant.",
      "Pandanus is a staple flavor across the Pacific.",
      "Serve ice-cold.",
      "A refreshing island drink."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Kiribati flavor",
    better_than_store_bought: "Fresh pandanus drink is a unique island experience.",
    hidden_nutrients: "Pandanus provides trace nutrients. Lime offers vitamin C.",
  },
  {
    id: 268,
    name: "Rukau (Cook Islands Taro Leaves)",
    slug: "rukau_cook_islands_taro_leaves",
    country: "Cook Islands",
    continent: "Oceania",
    category: "Snack",
    time: "1 hour",
    servings: "6 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g taro leaves, washed", "400ml coconut milk", "100g sugar", "1 onion, chopped (optional sweet version)"]
    },
    steps: [
      "Remove stems from taro leaves.",
      "Layer leaves in a pot.",
      "Add coconut milk and sugar.",
      "Cover and cook over low heat for 30-40 minutes.",
      "The leaves will wilt and cook down.",
      "Serve warm."
    ],
    making_tips: [
      "Rukau is a traditional Cook Islands dish.",
      "Taro leaves are the main ingredient.",
      "This sweet version is a dessert.",
      "Coconut milk is essential.",
      "Serve with breadfruit or rice."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Cook Islands tradition",
    better_than_store_bought: "This traditional dish is best homemade.",
    hidden_nutrients: "Taro leaves provide iron and calcium. Coconut offers healthy fats.",
  },
  {
    id: 269,
    name: "Poke (Cook Islands Coconut Pudding)",
    slug: "poke_cook_islands_coconut_pudding",
    country: "Cook Islands",
    continent: "Oceania",
    category: "Snack",
    time: "45 minutes",
    servings: "6 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["400ml coconut cream", "200g sugar", "50g cornstarch", "1 tsp vanilla", "Fresh fruit (banana, pawpaw, or pineapple)"]
    },
    steps: [
      "Dissolve cornstarch in a little water.",
      "In a pot, combine coconut cream, sugar, and salt.",
      "Add cornstarch and cook over medium heat.",
      "Stir constantly until thick and glossy.",
      "Add vanilla.",
      "Pour into a dish.",
      "Chill until set.",
      "Top with fresh fruit.",
      "Serve cold."
    ],
    making_tips: [
      "Poke is a Cook Islands coconut pudding.",
      "It's similar to other Pacific puddings.",
      "Fresh fruit is essential on top.",
      "The texture should be silky and set.",
      "A simple and satisfying dessert."
    ],
    health_rating: 30,
    cultural_authenticity: "100% – Cook Islands favorite",
    better_than_store_bought: "Freshly made poke with tropical fruit is unbeatable.",
    hidden_nutrients: "Coconut cream provides healthy fats. Fresh fruit adds vitamins.",
  },
  {
    id: 270,
    name: "Tropical Fruit Punch (Cook Islands)",
    slug: "tropical_fruit_punch_cook_islands",
    country: "Cook Islands",
    continent: "Oceania",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["2 passionfruits", "1 pineapple, peeled and chopped", "2 oranges", "100g sugar", "500ml soda water", "Ice cubes"]
    },
    steps: [
      "Juice oranges and passionfruit.",
      "Blend pineapple with a little water and strain.",
      "Combine all juices and sugar.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "Serve over ice.",
      "Top with soda water.",
      "Garnish with fruit slices."
    ],
    making_tips: [
      "This is the Cook Islands tropical punch.",
      "Passionfruit gives it signature island flavor.",
      "The pineapple should be sweet and ripe.",
      "Serve ice-cold.",
      "A refreshing taste of the Pacific."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Island hospitality",
    better_than_store_bought: "Homemade punch uses real tropical fruit, not syrup.",
    hidden_nutrients: "Passionfruit and pineapple provide vitamin C. Oranges add additional vitamin C.",
  },
  {
    id: 187,
    name: "Brigadeiro",
    slug: "brigadeiro",
    country: "Brazil",
    continent: "South America",
    category: "Snack",
    time: "30 minutes (plus chilling)",
    servings: "20 pieces",
    difficulty: "Easy",
    ingredients: {
      "Main": ["1 can (395g) sweetened condensed milk", "4 tbsp unsweetened cocoa powder", "2 tbsp unsalted butter", "Chocolate sprinkles for coating"]
    },
    steps: [
      "Combine condensed milk, cocoa powder, and butter in a heavy-bottomed pan.",
      "Cook over medium heat, stirring constantly with a spatula.",
      "Continue stirring until the mixture thickens and begins to pull away from the pan (10-12 minutes).",
      "The mixture is ready when you can see the bottom of the pan for a few seconds when scraping.",
      "Pour the brigadeiro mixture onto a greased plate.",
      "Let cool completely (about 30 minutes).",
      "Butter your hands and roll the mixture into small balls.",
      "Roll each ball in chocolate sprinkles.",
      "Place in mini paper cups.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Stir constantly to prevent burning—this is the most important rule.",
      "The mixture should be thick enough to hold its shape when cooled.",
      "Use high-quality cocoa powder for the richest flavor.",
      "Chilling the mixture makes it easier to roll.",
      "Brigadeiro is Brazil's favorite birthday party treat."
    ],
    health_rating: 15,
    cultural_authenticity: "100% – Brazil's national sweet",
    better_than_store_bought: "Commercial brigadeiros have preservatives. Homemade are rich, fudgy, and fresh.",
    hidden_nutrients: "Cocoa provides antioxidants. Condensed milk offers calcium.",
  },
  {
    id: 188,
    name: "Pão de Queijo (Cheese Bread)",
    slug: "po_de_queijo_cheese_bread",
    country: "Brazil",
    continent: "South America",
    category: "Snack",
    time: "45 minutes",
    servings: "20 small rolls",
    difficulty: "Medium",
    ingredients: {
      "Main": ["500g tapioca flour (sweet or sour)", "240ml milk", "120ml vegetable oil", "1 tsp salt", "2 large eggs", "300g grated Parmesan cheese"]
    },
    steps: [
      "Preheat oven to 190°C.",
      "In a saucepan, heat milk, oil, and salt until just boiling.",
      "Pour the hot liquid over tapioca flour in a mixing bowl.",
      "Mix with a spoon until incorporated. Let cool slightly.",
      "Add eggs one at a time, mixing well after each.",
      "Add cheese and mix until a smooth dough forms.",
      "Roll the dough into small balls (about 2-3cm diameter).",
      "Place on a baking sheet lined with parchment paper.",
      "Bake for 20-25 minutes until puffed and golden.",
      "Serve warm."
    ],
    making_tips: [
      "Tapioca flour is essential—this is the authentic Brazilian ingredient.",
      "The dough should be soft but not sticky.",
      "Pão de queijo is naturally gluten-free.",
      "These are best eaten warm, straight from the oven.",
      "They can be frozen unbaked and cooked directly from frozen."
    ],
    health_rating: 50,
    cultural_authenticity: "100% – Brazil's iconic snack",
    better_than_store_bought: "Commercial versions have additives. Homemade are fresh, cheesy, and puffy.",
    hidden_nutrients: "Parmesan provides calcium and protein. Eggs add protein.",
  },
  {
    id: 189,
    name: "Quindim",
    slug: "quindim",
    country: "Brazil",
    continent: "South America",
    category: "Snack",
    time: "1 hour (plus chilling)",
    servings: "12 small tarts",
    difficulty: "Medium",
    ingredients: {
      "Main": ["6 egg yolks", "200g sugar", "100g desiccated coconut", "2 tbsp unsalted butter, melted", "1 tbsp water"]
    },
    steps: [
      "Preheat oven to 170°C. Butter small tart molds.",
      "In a blender, combine egg yolks, sugar, coconut, butter, and water.",
      "Blend until smooth.",
      "Pour the mixture into the prepared molds, filling ¾ full.",
      "Place molds in a baking dish with hot water (water bath).",
      "Bake for 20-25 minutes until set and golden on top.",
      "Let cool in the molds, then refrigerate.",
      "Unmold carefully.",
      "Serve chilled."
    ],
    making_tips: [
      "Quindim is an Afro-Brazilian coconut custard.",
      "The water bath ensures even cooking.",
      "The tops should be golden and slightly caramelized.",
      "These are small, individual custard tarts.",
      "The texture should be smooth and creamy."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Brazilian coconut classic",
    better_than_store_bought: "Bakery versions can be dry. Homemade is creamy and coconutty.",
    hidden_nutrients: "Coconut provides healthy fats. Egg yolks offer choline and vitamin D.",
  },
  {
    id: 190,
    name: "Romeu e Julieta",
    slug: "romeu_e_julieta",
    country: "Brazil",
    continent: "South America",
    category: "Snack",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["200g guava paste (goiabada)", "200g firm white cheese (Minas, queso fresco, or mozzarella)"]
    },
    steps: [
      "Cut guava paste into thick slices.",
      "Cut cheese into similarly thick slices.",
      "Arrange guava and cheese slices alternately on a plate.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Romeu e Julieta is named after Shakespeare's lovers.",
      "The sweet and savory combination is a Brazilian classic.",
      "Guava paste and cheese are also often eaten as a dessert.",
      "The cheese should be mild and firm.",
      "This can be served as a snack or dessert."
    ],
    health_rating: 35,
    cultural_authenticity: "100% – Brazilian classic pairing",
    better_than_store_bought: "This simple dish is best made with high-quality artisanal cheese and guava paste.",
    hidden_nutrients: "Guava provides vitamin C and fiber. Cheese offers calcium.",
  },
  {
    id: 191,
    name: "Beijinho (Coconut Candy)",
    slug: "beijinho_coconut_candy",
    country: "Brazil",
    continent: "South America",
    category: "Snack",
    time: "30 minutes (plus chilling)",
    servings: "20 pieces",
    difficulty: "Easy",
    ingredients: {
      "Main": ["1 can (395g) sweetened condensed milk", "100g desiccated coconut", "2 tbsp unsalted butter", "Desiccated coconut for coating"]
    },
    steps: [
      "Combine condensed milk, coconut, and butter in a heavy-bottomed pan.",
      "Cook over medium heat, stirring constantly.",
      "Continue until the mixture thickens and pulls away from the pan (10-12 minutes).",
      "Pour onto a greased plate and let cool.",
      "Butter your hands and roll into small balls.",
      "Roll each ball in desiccated coconut.",
      "Place in mini paper cups.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Beijinho means 'little kiss' in Portuguese.",
      "This is the coconut version of brigadeiro.",
      "Stir constantly to prevent burning.",
      "The mixture should be thick enough to roll when cool.",
      "A classic Brazilian party treat."
    ],
    health_rating: 15,
    cultural_authenticity: "100% – Brazilian coconut candy",
    better_than_store_bought: "Commercial beijinho has preservatives. Homemade is fresher and more coconutty.",
    hidden_nutrients: "Coconut provides healthy fats and fiber.",
  },
  {
    id: 192,
    name: "Guaraná (Soda)",
    slug: "guaran_soda",
    country: "Brazil",
    continent: "South America",
    category: "Beverage",
    time: "30 minutes (plus chilling)",
    servings: "4 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["2 tbsp guaraná powder", "1 litre water", "150g sugar", "Soda water (for carbonation)", "Ice cubes"]
    },
    steps: [
      "In a small pot, combine guaraná powder, water, and sugar.",
      "Heat until sugar dissolves. Simmer for 5 minutes.",
      "Strain to remove any solids.",
      "Let the syrup cool completely.",
      "To serve, mix 1 part syrup with 3 parts soda water.",
      "Serve over ice."
    ],
    making_tips: [
      "Guaraná is an Amazonian berry with high caffeine content.",
      "This is Brazil's favorite soda flavor.",
      "The syrup can be made ahead and stored in the refrigerator.",
      "Guaraná powder is available in health food stores.",
      "Adjust sweetness to taste."
    ],
    health_rating: 30,
    cultural_authenticity: "100% – Brazil's national soda",
    better_than_store_bought: "Commercial guaraná has artificial flavors. Homemade uses real guaraná powder.",
    hidden_nutrients: "Guaraná provides caffeine and antioxidants.",
  },
  {
    id: 193,
    name: "Caldo de Cana (Sugarcane Juice)",
    slug: "caldo_de_cana_sugarcane_juice",
    country: "Brazil",
    continent: "South America",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["4-5 sugarcane stalks", "2 limes", "Ice cubes"]
    },
    steps: [
      "Peel and clean sugarcane stalks.",
      "Juice using a sugarcane press or heavy-duty juicer.",
      "Strain the juice.",
      "Add fresh lime juice.",
      "Stir well.",
      "Serve over ice."
    ],
    making_tips: [
      "Caldo de cana is Brazil's street drink.",
      "It's extremely sweet—lime balances it perfectly.",
      "Often sold by street vendors in Brazil.",
      "Serve ice-cold.",
      "Can be mixed with lemon or pineapple juice."
    ],
    health_rating: 35,
    cultural_authenticity: "100% – Brazilian street drink",
    better_than_store_bought: "Bottled versions have preservatives. Fresh is incomparable.",
    hidden_nutrients: "Sugarcane provides trace minerals and electrolytes.",
  },
  {
    id: 194,
    name: "Alfajores (Argentine)",
    slug: "alfajores_argentine",
    country: "Argentina",
    continent: "South America",
    category: "Snack",
    time: "1 hour 15 minutes (plus chilling)",
    servings: "15 sandwiches",
    difficulty: "Medium",
    ingredients: {
      "Cookies": ["250g all-purpose flour", "100g cornstarch", "100g unsalted butter, softened", "100g powdered sugar", "3 egg yolks", "1 tsp vanilla"],
      "Filling": ["400g dulce de leche"],
      "Coating": ["200g dark chocolate (optional)", "Desiccated coconut (optional)"]
    },
    steps: [
      "Preheat oven to 170°C.",
      "Mix flour and cornstarch. Set aside.",
      "Beat butter and sugar until fluffy. Add egg yolks and vanilla.",
      "Gradually add flour mixture. Mix until dough forms.",
      "Chill dough for 30 minutes.",
      "Roll dough to 5mm thickness. Cut into rounds.",
      "Place on baking sheet and bake for 12-15 minutes until lightly golden.",
      "Cool completely.",
      "Spread dulce de leche on one cookie and top with another.",
      "Optional: Dip in melted chocolate or roll in coconut."
    ],
    making_tips: [
      "Cornstarch gives alfajores their signature crumbly texture.",
      "The dulce de leche should be thick and smooth.",
      "This is Argentina's national sweet.",
      "Alfajores can be coated in chocolate, coconut, or powdered sugar.",
      "They taste better the next day after the flavors meld."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Argentina's favorite treat",
    better_than_store_bought: "Commercial alfajores have preservatives. Homemade are crumbly and rich.",
    hidden_nutrients: "Egg yolks provide protein. Dulce de leche offers calcium.",
  },
  {
    id: 195,
    name: "Facturas (Sweet Pastries)",
    slug: "facturas_sweet_pastries",
    country: "Argentina",
    continent: "South America",
    category: "Snack",
    time: "2 hours (includes rising)",
    servings: "12 pastries",
    difficulty: "Hard",
    ingredients: {
      "Dough": ["500g bread flour", "7g instant yeast", "100g sugar", "½ tsp salt", "240ml warm milk", "2 large eggs", "80g unsalted butter, softened"],
      "Filling": ["Dulce de leche", "Pastry cream", "Quince paste"],
      "Syrup": ["150g sugar", "100ml water"]
    },
    steps: [
      "Make Dough: Mix flour, yeast, sugar, and salt. Add milk, eggs, and butter. Knead until smooth.",
      "Cover and let rise 1 hour.",
      "Punch down dough. Divide into 12 pieces.",
      "Shape each piece into various forms (croissants, medias lunas).",
      "Fill with dulce de leche or pastry cream.",
      "Let rise 30 minutes.",
      "Bake at 180°C for 18-20 minutes.",
      "Make Syrup: Boil sugar and water until slightly thickened.",
      "Brush warm pastries with syrup.",
      "Serve warm."
    ],
    making_tips: [
      "Facturas are Argentina's favorite breakfast pastries.",
      "The syrup gives them a signature glaze.",
      "Different shapes have different names.",
      "Medias lunas are the croissant-like version.",
      "Best eaten fresh."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Argentine bakery classic",
    better_than_store_bought: "Bakery versions can be day-old. Homemade are fresh and warm.",
    hidden_nutrients: "Eggs and milk provide protein. The pastries are a treat.",
  },
  {
    id: 196,
    name: "Argentine Limonada",
    slug: "argentine_limonada",
    country: "Argentina",
    continent: "South America",
    category: "Beverage",
    time: "10 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 lemons", "1 litre water", "100g sugar", "Fresh mint", "Ice cubes"]
    },
    steps: [
      "Juice lemons to get fresh lemon juice.",
      "In a pitcher, combine lemon juice, water, and sugar.",
      "Add fresh mint leaves.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "Serve over ice with mint sprigs."
    ],
    making_tips: [
      "Argentine limonada is simple and refreshing.",
      "Mint gives it a bright, fresh flavor.",
      "This is Argentina's lemonade.",
      "Adjust sweetness to taste.",
      "Serve ice-cold."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Argentine classic lemonade",
    better_than_store_bought: "Bottled lemonade has preservatives. Homemade is fresh and minty.",
    hidden_nutrients: "Lemons provide vitamin C. Mint aids digestion.",
  },
  {
    id: 197,
    name: "Suspiro Limeño",
    slug: "suspiro_limeo",
    country: "Peru",
    continent: "South America",
    category: "Snack",
    time: "1 hour",
    servings: "6 servings",
    difficulty: "Medium-Hard",
    ingredients: {
      "Base": ["1 can (395g) sweetened condensed milk", "1 can (350ml) evaporated milk", "4 egg yolks", "1 tbsp cornstarch", "1 tsp vanilla"],
      "Meringue": ["4 egg whites", "150g sugar", "1 tbsp port wine or sherry (optional)"]
    },
    steps: [
      "Make Base: In a heavy pot, combine condensed milk, evaporated milk, and cornstarch.",
      "Cook over medium heat, stirring constantly.",
      "Add egg yolks and whisk vigorously.",
      "Continue cooking until thick and creamy (about 10 minutes).",
      "Add vanilla. Pour into serving bowls and cool.",
      "Make Meringue: Beat egg whites until foamy.",
      "Gradually add sugar, beating to stiff peaks.",
      "Fold in port wine if using.",
      "Top each bowl with meringue.",
      "Lightly torch the meringue.",
      "Serve chilled."
    ],
    making_tips: [
      "Suspiro Limeño means 'Lima's sigh' in Spanish.",
      "This is Peru's most famous dessert.",
      "The base should be silky and creamy.",
      "The meringue should be light and fluffy.",
      "Serve in individual glass bowls."
    ],
    health_rating: 15,
    cultural_authenticity: "100% – Peru's most famous dessert",
    better_than_store_bought: "This is a delicate dessert that is best made fresh at home.",
    hidden_nutrients: "Eggs provide protein. Milk adds calcium.",
  },
  {
    id: 198,
    name: "Mazamorra Morada",
    slug: "mazamorra_morada",
    country: "Peru",
    continent: "South America",
    category: "Snack",
    time: "1 hour 15 minutes",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["500g purple corn", "1.5 litres water", "200g sugar", "2 cinnamon sticks", "4 cloves", "Apple chunks", "Pineapple chunks", "Dried fruits", "Cornstarch for thickening"]
    },
    steps: [
      "Boil purple corn in water with cinnamon and cloves for 1 hour.",
      "Strain the liquid. Discard corn.",
      "Return liquid to the pot. Add sugar.",
      "Add apple and pineapple chunks.",
      "Mix cornstarch with a little water. Add to the pot.",
      "Cook until thickened (5-10 minutes).",
      "Add dried fruits.",
      "Pour into bowls and cool.",
      "Serve warm or chilled."
    ],
    making_tips: [
      "Mazamorra morada is made from purple corn—a Peruvian staple.",
      "The color should be deep purple.",
      "The fruit gives it a wonderful texture.",
      "Often served with rice pudding.",
      "This is a Peruvian comfort dessert."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – Peruvian purple corn classic",
    better_than_store_bought: "Canned versions can't compare. Homemade has fresh fruit and authentic color.",
    hidden_nutrients: "Purple corn provides antioxidants. Fruit adds vitamins.",
  },
  {
    id: 199,
    name: "Picarones",
    slug: "picarones",
    country: "Peru",
    continent: "South America",
    category: "Snack",
    time: "1 hour 30 minutes (includes rising)",
    servings: "15 pieces",
    difficulty: "Hard",
    ingredients: {
      "Dough": ["250g sweet potato, boiled and mashed", "150g squash (zapallo), boiled and mashed", "300g all-purpose flour", "7g instant yeast", "100g sugar", "½ tsp salt", "1 tsp aniseed"],
      "Syrup": ["200g sugar", "200ml water", "1 cinnamon stick", "Orange peel"],
      "Frying": ["Vegetable oil"]
    },
    steps: [
      "Mix mashed sweet potato and squash with flour, yeast, sugar, salt, and aniseed.",
      "Knead into a soft dough. Let rise 1 hour.",
      "Make Syrup: Boil sugar, water, cinnamon, and orange peel for 15 minutes.",
      "Punch down dough. Roll into a long rope.",
      "Form ring shapes (like doughnuts).",
      "Heat oil to 170°C.",
      "Fry picarones until golden.",
      "Drain on paper towels.",
      "Drench in syrup.",
      "Serve warm."
    ],
    making_tips: [
      "Picarones are Peru's signature doughnuts.",
      "The sweet potato and squash make them unique.",
      "Aniseed gives them a distinct flavor.",
      "They are traditionally served at festivals.",
      "Best served fresh and warm."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Peruvian festival favorite",
    better_than_store_bought: "Street versions can be greasy. Homemade are lighter and fresher.",
    hidden_nutrients: "Sweet potato provides vitamin A and fiber.",
  },
  {
    id: 200,
    name: "Chicha Morada (Purple Corn Drink)",
    slug: "chicha_morada_purple_corn_drink",
    country: "Peru",
    continent: "South America",
    category: "Beverage",
    time: "1 hour (plus chilling)",
    servings: "4 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g purple corn", "1.5 litres water", "150g sugar", "2 cinnamon sticks", "4 cloves", "Pineapple peel", "Lime juice"]
    },
    steps: [
      "Combine purple corn, water, cinnamon, cloves, and pineapple peel in a pot.",
      "Boil for 45 minutes.",
      "Strain the liquid.",
      "Add sugar and lime juice.",
      "Stir until sugar dissolves.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    making_tips: [
      "Chicha morada is Peru's national drink.",
      "The color is a stunning deep purple.",
      "This is a non-alcoholic drink.",
      "Can be served with apple chunks.",
      "A refreshing and healthy drink."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – Peru's national drink",
    better_than_store_bought: "Bottled versions have preservatives. Homemade is vibrant and authentic.",
    hidden_nutrients: "Purple corn provides antioxidants. Pineapple adds vitamin C.",
  },
  {
    id: 201,
    name: "Bocadillo con Queso (Colombian)",
    slug: "bocadillo_con_queso_colombian",
    country: "Colombia",
    continent: "South America",
    category: "Snack",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["200g guava paste (bocadillo)", "200g white cheese (queso fresco or farmers cheese)"]
    },
    steps: [
      "Cut guava paste into thick slices.",
      "Cut cheese into similarly thick slices.",
      "Arrange guava and cheese slices on a plate.",
      "Serve at room temperature."
    ],
    making_tips: [
      "Bocadillo con queso is Colombia's favorite snack.",
      "The sweet and salty combination is addictive.",
      "This is a classic Colombian 'merienda.'",
      "The guava paste should be soft enough to cut.",
      "Simple, delicious, and satisfying."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Colombian classic snack",
    better_than_store_bought: "Quality ingredients are key—artisanal guava paste and fresh cheese make all the difference.",
    hidden_nutrients: "Guava provides vitamin C and fiber. Cheese offers calcium.",
  },
  {
    id: 202,
    name: "Natilla (Colombian)",
    slug: "natilla_colombian",
    country: "Colombia",
    continent: "South America",
    category: "Snack",
    time: "1 hour (plus chilling)",
    servings: "6 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500ml milk", "100g cornstarch", "200g panela (or brown sugar)", "1 cinnamon stick", "1 tsp aniseed", "Orange peel"]
    },
    steps: [
      "Dissolve cornstarch in a little cold milk.",
      "In a pot, combine remaining milk, panela, cinnamon, aniseed, and orange peel.",
      "Heat until sugar dissolves.",
      "Strain to remove solids.",
      "Return to pot. Add cornstarch mixture.",
      "Cook over medium heat, stirring constantly.",
      "Continue until thick and creamy.",
      "Pour into a mold.",
      "Chill for 2 hours.",
      "Unmold and slice."
    ],
    making_tips: [
      "Natilla is a Colombian Christmas dessert.",
      "Panela (raw cane sugar) gives it the authentic flavor.",
      "It should be thick enough to slice.",
      "Often served with 'buñuelos' during holidays.",
      "A comforting, nostalgic dessert."
    ],
    health_rating: 30,
    cultural_authenticity: "100% – Colombian Christmas tradition",
    better_than_store_bought: "Commercial natilla has additives. Homemade is smooth and spiced.",
    hidden_nutrients: "Milk provides calcium. Panela offers trace minerals.",
  },
  {
    id: 203,
    name: "Lulada (Lulo Drink)",
    slug: "lulada_lulo_drink",
    country: "Colombia",
    continent: "South America",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 ripe lulo fruits", "1 litre water", "100g sugar", "Lime juice", "Ice cubes"]
    },
    steps: [
      "Peel and chop lulo fruits.",
      "Blend lulo with 500ml water until smooth.",
      "Strain to remove seeds and pulp.",
      "Add remaining water, sugar, and lime juice.",
      "Stir to dissolve sugar.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    making_tips: [
      "Lulo is a Colombian fruit with a sweet-sour flavor.",
      "This is a popular Colombian refresher.",
      "Adjust sweetness to taste.",
      "The drink is vibrant and refreshing.",
      "Serve ice-cold."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – Colombian fruit drink",
    better_than_store_bought: "Bottled lulo juice has preservatives. Homemade is fresh and fruity.",
    hidden_nutrients: "Lulo provides vitamin C and antioxidants.",
  },
  {
    id: 204,
    name: "Bienmesabe (Venezuelan)",
    slug: "bienmesabe_venezuelan",
    country: "Venezuela",
    continent: "South America",
    category: "Snack",
    time: "45 minutes",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["400ml coconut milk", "400ml sweetened condensed milk", "4 egg yolks", "1 tsp vanilla", "½ tsp salt", "100g desiccated coconut", "Caramel sauce for serving"]
    },
    steps: [
      "Combine coconut milk, condensed milk, egg yolks, vanilla, and salt in a pot.",
      "Cook over medium heat, stirring constantly.",
      "Continue until mixture thickens (10-12 minutes).",
      "Remove from heat. Stir in desiccated coconut.",
      "Pour into individual bowls.",
      "Top with caramel sauce.",
      "Serve warm or chilled."
    ],
    making_tips: [
      "Bienmesabe means 'it tastes good to me' in Spanish.",
      "This is a Venezuelan coconut dessert.",
      "Stir constantly to prevent curdling.",
      "The texture should be creamy and thick.",
      "Serve with extra caramel sauce."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Venezuelan coconut classic",
    better_than_store_bought: "This is a traditional home dessert, best made from scratch.",
    hidden_nutrients: "Coconut provides healthy fats. Egg yolks offer choline.",
  },
  {
    id: 205,
    name: "Papelon con Limón",
    slug: "papelon_con_limn",
    country: "Venezuela",
    continent: "South America",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["200g panela (paperón)", "1 litre water", "4 limes", "Ice cubes"]
    },
    steps: [
      "Grate or chop panela.",
      "In a pot, dissolve panela in 500ml hot water.",
      "Let cool completely.",
      "Juice limes.",
      "Combine panela water, lime juice, and remaining water.",
      "Stir well.",
      "Chill thoroughly.",
      "Serve over ice."
    ],
    making_tips: [
      "Papelón con limón is Venezuela's national drink.",
      "Panela is raw, unrefined cane sugar.",
      "It's sweet and refreshing.",
      "Adjust lime to balance the sweetness.",
      "Serve ice-cold."
    ],
    health_rating: 40,
    cultural_authenticity: "100% – Venezuela's national drink",
    better_than_store_bought: "Bottled versions can't match the fresh taste of homemade papelón.",
    hidden_nutrients: "Panela provides trace minerals. Limes offer vitamin C.",
  },
  {
    id: 206,
    name: "Empanadas de Dulce (Chilean)",
    slug: "empanadas_de_dulce_chilean",
    country: "Chile",
    continent: "South America",
    category: "Snack",
    time: "1 hour 30 minutes",
    servings: "12 empanadas",
    difficulty: "Medium",
    ingredients: {
      "Dough": ["400g all-purpose flour", "100g vegetable shortening", "1 tsp salt", "150ml warm water"],
      "Filling": ["200g quince paste (dulce de membrillo)", "200g manjar (dulce de leche)", "Powdered sugar for dusting"],
      "Frying": ["Vegetable oil"]
    },
    steps: [
      "Make Dough: Mix flour and salt. Cut in shortening until crumbly.",
      "Add water gradually, kneading into smooth dough. Rest 30 minutes.",
      "Roll dough to 3mm thickness. Cut into rounds.",
      "Place filling (quince paste or manjar) in the center.",
      "Fold and seal edges with a fork.",
      "Heat oil to 170°C.",
      "Fry empanadas until golden and crisp.",
      "Drain on paper towels.",
      "Dust with powdered sugar.",
      "Serve warm."
    ],
    making_tips: [
      "Empanadas de dulce are a Chilean favorite.",
      "Quince paste and manjar are the classic fillings.",
      "The dough should be tender and flaky.",
      "These are often eaten during national holidays.",
      "Best served fresh and warm."
    ],
    health_rating: 20,
    cultural_authenticity: "100% – Chilean sweet empanada",
    better_than_store_bought: "Bakery versions can be dry. Homemade are fresh and filled generously.",
    hidden_nutrients: "Quince paste provides fiber. The empanadas are a treat.",
  },
  {
    id: 207,
    name: "Mote con Huesillo",
    slug: "mote_con_huesillo",
    country: "Chile",
    continent: "South America",
    category: "Beverage",
    time: "2 hours (plus soaking)",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["300g dried peaches (huesillos)", "200g cooked wheat (mote)", "1.5 litres water", "200g sugar", "2 cinnamon sticks"]
    },
    steps: [
      "Soak dried peaches in water overnight.",
      "In a pot, combine peaches, soaking water, sugar, and cinnamon.",
      "Cook for 1 hour until peaches are soft and syrup is thick.",
      "Cook mote according to package instructions.",
      "To serve, place a spoonful of mote in a glass.",
      "Add a peach and fill with the sweet syrup.",
      "Serve warm or at room temperature."
    ],
    making_tips: [
      "Mote con huesillo is Chile's national drink.",
      "It's a thick drink, almost a dessert.",
      "Huesillos are dried peaches—they reconstitute in syrup.",
      "Mote is cooked wheat—it's chewy and filling.",
      "A traditional Chilean summer favorite."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – Chile's national drink",
    better_than_store_bought: "Canned versions can't match homemade. Fresh mote and tender peaches are best.",
    hidden_nutrients: "Peaches provide vitamin A. Wheat offers fiber.",
  },
  {
    id: 208,
    name: "Colada Morada (Ecuadorian)",
    slug: "colada_morada_ecuadorian",
    country: "Ecuador",
    continent: "South America",
    category: "Beverage",
    time: "1 hour 15 minutes",
    servings: "6 servings",
    difficulty: "Medium",
    ingredients: {
      "Main": ["500g purple corn", "1.5 litres water", "200g sugar", "2 cinnamon sticks", "4 cloves", "Pineapple chunks", "Strawberries", "Blueberries", "Blackberries", "Cornstarch for thickening"]
    },
    steps: [
      "Boil purple corn with water, cinnamon, and cloves for 1 hour.",
      "Strain the liquid. Discard corn.",
      "Return liquid to the pot. Add sugar.",
      "Add pineapple chunks and berries.",
      "Mix cornstarch with water. Add to the pot.",
      "Cook until thickened (5-10 minutes).",
      "Serve warm in bowls.",
      "Traditionally served with bread."
    ],
    making_tips: [
      "Colada morada is a traditional Ecuadorian drink for Day of the Dead.",
      "It's thick and fruity—almost a dessert.",
      "The color is a rich deep purple.",
      "Full of berries and fruit.",
      "Served warm with 'guaguas de pan' (bread babies)."
    ],
    health_rating: 55,
    cultural_authenticity: "100% – Ecuadorian Day of the Dead tradition",
    better_than_store_bought: "This is a traditional drink made fresh for the celebration.",
    hidden_nutrients: "Purple corn and berries provide antioxidants. Fruit adds vitamins.",
  },
  {
    id: 209,
    name: "Cocadas (Bolivian)",
    slug: "cocadas_bolivian",
    country: "Bolivia",
    continent: "South America",
    category: "Snack",
    time: "30 minutes",
    servings: "15 pieces",
    difficulty: "Easy",
    ingredients: {
      "Main": ["300g desiccated coconut", "1 can (395g) sweetened condensed milk", "1 tsp vanilla", "2 egg whites (optional)"]
    },
    steps: [
      "Preheat oven to 160°C.",
      "In a bowl, combine coconut, condensed milk, and vanilla.",
      "If using, beat egg whites and fold in.",
      "Drop spoonfuls of the mixture onto a lined baking sheet.",
      "Bake for 15-20 minutes until golden.",
      "Let cool completely.",
      "Serve as cookies."
    ],
    making_tips: [
      "Cocadas are popular across South America.",
      "This is the Bolivian version—simple and coconutty.",
      "They should be chewy and golden.",
      "Can be made without egg whites for a denser texture.",
      "Store in an airtight container."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Bolivian coconut cookie",
    better_than_store_bought: "Commercial cocadas have additives. Homemade are simple and fresh.",
    hidden_nutrients: "Coconut provides healthy fats and fiber.",
  },
  {
    id: 210,
    name: "Api (Bolivian Purple Corn Drink)",
    slug: "api_bolivian_purple_corn_drink",
    country: "Bolivia",
    continent: "South America",
    category: "Beverage",
    time: "1 hour 15 minutes",
    servings: "4 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["500g purple corn flour (or dried purple corn)", "1.5 litres water", "150g sugar", "2 cinnamon sticks", "Ground cinnamon for garnish"]
    },
    steps: [
      "Boil purple corn in water with cinnamon for 1 hour.",
      "Strain the liquid.",
      "Add sugar to the liquid and stir to dissolve.",
      "Return to low heat and simmer until thickened.",
      "Serve warm in cups.",
      "Sprinkle with ground cinnamon."
    ],
    making_tips: [
      "Api is a traditional Bolivian breakfast drink.",
      "It's thick, warm, and comforting.",
      "Often served with 'pasteles' (pastries).",
      "The purple color is from the corn.",
      "A favorite in the Andes."
    ],
    health_rating: 50,
    cultural_authenticity: "100% – Bolivian Andean tradition",
    better_than_store_bought: "This is a traditional Andean drink, best made fresh.",
    hidden_nutrients: "Purple corn provides antioxidants. Cinnamon aids blood sugar regulation.",
  },
  {
    id: 211,
    name: "Chipa Guazú (Sweet Corn Cake)",
    slug: "chipa_guaz_sweet_corn_cake",
    country: "Paraguay",
    continent: "South America",
    category: "Snack",
    time: "1 hour",
    servings: "1 cake (8 slices)",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["400g fresh corn kernels (or canned)", "200g grated cheese (Paraguayan or mozzarella)", "3 large eggs", "200ml milk", "100g cornmeal", "50g sugar", "1 tsp salt", "2 tbsp vegetable oil"]
    },
    steps: [
      "Preheat oven to 180°C.",
      "In a blender, combine corn, eggs, milk, and oil. Blend until smooth.",
      "Transfer to a bowl. Add cornmeal, cheese, sugar, and salt.",
      "Mix well.",
      "Pour into a greased baking dish.",
      "Bake for 35-40 minutes until golden and set.",
      "Let cool slightly.",
      "Cut into squares and serve warm."
    ],
    making_tips: [
      "Chipa guazú is a traditional Paraguayan cake.",
      "It's made with fresh corn and cheese.",
      "This is a sweet version—there is also a savory version.",
      "The texture is moist and pudding-like.",
      "Serve warm for the best experience."
    ],
    health_rating: 50,
    cultural_authenticity: "100% – Paraguayan classic",
    better_than_store_bought: "This traditional cake is best fresh from the oven.",
    hidden_nutrients: "Corn provides fiber and B vitamins. Cheese adds calcium and protein.",
  },
  {
    id: 212,
    name: "Mate Dulce (Sweetened Yerba Mate)",
    slug: "mate_dulce_sweetened_yerba_mate",
    country: "Uruguay",
    continent: "South America",
    category: "Beverage",
    time: "15 minutes",
    servings: "4 servings",
    difficulty: "Easy-Medium",
    ingredients: {
      "Main": ["50g yerba mate", "1 litre hot water (80°C)", "100g sugar"]
    },
    steps: [
      "Place yerba mate in a teapot or French press.",
      "Add hot water and let steep for 5 minutes.",
      "Strain to remove leaves.",
      "Add sugar and stir until dissolved.",
      "Serve warm in small cups."
    ],
    making_tips: [
      "Mate is the national drink of Argentina, Uruguay, and Paraguay.",
      "This is the sweetened version—'mate dulce.'",
      "Water should be hot but not boiling.",
      "Traditionally drunk from a gourd with a metal straw.",
      "The flavor is earthy and herbal."
    ],
    health_rating: 45,
    cultural_authenticity: "100% – River Plate tradition",
    better_than_store_bought: "Bottled mate has additives. Homemade is pure and authentic.",
    hidden_nutrients: "Yerba mate provides caffeine and antioxidants.",
  },
  {
    id: 213,
    name: "Soda Italiana (Uruguayan)",
    slug: "soda_italiana_uruguayan",
    country: "Uruguay",
    continent: "South America",
    category: "Beverage",
    time: "10 minutes",
    servings: "4 servings",
    difficulty: "Easy",
    ingredients: {
      "Main": ["4 tbsp fruit syrup (strawberry, peach, or passion fruit)", "Soda water", "Ice cubes", "Fresh fruit for garnish"]
    },
    steps: [
      "Pour fruit syrup into tall glasses.",
      "Add ice cubes.",
      "Top with soda water.",
      "Stir gently.",
      "Garnish with fresh fruit.",
      "Serve immediately."
    ],
    making_tips: [
      "Soda italiana is a popular Uruguayan drink.",
      "The name means 'Italian soda'.",
      "Use high-quality fruit syrup for the best flavor.",
      "The soda should be very cold.",
      "A refreshing and simple drink."
    ],
    health_rating: 25,
    cultural_authenticity: "100% – Uruguayan soda fountain classic",
    better_than_store_bought: "Cafe versions use syrup from bottles. Homemade can use artisanal syrup.",
    hidden_nutrients: "Fruit syrup provides trace vitamins.",
  },
  // ── Antarctica ────────────────────────────────────────────────────────────────
  {
    id: 301, slug: "sledging-biscuits",
    name: "Sledging Biscuits", country: "Antarctica", continent: "Antarctica", category: "Snack",
    time: "1 hour", servings: "24 biscuits", difficulty: "Easy",
    ingredients: { "Main": ["400g whole wheat flour (or all-purpose flour)","1 tsp salt","180ml water (approximately)","2 tbsp butter or lard (optional, for richness)"] },
    steps: ["Preheat oven to 150°C.","In a bowl, mix flour and salt.","Gradually add water while mixing until a stiff dough forms.","Knead the dough until smooth and dense (5 minutes).","Roll the dough out to about 1cm thickness.","Cut into 5x5cm squares or rectangles.","Prick each biscuit several times with a fork to prevent puffing.","Place on a baking sheet.","Bake for 45-50 minutes until hard, dry, and lightly golden.","Let cool completely.","Store in an airtight container—these will keep for months."],
    making_tips: ["Traditional sledging biscuits were unleavened and cooked twice to remove all moisture.","The biscuits should be rock-hard and very dry—this prevents spoilage.","Pricking with a fork is essential to keep them flat.","Explorers ate these with butter, cheese, or pemmican.","To serve, they were often crumbled into hoosh or softened with hot water."],
    health_rating: 50, cultural_authenticity: "100% – Antarctic exploration staple",
    better_than_store_bought: "These are survival biscuits, designed for extreme conditions—commercial crackers are softer and less durable.",
    hidden_nutrients: "Whole wheat flour provides fiber and B vitamins. The biscuits are simple, enduring energy.",
  },
  {
    id: 302, slug: "pemmican-traditional-energy-bar",
    name: "Pemmican (Traditional Energy Bar)", country: "Antarctica", continent: "Antarctica", category: "Snack",
    time: "3 hours (plus drying)", servings: "20 bars", difficulty: "Hard",
    ingredients: { "Main": ["500g lean beef or bison, thinly sliced","250g rendered beef suet (or tallow)","50g dried berries (cranberries or blueberries, optional)","Salt to taste"] },
    steps: ["Dry the meat: Place sliced meat in a dehydrator or oven at 70°C for 8-10 hours until completely dry and brittle.","Grind the dried meat into a fine powder using a food processor.","Melt the rendered suet or tallow over low heat until liquid.","In a bowl, combine the ground meat powder, melted fat, and dried berries.","Mix thoroughly until it forms a paste.","Press the mixture into a greased pan or mold.","Chill until firm.","Cut into bars.","Wrap in parchment paper.","Store in a cool, dry place—pemmican lasts for years."],
    making_tips: ["The meat must be completely dried—any moisture will cause spoilage.","Traditional pemmican uses equal parts meat and fat by weight.","This was the ultimate survival food for polar explorers.","The fat provides energy, the meat provides protein.","Pemmican was often eaten frozen or crumbled into hoosh."],
    health_rating: 40, cultural_authenticity: "100% – Polar exploration energy source",
    better_than_store_bought: "Commercial energy bars have sugar and preservatives. Pemmican is pure meat and fat—real survival food.",
    hidden_nutrients: "Meat provides complete protein and iron. Fat offers dense energy. Berries add vitamin C.",
  },
  {
    id: 303, slug: "hoosh-explorers-stew",
    name: "Hoosh (Explorer's Stew)", country: "Antarctica", continent: "Antarctica", category: "Snack",
    time: "30 minutes", servings: "4 servings", difficulty: "Easy",
    ingredients: { "Main": ["200g pemmican (or substitute with beef jerky powder + tallow)","8 sledging biscuits (or hardtack)","800ml water (melted snow)","Salt to taste"] },
    steps: ["Melt snow in a pot over a primus stove or heat source.","Bring water to a boil.","Crumble pemmican into the boiling water.","Break sledging biscuits into small pieces and add to the stew.","Stir vigorously until everything is dissolved and combined.","Season with salt.","Cook for 5-10 minutes until thickened.","Serve immediately in enamel mugs."],
    making_tips: ["Hoosh was the daily staple of Antarctic explorers.","The consistency should be thick—like a porridge or hash.","Ernest Shackleton's crew survived on this for months.","Pemmican provides fat and protein; biscuits provide carbohydrates.","Any dried meat or fat can be substituted."],
    health_rating: 55, cultural_authenticity: "100% – The quintessential explorer meal",
    better_than_store_bought: "No modern equivalent. This is living history in a bowl.",
    hidden_nutrients: "High in protein, fat, and carbohydrates—designed for extreme caloric needs in freezing conditions.",
  },
  {
    id: 304, slug: "bannock-explorers-flatbread",
    name: "Bannock (Explorer's Flatbread)", country: "Antarctica", continent: "Antarctica", category: "Snack",
    time: "45 minutes", servings: "8 pieces", difficulty: "Easy",
    ingredients: { "Main": ["300g all-purpose flour","1 tbsp baking powder","1 tsp salt","30g butter or lard","200ml water or powdered milk reconstituted"] },
    steps: ["Mix flour, baking powder, and salt in a bowl.","Rub in butter or lard until it resembles breadcrumbs.","Add water or milk gradually, mixing until a soft dough forms.","Shape into a flat round loaf or individual pieces.","For camp cooking: cook in a greased pan over low heat for 15-20 minutes per side.","For oven: bake at 190°C for 20-25 minutes until golden.","Tap the bottom—it should sound hollow.","Serve warm with butter, jam, or alongside hoosh."],
    making_tips: ["Bannock was adapted from Scottish and Indigenous traditions for polar expeditions.","The key is not overworking the dough—it should be just combined.","If using a pan, keep heat low to cook through without burning.","Add dried fruit or seeds for variation.","Bannock can also be cooked on a stick over an open fire."],
    health_rating: 55, cultural_authenticity: "95% – Polar exploration adaptation of Scottish bannock",
    better_than_store_bought: "Fresh bannock far surpasses commercial bread for camp conditions.",
    hidden_nutrients: "Flour provides carbohydrates and B vitamins. Enriched with baking powder for leavening without yeast.",
  },
  {
    id: 305, slug: "frozen-fruit-cake-explorers-cake",
    name: "Frozen Fruit Cake (Explorer's Cake)", country: "Antarctica", continent: "Antarctica", category: "Snack",
    time: "3 hours", servings: "12 slices", difficulty: "Medium",
    ingredients: { "Main": ["300g mixed dried fruit (raisins, currants, sultanas)","100g glacé cherries","150g butter","150g brown sugar","3 eggs","200g plain flour","1 tsp mixed spice","1 tsp cinnamon","50ml brandy or dark rum (optional)","100g chopped walnuts or almonds"] },
    steps: ["Soak dried fruit in brandy or rum for at least 2 hours (or overnight).","Preheat oven to 150°C. Line a cake tin with baking paper.","Cream butter and sugar until light and fluffy.","Beat in eggs one at a time.","Fold in flour and spices.","Stir in soaked fruit and nuts.","Pour into the prepared tin.","Bake for 2-2.5 hours until a skewer comes out clean.","Cool completely before serving.","Wrap tightly—this cake keeps for months and improves with age."],
    making_tips: ["Fruit cake was the ultimate expedition food—dense, calorie-rich, and preserved by alcohol.","Scott and Shackleton both brought fruit cake to Antarctica.","The cake found with Scott's 1914 expedition was still edible after 106 years.","Wrap in brandy-soaked cloth and store in a tin for maximum longevity.","Serve frozen or at room temperature—both ways are traditional."],
    health_rating: 35, cultural_authenticity: "100% – A genuine polar exploration staple",
    better_than_store_bought: "Commercial fruit cakes are often mass-produced. A homemade version is denser and more flavourful.",
    hidden_nutrients: "Dried fruit provides iron and antioxidants. Nuts provide healthy fats and protein.",
  },
  {
    id: 306, slug: "scotch-whisky-antarctic-tradition",
    name: "Scotch Whisky (Antarctic Tradition)", country: "Antarctica", continent: "Antarctica", category: "Beverage",
    time: "0 minutes (aged years)", servings: "1 dram", difficulty: "Easy",
    ingredients: { "Main": ["1 bottle single malt Scotch whisky (Mackinlay's or similar expedition-style blended malt)","Ice (optional—though in Antarctica, ice is everywhere)","A good enamel mug or whisky glass"] },
    steps: ["Pour a measure (30-50ml) of whisky into a glass or enamel mug.","If outdoors in Antarctica: simply let the ambient air chill it naturally.","Optionally add one small piece of ice.","Hold the glass and let it warm slightly in your hands.","Swirl gently to release the aromas.","Take a small sip and let it coat the tongue.","Appreciate the warmth it provides in sub-zero conditions.","Serve at the end of a long day on the ice."],
    making_tips: ["Whisky was a critical morale item on all major Antarctic expeditions.","Shackleton's whisky was rediscovered in 2007, frozen beneath the hut.","A blended malt similar to Mackinlay's Rare Old Highland was used.","In freezing temperatures, whisky doesn't freeze—it stays liquid down to around -27°C.","The ritual of sharing a dram was an important social act on expeditions."],
    health_rating: 20, cultural_authenticity: "100% – Central to Antarctic expedition culture",
    better_than_store_bought: "N/A — this is about the tradition, not the recipe.",
    hidden_nutrients: "Whisky contains antioxidants (ellagic acid) from oak aging. Moderate consumption may have cardiovascular benefits.",
  },
  {
    id: 307, slug: "gluhwein-mulled-wine",
    name: "Glühwein (Mulled Wine)", country: "Antarctica", continent: "Antarctica", category: "Beverage",
    time: "30 minutes", servings: "6 cups", difficulty: "Easy",
    ingredients: { "Main": ["750ml red wine (Merlot or Cabernet Sauvignon)","250ml orange juice","3 tbsp honey or sugar","2 cinnamon sticks","6 cloves","3 star anise","2 cardamom pods","1 orange, sliced","1 lemon, sliced"] },
    steps: ["Combine all ingredients in a large saucepan.","Heat over medium-low heat until steaming but not boiling.","Simmer for 20 minutes to infuse flavours.","Do NOT boil—this evaporates the alcohol.","Taste and adjust sweetness.","Strain out spices and fruit if desired, or leave them in.","Ladle into mugs.","Garnish with a cinnamon stick and orange slice.","Serve immediately while hot."],
    making_tips: ["Mulled wine is a universal cold-weather tradition brought to Antarctic stations by European researchers.","German, Austrian, and Swiss researchers introduced Glühwein to base camp culture.","Keeping the temperature below boiling is crucial—you want the alcohol retained.","This is a communal drink—make a large batch.","Non-alcoholic version: replace wine with grape juice and pomegranate juice."],
    health_rating: 30, cultural_authenticity: "90% – European base camp tradition in Antarctica",
    better_than_store_bought: "Commercial mulled wine concentrates lack the fresh fruit and whole spice depth.",
    hidden_nutrients: "Red wine and orange juice provide antioxidants and vitamin C.",
  }];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return ALL_RECIPES.find(r => r.slug === slug);
}

export function getRecipesByCountry(country: string): Recipe[] {
  if (country === "Germany" || country === "Austria") {
    return ALL_RECIPES.filter(r => r.country === country || r.country === "Germany/Austria");
  }
  return ALL_RECIPES.filter(r => r.country === country);
}

export function getRandomRecipeForCountry(country: string): Recipe | null {
  const recipes = getRecipesByCountry(country);
  if (!recipes.length) return null;
  return recipes[Math.floor(Math.random() * recipes.length)];
}

export const RECIPE_COUNTRIES: string[] = Array.from(
  new Set(ALL_RECIPES.flatMap(r => {
    if (r.country === "Germany/Austria") return ["Germany", "Austria"];
    if (r.country === "Australia/New Zealand") return ["Australia", "New Zealand"];
    return [r.country];
  }))
).sort();

// ISO alpha-3 codes for react-simple-maps
export const COUNTRY_ISO_MAP: Record<string, string> = {
  "Ethiopia": "ETH", "Ghana": "GHA", "Kenya": "KEN", "Morocco": "MAR",
  "Nigeria": "NGA", "Senegal": "SEN", "South Africa": "ZAF", "Tanzania": "TZA", "Uganda": "UGA",
  "China": "CHN", "India": "IND", "Indonesia": "IDN", "Japan": "JPN",
  "Malaysia": "MYS", "Philippines": "PHL", "South Korea": "KOR", "Taiwan": "TWN",
  "Thailand": "THA", "Vietnam": "VNM",
  "France": "FRA", "Germany": "DEU", "Austria": "AUT", "Greece": "GRC",
  "Italy": "ITA", "Netherlands": "NLD", "Portugal": "PRT", "Russia": "RUS",
  "Spain": "ESP", "Turkey": "TUR", "United Kingdom": "GBR",
  "Egypt": "EGY", "Iran": "IRN", "Israel": "ISR", "Jordan": "JOR",
  "Lebanon": "LBN", "Palestine": "PSE", "Qatar": "QAT", "Saudi Arabia": "SAU",
  "Syria": "SYR", "United Arab Emirates": "ARE", "Yemen": "YEM",
  "Canada": "CAN", "Costa Rica": "CRI", "Cuba": "CUB", "Dominican Republic": "DOM",
  "Jamaica": "JAM", "Mexico": "MEX", "Panama": "PAN", "Puerto Rico": "PRI",
  "Trinidad & Tobago": "TTO", "United States": "USA",
  // Oceania
  "Australia": "AUS", "New Zealand": "NZL", "Fiji": "FJI", "Samoa": "WSM",
  "Tonga": "TON", "Cook Islands": "COK", "Vanuatu": "VUT", "Solomon Islands": "SLB", "Kiribati": "KIR",
  // South America
  "Brazil": "BRA", "Argentina": "ARG", "Colombia": "COL", "Peru": "PER",
  "Chile": "CHL", "Ecuador": "ECU", "Bolivia": "BOL", "Paraguay": "PRY",
  "Uruguay": "URY", "Venezuela": "VEN",
  // Antarctica — no ISO-3 highlight (not in world topo map), dot only
  "Antarctica": "ATA",
};

// Approximate geographic centroids [longitude, latitude] for each country label
export const COUNTRY_LABEL_COORDS: Record<string, [number, number]> = {
  "Ethiopia": [40.5, 9.1], "Ghana": [-1.0, 7.9], "Kenya": [37.9, -0.0],
  "Morocco": [-7.1, 31.8], "Nigeria": [8.7, 9.1], "Senegal": [-14.5, 14.5],
  "South Africa": [25.1, -29.0], "Tanzania": [34.9, -6.4], "Uganda": [32.3, 1.4],
  "China": [104.2, 35.9], "India": [78.9, 20.6], "Indonesia": [113.9, -0.8],
  "Japan": [138.3, 36.2], "Malaysia": [109.7, 4.2], "Philippines": [121.8, 12.9],
  "South Korea": [127.8, 36.0], "Taiwan": [120.97, 23.7],
  "Thailand": [100.9, 15.9], "Vietnam": [108.3, 14.1],
  "France": [2.2, 46.2], "Germany": [10.5, 51.2], "Austria": [14.6, 47.5],
  "Greece": [21.8, 39.1], "Italy": [12.6, 42.5], "Netherlands": [5.3, 52.1],
  "Portugal": [-8.2, 39.4], "Russia": [60.0, 60.0], "Spain": [-3.7, 40.5],
  "Turkey": [35.2, 38.9], "United Kingdom": [-3.4, 55.4],
  "Egypt": [30.8, 26.8], "Iran": [53.7, 32.4], "Israel": [34.9, 31.1],
  "Jordan": [36.2, 30.6], "Lebanon": [35.9, 33.9], "Palestine": [35.3, 31.9],
  "Qatar": [51.2, 25.4], "Saudi Arabia": [45.1, 23.9], "Syria": [38.3, 34.8],
  "United Arab Emirates": [53.8, 23.4], "Yemen": [48.5, 15.6],
  "Canada": [-96.8, 56.1], "Costa Rica": [-83.8, 9.7], "Cuba": [-79.5, 22.0],
  "Dominican Republic": [-70.2, 18.7], "Jamaica": [-77.3, 18.1], "Mexico": [-102.6, 23.6],
  "Panama": [-80.8, 8.5], "Puerto Rico": [-66.6, 18.2],
  "Trinidad & Tobago": [-61.2, 10.7], "United States": [-98.6, 39.8],
  // Oceania
  "Australia": [133.8, -25.3], "New Zealand": [172.5, -41.3], "Fiji": [178.1, -17.7],
  "Samoa": [-172.1, -13.8], "Tonga": [-175.2, -21.2], "Cook Islands": [-159.8, -21.2],
  "Vanuatu": [166.9, -15.4], "Solomon Islands": [160.2, -9.6], "Kiribati": [-157.4, 1.9],
  // South America
  "Brazil": [-51.9, -14.2], "Argentina": [-63.6, -38.4], "Colombia": [-74.3, 4.6],
  "Peru": [-75.0, -9.2], "Chile": [-71.5, -35.7], "Ecuador": [-78.1, -1.8],
  "Bolivia": [-64.9, -16.3], "Paraguay": [-58.4, -23.4], "Uruguay": [-55.8, -32.5],
  "Venezuela": [-66.6, 6.4],
  // Antarctica
  "Antarctica": [0.0, -82.0],
};
