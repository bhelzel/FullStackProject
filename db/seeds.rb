# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Recipe1 = Recipe.create(
  name: "Pappardelle alla Lepre",
  ingredients: ["1 1/4lb hare or rabbit meat", "1 cup dry red wine", "2 fresh rosemary sprigs", "salt", "1/2 cup extra virgin olive oil", "1 small onion", "1 garlic clove", "1 celery stalk", "2 bay leaves", "1 tbsp juniper berries", "freshley ground pepper", "1 tbsp tomato paste", "1 3/4 cups all purpose flour", "2 eggs", "1/2 cup freshly grated Parmesan cheese"],
  directions: ["Cut the hare into pieces and place in a bowl. Add the wine and rosemary and marinate for 24 hours.", "Drain the meat, reserving the wine. Place meat in a saucepan with a little salt. Cover and cook over low heat for 10 minutes, then pour off the accumulated liquid. Add the oil, onion, garlic, celery, bay leaves, juniper berries and pepper and cook over moderate heat until onion begins to color, 10 to 15 minutes, stirring constantly.", "Pour in the wine and let it evaporate. Add the tomato paste, diluted with a little water, and simmer uncovered for about 1 1/2 hours, adding water as necesary to keep moist.", "Meanwhile, mound the flour on a work surface and make a well in the center. Break the eggs into the well and mix with your hands to form a dough. Knead until smooth and elastic. Roll out the dough thinly and cut into 1 in wide strips.", "Discard the bay leaves from the sauce. Bone the meat and chop it coarsely. Return it to the saucepan and reheat, adding more water if required to reach sauce consistency.", "Cook the pappardelle in boiling salted water until al dente. Drain and toss with the sauce. Sprinkle with Parmesan and serve."],
  recipe_type: "Pasta", region: "Tuscany", vegan: false, vegetarian: false, pescetarian: false)
Recipe1.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R1.jpg"), filename: "R1.jpg");

Recipe2 = Recipe.create(
  name: "Agnello al Finnochio",
  ingredients: ["1/3 cup extra virgin olive oil", "3lb boneless lamb, cut into serving pieces", "2lb fennel", "1/4 cup all purpose flour", "3 anchovy fillets, mashed", "1 onion, chopeed", "1/2 cup dry white wine"],
  directions: ["Heat half the oil in a large, deep skillet over low heat. Add the lamb and season with salt and pepper, Cover with a tight-fitting lid and cook for 1 hour", "Clean the fennel and chop into small chunks. Sauté the fennel with remaining oil, anchovies and onion.", "Add cardoons to the lamb. Stir in the wine and cook for a few more minutes. Salt and pepper to taste and serve"],
  recipe_type: "Meat and vegetable entrée", region: "Abruzzi",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe2.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R2.jpg"), filename: "R2.jpg");

Recipe3 = Recipe.create(
  name: "Rollè di Tacchino alla Bolognese",
  ingredients: ["2 eggs", "1/2 cup freshly grated Parmesan cheese", "3 tablespoons extra virgin olive oil", "10oz spinach, chopped", "pinch of freshly ground nutmeg", "1 slice turkey, about 3/8in thick and about 1 1/4lbs", "1 tbsp chopped fresh rosemary", "3oz thinly sliced pancetta", "1 tbsp butter", "1 cup dry white wine"],
  directions: ["Beat the eggs in a bowl with the Parmesan cheese. Sesason with salt and pepper. Pour into a cast iron skillet which has been heated with a tbsp of olive oil. Cook the omelet on both sides", "Heat another tbsp of oil in a large saucepan, add spinach and cook over low heat until wilted. Sprinkle with nutmeg and add salt to tast. Arrange the omelet, spinach, rosemary and pancetta on top of the turkey. Roll up th emeat and tie it securely enclosing the filling.", "Heat the butter and the remaining oil in a large ovenproof skillet and brown the turkey roll on all sides over high heat. Pour in half the wine and let evaporate. Transfer the turkey roll to a 350 degree oven for 1hr.", "Lift out the meat and set aside to rest. Pour the rest of the wine into the saucepan and bring to boil, scraping up browned bits. Slice the meat and pour the pan juices over the slices before serving."],
  recipe_type: "Roast", region: "Rome",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe3.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R3.jpg"), filename: "R3.jpg");

Recipe4 = Recipe.create(name: "Fritto Misto alla Fiorentina",
  ingredients: ["1/2 chicken", "1/2 rabbit", "2 small zucchini", "2 globes artichokes, leaf tips trimmed", "juice of 1 lemon", "6 zucchini flowers", "2 eggs", "1 cup all purpose flour", "extra virgin olive oil", "salt and pepper"],
  directions: ["Cut the chicken and rabbit into smallish pieces, the zucchini into short strips and the artichokes into small wedges. Remove chokes from artichokes. Place the artichokes in a bowl of water with lemon juice added to prevent them from turning brown.", "Open the zucchini flowers and remove the pistils. Beat the eggs well in a shallow bowl with salt and pepper. Dry all the vegetables well. Dredge all the items to be fried in flour, then coat with egg.", "Fry a few pieces at a time until crips and golden; do not let pieces stick to bottom of pan. Strain from oil and serve hot."],
  recipe_type: "Fritters", region: "Tuscany",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe4.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R4.jpeg"), filename: "R4.jpeg");

Recipe5 = Recipe.create(
  name: "Tagliatelle al Prosciutto",
  ingredients: ["2 1/2 cups all purpose flour", "3 eggs", "7 oz prosciutto", "1 cup cream", "3oz butter", "pinch of nutmeg", "3/4 cup freshly grated Parmesan chesse", "salt and pepper"],
  directions: ["Heap the flour on a board and make a well in the center. Add the eggs and work into a soft, smooth dough. Let rest, covered, while preparing the sauce.", "Combine the prosciutto, cream, butter, nutmeg, and half the Parmesan in a saucepan and heat through. Season with salt and pepper.", "Roll dough out into a thin sheet and cut into tagliatelle, 3/8 in wide. Bring a large pot of salted water to boil and cook the tagliatelle in it until al dente. Drain. Serve topped with the ham sauce and the remaining Parmesan chesse."],
  recipe_type: "Pasta", region: "Central and Northern Italy",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe5.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R5.jpg"), filename: "R5.jpg");

Recipe6 = Recipe.create(
  name: "La Cassuola o Zuppa di Pesce",
  ingredients: ["1kg mixed fish and shellfish, such as clams, mussels, crayfish, squid, cuttlefish, gurnard and stone bass", "1 shallot or 1⁄2 white onion", "2 large garlic cloves", "6 anchovy fillets", "1 tbsp capers, drained", "Handful of parsley", "1⁄2 red chilli, depending on strength", "6 tbsp extra-virgin olive oil", "Salt and freshly ground black pepper", "1 tbsp tomato purée", "100g canned or fresh roughly chopped tomatoes, depending on  season and flavour", "300ml hot water or hot fish stock", "4 slices of white crusty bread, toasted"],
  directions: ["First, pick over the shellfish, discarding any open or broken shells. Drop the clams into a bowl from a 15cm height so that any that are open and dead or full of sand will split open and can be discarded. Clean any barnacles off the mussels and pull off the beards. Discard any that don’t close. Cut any fish into 4cm cubes and the squid or cuttlefish into 1cm rings or pieces. Set aside.", "Using a large knife, finely chop the shallot or onion, one garlic clove, the anchovies, capers, parsley and chilli together. Heat the oil in a heavy-based casserole dish and fry the mixture slowly with a good pinch of salt and black pepper for ten minutes. Add the tomato purée, then stir in the tomatoes.", "Season the squid and cuttlefish with salt and add to the pan. Pour in the hot water or fish stock and cook for about 15 minutes and add the fish. After 15 minutes, add the shellfish.", "Cook for a further 5–10 minutes until all the shells have opened, discarding any that haven’t. Taste and adjust the seasoning if necessary", "Rub the toasted bread lightly with the remaining garlic and lay one slice in each serving bowl. Pour the soup over the top and serve immediately."],
  recipe_type: "Seafood", region: "Amalfi",
  vegan: false, vegetarian: false, pescetarian: true)
Recipe6.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R6.jpg"), filename: "R6.jpg");

Recipe7 = Recipe.create(
  name: "Buccatini al' Amatriciana",
  ingredients: ["1/2 lb guancaiale or pancetta", "1/2 - 3/4 cup dry white wine", "1 shallot (optional)", "2 medium tomatoes or 1 large can chopped San Marzano tomatoes", "Extra Virgin olive oil", "Chili flakes or crushed red pepper", "Freshly grated Pecorino-Romano cheese", "1 sprig fresh rosemary"],
  directions: ["Heat oil in large skillet. Add shallots(if using) and sauté for 2-3 minutes. At this point start boiling water for the pasta. Add the guanciale to the shallots and continue to cook over medium-high heat, 6-8 minutes. After the guanciale has cooked a few minutes, add the crushed red pepper or chili flakes.", "Add the white wine to the guanciale and let cook off, 3-4 minutes. Add the tomatoes.", "Salt the pasta water and add the pasta, cooking until al dente.", "Add the fresh rosemary to the sauce and toss in the pasta. Sprinkle the freshly grated Pecorino-Romano over the pasta and serve."],
  recipe_type: "Pasta", region: "Amatricia",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe7.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R7.jpg"), filename: "R7.jpg");

Recipe8 = Recipe.create(
  name: "Osso Bucco",
  ingredients: ["1 sprig fresh rosemary", "1 sprig fresh thyme", "1 dry bay leaf", "2 whole cloves", "Cheesecloth", "Kitchen twine, for bouquet garni and tying the veal shanks", "3 whole veal shanks (about 1 pound per shank), trimmed", "Sea salt and freshly ground black pepper", "All purpose flour, for dredging", "1/2 cup vegetable oil", "1 small onion, diced into 1/2-inch cubes", "1 small carrot, diced into 1/2-inch cubes", "1 stalk celery, diced into 1/2 inch cubes", "1 tablespoon tomato paste", "1 cup dry white wine", "3 cups chicken stock", "3 tablespoons fresh flat-leaf Italian parsley, chopped", "1 tablespoon lemon zest"],
  directions: ["Place the rosemary, thyme, bay leaf and cloves into cheesecloth and secure with twine. This will be your bouquet garni.", "For the veal shanks, pat dry with paper towels to remove any excess moisture. Veal shanks will brown better when they are dry. Secure the meat to the bone with the kitchen twine. Season each shank with salt and freshly ground pepper. Dredge the shanks in flour, shaking off excess.", "In a large Dutch oven pot, heat vegetable oil until smoking. Add tied veal shanks to the hot pan and brown all sides, about 3 minutes per side. Remove browned shanks and reserve.", "In the same pot, add the onion, carrot and celery. Season with salt at this point to help draw out the moisture from the vegetables. Saute until soft and translucent, about 8 minutes. Add the tomato paste and mix well. Return browned shanks to the pan and add the white wine and reduce liquid by half, about 5 minutes. Add the bouquet garni and 2 cups of the chicken stock and bring to a boil. Reduce heat to low, cover pan and simmer for about 1 1/2 hours or until the meat is falling off the bone. Check every 15 minutes, turning shanks and adding more chicken stock as necessary. The level of cooking liquid should always be about 3/4 the way up the shank.", "Carefully remove the cooked shanks from the pot and place in decorative serving platter. Cut off the kitchen twine and discard.", "Remove and discard bouquet garni from the pot.", "Pour all the juices and sauce from the pot over the shanks. Garnish with chopped parsley and lemon zest."],
  recipe_type: "Roast", region: "Lombardia",
  vegan: false, vegetarian: false, pescetarian: false)
Recipe8.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R8.jpeg"), filename: "R8.jpeg");


Recipe9 = Recipe.create(
  name: "Aubergine Caponata",
  ingredients: ["3 aubergines", "1 1/2 sticks of celery, chopped", "1 1/2 large onions, chopped", "80g of tomato purée", "1 tbsp of capers, rinsed", "10 green olives, pitted and halved", "1 tbsp of pine nuts", "1 tbsp of raisins", "1/2 tbsp of sugar", "80ml of red wine vinegar", "3 tbsp of almonds, toasted and crushed", "vegetable oil, for deep-frying", "2 tbsp of extra virgin olive oil", "salt"],
  directions: ["To make the caponata, cut the aubergines into 3cm cubes and transfer to a bowl of cold salty water for half an hour. Meanwhile, heat a deep-fryer or deep pan of oil to 190°C", "When ready, drain the aubergine pieces and pat dry with kitchen paper. Deep-fry in the hot vegetable oil until golden and cooked through, then place on a plate lined with kitchen paper to drain the excess oil", "Blanch the chopped celery in salted boiling water, then set aside and reserve the water", "Place the onion in a saucepan and cover with half a glass of water. Cook until the water evaporates, then add the extra virgin olive oil and sauté the onions in it for a minute or two. Add the tomato paste, capers, olives, pine nuts, raisins, and the blanched celery with a little of its reserved cooking water. Cook the sauce for 5 minutes", "Add the fried aubergine cubes and mix gently. Dissolve the sugar in the vinegar, add it to the caponata and cook for 2 minutes on a medium-high flame, then take off the heat and let it cool down", "Caponata is best served at room temperature. Sprinkle with the crushed toasted almonds and serve with warm bread"],
  recipe_type: "Antipasto", region: "Sicillia",
  vegan: true, vegetarian: true, pescetarian: false)
Recipe9.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R9.jpeg"), filename: "R9.jpeg");

Recipe10 = Recipe.create(
  name: "Foccacia",
  ingredients: ["2½ cups (600 grams) lukewarm water", "½ teaspoon active dry yeast", "2½ teaspoons (15 grams) honey", "5 1/3 cups (800 grams) all-purpose flour", "2 tablespoons (18 grams) Diamond Crystal Kosher salt or 1 tablespoon fine sea salt", "¼ cup (50 grams) extra-virgin olive oil, plus more for pan and finishing", "Flaky salt for finishing", "1½ teaspoons (5 grams) Diamond Crystal Kosher Salt", "⅓ cup (80 grams) lukewarm water"],
  directions: ["In a medium bowl, stir together water, yeast, and honey to dissolve. In a very large bowl, whisk flour and salt together to combine and then add yeast mixture and olive oil. Stir with a rubber spatula  until just incorporated, then scrape the sides of the bowl clean and cover with plastic wrap. Leave out at room temperature to ferment for 12 to 14 hours until at least doubled in volume.", "Spread 2 to 3 tablespoons oil evenly onto a 18-by-13 inch (46-by-33 cm) rimmed baking sheet. When dough is ready, use a spatula or your hand to release it from the sides of the bowl and fold it onto itself gently, then pour out onto pan. Pour an additional 2 tablespoons of olive oil over dough and gently spread across. Gently stretch the dough to the edge of the sheet by placing your hands underneath and pulling outward.  The dough will shrink a bit, so repeat stretching once or twice over the course of 30 minutes to ensure dough remains stretched.", "Dimple the dough by pressing the pads of your first three fingers in at an angle.  Make the brine by stirring together salt and water until salt is dissolved. Pour the brine over the dough to fill dimples.  Proof focaccia for 45 minutes until the dough is light and bubbly.", "Thirty minutes into this final proof, adjust rack to center position and preheat oven to 450°F (235°C). If you have a baking stone, place it on rack.  Otherwise, invert another sturdy baking sheet and place on rack.  Allow to preheat with the oven until very hot, before proceeding with baking.", "Sprinkle focaccia with flaky salt. Bake for 25 to 30 minutes directly on top of stone or inverted pan until bottom crust is crisp and golden brown when checked with a metal spatula.  To finish browning top crust, place focaccia on upper rack and bake for 5 to 7 minutes more.", "Remove from oven and brush or douse with 2 to 3 tablespoons oil over the whole surface (don’t worry if the olive pools in pockets, it will absorb as it sits). Let cool for 5 minutes, then release focaccia from pan with metal spatula and transfer to a cooling rack to cool completely."],
  recipe_type: "Foccacia", region: "Liguria",
  vegan: true, vegetarian: true, pescetarian: false)
Recipe10.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R10.jpeg"), filename: "R10.jpeg");


Recipe11 = Recipe.create(
  name: "Folpetti",
  ingredients: ["750g of baby octopus", "1 tsp black peppercorns", "2 bay leaves", "1 garlic clove, minced", "3 tbsp of extra virgin olive oil", "1 lemon, juiced", "2 tbsp of flat-leaf parsley, finely chopped", "fine sea salt", "freshly ground black pepper"],
  directions: ["To clean the baby octopus, simply remove eyes and beaks. Wash them thoroughly under cold running water and pat dry before using. You can buy tenderised baby octopus, or just freeze them and then thaw them (check that they haven't been frozen before) to make them more tender", "Bring a pan of water with the peppercorns, bay leaves and garlic to the boil. Stir in the baby octopus (hold each by the sac for a second; dip the tentacles to make them curl before plunging the whole thing in water)", "Cover and cook for 10–12 minutes, or until tender (the exact cooking time depends on the size of your octopus). Drain, discarding the aromatics, and set aside", "Heat 1 tablespoon of the olive oil in a large frying pan. When hot, add the octopus and sauté for 2–3 minutes, just enough for their skin to blister ever so slightly, and for the ends to curl up and become crispy. Season with salt, pepper and lemon juice and sprinkle with parsley to serve"],
  recipe_type: "Anitpasto", region: "Veneto",
  vegan: false, vegetarian: false, pescetarian: true)
Recipe11.photo.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R11.jpg"), filename: "R11.jpg");
