# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Recipe.create(
  name: "Pappardelle alla Lepre",
  ingredients: ["1 1/4lb hare or rabbit meat", "1 cup dry red wine", "2 fresh rosemary sprigs", "salt", "1/2 cup extra virgin olive oil", "1 small onion", "1 garlic clove", "1 celery stalk", "2 bay leaves", "1 tbsp juniper berries", "freshley ground pepper", "1 tbsp tomato paste", "1 3/4 cups all purpose flour", "2 eggs", "1/2 cup freshly grated Parmesan cheese"],
  directions: ["Cut the hare into pieces and place in a bowl. Add the wine and rosemary and marinate for 24 hours.", "Drain the meat, reserving the wine. Place meat in a saucepan with a little salt. Cover and cook over low heat for 10 minutes, then pour off the accumulated liquid. Add the oil, onion, garlic, celery, bay leaves, juniper berries and pepper and cook over moderate heat until onion begins to color, 10 to 15 minutes, stirring constantly.", "Pour in the wine and let it evaporate. Add the tomato paste, diluted with a little water, and simmer uncovered for about 1 1/2 hours, adding water as necesary to keep moist.", "Meanwhile, mound the flour on a work surface and make a well in the center. Break the eggs into the well and mix with your hands to form a dough. Knead until smooth and elastic. Roll out the dough thinly and cut into 1 in wide strips.", "Discard the bay leaves from the sauce. Bone the meat and chop it coarsely. Return it to the saucepan and reheat, adding more water if required to reach sauce consistency.", "Cook the pappardelle in boiling salted water until al dente. Drain and toss with the sauce. Sprinkle with Parmesan and serve."],
  recipe_type: "Pasta", region: "Tuscany", vegan: false, vegetarian: false, pescetarian: false,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R1.jpg"), filename: "R1.jpg"));
Recipe.create(
  name: "Agnello al Finnochio",
  ingredients: ["1/3 cup extra virgin olive oil", "3lb boneless lamb, cut into serving pieces", "2lb fennel", "1/4 cup all purpose flour", "3 anchovy fillets, mashed", "1 onion, chopeed", "1/2 cup dry white wine"],
  directions: ["Heat half the oil in a large, deep skillet over low heat. Add the lamb and season with salt and pepper, Cover with a tight-fitting lid and cook for 1 hour", "Clean the fennel and chop into small chunks. Sauté the fennel with remaining oil, anchovies and onion.", "Add cardoons to the lamb. Stir in the wine and cook for a few more minutes. Salt and pepper to taste and serve"],
  recipe_type: "Meat and vegetable entrée", region: "Abruzzi",
  vegan: false, vegetarian: false, pescetarian: false,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R2.jpg"), filename: "R2.jpg"));
Recipe.create(
  name: "Rollè di Tacchino alla Bolognese",
  ingredients: ["2 eggs", "1/2 cup freshly grated Parmesan cheese", "3 tablespoons extra virgin olive oil", "10oz spinach, chopped", "pinch of freshly ground nutmeg", "1 slice turkey, about 3/8in thick and about 1 1/4lbs", "1 tbsp chopped fresh rosemary", "3oz thinly sliced pancetta", "1 tbsp butter", "1 cup dry white wine"],
  directions: ["Beat the eggs in a bowl with the Parmesan cheese. Sesason with salt and pepper. Pour into a cast iron skillet which has been heated with a tbsp of olive oil. Cook the omelet on both sides", "Heat another tbsp of oil in a large saucepan, add spinach and cook over low heat until wilted. Sprinkle with nutmeg and add salt to tast. Arrange the omelet, spinach, rosemary and pancetta on top of the turkey. Roll up th emeat and tie it securely enclosing the filling.", "Heat the butter and the remaining oil in a large ovenproof skillet and brown the turkey roll on all sides over high heat. Pour in half the wine and let evaporate. Transfer the turkey roll to a 350 degree oven for 1hr.", "Lift out the meat and set aside to rest. Pour the rest of the wine into the saucepan and bring to boil, scraping up browned bits. Slice the meat and pour the pan juices over the slices before serving."],
  recipe_type: "Roast", region: "Rome",
  vegan: false, vegetarian: false, pescetarian: false,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R3.jpg"), filename: "R3.jpg"));
Recipe.create(name: "Fritto Misto alla Fiorentina", ingredients: ["1/2 chicken", "1/2 rabbit", "2 small zucchini", "2 globes artichokes, leaf tips trimmed", "juice of 1 lemon", "6 zucchini flowers", "2 eggs", "1 cup all purpose flour", "extra virgin olive oil", "salt and pepper"],
  directions: ["Cut the chicken and rabbit into smallish pieces, the zucchini into short strips and the artichokes into small wedges. Remove chokes from artichokes. Place the artichokes in a bowl of water with lemon juice added to prevent them from turning brown.", "Open the zucchini flowers and remove the pistils. Beat the eggs well in a shallow bowl with salt and pepper. Dry all the vegetables well. Dredge all the items to be fried in flour, then coat with egg.", "Fry a few pieces at a time until crips and golden; do not let pieces stick to bottom of pan. Strain from oil and serve hot."],
  recipe_type: "Fritters", region: "Tuscany",
  vegan: false, vegetarian: false, pescetarian: false,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R4.jpeg"), filename: "R4.jpg"));
Recipe.create(
  name: "Tagliatelle al Prosciutto", ingredients: ["2 1/2 cups all purpose flour", "3 eggs", "7 oz prosciutto", "1 cup cream", "3oz butter", "pinch of nutmeg", "3/4 cup freshly grated Parmesan chesse", "salt and pepper"],
  directions: ["Heap the flour on a board and make a well in the center. Add the eggs and work into a soft, smooth dough. Let rest, covered, while preparing the sauce.", "Combine the prosciutto, cream, butter, nutmeg, and half the Parmesan in a saucepan and heat through. Season with salt and pepper.", "Roll dough out into a thin sheet and cut into tagliatelle, 3/8 in wide. Bring a large pot of salted water to boil and cook the tagliatelle in it until al dente. Drain. Serve topped with the ham sauce and the remaining Parmesan chesse."],
  recipe_type: "Pasta", region: "Central and Northern Italy",
  vegan: false, vegetarian: false, pescetarian: false,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R5.jpg"), filename: "R5.jpg"));
Recipe.create(
  name: "La cassuola o zuppa di pesce",
  ingredients: ["1kg mixed fish and shellfish, such as clams, mussels, crayfish, squid, cuttlefish, gurnard and stone bass", "1 shallot or 1⁄2 white onion", "2 large garlic cloves", "6 anchovy fillets", "1 tbsp capers, drained", "Handful of parsley", "1⁄2 red chilli, depending on strength", "6 tbsp extra-virgin olive oil", "Salt and freshly ground black pepper", "1 tbsp tomato purée", "100g canned or fresh roughly chopped tomatoes, depending on  season and flavour", "300ml hot water or hot fish stock", "4 slices of white crusty bread, toasted"],
  directions: ["First, pick over the shellfish, discarding any open or broken shells. Drop the clams into a bowl from a 15cm height so that any that are open and dead or full of sand will split open and can be discarded. Clean any barnacles off the mussels and pull off the beards. Discard any that don’t close. Cut any fish into 4cm cubes and the squid or cuttlefish into 1cm rings or pieces. Set aside.", "Using a large knife, finely chop the shallot or onion, one garlic clove, the anchovies, capers, parsley and chilli together. Heat the oil in a heavy-based casserole dish and fry the mixture slowly with a good pinch of salt and black pepper for ten minutes. Add the tomato purée, then stir in the tomatoes.", "Season the squid and cuttlefish with salt and add to the pan. Pour in the hot water or fish stock and cook for about 15 minutes and add the fish. After 15 minutes, add the shellfish.", "Cook for a further 5–10 minutes until all the shells have opened, discarding any that haven’t. Taste and adjust the seasoning if necessary", "Rub the toasted bread lightly with the remaining garlic and lay one slice in each serving bowl. Pour the soup over the top and serve immediately."],
  recipe_type: "Seafood", region: "Amalfi",
  vegan: false, vegetarian: false, pescetarian: true,
  photo: Recipe.attach(io: open("https://yummaly-aa-seeds.s3-us-west-1.amazonaws.com/R6.jpg"), filename: "R6.jpg"));
