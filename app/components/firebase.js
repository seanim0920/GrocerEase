//import firebase from 'firebase';
import Ingredient from '../objects/Ingredient';
import { Platform } from 'react-native';

const recipes = [{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20",
        "https://www.amazon.com/Full-Circle-Organic-Cotton-Grayscale/dp/B016RYYBDE?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B016RYYBDE?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Spoon",
        "Vegetable Peeler",
        "Dutch Oven",
        "Wooden Spoon",
        "Rimmed Baking Sheet",
        "Fork",
        "Blender",
        "Large Bowl",
        "Ladle",
        "Dish Towel"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bedeb66d3a9122492be9b5b/3:2/w_940,c_limit/20181030_BASICALLY_222.jpg",
    "ingredients": [
        {
            "name": "large onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "2\" piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "A small handful of cilantro, with stems",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "large butternut squash (31/2-4 lb.)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "can unsweetened coconut milk, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "unsweetened coconut flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "limes",
            "quantity": 2,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 300\u00b0. Trim the ends off of 1 onion. Cut in half through root end, peel and discard skin, then coarsely chop. (No need to sweat the knife work here\u2014it's all going to get blended anyway.) Transfer chopped onion to a medium bowl.",
        "Using the flat side of chef\u2019s knife, smash 3 garlic cloves. Peel and discard skins, then coarsely chop. Transfer to the bowl with the chopped onion.",
        "Using a spoon, peel 2\" piece ginger. (We always like to use a spoon to peel ginger, which is way better for navigating all of those nooks and crannies than a vegetable peeler.) Thinly slice and add to bowl with onion and garlic.",
        "Trim a handful of cilantro leaves with tender stems; set aside for serving. Coarsely chop remaining stems and transfer about 1/4 cup chopped stems to bowl with onion. Clear your cutting board.",
        "It\u2019s time to break down your squash! (We promise it\u2019s not as scary as it sounds.) Trim off both ends of 1 butternut squash, then cut through where the neck meets the bulb. (This makes it easier to peel.) Peel both pieces of squash with a vegetable peeler. Cut squash neck and bulb in half lengthwise. Using a spoon, scoop out seeds from each half of the bulb; discard seeds. Place squash pieces cut side down on board and cut each piece in half lengthwise. Cut squash crosswise into 1\"-thick slices. Again, you don't need to worry about beautiful knife work here, but it's good for the pieces to be similarly sized so they cook at the same rate.",
        "Vigorously shake 13.5-oz. can of coconut milk for a few seconds so everything gets well mixed. Open can and set aside 3 Tbsp. milk to swirl over finished soup.",
        "Heat 2 Tbsp. oil in a large Dutch oven or saucepan over medium. Add onion mixture, 1/4 tsp. red pepper flakes, and 1 tsp. salt and cook, stirring occasionally with a wooden spoon, until onion is translucent and soft, 5-7 minutes.",
        "Add squash and give everything a stir to coat. Add 3 cups water, or enough to just submerge the squash, remaining coconut milk in can, and 2 tsp. salt, then stir to combine. Raise heat to high and bring soup to a boil.",
        "Once soup is boiling, reduce heat to medium-low and simmer, stirring occasionally, until the vegetables are very tender, 12-14 minutes.",
        "Meanwhile, prepare your garnishes. Spread 1/2 cup coconut flakes on a rimmed baking sheet. Toast in oven until golden brown, about 5 minutes. (If you can't find big coconut flakes, shredded is okay, too, but it will probably take less time to toast. Just make sure to avoid any pre-sweetened stuff.) Keep an eye on them\u2014coconut flakes can go from golden to burnt in seconds. Cut 1 lime into wedges; set aside for serving. Using a fork or citrus reamer, juice the second lime into a small bowl.",
        "You\u2019re almost ready to blend\u2014so let\u2019s do this! First things first: set up your workstation. You\u2019ll need your pot of soup, blender, a large bowl, a ladle, and a clean kitchen towel all within arm\u2019s reach. Using ladle, fill blender pitcher no more than halfway with equal parts broth and vegetables (if you fill it up, it will overflow as it blends!). Now, here\u2019s the most important step of this entire recipe: When you secure the blender lid, make sure there is a vent for the steam to escape (many blender lids come with removable vents). If you skip this step, the lid will blow off and you will end up with soup on every inch of your kitchen.",
        "Holding the lid down with a folded kitchen towel, carefully blend soup, starting from the lowest speed and working your way up to high, until smooth and silky, 10-15 seconds. Transfer to a large bowl. Repeat, working in batches, until all soup is blended.",
        "Wipe out Dutch oven and return to stove. Pour soup back into pot and heat over medium, stirring occasionally, until you can see steam rising from the pot. (You may be tempted to serve the soup straight from the blender, but it loses a lot of heat in the blending process and gets lukewarm. Trust us\u2014you want to reheat it.) Stir in lime juice. Taste and add more salt if needed.",
        "Ladle soup into bowls. Top with a swirl of reserved coconut milk, toasted coconut flakes, and cilantro. Serve with reserved lime wedges.",
        "Do Ahead: Soup and toppings can be made 4 days ahead. Store in separate airtight containers and chill."
    ],
    "title": "Vegan Butternut Squash Soup",
    "url": "https://www.bonappetit.com/recipe/vegan-butternut-squash-soup"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Chef's Knife",
        "Cutting Board",
        "Small Saucepan",
        "Paper Towels",
        "Cast Iron Skillet",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8749c98e5ab504d767b208/3:2/w_940,c_limit/no-fail-roast-chicken-with-lemon-and-garlic.jpg",
    "ingredients": [
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "head of garlic",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "(1/2 stick) unsalted butter or extra-virgin olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "3-4 lb. whole chicken",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Arrange a rack in the center of your oven, and preheat to 425\u00b0. Cut 1 lemon in half crosswise and remove any visible seeds.",
        "Cut 1 head of garlic in half crosswise. (If it falls apart a bit, don't sweat it.)",
        "Melt 1/2 stick butter in a small saucepan or microwave in a small bowl.",
        "Place 1 3-4-lb. whole chicken on a cutting board (best to use a plastic one you can sterilize). A word on bird size. A 3-4-lb. chicken is pretty much the ideal size for roasting this way. Something a little bit bigger will work, but once you get much past 41/2-lbs. it becomes harder to guarantee that the breast meat won't dry out in the time it takes the dark meat to cook. Pat the whole thing dry with paper towels. It's super important to get the chicken as dry as possible, which helps with browning.",
        "With chicken breast facing up and legs pointing toward you, use a sharp knife to slice through loose area of skin connecting the leg and breast, making about a 3\"-long incision. Continue cutting downward until you hit the joint that connects the thigh to the body, then stop (once you get through the skin, there\u2019s not much there; if you are cutting through flesh, you\u2019re too close to the breast). This exposes the leg joint, making it easy to tell if chicken is cooked. Repeat on second side.",
        "Season every surface of chicken, including skin along backbone, inside cavity, under wings, and inside part of the leg you just exposed, with lots of salt and pepper. If you\u2019re using kosher salt, it should take you 4-5 generous\u2014as in, four finger\u2014pinches, which will be around 4 whole teaspoons.",
        "Transfer chicken breast side up to a large oven-safe skillet. Arrange lemon and garlic cut sides down in skillet around chicken.",
        "Drizzle chicken all over with melted butter (mmmmmmm) and transfer to oven.",
        "Roast until chicken is nicely browned and cooked through, checking for doneness after 45 minutes. To check, carefully remove skillet from oven (the handle is hot!), poke a knife into leg joints, and pierce the meat. If juices run clear, the chicken is done. If you see a rosy pink color, it needs more time. Continue to roast, checking every 5 minutes, until juices run clear. (If you\u2019re not sure, you can also use the knife to lightly shred some of the meat along the thigh bone\u2014the meat should look opaque and the fibers should separate easily.)",
        "Let chicken rest in skillet at least 15 minutes before carving\u2014this will help the juices in the meat to settle, and will also get it down to a temperature that is cool enough to handle with your bare hands while carving. Don't worry: It's a big piece of meat, so it will still be plenty warm by the time you serve it. Transfer chicken to a platter. Pour all of those glorious, buttery pan juices over top of the meat and serve with roasted lemon and garlic alongside. Winner, winner, chicken dinner!",
        "Do Ahead: Chicken can be made 2 days ahead. Let cool. Cover and chill; bring to room temperature before serving."
    ],
    "title": "No-Fail Roast Chicken with Lemon and Garlic",
    "url": "https://www.bonappetit.com/recipe/no-fail-roast-chicken-with-lemon-and-garlic"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-722-20-Classic-Stainless-Skillet/dp/B00008CM6A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Spoon",
        "Microplane",
        "Small Bowl",
        "Whisk",
        "Small Skillet",
        "Chef's Knife",
        "Cutting Board",
        "Cast Iron Skillet",
        "Fish Spatula",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bdb035d151fe52ef5d12436/3:2/w_940,c_limit/Basically-Crispy-Skin-Salmon-01.jpg",
    "ingredients": [
        {
            "name": "2\" piece fresh ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "white miso",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "vegetable oil",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "unseasoned rice vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "sesame seeds",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "scallions",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "skin-on salmon fillets",
            "quantity": "4",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Start by assembling the honey-miso sauce: Peel 2\" piece ginger with a spoon. (We find that a spoon is better for navigating the bumpy exterior of a knob of ginger than a vegetable peeler, but you do you.) Finely grate ginger with a Microplane into a small bowl.",
        "Add 2 Tbsp. miso, 1 Tbsp. oil, 1 Tbsp. vinegar, 1 Tbsp. honey, and 1 Tbsp. water to the bowl with with the ginger. Whisk to combine and set aside. This is a great all-purpose sauce, so making extra wouldn't hurt! Use it to top grain bowls, roasted vegetables, or any other simply-cooked protein.",
        "Heat a small skillet over medium. Toast 1 Tbsp. sesame seeds, tossing frequently, until seeds are a light golden color and slightly fragrant, about 2 minutes. Seeds you toast yourself are always going to be more flavorful than the ones you buy already toasted, but we won't judge if you don't feel like going the extra mile.",
        "Trim the root ends from 3 scallions and thinly slice crosswise.",
        "Lightly season the flesh of 4 salmon fillets on all sides with salt. Place pieces skin side down in a cold\u2014as in not preheated; you don't have to refrigerate it or anything\u2014cast-iron skillet. (This might seem a little weird, but trust us\u2014the skin will render nicely and get way more crispy this way.) Heat skillet over medium and let the salmon cook undisturbed for 5 minutes.",
        "Press down lightly on flesh with a spatula to ensure all parts of the skin are making contact with the pan. At this point it should be opaque at least halfway up the flesh side. Continue to cook skin side down until fish is opaque all the way through and skin is crispy, about 5 minutes longer. If the skin is still sticking to the pan at this point, don't try to un-stick it\u2014you'll know that it's ready to flip when it releases on its own.",
        "Using a fish spatula, gently flip the fillets, then remove the pan from the heat. Continue to cook off-heat (the pan will still be plenty hot) until flesh is juuuuuuuust cooked through, about 1 minute longer for regular-sized fillets, but very thick ones might take up to 3 minutes more\u2014you can use a fork to flake the fish slightly to check for doneness; you're looking for the inside to be still a little pink and translucent.",
        "Spoon miso-honey sauce onto a platter. Place salmon fillets skin side up on top of the sauce. Sprinkle with toasted sesame seeds and scallions. Et voila! Dinner is served."
    ],
    "title": "Crispy-Skin Salmon with Miso-Honey Sauce",
    "url": "https://www.bonappetit.com/recipe/crispy-skin-salmon-with-miso-honey-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-722-20-Classic-Stainless-Skillet/dp/B00008CM6A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Microplane",
        "Medium Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Whisk",
        "Small Skillet",
        "Large Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bd3420a7a6e182dd823fafa/3:2/w_940,c_limit/basically-1018-romaineyogurt-retouched.jpg",
    "ingredients": [
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemons",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "plain full-fat yogurt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "dashes hot sauce",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "freshly ground black pepper, plus more",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "A small handful of mixed herbs, such as dill, basil, cilantro, and/or parsley",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "roasted, salted almonds",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "head of romaine or 2 romaine hearts",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Peel 1 garlic clove and use a Microplane to finely grate into a medium bowl. If we're putting garlic into a dressing, we're almost always going to grate it. It's faster and easier than mincing by hand, and ensures that the garlic flavor is evenly dispersed.",
        "Slice 4 sides off 2 lemons. Cutting the lemons this way makes it easy to remove the seeds, and creates easy-to-squeeze \"cheeks.\" Squeeze juice from 1 lemon into bowl with garlic. Set remaining cheeks aside.",
        "Add 1/2 cup yogurt, 1/4 cup mayonnaise, 2 dashes hot sauce, 1/2 tsp. salt, and 1/2 tsp. pepper and whisk to combine. Give the dressing a taste and add more salt and pepper if necessary\u2014it should be plenty punchy.",
        "Remove leaves from any tough stems from handful of herbs. (You can use whatever soft herbs you have lying around for this, alone or in combination, but the dressing will taste great even without them.) Finely chop leaves, then stir into yogurt mixture.",
        "Crush 1/4 cup roasted, salted almonds with the bottom of a small pot or pan. You can certainly toast raw almonds yourself if you want some extra credit, but using ready-to-go nuts is a good option if you don't feel like turning on the oven. Don't like almonds? Any nut or seed will work great here, too.",
        "Cut off bottom of 1 head of romaine and let leaves fall from core; discard any leaves that are tough, leathery, or wilty. Continue cutting from the bottom, removing leaves as they fall.",
        "Once you have removed all the leaves, slice larger leaves in half and leave smaller ones whole. (If your leaves are dirty or gritty, this is a good time to give them a wash\u2014just remember to dry them off as thoroughly as possible afterward.) Transfer to a large bowl.",
        "Squeeze reserved lemon cheeks over lettuce and toss gently to coat. (We always dress with acid\u2014think citrus or vinegar\u2014before adding any oil, otherwise it will slide right off.) Add 2 Tbsp. oil and a generous pinch of salt; toss again to coat. If it seems like you're dressing this salad twice, well, you are! This ensures that each leaf of lettuce is properly seasoned before that creamy ranch gets drizzled on\u2014a pro move whenever you're dressing a salad.",
        "Arrange half of lettuce mixture on a platter. Spoon dressing over, then repeat with remaining lettuce and dressing. Top with almonds; season with plenty of pepper. Repeat every night from now on."
    ],
    "title": "Every Night Salad with Yogurt Ranch",
    "url": "https://www.bonappetit.com/recipe/every-night-salad-with-yogurt-ranch"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Microplane",
        "Medium Bowl",
        "Small Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Whisk",
        "Rimmed Baking Sheet",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bcf9b0067abf2633d9ef9f4/3:2/w_940,c_limit/Basically-Crispy-Meatballs-01-New.jpg",
    "ingredients": [
        {
            "name": "garlic cloves, divided",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "packed mixed herbs, such as parsley, cilantro, basil, and/or dill, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "drained capers",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "walnuts",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large egg",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "paprika",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "plus 1/2 cup extra-virgin olive oil, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "panko (japanese breadcrumbs)",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground beef (20% fat)",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in center of oven; preheat to 425\u00b0. Finely grate 1 garlic clove into a medium bowl. Finely grate 1 more garlic clove into a small bowl. (The medium bowl is for your meatball mixture, and the small bowl is for your salsa verde, in case this part seems silly.)",
        "Finely chop 2 cups mixed herbs. As we mentioned in the ingredients list, you can use any combo of soft herbs like parsley, dill, basil, and/or cilantro, but if you've only got one that's cool, too\u2014we just love how green and complex they taste when mixed together. Transfer half to same medium bowl, then transfer remaining herbs to same small bowl.",
        "Finely chop 3 Tbsp. capers. Transfer 2 Tbsp. capers to medium bowl, then transfer remaining 1 Tbsp. capers to small bowl. Chop 1/4 cup walnuts and add to same medium bowl. If you've never added nuts to meatballs, you're in for a real treat; they lend great texture and flavor to the finished dish.",
        "Whisk in 1 egg, 1 Tbsp. paprika, 2 tsp. salt, and 1 Tbsp. oil to bowl with walnuts.",
        "Using clean hands, mix 1 cup panko into egg mixture. Add beef and continue to mix gently with your hands until incorporated, but do not overmix. This part is key\u2014if you work the mixture too much, the meat will become tough and springy, almost like sausage, so use a gentle hand. Also: At this point, you can pinch off a little piece of the meatball mixture, crisp it in a skillet, and give it a taste to make sure the seasoning is to your liking. This is your last chance to make any tweaks before they all get cooked!",
        "Drizzle 2 Tbsp. oil  on a rimmed baking sheet. Roll beef mixture into 11/2\" balls (about the size of golf balls). Arrange 1\" apart on pan.",
        "Bake meatballs, shaking pan halfway through, until crispy on all sides, about 10 minutes. One cool thing about using all beef (instead of a beef-pork-veal combo) is that it's totally fine if the meatballs are a little pink in the middle.",
        "While meatballs are cooking, you can finish that salsa verde. This is one of our all-time favorite sauces, and is delicious spooned over just about any piece of meat, roasted veg, or bowl of leftovers you can think of. Which is all to say: Get ready to have a lot more salsa verde in your life from here on out. Finely grate lemon zest into bowl with herbs and garlic. Halve the lemon you just zested and squeeze juice into bowl, using your hand to catch any seeds. (You can use a citrus squeezer for this if you've got one.) Add remaining 1/2 cup oil and stir to combine. Season with salt and pepper, taste, and add more seasoning if necessary\u2014it should be good and punchy.",
        "Transfer meatballs to a platter, and serve with salsa verde alongside."
    ],
    "title": "Crispy Sheet-Pan Meatballs with Salsa Verde",
    "url": "https://www.bonappetit.com/recipe/crispy-sheet-pan-meatballs-with-salsa-verde"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Vegetable Peeler",
        "Chef's Knife",
        "Cutting Board",
        "Large Pot",
        "Wooden Spoon",
        "Glass Measuring Cup",
        "Microplane",
        "Small Bowl",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bbcf606618842474b50cb24/3:2/w_940,c_limit/Basically-Black-Bean-Soup-01.jpg",
    "ingredients": [
        {
            "name": "medium onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium carrot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "red wine vinegar",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "tin chipotle chiles in adobo, or 2 tbsp. hot sauce",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "dried black beans (not soaked)",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "dried oregano",
            "quantity": "11/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "limes",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "whole-milk greek yogurt",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Cilantro, sliced avocado, crushed Fritos, finely chopped onion, lime wedges, and/or hot sauce (for serving; optional)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Start by doing a little prep work. Peel and chop 1 onion and 1 carrot.",
        "Peel 3 garlic cloves by smashing each firmly with the flat side of a knife to break into smaller pieces. Discard skins. The cool thing about prepping garlic for any kind of long-cooking preparation like this is that it will have plenty of time to break down and infuse the whole soup with garlicky goodness, which means there's no need to go through the tedious process of mincing the cloves finely.",
        "Heat 1/4 cup oil in a large stock pot or Dutch oven over medium. Add onion, carrot, and garlic. Cook, stirring occasionally, until onion is golden, 5-7 minutes. Don't worry if the veggies start sticking to the bottom of the pan a little bit\u2014that's a good thing! Those little browned bits have a ton of flavor, and we'll be adding some liquid in the next step to get them up, a process that's also called \"deglazing.\" Cool, huh?",
        "Add 1/4 cup red wine vinegar and cook, scraping up any brown bits from the bottom of the pot, until vinegar is reduced by about half.",
        "Add 2 Tbsp. adobo sauce from can of chiles and stir to coat. (Feel free to add more adobo sauce if you're craving more heat and smokiness; just remember: You can always add more later, but you can't take any away.)",
        "Add 1 lb. dried black beans, 11/2 tsp. oregano, 1 Tbsp. salt, and 8 cups water. That's right: no boxed stock! The beans are going to create their own delicious broth as they simmer away. Bring up to a boil over high heat, then drop the heat down low so that the beans are just simmering. Cover pot with a lid.",
        "Simmer, stirring every 30 minutes to prevent sticking, until beans are tender and creamy, 11/2-2 hours. How long it takes will depend entirely on how fresh your beans are\u2014the longer they've been sitting on the shelf, the longer they're going to take to cook. That's why we try to buy dried beans from stores where we know their inventory moves. (You can't always tell, but dust on the bag is never a good sign.) As the beans cook, you may need to top off with a bit more hot water if too much of it cooks off; you want to make sure the beans are submerged.",
        "Meanwhile, assemble your garnishes. They're going to be the difference between an extremely simple\u2014and delicious!\u2014pot of black bean soup and something that feels fun and kind of fancy. The first thing we're going to make is a kind of creamy lime-yogurt to dollop on top. First, place 1 cup yogurt in a small bowl. Finely grate zest from 1 lime into bowl. Cut the lime in half and squeeze in juice.",
        "Season yogurt mixture with salt. Give it a taste and add another pinch of salt if it doesn't pop. Easy, and kind of fancy, non? Cut remaining 2 limes into wedges for squeezing over the soup.",
        "Prepare any other (optional) garnishes you may like. Slice some ripe avocado. Put some Fritos or tortilla chips or corn nuts in a bowl. Pick some cilantro leaves. Chop some onion, or thinly slice some scallions. Shred some cabbage. If you ask us, the more garnishes, the better!",
        "Taste and season soup with salt, if needed. Remember: Beans can handle quite a bit of salt, so don't be afraid to add more if it tastes kind of \"meh.\" You can serve right away, but we usually like to let a bean soup like this hang out for at least a half hour after we've finished seasoning it so that the salt in the cooking liquid can work its way into the beans themselves. Ladle the soup into bowls, top with yogurt mixture, and serve with lime wedges and any other garnishes your heart desires.",
        "Do Ahead: Soup, without garnishes, can be made 1 week ahead; store in an airtight container and chill, or freeze up to 3 months."
    ],
    "title": "Basically Black Bean Soup",
    "url": "https://www.bonappetit.com/recipe/basically-black-bean-soup"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/USA-Pan-Bakeware-Aluminized-Steel/dp/B002UNMZOO?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002UNMZOO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-HM-50-Power-Advantage-5-Speed/dp/B000TVWFEY?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000TVWFEY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Chefn-FreshForce-Citrus-Juicer-Lemon/dp/B002XOB0P0?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002XOB0P0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Loaf Pan",
        "Parchment Paper",
        "Microplane",
        "Large Bowl",
        "Electric Mixer",
        "Whisk",
        "Spatula",
        "Cake Tester",
        "Vegetable Peeler",
        "Cutting Board",
        "Chef's Knife",
        "Citrus Juicer",
        "Medium Bowl",
        "Wire Rack"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bb50be0fd392d354d90b131/3:2/w_940,c_limit/Basically-Lemon-Pound-Cake-03.jpg",
    "ingredients": [
        {
            "name": "(2 sticks) unsalted butter, room temperature, plus more for pan",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "lemons",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "granulated sugar",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large eggs",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "all-purpose flour",
            "quantity": "13/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "11/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "whole milk",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "powdered sugar",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Place a rack in center of oven; preheat to 350\u00b0. Butter a 9x4\" loaf pan, fully coating bottom and sides. Line pan lengthwise with parchment paper, leaving about a 2\" overhang. Are you reading this and wondering, \"Can I use wax paper instead of parchment paper?\" The answer is: absolutely NOT. That strip of parchment paper will help you to lift the finished cake out of the loaf pan cleanly. Wax paper, on the other hand, will melt and stick to the cake\u2014it's never meant to go into the oven. Now you know!",
        "Using a Microplane, finely grate the zest from 2 lemons into a large bowl. Add 1 cup (2 sticks) unsalted room temperature butter and 1 cup granulated sugar to bowl. It might be tempting to ignore the part about the butter being \"room temperature,\" but working with butter that's soft and spreadable\u2014but not melted\u2014is essential here.",
        "Using an electric mixer on high speed, beat until mixture is very light and fluffy, about 5 minutes. You know how people talk about \"creaming\" butter and sugar together? That's what you're doing here. You're basically whipping a bunch of air into the butter and sugar mixture, which will help keep the finished cake light and fluffy. And as we mentioned in the last step, that butter needs to be room temp in order for this to work.",
        "Beat in 3 eggs one at a time, waiting until each is incorporated before adding the next. Continue to beat until mixture is lighter and even fluffier, about 2 minutes.",
        "Whisk 13/4 cups all-purpose flour, 11/2 tsp. baking powder, and 1/2 tsp. salt in another large bowl. It might seem funny to add salt to a dessert recipe, but a little bit helps to make all of the rich, sweet elements really sing.",
        "Add one-half of dry ingredients to butter mixture and beat on low speed just until combined.",
        "Beat in 6 Tbsp. milk on low just until smooth, then add remaining dry ingredients and beat just until combined. Now that you've added the flour, you want to mix the batter as little as possible\u2014if you beat it up too much, you'll start to form gluten, which will make the cake tough. Using a spatula, scrape down sides of bowl and give batter a final mix so dry ingredients are fully incorporated.",
        "Scrape batter into your buttered loaf pan; smooth top with a spatula. Bake cake, turning once halfway through, until a cake tester, toothpick, skewer, or thin knife inserted into the center comes out clean, 45-55 minutes.",
        "While the cake bakes, make the glaze: First, remove zest from remaining lemon with a vegetable peeler in wide strips. (FWIW, if this part seems overly fussy or annoying, you can feel free to just use a Microplane to zest all of the lemons for the glaze, but we think doing it this way looks cuter.)",
        "Transfer zest to a cutting board and slice as thinly as possible; set aside.",
        "Halve 2 lemons (the ones you already zested) and squeeze the juice into a small bowl with a reamer or fork (you should have about 1/2 cup lemon juice).",
        "Place 11/2 cups powdered sugar in another medium bowl. Slowly whisk in about half of lemon juice until smooth, then add sliced lemon zest; set glaze aside.",
        "Let cake cool about 10 minutes. (Yeah, it really does need to cool a bit, so set a timer if you're impatient.) Poke 10-15 holes evenly throughout cake with a cake tester or toothpick. Pour the remaining lemon juice\u2014the stuff that didn't end up going into the glaze\u2014over the top of the cake. Let cool completely. (Seriously!)",
        "Run a butter knife around edges of pan to loosen. Using parchment overhang, lift cake onto a wire rack; remove parchment.",
        "Now, pour the lemon zest glaze over cake, letting it fall down the sides. Let icing set for at least 10 minutes before slicing. Serve on its own, or with a spoonful of Greek yogurt, a dollop of whipped cream, or a scoop of ice cream on top. (You deserve it!)"
    ],
    "title": "Lemon Pound Cake",
    "url": "https://www.bonappetit.com/recipe/lemon-pound-cake"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Paper Towels",
        "Dutch Oven",
        "Tongs",
        "Plate",
        "Chef's Knife",
        "Cutting Board",
        "Spoon",
        "Microplane",
        "Small Bowl",
        "Wooden Spoon",
        "Rimmed Baking Sheet",
        "Vegetable Peeler"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5bae512b618842474b50c8ea/3:2/w_940,c_limit/basically-coconut-chicken-1.jpg",
    "ingredients": [
        {
            "name": "skin-on, bone-in chicken thighs (about 11/2 lb. total)",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "plus 1/2 tsp. kosher salt, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "medium red onions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "2\" piece fresh ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "curry powder, such as garam masala",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "can unsweetened coconut milk",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "small sweet potatoes, scrubbed",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "large unsweetened coconut flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "limes",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "A small handful of cilantro",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Basmati or jasmine rice (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 300\u00b0. Pat 6 bone-in, skin-on chicken thighs dry with paper towels. Moisture is the enemy of well-browned meat, so it's super important to get them as dry as possible before searing them. Season generously on all sides with 1 Tbsp. salt.",
        "Okay, this is going to seem a little bit out there, but trust us: It works. Place a cold, dry large Dutch oven on the stove\u2014no heat yet! Nestle all of your chicken thighs in there, skin side down, so that there is as much skin-to-pan contact as possible (it's fine if they're crowded together). Then turn the heat under the pan to medium. As the pan becomes hotter and hotter, the skin will start to release some of its fat and then get extra crispy and brown, a process that will probably take around 15-20 minutes. (Try not to fuss with the thighs too much while this is happening, just let them be. This is a good time to do some of the prep work outlined in the next few steps.) When the skin is deeply browned\u2014we're only cooking the skin side right now\u2014use tongs to transfer the thighs skin side up to a plate. Turn off the heat under the Dutch oven, but reserve it\u2014we're going to build our braise in it, and we want all of that fat and any browned, stuck-on bits, which will lend richness and flavor to the finished dish.",
        "While chicken is browning, do some prep: First, peel 2 onions and cut them in half through the root end. Slice 3 of the onion halves into 3 wedges each, and set the remaining half aside for later.",
        "Smash 3 garlic cloves with the flat side of a knife and remove the peel.",
        "Using a spoon, peel 2\" piece ginger. (Peeling knobby ginger with a vegetable peeler is a pain, but a spoon can get into all of those little nooks and crannies much more easily. Use a Microplane to finely grate the ginger into a small bowl.",
        "Cook onion wedges in the reserved pot\u2014the same one you seared the chicken in\u2014over medium heat, stirring often, until golden brown in spots and translucent, 4-6 minutes.",
        "Now you're going to start building the base for your braise. First, add your garlic and ginger and cook just until fragrant, about 30 seconds. Add 2 Tbsp. curry powder, stirring to coat until fragrant, a minute or two more. Deglaze the pan by adding a splash of water, vigorously stirring to loosen and dissolve brown bits on bottom of the pot. Add half of coconut milk (shake it well before you open the can, as it can separate!), followed by 1 cup water. Bring the liquid up to a simmer.",
        "Chicken time! Arrange the thighs, skin side up, in the Dutch oven so that the meat is partially submerged in the braising liquid. Cover and transfer to the oven to bake for 30 minutes.",
        "While the chicken does its thing, you're going to make a zippy coconut condiment for spooning over the finished dish. (Who doesn't love a good topping?) Start by spreading 1/2 cup coconut flakes on a rimmed baking sheet and placing it in the oven along with the chicken. Bake coconut until golden brown, about 5 minutes\u2014it'll go fast, so set a timer and keep an eye on it.",
        "Now, finely chop the reserved half onion from earlier and transfer to a small bowl.",
        "Finely grate zest of 1 lime into bowl of chopped onions. There's a ton of flavor in citrus peel, so it's always good to try to find a way to use it if you can. Cut the now-zested lime into wedges and squeeze the juice over onion mixture. Cut remaining lime into 4 wedges and save those for serving later.",
        "Cut off the bottom inch of stem from a small handful of cilantro, then finely chop up the stems until you get to the leaves; reserve leaves for serving. Add stems and toasted coconut to bowl with onion mixture (don\u2019t toss the mixture just yet, otherwise the coconut will get soggy).",
        "Peel 3 sweet potatoes and cut into 2\" pieces.",
        "After 30 minutes, uncover Dutch oven and add potatoes and remaining coconut milk. Use tongs to move things around so that the the vegetables are submerged underneath the chicken thighs, which you want to have arranged skin side up. Return the pot to the oven\u2014uncovered this time\u2014and cook until the sweet potatoes are soft enough that they can be pierced with a knife and the chicken is tender, another 15-30 minutes. (This is a good time to start your rice. If you don't have a rice cooker, this is our go-to stovetop rice cooking method.). After this amount of time, the chicken should be tender, juicy, and nicely cooked, but you can let it go for another 30-45 minutes if you're after a more shreddable, falling-apart tender result.",
        "Meanwhile, toss coconut condiment with 1/2 tsp.salt.",
        "And there you have it! Serve chicken thighs, curry sauce, and veggies over rice. Top with coconut condiment and reserved cilantro leaves, and serve with lime wedges alongside for squeezing.",
        "Do Ahead: Braised chicken can be made 1 day ahead. Cover and chill. Reheat over low heat before serving."
    ],
    "title": "Coconut-Curry Braised Chicken Thighs",
    "url": "https://www.bonappetit.com/recipe/coconut-curry-braised-chicken-thighs"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Chefn-FreshForce-Citrus-Juicer-Lemon/dp/B002XOB0P0?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002XOB0P0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-722-20-Classic-Stainless-Skillet/dp/B00008CM6A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Citrus Juicer",
        "Small Bowl",
        "Microplane",
        "Whisk",
        "Small Skillet",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5babd646801f710b477b6485/3:2/w_940,c_limit/Basically-Roasted-Broccoli-with-Tahni-Sauce-REAL-3.jpg",
    "ingredients": [
        {
            "name": "large head of broccoli with stem",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt",
            "quantity": "2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "lemons",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "tahini",
            "quantity": "5",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "raw sesame seeds",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. (Higher heat = more caramelization, more quickly.) Remove bottom 2\" of tough stem from 1 head of broccoli with a chef\u2019s knife; discard. Cut broccoli crosswise, starting with the stem end (yep, you can eat most of the stem!) into 1/4\" slices. When you reach the crown, slow your slicing so you can push the florets to the side as they begin to fall with each slice. You want to have lots of loose florets. No matter what kinds of veggies you're roasting, you want to cut them into pieces that are about the same size so that they cook at the same(ish) rate.",
        "Transfer broccoli to a rimmed baking sheet. (If you don't have a proper, heavy-duty aluminum half sheet pan, this is a reminder to invest in one ASAP.) Drizzle with 2 Tbsp. oil; season with 1 tsp. salt and toss to coat. If you were interested in adding any spices\u2014think curry powder, chile flakes, fennel seeds\u2014this is the time to do it.",
        "Arrange broccoli on pan in a single layer, spacing so no pieces overlap (this ensures broccoli will roast properly, not just steam). Roast until nicely browned, even charred in spots, and crispy with a bright green interior, 8-10 minutes.",
        "Meanwhile, make your tahini sauce. Cut 1 lemon in half. Using a citrus juicer (or your hands), juice lemon (fish out any seeds) into a small bowl. Cut remaining 1 lemon into wedges; set aside for serving. Peel 1 garlic clove and use a Microplane to grate it into bowl with lemon juice. (We're big fans of grated garlic over here, especially when it comes to dressings and sauces. It's a hell of a lot easier than trying to get a fine, even mince with a knife, and there's no risk of biting into a big chunk of raw garlic later on.)",
        "Add 5 Tbsp. tahini, 1 Tbsp olive oil, 1 tsp. salt, and 1/4 cup hot water and whisk until smooth. Give it a taste: The richness of the tahini and zippiness from the lemon should be nicely balanced, so adjust with more of either if necessary, and don't be afraid to add more salt if the sauce doesn't pop.",
        "Gently toss broccoli by giving pan a shake (or use a spatula). Continue to roast until browned in spots and tender, 5-8 minutes longer. As with all recipes, the amount of time it takes is going to have a lot to do with the equipment you're using\u2014you want that broccoli to have plenty of color on it, so don't be afraid to keep roasting until you get there.",
        "Heat a small skillet over medium. Toast 2 Tbsp. sesame seeds, tossing frequently, until light golden and slightly fragrant, about 2 minutes. Don\u2019t walk away; the seeds will burn quickly! Let cool. (And, FWIW, this recipe will still be good if you skipped the sesame seeds\u2014but if you're going to use them, make sure to toast them, which will make them a lot more flavorful. Cool?)",
        "Transfer broccoli to a platter and drizzle with tahini sauce. Top with sesame seeds and reserved lemon wedges for squeezing over. One of the great things about roasted vegetables is that they're just as delicious room temperature as they are piping hot, so don't stress if the rest of dinner isn't ready yet."
    ],
    "title": "Crispy Roasted Broccoli with Tahini Sauce",
    "url": "https://www.bonappetit.com/recipe/crispy-roasted-broccoli-with-tahini-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Paper Towels",
        "Plate",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Whisk",
        "Platter",
        "Cast Iron Skillet",
        "Tongs",
        "Instant-Read Thermometer",
        "Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b98017dbbf8db43551b7803/3:2/w_940,c_limit/basically-steak-salad-3.jpg",
    "ingredients": [
        {
            "name": "11/2\"-thick boneless New York strip steak (about 12 oz.)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "small shallot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "red wine vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "pint cherry tomatoes",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Persian cucumbers",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "head of butter lettuce",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "unsalted butter",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "sprigs thyme",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "ripe avocado",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Pat steak dry with paper towels and place on a clean plate. Season very generously all over with salt and pepper. (Think four-fingered pinches of salt\u2014rich proteins like steak need a lot more salt than you might think.) Let it sit at room temperature while you prep your other salad components, at least an hour if possible. (Don't worry: It's safe, and a room-temperature steak will cook more evenly than it will straight out of the fridge.)",
        "Salad dressing time! Peel and finely chop 1 shallot and transfer to a medium bowl. Add 1 Tbsp. mustard and 1 Tbsp. vinegar and whisk to combine. Here comes the fun part: Whisking constantly, slowly stream in 5 Tbsp. olive oil until dressing is thick and emulsified. The word \"slowly\" is key here\u2014if you add the oil all at once, you won't get the creamy, nicely-incorporated vinaigrette you're after. Whisk in 1 Tbsp. water to thin the dressing out a bit. Season with salt to taste, and add another splash of vinegar if you like\u2014it should taste good and punchy.",
        "Prep your other salad ingredients. Slice 1 pint cherry tomatoes in half and transfer to a medium bowl. Slice 2 cucumbers into thin coins and transfer to bowl with tomatoes. Separate lettuce leaves and arrange on a large platter. Cover the lettuce with damp paper towels and chill in the fridge until you\u2019re ready to assemble.",
        "Heat a dry cast-iron skillet over medium-high. Pat steak dry again (the salt will have drawn out some moisture). Seriously: You want the meat to be as dry as possible, which is key to getting the handsome, crusty sear you're after. Rub steak with remaining 1 Tbsp. oil. When we're searing things like steak or chops, we like to oil the surface of the meat rather than the surface of the pan\u2014this allows us to use less oil, and also cuts down on (the inevitable) smoke that comes with this kind of cooking. Speaking of which, this is a good time to turn on the vent above your stove, open a window, and/or get ready to (temporarily!!) deactivate your smoke detector .",
        "Using tongs, gently lay steak in preheated pan. Cook undisturbed\u2014as in, resist the urge to futz with it!\u2014until a golden brown crust forms, about 3 minutes. Turn steak and cook on second side for another 3 minutes.",
        "Turn steak to sear around thinner sides and fat cap until browned, then continue to cook 1 minute per side until steak is medium-rare in the center, 3-5 minutes longer. If you have an instant-read thermometer and you\u2019re uncertain about doneness, insert it into the center of the steak and look for a reading of 120-125\u00b0. Continue to cook until you get there.",
        "Remove skillet from heat. Transfer steak to cutting board briefly to rest. Wipe out skillet with a paper towel to remove any blackened oil. Let skillet cool 1-2 minutes, then heat over medium-low. Have a spoon close at hand. Return steak to skillet. Add 2 Tbsp. butter and 2 sprigs thyme and tilt skillet toward you so butter foams and pools along one side. Make sure thyme is swimming in the butter so it can really infuse. Use spoon to scoop up foamy butter and baste over top of steak constantly until butter is fragrant and browned, about 1 minute. Transfer steak to cutting board. It should rest at least 10 minutes\u2014you never want to cut into a steak without resting first, otherwise it will lose a lot of juiciness.",
        "Build your salad: Remove platter of lettuce from refrigerator; season with salt and pepper. (We always like to season our greens before we dress them.) Whisk dressing to combine and drizzle about half over lettuce.",
        "Season tomatoes and cucumbers with salt and pepper. (In case you haven't noticed by now, making sure to season all of your components is key.) Toss with a couple of tablespoons of dressing and arrange in a row along one side of lettuce.",
        "Halve 1 avocado, remove pit, and thinly slice. Fan out slices and arrange over top of lettuce in another row opposite tomatoes and cukes.",
        "Once steak has rested, thinly slice crosswise and shingle slices down across middle of platter. Season steak and avocado with more salt and pepper, then drizzle remaining dressing over avocado and steak. So fancy!"
    ],
    "title": "Steak Salad with Shallot Vinaigrette",
    "url": "https://www.bonappetit.com/recipe/steak-salad-with-shallot-vinaigrette"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Large Pot",
        "Colander",
        "Medium Bowl",
        "Chef's Knife",
        "Dutch Oven",
        "Wooden Spoon",
        "Tongs",
        "Heatproof Measuring Cup"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b9009799915d52d4edc0f73/3:2/w_940,c_limit/basically-pasta-pomodoro-1.jpg",
    "ingredients": [
        {
            "name": "kosher salt, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "garlic cloves",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Pinch of crushed red pepper flakes, plus more",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "basil sprigs, plus leaves for serving",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "spaghetti",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "parmesan, finely grated, divided (about 1 cup)",
            "quantity": "41/2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "unsalted butter",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Fill a large stock pot two-thirds full with water and heat over high to bring to a boil. Once you see the water start to steam, add 3 Tbsp. salt. We know, we know: That looks like a LOT of salt. But salting the pasta water aggressively\u2014it should almost be seawater-salty\u2014is the key to making sure that every noodle is properly seasoned through and through, and is one reason why restaurant pasta tastes better than the stuff you usually make. While you wait for the water, start your sauce.",
        "Open a 28-oz. can of whole peeled tomatoes and drain contents in a colander set over medium bowl. (Whole peeled tomatoes are the only canned tomatoes worth buying, TBH. The diced ones sometimes have weird chemicals added to them to keep the chunks from breaking down. Gross.) Using clean fingers, poke a hole in the tomatoes and shake to drain liquid and seeds from the insides of each tomato, reserving liquid. Shake colander over bowl to separate the solids from all the juices and encourage liquid to drain; set aside.",
        "Smash 4 garlic cloves with the flat side of a chef\u2019s knife forcefully, so garlic breaks up into smaller bits; remove skins. If the cloves are really big, you might need to give them an extra smack to make sure they're broken up, but don't bother chopping\u2014the garlic will infuse into the oil you sizzle it in and break down as the sauce simmers.",
        "Working next to your pasta pot, heat 3 Tbsp. oil in a large Dutch oven over medium. (We like using a Dutch oven or a large, high-sided skillet for cooking sauce and finishing pasta; it's kind of the only thing big enough to toss a whole pound of pasta in without noodles flying everywhere.) Add garlic and cook, stirring often with a wooden spoon, until garlic is golden all over, about 3 minutes.",
        "Stir in a pinch of red pepper flakes, then add drained tomatoes and increase heat to medium-high. The idea here is to concentrate the flavor of those tomato solids before adding the liquid they came in, which will give your sauce a more complex, rounded flavor. Cook, stirring occasionally, until tomatoes are darkened in color, browned and caramelized in spots, and starting to break down, 6-8 minutes. Don't rush this part! If you aren't getting color, let it go for another few minutes. Mash with the back of the wooden spoon to form a coarse paste.",
        "Add reserved tomato liquid to pot and stir to combine. Season with a pinch of salt, throw in 3 basil sprigs, and reduce heat so sauce is bubbling at a simmer. Cook, stirring occasionally, until liquid is reduced and sauce is thick like applesauce, 8-10 minutes. If your water isn\u2019t boiling yet, turn off heat under sauce while you wait. If it is, reduce heat to lowest setting and move on.",
        "Add 1 lb. pasta to pot of water and agitate with tongs to prevent sticking. Cook pasta, tossing occasionally, just until lower end of time range given on the package for al dente. If you're not sure if it's done, fish out a piece and take a nibble\u2014it should still be slightly too crunchy to want to eat because it's going to continue cooking in the tomato sauce. Just before pasta is done, use a heatproof measuring cup to scoop out about 1 cup pasta cooking liquid.",
        "Using tongs, transfer pasta from stock pot into Dutch oven with sauce, allowing water to piggyback on pasta into sauce. (That's right, no draining!) Crank heat under sauce up to medium-high and pour in 1/2 cup reserved pasta cooking liquid. If you've never finished cooking pasta in a pan full of sauce, your life is about to be changed\u2014this process is what ensures that every single noodle is completely coated and infused with saucy goodness, and is pretty much the main difference between a dish of \"meh\" pasta and one that blows your mind.",
        "Cook pasta, tossing constantly, until sauce is clinging to each noodle and any standing liquid is mostly absorbed, about 1 minute. You still want a saucy consistency, but not watery. If things ever start to look a little dry, just add another splash of that pasta cooking water; if they look too wet, just wait a bit for some more liquid to evaporate.",
        "Slowly sprinkle in half of the Parmesan cheese (you want the grainy stuff with the texture of shaky cheese, not Microplaned), tossing constantly, until it has melted into the sauce. Add more pasta water, a couple of tablespoons at a time, to loosen sauce if necessary\u2014it should be plenty saucy while you're incorporating the cheese so it emulsifies into the sauce properly. You want the sauce to ooze but still be thick enough to coat the pasta.",
        "Remove pot from heat and stir in 2 Tbsp. butter until melted. Finishing with a bit of butter is almost always a good idea\u2014it makes the finished dish extra glossy and delicious. (Don't look at us like that\u2014if you think pasta is diet food, you're kidding yourself.)",
        "Using tongs, divide pasta among bowls, then top with remaining cheese and basil leaves. Top with red pepper flakes and an extra drizzle of oil, if you feel. And there you have it: saucy, glossy Basically Spaghetti Pomodoro. Give yourself a pat on the back, and kiss the jarred stuff goodbye."
    ],
    "title": "Basically Spaghetti Pomodoro",
    "url": "https://www.bonappetit.com/recipe/basically-spaghetti-pomodoro"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Spatula",
        "Medium Bowl",
        "Wooden Spoon",
        "Microplane"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b8806cd5970fa63e2600ad4/3:2/w_940,c_limit/basically-zucchini-flatbread-2.jpg",
    "ingredients": [
        {
            "name": "pizza dough",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "zucchini (about 3 medium)",
            "quantity": "11/2",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "large red onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "fresh ricotta",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "finely grated parmesan (about 11/4 oz.)",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "mint leaves",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        }
    ],
    "steps": [
        "Place racks on upper and lower third of oven; preheat to 450\u00b0. Let 1 lb. pizza dough sit in its bag or container until it reaches room temperature, at least 30 minutes\u2014room temp dough is much easier to stretch. Prepare your vegetables while you wait.",
        "Start by trimming stem end from 11/2 lb. zucchini, then slice crosswise into 1/4\"-thick coins.",
        "Peel 1 onion and thinly slice crosswise into rings to match thickness of zucchini.",
        "Toss zucchini, onion, and 2 Tbsp. oil on a rimmed baking sheet; season generously with salt. Spread out in an even layer into corners of pan, taking care not to pile into the middle. Roast on top rack, tossing with a spatula once halfway through, until vegetables are well browned all over and tender, 25-30 minutes. Let cool.",
        "Place dough in the center of another large baking sheet and drizzle with 1 Tbsp. oil, then turn to coat. Using your fingers, stretch dough outward from the center all the way to edges of pan. If dough stubbornly springs back, cover with plastic wrap and let rest a few minutes. You may need to do this a few times until your dough cooperates.",
        "Drizzle dough with 1 Tbsp. oil and use clean hands to spread oil all across surface. Season dough lightly with salt.",
        "Bake dough on bottom rack until beginning to brown and crisp on the bottom, 7-9 minutes.",
        "Mix 2 cups ricotta, 1/4 cup Parmesan, 2 Tbsp. oil, and 1/2 tsp. salt in a medium bowl. Using a Microplane, finely grate zest from half of the lemon into bowl with ricotta mixture. Peel 1 garlic clove and use Microplane to grate into bowl. Mix to combine.",
        "Dollop ricotta mixture generously over dough. Top with roasted veggies, distributing evenly.",
        "Return flatbread to top third of oven and bake until ricotta starts to ooze into vegetables, 6-8 minutes.",
        "Immediately grate zest from remaining half of lemon across pizza. Sprinkle 1/2 cup mint leaves and 1/2 tsp. red pepper flakes over, then squeeze one half of the zested lemon across surface. Drizzle with oil before slicing."
    ],
    "title": "Caramelized Zucchini Flatbread",
    "url": "https://www.bonappetit.com/recipe/caramelized-zucchini-flatbread"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-719-16-Classic-Stainless-Saucepan/dp/B00008CM69?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/KitchenAid-KHB2351CU-3-Speed-Hand-Blender/dp/B005MMNBBQ?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005MMNBBQ?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Freezer-Baking/dp/B019FHD46A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B019FHD46A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Rimmed Baking Sheet",
        "Parchment Paper",
        "Chef's Knife",
        "Cutting Board",
        "Whisk",
        "Medium Saucepan",
        "Wooden Spoon",
        "Immersion Blender",
        "Medium Bowl",
        "8x8\" Baking Dish",
        "Plastic Wrap"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b83f86662f6f00b95ee1475/3:2/w_940,c_limit/basically-banana-pudding-1.jpg",
    "ingredients": [
        {
            "name": "plus 2 tbsp. sugar, divided",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground cinnamon, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "medium bananas (yellow but not yet browning)",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "cornstarch",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "half-and-half, divided",
            "quantity": "21/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsalted butter",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "vanilla extract",
            "quantity": "11/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "sour cream",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "graham crackers",
            "quantity": 15,
            "type": "unitless"
        }
    ],
    "steps": [
        "Place rack in bottom third of oven; preheat to 450\u00b0. Line a large rimmed baking sheet with parchment paper. Sprinkle 1/4 cup sugar and 1/2 tsp. cinnamon evenly over parchment.",
        "Using the tip of a knife, poke holes all over 6 bananas, then cut in half lengthwise. Arrange bananas cut side down on parchment, moving them around so cut sides pick up as much cinnamon-sugar as possible.",
        "Arrange bananas in a single layer and roast until skins are deep brown and sugar seeping from underneath bananas is deep amber, 15-20 minutes. If any liquid leaches out of the bananas, discard. Let bananas sit until cool enough to handle.",
        "Meanwhile, whisk 3 Tbsp. cornstarch, 1/4 tsp. salt, and 1/2 cup sugar in a medium saucepan. Very slowly stream in 21/2 cups half-and-half, whisking constantly, until lump-free. Cook over medium heat, whisking constantly and vigorously, until pudding is bubbling and thick enough that wires of whisk leave a trail, 7-10 minutes.",
        "Remove from heat. Stir in 1 Tbsp. butter and 11/2 tsp. vanilla until smooth. Let cool slightly.",
        "Scrape 4 caramelized banana halves into pot with pudding; discard skins. (Save the remaining 8 halves for layering and decorating the top.) Pure\u0301e with an immersion blender or transfer to a food processor and process until smooth and creamy. Let cool while you prepare your other ingredients. The pudding should be warm but not hot when assembling (you can also make the pudding ahead of time, chill, and assemble cold).",
        "Whisk 11/2 cups sour cream and remaining 2 Tbsp. sugar and 1/2 tsp. cinnamon in a medium bowl until sugar is dissolved (this could take several minutes).",
        "Remove remaining 8 bananas from their skins (you may need to use a butter knife to help scrape bananas from parchment paper).",
        "Time to assemble: Lay 4-5 graham crackers in a single layer in an 8x8\" baking dish, then spoon about one-third of sour cream mixture evenly over crackers.",
        "Spread half of banana pudding over sour cream, then top with 3 banana halves.",
        "Repeat with 4-5 more graham crackers, half of remaining sour cream, and all of remaining banana pudding (do not add more bananas).",
        "Top with 4-5 more crackers, then spread remaining sour cream mixture over, working to edges of dish.",
        "Arrange remaining 5 banana halves decoratively over.",
        "Cover and chill pudding for at least 4 hours and up to overnight to meld the flavors.",
        "Do Ahead: Pudding can be made 3 days ahead. Cover with plastic, pressing directly onto surface, and keep chilled."
    ],
    "title": "Caramelized Banana Pudding",
    "url": "https://www.bonappetit.com/recipe/caramelized-banana-pudding"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Potato-Masher-Cushioned/dp/B00004OCJK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Cast Iron Skillet",
        "Tongs",
        "Cutting Board",
        "Chef's Knife",
        "Medium Bowl",
        "Potato Masher",
        "Wooden Spoon",
        "Small Bowl",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b75977fbb4c7973c8ddb798/3:2/w_940,c_limit/basically-corn-salsa-01.jpg",
    "ingredients": [
        {
            "name": "medium ears of corn",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "medium poblano chile",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium jalapen\u0303o or Fresno chile",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "1/2 small red onion",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "large ripe beefsteak tomato",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "1/4 bunch cilantro",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Tortilla chips (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Remove husks and silk from 2 ears of corn. Cook corn and 1 poblano chile in a dry medium cast-iron skillet over high heat, turning occasionally, until corn is charred in spots and chile is blistered all over, 10-14 minutes.",
        "Transfer corn and chile to a cutting board and let cool for a minute or two. Lay corn flat and slice along one side to shave off kernels. Repeat, rotating cob, until all kernels have been cut off. Discard cobs. Transfer corn to a medium bowl.",
        "Crush corn with a potato masher or wooden spoon to help release starch and juices, which will help to thicken the salsa slightly. (Also a good way to get out a little aggression.)",
        "Cut around poblano chile stem to remove, then slice into flesh lengthwise to open up chile like a book. Scrape out seeds and ribs, flip over, then use the dull edge of your knife to scrape off charred skin and discard.",
        "Coarsely chop chile and add to bowl with corn.",
        "Do a little bit more knife work: Cut stem end off of 1 jalapen\u0303o, then halve lengthwise. Pull out ribs and seeds, then finely chop flesh. Add to bowl with corn.",
        "Finely chop 1/2 red onion and add to bowl as well. Season with 1/2 tsp. salt and give it all a good mix with a large spoon.",
        "Core 1 tomato, then cut in half through its equator. Squeeze tomato halves over a bowl or trash to push out seeds and watery parts and discard. Chop tomato flesh and gently fold into salsa.",
        "Pick 1/4 cup cilantro leaves from stems. Very finely chop leftover stems and fold into salsa along with leaves.",
        "Cut 1 lime in half and squeeze with your hands into a small bowl. Measure out 2 Tbsp. and add to corn mixture. Taste and season with more salt. Mix one more time to combine.",
        "Arrange tortilla chips on a platter. Serve corn salsa alongside.",
        "Do Ahead: Corn salsa, without cilantro, can be made 1 day ahead. Cover and chill. Stir in herbs right before serving."
    ],
    "title": "Corn Salsa",
    "url": "https://www.bonappetit.com/recipe/corn-salsa"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Paper Towels",
        "Medium Bowl",
        "Small Bowl",
        "Tongs",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Aluminum Foil",
        "Pastry Brush"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b6c6f4673629f37bbbe94d5/3:2/w_940,c_limit/oven-barbecued-chicken-01.jpg",
    "ingredients": [
        {
            "name": "pieces skin-on, bone-in chicken thighs and/or drumsticks (about 3 lb.)",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "light brown sugar",
            "quantity": "11/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "ground cumin",
            "quantity": "11/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "freshly ground black pepper, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "sweet paprika",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "garlic powder",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "medium onions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "apple cider vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "store-bought barbecue sauce",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Arrange a rack in top third of oven; preheat to 350\u00b0. Pat 8 chicken thighs and/or legs dry with paper towels, then transfer to a medium bowl.",
        "Toss 3 tsp. salt, 11/2 tsp. brown sugar, 11/2 tsp. cumin, 1 tsp. pepper, 1 tsp. paprika, and 1 tsp. garlic powder in a small bowl. Sprinkle entire spice rub over chicken in bowl. Toss with tongs until pieces are coated.",
        "Peel and halve 2 onions through the root end. Place onion cut sides down on cutting board, then thinly slice lengthwise.",
        "Cover a rimmed baking sheet with foil. Transfer onion to baking sheet and drizzle with 2 Tbsp. oil; season with more salt and pepper. Toss to coat.",
        "Spread onion mixture on baking sheet and place chicken legs over skin side up, spacing evenly.",
        "Roast chicken on top rack until skin is rendered and meat is tender all the way to the bone, 40-45 minutes. Turn on broiler and continue to roast until chicken skin is blistered and crisp in spots, 2-4 minutes depending on the strength of you broiler. Remove from oven and let chicken rest 5 minutes to allow juices to settle.",
        "Stir 1 Tbsp. vinegar and 1 cup barbecue sauce in a small bowl with a pastry brush.",
        "Turn chicken pieces over with tongs. Push onions toward center of baking sheet to form a pile. Paint a generous layer of barbecue sauce over surface of chicken. Using tongs, arrange chicken over onions. Broil until sauce is caramelized in spots, 2-4 minutes.",
        "Remove baking sheet from oven and turn chicken one more time, placing in same position as before, only sauced side down (the skin should be facing up). Paint skin sides of chicken generously with barbecue sauce mixture (you most likely won\u2019t use all of it). Return to top rack and broil until skin is bubbling and charred in spots, about 4 minutes.",
        "Let rest 5-10 minutes. Serve chicken over onions with remaining barbecue sauce mixture."
    ],
    "title": "Oven-Barbecued Chicken",
    "url": "https://www.bonappetit.com/recipe/oven-barbecued-chicken"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Flexible Metal Spatula",
        "Medium Bowl",
        "Spoon",
        "Microplane",
        "Cast Iron Skillet",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b6315f9dbdc967b93bc1ac6/3:2/w_940,c_limit/basically-stuffed-eggplant-2.jpg",
    "ingredients": [
        {
            "name": "medium globe eggplants (about 1 lb. each)",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided, plus more for drizzling",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "garlic cloves, divided",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "small onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "parsley leaves with tender stems",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "whole-milk plain yogurt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground beef",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "ground cumin",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "pomegranate arils (about 3 oz.)",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. Trim stem end off 2 eggplants, then poke holes all over. Cut both eggplants in half lengthwise. Using the tip of the knife, score a shallow 1\"x1\" crosshatch pattern into 4 cut sides.",
        "Place eggplant on a rimmed baking sheet and drizzle with 3 Tbsp. oil. Toss eggplant with clean hands to coat. Season generously on all sides with salt and pepper. Arrange halves cut sides down on baking sheet.",
        "Roast eggplant until undersides are deep golden brown, 20-25 minutes. Using a flexible spatula, turn halves cut side up, scraping pan to release eggplant. Continue to roast until very tender and flesh is collapsed, another 15-20 minutes. Remove from oven and let rest until cool enough to handle.",
        "While eggplant is roasting, prep the filling ingredients and yogurt sauce. First, peel and set aside 1 garlic clove. Smash remaining 4 garlic cloves with the flat side of your knife and remove loosened skin.",
        "Peel and finely chop 1 onion.",
        "Coarsely chop 1/2 cup parsley and set aside for serving.",
        "Stir 1/2 cup yogurt and 1 Tbsp. oil in a medium bowl. Using a microplane, grate 1 reserved garlic clove into bowl; season with salt and pepper.",
        "Time to make the filling. Heat remaining 2 Tbsp. oil in a large skillet, preferably cast iron, over medium-high. When oil is shimmering, add 1 lb. beef and press into a single layer with flexible metal spatula. Season with salt and pepper.",
        "Cook undisturbed until beef is browned and crispy on one side, about 4 minutes. Using spatula, toss beef, breaking up into small pieces, then push to one side of skillet.",
        "Add onion and smashed garlic to empty side of skillet and cook, tossing just onion and garlic often, until onion is translucent and mixture is browned in spots, about 3 minutes.",
        "Add 1/2 tsp. cumin and toss to combine with onion mixture, then toss everything with beef to combine; season with a bit more salt. Continue to cook, tossing constantly and breaking up meat even more, until beef is cooked through and thoroughly mixed, about 1 minute. Remove from heat and let cool slightly.",
        "Smear yogurt mixture across bottom of a platter. Arrange warm eggplant cut sides up over top, allowing any moisture to drip off of eggplant before placing over yogurt. Spoon beef mixture over eggplant.",
        "Scatter 1/2 cup pomegranate arils over beef. Sprinkle reserved parsley over entire platter. Drizzle with a bit more oil before serving."
    ],
    "title": "Stuffed Eggplant with Crispy Beef",
    "url": "https://www.bonappetit.com/recipe/stuffed-eggplant-with-crispy-beef"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-719-18-Classic-Stainless-Saucepan/dp/B00008CM6C?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Rimmed Baking Sheet",
        "Fork",
        "Medium Saucepan with Lid",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Platter",
        "Paper Towels",
        "Tongs",
        "Whisk"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b5f825e88c6c02d0713fc76/3:2/w_940,c_limit/basically-summer-salmon-nicoise-1.jpg",
    "ingredients": [
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "8",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "skinless salmon fillet",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "green beans",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "cherry tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small shallot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "head of butter lettuce",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large eggs, room temperature",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "red wine vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "A pinch of sugar",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "nic\u0327oise or other black olives",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Arrange a rack in center of oven; preheat to 300\u00b0. Pour 1 Tbsp. oil into center of a rimmed baking sheet, then arrange 1 lb. salmon over oil. Season salmon all over with salt and pepper, then drizzle with another 1 Tbsp. oil.",
        "Roast salmon until flesh flakes in the thickest part of the fillet with pressed gently, 30-35 minutes. Meanwhile, fill a medium saucepan three-quarters full with water. Add several generous pinches of salt and bring to a boil, covered, over medium-high heat.",
        "While salmon is cooking and water is coming to a boil, focus on the rest of your salad prep. First, trim stem end off of 8 oz. green beans.",
        "Cut 1 cup tomatoes in half.",
        "Peel and finely chop 1 shallot. Transfer to a medium bowl; set aside.",
        "Separate leaves from 1 head of lettuce and arrange across a large platter. Cover with damp paper towels and chill until ready to serve.",
        "When water is boiling, add green beans and cook until tender but still retain some snap, about 2 minutes. As you wait for the green beans to cook, fill another medium bowl halfway with ice water. Using tongs, remove green beans immediately (but leave boiling water right where it is) and transfer to bowl with ice water. Leave green beans there for 15-20 seconds, or just long enough to chill them completely, then remove from water and pat dry; set aside. Keep the ice water for cooking the eggs.",
        "Add 4 eggs to saucepan and cook exactly 8 minutes. Transfer to ice water bath and let cool 2 minutes. Peel eggs, keeping them submerged in ice bath as you work. Pat eggs dry and transfer to cutting board.",
        "Time to make your dressing: Add 1 Tbsp. mustard, 1 Tbsp. vinegar, and a pinch of sugar to bowl with shallot; season with salt and a generous amount of pepper. Whisking constantly, slowly stream in remaining 6 Tbsp. oil until you have a thick, emulsified dressing.",
        "Remove platter with lettuce from fridge and drizzle with about one-third of dressing. Arrange green beans, tomatoes, and 1/2 cup  olives over lettuce. Cut eggs in half and tuck into gaps on platter.",
        "Using your hands or a fork, flake off large pieces of salmon and arrange over salad.",
        "Drizzle platter with remaining dressing. Season with salt and pepper."
    ],
    "title": "Summer Salmon Ni\u00e7oise",
    "url": "https://www.bonappetit.com/recipe/summer-salmon-nicoise"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Paper Towels",
        "Large Skillet",
        "Tongs",
        "Plate",
        "Chef's Knife",
        "Cutting Board",
        "Wooden Spoon",
        "Instant-Read Thermometer",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b55fc3b33be6c2027ec1cf2/3:2/w_940,c_limit/basically-one-skillet-lemony-chicken-1.jpg",
    "ingredients": [
        {
            "name": "skin-on, bone-in chicken thighs (about 2 lb. total)",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "plus 1/4 cup extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "fennel bulb",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium shallots",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "large heirloom tomato or beefsteak tomato",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Toasted bread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in top third of oven; preheat to 425o. Pat 6 chicken thighs dry with paper towels; season all over with salt.",
        "Place a large ovenproof skillet on stovetop and pour in 2 Tbsp. oil. Transfer chicken thighs to skillet, skin side down, and heat over medium. (That's right: Those chicken thighs are going into a cold pan, and then you turn the heat on. Trust!) Cook, rotating skillet to encourage even browning, until opaque around the edges and skin is deeply golden brown, 8-11 minutes. Transfer skin side up to a plate.",
        "Meanwhile, do some prep: First, remove fennel fronds from 1 fennel bulb and reserve for making the sauce. Cut fennel head in half lengthwise. Place halves cut side down on cutting board, then cut each half into 1/2\" wedges.",
        "Peel and slice 2 shallots into quarters lengthwise.",
        "Cut 1 tomato crosswise into 1/2\" rounds.",
        "Trims ends off 1 lemon. Cut half of the lemon into thin rounds (about 1/8\"). Reserve remaining half of lemon for later.",
        "Adjust heat to medium-high and add sliced fennel, shallots, and lemon rounds to skillet. Cook, stirring occasionally, until fennel just begins to soften, about 4 minutes. Season with salt and pepper and give mixture another stir. Remove skillet from heat.",
        "Arrange tomato rounds and chicken over fennel mixture; season with salt and pepper.",
        "Transfer skillet to oven and roast until chicken thighs are cooked through (an instant-read thermometer inserted into thickest part near the bone should register 165\u00b0), juices run clear, and vegetables begin to caramelize around edges of pan, 16-20 minutes. Carefully remove skillet from oven and let rest 5 minutes.",
        "While chicken is roasting, finely chop reserved fennel fronds until you have about 1/4 cup.",
        "Squeeze juice from reserved lemon half into a small bowl. Add chopped fronds to bowl and stir in remaining 1/4 cup oil; season with salt and pepper.",
        "Spoon fennel oil over chicken and serve with toast alongside."
    ],
    "title": "One-Skillet Lemony Chicken with Fennel and Tomatoes",
    "url": "https://www.bonappetit.com/recipe/one-skillet-lemony-chicken-with-fennel-and-tomatoes"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Hamilton-Beach-Processor-Scraper-70730/dp/B008J8MJIQ?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008J8MJIQ?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Small Saucepan",
        "Food Processor",
        "Pie Pan",
        "Whisk",
        "Medium Bowl",
        "Chef's Knife",
        "Sieve",
        "Glass Measuring Cup",
        "Spoon",
        "Microplane"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b4caf4f044d361e20d3bf10/3:2/w_940,c_limit/frozen-margarita-pie-2.jpg",
    "ingredients": [
        {
            "name": "unsalted butter",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "graham crackers",
            "quantity": 10,
            "type": "unitless"
        },
        {
            "name": "sugar",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt. divided",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "chilled heavy cream",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "limes, divided",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "can sweetened condensed milk",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "tequila blanco",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Melt 6 Tbsp. butter in a small saucepan over medium heat. Let cool slightly.",
        "Crumble 10 graham crackers into the bowl of a food processor. Add 3 Tbsp. sugar, 1/4 tsp. salt, and melted butter to bowl and process until mixture resembles wet sand.",
        "Transfer graham cracker mixture to a shallow 9\" pie pan. Using a measuring cup, press firmly into bottom and up sides of dish. Freeze 20 minutes.",
        "Meanwhile, whisk 3/4 cup heavy cream in a medium bowl until cream begins to thicken to the point you see ripples and stiff peaks begin to form, 3-5 minutes.",
        "Cut 4 limes in half and juice into a fine-mesh sieve set over a glass measuring cup (you should have about 1/2 cup juice). Pour lime juice into another medium bowl and whisk in 14 oz. condensed milk, 3 Tbsp. tequila, and remaining 1/4 tsp. salt until smooth.",
        "Fold half of whipped cream into lime juice mixture, carefully folding under and over while turning the bowl. Add remaining whipped cream and continue to fold until no streaks remain.",
        "Remove pie pan from freezer and pour in filling. Using the back of a spoon, gently spread filling to edge of crust.",
        "Using a microplane, zest half of the remaining lime over pie.",
        "Freeze pie at least 8 hours, or preferably overnight."
    ],
    "title": "Frozen Margarita Pie",
    "url": "https://www.bonappetit.com/recipe/frozen-margarita-pie"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Medium Bowl",
        "Spatula",
        "Small Bowl",
        "Microplane",
        "Spoon",
        "Chef's Knife",
        "Cutting Board",
        "Large Skillet",
        "Aluminum Foil"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b4362282264d46863323801/3:2/w_940,c_limit/honey-chipotle-shrimp-tacos.jpg",
    "ingredients": [
        {
            "name": "adobo sauce from 1 can chipotle chiles in adobo",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "honey",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "medium shrimp, peeled, deveined",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "1/4 head of green cabbage",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "cilantro leaves with tender stems",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small red onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "corn tortillas",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "vegetable oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Stir 2 Tbsp. adobo sauce and 2 Tbsp. honey in a medium bowl until combined. Add 1 lb. shrimp; season with salt. Toss until shrimp is evenly coated with sauce. Set aside while you prep your toppings.",
        "Mix 1/2 cup mayonnaise with 2 Tbsp. water in a small bowl. Grate 1 garlic clove into bowl, season with salt, and stir to combine.",
        "Thinly slice 1/4 head of cabbage into very thin strips.",
        "Coarsely chop 1 cup cilantro.",
        "Peel and trim 1 onion. Cut in half lengthwise, then thinly slice.",
        "Cut 1 lime in half and squeeze out juice from both halves into another small bowl. Add sliced onion and a pinch of salt. Massage with your hands until onion begins to soften.",
        "Heat a large nonstick skillet over medium-high. Working with one at a time, warm tortilla in skillet until pliable and starts to darken, 30-45 seconds per side. Transfer tortillas to a piece of foil and wrap tightly to keep warm.",
        "Return skillet to medium-high heat and pour in 2 Tbsp. oil. Once oil begins to shimmer, add shrimp mixture and cook, stirring occasionally, until shrimps turn pink and cooked through, 1-2 minutes. Remove skillet from heat.",
        "Unwrap tortillas and build tacos with shrimp, cabbage, garlic crema, cilantro, and onions."
    ],
    "title": "Honey-Chipotle Shrimp Tacos",
    "url": "https://www.bonappetit.com/recipe/honey-chipotle-shrimp-tacos"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Parchment Paper",
        "Spatula",
        "Medium Bowl",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b312c1b0bf43c771217199c/3:2/w_940,c_limit/slow-roasted-onion-and-garlic-dip.jpg",
    "ingredients": [
        {
            "name": "mixed onions (such as sweet, yellow, and/or red)",
            "quantity": "11/2",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "garlic cloves, unpeeled",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "plain whole-milk greek yogurt",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "fresh lemon juice",
            "quantity": "2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "bunch radishes",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Potato chips and cayenne pepper (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 400o. Peel and trim ends off 11/2 lb. mixed onions. Cut in half lengthwise. Place halves cut side down on cutting board, then thinly slice.",
        "Line a rimmed baking sheet with parchment paper. Toss onion and 4 garlic cloves with 1/4 cup oil and 2 Tbsp. water until evenly coated. Season with salt and toss again until well coated.",
        "Bake, tossing and stirring onions every 10 minutes, until all onions are golden brown and softened, 40-50 minutes total (some onions will brown more than others but that\u2019s okay!). Let cool.",
        "Transfer onions and garlic to a cutting board and squeeze out garlic cloves from peel. Using the flat side of a chef\u2019s knife, smash garlic cloves to a paste. Transfer to a medium bowl.",
        "Finely chop caramelized onions and transfer to bowl with garlic.",
        "Add 11/2 cups yogurt and 2 tsp. lemon juice; season with salt and lot of pepper. Stir to combine.",
        "Cut 1 bunch radishes in half and arrange on a platter. Sprinkle dip with cayenne pepper. Serve radishes and chips alongside."
    ],
    "title": "Slow-Roasted Onion Dip",
    "url": "https://www.bonappetit.com/recipe/slow-roasted-onion-dip"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.chicagometallicbakeware.com/bakeware-25/product-series/commerical-ii/cookie-jelly-roll-pans/set-of-2-small-jelly-roll-pans.html",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Large Bowl",
        "Small Rimmed Baking Sheet",
        "Microplane",
        "Cutting Board",
        "Chef's Knife",
        "Whisk",
        "Vegetable Peeler",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b27d9f35a709f41a84c0f86/3:2/w_940,c_limit/basically-caesar-salad.jpg",
    "ingredients": [
        {
            "name": "1/2 medium boule or loaf sourdough bread (about 10 oz.)",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "plus 1/3 cup extra-virgin olive oil",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "(or more) oil-packed anchovy fillet, drained",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "fresh lemon juice",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "mayonnaise",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "piece parmesan",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "2-3 romaine hearts",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. Tear 1/2 boule sourdough bread into 1\" bite-sized pieces, using only the fluffy white interior and discarding the crusts (you should have about 3 cups).",
        "Place bread in a large bowl and drizzle with 3 Tbsp. oil. Season with salt and pepper and toss to coat.",
        "Transfer bread to a small rimmed baking sheet and arrange in a single layer (reserve bowl for making the salad). Bake, shaking sheet to toss once halfway through, until croutons are golden and crispy all over but still squishable in the center, 10-12 minutes. Let cool. (You\u2019re done with the oven, so shut it off.)",
        "While croutons bake and cool, assemble your dressing. Finely grate 1 garlic clove into reserved bowl with a microplane.",
        "Place 1 anchovy (if you\u2019re a fan of anchovies and want to taste them in the dressing, use 2) on a cutting board and mash into a paste with the flat side of a chef's knife. Add to bowl with garlic.",
        "Whisk 2 Tbsp. mustard, 2 Tbsp. lemon juice, and 2 Tbsp. mayonnaise into bottom of bowl until mixture is incorporated.",
        "Whisking constantly, slowly stream in remaining 1/3 cup oil. Continue whisking vigorously until you have a thick, creamy, smooth dressing.",
        "Using a vegetable peeler, shave 3 oz. Parmesan into shards, then break up any larger pieces with your fingertips.",
        "Tear 2 romaine hearts into bite-sized pieces directly into bowl with dressing. Season lightly with salt, then generously with pepper.",
        "Add about three-quarters of cheese and about three-quarters of croutons to salad and toss gently with clean hands until lettuce is coated. If romaine hearts were small and salad looks a little overdressed, add some of the remaining romaine heart.",
        "Transfer salad to a platter. Top with remaining cheese and croutons."
    ],
    "title": "Lazy Caesar Salad",
    "url": "https://www.bonappetit.com/recipe/lazy-caesar-salad-easy"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Chefn-FreshForce-Citrus-Juicer-Lemon/dp/B002XOB0P0?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002XOB0P0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-HM-50-Power-Advantage-5-Speed/dp/B000TVWFEY?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000TVWFEY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Small Bowl",
        "Citrus Juicer",
        "Electric Mixer",
        "Large Bowl",
        "Medium Bowl",
        "Plastic Wrap",
        "Spoon",
        "Platter",
        "Whisk"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b1ecaeeda98df309ec6e7a8/3:2/w_940,c_limit/blackberry-icebox-cake.jpg",
    "ingredients": [
        {
            "name": "pints blackberries, divided",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "blackberry jam",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "chilled heavy cream",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "powdered sugar",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Pinch of kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "vanilla wafers, divided",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        }
    ],
    "steps": [
        "Measure out 2 cups blackberries from 2 pints. Slice berries in half lengthwise and transfer to a medium bowl. (Save remaining berries for decorating later.)",
        "Add 1/2 cup blackberry jam to bowl with berries. Using a citrus juicer, juice 1 lemon over berry mixture. Let sit 10 minutes.",
        "Using an electric mixer, beat 2 cups heavy cream in a large bowl, starting on low speed and increasing to high, until soft peaks form.",
        "Beat in 1/4 cup powdered sugar and a pinch of salt just to combine.",
        "Line a medium bowl (6-cup capacity) with plastic wrap, pressing into bottom and up sides and leaving plenty of overhang. Line the bottom of bowl with a layer of vanilla wafers.",
        "Spoon about 1/4 cup berry mixture over wafers. Scoop 11/2 cups whipped cream into a small bowl; cover and save in fridge for later. Spread 1/2 cup of the remaining whipped cream evenly over wafer and berry layers. Repeat layers with wafers (breaking to fit as needed\u2014no one will know), blackberry mixture, and whipped cream, using more for each layer as the bowl gets wider, until you run out of all the components.",
        "Bring up plastic overhang to cover and chill at least 24 hours.",
        "Unwrap plastic from top of cake and place a large cake stand or platter firmly over it. Flip over and lift bowl away; peel away plastic wrap. (Ta-da!)",
        "Using a whisk, beat reserved whipped cream back to soft peaks, then use a spoon to dollop cream all over cake and spread around evenly.",
        "Cut reserved berries in half lengthwise and arrange them on top.",
        "Slice cake into 8 pieces to serve.",
        "Do Ahead: Cake can be assembled 2 days ahead and can also be unmolded and covered in cream 1 hour ahead; either way, keep in the fridge until the last minute."
    ],
    "title": "Blackberry Icebox Cake",
    "url": "https://www.bonappetit.com/recipe/blackberry-icebox-cake"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Potato-Masher-Cushioned/dp/B00004OCJK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJK?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Large Pot",
        "Spider",
        "Large Bowl",
        "Wooden Spoon",
        "Chef's Knife",
        "Cutting Board",
        "Microplane",
        "Potato Masher"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b1557b18adf21470dda6775/3:2/w_940,c_limit/creamy-pasta-with-peas-and-mint.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "bag frozen peas (no need to thaw)",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "medium shell pasta",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "mint leaves, divided",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "heavy cream",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "store-bought grated parmesan",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Bring a large pot filled with water to a boil over high heat. When water starts to steam, add a palmful of salt.",
        "When water has reached a rolling boil, add 10 oz. frozen peas. Cook until peas start to float and are tender, about 3 minutes. Using a spider or slotted spoon, transfer peas to a large bowl, allowing water to drain back into pot.",
        "Bring water back to a boil and add 1 lb. pasta shells, stirring once or twice with a wooden spoon to prevent sticking. Cook according to package instructions until pasta is tender but still al dente.",
        "While pasta is cooking, assemble your pea mixture. Start by setting aside about 1/4 cup mint leaves for serving; finely chop remaining 1/4 cup mint. Add chopped mint to bowl with peas.",
        "Using a microplane, finely grate 1 garlic clove and zest of 1 lemon into bowl with pea mixture. Reserve zested lemon for serving.",
        "Add 1/2 cup cream, 2 Tbsp. oil, and 1/2 cup cheese to bowl with pea mixture and mash with a potato masher to break up peas. You want a mix of whole peas and smooth, mushy parts.",
        "When pasta is finished cooking, transfer to bowl with peas with spider (it\u2019s okay if some pasta cooking liquid piggybacks into bowl\u2014in fact, it\u2019s a good thing!).",
        "Season mixture generously with pepper and more salt, if needed, and toss with a wooden spoon vigorously so hot pasta melts cheese and thickens to a creamy sauce.",
        "Divide pasta among bowls. Top with remaining cheese and reserved mint. Drizzle with oil.",
        "Cut reserved lemon into wedges and serve alongside for squeezing over."
    ],
    "title": "Creamy One-Pot Pasta with Peas and Mint",
    "url": "https://www.bonappetit.com/recipe/creamy-one-pot-pasta-with-peas-and-mint"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Cutting Board",
        "Paper Towels",
        "Chef's Knife",
        "Medium Bowl",
        "Tongs",
        "Glass Measuring Cup",
        "Spoon",
        "Large Skillet",
        "Flexible Metal Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b082b97cb25b938fafaa8de/3:2/w_940,c_limit/beef-snap-pea-and-asparagus-stir-fry.jpg",
    "ingredients": [
        {
            "name": "sirloin steak",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "cornstarch",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "soy sauce, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "vegetable oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "sugar snap peas",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "bunch asparagus",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "scallions",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "2\" piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "mirin (japanese rice wine)",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "oyster sauce",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unseasoned rice vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "cooked white rice",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Place 1 lb. sirloin steak on a cutting board and pat dry with paper towels. Slice meat crosswise as thinly as possible.",
        "Transfer steak to a medium bowl and add 1 Tbsp. cornstarch, 1 Tbsp. soy sauce, and 1 Tbsp. vegetable oil. Toss with tongs until meat is evenly coated.",
        "Prep the rest of your ingredients: Trim ends of 8 oz. snap peas and remove any strings; transfer to another medium bowl. Snap woody ends off of 1 bunch asparagus and discard. Cut asparagus crosswise into 1\" pieces; transfer to bowl with snap peas. Trim both ends of 6 scallions and set aside 2 scallions for serving. Cut 4 remaining scallions crosswise into 1\" pieces and add to bowl with asparagus and snap peas. Scrub 2\" piece ginger under running water, then slice crosswise as thinly as possible; add to bowl with the other veg.",
        "Combine 3 Tbsp. mirin, 1/4 cup oyster sauce, 2 Tbsp. rice vinegar, and remaining 1 Tbsp. soy sauce in a glass measuring cup and stir with a spoon to incorporate.",
        "Heat 2 Tbsp. vegetable oil in a large skillet, preferably stainless steel, over medium-high. When oil shimmers across surface of skillet, add vegetable mixture. Cook, shaking skillet often, just until asparagus are tender but still retain a hint of crunch, about 3 minutes. Return vegetables to original bowl.",
        "Heat remaining 1 Tbsp. vegetable oil in skillet over medium-high. Add steak, arranging slices in a single layer. Cook, undisturbed, until juices start to pool on surface of meat and underside is browned, about 3 minutes. Using a thin metal spatula, scrape bottom of skillet and loosen meat.",
        "Immediately add cooked vegetables and sauce to skillet and cook, tossing constantly, until meat is fully cooked and sauce is thick and bubbling, 1-2 minutes more.",
        "Remove from heat and let cool for a minute or two. Season stir-fry lightly with salt. Divide 2 cups cooked rice among plates. Spoon stir-fry over. Thinly slice reserved 2 scallions and scatter over."
    ],
    "title": "Steak, Snap Pea, and Asparagus Stir-Fry",
    "url": "https://www.bonappetit.com/recipe/steak-snap-pea-and-asparagus-stir-fry"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Ziploc-Storage-Bags-Gallon-Count/dp/B00UASJHV0?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UASJHV0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Paper Towels",
        "Plastic Bag",
        "Dutch Oven",
        "Instant-Read Thermometer",
        "Small Bowl",
        "Spoon",
        "Tongs",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Wire Rack"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ae743672fe9da78d80ead10/3:2/w_940,c_limit/fried-chicken-sandwich.jpg",
    "ingredients": [
        {
            "name": "skinless, boneless chicken thighs (about 4 oz. each, 1 lb. total)",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "seasoned rice vinegar, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "soy sauce, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Neutral oil, such as vegetable or peanut (for frying; 4-6 cups)",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sriracha",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "soft seeded hamburger buns",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "1/4 small head green cabbage",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "scallions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "cornstarch",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Pat 4 chicken thighs dry with paper towels, then transfer to a large resealable plastic bag. Add 2 Tbsp. rice vinegar and 1 Tbsp. soy sauce to bag. Sprinkle in a pinch of salt; season with pepper. Seal bag, pressing out air, and work chicken around inside bag to coat. Let sit while you prepare the other components.",
        "Pour oil into a Dutch oven to come 1\"-11/2\" up the sides and heat over medium-high (the high sides make for less splatter during frying). Every few minutes check oil temperature with an instant-read thermometer. You want it right around 350\u00b0 (this will take about 10 minutes total). As it surpasses the 300\u00b0 mark, reduce heat to low to maintain.",
        "Stir 1/2 cup mayonnaise and 2 Tbsp. Sriracha in a small bowl with a spoon until smooth.",
        "Preheat boiler. If broiler element is at the top of your oven, move rack to highest position. Broil 4 buns (you can place them directly on the rack), cut sides up, just until surfaces are golden, less than a minute. Use tongs to remove and set aside.",
        "Very thinly slice 1/4 head of cabbage and transfer to a medium bowl. Thinly slice 2 scallions; set aside for assembly.",
        "Remove chicken from bag with tongs, letting excess marinade drip back into bag, and transfer to another medium bowl. Add 1/3 cup cornstarch to bowl and toss with tongs until chicken is completely coated in cornstarch.",
        "Check oil and adjust temperature so thermometer registers around 350\u00b0. Carefully lay chicken into hot oil and cook, turning occasionally to prevent one side from browning too quickly, until crust is crispy and dark brown, 5-8 minutes. Keep an eye on your oil temperature, which will drop when you add the chicken; increase heat if needed to maintain 350\u00b0. Transfer chicken to a wire rack and let cool about 5 minutes.",
        "Meanwhile, toss cabbage with remaining 2 Tbsp. rice vinegar and 1 Tbsp. soy sauce.",
        "Spread about 1 Tbsp. Sriracha-mayonnaise across toasted sides of buns with the back of a spoon. Sprinkle reserved scallions over bottoms of buns, then arrange chicken over. Divide slaw evenly over chicken, then close with tops of buns."
    ],
    "title": "The Basically Fried Chicken Sandwich",
    "url": "https://www.bonappetit.com/recipe/basically-fried-chicken-sandwich"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Medium Bowl",
        "Microplane",
        "Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5aeb2019cb63a56d00a6636e/3:2/w_940,c_limit/eggplant-cucumber-dip.jpg",
    "ingredients": [
        {
            "name": "medium globe eggplant (about 1 lb.)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "half-sour pickle",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plain whole-milk greek yogurt",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sprigs cilantro",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "Pita or flatbread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 450\u00b0. Slice 1 eggplant in half lengthwise, then score cut sides in a crosshatch pattern.",
        "Place eggplant on a rimmed baking sheet and drizzle all over with 2 Tbsp. oil; season with salt. Arrange cut sides down and roast until cut sides are dark golden brown and skin sides begin to collapse, 12-18 minutes. Let cool.",
        "Meanwhile, do a little prep. First, finely chop 1 pickle. Transfer half to a medium bowl; reserve remaining half for serving.",
        "Peel 1 garlic clove and finely grate with a microplane into bowl with pickle. Add 1/4 cup yogurt and stir to combine.",
        "Pick cilantro leaves and tender stems from sprigs and coarsely chop; set aside for serving.",
        "When eggplant is cool enough to handle, turn cut side up and scoop flesh onto cutting board. Coarsely chop eggplant until mostly broken down, then add to bowl with pickle mixture, leaving any excess liquid behind. Season with more salt and stir to combine.",
        "Place pita directly on oven rack and toast 1 minute. Cut into quarters.",
        "Top dip with reserved pickles, cilantro, and a drizzle of oil. Serve with pita alongside."
    ],
    "title": "Roasted Eggplant and Pickle Dip",
    "url": "https://www.bonappetit.com/recipe/roasted-eggplant-and-pickle-dip"
},{
    "equipment_links": [
        "https://www.amazon.com/Victorinox-4-Inch-Classic-Paring-Straight/dp/B005LRYE36/ref=zg_bs_289859_1/138-8129613-6315707?_encoding=UTF8&psc=1&refRID=744BPX2PZ5WC7BAKG62B&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Paring Knife",
        "Chef's Knife",
        "Cutting Board",
        "Aluminum Foil",
        "Sieve",
        "Rimmed Baking Sheet",
        "Hand Blender"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5af5e9a8a6d355628a6bfb9f/3:2/w_940,c_limit/20180403_Basically_079potato-1x1.jpg",
    "ingredients": [
        {
            "name": "medium sweet potatoes",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "medium head broccoli",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "can chickpeas",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "garlic cloves",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "olive oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "whole milk greek yogurt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "cholulaa\u0302\u00ae original hot sauce, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "feta cheese, in brine, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 425A\u0302\u00b0 and place racks in the upper and lower thirds. Scrub sweet potatoes under running water and poke holes all over with the tip of a paring knife. Wrap each potato tightly in aluminum foil and bake on the upper rack until a knife pierced through the foil slides easily into center of potato, 60a\u0302\u0080\u009375 minutes.",
        "While potatoes are baking, prep your vegetables:\nCut broccoli into A\u03021/2a\u0302\u0080\u009d florets and transfer to a large rimmed baking sheet (reserve stem for snacking or another use).",
        "Drain can of chickpeas into a strainer, rinse under cold water, then shake to remove excess water. Pat dry with paper towels and transfer to sheet tray with broccoli.",
        "Smash garlic on cutting board with the flat side of a knife and remove skins. Add to baking sheet.",
        "Drizzle broccoli mixture with 3 Tbsp. olive oil and sprinkle with kosher salt. Toss with clean hands to coat, then spread out in an even layer on baking sheet.",
        "Roast on lower rack along with sweet potatoes, shaking baking sheet once or twice, until chickpeas are golden and crisp and broccoli is browned, 20a\u0302\u0080\u009325 minutes. Remove from oven and let cool.",
        "Combine yogurt, 3 Tbsp. Cholula Original, half of feta cheese, remaining 1 Tbsp. olive oil, and the roasted garlic from the baking sheet in the jar of a hand blender. Season with salt. (NOTE: This amount of Cholula will give the yogurt sauce a reddish tint.) Cut lemon into 6 wedges, remove seeds, and squeeze 2 wedges into jar with yogurt mixture. Blend until mixture is completely smooth; set aside.",
        "When sweet potatoes are tender, remove from oven and let cool slightly, then unwrap foil and discard (watch for hot liquid and steam inside foil). Make long, shallow, lengthwise cuts into tops of each potato. Squeeze sides slightly and press down to expose orange flesh. Let potatoes sit for a few minutes to allow steam to escape.",
        "Season potatoes with more salt, then dollop yogurt mixture over flesh.",
        "Squeeze two more lemon wedges over broccoli mixture, then spoon mixture over top of potatoes.",
        "Crumble remaining feta over broccoli and top with a few more shakes of Cholula Original. Serve with remaining lemon wedges."
    ],
    "title": "We\u00e2\u0080\u0099ve Loaded Up These Sweet Potatoes with Some of Your Favorite Flavors",
    "url": "https://www.bonappetit.com/recipe/weve-loaded-up-these-sweet-potatoes-with-some-of-your-favorite-flavors"
},{
    "equipment_links": [
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Chef's Knife",
        "Cutting Board",
        "Cast Iron Skillet",
        "Wooden Spoon",
        "Small Bowl",
        "Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5af5deda89a26c29083a932a/3:2/w_940,c_limit/20180403_Basically_106lettuce-1x1%20(1).jpg",
    "ingredients": [
        {
            "name": "bunch scallions",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "head Bibb or butter lettuce",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Persian cucumbers",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "large ripe avocado",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ground beef",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "cholulaa\u0302\u00ae green pepper hot sauce, divided, plus more for serving",
            "quantity": "4",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Trim scallions on both ends and thinly slice crosswise. Set aside about 3 Tbsp. sliced scallions for serving.",
        "Separate Bibb lettuce leaves. If necessary, rinse leaves to remove dirt and pat dry with paper towels. Chill leaves until ready to use.",
        "Thinly slice cucumbers crosswise on a diagonal. Chill until ready to use.",
        "Halve avocado and remove pit. Use a spoon to scoop flesh from skin, discard skin, and cut avocado into A\u03021/4a\u0302\u0080\u009d-thick slices.",
        "Cut lime in half crosswise and cut one of the halves into wedges (reserve for serving). Squeeze second half of the lime over avocado; set aside.",
        "Heat olive oil in a medium skillet, preferably cast iron, over medium-high. Add remaining sliced scallions and cook, stirring occasionally with wooden spoon, until tender and golden, about 4 minutes.",
        "Add beef and break up into small pieces with wooden spoon. Let cook, undisturbed, until first side is browned, about 5 minutes.",
        "While meat is cooking, stir A\u03021/2 cup mayonnaise and 3 Tbsp. Cholula Green Pepper Sauce in a small bowl and season lightly with salt; stir to combine then set aside. (NOTE: This amount of Cholula Green Pepper in the mayonnaise will give the mayonnaise a greenish tint.)",
        "Season meat with 1 tsp. kosher salt and stir, breaking up even more with wooden spoon into small bits. Continue to cook, stirring occasionally, until meat is cooked all the way through, about 4 minutes longer.",
        "Remove from heat and stir in 1 Tbsp. Cholula. Let cool slightly.",
        "Build your lettuce cups: Dollop a bit of the spicy mayo into the center of each leaf, then place a slice of avocado and several slices of cucumber over top. Spoon several tablespoons beef mixture into each leaf.",
        "Sprinkle lettuce cups with reserved scallions and squeeze reserved lime wedges over top. Sprinkle lightly with more salt and top with several more shakes of Cholula Green Pepper."
    ],
    "title": "These Spicy Beef Lettuce Cups Are a Hit Any Night of the Week",
    "url": "https://www.bonappetit.com/recipe/these-spicy-beef-lettuce-cups-are-a-hit-any-night-of-the-week"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Glass Measuring Cup",
        "Microplane",
        "Large Bowl",
        "Whisk",
        "Medium Bowl",
        "Fork",
        "Flexible Metal Spatula",
        "Pastry Brush",
        "Small Bowl",
        "Chef's Knife",
        "Parchment Paper",
        "Rimmed Baking Sheet"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ae74872dbb2ad7bffa5e0b9/3:2/w_940,c_limit/blueberry-scones.jpg",
    "ingredients": [
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plus 2 tbsp. sugar",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "all-purpose flour, plus more for dusting",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 2 tbsp. old-fashioned oats",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "21/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "plus 1 tbsp. chilled heavy cream",
            "quantity": "11/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "honey",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "frozen blueberries, preferably wild",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large egg yolk",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Place a rack in upper third of oven; preheat to 400\u00b0. Finely grate zest of 1 lemon with a microplane into a large bowl. Add 1/3 cup sugar and massage with your fingertips until mixture looks like wet sand and is very fragrant. Set aside remaining lemon for another use.",
        "Add 2 cups flour, 1 cup oats, 21/2 tsp. baking powder, and 1/2 tsp. salt to bowl with sugared zest. Whisk to combine.",
        "Whisk 11/3 cups cream and 2 Tbsp. honey in a medium bowl until combined.",
        "Slowly drizzle cream mixture into flour mixture, tossing with a fork to disperse liquid and hydrate flour. Stop mixing when you still have a few dry spots.",
        "Add 1 cup blueberries and fold mixture with a rubber spatula, taking care only to mix until blueberries are distributed throughout and you have a sticky dough. It\u2019s okay if some of the blueberries bleed or get broken up.",
        "Dust countertop liberally with more flour and turn out dough. Pat down into a 1\"-thick square, flouring hands lightly to prevent sticking as you work.",
        "Mix 1 egg yolk and remaining 1 Tbsp. cream with a pastry brush in a small bowl. Brush yolk mixture all across surface of dough.",
        "Sprinkle remaining 2 Tbsp. oats and 2 Tbsp. sugar over.",
        "Using a knife or metal bench scraper, cut dough into 4 quadrants, then cut each quadrant in half diagonally so you have 8 triangles.",
        "Transfer each triangle to a large parchment-lined rimmed baking sheet, spacing evenly.",
        "Bake scones on upper rack until tops are lightly golden all over and bottoms are golden brown, 15-20 minutes. Let cool on baking sheet. Serve warm.",
        "Do Ahead: Scones are best made the same day. Rewarm slightly in microwave or oven, if needed."
    ],
    "title": "Easy Blueberry Cream Scones",
    "url": "https://www.bonappetit.com/recipe/easy-blueberry-cream-scones"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Medium Bowl",
        "Fork",
        "Chef's Knife",
        "Cutting Board",
        "Microplane",
        "Spoon",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5aeb201a6601e82e7e847def/3:2/w_940,c_limit/tuna-avocado-salad.jpg",
    "ingredients": [
        {
            "name": "tins smoked trout",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "scallions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "mayonnaise",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "1/2 medium ripe avocado",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Crackers (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Pour off excess oil from 2 trout tins, then place trout in a medium bowl.",
        "Thinly slice 2 scallions on a diagonal. Add half to bowl with trout; reserve remaining scallions for serving.",
        "Using a microplane, finely grate half of lemon into bowl with trout.",
        "Cut lemon into quarters and remove any seeds. Squeeze 2 quarters over trout mixture.",
        "Add 1 Tbsp. mayonnaise and 1/2 tsp. salt and toss gently to combine.",
        "Finely chop 1/2 avocado. Transfer to a small bowl. Squeeze juice from remaining 2 lemon quarters over. Season with remaining 1/2 tsp. salt.",
        "Top dip with avocado and a few grinds of pepper. Serve with crackers alongside."
    ],
    "title": "Smoked Trout-Avocado Dip",
    "url": "https://www.bonappetit.com/recipe/smoked-trout-avocado-dip"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP193-18CH-MultiClad-Stainless-Saucepan/dp/B071D87589?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Multi-Purpose-Kitchen-Scissors-Shears/dp/B000KILLXM?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000KILLXM?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Large Saucepan",
        "Whisk",
        "Scissors",
        "Cutting Board",
        "Box Grater",
        "Chef's Knife",
        "Large Skillet",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ae74366069b66739aee0ff5/3:2/w_940,c_limit/shrimp-and-grits.jpg",
    "ingredients": [
        {
            "name": "unsalted butter, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "white corn grits (not quick-cooking)",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large shrimp",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "sharp white cheddar cheese",
            "quantity": "6",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "scallions",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "bacon (about 3 medium slices)",
            "quantity": "3",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "pint cherry tomatoes",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Hot sauce (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 325\u00b0. Bring 41/2 cups water to a simmer in a large saucepan over medium-high heat. Add 3 Tbsp. butter and 1 tsp. salt and whisk to melt butter.",
        "Slowly sprinkle 1 cup grits into saucepan, whisking constantly. As soon as water comes back to a boil, cover pot and transfer to oven. Set timer for 20 minutes.",
        "Do a little prep while the grits are cooking. First, using a pair of clean scissors, insert one blade into head-end of shrimp and snip along backside all the way to the tail to expose the vein. Remove vein and peel shrimp (freeze the shells and save for stock!).",
        "Grate 6 oz. cheese on the large holes of a box grater.",
        "Trim 6 scallions on both ends, then cut crosswise into 1\" pieces.",
        "Smash 2 garlic cloves, peel, and finely chop.",
        "Remove grits from oven (careful\u2014handle will be hot!) and heat on stove over low. Uncover and whisk vigorously, scraping bottom, until mixture is smooth. Gradually add cheese, whisking constantly, until grits are smooth and creamy. Taste and season with more salt, then cover and keep warm over low heat while you prepare the shrimp.",
        "Heat remaining 1 Tbsp. butter in a large skillet over low heat. Stack 3 oz. bacon slices, cut crosswise into 1/2\" pieces, and add to skillet. Increase heat to medium-high and cook, stirring often with a wooden spoon, until fat is released and bacon is crisp around the edges, 5-8 minutes.",
        "Add scallions and garlic to skillet and cook, stirring often, until scallions are softened and white parts are translucent and lightly browned, about 4 minutes.",
        "Increase heat to high and add 1 pint tomatoes; season with salt. Cook, tossing occasionally, until tomatoes are starting to burst, about 2 minutes.",
        "Add shrimp; season with salt. Cook, tossing often, until they turn pink and the thickest part of the spine (where you snipped to remove the vein) is opaque, about 2 minutes.",
        "Remove skillet from heat and add 2 Tbsp. water. Cut 1 lemon into wedges and squeeze about 1 Tbsp. juice over shrimp. Press on back of tomatoes with a wooden spoon to release their juices and stir to combine.",
        "Whisk grits again to smooth out. Spoon into shallow bowls. Top with shrimp mixture, then drizzle with hot sauce. Serve with remaining lemon wedges alongside for squeezing over."
    ],
    "title": "Shrimp and No-Stir Grits",
    "url": "https://www.bonappetit.com/recipe/shrimp-and-no-stir-grits"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Cutting Board",
        "Chef's Knife",
        "Rimmed Baking Sheet",
        "Medium Bowl",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5aeb1eab745366374605915f/3:2/w_940,c_limit/roasted-peppers-breadcrumbs.jpg",
    "ingredients": [
        {
            "name": "bell peppers, any color",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt, divided",
            "quantity": "3/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "panko (japanese breadcrumbs)",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "finely grated parmesan",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "garlic powder",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "sprigs parsley",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "aleppo-style or other mild red pepper flakes",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        }
    ],
    "steps": [
        "Preheat oven to 450\u00b0. Place 3 bell peppers upright on a cutting board. Working around stems and avoiding the seedy center, slice straight downward to remove 4 lobes from each pepper.",
        "Arrange pepper lobes skin sides down on a rimmed baking sheet. Drizzle with 1 Tbsp. oil; season with 1/2 tsp. salt.",
        "Gently mix 1 cup panko, 1/2 cup Parmesan, 1 tsp. garlic powder, 2 Tbsp. oil, and remaining 1/4 tsp. salt with your hands in a medium bowl.",
        "Using your fingertips, pat about 2 Tbsp. breadcrumb mixture into each piece of pepper. Drizzle peppers with remaining 1 Tbsp. oil.",
        "Bake peppers until bottoms are deeply browned and breadcrumbs are golden, 18-22 minutes. Let cool slightly.",
        "Meanwhile, slice 1 lemon into wedges and set aside. Pick leaves from 4 parsley sprigs and coarsely chop.",
        "Transfer peppers to a platter. Top with red pepper and parsley. Serve with lemon wedges alongside."
    ],
    "title": "Roasted Peppers with Parm Breadcrumbs",
    "url": "https://www.bonappetit.com/recipe/roasted-peppers-with-parm-breadcrumbs"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Vegetable Peeler",
        "Rimmed Baking Sheet",
        "Plastic Wrap",
        "Medium Bowl",
        "Wooden Spoon",
        "Microplane",
        "Spatula",
        "Small Bowl",
        "Fork",
        "Pastry Brush",
        "Wire Rack"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ae73f1d12f83436a2730f2c/3:2/w_940,c_limit/calzone.jpg",
    "ingredients": [
        {
            "name": "small head of broccoli",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "pizza dough",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "low-moisture grated mozzarella",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "fresh ricotta",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "grated parmesan, plus more for serving",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "large garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "basil leaves",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large egg",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Jarred marinara sauce (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 400\u00b0. Trim end of stem from 1 head of broccoli, then use a vegetable peeler to remove thick woody exterior of stalk (you can eat the broccoli stalk\u2014it\u2019s the best part!). Coarsely chop entire head of broccoli into 1/2\" pieces.",
        "Toss broccoli on a rimmed baking sheet with 3 Tbsp. oil; season generously with salt. Roast, tossing once halfway through, until broccoli is browned all over and tender, 20-25 minutes. Let cool.",
        "While broccoli is roasting, remove 1 lb. pizza dough from refrigerator and let sit at room temperature (this will make it easier to stretch). Divide into 4 equal pieces and cover loosely with plastic wrap.",
        "Combine 2 cups mozzarella, 1 cup ricotta, 1/2 cup Parmesan, and 1/2 tsp. red pepper flakes in a medium bowl. Peel 1 garlic clove and grate on a microplane into bowl, then finely grate zest of 1 lemon into bowl (save remaining lemon for another use).",
        "Stack 1/2 cup basil leaves on top of each other and roll into a cigar shape. Slice leaves crosswise as thinly as possible (you can do this in 2 batches if needed). Add basil shreds to bowl.",
        "Season cheese mixture with salt, then scrape in roasted broccoli (save the baking sheet, which you\u2019re going to use it to bake the calzones). Stir with a flexible spatula to incorporate.",
        "Drizzle 1 Tbsp. oil over reserved baking sheet and spread around with fingers to coat surface. Beat 1 egg in a small bowl with a fork until no streaks remain.",
        "Working one piece at a time, roll out dough on a clean dry surface to an 8\" round. Brush a thin coating of egg wash around perimeter of dough. Spoon one-quarter of the cheese mixture onto one side of dough.",
        "Fold empty half of dough down over filling and press firmly all around edge to seal the two sides to form a half-moon shape. Press really firmly to prevent the calzones from opening during baking. Repeat with remaining pieces of dough and filling, transferring each to prepared sheet as they\u2019re done, spacing evenly.",
        "Brush dough all over with remaining egg wash.",
        "Do a final crimp around each calzone: fold the outermost 1/2\" of border back up and over itself, pinching like crazy to seal.",
        "Bake calzones until dough is golden brown all over and bottom is well browned, 30-35 minutes. Transfer calzones to a wire rack. Poke a tiny hole with the tip of a knife into each calzone to let steam escape.",
        "Cut calzones in half and serve with marinara sauce alongside. Top with more grated Parmesan."
    ],
    "title": "Easy Vegetarian Calzones",
    "url": "https://www.bonappetit.com/recipe/easy-vegetarian-calzones"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTK-SS17-Stainless-Stovetop-Teakettle/dp/B008OLKVEW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008OLKVEW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Tea Kettle",
        "Medium Bowl",
        "Plate",
        "Sieve",
        "Blender",
        "Spatula",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5adf54ac026131045b415ffd/3:2/w_940,c_limit/cashew-cream.jpg",
    "ingredients": [
        {
            "name": "raw cashews",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "mixed tender herbs, such as parsley, cilantro, dill, and/or basil",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unseasoned rice or distilled white vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Crudite\u0301s, such as radicchio, carrots, radishes, and batons of bread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Bring 2 cups water to a boil in a tea kettle or small saucepan. Place 2 cups cashews in a medium heatproof bowl and cover with boiling water. Cover bowl with a plate or plastic wrap and let sit 10 minutes.",
        "Strain cashews through a fine-mesh sieve into another medium bowl, reserving soaking liquid.",
        "Transfer nuts to blender, then add 1 cup herbs, 2 Tbsp. vinegar, 1 Tbsp. salt, and half of soaking liquid.",
        "Blend on medium speed, scraping down sides with a spatula and adding more soaking liquid as needed, until cashew cream is very smooth and the consistency of yogurt, 1-2 minutes.",
        "Using spatula, transfer cashew cream to a medium bowl. Serve with crudite\u0301s alongside."
    ],
    "title": "Put-It-On-Everything Cashew Sauce",
    "url": "https://www.bonappetit.com/recipe/put-it-on-everything-cashew-sauce-vegan"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Medium Bowl",
        "Microplane",
        "Plate",
        "Dutch Oven",
        "Tongs",
        "Cutting Board",
        "Wooden Spoon",
        "Colander",
        "Small Saucepan",
        "Box Grater",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ad51b40d63c0e2f9cf49236/3:2/w_940,c_limit/italian-wedding-soup.jpg",
    "ingredients": [
        {
            "name": "sweet italian sausage",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "panko (japanese breadcrumbs), divided",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "garlic cloves, divided",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "medium head of fennel with fronds",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium onions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "dry white wine",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "piece parmesan with rind",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "can cannellini (white kidney) beans",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "small head of escarole",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Cut shallow slits in each sausage link, then remove sausage from casings; transfer sausage to a medium bowl. Add 1/2 cup panko, 2 Tbsp. oil, and 2 Tbsp. water. Peel and finely grate 1 garlic clove on a microplane into bowl. Season lightly with salt and mix with your hands until breadcrumbs are evenly distributed.",
        "Portion meat into small meatballs about 1\" in diameter (oil your hands to help with rolling if mixture gets sticky) and transfer to a plate.",
        "Heat 2 Tbsp. oil in a Dutch oven over medium. Add meatballs, spacing evenly apart, and cook undisturbed until first side is dark brown, about 5 minutes. Using tongs, turn meatballs and cook until other side is also well browned, about 4 minutes. Transfer back to plate and set aside.",
        "Remove pot from heat and prep the rest of the soup ingredients: First, remove fennel fronds from 1 head of fennel and save for garnishing the soup. Cut fennel head in half lengthwise. Cut a V-shaped notch in each half to remove the core. Place halves cut side down, then thinly slice crosswise.",
        "Peel and trim 2 onions. Cut in half lengthwise and coarsely chop.",
        "Smash 6 garlic cloves (keep remaining clove for the end) and peel.",
        "Place Dutch oven back over medium heat and add fennel, onion, and smashed garlic; season with salt and 1/2 tsp. red pepper flakes. Cook, stirring occasionally, until vegetables are golden brown and softened, 6-8 minutes.",
        "Stir in 1/2 cup wine and scrape bottom to dissolve any remaining stuck-on browned bits.",
        "Add 8 cups water; season generously with salt. Slice down along Parmesan rind to remove and add to soup; set cheese aside.",
        "Bring to a simmer, then reduce to a gentle simmer. Cook uncovered until broth is golden and flavorful, 25-30 minutes. Season with more salt if needed.",
        "Open 15-oz. can beans and pour into a strainer or small colander. Rinse beans and shake to remove excess water, then transfer to pot along with meatballs. Bring back to a simmer and cook, stirring occasionally, until broth is slightly thickened from beans and meatballs are cooked and have released some of their flavor into the broth, 10-15 minutes.",
        "While soup is simmering, separate leaves from 1 head of escarole and rinse to remove any dirt. Tear into small pieces, then stir into soup in batches to wilt. Remove soup from heat.",
        "Heat remaining 2 Tbsp. oil in a small saucepan over medium. Finely grate remaining 1 garlic clove into skillet. Add remaining 1/4 cup panko. Season with salt and cook, stirring often, until panko is golden, about 4 minutes. Remove from heat.",
        "Prepare your other garnishes: Finely grate about 1/2 cup cheese from reserved hunk of Parmesan (you might not need it all). Finely chop fennel fronds.",
        "Taste soup and season with salt if needed. Ladle soup into bowls and top with chopped fronds, grated cheese, and toasted panko."
    ],
    "title": "Low-Commitment Wedding Soup",
    "url": "https://www.bonappetit.com/recipe/low-commitment-wedding-soup"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-24N-MultiClad-Stainless-10-Inch/dp/B009P4851S?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P4851S?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Platter",
        "Medium Skillet",
        "Spatula",
        "Paper Towels",
        "Plate",
        "Medium Bowl",
        "Spoon",
        "Box Grater"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ad7648b069b66739aee0953/3:2/w_940,c_limit/endive-cups.jpg",
    "ingredients": [
        {
            "name": "large endives",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "slices sourdough bread",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "plus 2 tbsp. extra-virgin olive oil, divided, plus more for drizzling",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt, divided",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "celery stalk",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "1/2 lemon",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "piece hard blue cheese (such as bayley hazen blue)",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        }
    ],
    "steps": [
        "Slice root ends off 2 endive. Separate larger leaves and arrange on a platter; save smaller inner leaves for a salad some other time.",
        "Remove crust from 2 slices bread, then tear bread into 1/4\" pieces (you should have about 3 cups bread).",
        "Heat 1/4 cup oil in a medium skillet over medium until shimmering. Add bread and reduce heat to medium-low. Fry bread, tossing occasionally with a spatula or slotted spoon, until golden brown, 3-5 minutes.",
        "Transfer croutons to a paper towel-lined plate; season immediately with salt and set aside to cool.",
        "Quarter 1 celery stalk lengthwise, then slice crosswise (you want a fine uniform dice here). Transfer celery to a medium bowl.",
        "Add croutons, remaining 1 Tbsp. oil, 1/4 tsp. salt, and a few grinds of pepper to bowl. Squeeze lemon over and toss to combine.",
        "Spoon celery mixture into base of endive leaves.",
        "Using the medium holes of a box grater, grate 3 oz. blue cheese over endive.",
        "Top with an extra drizzle of oil and a few grinds of pepper."
    ],
    "title": "Endive Cups with Blue Cheese, Celery, and Croutons",
    "url": "https://www.bonappetit.com/recipe/endive-cups-with-blue-cheese-celery-and-croutons"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-24N-MultiClad-Stainless-10-Inch/dp/B009P4851S?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P4851S?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Colander",
        "Paper Towels",
        "Medium Skillet",
        "Cutting Board",
        "Chef's Knife",
        "Microplane",
        "Large Bowl",
        "Whisk"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ad51b07ff795274c43a0f58/3:2/w_940,c_limit/20180403_Basically_122.jpg",
    "ingredients": [
        {
            "name": "can chickpeas",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "plus 1/3 cup extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt, freshly ground pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "small rotisserie chicken",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "pint cherry tomatoes",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Persian cucumbers",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "block feta cheese in brine",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "jarred peperoncini",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "red wine vinegar",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "dried oregano",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "sugar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "romaine hearts",
            "quantity": 2,
            "type": "unitless"
        }
    ],
    "steps": [
        "Pour 15 oz. chickpeas into a colander, rinse, and shake off excess water. Pat chickpeas dry on paper towels. Heat 2 Tbsp. oil in a medium skillet over medium-low.",
        "Add chickpeas; season with salt and pepper. Cook, shaking skillet often and reducing heat if chickpeas are browning too quickly or popping all over the place, until golden and crispy all over, 10-15 minutes. Let cool.",
        "While chickpeas are sizzling away, move on to your salad prep. Using clean hands, remove skin from 1 rotisserie chicken; discard. Pull meat from bones and shred into bite-sized pieces. Keep going until you have about 4 cups; save any leftover chicken for another use.",
        "This is going to require a lot of chopping, so start your engines! First, slice 1 pint tomatoes in half lengthwise.",
        "Slice 2 cucumbers in half lengthwise, then place on flat sides on cutting board and slice crosswise into thin half moons.",
        "Cut 6 oz. block of feta into small cubes.",
        "Thinly slice 1/2 cup peperoncini.",
        "Peel and finely grate 1 garlic clove into a large bowl. Add 3 Tbsp. vinegar, 1 tsp. oregano, and 1/2 tsp. sugar and whisk to combine. Season generously with salt and pepper.",
        "Slowly drizzle in remaining 1/3 cup oil, whisking all the while, until a thick dressing forms.",
        "Add chicken, tomatoes, cucumbers, feta, and peperoncini to bowl and toss to combine.",
        "Slice 2 romaine hearts crosswise into 1\" pieces and add to bowl. Season with more salt and pepper and toss again to combine (clean hands make the best salad tossers!).",
        "Scatter crispy chickpeas over top of salad and serve."
    ],
    "title": "Chopped Dinner Salad with Crispy Chickpeas",
    "url": "https://www.bonappetit.com/recipe/chopped-dinner-salad-with-crispy-chickpeas"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ZWILLING-Madura-Plus-Forged-Nonstick/dp/B0153VZV7C?&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Medium Bowl",
        "Whisk",
        "Chef's Knife",
        "Cutting Board",
        "Wooden Spoon",
        "Medium Nonstick Skillet",
        "Spatula",
        "Wire Rack",
        "Small Bowl",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ace2d5ebdc6226c12d79cc0/3:2/w_940,c_limit/kimchi-pancakes.jpg",
    "ingredients": [
        {
            "name": "large egg",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "kimchi brine from jar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "soy sauce, divided",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 1 tbsp. all-purpose flour",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kimchi",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "scallions",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "grapeseed or other neutral oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "unseasoned rice or distilled white vinegar",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        }
    ],
    "steps": [
        "Crack 1 egg into a medium bowl. Add 1 Tbsp. kimchi brine, 1 Tbsp. soy sauce, and 1/4 cup water and whisk to combine.",
        "Whisk in 3/4 cup plus 1 Tbsp. flour.",
        "Coarsely chop 11/2 cups kimchi, add to bowl, and stir to combine.",
        "Thinly slice 4 scallions on a diagonal. Add half to batter; reserve remaining scallions for serving.",
        "Heat 1 Tbsp. oil in a medium nonstick skillet over medium-high. Drop 1/4-cupfulls of batter onto opposite sides of skillet (pancakes should be about 4\" in diameter, so you\u2019ll probably only be able to cook 2 at a time).",
        "Cook pancakes until golden brown on first side, 2-3 minutes, then flip and cook until browned on second side, 2-3 minutes longer. Transfer to a wire rack and let cool. Repeat process in batches with remaining batter and oil; you should have 8 pancakes.",
        "Combine 3 Tbsp. vinegar and remaining 3 Tbsp. soy sauce in a small bowl.",
        "Transfer pancakes to a platter. Top with reserved scallions and serve with dipping sauce alongside."
    ],
    "title": "Quick Kimchi Pancakes",
    "url": "https://www.bonappetit.com/recipe/quick-kimchi-pancakes"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-Recipe-Right-Oblong-Cover/dp/B000FCD118?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000FCD118?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-HM-50-Power-Advantage-5-Speed/dp/B000TVWFEY?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000TVWFEY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "13x9\" Baking Dish",
        "Whisk",
        "Large Bowl",
        "Medium Bowl",
        "Chef's Knife",
        "Electric Mixer",
        "Cake Tester",
        "Wire Rack",
        "Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ac27cd53b54622a98dae653/3:2/w_940,c_limit/chocolate-sheet-pan-birthday-cake.jpg",
    "ingredients": [
        {
            "name": "(31/2 sticks) unsalted butter, room temperature, divided, plus more for pan",
            "quantity": "13/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "all-purpose flour, plus more for pan",
            "quantity": "31/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "granulated sugar",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt, divided",
            "quantity": "13/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "baking soda",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "large eggs plus 5 large egg yolks",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "buttermilk, room temperature",
            "quantity": "11/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "vegetable oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "plus 1 tsp. vanilla extract, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "cream cheese, room temperature",
            "quantity": "6",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "powdered sugar",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsweetened cocoa powder",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Sprinkles (for serving; optional)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in center of oven; preheat to 325\u00b0. Smear room-temperature butter all over bottom and sides of a 13x9\" baking dish (metal or glass is okay) with your fingertips. Sprinkle a light dusting of flour into pan, then shake pan to coat all over; tap out excess flour.",
        "Whisk 2 cups granulated sugar, 1 Tbsp. baking powder, 1 tsp. salt, 1/2 tsp. baking soda, and remaining 31/4 cups flour in a large bowl.",
        "Whisk 2 eggs, 5 egg yolks, 11/4 cups buttermilk, 2 Tbsp. oil, and 1 Tbsp. vanilla in a medium bowl until smooth.",
        "Cut 2 sticks butter into 1\" pieces and add to bowl with dry ingredients. Using an electric mixer on low speed, slowly increasing speed to medium, beat until butter is worked into dry ingredients and mixture looks like coarse meal, 4-5 minutes.",
        "Make a well in center of flour mixture and pour in half of buttermilk mixture. Starting on low speed and slowly increasing to medium, beat until all of flour mixture is hydrated.",
        "Add remaining buttermilk mixture and beat on low speed until liquid is incorporated. Increase speed to high and beat until mixture is satiny smooth, light, and thick, about 1 minute.",
        "Scrape batter into prepared pan and smooth into corners in an even layer.",
        "Bake cake until top is golden brown, firm to the touch, and a tester inserted into center comes out clean, 45-55 minutes. Transfer to a wire rack and let cool completely.",
        "Make icing while cake cools. Using electric mixer on medium-high speed, beat 6 oz. cream cheese and remaining 11/2 sticks butter in a medium bowl until light and fluffy, about 2 minutes.",
        "Add 2 cups powdered sugar, 1/4 cup cocoa powder, and remaining 3/4 tsp. salt and beat again, scraping down sides of bowl, until completely smooth.",
        "Add remaining 1 tsp. vanilla and continue to beat until fluffy and lightened in color, another minute.",
        "Smooth icing over top of cooled cake (it should not be at all warm to the touch, or else the icing will melt).",
        "Top cake with sprinkles, if desired. Cut into pieces and serve.",
        "Do Ahead: Cake can be baked and frosted 2 days ahead. Chill until icing is solid, then cover with plastic wrap and keep chilled. Bring to room temperature before serving."
    ],
    "title": "Easy Sheet Cake with Chocolate-Cream Cheese Frosting",
    "url": "https://www.bonappetit.com/recipe/easy-sheet-cake-with-chocolate-cream-cheese-frosting"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Microplane",
        "Small Bowl",
        "Spoon",
        "Chef's Knife",
        "Cutting Board"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8478d88b69e203758024a8/3:2/w_940,c_limit/Cucumber-Salad-Garam-Masala-Yogurt-16x9.jpg",
    "ingredients": [
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plain whole milk yogurt (not greek)",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "garam masala",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "Persian cucumber",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "pomegranate seeds (a.k.a. \"arils\")",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "store-bought fried shallots or onions",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bag pita chips",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        }
    ],
    "steps": [
        "Using a microplane, finely grate 1 garlic clove into a small bowl.",
        "Add 3/4 cup yogurt, 1 Tbsp. garam masala, and 1 tsp. salt and stir with a spoon to combine.",
        "Finely chop 1 cucumber and gently stir into yogurt.",
        "Top cucumber yogurt with 1/2 cup pomegranate seeds and 1/2 cup fried shallots. Serve with pita chips alongside."
    ],
    "title": "Curry-Cucumber Dip with Fried Shallots",
    "url": "https://www.bonappetit.com/recipe/curry-cucumber-dip-with-fried-shallots"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Colander",
        "Large Bowl",
        "Large Pot",
        "Wooden Spoon",
        "Microplane",
        "Small Bowl",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ac27d568206f61dfa2a411b/3:2/w_940,c_limit/mussels.jpg",
    "ingredients": [
        {
            "name": "garlic cloves, divided",
            "quantity": 7,
            "type": "unitless"
        },
        {
            "name": "celery heart",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "3\" piece ginger, scrubbed",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "mussels",
            "quantity": "4",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "unsalted butter",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "mirin (sweet japanese rice wine)",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sambal oelek",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 1 tbsp. low-sodium soy sauce",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "can whole tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "1/2 baguette",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Prep your ingredients before you start cooking: First, peel and set aside 1 garlic clove for the mayo, then peel and smash remaining 6 garlic cloves.",
        "Pick any leaves from 1 celery heart. Thinly slice celery heart crosswise (making little half-moons) until you have about 11/4 cups. Set aside 1/4 cup chopped celery along with leaves for serving.",
        "Peel 3\" piece ginger. Set aside a 1/2\" nub for later, then cut remaining piece crosswise into thin slices.",
        "Rinse 4 lb. mussels in cold water and remove the \u201cbeard\u201d (that thread-like piece attached to the side of the shells) by tugging firmly. If any mussels are open and don\u2019t close when tapped, discard. Drain and transfer to a large bowl.",
        "Heat 3 Tbsp. butter in large pot or Dutch oven over medium. Add smashed garlic, sliced ginger, and 1 cup chopped celery and cook, stirring often with a wooden spoon, until garlic is golden, 5-8 minutes.",
        "Add 1/2 cup mirin, 1/3 cup sambal, and 1/4 cup soy sauce and bring to a simmer. Cook, stirring once or twice, until mixture is reduced by about half, about 5 minutes.",
        "Add 28-oz. can tomatoes and juices to pot, breaking up tomatoes with your hands as you add them, and bring to a simmer. Season lightly with salt. Let simmer, uncovered, to allow flavors to meld, about 5 minutes.",
        "Add mussels to pot and stir into tomato mixture. Cover pot and cook, stirring once halfway through, until mussels are opened and fully cooked, 6-8 minutes.",
        "Meanwhile, finely grate reserved garlic clove and 1/2\" nub ginger into a small bowl. Add 1/2 cup mayonnaise and remaining 1 Tbsp. soy sauce and stir to incorporate.",
        "Preheat broiler with rack in top position. Cut 1/2 baguette in half lengthwise and toast, cut sides up, directly on oven rack, until bread is golden across the surface, about 1 minute. Let cool.",
        "When mussels are opened, uncover and remove from heat. Ladle into shallow bowls along with tomato mixture. Top with reserved chopped celery and leaves.",
        "Tear bread into pieces and smear toasted sides with mayonnaise mixture. Serve with mussels for soaking up liquid."
    ],
    "title": "Mussels in Spicy Tomato Broth",
    "url": "https://www.bonappetit.com/recipe/mussels-in-spicy-tomato-broth"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-24N-MultiClad-Stainless-10-Inch/dp/B009P4851S?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P4851S?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Colander",
        "Microplane",
        "Small Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Spoon",
        "Medium Skillet",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8474a38e5ab504d767b0c6/3:2/w_940,c_limit/chorizo-chickpea-tostadas-16x9.jpg",
    "ingredients": [
        {
            "name": "can chickpeas",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plain whole milk greek yogurt",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "sprigs cilantro",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "links fresh chorizo (about 8 oz. total)",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "tostada shells",
            "quantity": 4,
            "type": "unitless"
        }
    ],
    "steps": [
        "Rinse and drain 15 oz. chickpeas in a colander. Measure out 1/2 cup; reserve remaining chickpeas for another use.",
        "Finely grate zest of 1 lime with a microplane or grater into a small bowl.",
        "Cut lime in half and squeeze juice from one half into bowl with zest. Cut remaining half into 2 wedges; set aside for serving.",
        "Gather 8 cilantro sprigs on cutting board. Starting at the stem end, finely chop stems until you get to the leaves; reserve leaves for serving. Add stems to bowl with lime.",
        "Add 1/4 cup yogurt and 1/2 tsp. salt to bowl and mix with a spoon to combine.",
        "Remove casing from 2 chorizo links; discard. Heat a medium nonstick skillet over medium-low. Cook chorizo, breaking it up with a wooden spoon, until partially cooked, about 3 minutes.",
        "Add reserved chickpeas and remaining 1/4 tsp. salt and mash together with back of spoon until chorizo is cooked through and crispy, 7-10 minutes. Remove from heat.",
        "Spread reserved crema over 4 tostada shells.",
        "Top crema with chorizo mixture.",
        "Top with reserved cilantro leaves and serve with reserved lime wedges alongside."
    ],
    "title": "Chickpea and Chorizo Tostadas",
    "url": "https://www.bonappetit.com/recipe/chickpea-and-chorizo-tostadas"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Wooden-Reamer/dp/B0007VO0DA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0007VO0DA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Large Pot",
        "Chef's Knife",
        "Cutting Board",
        "Citrus Reamer",
        "Glass Measuring Cup",
        "Whisk",
        "Large Bowl",
        "Microplane",
        "Tongs",
        "Colander"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5ab90eabd1b7f6166f0757ba/3:2/w_940,c_limit/cold-miso-sesame-noodles.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Fresno chile",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Persian cucumbers",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "scallions",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "limes",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "mild miso",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "toasted sesame oil",
            "quantity": "4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "light brown sugar",
            "quantity": "4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "large garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "grapeseed or other neutral oil",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "spaghetti or thin wheat noodles",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "Toasted sesame seeds (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Fill a large pot two-thirds full with water. Bring to a boil over high heat. When water starts to steam, toss in a small handful of salt.",
        "While you wait for the water, do some of your prep: Cut 1 chile in half lengthwise. Using your hands, pull out and remove stem and white ribs; discard. Tap out and discard any seeds, then finely chop chile. (Make sure to wash your hands with plenty of soap and hot water after handling chiles, or at least don\u2019t rub your eyes!)",
        "Cut 4 cucumbers in half lengthwise, then slice crosswise into 1/4\"-thick half-moons.",
        "Thinly slice 4 scallions.",
        "Cut 2 limes in half. Using a citrus reamer (or fork if you don\u2019t have a reamer), juice limes into a small liquid measuring cup until you have 1/4 cup; discard seeds. Cut remaining 1 lime into wedges; set aside for serving.",
        "Whisk 1/2 cup miso, 4 tsp. sesame oil, 4 tsp. brown sugar, and 1/4 cup lime juice in a large bowl until smooth.",
        "Finely grate 1 garlic clove into bowl and whisk to combine.",
        "Whisking constantly, slowly stream in 1/3 cup grapeseed oil until dressing is smooth and thick. Whisk in water 1 Tbsp. at a time until dressing is the consistency of heavy cream (it\u2019ll likely take about 2 Tbsp.).",
        "When water is boiling vigorously, add 1 lb. pasta to pot and stir with tongs to prevent sticking. Cook according to package instructions.",
        "Drain noodles in a colander and rinse with cold water to stop cooking and remove any starch. Drain thoroughly, shaking off excess water, then add to bowl with sauce.",
        "Toss noodles to coat in sauce, then add chile, cucumbers, and scallions. Season with more salt to taste and toss again to distribute.",
        "Divide noodles among plates. Top with toasted sesame seeds and serve with reserved lime wedges alongside.",
        "Do Ahead: Noodles can be made several hours ahead. They tend to soak up a lot of the sauce as they sit, so if you want to make the day before, hold back half of sauce, cover, and chill. Toss with reserved sauce before serving."
    ],
    "title": "Cold Miso-Sesame Noodles",
    "url": "https://www.bonappetit.com/recipe/cold-miso-sesame-noodles"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Small Saucepan",
        "Spider",
        "Large Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Small Bowl",
        "Spoon",
        "Plate"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8478c28e5ab504d767b0c8/3:2/w_940,c_limit/eggs-paprika-aioli-sq.jpg",
    "ingredients": [
        {
            "name": "large eggs, room temperature",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "jarred peperoncini in brine",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "sprigs parsley",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "smoked or hot paprika",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Bring a small saucepan of water to a boil.",
        "Using a spider or slotted spoon, carefully lower 4 eggs into boiling water. Set timer for 8 minutes. Fill a large bowl with ice water.",
        "While eggs are boiling, do the rest of your prep: Drain 2 peperoncini. Remove stems and finely chop. Transfer to a small bowl.",
        "Pick off leaves from 4 parsley sprigs and finely chop (discard stems). Add to bowl with peperoncini.",
        "Mix 1/4 cup mayonnaise and 1/2 tsp. paprika in another small bowl.",
        "When timer goes off, remove eggs from boiling water with spider or slotted spoon and transfer to ice bath. Let cool 5 minutes.",
        "Peel eggs, slice in half lengthwise, then sprinkle yolks with salt. Transfer eggs to a plate.",
        "Top each egg with paprika mayo and peperoncini salsa."
    ],
    "title": "Jammy Eggs with Paprika Aioli",
    "url": "https://www.bonappetit.com/recipe/jammy-eggs-with-paprika-aioli"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Paper Towels",
        "Whisk",
        "Large Bowl",
        "Tongs",
        "Spoon",
        "Measuring Cups",
        "Platter",
        "Blender"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5aafe94e30a186203c128cd6/3:2/w_940,c_limit/chipotle-rubbed-chicken-sheet-pan-dinner.jpg",
    "ingredients": [
        {
            "name": "tomatillos (about 6 medium)",
            "quantity": "12",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "garlic cloves",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "scallions",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "jalapen\u0303o",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "skin-on, bone-in chicken thighs (about 3 lb.)",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "adobo sauce, from 1 can chipotles in adobo",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "ground cumin, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "medium acorn squash",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "1/2 bunch cilantro",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Lime wedges (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in upper third of oven; preheat to 425\u00b0. Start by assembling all the ingredients for the salsa: Remove husks from 12 oz. tomatillos and rinse. Cut any larger ones in half and arrange on a baking sheet.",
        "Smash 8 garlic cloves with the flat side of your knife and remove skins. Add to baking sheet with tomatillos.",
        "Trim ends of 4 scallions and discard, then cut scallions crosswise into 1\" pieces. Add to baking sheet.",
        "Cut 1 jalapen\u0303o in half lengthwise, pull out stem and ribs, and place on baking sheet. Wash hands!",
        "Drizzle 2 Tbsp. oil over vegetables; season with salt. Toss with hands to coat, then push vegetables to one side of baking sheet so they\u2019re taking up about one-third of sheet; set aside.",
        "Pat 8 chicken thighs dry with paper towels. Season all over with salt.",
        "Whisk 2 Tbsp. adobo sauce (from 1 can chipotles in adobo), 1 tsp. honey, 1/2 tsp. cumin, and 2 Tbsp. oil in a large bowl until smooth.",
        "Add chicken to bowl and toss with tongs until coated.",
        "Using tongs, arrange chicken, skin sides up, in center of baking sheet, placing close together so there\u2019s still space left for the squash.",
        "Cut 1 acorn squash in half and scoop out seeds with spoon. Cut each half in thirds again to make 6 equal wedges.",
        "Arrange squash on baking sheet next to chicken, then drizzle squash with 2 Tbsp. oil. Season with salt and sprinkle with remaining 1/2 tsp. cumin.",
        "Roast until chicken thighs are browned on top and meat is cooked through, tomatillos are lightly charred on top, and squash is fork-tender 30-40 minutes.",
        "Let cool slightly. While chicken is cooling, pick about 1/2 cup cilantro leaves from bunch, reserving stems, and set aside for serving.",
        "Transfer chicken and squash to a platter.",
        "Tip all remaining ingredients, along with about 1/2 cup of pan juices, into a blender. Add cilantro, stems and all; season with a bit more salt. Blend, thinning with more pan juices if needed, until smooth and pourable.",
        "Pour salsa over platter and top with reserved cilantro leaves. Serve with lime wedges alongside."
    ],
    "title": "Chipotle-Rubbed Chicken Sheet-Pan Dinner",
    "url": "https://www.bonappetit.com/recipe/chipotle-rubbed-chicken-sheet-pan-dinner"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Wooden-Reamer/dp/B0007VO0DA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0007VO0DA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Small Bowl",
        "Citrus Reamer",
        "Plate"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a847752668fb87d44d16022/3:2/w_940,c_limit/ricotta-clementine-date-arugula-salad-16x9.jpg",
    "ingredients": [
        {
            "name": "Medjool dates",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "clementines",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "freshly ground black pepper, plus more",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "whole-milk ricotta",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "Small handful of arugula",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Crusty bread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Remove pits from 2 dates. Slice in half lengthwise, then thinly slice. Transfer to a small bowl.",
        "Slice 2 clementines in half crosswise. Pick out any exposed seeds and discard. Peel 2 halves, then separate into segments.",
        "Using a fork or citrus reamer, juice remaining halves over sliced dates; season with salt and pepper and toss.",
        "Mix 8 oz. ricotta, 1 tsp. salt, and 1/2 tsp. pepper in another small bowl. Smear across a serving plate.",
        "Scatter clementine segments over ricotta. Top with a small handful of arugula.",
        "Spoon date dressing over, then drizzle with oil. Serve with bread alongside."
    ],
    "title": "Ricotta and Clementines with Date Vinaigrette",
    "url": "https://www.bonappetit.com/recipe/ricotta-and-clementines-with-date-vinaigrette"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Whisk",
        "Tongs",
        "Colander",
        "Large Skillet"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5aa020eed0f2c930b46e7ffb/3:2/w_940,c_limit/weeknight-pad-thai.jpg",
    "ingredients": [
        {
            "name": "bunch scallions",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large eggs",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "roasted, salted peanuts",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "dried flat pad thai noodles or stir-fry rice noodles",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "tamarind juice concentrate (or 2 tbsp. tamarind paste mixed with 2 tbsp. water)",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "dark brown sugar",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "fish sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "chili-garlic sauce, such as sambal oelek or sriracha, plus more for serving",
            "quantity": "2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "vegetable oil",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "mung bean sprouts",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Lime wedges (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "First, some prep: Cut 1 bunch scallions crosswise to separate dark greens parts from light green parts and bulbs. Thinly slice scallions crosswise, keeping ends separate.",
        "Crack 4 eggs into a medium bowl and whisk to blend.",
        "Coarsely chop 1/3 cup peanuts.",
        "Place 8 oz. noodles in a medium heatproof bowl. Add boiling water to cover and let stand, tossing with tongs frequently, until soft and pliable but not tender, 7-10 minutes (depending on brand). Drain and rinse with cold water, then drain again.",
        "Whisk 1/4 cup tamarind concentrate, 3 Tbsp. brown sugar, 2 Tbsp. fish sauce, 2 tsp. chili-garlic sauce, and 1/4 cup hot water in same bowl you used to soak noodles.",
        "Heat 3 Tbsp. oil in a large skillet (at least 12\" in diameter) over medium-high. Add eggs and cook, stirring constantly, until dry curds form, 1-2 minutes.",
        "Add scallion whites, fish sauce mixture, and reserved noodles. Cook, tossing often with tongs, until sauce is mostly absorbed and noodles are well coated, about 3 minutes.",
        "Toss in scallion greens, 2 cups bean sprouts, and half of the chopped peanuts. Cook, tossing constantly, until heated through, about 1 minute more.",
        "Divide noodle mixture among plates. Top with chili-garlic sauce and remaining peanuts. Serve with lime wedges for squeezing alongside.",
        "Serve immediately\u2014and any time you're thinking about ordering delivery."
    ],
    "title": "Weeknight Pad Thai",
    "url": "https://www.bonappetit.com/recipe/weeknight-pad-thai"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-722-20-Classic-Stainless-Skillet/dp/B00008CM6A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Fork",
        "Small Bowl",
        "Small Skillet",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a847b1bbcc56579b57f2433/3:2/w_940,c_limit/roasted-sweet-potatoes-miso-tahini.jpg",
    "ingredients": [
        {
            "name": "small sweet potatoes (about 10 oz. total)",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "neutral oil, such as canola or grapeseed",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "tahini",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "white miso",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "distilled white vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "scallion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "raw sesame seeds",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        }
    ],
    "steps": [
        "Preheat oven to 450\u00b0. Rinse 2 sweet potatoes, rubbing to remove dirt from skins.",
        "Cut potatoes into quarters lengthwise, then cut each wedge in half crosswise into 2\"-long pieces (think a nice size to eat with your hands).",
        "Toss potatoes, 2 Tbsp. oil, and 1/2 tsp. salt on a rimmed baking sheet. Roast, tossing every 5 minutes, until a knife easily pierces flesh but exterior is still crispy, 15-20 minutes total (really important since you are cooking them at such a high temperature!).",
        "Meanwhile, mix 2 Tbsp. tahini, 2 Tbsp. miso, 2 tsp. vinegar, and 1 Tbsp. water with a fork in a small bowl until smooth.",
        "Trim root end off 1 scallion, then thinly slice from bulb to dark green tip.",
        "Heat a small dry skillet over medium. Toast 1 tsp. sesame seeds, tossing constantly, until fragrant and golden, about 30 seconds.",
        "Spread tahini sauce on a platter. Arrange potatoes over. Top with sesame seeds and scallions."
    ],
    "title": "Roasted Sweet Potatoes with Miso-Tahini Sauce",
    "url": "https://www.bonappetit.com/recipe/roasted-sweet-potatoes-miso-tahini-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/USA-Pan-Bakeware-Aluminized-Steel/dp/B002UNMZOO?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002UNMZOO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-HM-50-Power-Advantage-5-Speed/dp/B000TVWFEY?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000TVWFEY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Loaf Pan",
        "Parchment Paper",
        "Chef's Knife",
        "Cutting Board",
        "Whisk",
        "Large Bowl",
        "Electric Mixer",
        "Spatula",
        "Small Bowl",
        "Fork",
        "Cake Tester",
        "Wire Rack"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a9d5ccafc24be1b59dc40b7/3:2/w_940,c_limit/apple-butter-cinnamon-cake.jpg",
    "ingredients": [
        {
            "name": "(1 stick) plus 2 tbsp. unsalted butter, room temperature",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "dried apple rings",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "all-purpose flour",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "11/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "baking soda",
            "quantity": "1/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "ground cinnamon, divided",
            "quantity": "21/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "plus 1/4 cup sugar",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large eggs, room temperature",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "apple butter",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "vanilla extract",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        }
    ],
    "steps": [
        "Preheat oven to 350\u00b0. Rub 1/2 Tbsp. room temperature butter all over bottom and sides of an 8.5x4.5\" loaf pan with your fingertips. Line pan with a piece of parchment, leaving an overhang on two longer sides. Butter parchment with another 1/2 Tbsp. butter; set aside.",
        "Chop 2 oz. apple rings into 1/2\" pieces; set aside.",
        "Whisk 11/2 cups flour, 11/4 tsp. baking powder, 1/2 tsp. salt, 1/4 tsp. baking soda, and 2 tsp. cinnamon in a large bowl.",
        "Using an electric mixer on high speed, beat 1 cup sugar and 1/2 cup butter in another large bowl until very pale and light, about 4 minutes.",
        "Add 2 eggs and beat on medium speed until mixture is very fluffy, about 1 minute.",
        "Add 1 cup apple butter and 1/2 tsp. vanilla and beat until combined.",
        "Add dry ingredients and beat on low speed until flour disappears and batter is thick and smooth. Using a spatula, fold batter a few times by hand, scraping bottom and sides of bowl.",
        "Fold chopped dried apple pieces into batter, then scrape into prepared pan and smooth top.",
        "Melt remaining 1 Tbsp. butter in a small bowl (if you don\u2019t have a microwave, do this part in a small saucepan). Stir in remaining 1/4 cup sugar and 1/4 tsp. cinnamon with a fork until wet crumbs form.",
        "Sprinkle cinnamon-sugar crumbs evenly over top of batter. Bake cake until top is cracked and firm to the touch and a tester inserted into center comes out clean, 60-70 minutes.",
        "Let cool in pan 15 minutes, then cut around short sides and use parchment to lift out cake. Transfer to wire rack and let cool completely.",
        "Slice and serve.",
        "Do Ahead: Cake can be made 1 day ahead. Let cool completely, wrap with plastic, and store at room temperature."
    ],
    "title": "Apple Butter Spice Cake with Cinnamon Crumble",
    "url": "https://www.bonappetit.com/recipe/apple-butter-spice-cake-with-cinnamon-crumble"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Box Grater",
        "Microplane",
        "Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8478c6bcc56579b57f2431/3:2/w_940,c_limit/antipasta-hand-salad.jpg",
    "ingredients": [
        {
            "name": "cherry or grape tomatoes",
            "quantity": "8",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "red wine vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "unsliced spicy salami",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "parmesan cheese",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "castelvetrano olives (about 8)",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "chopped or dried oregano",
            "quantity": "1",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "romaine heart (about 8 oz.)",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Cut 8 oz. cherry tomatoes into quarters. Transfer to a medium bowl, then pour 1 Tbsp. vinegar over. Let sit while you prep remaining ingredients.",
        "Cut 2 oz. salami into small pieces about 1/4\" thick.",
        "Grate 2 oz. cheese on the large holes of a box grater.",
        "Pit 1/4 cup olives, then cut into quarters.",
        "Add salami, Parmesan, and olives to bowl with tomatoes.",
        "Using a microplane, finely grate 1 garlic clove into same bowl.",
        "Add 1 Tbsp. oil and 1 tsp. oregano and toss to combine.",
        "Slice off bottom of 1 romaine heart and divide into leaves.",
        "Serve hearts alongside salad, using each leaf as a boat for the salad.",
        "Do Ahead: Tomato salad can be made 1 day ahead. Cover and chill."
    ],
    "title": "Antipasti Hand Salad",
    "url": "https://www.bonappetit.com/recipe/antipasti-hand-salad"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Plate",
        "Dutch Oven",
        "Wooden Spoon",
        "Medium Bowl",
        "Paper Towels",
        "Tongs",
        "Platter",
        "Aluminum Foil",
        "Sieve",
        "Heatproof Measuring Cup"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8da1ab4cc2c47b122066f3/3:2/w_940,c_limit/soy-braised-short-ribs-with-bacon-pineapple-relish.jpg",
    "ingredients": [
        {
            "name": "bacon",
            "quantity": "4",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "medium red onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "3\" piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large bone-in beef short ribs (21/2-3 lb.)",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "soy sauce",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 1 tbsp. unseasoned rice wine vinegar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "brown sugar",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "sriracha or sambal oelek",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "fresh pineapple chunks (about 6 oz.)",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "cilantro leaves with tender stems",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Preheat oven to 300\u00b0. Prep your ingredients before you start cooking. First, coarsely chop 4 oz. bacon.",
        "Wash your cutting board (or just flip it over!) so that you're not cutting vegetables on the same surface that you used to prep raw meat. Peel 1 onion and cut into quarters; set one quarter aside for the relish. Cut remaining quarters into large pieces.",
        "Rinse 1 3\" piece ginger, then very thinly slice crosswise (no need to peel).",
        "Place 4 short ribs on a plate; season all over with salt and pepper, turning pieces to season every surface.",
        "Heat a Dutch oven over medium-low. Add bacon and cook, stirring often with a wooden spoon, until fat is rendered and bacon is crisp, 7-10 minutes. Meanwhile, line a medium bowl with paper towels. Using wooden spoon, transfer bacon to a medium bowl, leaving fat in pot. Blot bacon with paper towels, then discard paper towels, leaving bacon in bowl.",
        "Increase heat to medium-high and add short ribs. Cook, turning once or twice, until very well browned on at least two sides, 12-15 minutes (it\u2019s not necessary to brown all over as long as you get a sear on a couple sides).",
        "Transfer short ribs back to plate and reduce heat to medium. Add ginger and onion pieces to pot and cook, stirring often, until ginger is just starting to turn golden around the edges, about 3 minutes.",
        "Add 1/2 cup soy sauce, 1/2 cup rice vinegar, 2 Tbsp. brown sugar, 2 Tbsp. Sriracha, and 1 cup water; stir to combine. Arrange short ribs in Dutch oven in a single layer (it\u2019s okay if they\u2019re not fully submerged in liquid).",
        "Cover pot and transfer to oven. Bake 30 minutes, then remove pot from oven and turn short ribs with tongs.",
        "Cover pot and return to oven. Continue to bake, turning every 30 minutes, until short ribs are fork-tender and pulling away from the bone, 60-70 minutes longer.",
        "Transfer short ribs to a platter. Tent with foil to keep warm.",
        "Heat pot with juices over medium-high and bring to a boil. Cook until braising liquid is reduced by about half, 8-12 minutes.",
        "While juices are reducing, thinly slice reserved onion quarter. Add 1 cup pineapple chunks and sliced onion to bowl with bacon. Season lightly with salt and toss with remaining 1 Tbsp. rice vinegar.",
        "Place a strainer over a heatproof measuring cup and pour reduced juices through strainer. Discard solids. Let juices settle until fat rises to the top. Spoon off fat and discard.",
        "Pour de-fatted juices over short ribs. Spoon bacon-pineapple relish over meat and top with 1/4 cup cilantro.",
        "Do Ahead: Short ribs can be braised 1 day ahead. Let cool in (unreduced) braising liquid, cover, and chill. Reheat over low, then proceed with recipe. If making ahead, we recommend crisping fresh bacon for the relish."
    ],
    "title": "Braised Short Ribs with a Pretty Great Bacon-Pineapple Situation on Top",
    "url": "https://www.bonappetit.com/recipe/braised-short-ribs-with-bacon-pineapple"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Large Pot",
        "Chef's Knife",
        "Cutting Board",
        "Box Grater",
        "Dutch Oven",
        "Wooden Spoon",
        "Heatproof Measuring Cup",
        "Spider"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a8da4996497380283798c16/3:2/w_940,c_limit/rigatoni-with-vodka-sauce.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "medium onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "parmesan cheese",
            "quantity": "4",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "tube double-concentrated tomato paste",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "vodka",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "heavy cream",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "rigatoni",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "Basil leaves (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Fill a stock pot or other large pot three-quarters full with water and heat over high. Toss in a handful of salt and bring to a boil while you do your other prep.",
        "Peel and finely chop 1 onion.",
        "Firmly smash 4 garlic cloves with the flat side of a chef\u2019s knife and remove peel.",
        "Grate 4 oz. Parmesan on the smallest holes of the box grater.",
        "Heat 2 Tbsp. oil in a Dutch oven over medium (position it next to pot of water). Add onion and garlic and cook, stirring constantly, just until onion is starting to brown around the edges, 5-7 minutes.",
        "Add entire 4.5-oz. tube tomato paste and 1/2 tsp. red pepper flakes and stir until paste evenly coats onion. Continue to cook, stirring often, until paste is deep red and starting to brown on bottom of pot, 5-7 minutes.",
        "Add 2 oz. vodka to deglaze pan and stir to incorporate, scraping bottom of pot. Reduce heat to low.",
        "Using a heatproof glass measuring cup, scoop about 1/4 cup boiling water from pot, then add 3/4 cup heavy cream to measuring cup (this brings up the temperature of the cream so it won\u2019t break when you add it to the pot).",
        "Slowly add warmed cream to Dutch oven, stirring constantly, until a smooth sauce forms. Remove from heat.",
        "Add 1 lb. rigatoni to pot of boiling salted water and cook according to package instructions until al dente. About 1 minute before the timer goes off, use heatproof measuring cup to scoop up about 1 cup pasta cooking liquid. Heat Dutch oven over low.",
        "Using a spider, transfer rigatoni to Dutch oven along with any water that\u2019s piggybacking on the pasta.",
        "Add 1/2 cup pasta cooking liquid to Dutch oven and stir to incorporate, then gradually add half of Parmesan, stirring constantly to melt cheese. You should have a smooth, glossy sauce that coats each piece of pasta. Season with salt and add a splash more pasta cooking liquid to thin sauce, if needed.",
        "Divide pasta among bowls. Top with remaining cheese, dividing evenly. Drizzle with more oil, then tear basil leaves over."
    ],
    "title": "Rigatoni with Easy Vodka Sauce",
    "url": "https://www.bonappetit.com/recipe/rigatoni-with-easy-vodka-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Hamilton-Beach-Processor-Scraper-70730/dp/B008J8MJIQ?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008J8MJIQ?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/YHY-9-6-inch-Porcelain-Serving-Shallow/dp/B072R2YFB3/ref=sr_1_3?ie=UTF8&qid=1516209482&sr=8-3&tag=bonappfig-20",
        "https://www.amazon.com/J-B-Prince-U715-Sauce-Spoon/dp/B009OL3UZI?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Colander",
        "Chef's Knife",
        "Cutting Board",
        "Food Processor",
        "Shallow Serving Bowl",
        "Large Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a845d048ca2430893f4deca/3:2/w_940,c_limit/hummus-16x9.jpg",
    "ingredients": [
        {
            "name": "can chickpeas",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "large lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "tahini, well mixed",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "(or more) kosher salt",
            "quantity": "3/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "cranks freshly ground black pepper",
            "quantity": 10,
            "type": "unitless"
        },
        {
            "name": "ground cumin",
            "quantity": "1/4",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Za\u2019atar and/or sesame seeds (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Start by prepping all of your ingredients: Drain 151/2 oz. chickpeas in a strainer or colander and rinse thoroughly. Let drain again while you do the other prep.",
        "Cut 1 lemon in half, remove any visible seeds, and squeeze juice into a small bowl. You should have 3-4 Tbsp.",
        "Smash 1 garlic clove with the flat side of your knife on a cutting board and remove peel. Continue to mash with side of knife until a paste forms. (You can also grate garlic on a microplane if you have one\u2014you're just looking for a fine paste.)",
        "Combine drained chickpeas, 3 Tbsp. lemon juice, garlic, 1/2 cup tahini, 3/4 tsp. salt, 10 cracks pepper, 1/4 tsp. cumin, and 2 Tbsp. water in a food processor.",
        "Process until smooth, about 1 minute.",
        "With the motor running, stream in 3 Tbsp. oil, then continue to process until hummus is very light and creamy, about 1 minute longer. Taste and season with more salt, if needed.",
        "Transfer hummus to a shallow bowl, top with za\u2019atar and/or sesame seeds, and drizzle with more oil.",
        "Do Ahead: Hummus can be made 4 days ahead. Transfer to an airtight container and chill."
    ],
    "title": "Classic Chickpea Hummus",
    "url": "https://www.bonappetit.com/recipe/classic-chickpea-hummus"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Large Pot",
        "Chef's Knife",
        "Cutting Board",
        "Box Grater",
        "Whisk",
        "Medium Bowl",
        "Dutch Oven",
        "Wooden Spoon",
        "Heatproof Measuring Cup",
        "Colander",
        "Tongs"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/3:2/w_940,c_limit/pasta-carbonara.jpg",
    "ingredients": [
        {
            "name": "kosher salt, plus more",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "guanciale (salt-cured pork jowl), pancetta (italian bacon), or bacon",
            "quantity": "4",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "parmesan",
            "quantity": "2",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "large egg yolks",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "large eggs",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "spaghetti, bucatini, or rigatoni",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        }
    ],
    "steps": [
        "Heat 6 qt. water in a large pot over high. When water starts to steam, add 3 Tbsp. salt and cover pot with a lid (this will bring water to a boil faster).",
        "While you are waiting on the water, do a little prep. Remove 4 oz. guanciale from packaging and cut into about 1x1/4\" strips. Finely grate 2 oz. cheese and set aside one-quarter of cheese for later.",
        "Whisk 4 egg yolks and 2 whole eggs in a medium bowl until no streaks remain, then stir in remaining grated cheese. Add several cranks of pepper and set aside.",
        "Working next to pot, heat 2 Tbsp. oil in a large Dutch oven or other heavy pot over medium. Add guanciale and cook, stirring occasionally, until crisp around the edges, 7-10 minutes.",
        "Remove pot from heat. Using a wooden spoon, fish out guanciale and transfer to a small bowl. Pour fat into a heatproof measuring cup, then add back about 3 Tbsp. to pot. Discard any remaining fat.",
        "Cook 1 lb. pasta in boiling water, stirring occasionally, 2 minutes shy of package instructions. Just before pasta is finished, scoop out 13/4 cups pasta cooking liquid with same heatproof measuring cup.",
        "Add 1 cup reserved pasta cooking liquid to Dutch oven and bring to a boil over medium-high. Drain pasta in a colander, then transfer to Dutch oven.",
        "Cook pasta, stirring constantly and vigorously, until al dente and water is reduced by about half, about 2 minutes. Remove pot from heat.",
        "Whisk 1/4 cup pasta cooking liquid into reserved egg mixture, then very slowly stream into Dutch oven, stirring constantly, until cheese is melted and egg is thickened to form a glossy sauce. Season with salt, if needed. Thin sauce with remaining 1/2 cup pasta cooking liquid, adding a tablespoonful at a time, until it's the consistency of heavy cream (you most likely won\u2019t use all of it).",
        "Mix in guanciale and divide pasta among bowls. Top with pepper and reserved cheese."
    ],
    "title": "Simple Carbonara",
    "url": "https://www.bonappetit.com/recipe/simple-carbonara"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/All-Clad-Stainless-Tri-Ply-Dishwasher-Cookware/dp/B004T6J64M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004T6J64M&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Large Straight-Sided Skillet",
        "Tongs",
        "Dutch Oven",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a6f554be33c87777e9466f5/3:2/w_940,c_limit/sausage-peppers-sub.jpg",
    "ingredients": [
        {
            "name": "red and/or yellow bell peppers",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "poblano chile",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "small onions",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "soft Italian sandwich rolls",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "sweet italian sausage (about 8 links)",
            "quantity": "2",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "tomato paste",
            "quantity": "2",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "red wine vinegar",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Cut 4 bell peppers and 1 poblano chile in half lengthwise. Using your fingers, pull out stems and ribs, then tap out seeds. Slice lengthwise into 1/4\" strips.",
        "Peel 3 onions and cut in half through root end. Cut a V-shaped notch into root to remove. Slice each half into 3 lengthwise wedges.",
        "Peel 6 garlic cloves and thinly slice.",
        "Slice 3 rolls lengthwise without cutting all the way through (so 2 sides remain attached).",
        "Place 2 lb. sausages in a large straight-sided skillet and cover with cold water just until sausages are submerged. Heat over medium-high and cook, uncovered, just until water reaches a gentle boil, 6-8 minutes. Remove from heat. Transfer sausages (they will be fully cooked) with tongs to a plate; set aside. Dump water from skillet; reserve skillet.",
        "While sausages cook, heat 2 Tbsp. oil in a large Dutch oven over medium. Add onions and garlic and cook, stirring often, just until onions are beginning to soften, 5-8 minutes.",
        "Add bell peppers, chile, and another 1 Tbsp. oil to pot; season generously with salt and pepper. Stir to combine, then increase heat to medium-high. Cover and cook, uncovering to stir occasionally, until peppers are tender, 10-15 minutes.",
        "Create a clearing in the middle of the pot and add 2 Tbsp. tomato paste. Stir paste until darkened in color and is sticking to bottom of pot, about 3 minutes.",
        "Add 1/3 cup vinegar and stir to dissolve paste and combine with peppers and onions. Cover and cook, stirring occasionally, until peppers and onions are very tender, 8-10 minutes longer. Season with more salt and pepper.",
        "Meanwhile, slice sausages in half lengthwise.",
        "Heat remaining 2 Tbsp. oil in reserved skillet over medium-high. Add half of sausages cut side down and cook, pressing down to ensure full contact with pan, until cut sides are browned, about 3 minutes. Transfer back to plate and repeat with remaining sausages.",
        "Divide half of peppers and onions mixture among rolls, then arrange seared sausage halves over.",
        "Top with remaining peppers and onion mixture. Cut sandwiches in half crosswise and serve."
    ],
    "title": "Sausage, Peppers, and Onions Subs",
    "url": "https://www.bonappetit.com/recipe/sausage-peppers-and-onions-subs"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-24N-MultiClad-Stainless-10-Inch/dp/B009P4851S?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P4851S?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Solid-Stainless-Steel/dp/B003BEDQL2?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B003BEDQL2?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Glass Measuring Cup",
        "Measuring Spoons",
        "Medium Skillet",
        "Whisk",
        "Medium Bowl",
        "Plastic Wrap",
        "Chef's Knife",
        "Cutting Board",
        "Small Saucepan",
        "Ice Cream Scoop"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a675d620da9fc5892ef09f5/3:2/w_940,c_limit/chocolate-dutch-baby.jpg",
    "ingredients": [
        {
            "name": "large eggs",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "all-purpose flour",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sugar",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsweetened cocoa powder",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "3/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "whole milk",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bittersweet, semisweet, or milk chocolate",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "heavy cream",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsalted butter",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Coffee ice cream (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Arrange a rack in center of oven; preheat to 425\u00b0. Place a dry medium skillet on rack to preheat.",
        "Whisk 3 eggs,  1/3 cup flour, 1/4 cup sugar, 3 Tbsp. cocoa powder, and 3/4 tsp. salt in a medium bowl until smooth.",
        "Whisking constantly, slowly stream 1/2 cup milk into egg mixture. Cover with plastic and let batter rest 15 minutes.",
        "Meanwhile, chop 1 oz. chocolate and transfer to a small saucepan. Add 1/4 cup cream and cook over low heat, whisking often, until chocolate is melted and mixture is completely smooth; season with a pinch of salt. Keep warm over low heat.",
        "Remove skillet from oven and add 1 Tbsp. butter; swirl skillet to melt, making sure to coat entire bottom and sides of skillet.",
        "Give batter a quick whisk to reincorporate, then pour into skillet. Quickly transfer to oven, taking care because the handle is hot.",
        "Cook until pancake is dramatically puffed and edges are curling inward toward center but center is still moist, 10-12 minutes. Remove skillet from oven (watch for that handle again) and let rest about 2 minutes. The pancake will immediately begin to fall, but that\u2019s normal. Meanwhile, pull ice cream out of freezer to let it soften slightly.",
        "Top with 2 scoops ice cream and drizzle with warm chocolate sauce; serve warm."
    ],
    "title": "Chocolate Dutch Baby",
    "url": "https://www.bonappetit.com/recipe/chocolate-dutch-baby"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Paper Towels",
        "Plate",
        "Tongs",
        "Vegetable Peeler",
        "Cast Iron Skillet",
        "Cutting Board",
        "Chef's Knife",
        "Medium Bowl",
        "Instant-Read Thermometer"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a60e9839af01310221d533d/3:2/w_940,c_limit/pork-chop-with-endive-and-apple-salad.jpg",
    "ingredients": [
        {
            "name": "bone-in pork loin chop, 1-11/2\" thick",
            "quantity": "1",
            "type": "unit",
            "unit": "lb"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "parmesan",
            "quantity": "1",
            "type": "unit",
            "unit": "oz"
        },
        {
            "name": "raw unblanched hazelnuts",
            "quantity": "3",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "medium shallot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large or 2 small Belgian endive",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "honey, divided",
            "quantity": "21/2",
            "type": "unit",
            "unit": "tsp"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tbsp"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "small Pink Lady apple",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "You want to season your 1 lb. pork loin chop (1-11/2\" thick) in advance and let it sit out at room temperature (it cooks much more evenly that way). Pat chop dry with paper towels and place on a plate. Season generously on both sides with salt and pepper, turning with tongs; set aside while you do your prep (it can sit at room temperature up to 1 hour, but prep won\u2019t take you that long).",
        "Shave 1 oz. Parmesan cheese with a vegetable peeler, then use your fingers to break into small shards. Cover with a damp paper towel (to prevent it from drying out).",
        "Using the bottom of a medium skillet, preferably cast iron, smash 3 Tbsp. hazelnuts, a few at a time, on a cutting board, breaking into bits.",
        "Peel 1 shallot, then finely chop.",
        "Separate leaves from 1 large or 2 small endive, trimming from the bottom as you work your way to the core. Place in a medium bowl, cover with damp paper towel, and chill until ready to use.",
        "Preheat skillet you used to smash hazelnuts over medium heat. Drizzle 1/2 tsp. honey over one side of pork chop, then drizzle with 1 Tbsp. oil. Rub with clean hands all over surface of chop, then turn and rub second side with same honey-oil mixture to evenly coat (this will help the pork caramelize as you cook it).",
        "Lay pork in skillet and cook, leaving it be, until first side is dark brown and caramelized all over, about 3 minutes. Turn and cook second side until browned, about 3 minutes longer. Turn pork chop upright and hold on its side with tongs to sear fat cap; cook about 2 minutes.",
        "Turn heat to low and cook chop another minute on both sides. Transfer to cutting board and insert an instant-read thermometer into middle of chop, about 1/2\" from bone. It should register about 130\u00b0. If it\u2019s under, cook another minute or two, then let rest on cutting board 5-10 minutes. Remove skillet from heat.",
        "Add hazelnuts and 2 Tbsp. oil to skillet. Cook over medium-low heat, stirring with tongs, until hazelnuts turn golden, about 3 minutes.",
        "Add shallots; season with salt and pepper. Cook, stirring often, until shallots are softened and browned and hazelnuts smell toasty, about 2 minutes.",
        "Stir in remaining 2 tsp. honey. Cut 1 lemon in half and squeeze juice from one half into skillet. Stir to combine, then remove from heat.",
        "Cut around core of 1 apple, removing flesh in 3 lobes. Thinly slice 2 of the 3 pieces, then snack on the remaining piece if you like.",
        "Remove bowl of endive from refrigerator and add apple and cheese; season with salt and pepper. Drizzle with remaining 1 Tbsp. oil, squeeze second lemon half over, and toss to coat.",
        "Cut bone away from chop and cut meat into 1/2\"-thick slices. Place pork and bone on one side of a large plate and pour juices over; season with salt.",
        "Gently arrange salad next to chop. Spoon shallot-hazelnut mixture over salad and pork and serve."
    ],
    "title": "Date Night Pork Chop",
    "url": "https://www.bonappetit.com/recipe/date-night-pork-chop"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/YHY-9-6-inch-Porcelain-Serving-Shallow/dp/B072R2YFB3/ref=sr_1_3?ie=UTF8&qid=1516209482&sr=8-3&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Sieve",
        "Cutting Board",
        "Vegetable Peeler",
        "Small Saucepan",
        "Shallow Serving Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a5e2ad54c8d2e4841a187a1/3:2/w_940,c_limit/marinated-olives-and-feta-appetizer.jpg",
    "ingredients": [
        {
            "name": "drained castelvetrano, cerignola, or other unpitted green olives",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "garlic cloves",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "feta",
            "quantity": "3",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Crusty bread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 400\u00b0. Drain 4 oz. olives and place on a cutting board. Lightly smash with the heel of your hand just to break apart skin and flatten slightly.",
        "Smash 3 garlic cloves and peel.",
        "Using a vegetable peeler, remove peel from 1 lemon in long wide strips.",
        "Cook lemon peel, olives, garlic, 1/2 cup oil, and 1/2 tsp. red pepper in a small saucepan over medium-low heat, swirling occasionally, until garlic is sizzling and golden around the edges, 5-7 minutes.",
        "Meanwhile, crumble 3 oz. feta into a shallow serving bowl.",
        "Pour oil mixture over feta. Let sit at least 10 minutes and up to 1 hour.",
        "Meanwhile, tear bread into large pieces and place in oven directly on rack. Bake until craggy edges are golden, 5-8 minutes. Serve with marinated feta and olives for dipping."
    ],
    "title": "Marinated Olives and Feta",
    "url": "https://www.bonappetit.com/recipe/marinated-olives-and-feta"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/ZWILLING-Madura-Plus-Forged-Nonstick/dp/B0153VZV7C?&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Chef's Knife",
        "Cutting Board",
        "Measuring Cups",
        "Measuring Spoons",
        "Whisk",
        "Medium Bowl",
        "Spatula",
        "Medium Nonstick Skillet",
        "Plate"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a3831db9c6db03fdcaf229f/3:2/w_940,c_limit/use-it-up-fritatta-16x9.jpg",
    "ingredients": [
        {
            "name": "large eggs",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "leftover roasted vegetables, cut into 1/2-inch pieces (about 11/2 cups)",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "leftover cooked grains",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "coarsely grated or crumbled cheese",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "finely chopped tender herbs, such as thyme, basil, and/or chives",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Vigorously whisk 6 eggs in a medium bowl until streak-free.",
        "Add 5 oz. vegetables, 1/2 cup grains, 1 oz. grated cheese, and 1 Tbsp. herbs; season with salt and pepper. Mix with a rubber spatula to combine.",
        "Heat 1 Tbsp. oil in a medium nonstick skillet over medium; swirl skillet to coat with oil.",
        "Add egg mixture and cook until edges are set, about 30 seconds.",
        "Using spatula, agitate eggs by scraping bottom of skillet in a small circular motion and bringing edges toward center of pan to form large curds, then let mixture sit undisturbed until edges are set again, about 1 minute.",
        "Reduce heat to low and continue to cook, tilting skillet and lifting edges up with spatula to allow uncooked egg to flow underneath and around sides, until surface is wet but center is mostly set when you shake the pan, about 5 minutes.",
        "Shake skillet to loosen frittata. Place a large plate over skillet and invert frittata onto plate.",
        "Heat remaining 1 Tbsp. oil in skillet over medium, swirling to coat. Slide frittata back into skillet; reduce heat to low. Cook until set all the way through, about 3 minutes.",
        "Let frittata cool in skillet 5 minutes, then invert onto a cutting board.",
        "Season frittata with salt and pepper. Cut into wedges to serve.",
        "Do Ahead: Frittata can be made 1 day ahead. Cover and chill. Bring to room temperature before serving."
    ],
    "title": "Use-It-Up Frittata",
    "url": "https://www.bonappetit.com/recipe/use-it-up-frittata"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Spoon",
        "Dutch Oven",
        "Wooden Spoon",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a4e53204829cf767fcd9318/3:2/w_940,c_limit/vegan-coconut-lentil-soup.jpg",
    "ingredients": [
        {
            "name": "large onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "3-inch piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "virgin coconut oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "curry powder",
            "quantity": "5",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "cayenne pepper",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "can unsweetened coconut milk",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "split red lentils",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsweetened shredded coconut",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "box frozen spinach, thawed",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "can crushed tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Plain whole-milk or non-dairy yogurt (for serving; optional)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Peel 1 onion and chop.  Smash 6 garlic cloves with the flat side of your knife. Peel, then finely chop. Peel 3\" piece ginger with a small spoon, then finely chop.",
        "Heat 2 Tbsp. oil in large Dutch oven over medium. Add onion and cook, stirring often, just until translucent, 6-8 minutes.",
        "Add garlic and ginger and cook, stirring often, until garlic is starting to turn golden, about 5 minutes.",
        "Add 5 tsp. curry powder and 1/2 tsp. cayenne and cook, stirring constantly, until spices are aromatic and starting to stick to bottom of pot, about 1 minute.",
        "Add 13.5 oz. coconut milk and stir to loosen spices, then stir in 1 cup lentils, 1/2 cup shredded coconut, 2 tsp. salt, and 5 cups water.",
        "Bring to a boil over medium-high heat, then reduce heat to medium-low to keep soup at a gentle simmer. Cook, stirring occasionally, until lentils are broken down and soup is thickened, 25-30 minutes.",
        "Meanwhile, remove 10 oz. thawed frozen spinach from packaging and squeeze between your hands over sink to remove excess water. Transfer to cutting board and coarsely chop.",
        "Add spinach and 15 oz. tomatoes to pot and stir to combine. Taste and season with more salt. Simmer just to let flavors meld, about 5 minutes. Taste and season again with more salt.",
        "Ladle soup into bowls. Top with yogurt, if desired."
    ],
    "title": "Vegan Coconut Lentil Soup",
    "url": "https://www.bonappetit.com/recipe/vegan-coconut-lentil-soup"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Can-Opener/dp/B00004OCJW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Plate",
        "Paper Towels",
        "Chef's Knife",
        "Cutting Board",
        "Can Opener",
        "Large Skillet",
        "Tongs",
        "Small Bowl",
        "Large Pot",
        "Colander",
        "Large Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a3830655a60b108cf7a9492/3:2/w_940,c_limit/chicken-paprikash-16x9.jpg",
    "ingredients": [
        {
            "name": "sour cream",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bone-in, skin-on chicken thighs (about 6 large or 8 small)",
            "quantity": "21/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "large onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "unsalted butter, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "paprika",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "cayenne pepper",
            "quantity": "1/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "can crushed tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "egg noodles",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "parsley leaves with tender stems",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Preheat oven to 300\u00b0. Take sour cream out of fridge\u2014it needs to come to room temperature. Place 21/2 pounds chicken thighs on a plate and pat dry with paper towels. Season both sides with salt and pepper.",
        "Set chicken aside for a few minutes and bang out your other prep. Peel and chop 1 onion. Smash 4 garlic cloves with the flat side of your knife and peel. Open 15-oz. can tomatoes.",
        "Heat a large ovenproof skillet over medium-high. Add 1 Tbsp. butter and swirl to melt. Using tongs, add chicken skin side down and cook, lifting up thighs once or twice to let rendered hot fat run underneath, until skin is golden brown and crisp, 8-10 minutes. Transfer chicken skin side up to a plate.",
        "Pour off fat from skillet into a small heatproof bowl, leaving a thin layer coating the bottom (reserve fat for another use). Reduce heat to low. Add onion and garlic; season with salt and pepper. Cook, stirring often to dissolve browned bits on bottom of skillet, until onions are translucent, 6-8 minutes.",
        "Add 3 Tbsp. paprika and 1/4 tsp. cayenne. Cook, stirring constantly, just until onions are evenly coated and spices are fragrant, about 30 seconds (the spices burn very easily, turning them bitter and chalky, so make sure to keep them moving in skillet and have can of tomatoes close at hand).",
        "Add tomatoes to skillet. Fill can two-thirds with water and swirl, then add to skillet. Stir until incorporated, season with several pinches of salt, and bring to a simmer.",
        "Using tongs, arrange thighs skin side up back in skillet (along with any accumulated juices), nestling into liquid but not submerging (you want the skin to be exposed so it stays crispy).",
        "Transfer skillet to oven and roast until chicken is fully cooked and tender enough to release from the bone when prodded with a fork, 35-40 minutes.",
        "About halfway through chicken cook time in the oven, bring a large pot of salted water to a boil. Add 12 oz. egg noodles and cook according to package instructions, stirring occasionally with tongs. Drain noodles in a colander. Transfer to a large bowl, add remaining 2 Tbsp. butter, and toss to coat until butter is melted and noodles are coated. Season with salt and pepper.",
        "Finely chop 1/2 cup parsley and add half to noodles; toss to coat.",
        "Carefully remove skillet from oven (handle will be hot!). Using tongs, transfer chicken skin side up to a clean plate. Taste sauce and season with more salt and pepper, if needed. Spoon about 1/4 cup sauce into a small bowl and stir in sour cream until smooth (this slowly brings up the temperature of the sour cream so it doesn\u2019t split when it hits the hot skillet). Pour back into skillet and stir to combine.",
        "Arrange chicken thighs and juices back in skillet and top with remaining chopped parsley. Serve over noodles."
    ],
    "title": "Chicken Paprikash with Buttered Egg Noodles",
    "url": "https://www.bonappetit.com/recipe/chicken-paprikash-with-buttered-egg-noodles"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "http://www.chicagometallicbakeware.com/bakeware-25/product-series/commerical-ii/cookie-jelly-roll-pans/set-of-2-small-jelly-roll-pans.html",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Small Rimmed Baking Sheet",
        "Medium Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Fork",
        "Microplane",
        "Whisk",
        "Paper Towels",
        "Large Bowl",
        "Box Grater"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a3aa2d300190231c0f0caa0/3:2/w_940,c_limit/kale-and-brussels-sprout-salad.jpg",
    "ingredients": [
        {
            "name": "raw sunflower seeds",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 1/3 cup extra-virgin olive oil",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "1/2 small shallot",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "1/2 large lemon",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "large bunch Tuscan kale (about 3/4 pound)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "brussels sprouts",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "parmesan",
            "quantity": "2",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Pink Lady apple",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 350\u00b0. Toss 1/4 cup sunflower seeds and 1 tsp. oil on a small rimmed baking sheet. Season with salt and pepper. Roast until darkened and very fragrant, 7-10 minutes. Let cool.",
        "Meanwhile, start to build vinaigrette in a medium bowl. Finely chop shallot half and transfer to bowl. Using the tines of a fork or a reamer, juice lemon half over bowl. Discard seeds; you should have about 2 Tbsp. juice. Using a microplane, finely rate 1 garlic clove into bowl. Whisk in 2 Tbsp. Dijon mustard; season with salt and pepper.",
        "Wash and dry 1 bunch kale, then pat leaves dry with a clean towel. Strip leaves from thick stems, discarding stems, then thinly slice leaves. Transfer to a large bowl.",
        "Trim knobby end of 6 oz. brussels sprouts and pull off any dried or gnarly outer leaves. Cut all brussels in half lengthwise, then arrange halves cut side down on board and very thinly slice. Add to bowl with kale.",
        "Grate 2 oz. Parmesan on the small holes of a box grater.",
        "Slice 1 apple in half, cut out core and seeds, then thinly slice. Add to bowl with kale. Snack on remaining apple.",
        "Whisk remaining 1/4 cup oil into bowl with lemon mixture.",
        "Drizzle dressing over kale mixture; season with salt and pepper. Toss with your hands to coat.",
        "Add cheese and sunflower seeds and toss lightly to incorporate.",
        "Do Ahead: Dressing, kale mixture, and toasted sunflower seeds can be prepared 8 hours ahead. Cover dressing and kale mixture separately and chill. Cover sunflower seeds and store at room temperature."
    ],
    "title": "Winter Crunch Salad",
    "url": "https://www.bonappetit.com/recipe/winter-crunch-salad"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Vegetable Peeler",
        "Colander",
        "Large Bowl",
        "Large Pot",
        "Wooden Spoon",
        "Box Grater",
        "Rimmed Baking Sheet",
        "Aluminum Foil",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a3950049c6db03fdcaf24ad/3:2/w_940,c_limit/creamy-tomato-soup-with-cheese-toasties.jpg",
    "ingredients": [
        {
            "name": "garlic cloves",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "large onions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "medium carrots",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "hot smoked paprika",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "sharp cheddar cheese",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "can crushed tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "worcestershire sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "sour cream or whole-milk greek yogurt, plus more for serving",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "thick-cut slices country bread",
            "quantity": 4,
            "type": "unitless"
        }
    ],
    "steps": [
        "Cut 1 garlic clove in half and set aside. Smash remaining 5 garlic cloves and peel. Peel 2 onions and coarsely chop. Peel 2 carrots and coarsely chop. Open and drain 28-oz. can tomatoes into a colander set over a large bowl to catch juices.",
        "Heat 3 Tbsp. oil in a large pot or Dutch oven over medium. Add garlic, onion, and carrots; season with salt and pepper. Cook, stirring often, until onion is translucent and just starting to brown around the edges, 8-10 minutes.",
        "Add 1 tsp. paprika and stir to coat vegetables. Cook, stirring, until fragrant.  Add whole tomatoes and cook, stirring often, until tomatoes start to burst and break down, 10-15 minutes.",
        "Meanwhile, grate 4 oz. cheddar cheese on the large holes of a box grater.",
        "Add 15-oz. can crushed tomatoes, reserved tomato juices, 2 Tbsp. Worcestershire sauce, and 1 cup water to pot and season with salt and pepper. Bring to a simmer, reduce heat to low, and cook 8-10 minutes, just to help flavors meld.",
        "Remove from heat and pure\u0301e soup with an immersion blender until smooth.",
        "Stir about 1/4 cup hot soup into 1/4 cup sour cream in a small bowl, then stir back into soup (for a creamier soup, feel free to add more). Taste and season with more salt and pepper, if needed. Don\u2019t let soup come back to a boil at this point or sour cream may split.",
        "Place a rack in top position of oven; heat broiler. Place 4 slices bread on foil-lined rimmed baking sheet and drizzle both sides with remaining 2 Tbsp. oil.",
        "Broil bread until one side is golden and toasted, then remove from oven and turn slices. Broil until second side is golden.",
        "Remove from oven and rub cut sides of remaining garlic cloves over top of toasted bread.",
        "Arrange grated cheese over bread, dividing evenly. Broil until cheese is melted and bubbling.",
        "Ladle soup into bowl and top with a dollop of sour cream.",
        "Cut bread into soldiers and serve with soup.",
        "Do Ahead: Soup can be made 3 days ahead. Let cool, cover, and chill. Reheat gently over medium-low, stirring occasionally."
    ],
    "title": "Creamy Tomato Soup with Cheese Toasties",
    "url": "https://www.bonappetit.com/recipe/creamy-tomato-soup-cheese-toasties"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-719-16-Classic-Stainless-Saucepan/dp/B00008CM69?tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Whisk",
        "Medium Saucepan",
        "Medium Bowl",
        "Plastic Wrap",
        "Small Saucepan",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a25cd4ff6c5233cc2301d0d/3:2/w_940,c_limit/chocolate-nutella-pudding.jpg",
    "ingredients": [
        {
            "name": "bittersweet or semisweet chocolate",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "cornstarch",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sugar",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsweetened cocoa powder",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "whole milk",
            "quantity": "3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "vanilla extract",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "nutella",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "whole raw hazelnuts",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "unsalted butter",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Flaky sea salt",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Chop 4 oz. chocolate; set aside. Whisk 1/4 cup cornstarch, 1/4 cup sugar, 1/4 cup cocoa powder, and 1 tsp. kosher salt in a medium saucepan. Very slowly stream in 3 cups milk, whisking constantly, until lump-free.",
        "Cook over medium heat, whisking constantly and vigorously, until pudding is bubbling and thick enough that wires of whisk leave a trail, 7-10 minutes.",
        "Remove from heat. Whisk in one-quarter of the chopped chocolate until smooth. Add remaining chocolate in three additions, whisking after each addition, until chocolate is melted and mixture is smooth. Whisk in 1 tsp. vanilla.",
        "Place 1 cup Nutella in a medium bowl and add about 1/2 cup warm pudding mixture. Whisk until smooth, then whisk in remaining pudding mixture until incorporated. Cover pudding with plastic, pressing directly onto surface to prevent a skin from forming. You can let it cool slightly at this point and serve warm, or chill pudding until completely set, at least 2 hours.",
        "Meanwhile, crush 1/2 cup hazelnuts with the bottom of a small saucepan to break into irregular bits. Cook hazelnuts and 2 Tbsp. butter in saucepan over medium heat, stirring often, until butter is browned and hazelnuts are golden, 8-10 minutes. Let cool.",
        "If serving pudding warm, divide among bowls or ramekins. (Or, you know, feel free to eat it right out of the pot.) If pudding is chilled, transfer to a large bowl and whisk until smooth before serving. Top with hazelnuts and a sprinkle of sea salt.",
        "Do Ahead: Pudding can be made 3 days ahead. Cover, pressing plastic directly onto surface, and keep chilled."
    ],
    "title": "Chocolate Nutella Pudding",
    "url": "https://www.bonappetit.com/recipe/chocolate-nutella-pudding"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-Recipe-Right-Oblong-Cover/dp/B000FCD118?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000FCD118?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Small Bowl",
        "Rimmed Baking Sheet",
        "13x9\" Baking Dish",
        "Instant-Read Thermometer"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a33eae35a60b108cf7a9301/3:2/w_940,c_limit/weeknight-porchetta.jpg",
    "ingredients": [
        {
            "name": "garlic cloves, plus 2 whole heads",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "sprigs rosemary",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "fennel seeds",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "kosher salt",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "pork tenderloin",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "slices bacon",
            "quantity": 4,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. Peel and finely chop 4 garlic cloves. Cut 2 whole heads of garlic in half crosswise. Strip leaves off 1 rosemary sprig, discard stem, and finely chop leaves. Finely chop 1 Tbsp. fennel seeds.",
        "Mix chopped garlic, chopped rosemary, chopped fennel seeds, salt, and 1 Tbsp. oil in a small bowl; season with pepper.",
        "Rub garlic mixture all over 11/2 lb. pork tenderloin on a rimmed baking sheet (if you have time to do this in the morning, great; chill pork until dinner).",
        "Scatter remaining 4 rosemary sprigs in a large baking dish and set tenderloin on top. Wrap 4 bacon slices around tenderloin, tucking ends underneath so bacon stays put.",
        "Nestle halved heads of garlic around tenderloin and drizzle with remaining 1 Tbsp. oil.",
        "Roast until an instant-read thermometer inserted into thickest part of tenderloin registers 145\u00b0 for medium, 30-40 minutes. Transfer to a cutting board and let rest at least 10 minutes before slicing.",
        "Do Ahead: Pork can be rubbed with garlic mixture 1 day ahead. Cover and chill."
    ],
    "title": "Bacon-Wrapped Pork Tenderloin",
    "url": "https://www.bonappetit.com/recipe/weeknight-porchetta"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Large Pot",
        "Box Grater",
        "Cutting Board",
        "Chef's Knife",
        "Cast Iron Skillet",
        "Wooden Spoon",
        "Colander",
        "Aluminum Foil",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a31a6035468684549cf8def/3:2/w_940,c_limit/one-pot-baked-pasta-with-sausage-and-broccoli-rabe.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "fontina and/or aged cheddar cheese",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "garlic cloves",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "large sprigs sage",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "bunch of broccoli rabe",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plus 1 tablespoon extra-virgin olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sweet or hot italian sausage",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "half-and-half",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ridged medium pasta shells, or large tube pasta, such as lumaconi or rigatoni",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        }
    ],
    "steps": [
        "Place racks in center and upper third of oven; preheat to 325\u00b0. Heat a large pot of water over high. Add several tablespoons of salt and bring to a boil (this is for your pasta).",
        "Grate 12 oz. Fontina cheese on the large holds of a box grater (you should have about 41/2 cups). Smash 6 garlic cloves, peel, and coarsely chop. Pick all sage leaves from stems and set aside about 10. Finely chop remaining leaves (you should have about 1 Tbsp.). Trim tough dried ends from 1 bunch of broccoli rabe, then cut stems into 2\" pieces. Leave leafy ends long.",
        "Heat a deep, large, ovenproof skillet, preferably cast iron, over medium-high. Add 1/4 cup oil and swirl to coat. Remove 1 lb. sausage from casings and add to skillet. Break into small pieces with a wooden spoon. Cook, undisturbed, until sausage is browned, about 4 minutes. Stir a couple of times and continue to cook, undisturbed again, until sausage is fully cooked through, about 3 minutes longer.",
        "Add garlic, chopped sage, and 1/2 tsp. red pepper and cook, stirring, until garlic is golden, about 2 minutes.",
        "Stir in 2 cups half-and-half and simmer until sauce is thickened slightly, about 2 minutes. Reduce heat to low.",
        "Gradually add about two-thirds of cheese, bit by bit, stirring constantly and letting cheese melt completely before adding more, until sauce is smooth and thick, about 3 minutes; season with salt and remove from heat.",
        "Meanwhile, cook 1 lb. pasta shells in boiling salted water 2 minutes shy of package instructions (8-10 minutes depending on type). During the last 2 minutes, add all of broccoli rabe to pot with pasta. Drain in a colander and shake several times to remove excess water. Return pasta and broccoli rabe to empty pasta pot.",
        "Add cheesy sausage mixture from skillet to pot with pasta. Stir until pasta and broccoli rabe are coated in sauce, then transfer everything back to skillet.",
        "Cover skillet tightly with foil and bake on center rack until pasta is tender and sauce is bubbling, 30-40 minutes. Let rest a few minutes while you heat broiler.",
        "Remove foil and top with remaining cheese. Toss sage leaves with remaining 1 Tbsp. oil in a small bowl and arrange over pasta. Broil until cheese is browned and bubbling in spots, about 5 minutes (depending on strength of broiler).",
        "Let pasta cool a minute or two before serving."
    ],
    "title": "One-Pot Baked Pasta with Sausage and Broccoli Rabe",
    "url": "https://www.bonappetit.com/recipe/one-pot-baked-pasta-with-sausage-and-broccoli-rabe"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Classic-Wood-Rolling-Pin/dp/B005D6GFFA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GFFA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Box Grater",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Parchment Paper",
        "Rolling Pin",
        "Chef's Knife",
        "Pastry Brush",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a296a6e7d4b9b484283eb12/3:2/w_940,c_limit/easiest-cheese-straws.jpg",
    "ingredients": [
        {
            "name": "hard or semi-firm cheese, such as gruye\u0301re, parmesan, manchego, or extra sharp cheddar",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "All-purpose flour (for dusting)",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "14- or 17-ounce package frozen puff pastry, thawed overnight in refrigerator",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large egg yolk",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "sweet paprika, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "cayenne pepper, divided",
            "quantity": "1/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Grate 6 oz. cheese on the medium holes of a box grater. Line 2 baking sheets with parchment paper. Arrange racks in upper and lower thirds of oven; preheat to 400\u00b0.",
        "Dust work surface lightly with flour and unfold or unroll puff pastry on surface. Roll out lightly with a rolling pin to smooth creases, then cut pastry in half crosswise. (If you\u2019re using a brand of puff pastry that comes with 2 sheets instead of 1, just roll out each piece lightly but don\u2019t cut.)",
        "Mix 1 egg yolk and 1 tsp. water with pastry brush in a small bowl. Lightly brush egg wash across surface of 1 piece of pastry.",
        "Sprinkle half of grated cheese all over egg-washed surface in an even layer.",
        "Using your fingertips and holding your hand at least 8\" above the surface, sprinkle 1/2 tsp. paprika, then 1/8 tsp. cayenne over cheese. Season with salt (go easy if you\u2019re already using a salty cheese like Parm), then very generously season with black pepper.",
        "Place second sheet of puff pastry over top, aligning edges, and press gently to flatten. Lightly brush surface of second sheet with more egg wash.",
        "Sprinkle with remaining cheese, paprika, and cayenne; season with salt and pepper.",
        "Dust rolling pin with a bit more flour. Gently roll over top of pastry (yes, you\u2019re rolling directly over the cheese). If bottom layer of pastry starts to stick, dust underneath with more flour, or if rolling pin starts to stick to cheese, dust pin with more flour. Roll pastry out to a long rectangle just under 1/4\" thick. The dimensions aren\u2019t important, but try to keep the rectangle under a foot in length (otherwise, the straws will be too long to handle).",
        "Using your knife, cut rectangle into 1/2\"-thick strips. For fewer straws that are longer, cut lengthwise. For more straws that are shorter (and easier to handle), cut crosswise.",
        "Working one strip at a time, transfer to prepared sheets and twist 2 ends in opposite directions several times. Repeat, spacing twists about 1\" apart, until you\u2019ve used all the pastry and filled both sheets.",
        "Bake cheese straws, rotating pans once top to bottom and front to back, until golden brown and cheese is toasted and crisp, 12-18 minutes. Let cool completely on sheets. Carefully remove from parchment and serve.",
        "Do Ahead: Unbaked twists can be made 1 month ahead. Wrap tightly in plastic on baking sheet and freeze. Bake directly from freezer without thawing (increase bake time by several minutes)."
    ],
    "title": "Crispy Cheese Twists",
    "url": "https://www.bonappetit.com/recipe/crispy-cheese-twists"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Paper Towels",
        "Cast Iron Skillet",
        "Tongs",
        "Cutting Board",
        "Chef's Knife",
        "Whisk",
        "Glass Measuring Cup",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a2b053f5468684549cf8b1a/3:2/w_940,c_limit/20171207_Basically-TEST_049.jpg",
    "ingredients": [
        {
            "name": "steak (sirloin, boneless ribeye, or ny strip)",
            "quantity": "1-11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "vegetable oil",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "small shallot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "(1/2 stick) cold unsalted butter",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sprigs thyme",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "worcestershire sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        }
    ],
    "steps": [
        "Let 1-11/2 pounds steak sit at room temperature for as long as possible before cooking (even if it\u2019s only for 10 minutes, that\u2019s fine). Pat steak dry with paper towels.",
        "Heat a medium dry skillet, preferably cast iron, over medium. Season steak while you wait for the skillet to get nice and hot. Sprinkle lots of salt and pepper on both sides of steak\u2014A LOT. Use several generous pinches of salt and several cranks of pepper per side. Press salt and pepper into meat so it adheres.",
        "Pour 1 Tbsp. oil into skillet and swirl to coat. Using tongs, gently lay steak in skillet and cook until underside is deeply browned and a crust has formed, about 5 minutes. Once or twice, lift up steak and reposition over hotter areas of the skillet to encourage even cooking.",
        "Turn steak and cook until reverse side is equally browned and steak is medium-rare (an instant-read thermometer inserted into the thickest part will register 120\u00b0), another 5 minutes. If steak has a fat cap or is more than 1\" thick, upend with tongs and sear sides until browned. Remove skillet from heat. Transfer steak to a cutting board to rest.",
        "Let skillet cool about 5 minutes. While skillet is cooling, peel and finely chop 1 shallot. Smash 2 garlic cloves with the flat side of your knife and remove peel. Cut 1/4 cup (1/2 stick) butter into 4 Tbsp.-size pieces. Set aside and have at the ready.",
        "Using paper towels, blot around skillet to soak up any blackened oil, but leave browned stuck-on bits behind.",
        "Place skillet back over medium-low heat and add shallot, garlic, 2 sprigs thyme, and 2 Tbsp. butter. Swirl skillet to melt butter and cook, stirring often with a whisk, until shallot is golden brown, 2-3 minutes.",
        "Add 1/2 cup water to skillet and whisk to dissolve stuck-on bits. Whisk in 2 Tbsp. mustard and 2 tsp. Worcestershire sauce until smooth.",
        "Still working over medium-low heat, add remaining 2 Tbsp. butter and whisk constantly until butter is dissolved and sauce is smooth and thick, about 1 minute. Remove skillet from heat. Taste sauce and season with more salt (only if needed) and pepper.",
        "Cut steak against the grain into 1/2\u201d-thick slices and arrange on a platter.",
        "Spoon pan sauce over steak and serve."
    ],
    "title": "Easy Steak with Pan Sauce",
    "url": "https://www.bonappetit.com/recipe/easy-steak-with-pan-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Paper Towels",
        "Plate",
        "Medium Bowl",
        "Wooden Spoon",
        "Small Bowl",
        "Spoon",
        "Large Skillet"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a26d6d11cad0d50f80bce50/3:2/w_940,c_limit/tofu-and-mushroom-stir-fry.jpg",
    "ingredients": [
        {
            "name": "block extra-firm tofu, drained",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "mixed mushrooms, such as maitake, shiitake, oyster, button, and/or crimini",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "scallions",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "2-inch piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "cornstarch",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "soy sauce, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "seasoned rice vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "shaoxing wine (chinese rice wine) or mirin",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "vegetable oil, divided, plus more",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Steamed white rice and sesame seeds (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Stir-fries are all about cooking quickly and over high heat, so the key to success is prepping your ingredients beforehand so you\u2019re ready to go.",
        "Cut 14-oz. block of tofu into 1x1/4\" pieces. Place pieces on a paper-towel lined plate and press a paper towel over top of pieces to absorb excess water.",
        "Remove any dirt from 1 lb. mushrooms with a damp paper towel and tear into 1\" pieces.",
        "Trim root ends of 6 scallions, then slice them crosswise into 1\" pieces.",
        "Peel 2-inch piece ginger with a spoon and thinly slice crosswise.",
        "Toss tofu, 11/2 tsp. cornstarch, 1/2 tsp. red pepper flakes, a pinch of salt, and 1 Tbsp. soy sauce in a medium bowl.",
        "Stir 2 Tbsp. vinegar, 2 Tbsp. wine, and remaining 2 Tbsp. soy sauce in a small bowl.",
        "Heat 1 Tbsp. oil in a large skillet, preferably nonstick, over medium-high. When oil is shimmering and slides quickly across surface of pan, add mushrooms, scallions, and ginger and cook, tossing often, until mushrooms and scallions are browned in spots and mushrooms are tender, 5-7 minutes. Season lightly with salt and transfer to another medium bowl.",
        "Heat 1 Tbsp. oil in same skillet over high. When oil is shimmering again, add tofu mixture and arrange in a single layer in skillet. Cook, undisturbed, until tofu is browned on first side, about 2 minutes. Add a touch more oil if skillet is very dry or tofu is sticking, then turn pieces and continue to cook, undisturbed again, until second side is browned, about a minute or two longer. If your skillet isn\u2019t nonstick, you might need to loosen the tofu by scraping skillet with a spatula.",
        "Add wine mixture and mushroom mixture back to skillet. Cook, tossing briskly, until sauce is thickened and all ingredients are coated, about 30 seconds. Remove from heat. Taste and season with salt, if needed.",
        "Serve stir-fry over rice. Top with sesame seeds."
    ],
    "title": "Tofu and Mushroom Stir-Fry",
    "url": "https://www.bonappetit.com/recipe/tofu-and-mushroom-stir-fry"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Classic-Wood-Rolling-Pin/dp/B005D6GFFA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GFFA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Offset-Icing-Spatula/dp/B00004OCNM?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNM?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Medium Bowl",
        "Spatula",
        "Parchment Paper",
        "Rolling Pin",
        "Offset Spatula",
        "Rimmed Baking Sheet",
        "Cutting Board",
        "Chef's Knife",
        "Wire Rack",
        "Plate"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a20657d09fc2115a299ee94/3:2/w_940,c_limit/basically-pinwheel-cookies.jpg",
    "ingredients": [
        {
            "name": "(1 stick) unsalted butter, room temperature",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sugar",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground cinnamon",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "large egg yolk",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "honey",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "vanilla extract",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "plus 2 tablespoons all-purpose flour, plus more for dusting",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "raspberry preserves",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Nonstick vegetable oil spray",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place 1 stick room-temperature butter in a medium bowl and work with a spatula, beating against side of bowl, until smooth and lump-free. If butter is room temperature, this should happen fast. If it\u2019s still a bit cold, work it vigorously.",
        "Add 1/4 cup sugar, 1/2 tsp. cinnamon, and 1/2 tsp. salt and mix with spatula until sugar is combined with butter and mixture is completely homogenous, about 2 minutes. You\u2019re not looking for a light and fluffy texture the way you normally would when you \u201ccream\u201d butter and sugar, just a smooth consistency.",
        "Add 1 egg yolk, 2 Tbsp. honey, and 2 tsp. vanilla and mix with spatula until incorporated.",
        "Add 1 cup plus 2 Tbsp. flour and mix with spatula just until flour disappears and mixture comes together in a single, homogenous mass.",
        "Lightly dust a sheet of parchment paper with flour and place dough on top. Flour your hands and pat out dough into a rectangle that\u2019s about 1/2\" thick, adding more flour as needed to prevent dough from sticking.",
        "Dust top of dough with more flour and place a sheet of parchment over. Roll out dough to an 1/8\"-thick rectangle. The exact dimensions aren\u2019t important, just make sure it\u2019s wider than it is long and as close to a rectangle as possible (otherwise pinwheels will be a little wonky).",
        "Remove top layer of parchment. Slide bottom parchment with dough onto a rimmed baking sheet. Chill until dough is firm, at least 20 minutes.",
        "Remove dough from refrigerator and position baking sheet so 1 longer side is closest to you. Using a small offset spatula or the back of a spoon, spread 1/4 cup preserves in a very thin layer across surface, leaving a 1/2\" border on all sides except side closest to you. On that side, spread jam all the way to the edge.",
        "Starting at side closest to you and using parchment to help you, roll up dough into a spiraled log. If dough cracks, stop rolling and let it sit for a few minutes until pliable. Rest log on seam and transfer baking sheet to freezer. Freeze until dough is very firm but not frozen, 10-15 minutes.",
        "Meanwhile, preheat oven to 325\u00b0. Line another baking sheet with parchment paper and grease with nonstick spray.",
        "Transfer log to cutting board. Cut crosswise into 1/4\"-thick pinwheels, rotating log every few slices to maintain the round shape and wiping knife occasionally to remove jam. Transfer pinwheels to greased parchment-lined sheet, spacing 1\" apart.",
        "Bake cookies until edges are golden brown and center of spiral is barely golden, 12-15 minutes. Let cool 5 minutes on baking sheet, then transfer to a wire rack and let cool completely.",
        "Arrange cookies on a plate and serve.",
        "Do Ahead: Dough can be filled, rolled, and frozen 1 month ahead. Wrap tightly in plastic. Thaw overnight in refrigerator before slicing and baking."
    ],
    "title": "Slice-and-Bake Jammy Pinwheel Cookies",
    "url": "https://www.bonappetit.com/recipe/slice-and-bake-jammy-pinwheel-cookies"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Ziploc-Storage-Bags-Gallon-Count/dp/B00UASJHV0?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UASJHV0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Box Grater",
        "Medium Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Plastic Bag",
        "Rimmed Baking Sheet",
        "Parchment Paper"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1eda432479441876ab9952/3:2/w_940,c_limit/cheesy-slice-and-bake-crackers.jpg",
    "ingredients": [
        {
            "name": "extra-sharp white cheddar cheese",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Small handful of chives (about 15)",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "all-purpose flour",
            "quantity": "11/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "sugar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Pinch of cayenne pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "chilled cream cheese",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "poppy seeds",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Grate 6 oz. cheddar on the medium holes of a box grater, letting shreds fall into a medium bowl.",
        "Slice a small handful of chives very thinly and add to bowl with cheese. Add 11/4 cups flour, 11/2 tsp. salt, 1/2 tsp. sugar, and a pinch of cayenne. Toss mixture with your hands until cheese is coated in flour and ingredients are evenly distributed.",
        "Cut 6 oz. cream cheese into 1/2\" pieces and add to bowl with flour mixture. Using your hands, quickly smash pieces into flour. Work until cream cheese disappears into flour and only a few dry spots remain.",
        "Knead dough in bowl 2-3 times to bring it together. Transfer dough to a 1-gal. resealable plastic bag. Seal bag, pressing out air.",
        "Press dough to bottom of bag, forcing it into the crease with the back of a knife so you have a tight log that spans width of bag. Roll log over work surface a couple of times to smooth sides into an evenly round shape.",
        "Freeze dough until very firm but not yet frozen, 15-20 minutes. Meanwhile, place racks in upper and lower thirds of oven; preheat to 350\u00b0. Line 2 baking sheets with parchment paper.",
        "Cut open bag with your knife. Take out dough. Carefully sprinkle 3 Tbsp. poppy seeds across work surface (do this gently so they don\u2019t fly everywhere). Roll dough over poppy seeds, pressing into dough, until log is completely and evenly coated. Discard any poppy seeds that don\u2019t stick.",
        "Quickly and confidently slice dough into thin rounds with a sharp knife, aiming for even slices between 1/4\"-1/8\". Rotate log every few slices to keep bottom side from flattening out. Transfer rounds to prepared baking sheets, spacing about 1\" apart (crackers won\u2019t spread as they bake).",
        "Bake crackers, rotating sheets front to back and top to bottom halfway through, until tops and edges are golden, 25-30 minutes. Crackers will crisp as they cool, so let cool completely on baking sheet."
    ],
    "title": "Cheesy Slice-and-Bake Crackers",
    "url": "https://www.bonappetit.com/recipe/cheesy-slice-and-bake-crackers"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Wilton-Recipe-Right-Oblong-Cover/dp/B000FCD118?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000FCD118?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/OXO-Stainless-Potato-Masher-Cushioned/dp/B00004OCJK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Box Grater",
        "Chef's Knife",
        "Cutting Board",
        "13x9\" Baking Dish",
        "Large Pot",
        "Potato Masher",
        "Tongs",
        "Heatproof Measuring Cup",
        "Colander"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a0db49a64f83007e03338b3/3:2/w_940,c_limit/bucatini-with-butter-roasted-tomato-sauce.jpg",
    "ingredients": [
        {
            "name": "garlic cloves",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "(1/2 stick) unsalted butter",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "anchovy fillets packed in oil",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "crushed red pepper flakes, plus more for serving",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "bucatini or spaghetti",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Finely grated Parmesan (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. Crush 8 garlic cloves with the flat side of a chef's knife and remove peel. Cut 1/4 cup (1/2 stick) butter into small pieces (about 1/2\").",
        "Empty 28 oz. can of tomatoes into a 13x9\" baking dish and crush lightly with your hands. Watch out for flying tomato juices. Scatter garlic, butter pieces, 2 anchovies, and 1/2 tsp. red pepper flakes over tomatoes; season with salt and black pepper.",
        "Roast tomatoes, tossing halfway through, until garlic is very soft and mixture is thick and jammy, 35-40 minutes. While tomatoes are roasting, bring a large pot of water (4-6 qt.) to a boil over high heat and add a small fistful of salt.",
        "Remove pan from oven and let sauce cool slightly. Using a potato masher or fork, break up garlic and tomatoes until mixture looks like coarse applesauce.",
        "Cook 12 oz. bucatini or spaghetti in pot of boiling water, stirring occasionally with tongs, according to package instructions for al dente. Toward end of cook time, use a heatproof measuring cup to scoop out and reserve 1/2 cup pasta cooking liquid. Drain pasta in a colander; reserve pot.",
        "Return pasta to pot and add tomato sauce and pasta cooking liquid. Cook over medium-high heat, tossing with tongs, until sauce coats pasta, about 3 minutes.",
        "Divide pasta among plates. Serve topped with Parmesan and more red pepper flakes.",
        "Do Ahead: Tomato sauce can be made 4 days ahead. Let cool; cover and chill. Reheat before mixing with pasta."
    ],
    "title": "Bucatini with Butter-Roasted Tomato Sauce",
    "url": "https://www.bonappetit.com/recipe/bucatini-with-butter-roasted-tomato-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-719-16-Classic-Stainless-Saucepan/dp/B00008CM69?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Freezer-Baking/dp/B019FHD46A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B019FHD46A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Cutting Board",
        "Medium Saucepan",
        "8x8\" Baking Dish",
        "Whisk",
        "Medium Bowl",
        "Spatula",
        "Spoon",
        "Cake Tester",
        "Chef's Knife"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a0b2a504c9d1625b7ff7962/3:2/w_940,c_limit/peanut-butter-blondies-a-la-mode.jpg",
    "ingredients": [
        {
            "name": "salted, roasted peanuts, plus more for serving",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "(1 stick) plus 3 tablespoons unsalted butter, plus more for pan",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "all-purpose flour, plus more for pan",
            "quantity": "11/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "3/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "kosher salt",
            "quantity": "3/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "large eggs",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "vanilla extract",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "plus 3 tablespoons all-natural peanut butter, creamy or crunchy",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plus 2 tablespoons light brown sugar",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Vanilla ice cream (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in center of oven; preheat to 350\u00b0. Place 1/2 cup peanuts on a cutting board and use the bottom of a medium saucepan to crush them into smaller pieces; set aside.",
        "Butter bottom and sides of an 8x8\" glass or metal baking dish. Sprinkle baking dish with a light dusting of flour, then invert and tap out excess flour.",
        "Melt 1/2 cup (1 stick) butter over medium-low heat in skillet you used to crush peanuts. Let cool.",
        "Whisk 11/4 cups flour, 3/4 tsp. baking powder, and 3/4 tsp. salt in a medium bowl.",
        "Add 2 eggs, 2 tsp. vanilla, 3/4 cup peanut butter, and 11/2 cups brown sugar to cooled butter and whisk until smooth.",
        "Add dry ingredients to peanut butter mixture and stir with a rubber spatula until flour disappears, then fold in half of peanuts. Scrape batter into prepared pan (hold on to the saucepan) and use spatula to work batter into corners.",
        "Melt remaining 3 Tbsp. butter, 3 Tbsp. peanut butter, and 2 Tbsp. brown sugar in reserved saucepan over low heat, stirring, until smooth.",
        "Using the back of a spoon, create deep divots all across top of batter. Pour mixture from saucepan into divots, letting it spill out and across surface of batter.",
        "Sprinkle remaining half of crushed peanuts over. Bake blondies until a tester inserted into the center comes out greasy but clean, 30-35 minutes.",
        "Let cool, then cut blondies into squares.",
        "Top blondies with ice cream and sprinkle with more peanuts."
    ],
    "title": "Peanut Butter Blondies",
    "url": "https://www.bonappetit.com/recipe/peanut-butter-blondies"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-4-Inch-Classic-Paring-Straight/dp/B005LRYE36/ref=zg_bs_289859_1/138-8129613-6315707?_encoding=UTF8&psc=1&refRID=744BPX2PZ5WC7BAKG62B&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/J-B-Prince-U715-Sauce-Spoon/dp/B009OL3UZI?tag=bonappfig-20",
        "https://www.amazon.com/IKEA-GODIS-Glass-clear-glass/dp/917889168X/ref=sr_1_13?s=home-garden&ie=UTF8&qid=1501093207&sr=1-13&keywords=8+oz+glasses&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Small Saucepan",
        "Paring Knife",
        "Chef's Knife",
        "Colander",
        "Cutting Board",
        "Blender",
        "Large Bowl",
        "Spatula",
        "Whisk",
        "Large Spoon",
        "Glasses",
        "Plastic Wrap",
        "Medium Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f010f2479441876ab9987/3:2/w_940,c_limit/Peach%20Mousse%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "chilled bourbon",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "packet unflavored powdered gelatin",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "ripe peaches (about 4 medium), or 12 ounces frozen sliced peaches, thawed, plus 2 more peaches for garnish",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "plus 1/4 cup peach or apricot jam",
            "quantity": "2/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "mint leaves, plus sprigs for serving",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "fresh lemon juice, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "cold heavy cream",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Pinch of kosher salt",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Pour 1/4 cup bourbon into a small saucepan and sprinkle 1 packet gelatin over. Let soak to soften gelatin, about 10 minutes.",
        "Meanwhile, score skins of 1 lb. peaches with a sharp knife in a large \u201cX\u201d pattern on pointy (non-stem) end and place in a colander in sink. (If you\u2019re using frozen peaches, skip this and proceed with step 5.)",
        "Heat a kettle (or saucepan) full of water until water boils, then pour over peaches to loosen skin. Rinse peaches in cold water.",
        "Slip blade of a paring knife underneath loosened cross-hatched peach skin and peel back to remove. If peels are stubbornly stuck, use a vegetable peeler. Cut peaches into wedges; discard pits.",
        "Blend peach flesh, 2/3 cup jam, 1/4 cup mint leaves, and 2 Tbsp. lemon juice in a blender on highest speed until smooth. Leave blender jar on the base because you\u2019re about to come back to it.",
        "Gently heat saucepan with gelatin mixture over low, swirling, just until granules dissolve and mixture is translucent. Don\u2019t blast the heat because this can destroy the setting power of the gelatin and it might ignite the bourbon! Keep it low.",
        "Stream gelatin mixture into blender with the motor on low speed.",
        "Transfer peach mixture to a large bowl and chill in freezer, stirring with a spatula every 5 minutes, until mixture is thick enough that you can see the bottom of bowl as you stir (be sure to scrape against sides and bottom of bowl with spatula where mixture has become more solid), 15-20 minutes total. As it cools, gelatin will start to set and mixture will thicken.",
        "While peach mixture hangs out in freezer, whip 11/2 cups cream and a pinch of salt in another large bowl with a whisk. You can do this in a mixer, but in a large bowl starting with cold cream, it should only take a few minutes by hand. Work in a vigorous figure-eight pattern, switching hands if needed, until cream firmly holds marks of whisk and gently slumps into a soft, cloud-like peak as it falls off whisk. Chill cream as you wait for peach mixture to thicken.",
        "When peach mixture is ready, place it next to bowl of whipped cream on your work surface. Whisk about one-third of cream into peach mixture until incorporated.",
        "Scrape peachy cream back into bowl with plain cream. Using spatula, fold it all together until barely any streaks remain. At this point you want to work fairly quickly so cream doesn\u2019t deflate and mousse stays nice and light.",
        "Spoon mixture into serving glasses, cover loosely with plastic wrap, and chill until gelatin is completely set, at least 4 hours.",
        "About 15 minutes before serving, slice 2 peaches into thin wedges and toss in a medium bowl with remaining 1/4 cup jam and 1 Tbsp. lemon juice.",
        "Spoon peach wedges and their jammy juices over set mousse and garnish with mint sprig.",
        "Do Ahead: Mousse can be made 2 days ahead. Keep covered and chill."
    ],
    "title": "No-Cook Peach Mousse",
    "url": "https://www.bonappetit.com/recipe/no-cook-peach-mousse"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/GDEALER-Thermometer-Electronic-Barbecue-Collapsible/dp/B0188XZBMC/ref=zg_bs_289809_1?_encoding=UTF8&psc=1&refRID=B50EGA26P6YF66VKMP7K&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Chef's Knife",
        "Cutting Board",
        "Measuring Cups",
        "Measuring Spoons",
        "Whisk",
        "Medium Bowl",
        "Cast Iron Skillet",
        "Tongs",
        "Instant-Read Thermometer",
        "Wooden Spoon",
        "Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f02dd2479441876ab998b/3:2/w_940,c_limit/Steak%20Skillet%20Peas%20Asparagus%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "boneless new york strip steak, patted dry",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "Kosher salt, freshly ground pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "garlic cloves, 1 grated, 4 thinly sliced",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "dijon mustard",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sherry vinegar or red wine vinegar",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "1-2 pinches cayenne pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "plus 3 tablespoons olive oil",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bunch scallions, thinly sliced, divided",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "bag frozen peas",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "bunch asparagus, trimmed, cut into 1-inch pieces",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Season steak all over with salt and pepper.",
        "Whisk 1 grated garlic clove, 1/3 cup mustard, 1 Tbsp. vinegar, 1 tsp. honey, a couple pinches of cayenne, 1/3 cup oil, and 1 Tbsp. water in a medium bowl to combine; season spicy mustard with salt and pepper.",
        "Heat a dry medium skillet, preferably cast iron, over medium-high. Rub steak all over with 1 Tbsp. oil and cook, turning every 2 minutes or so and making sure to get color on the fat cap, until medium-rare (an instant-read thermometer inserted into the center will register 120\u00b0), about 10 minutes. Transfer steak to a plate to rest. Pour off oil from skillet, leaving crispy bits behind.",
        "Heat remaining 2 Tbsp. oil in same skillet over low. Add 4 sliced garlic cloves and all but about 2 Tbsp. scallions (save those for serving) and cook, stirring often, until translucent and softened, about 3 minutes.",
        "Add peas and a splash of water and cook, stirring and mashing to break up slightly, until peas are tender, about 5 minutes. Add asparagus; season with salt and pepper. Cook, stirring often, until asparagus is just tender, about 5 minutes. Remove from heat.",
        "Slice steak and shingle over vegetables in skillet.",
        "Drizzle some mustard sauce over steak and top with reserved scallions. Serve with remaining mustard sauce alongside."
    ],
    "title": "One-Skillet Steak and Spring Veg with Spicy Mustard",
    "url": "https://www.bonappetit.com/recipe/one-skillet-steak-and-spring-veg-with-spicy-mustard"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-719-18-Classic-Stainless-Saucepan/dp/B00008CM6C?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Medium Saucepan with Lid",
        "Sieve",
        "Paper Towels",
        "Large Bowl",
        "Vegetable Peeler",
        "Plastic Wrap"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cad88eba1255e6ea7cf/3:2/w_940,c_limit/basically-broccoli-and-quinoa-salad.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "dried white or red quinoa, rinsed",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small or 1 large head of broccoli, stalk end trimmed (about 1 pound)",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "pitted dates (preferably not Medjool), chopped",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "scallions, thinly sliced",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "sharp cheddar, cut into 1/4-inch pieces (about 1 cup)",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "salted, roasted almonds, chopped",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "(or more) fresh lemon juice",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Bring a medium saucepan of salted water to a boil over high heat. You\u2019re going to cook the quinoa like pasta, so the exact quantity of water doesn\u2019t matter\u2014just make sure saucepan is at least half full. Add 1/2 cup quinoa and return to a boil, then reduce heat to medium and cook at a gentle boil or lively simmer, uncovered, until you start to see the curly tail separate from the individual grains, 12-15 minutes. Even though you\u2019re cooking the quinoa uncovered, you\u2019re going to use the lid later, so make sure it\u2019s within reach.",
        "Taste quinoa and make sure it\u2019s tender. If it\u2019s still a little crunchy, cook another 2 minutes, then taste again. Once tender, drain quinoa in a fine-mesh strainer-keep saucepan close at hand-and shake off as much excess water as possible. Turn off your stove.",
        "Immediately dump drained quinoa back into saucepan. Return to stove and cover, placing 2 layers of paper towels underneath lid. The paper towel is there to absorb liquid as quinoa continues to steam, making it fluffy instead of wet and soggy. Let sit on stove (make sure the burner is turned off) while you assemble the rest of the salad.",
        "Hold head of broccoli by the stalk in your non-dominant hand over a large bowl. Rotating the stalk as you work, use your knife to shave off thin layers from the floret end, holding knife almost parallel to the buds and taking off just the tiny buds at first. Then use knife to shave off thin layers of the florets until you reach the thicker stems.",
        "You\u2019re going to trim and chop up the stalk because it\u2019s (arguably) the most delicious part of the broccoli. Start by snapping off any remaining stems sticking out of the stalk. Using a vegetable peeler, remove fibrous outer layer of stalk until you get to the tender light green interior (you may have to go around with peeler several times). Chop up stalk and add to bowl.",
        "Toss in 6 dates, 3 scallions, 4 oz. cheese, 1/3 cup almonds, 11/2 tsp. red pepper, and quinoa. Add several generous pinches of salt and toss to combine.",
        "Add 1/4 cup oil and 3 Tbsp. lemon juice and toss to combine. Taste and add more salt, if needed.",
        "Cover salad with plastic wrap, pressing it directly onto the surface. Let salad sit at least 30 minutes before serving (or transfer salad to an airtight container and chill up to 3 days). This allows the dates to soften and other ingredients to soak up all the lemon juice, oil, and seasonings.",
        "Before serving, toss salad together, then taste and season with more salt and lemon juice, if needed."
    ],
    "title": "Make-Ahead Broccoli and Quinoa Salad",
    "url": "https://www.bonappetit.com/recipe/make-ahead-broccoli-and-quinoa-salad"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-722-30G-Classic-12-Inch-Skillet/dp/B0078P9D8U?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0078P9D8U?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Parchment Paper",
        "Spoon",
        "Rimmed Baking Sheet",
        "Large Skillet with Lid",
        "Plate",
        "Fish Spatula",
        "Paper Towels",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/3:2/w_940,c_limit/basically-burger-1.jpg",
    "ingredients": [
        {
            "name": "ground beef, 80% lean",
            "quantity": "20",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "vegetable oil, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "plus 1/2 cup mayonnaise (preferably hellmann\u2019s)",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "potato or soft-seeded hamburger buns",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "slices American cheese",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "ketchup",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "sweet pickle relish",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "hot sauce (such as tapati\u0301o, cholula, or crystal)",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "large iceberg lettuce leaves, torn into large pieces",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "1/4 medium red onion, sliced as thinly as possible",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Divide beef into 4 equal pieces. Using both hands, work meat into smooth spheres, compacting very lightly.",
        "Place a large sheet of parchment paper, plastic wrap, or foil on your work surface. Place balls on top, spacing evenly. Place another piece of parchment (or whatever you\u2019re using) over and press down to flatten each ball into a patty 5\" in diameter.",
        "Peel back top sheet and use your fingertips to press a shallow, 2\"-wide depression into the center of each patty. The meat will contract and push up in the center as the patties cook; making this little divot helps to keep the burgers flat.",
        "Season meat generously with salt. Drizzle patties with 1 Tbsp. oil, dividing evenly.",
        "Gently flip patties on parchment and season the other side with salt. Drizzle with remaining 1 Tbsp. oil.",
        "Using the back of a spoon, spread 2 Tbsp. mayonnaise over both cut sides of all buns, dividing evenly and spreading all around.",
        "Heat a large skillet over medium-low and cook half of buns, mayonnaise side down, until golden and crisp around the edges, 2-3 minutes. Transfer to a plate and cook remaining buns; set them aside and increase heat to medium-high.",
        "Peel 2 patties off of parchment paper and press down gently into skillet, spacing evenly apart. Cook, without any touching or fussing, until edges are browned and you can see juices pooling in the center of patties, about 5 minutes.",
        "Slide a thin metal spatula, preferably a flexible one like a fish spatula, underneath patties and flip them over.",
        "Place a slice of cheese over each patty, reduce heat to medium-low, and cover skillet. Cook until cheese is melted, about 1 minute.",
        "Transfer patties to a plate. Let rest about 5 minutes. Meanwhile, wipe out skillet with paper towel and repeat cooking process with remaining patties.",
        "While burgers are resting, make your secret sauce. Stir ketchup, relish, hot sauce, and remaining 1/2 cup mayonnaise in a small bowl to combine, then season generously with salt and pepper.",
        "Start to build your burger. Stack 2-3 pieces of lettuce on bottom halves of buns. Place several slices of onion on top of lettuce.",
        "Smear a couple of tablespoons of secret sauce on top halves of buns.",
        "Place burgers on top of onions, close burgers with top bun, and serve!"
    ],
    "title": "The Basically Burger",
    "url": "https://www.bonappetit.com/recipe/basically-burger"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/J-B-Prince-U715-Sauce-Spoon/dp/B009OL3UZI?tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Cutting Board",
        "Chef's Knife",
        "Large Bowl",
        "Dutch Oven",
        "Large Spoon",
        "Tongs",
        "Rimmed Baking Sheet"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cac8ebd2b24ac2d3dbd/3:2/w_940,c_limit/Basically-brisket-sandwich.jpg",
    "ingredients": [
        {
            "name": "brisket, first-cut, untrimmed",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "diamond crystal or 1 tablespoon morton kosher salt",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "light brown sugar",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ground cumin",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "large onion, peeled, thinly sliced",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves, crushed",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "seasoned rice vinegar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "soy sauce",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "worcestershire sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "sriracha, plus more for serving",
            "quantity": "2/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "potato rolls, toasted",
            "quantity": 12,
            "type": "unitless"
        }
    ],
    "steps": [
        "Remove brisket from its packaging and pat dry with paper towels. Lay brisket flat on your cutting board so that one of the longer sides is closest to you and layer of white fat is facing down. Take a close look at the meat itself\u2014you\u2019ll notice that there are long \u201cgrains\u201d (thread-like muscle fibers) running left to right across length of brisket. You are going to \u201cslice against the grain,\u201d which means positioning your knife blade perpendicular to the direction of the fibers, into 2\"-wide pieces. You do this so that when you go to shred the meat at the end, the fibers don\u2019t stretch a mile long and they\u2019re a manageable length for sandwiches.",
        "Place brisket halves in a large bowl and sprinkle with salt, brown sugar, and cumin. Use your hands to really massage the meat and work in all the salt and spices so every little spot is coated. Get in there! Set brisket aside for a moment.",
        "Mix onion, garlic, vinegar, soy sauce, Worcestershire, 2/3 cup Sriracha, and 1 cup water in a large Dutch oven or stockpot.",
        "Using tongs, nestle brisket into pot so fattier sides are facing up and pieces fit together in a single layer. The meat should be barely submerged in liquid, so add a little more water if that\u2019s not the case (depending on size of your pot).",
        "Bring to a simmer over medium heat, then reduce heat to achieve a very gentle simmer.",
        "Cover pot and cook brisket, peeking inside occasionally to make sure heat isn\u2019t too high or low\u2014you want a couple of areas in the pot to be gently bubbling. If bubbles are roiling all over the place, reduce heat. If you see no bubbles at all, increase slightly. If liquid drops below top of meat, add a little more water to keep barely submerged.",
        "After 2 hours, check meat for doneness. Poke a fork into a few pieces and twist the tines to see if the meat will easily separate into shreds. If not, that means it\u2019s still tough. Keep cooking, checking again every 15 minutes or so. This could take up to an hour more.",
        "Turn off heat and position lid so that it\u2019s cracked open a bit. Let brisket cool until no longer steaming hot, about 30-40 minutes. Cover and chill overnight.",
        "The next day, remove pot from refrigerator and uncover. There will be an layer of solidified orange fat on the surface (the color is from the Sriracha!). Using a fork, lift off fat in large pieces and discard.",
        "Reheat brisket in pot over low until meat is warmed all the way through, 30-40 minutes. Transfer meat to a rimmed baking sheet. If meat is too hot to touch, let cool for a few minutes until you can handle it.",
        "Using your fingers or 2 forks, separate muscle fibers into shreds and return to pot. Remove any pieces of fat and discard.",
        "Return pot to low heat and bring liquid to a gentle simmer, tossing meat with tongs to encourage it to soak up juices. Add more Sriracha to taste.",
        "Serve over toasted buns with even more Sriracha, if desired."
    ],
    "title": "Sriracha-Braised Brisket Sandwiches",
    "url": "https://www.bonappetit.com/recipe/sriracha-braised-brisket-sandwiches"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/J-B-Prince-U715-Sauce-Spoon/dp/B009OL3UZI?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Potato-Masher-Cushioned/dp/B00004OCJK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Large Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Large Spoon",
        "Potato Masher",
        "Microplane",
        "Large Pot",
        "Tongs"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb37995142c3c3abc54/3:2/w_940,c_limit/basically-no-cook-tomato-sauce.jpg",
    "ingredients": [
        {
            "name": "tomatoes, any shape (larger than cherry), preferably slightly overripe so they feel like full water balloons",
            "quantity": "11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "unsalted butter, cut into small pieces",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "red wine vinegar",
            "quantity": "4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "finely grated parmesan (about 1 cup), divided",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "strand pasta, such as bucatini, spaghetti, or linguini",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "basil leaves, torn",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Cut 11/2 lb. tomatoes in half through the equator (in other words, not through the core, but across the midline). Hold halves in your palms and gently squeeze over a bowl to squeeze out seeds and surrounding juice/jelly.",
        "Casually and imperfectly chop seeded tomatoes so you have some pieces that are very small and some pieces that are a bit larger, but everything should be smaller than an acorn.",
        "Transfer tomatoes to a large bowl and mash mixture several times with the back of a large spoon or potato masher to release more juices (you can also just use your hands).",
        "Finely grate 1 garlic clove into bowl with tomatoes with a microplane or fine grater, then add 2 Tbsp. butter, 4 tsp. vinegar, 1/2 tsp. red pepper, 1/4 cup oil, and half of Parmesan. Season with several pinches of salt, then toss with a large spoon to combine.",
        "Cover bowl with plastic and let sit at room temperature at least 30 minutes and up to 5 hours. This lets the flavors marry and tomato juices exude (because we want a saucy pasta).",
        "Bring a large pot of water to a boil (4-6 qt.) and add a small fistful of salt. Cook 12 oz. pasta until al dente (follow package instructions).",
        "As soon as pasta is ready, use tongs to transfer noodles to bowl with tomatoes and TOSS TOSS TOSS. You want the hot pasta to melt the cheese and butter, which will thicken the sauce.",
        "Taste pasta and season with more salt, if needed, then toss in 1 cup basil.",
        "Using tongs, portion pasta into shallow bowls, then spoon remaining tomatoes and juices over.",
        "Top with remaining 2 oz. Parmesan, then drizzle with oil."
    ],
    "title": "Pasta with No-Cook Tomato Sauce",
    "url": "https://www.bonappetit.com/recipe/pasta-with-no-cook-tomato-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Ziploc-Double-Zipper-Large-5-Count/dp/B003U6A3C6?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B003U6A3C6?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Charmel-Rose-Cotes-Provence-750/dp/B01H2UDQ7E?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01H2UDQ7E?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Zip-Top Bag",
        "Wine Bottle",
        "Medium Bowl",
        "Parchment Paper",
        "Rimmed Baking Sheet",
        "Microplane",
        "Small Bowl",
        "Brush",
        "Whisk"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb12e0d82381a237783/3:2/w_940,c_limit/basically-strawberry-tart.jpg",
    "ingredients": [
        {
            "name": "graham crackers (about 3.7 ounces)",
            "quantity": 7,
            "type": "unitless"
        },
        {
            "name": "kosher salt",
            "quantity": "3/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "all-purpose flour, plus more for rolling",
            "quantity": "2/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "sugar, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "large eggs",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "(1 stick) unsalted butter, melted, cooled, divided",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "strawberries, hulled, sliced",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "lime (1/2 teaspoon finely grated zest and 1 teaspoon fresh juice)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "very cold heavy cream",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Place a rack in bottom third of oven; preheat to 350\u00b0. Place graham crackers in a large resealable plastic bag and zip it up, pressing out most of the air. Using a wine bottle or rolling pin, firmly roll over crackers several times, crushing them into fine crumbs (some larger crumbs are okay).",
        "Measure out 1 cup crumbs (which should be almost all of them) and transfer to a medium bowl. Add salt, 2/3 cup flour, and 2 Tbsp. sugar. Mix with a fork to combine, then add 1 egg and 6 Tbsp. melted butter.",
        "Mix with fork until dough forms, then knead with your hands inside of bowl until no floury spots remain and dough is smooth. It\u2019ll be a little soft and slightly oily, which is fine!",
        "Lightly flour a piece of parchment paper and place dough on top. Lightly flour top of dough, then cover with another piece of parchment.",
        "Using bottle or rolling pin, roll dough into a round (it doesn\u2019t have to be perfect!) about 12\" in diameter and 1/8\" thick. Periodically peel back parchment and dust with more flour to prevent sticking. Slide entire sheet of parchment paper onto a rimmed baking sheet.",
        "Sprinkle 1 Tbsp. sugar over surface of dough, leaving about a 2\" border. Pile strawberries into center of dough and arrange in an even layer, leaving the same 2\" border.",
        "Sprinkle strawberries with 1 Tbsp. sugar and drizzle with remaining 2 Tbsp. butter.",
        "Using a microplane or fine grater, grate zest of about one-half of lime over strawberries.",
        "Cut off half of lime with no zest and squeeze juice over strawberries. Save the other half for later.",
        "Beat remaining egg in a small bowl with fork until no streaks remain. Brush egg wash around border of pastry (you won\u2019t use it all).",
        "Using edges of parchment to help lift, fold empty border of dough up and over strawberries, working your way around in roughly 2\" sections, overlapping folds as needed. Press all the way around to secure folds and keep dough in place. It might crack or tear in places, but don\u2019t worry! Just pinch it back together.",
        "Brush top of border with remaining egg wash and sprinkle with remaining 1 Tbsp. sugar.",
        "Bake galette until crust is browned around the edges and juices from strawberries are syrupy and actively bubbling, 40-45 minutes. If some juices escape and end up on the parchment paper, don\u2019t worry\u2014the parchment will prevent the tart from sticking. Let cool at least 20 minutes.",
        "Beat cream with a large whisk in a medium bowl until voluminous, thick, and starts to hold tracks of whisk. Hold whisk upright and look for the \u201cpeak\u201d of cream that forms on the end. It should droop and slump over\u2014these are \u201csoft peaks,\u201d which are what you want!",
        "Grate zest from remaining half of lime over cream and serve with tart.",
        "Do Ahead: Tart can be made several hours ahead. Let sit at room temperature. Once fully cooled, droop a piece of plastic over top."
    ],
    "title": "Strawberry\u2013Graham Galette",
    "url": "https://www.bonappetit.com/recipe/free-form-strawberry-lime-tart-with-graham-crust"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-24N-MultiClad-Stainless-10-Inch/dp/B009P4851S?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P4851S?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Wire Rack",
        "Rimmed Baking Sheet",
        "Whisk",
        "Large Bowl",
        "Tongs",
        "Medium Skillet",
        "Wooden Spoon",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f009ca4d4e87fed1c29ae/3:2/w_940,c_limit/Magic%20Chicken%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "boneless, skinless chicken thighs (about 6)",
            "quantity": "11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "large egg yolk",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "plus 1/4 cup mayonnaise",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "plus 1/4 cup dijon mustard",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "diamond crystal or 3/4 teaspoon morton kosher salt, plus more",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "panko (japanese breadcrumbs)",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Pinch of cayenne pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "finely chopped chives",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Position a rack in center of oven; preheat to 450\u00b0. Place a wire rack inside a rimmed baking sheet. Place 11/2 lb. chicken thighs on rack, then pat dry with paper towels.",
        "Whisk 1 egg yolk, 3 Tbsp. mayonnaise, 1 Tbsp. Dijon mustard, and 11/2 tsp. salt in a large bowl. Add several cranks of black pepper and whisk until smooth.",
        "Add chicken to bowl and turn pieces several times with tongs until evenly coated; set aside.",
        "Heat 1/2 cup oil in a medium skillet over medium. After about a minute, test oil to see if it\u2019s hot enough by adding a pinch of panko. If tiny bubbles appear instantly around each bit of panko, you\u2019re good to go.",
        "Add remaining panko and cook, stirring constantly with a wooden spoon, until crumbs are golden brown, about 5 minutes. Make sure to get around the edges and incorporate darker crumbs that form at the perimeter.",
        "Remove skillet from heat and let cool several minutes. Place skillet on work surface next to bowl of chicken and wire rack.",
        "Using tongs, take 1 piece of chicken at a time and place in skillet. Using 1 hand, pat surrounding toasted panko over top of thigh, pressing firmly to adhere. Turn chicken and repeat on other side with more crumbs. Lightly shake off excess crumbs. Transfer chicken to wire rack.",
        "Repeat with remaining chicken pieces, transferring each to rack and spacing evenly apart. Discard any remaining panko.",
        "Transfer sheet to oven and bake chicken until fully cooked through, juices run clear when pierced with a knife, and breadcrumbs have gone a couple of shades past golden into deep brown territory, 15-20 minutes. Let cool.",
        "Stir 1 Tbsp. honey, a pinch of cayenne, and remaining 1/4 cup mayonnaise and 1/4 cup Dijon mustard in a small bowl. Season with black pepper. Stir 3 Tbsp. chives into honey mustard sauce.",
        "Serve honey mustard sauce alongside chicken."
    ],
    "title": "Magic Crispy Chicken",
    "url": "https://www.bonappetit.com/recipe/magic-crispy-chicken"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Potato-Masher-Cushioned/dp/B00004OCJK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Large Bowl",
        "Potato Masher",
        "Rimmed Baking Sheet",
        "Cast Iron Skillet",
        "Fish Spatula",
        "Wire Rack",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f0055bf2afd03e358c366/3:2/w_940,c_limit/Falafel%20Fritter%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "cans chickpeas, drained",
            "quantity": "2",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "large egg",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "cornstarch",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ground cumin",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "finely chopped parsley, plus 1 cup whole leaves with tender stems",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "plain whole-milk greek yogurt, divided",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Kosher salt, freshly ground pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "medium red onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "olive oil, divided",
            "quantity": "8",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "fresh lemon juice (from about 1/2 lemon), plus wedges for serving",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Persian cucumbers or 1/2 English hothouse cucumber, cut into 1-inch irregular pieces",
            "quantity": 4,
            "type": "unitless"
        }
    ],
    "steps": [
        "Mix chickpeas, egg, cornstarch, cumin, 1/4 cup chopped parsley, and 1/4 cup yogurt in a large bowl. Generously season with salt and pepper.",
        "Finely chop half of onion and measure out 1/4 cup. Add to bowl with chickpea mixture. Reserve other half for later.",
        "Using a potato masher, mash mixture until you\u2019ve broken up almost all of the chickpeas and a thick, coarse paste forms. Some of the chickpeas can be left in larger pieces with a few left whole, but you want everything more or less mashed up.",
        "Using your hands, a scoop, or a measuring cup, portion mixture into 16 more-or-less even balls (each ball should be a scant 1/4 cup; don\u2019t fill the measuring cup up all the way!). Roll each ball gently between your palms and transfer to a rimmed baking sheet or plate.",
        "Press down on balls with your palm to flatten to a 1/2\"-thick patty. If mixture is super sticky and coats your hands, dampen your hands with a bit of cold water and try again.",
        "Heat a large skillet (preferably cast iron) over medium-high. Add 3 Tbsp. oil and swirl skillet to coat. When oil is hot, add half of fritters, spacing evenly apart, and press down on top of each with a spatula to flatten into discs. Be careful as you do this because mixture is wet and may splatter.",
        "Cook fritters until dark golden brown and crisp on first side, 3-5 minutes. If you\u2019re dealing with annoying oil splatter, reduce heat to medium. Slide a thin metal spatula underneath fritters and gently turn over.",
        "Cook fritters on second side until browned and crisp, 3-5 minutes. Transfer fritters to a plate or wire rack (if you have one).",
        "Repeat cooking process with 3 Tbsp. oil and remaining fritters.",
        "Stir remaining 1/2 cup yogurt and 1 Tbsp. lemon juice in a small bowl; season with salt and pepper.",
        "Thinly slice remaining red onion. Transfer to a large bowl, then add cucumbers and remaining 1 cup parsley, 1 Tbsp. lemon juice, and 2 Tbsp. oil. Season with salt and pepper, then toss gently to combine.",
        "Divide cucumber mixture and fritters among bowls. Spoon yogurt sauce alongside and serve with lemon wedges."
    ],
    "title": "Falafel Fritters Bowl with Cucumbers and Yogurt Sauce",
    "url": "https://www.bonappetit.com/recipe/falafel-fritters-bowl-with-cucumbers-and-yogurt-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Whisk",
        "Medium Bowl",
        "Large Bowl",
        "Flexible Metal Spatula",
        "Cake Tester",
        "Chef's Knife",
        "Cutting Board"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a0479ab2fff8c4e1363fdd4/3:2/w_940,c_limit/pumpkin-sheet-cake-with-toasted-marshmallows.jpg",
    "ingredients": [
        {
            "name": "extra-virgin olive oil, plus more for pan",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "all-purpose flour",
            "quantity": "21/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground cinnamon",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "ground ginger",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "baking soda",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "kosher salt",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "baking powder",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "can pumpkin pure\u0301e",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "large eggs, room temperature",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "(packed) light brown sugar",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "whole-milk greek yogurt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bag marshmallows (not mini)",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        }
    ],
    "steps": [
        "Arrange a rack in center of oven; preheat to 350\u00b0. Drizzle a teaspoon or two of oil into the bottom of 13x9\" or 3-qt. shallow baking dish (preferably metal, but glass works too) and use your fingers to rub oil all across bottom, up sides, and into corners to coat all surfaces of pan.",
        "Whisk 21/2 cups flour, 2 tsp. ground cinnamon, 2 tsp. ground ginger, 1 tsp. baking soda, 1 tsp. salt, and 1/2 tsp. baking powder in a medium bowl; set aside.",
        "Whisk 15 oz. pumpkin pure\u0301e, 3 eggs, 2 cups brown sugar, 1/2 cup yogurt, and remaining 1/2 cup oil in a large bowl until smooth. Pour dry ingredients into pumpkin mixture and whisk just until no floury spots remain and batter is smooth.",
        "Scrape batter into prepared baking dish with a flexible rubber spatula and spread in an ever layer all the way to the corners. Smooth top.",
        "Bake until cake is puffed evenly across the surface, center springs back lightly when pressed, and a cake tester, skewer, or toothpick inserted into the center comes out clean, 25-35 minutes. Let cool.",
        "While cake is cooling, slice 10 oz. marshmallows in half. Also carefully raise oven rack so it\u2019s positioned directly underneath broiler. Preheat broiler.",
        "Arrange marshmallow halves over top of cooled cake (neat rows look cool, but you can be as precise or loose as you like). You might not use the whole bag.",
        "Broil cake just until marshmallows are golden and toasted\u2014this literally takes only a few seconds! It will turn to charcoal in an instant, so don\u2019t walk away and keep a very constant, very watchful eye."
    ],
    "title": "Pumpkin Sheet Cake With Toasted Marshmallows",
    "url": "https://www.bonappetit.com/recipe/pumpkin-sheet-cake-with-toasted-marshmallows"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-719-18-Classic-Stainless-Saucepan/dp/B00008CM6C?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00008CM6C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Basics-Quart-Oblong-Baking/dp/B00PI0G470?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Spoon",
        "Medium Saucepan with Lid",
        "Wooden Spoon",
        "Medium Bowl",
        "Paper Towels",
        "Spatula",
        "2-Quart Baking Dish"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59fb449e9e08636ae67a5246/3:2/w_940,c_limit/sausage-squash-and-greens-gratin-with-buttered-cornbread-crumbs.jpg",
    "ingredients": [
        {
            "name": "small kabocha squash (about 11/2 pounds)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "6-inch-long rosemary sprigs",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "heavy cream",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "bunch Tuscan kale",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium shallots",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "fresh pork sausage, such as sweet italian (about 4 links)",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "piece store-bought cornbread, about 6x4 inches",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "unsalted butter, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Position a rack in center of oven; preheat to 400\u00b0. Cut off stem end of kabocha squash and rest on cut side. Cut squash in half. Scoop out seeds and stringy innards with a spoon; discard. Using your knife, shave off tough peel and layer of light green flesh beneath. Cut squash into 1\"-thick slices.",
        "Smash 5 garlic cloves with the side of the knife and remove peel.",
        "Combine squash, garlic, 3 rosemary sprigs, 1/2 cup heavy cream, and 1/4 cup water in a medium saucepan. Season generously with salt and pepper and bring to a gentle simmer over medium heat. Cover pot and reduce heat to low. Simmer until squash is tender and easily mashes when pressed with the back of a spoon, 10-15 minutes.",
        "Meanwhile, grasp stem end of each kale leaf. Starting at stem, slide your other hand along length of leaf to strip leaves. Repeat with entire bunch; discard stems. Tear leaves into 1\"-2\" pieces (you should have about 8 cups).",
        "Peel 2 shallots and thinly slice crosswise.",
        "Use the tip of your knife to prick 1 lb. sausage all over in several places.",
        "Crumble cornbread into coarse crumbs (you should have about 2 cups).",
        "When squash is tender, remove saucepan from heat. Uncover and pluck out rosemary sprigs, leaving leaves inside pot. Transfer entire mixture to a medium bowl (reserve saucepan) and mash with the back of a spoon until no distinct pieces of squash remain. Season with salt and pepper.",
        "Wipe out pot with paper towels and heat over medium. Add 2 Tbsp. butter and heat until melted. Add shallots and cook, stirring occasionally, until translucent, about 4 minutes. Add kale a couple of handfuls at a time, stirring to wilt between each batch, and cook until leaves are dark green and wilted, about 3 minutes; season with salt and pepper. Transfer to bowl with squash, then fold to incorporate.",
        "Heat 1 Tbsp. butter in same saucepan over medium and add sausage. Cook, turning once, until browned on both sides (they won\u2019t be cooked through), about 6 minutes. Transfer to cutting board and let cool for a few minutes (reserve saucepan again and do not pour out fat from sausages-you\u2019re going to use it one more time).",
        "Meanwhile, using a rubber spatula, scrape squash and kale mixture into a shallow 2-qt. baking dish and smooth top.",
        "Cut sausages crosswise into 2\" pieces and nestle into top of squash mixture, spacing evenly.",
        "Heat remaining 2 Tbsp. butter in same saucepan over medium and add cornbread crumbs. Cook, stirring, just until crumbs are evenly coated in fat. Scatter cornbread crumbs over squash mixture; season with more salt and pepper.",
        "Bake gratin until crumbs are toasty and brown and sausages are cooked through (you can insert an instant-read thermometer into center of sausage to check if registers 140\u00b0, or just cut into one with a knife), 20-25 minutes. Let cool 5-10 minutes before serving."
    ],
    "title": "Sausage, Squash, and Cornbread Gratin",
    "url": "https://www.bonappetit.com/recipe/sausage-squash-and-cornbread-gratin"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Medium Bowl",
        "Spoon",
        "Small Bowl",
        "Paper Towels",
        "Cast Iron Skillet",
        "Flexible Metal Spatula",
        "Tongs",
        "Plate"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59f254d457990a054814e1b2/3:2/w_940,c_limit/crispy-salmon-with-glazed-napa-cabbage.jpg",
    "ingredients": [
        {
            "name": "small head of Napa cabbage",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "2-inch knob ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "rice wine vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "soy sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "cornstarch",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "skin-on salmon fillets",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "vegetable oil, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Starting at leafy green end of Napa cabbage, slice about one-third of head crosswise into 1/2\u201d-thick ribbons. Set darker green pieces aside. Thinly slice remaining pale-green and white parts of cabbage crosswise and transfer to a medium bowl (discard cabbage core).",
        "Smash 5 garlic cloves and discard peel.",
        "Scrape down and around ginger with the curved tip of a spoon to remove skin, then thinly slice ginger crosswise.",
        "Stir 2 Tbsp. rice wine vinegar, 2 Tbsp. soy sauce, 1 Tbsp. honey, and 11/2 tsp. cornstarch in a small bowl with a spoon until cornstarch is dissolved.",
        "Thoroughly pat dry 4 salmon fillets with paper towels. Season flesh side with salt and pepper.",
        "Drizzle 2 Tbsp. vegetable oil across surface of a large skillet, preferably cast iron. Arrange salmon fillets skin side down in skillet, spacing evenly apart. Heat skillet over medium (yes, you\u2019re starting the cooking from cold).",
        "Cook salmon, occasionally sliding a flexible metal spatula underneath skin to lift fillets and let fresh hot fat flow underneath (if the skin is sticking, let it cook longer until skin releases), until flesh is opaque all the way up the sides of each fillet and only the top of thickest part is still translucent, 5-10 minutes. It will take more or less time depending on thickness of your salmon fillets. As fish is cooking, move pieces around pan to encourage even cooking.",
        "Using spatula and a pair of tongs, carefully turn each fillet so skin side is up. Turn off heat and let heat remaining in skillet gently cook second side. Once fillets have stopped sizzling, carefully transfer to a plate.",
        "Return pan to medium-high heat and add half of cabbage from bowl. Cook, tossing occasionally with tongs, until cabbage is wilted and browned and even charred in some spots, about 5 minutes. Toss in remaining cabbage from bowl and cook, stirring often, until second batch is tender, about 4 minutes.",
        "Scrape cabbage mixture back into bowl and add remaining 1 Tbsp. oil. Add garlic and ginger to pan and cook, tossing often, until garlic is browned all over and ginger is browned around the edges, about 3 minutes.",
        "Stir soy mixture to re-incorporate cornstarch and add to skillet. Stir rapidly until mixture is thickened, which will only take a few seconds, then remove from heat.",
        "Add cooked cabbage and uncooked green cabbage back to skillet and toss well to coat.",
        "Arrange salmon fillets over of cabbage and serve."
    ],
    "title": "Crispy-Skin Salmon with Napa Cabbage",
    "url": "https://www.bonappetit.com/recipe/crispy-skin-salmon-with-napa-cabbage"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/All-Clad-Stainless-Tri-Ply-Dishwasher-Cookware/dp/B00FUF5OIS?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00FUF5OIS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-3-Inch-Strainer/dp/B001713L84?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B001713L84?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Cutting Board",
        "Medium Skillet with Lid",
        "Small Bowl",
        "Chef's Knife",
        "Wooden Spoon",
        "Small Sieve",
        "Paper Towels"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59ef54473b712f2957b88c64/3:2/w_940,c_limit/one-skillet-shakshuka-with-shawarma-spices.jpg",
    "ingredients": [
        {
            "name": "coriander seeds",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "cumin seeds",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "garlic cloves, divided",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "medium shallots, divided",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "jar roasted red peppers",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "extra-virgin olive oil, plus more for drizzling",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "large eggs",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "plain greek yogurt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Mint leaves and crusty bread (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place 1 tsp. coriander seeds and 1 tsp. cumin seeds in little piles on a cutting board. Using the bottom of a medium skillet, crush seeds, pressing down firmly with even pressure. You\u2019ll have to do this several times, repositioning skillet to break apart any whole seeds that remain. Transfer seeds to a small heatproof bowl.",
        "Slice 2 garlic cloves as thinly and evenly as you can; add to bowl with seeds. Finely chop remaining 4 garlic cloves.",
        "Cut half of 1 shallot into thin rounds and add to same bowl with seeds and garlic. Chop remaining shallots.",
        "Open jar of red peppers and pour off any liquid. Remove peppers and coarsely chop.",
        "Combine 1/4 cup oil and seed/garlic/shallot mixture in skillet you used for crushing seeds. Heat over medium and cook, stirring constantly with a wooden spoon, until seeds are sizzling and fragrant and garlic and shallots are crisp and golden, about 3 minutes.",
        "Place a strainer over same heatproof bowl and pour in contents of skillet, making sure to scrape in seeds and other solids. Do this quickly before garlic or shallots start to burn. Reserve oil.",
        "Spread out seed mixture across paper towels to cool. Season with salt and pepper.",
        "Return strained oil to skillet and heat over medium. Add remaining chopped garlic and shallot and cook, stirring often, until shallot is translucent and starting to turn brown around the edges, about 5 minutes. Season with salt and lots of pepper.",
        "Add chopped peppers to skillet and stir to incorporate. Using your hands, lift whole peeled tomatoes out of can, leaving behind tomato liquid, and crush up with your hands as you add to skillet (beware squirting tomato juices). Discard leftover liquid. Season with more salt and pepper.",
        "Cook shakshuka, stirring often, until thickened and no longer runs together when a spoon is dragged through, 10-12 minutes.",
        "Reduce heat to low. Using the back of wooden spoon, create four 2\"-wide divots in tomato sauce. Working one at a time, carefully crack an egg into each divot.",
        "Cover skillet and cook, simmering very gently and reducing heat if necessary, until whites of eggs are set while yolks are still jammy, 7-10 minutes. Uncover skillet and remove from heat. Season tops of eggs with salt and pepper.",
        "Top shakshuka with dollops of yogurt, sprinkle with seed mixture, then drizzle with more olive oil. Finish by scattering mint leaves over top.",
        "Serve shakshuka with crusty bread alongside."
    ],
    "title": "30-Minute Shakshuka with Yogurt",
    "url": "https://www.bonappetit.com/recipe/30-minute-shakshuka-with-yogurt"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Can-Opener/dp/B00004OCJW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCJW?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Colander",
        "Medium Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Dutch Oven",
        "Wooden Spoon",
        "Spider",
        "Can Opener"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59e8c4ded0ff01212836c5e8/3:2/w_940,c_limit/big-batch-white-bean-and-chorizo-chili.jpg",
    "ingredients": [
        {
            "name": "bag dried cannellini beans, covered in 2 inches of cold water, soaked overnight",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "head of garlic",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "medium red onions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "fresh chorizo sausage",
            "quantity": "2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "chili powder",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "ground cumin",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "pint sour cream",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "Shredded cheddar cheese (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 300\u00b0. Drain 16 oz. beans and return to bowl used for soaking; set aside.",
        "Time to get your knife work out of the way. Without separating or peeling the cloves, cut entire head of garlic in half through the \u201cequator\u201d (it\u2019s fine if some of the cloves become detached). Peel 2 red onions and cut in half through root end. Set aside one half for later (you\u2019re going to finely chop it and use as a topping). Coarsely chop remaining onions.",
        "Heat 2 Tbsp. oil in a large Dutch oven over medium-high. Cut a slit in each sausage link and remove meat from casings; discard casings. Add sausage to pot and cook, using a wooden spoon to break up into small pieces and stirring occasionally, until sausage is browned all over, 5-8 minutes (it doesn\u2019t have to be completely cooked through).",
        "Using a spider or slotted spoon, transfer sausage to a medium bowl, leaving fat in pot. Add garlic and onion to pot and cook, stirring often to dissolve any browned bits on bottom of pot, until onion is translucent, about 5 minutes.",
        "Stir in 2 tsp. chili powder and 2 tsp. cumin and cook until spices coat  onion bits and start to stick to bottom of pot, about 2 minutes.",
        "Break up 28 oz. tomatoes with your hands and add to pot along with their liquid (beware of squirting tomato juice), then stir well to loosen any stuck-on spices.",
        "Add drained beans, reserved sausage, 1 Tbsp. kosher salt, a generous amount of freshly ground black pepper, and 6 cups water and stir to combine. Bring to a simmer, then transfer pot to oven. Bake chili, peeking in oven and stirring a few times, until beans are creamy and tender, 11/2-2 hours. Some beans will split and burst before others are tender, which is fine. Keep baking until all beans are creamy. If water level drops to the point where it no longer covers sausage and beans, add more water just to cover.",
        "Remove pot from oven and carefully use back of wooden spoon to mash a few beans against side of pot. This will release their starch and help thicken the chili. Let chili rest about 10 minutes, then taste and adjust seasoning with more salt and pepper, if desired. Fish out and discard papery garlic skin, if desired.",
        "Finely chop remaining onion half. Divide chili among bowls, then top with sour cream, cheese, and chopped onion."
    ],
    "title": "White Bean and Chorizo Chili",
    "url": "https://www.bonappetit.com/recipe/white-bean-and-chorizo-chili"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Full-Circle-Organic-Cotton-Grayscale/dp/B016RYYBDE?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B016RYYBDE?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Dutch Oven",
        "Wooden Spoon",
        "Dish Towel",
        "Large Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59e6687ef23f3406b124c574/3:2/w_940,c_limit/perfect-rice-pilaf-with-curry-and-peas.jpg",
    "ingredients": [
        {
            "name": "medium onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "garlic cloves",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "long grain white rice (such as jasmine or basmati)",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "curry powder",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "frozen peas",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "1/2 bunch cilantro, tough stems removed",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "roasted, unsalted pistachios or almonds",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Peel 1 onion and 4 garlic cloves and finely chop both; set aside.",
        "Heat 2 Tbsp. oil in a Dutch oven or medium pot over medium. Cook onion and garlic, stirring often with a wooden spoon, until onion is translucent, about 5 minutes. Season with salt and pepper.",
        "Add 1 cup rice and stir until each grain is coated in oil, then continue to cook, stirring often, until ends of grains are almost translucent, about 3 minutes.",
        "Stir in 11/2 tsp. curry powder until rice is coated and curry is sticking to bottom of pot, about 1 minute.",
        "Add 11/2 cups water and stir, scraping bottom of pot with spoon to loosen spices. Bring to a simmer, then reduce heat to low and cover pot.",
        "Let rice steam until water is absorbed and grains are tender, 12-15 minutes. Remove pot from heat, uncover, and stir in 1 cup frozen peas. Drape a kitchen towel over pot. Place lid on top and let rice continue to gently steam about 5 minutes (this also makes it fluffier).",
        "While pilaf is resting, coarsely chop 1/2 bunch cilantro and 1/4 cup pistachios. Cut 1 lime into wedges.",
        "Remove lid and towel and fluff rice with a fork. Season with more salt and pepper and stir in pistachios and cilantro.",
        "Transfer to a serving bowl. Serve with lime wedges."
    ],
    "title": "Fluffy Rice Pilaf with Curry",
    "url": "https://www.bonappetit.com/recipe/fluffy-rice-pilaf-with-curry"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/AmazonBasics-6-Piece-Dinner-Plate-Set/dp/B0157FD9MS?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0157FD9MS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/All-Clad-Stainless-Dishwasher-Cookware-1-5-Quart/dp/B004T6M6Y4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004T6M6Y4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Plastic Wrap",
        "Dutch Oven",
        "Tongs",
        "Plate",
        "Medium Pot with Lid",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59dfb869d4ce5d0f9308549b/3:2/w_940,c_limit/chicken-adobo.jpg",
    "ingredients": [
        {
            "name": "head of garlic",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "green chiles (such as serrano or jalapen\u0303o), divided",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": " bone-in, skin-on chicken thighs and 4 drumsticks, or 4 whole chicken legs",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "vegetable oil",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "distilled white vinegar",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "soy sauce (not low sodium)",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "dried bay leaves",
            "quantity": 5,
            "type": "unitless"
        },
        {
            "name": "light or dark brown sugar",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "uncooked white rice, preferably short grain",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Without separating or peeling the cloves, cut entire head of garlic in half through the \u201cequator\u201d (it\u2019s fine if some cloves become detached). Thinly slice 1 green chile, removing seeds if desired for less heat.",
        "If you got whole chicken legs (if not, go to the next step), cover surface of cutting board with a double layer of plastic wrap and place legs skin side up on top (this is to protect your board from any possible contamination; if you have a cutting board that you use for raw meat, use that). You\u2019re going to split the legs into thighs and drumsticks. Working one leg at at time, wiggle drumstick so you can see the joint connecting the thigh and drumstick. Slice down with your knife crosswise between the two, aiming for the joint, until you hit bone. Grasp leg with thigh in one hand and drumstick in the other and break the joint, then cut the rest of the way through with your knife. Repeat with remaining legs.",
        "Heat 1 Tbsp. vegetable oil in a large Dutch oven over medium. Add chicken skin side down and cook, lifting pieces with tongs once or twice toward the end to let hot fat flow underneath, until fat is rendered and skin is crisp and golden brown, 7-10 minutes. Transfer skin side up to a plate. Because drumsticks are covered entirely in skin, you can brown both sides, but it\u2019s not necessary.",
        "Add 3/4 cup vinegar, 3/4 cup soy sauce, 1 Tbsp. brown sugar, 5 bay leaves, and reserved garlic and sliced chile to Dutch oven. Bring to a simmer, then reduce heat to low, stirring to dissolve sugar. Season generously with pepper.",
        "Return chicken to pot skin side up. Cover and cook chicken very gently, adjusting heat to maintain a bare simmer and turning pieces once, until meat is very tender and pulling away from bone (but not so tender that it\u2019s falling apart), 35-40 minutes.",
        "While chicken is simmering, cook 1 cup rice in medium pot according to package directions.",
        "Transfer chicken to a clean plate. Increase heat to medium-high and boil braising liquid, shaking pot often, until liquid has formed a rich sauce thick enough to coat the back of a spoon, about 5 minutes. Remove pot from heat and return chicken to pot, turning to coat in sauce.",
        "Serve chicken and sauce over rice. Thinly slice remaining chile and scatter over, then season with more pepper."
    ],
    "title": "Easiest Chicken Adobo",
    "url": "https://www.bonappetit.com/recipe/easiest-chicken-adobo"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Silicone-Basting-Pastry/dp/B000JPSI8C?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000JPSI8C?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-AMB-9RCK-Classic-Nonstick-Bakeware/dp/B0000ULZX6?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0000ULZX6?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Kitchens-Cookie-Parchment-Non-Stick/dp/B00K282KY4?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00K282KY4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Bamboo-Skewers-12-Inch-Natural/dp/B005D6GCSA?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005D6GCSA?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-4-Inch-Classic-Paring-Straight/dp/B005LRYE36/ref=zg_bs_289859_1/138-8129613-6315707?_encoding=UTF8&psc=1&refRID=744BPX2PZ5WC7BAKG62B&tag=bonappfig-20",
        "https://www.amazon.com/UPI-Heavy-Duty-Cooling-Commercial-Oven-Safe/dp/B012EL3068?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B012EL3068?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Small Bowl",
        "Microplane",
        "Brush",
        "Round Cake Pan",
        "Parchment Paper",
        "Whisk",
        "Large Bowl",
        "Cake Tester",
        "Paring Knife",
        "Wire Rack"
    ],
    "image_src": "https://assets.bonappetit.com/photos/58c2c2c7b1bf59134d606c67/3:2/w_940,c_limit/0317-ba-basics-upside-down-cake-beauty-28.jpg",
    "ingredients": [
        {
            "name": "(1 stick) unsalted butter",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "bags frozen sweet cherries or blueberries (no need to thaw)",
            "quantity": "2",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "plus 1 cup sugar; plus more for serving",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "all-purpose flour",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "baking powder",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "baking soda",
            "quantity": "1/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "large eggs, room temperature",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "sour cream or whole plain yogurt, room temperature, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Arrange a rack in center of oven; preheat to 425\u00b0. Take this time to assemble all your ingredients and do your prep. Melt 1/2 cup (1 stick) butter in small bowl in a microwave or in a small saucepan over medium heat and let cool. Finely grate zest of whole lemon, then squeeze 2 Tbsp. juice; set aside.",
        "Brush 1 Tbsp. melted butter around bottom and sides of cake pan (if you don\u2019t have a pastry brush, use your fingertips). Line bottom of pan with a circle of parchment paper, smoothing to eliminate air bubbles between parchment and pan. Making a parchment circle is easy: just place your pan on a piece of parchment, trace the circumference with a pencil, then cut it out.",
        "Toss cherries, 2 Tbsp. sugar, 2 Tbsp. lemon juice, and 2 Tbsp. melted butter in cake pan (fruit will clump up when it hits the melted butter, which is fine). It\u2019ll all melt together as it bakes.",
        "Bake cherries, gently shaking pan once halfway through, until fruit juices are thick and bubbling around sides of pan, 40-50 minutes. Let cool. Reduce oven temperature to 350\u00b0.",
        "Whisk 2 cups flour, 2 tsp. baking powder, 1/2 tsp. salt, 1/4 tsp. baking soda, and 1 cup sugar in a large bowl.",
        "Make a well in the center of dry ingredients. Beat 3 eggs to blend and pour into center of well along with 1 cup sour cream, 2 tsp. lemon zest, and remaining 5 Tbsp. melted butter (it\u2019s okay if butter has re-solidified; go ahead and scrape it in there).",
        "Starting in the center, whisk to blend egg mixture, then make larger circles outward to incorporate dry ingredients. Whisk several more times until batter is smooth.",
        "Carefully dollop large spoonfuls of batter over fruit (it\u2019s okay if pan is still warm and some fruit juices pool around batter); gently smooth surface.",
        "Bake cake until top is golden brown and a tester or toothpick inserted into the center comes out clean, 45-55 minutes.",
        "Let cake cool in pan 10 minutes, then use a paring knife to loosen cake from edge of pan.",
        "Place a wire rack over pan, then swiftly invert rack and pan; cake should release from pan on its own. Lift cake pan off cake, peel off parchment, and marvel at your creation. If some of the cherries cling to the parchment, tuck them back into place. Let cake cool completely.",
        "Whisk remaining 1 cup sour cream with 1-2 Tbsp. sugar in a large bowl. Dollop on each slice before serving."
    ],
    "title": "Easy One-Bowl Upside-Down Cake",
    "url": "https://www.bonappetit.com/recipe/easy-one-bowl-upside-down-cake"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Glass Measuring Cup",
        "Aluminum Foil",
        "Tongs",
        "Flexible Metal Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59d64ceda02eaa65814f3b73/3:2/w_940,c_limit/perfectly-roasted-potatoes.jpg",
    "ingredients": [
        {
            "name": "medium yukon gold potatoes (about 2 inches in diameter)",
            "quantity": "2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Kosher salt, freshly ground pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Place a rack in lowest position in oven and preheat to 425\u00b0. Halve 2 lb. Yukon Gold potatoes crosswise.",
        "Arrange potatoes, cut side down, on a rimmed baking sheet, spacing evenly apart. Pour in 11/2-2 cups water (it needs to cover baking sheet in a thin layer).",
        "Cover baking sheet with a double layer of foil, crimping sides very tightly to seal well. Doing this will trap in steam and prevent water from dribbling out if you tip the sheet.",
        "Bake potatoes until a fork or skewer slides easily through potatoes, 25-30 minutes. The foil will be puffed, but poke through and feel around for a potato to test. Try testing a couple to gauge doneness.",
        "Let potatoes cool about 5 minutes. Crank up oven temperature to 500\u00b0 (or as high as your oven goes). Use tongs to lift up foil at 1 corner, peeling it back only about 1\". Tip open corner into the sink and pour off water.",
        "Remove foil and drizzle 1/4 cup oil over potatoes; season generously with salt and pepper. Let potatoes cool to the point you can handle them, then toss with your hands to coat completely. Arrange cut side down again.",
        "Roast potatoes until tops are golden, bottoms are deeply browned and crisp, and oil around edges is sizzling and, 20-25 minutes.",
        "Let potatoes cool slightly, then use a spatula to unstick them from baking sheet."
    ],
    "title": "Perfectly Roasted Potatoes",
    "url": "https://www.bonappetit.com/recipe/perfectly-roasted-potatoes"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Rimmed Baking Sheet",
        "Whisk",
        "Medium Bowl",
        "Flexible Metal Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59d3975dcc3b562b44e535ea/3:2/w_940,c_limit/crispiest-clusteriest-crunchiest-granola.jpg",
    "ingredients": [
        {
            "name": "old-fashioned oats",
            "quantity": "2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bran flake cereal",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large unsweetened coconut flakes",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "raw pecans",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "raw pumpkin seeds (pepitas)",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "raw sunflower seeds",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "wheat germ",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "pure maple syrup",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "virgin coconut oil, melted",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large egg white",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 275\u00b0. Toss 2 cups oats, 1 cup cereal, 1 cup coconut, 1 cup pecans, 1/2 cup pepitas, 1/2 cup sunflower seeds, 1/3 cup wheat germ, and 1 tsp. salt on a rimmed baking sheet.",
        "Pour 1/2 cup maple syrup and 1/2 cup oil over and mix with clean hands until all nuts, seeds, and oats are coated.",
        "Vigorously beat 1 large egg white in a medium bowl until very thick and foamy, about 45 seconds. Pour over oat mixture and mix with hands again until egg white is evenly distributed.",
        "Spread out granola in an even layer.",
        "Bake 30 minutes, then remove sheet from oven and stir once with a flexible metal spatula, turning mixture and spreading out again into an even layer.",
        "Continue to bake, without stirring, until oats are toasted and crisp, 35-45 minutes longer. Let cool without stirring.",
        "When granola is cooled, scrape bottom of tray with spatula to loosen granola and break into clusters. Serve or transfer to an airtight container.",
        "Do Ahead: Granola can be made 1 week ahead. Store in an airtight container at room temperature."
    ],
    "title": "Nothing But Clusters Granola",
    "url": "https://www.bonappetit.com/recipe/nothing-but-clusters-easy-granola"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Dutch Oven",
        "Colander",
        "Paper Towels",
        "Measuring Cups",
        "Blender",
        "Flexible Metal Spatula",
        "Tongs"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59cbec073cfc500568765c1a/3:2/w_940,c_limit/bacony-carnitas-with-chipotle-salsa.jpg",
    "ingredients": [
        {
            "name": "bacon",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "boneless pork shoulder",
            "quantity": "11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "11/2  teaspoons kosher salt, plus more",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "can whole peeled tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "garlic cloves",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "very small red onion",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "1/2 bunch cilantro",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "canned chipotle chiles in adobo",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "limes, divided",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "agave syrup (nectar) or honey",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Corn tortillas (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Coarsely chop 6 oz. bacon and transfer to a Dutch oven. Cut 11/2 lb. pork shoulder into 11/2\"-thick pieces and add to pot. Add 11/2 tsp. salt and cover meat with water\u2014not so much water that the pieces are bobbing around, but you want them almost entirely submerged.",
        "Bring to a simmer over medium heat. Reduce heat to low and cover pot. Simmer, lifting lid occasionally to stir and poking pieces of pork with a fork to test for tenderness after the first half hour, until tender, 45-60 minutes. When you lift the lid, you want to see gentle bubbles. If you see rapid bubbling or no bubbling at all, adjust your heat accordingly.",
        "While pork is cooking, prep the rest of your ingredients. Drain 14 oz. tomatoes in a colander or strainer. Smash 2 garlic cloves and discard skins. Peel 1 red onion and thinly slice about a quarter of it. Place slices on the side of cutting board and cover with a damp paper towel. Coarsely chop remaining onion. Pick about 1 cup cilantro leaves with tender stems and cover with a damp paper towel on cutting board. Run knife through remaining cilantro to coarsely chop (stems included).",
        "Combine drained tomatoes, garlic, 2 chipotle chiles, 2 tsp. agave syrup, coarsely chopped onion, and coarsely chopped cilantro in a blender. Cut 1 lime in half and squeeze in juice. Blend on high until salsa is smooth (you should have about 13/4 cups). Season with salt.",
        "Check to make sure pork is fork-tender. When you slide tines of a fork into a piece and twist, the fibers will easily separate. At this point, uncover pot and increase heat to medium. Let pork bubble away until water is evaporated, 10-15 minutes.",
        "At this point, the pork will begin to sputter and splatter. To protect yourself from the burning hot flying pork fat, place lid back on pot slightly ajar and increase heat to medium-high. After about 2 minutes of the pork sizzling in its own fat, reduce heat to low and lift lid to check on it. You want the undersides of the pieces to be browned and crispy. If they\u2019re not, put the lid back on and increase heat again. Cook for another minute or two.",
        "Once pork is browned on first side, use a spatula to loosen and turn pieces by scraping bottom. Put lid back on slightly cockeyed and crank heat again until second side is browned, 2-3 minutes. Repeat process of covering and browning meat, then uncovering and turning pieces, once or twice more until browned and crispy all over. Remove pot from heat.",
        "Warm tortillas by grasping with tongs and waving them over a gas burner, or wrap in damp paper towels and microwave 30 seconds.",
        "Serve carnitas with warm tortillas, salsa, and reserved sliced onion and cilantro leaves. Cut remaining lime into wedges and serve alongside."
    ],
    "title": "Bacon-y Carnitas Tacos",
    "url": "https://www.bonappetit.com/recipe/bacon-y-carnitas-tacos"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Glad-Food-Plastic-Wrap-Variety/dp/B01FDB1TGO?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01FDB1TGO?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Fish Spatula",
        "Small Bowl",
        "Medium Bowl",
        "Plastic Wrap"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59c97376751936091660b55d/3:2/w_940,c_limit/sheet-pan-pizza-with-brussels-sprouts-and-salami.jpg",
    "ingredients": [
        {
            "name": "prepared pizza dough",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "brussels sprouts",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "garlic cloves, unpeeled",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "A large pinch of crushed red pepper flakes, plus more for serving",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "hard salami",
            "quantity": "3",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "low-moisture salted mozzarella cheese",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "small shallot",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Place a rack directly underneath broiler in oven; preheat to 450\u00b0. Make sure bottom of oven is accessible (that\u2019s right, you\u2019re going to bake directly on the bottom of your oven). Take 1 lb. pizza dough out of fridge and let it sit so it reaches room temperature, because room temp dough is much easier to stretch.",
        "Start by trimming 1 lb. Brussels sprouts. Slice off the dried, gnarly bottoms of each sprout; discard any dried outer leaves that may fall off. Slice each sprout in half lengthwise.",
        "Set aside about one-quarter of the halves, then transfer remaining sprouts to a rimmed baking sheet. Add 6 garlic cloves, then drizzle with 2 Tbsp. oil; season with salt and a large pinch of red pepper flakes. Toss with clean hands to combine and arrange sprouts cut sides down.",
        "Place baking sheet on floor of oven (NOT on a rack) and roast, turning sprouts halfway through with a spatula, until sprouts are deeply browned on all over and tender all the way through, 15-18 minutes. Let cool.",
        "While Brussels are roasting and cooling, prep your other ingredients. Remove casing from 3 oz. salami and slice into thin rings, then cut rings into quarters. Slice 12 oz. mozzarella into planks that are no more than 1/4\" thick. Peel 1 shallot and cut crosswise into thin rings. Place shallot rings in a small bowl. Cut lemon in half and squeeze halves into bowl. Add a pinch of salt and toss; set aside.",
        "When Brussels are cool enough to handle, scrape into a medium bowl and set aside. Reserve sheet tray. Fish out garlic and squeeze cloves from skins. Mash garlic to a paste in another small bowl with a fork. Add 2 Tbsp. oil and stir to combine.",
        "Place dough in center of reserved baking sheet and drizzle with 1 Tbsp. oil, then toss to coat. Use your fingers to stretch dough outward from center all the way to edges of baking sheet. If dough stubbornly springs back, cover with plastic wrap and let rest a few minutes before attempting to stretch again.",
        "Drizzle garlic-oil over dough and spread around with your fingers to coat. Season with salt, then top with mozzarella, roasted Brussels, and salami, distributing evenly. (Reserve bowl that held Brussels.)",
        "Bake pizza on floor of oven until underside is browned and edges are puffed and starting to turn golden, 7-10 minutes (lift up edge of pizza with spatula to peek underneath).",
        "While pizza is baking, thinly slice remaining Brussels sprouts crosswise and add to bowl that had the roasted sprouts. Toss with remaining 1 Tbsp. oil and season with salt.",
        "Remove pizza from oven and turn broiler to high. Scatter sliced Brussels over pizza.",
        "Broil pizza on top rack until cheese is bubbling and browned and edges of crust are deep golden, 2-3 minutes.",
        "Top with more red pepper flakes. Drain shallot and scatter rings over pizza."
    ],
    "title": "Sheet-Pan Pizza with Brussels Sprouts and Salami",
    "url": "https://www.bonappetit.com/recipe/sheet-pan-pizza-brussels-sprouts-salami"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Classic-Stainless-Stockpot-6-Quart/dp/B00008CM6I?tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-719-16-Classic-Stainless-Saucepan/dp/B00008CM69?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/ExcelSteel-242-5-Quart-Stainless-Colander/dp/B00555ETXY/ref=sr_1_6?s=home-garden&ie=UTF8&qid=1501117020&sr=1-6&keywords=colander&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Nylon-Ladle/dp/B003L0OOVW/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1506091358&sr=1-4&keywords=ladle&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Large Saucepan with Lid",
        "Cutting Board",
        "Vegetable Peeler",
        "Chef's Knife",
        "Medium Saucepan",
        "Wooden Spoon",
        "Colander",
        "Ladle"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59c51b7ef184ac54c7f65f81/3:2/w_940,c_limit/30-minute-coconut-green-curry-with-shrimp.jpg",
    "ingredients": [
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "3-inch knob fresh ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "jalapen\u0303o",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "bunch scallions (about 10)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "vegetable oil, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "jar prepared green curry paste",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "cans unsweetened coconut milk",
            "quantity": "2",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "rice noodles",
            "quantity": "8",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "large shrimp, peeled, deveined",
            "quantity": "11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "1/2 bunch basil",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "The first thing you want to do is get water boiling for your rice noodles. Fill a large saucepan three-quarters full with water and heat over high. When water starts to steam, add several large pinches of salt and cover.",
        "Meanwhile, start to prep your other ingredients. Peel ginger with a vegetable peeler or spoon and slice as thinly as possible. Slice 1 jalapen\u0303o into thin rings and discard stem. Trim root ends from 1 bunch scallions. Starting at root end, cut white and light green parts into 1\" pieces. Set aside segments and reserve dark green parts for serving. Use vegetable peeler to remove zest in strips from 1 lime, then cut lime into 4 wedges.",
        "Heat 2 Tbsp. oil in a medium saucepan over medium. Add ginger, light parts of scallions, lime zest, and half of jalapen\u0303o. Cook, stirring often, until ginger and scallions are golden, 7-10 minutes. Season with salt.",
        "Add 4 oz. curry paste and stir until paste starts to stick to bottom and is slightly darkened in color, about 3 minutes.",
        "Add two 13.5-oz. coconut milk and stir to combine. Season with more salt, then reduce heat so mixture is barely simmering. Cook, stirring occasionally, until flavors are melded and curry is slightly thickened, 5-7 minutes.",
        "Meanwhile, cook 8 oz. rice noodles in pot of boiling water according to package instructions. Drain noodles in a colander in the sink, rinse thoroughly under cold water, and shake off excess water. Drizzle with remaining 1 Tbsp. oil and toss to coat and prevent sticking.",
        "Season 11/2 lb. shrimp with salt and add to curry. Cook, stirring, until shrimp are cooked through, 2-3 minutes. Remove pot from heat and squeeze in juice from half of lime wedges.",
        "Divide noodles among bowls, then ladle curry over noodles. Thinly slice remaining scallion greens and sprinkle over curry along with remaining jalapen\u0303o.",
        "Pick basil sprigs and scatter over, then serve with remaining lime wedges alongside."
    ],
    "title": "Shrimp and Coconut Curry with Rice Noodles",
    "url": "https://www.bonappetit.com/recipe/shrimp-coconut-curry-with-rice-noodles"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Y-Peeler/dp/B00004OCIU?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCIU?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Whisk",
        "Large Bowl",
        "Vegetable Peeler",
        "Chef's Knife",
        "Cutting Board",
        "Cast Iron Skillet",
        "Spatula",
        "Spider",
        "Sieve"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59c17e81ad967f6d01396a2e/3:2/w_940,c_limit/butterscotch-apple-custard.jpg",
    "ingredients": [
        {
            "name": "large eggs",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "plus 1/3 cup light brown sugar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "all-purpose flour",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "kosher salt",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "half-and-half",
            "quantity": "11/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "whiskey, bourbon, rum, brandy, or other liquor",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "vanilla extract",
            "quantity": "2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "baking apples, such as Pink Lady or Granny Smith (about 2 pounds total)",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "unsalted butter, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Powdered sugar (for pan and dusting)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Arrange a rack in center of oven; preheat to 400\u00b0. Make the batter first because it needs to rest for a few minutes. Whisk 4 eggs and 1/2 cup brown sugar in a large bowl until sugar is dissolved and mixture is completely smooth, about 30 seconds. Whisk in 1/3 cup flour and 1/2 tsp. salt until smooth, then stream in 11/2 cups half-and-half and whisk until mixture is homogenous. Add 2 Tbsp. whiskey and 2 tsp. vanilla and mix once just to combine; set aside.",
        "Prepare your apples: Using a vegetable peeler, remove all of the peel, then stand apples upright and slice down along core, working all the way around to remove big lobes of flesh. Cut lobes lengthwise into 1\"-thick slices. Discard peel and cores; set aside slices.",
        "Combine 5 Tbsp. butter, remaining 1/3 cup brown sugar, and 3 Tbsp. water in a large heatproof skillet (cast iron is ideal, but you can use any stainless steel skillet that can go in the oven\u2014no plastic handles!). Heat over medium, stirring, until butter is melted and sugar is dissolved. Increase heat to medium-high and bring mixture to a boil. Cook, without stirring but occasionally swirling skillet, until toffee is thickened and bubbles are slightly slower to pop, about 2 minutes.",
        "Add apple slices to skillet and cook, shaking or stirring to toss apples occasionally, until just tender and golden across some surfaces, 10-15 minutes. Remove skillet from heat and scrape apple toffee mixture into a large heatproof bowl.",
        "Rinse skillet under cool water to remove any toffee residue, but don\u2019t bother to wash it. Dry skillet well, then use remaining 1 Tbsp. butter to coat bottom and sides in a thin layer. Dust buttered surfaces with powdered sugar and tap out excess.",
        "Mix batter once more, then pour into skillet. Using a spider or slotted spoon, lift apple slices from bowl, leaving toffee behind, and arrange across bottom of skillet.",
        "Bake custard until batter is puffed and deep golden brown around the edges and golden in the center, 25-30 minutes. Carefully remove from oven (handle will be hot!) and let cool. Custard will look puffy but will fall as it cools.",
        "Let rest at least 15 minutes before serving. Dust with more powdered sugar and drizzle with reserved toffee sauce before serving.",
        "Do Ahead: Custard can be baked 8 hours ahead. Cover and chill."
    ],
    "title": "Easiest Caramel Apple Clafoutis",
    "url": "https://www.bonappetit.com/recipe/easiest-caramel-apple-clafoutis"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUB?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00006JSUB?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Norpro-1934-Stainless-14-inch-Skewers/dp/B002YFV90Y?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002YFV90Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Farberware-Cayenne-20-Piece-Flatware-Service/dp/B00CYGBE4Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00CYGBE4Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Cast Iron Skillet",
        "Paper Towels",
        "Tongs",
        "Chef's Knife",
        "Cutting Board",
        "Skewer",
        "Spoon",
        "Small Bowl",
        "Microplane",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59bae097a428681ad7c44fa5/3:2/w_940,c_limit/one-skillet-roasted-sesame-chicken-thighs-with-carrots.jpg",
    "ingredients": [
        {
            "name": "skin-on, bone-in chicken thighs (about 2 pounds total)",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "sesame oil, preferably toasted, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "medium carrots, scrubbed",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "soy sauce",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "sriracha",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "unseasoned rice vinegar",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "honey",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "1-inch piece ginger",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "scallions",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "Toasted sesame seeds (for serving)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 425\u00b0. Heat a large dry skillet, preferably cast iron, over medium-low.",
        "Pat 6 chicken thighs dry with paper towels and season all over with salt. Rub only skin side of thighs with 1 Tbsp. oil.",
        "Transfer thighs skin side down to skillet and cook until enough fat is rendered to cover bottom of skillet, about 5 minutes. Once skin starts to brown, increase heat to medium. Rotate skillet to encourage even browning. Carefully lift up thighs to allow hot fat to run underneath. If thighs are stubborn and don\u2019t want to release, let them go a bit longer.",
        "While thighs are cooking, cut 1 lb. carrots into 4\" segments.",
        "Cook thighs until meat is opaque all around the edges and skin is deep golden brown, 10-12 minutes total. Transfer skin side up to a plate.",
        "Pour off all but about 2 Tbsp. fat from skillet (you just want enough left to form a thin layer) and heat over medium-high. Add carrots and try to arrange so all are side by side in a single layer in direct contact with skillet. Cook, undisturbed, until lightly charred on first side, about 5 minutes. Turn carrots so charred side is facing up, then season lightly with salt.",
        "Cook carrots on opposite side until lightly charred, about 2 minutes. Turn off stove and transfer skillet to oven. Roast until a toothpick, skewer, or cake tester easily pierces surface of carrot but encounters resistance in the center, 8-10 minutes.",
        "While carrots are roasting, stir 2 Tbsp. soy sauce, 2 Tbsp. Sriracha, 1 Tbsp. rice vinegar, 1 Tbsp. honey, and remaining 1 Tbsp. oil in a small bowl. Scrape peel off of ginger root with a spoon; discard peel. Grate ginger into bowl with microplane, then stir to combine.",
        "Carefully remove skillet from oven (the handle will be hot!) and place on stove. Arrange thighs over carrots and drizzle sauce over. Return to oven and roast until chicken thighs are cooked through (an instant-read thermometer inserted into the thickest part near the bone will register 165\u00b0), juices run clear, sauce is caramelized on chicken skin, and carrots are tender all the way through, 12-18 minutes. Remove from oven and let rest 10 minutes.",
        "While skillet is resting, thinly slice 3 scallions.",
        "Transfer chicken and carrots to a platter and drizzle pan juices over. Top with scallions and sesame seeds."
    ],
    "title": "One-Skillet Roasted Sesame Chicken Thighs",
    "url": "https://www.bonappetit.com/recipe/one-skillet-roasted-sesame-chicken-thighs"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Box Grater",
        "Small Bowl",
        "Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59b80b9275980b2981badafc/3:2/w_940,c_limit/roasted-cauliflower-with-capers-lemon-and-parmesan.jpg",
    "ingredients": [
        {
            "name": "large head of cauliflower (about 21/2 pounds)",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "5",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt, freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "parmesan",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "capers, drained, divided",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Arrange a rack in lowest position of oven; preheat to 450\u00b0. Place 1 head of cauliflower on a cutting board and snap off green outer leaves. Use knife to shave off end of stem to create a flat surface on which the cauliflower can stand upright.",
        "Starting from one end, cut entire head of cauliflower into 1/2\" slices, letting the pieces fall where they may. The pieces connected to the root will remain intact in planks.",
        "Transfer cauliflower to a rimmed baking sheet and drizzle with 3 Tbsp. oil. Season with salt and pepper and toss with your hands to make sure pieces are evenly coated, then arrange so they\u2019re resting on a flat cut surface.",
        "Roast cauliflower on bottom rack until pieces are browned around the edges and undersides are deeply browned all over, 25-30 minutes.",
        "While cauliflower is roasting, grate 1 oz. Parmesan on the large holes of a box grater. Set aside about half for garnishing.",
        "Coarsely chop 1 Tbsp. capers, then toss all capers in a small bowl with remaining 2 Tbsp. oil. Cut 1 lemon in half and squeeze in juice.",
        "When cauliflower is ready on the first side, remove baking sheet from oven and place on a work surface. Using a spatula, turn pieces over so browned sides are facing up. Sprinkle Parm NOT set aside for garnish over cauliflower.",
        "Return sheet to oven and continue to roast until second side of cauliflower is browned and Parm is toasty smelling and browned, 10-12 minutes.",
        "Let cool a few minutes, then transfer cauliflower to a plate with spatula and drizzle lemon-caper dressing over.",
        "Season with a bit more salt and pepper, then top with reserved Parm."
    ],
    "title": "Roasted Cauliflower with Capers and Parmesan",
    "url": "https://www.bonappetit.com/recipe/roasted-cauliflower-with-capers-and-parmesan"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.webstaurantstore.com/vollrath-lincoln-3902-optio-6-3-4-qt-sauce-pot-with-cover/9223902.html",
        "https://www.amazon.com/Cuisinart-Stainless-Steel-Strainers-CTG-00-3MS/dp/B007TUQF9O?SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B007TUQF9O?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Lodge-EC6D43-Enameled-6-Quart-Island/dp/B000N501BK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000N501BK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-3-Piece-Glass-Measuring-Cup/dp/B00M2J7PCI?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00M2J7PCI?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Large Pot",
        "Sieve",
        "Paper Towels",
        "Box Grater",
        "Dutch Oven",
        "Wooden Spoon",
        "Spider",
        "Heatproof Measuring Cup",
        "Tongs"
    ],
    "image_src": "https://assets.bonappetit.com/photos/59b175526dd4d0051682c593/3:2/w_940,c_limit/beans-and-greens-rigatoni-pasta.jpg",
    "ingredients": [
        {
            "name": "(or more) kosher salt",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "links sweet Italian sausage",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "can cannellini (white kidney) beans",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "bunch of Tuscan kale, rinsed",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "chunk of parmesan",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "rigatoni pasta",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "unsalted butter",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "The first thing you want to do is get your pasta water boiling. Fill a large pot (preferably around 8 quarts) with approximately 6 quarts water, then put it over high heat. When you see wisps of steam, add 3 Tbsp. salt, stir once, and cover the pot. This will make it boil faster. Yes, it\u2019s A LOT of salt, but as the pasta cooks, it absorbs the salty water, ensuring the pasta is seasoned from the inside out. You end up dumping most of the salt anyway when you drain the water.",
        "While the water comes to a boil, prep your other ingredients. Remove 3 links sausage from its casings and set aside. Dump 1 can beans into a strainer or colander and rinse well. Shake off excess water. Turn out beans onto a couple of sheets of paper towel and pat dry with a few more paper towels. Strip kale leaves off the thick woody ribs and tear into small pieces; discard ribs. Finely grate 2 oz. Parmesan using the small holes of a box grater. Set aside about 1/2 cup cheese for garnishing.",
        "Heat 2 Tbsp. oil in a large Dutch oven or large skillet, preferably with straight sides, over medium-high. It\u2019s best to use a vessel with high sides, because you\u2019re about to do a lot of tossing and flinging when the pasta goes in, and this will minimize spillage. Add sausage and cook, breaking up with a wooden spoon and stirring occasionally, until meat is browned, crispy in places, and cooked through, 8-10 minutes. Transfer with a spider or slotted spoon to a plate. Remove pot from heat and set aside.",
        "Pour 12 oz. pasta into water and stir once. Set timer for 3 minutes less than the package advises. You\u2019re going to cook it well shy of al dente.",
        "While pasta is cooking, return pot to medium-low heat and add beans and 1/2 tsp. red pepper flakes. Cook, tossing occasionally and mashing some beans with spoon, until browned in spots, about 5 minutes. Transfer about half of beans to plate with sausage.",
        "Using a ladle or liquid measuring cup, add about 1 cup cooking liquid from pasta into pot with beans (reserve remaining liquid). Increase heat to medium-high.",
        "Using spider or a slotted spoon, transfer pasta to pot with beans and add kale. Toss vigorously with tongs to move the pasta around to incorporate the kale as it wilts.",
        "Continue to cook, tossing often, until kale is wilted, pasta is al dente, and water is reduced by about half, about 4 minutes. If water is reduced before pasta is al dente, add another 1/4-1/2 cup pasta cooking liquid. Reduce heat to low.",
        "Add another 1/4 cup pasta cooking liquid, then gradually add cheese, tossing all the while, until cheese is emulsified into the water and forms a luxurious, glossy sauce.",
        "Remove pot from heat and add reserved beans and sausage, then 2 Tbsp. butter, tossing, until butter is melted.",
        "Taste pasta and add more salt if needed. Cut 1 lemon in half and squeeze one half over pasta, then drizzle with remaining 1 Tbsp. oil.",
        "Divide pasta among bowls and top with reserved 1/2 cup cheese."
    ],
    "title": "Rigatoni with Sausage, Beans, and Greens",
    "url": "https://www.bonappetit.com/recipe/rigatoni-with-sausage-beans-and-greens"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-CTG-00-BG-Boxed-Grater/dp/B004YZENBY?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B004YZENBY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP193-18CH-MultiClad-Stainless-Saucepan/dp/B071D87589?tag=bonappfig-20",
        "https://www.amazon.com/Norpro-1934-Stainless-14-inch-Skewers/dp/B002YFV90Y?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002YFV90Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Asian-Kitchen-Stainless-Strainer-Natural/dp/B000PKQ3YW?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000PKQ3YW?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/American-Metalcraft-MEL49-Endurance-Collection/dp/B005V9C89G?SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B005V9C89G?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Rimmed Baking Sheet",
        "Medium Bowl",
        "Chef's Knife",
        "Cutting Board",
        "Box Grater",
        "Small Bowl",
        "Paper Towels",
        "Large Saucepan",
        "Skewer",
        "Spider",
        "Large Bowl",
        "Blender",
        "Microplane",
        "Platter"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919caf17db4f24491d5bcc/3:2/w_940,c_limit/basically-pesto-potatoes-1.jpg",
    "ingredients": [
        {
            "name": "raw walnuts",
            "quantity": "2/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large eggs",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "parmesan (about a 2x1-inch knob)",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "small red-skinned potatoes or other small potatoes",
            "quantity": "11/2",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "(packed) basil leaves, plus a small handful for serving",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "small garlic clove",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "extra-virgin olive oil",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Preheat oven to 350\u00b0. Roast 2/3 cup walnuts on a small rimmed baking sheet until golden brown and toasty-smelling, 8-10 minutes. Let cool. Set aside 4 or 5 walnuts halves for serving.",
        "Meanwhile, prep your other ingredients. Pull 6 eggs out of the fridge and place in a medium bowl. Cover them with hot tap water and let sit to take the chill off (cold eggs will crack when you drop them in boiling water). Cut 1 lemon in half. Grate 1 oz. Parmesan on the medium holes of a box grater. If your box grater has the side that makes thin, flat shavings, use that side. Transfer cheese to a small bowl and cover with a wet paper towel to prevent drying out.",
        "Place 11/2 pounds potatoes in a large saucepan and cover with cold water by about 2\". Add a small fistful of salt and bring to a boil over medium heat.",
        "When potatoes are boiling, reduce heat to medium-low and bring liquid to a simmer. Cook until potatoes are tender, 15-20 minutes. Test them for doneness after 15 minutes by using a skewer or fork to pierce one of the larger potatoes. The skewer should slide into the center easily with little resistance.",
        "Using a slotted spoon or spider, transfer potatoes to a large bowl. If water in pot has reduced below the halfway point, top off with more water and bring back to a boil.",
        "Carefully lower eggs into pot with slotted spoon or spider (reserve bowl they were just in) and immediately set the timer for 8 minutes (this will give you medium-cooked eggs; if you like a drier yoke, set the timer for 9-10 minutes).",
        "While the eggs are cooking, fill bowl formerly occupied by eggs with ice water.",
        "When the timer goes off, immediately lift eggs out of water with spider or slotted spoon and plunge into ice water. Let cool a few minutes, then remove eggs from water and peel.",
        "If you\u2019re not using any appliances and want to make the pesto by hand, skip to step 11. Mix toasted walnuts and 3/4 cup basil leaves in a food processor, chopper, or blender. Pulse 4-5 times until walnuts are chopped. Use a microplane to grate in 1 garlic clove, then zest of a lemon half.",
        "Add 1/2 cup oil and all but about 2 Tbsp. cheese (reserve for serving). Squeeze in juice of zested lemon half. Pulse again a few times until incorporated and nuts are finely chopped. Season with salt and pepper and pulse just once or twice more to combine.",
        "If you\u2019re not using a food processor, finely chop walnuts and 3/4 cup basil together on cutting board. Transfer to a medium bowl and finely grate 1 garlic clove and zest of a lemon half into bowl. Add 1/2 cup oil and squeeze in juice from zested lemon half; stir to combine. Season with salt and pepper; set aside.",
        "Tear potatoes into small bite-size pieces with your hands, making irregular craggy pieces.",
        "Spoon about three-quarters of pesto dressing over potatoes and toss to combine. Season with more salt and pepper. Arrange potatoes on a platter.",
        "Tear eggs into pieces, tucking into and around potatoes on platter.",
        "Drizzle remaining pesto dressing over eggs.",
        "Crumble reserved walnut halves with your hands and sprinkle over. Top with reserved cheese and basil leaves.",
        "Finely grate zest of remaining lemon half over, then squeeze juice all over."
    ],
    "title": "Pesto Potato Salad",
    "url": "https://www.bonappetit.com/recipe/pesto-potato-salad"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Microplane",
        "Large Bowl",
        "Fish Spatula",
        "Large Skillet",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f00762479441876ab9983/3:2/w_940,c_limit/Lamb%20Gyro%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "romaine heart",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "sprigs oregano",
            "quantity": 6,
            "type": "unitless"
        },
        {
            "name": "cherry tomatoes",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "large garlic cloves, divided",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "diamond crystal or 3/4 teaspoon morton kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Several dashes of hot sauce, plus more for serving",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "ground lamb or beef",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "extra-virgin olive oil, divided",
            "quantity": "4",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "large soft pitas (not pocket)",
            "quantity": 4,
            "type": "unitless"
        },
        {
            "name": "plain whole-milk yogurt",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "You know when you hear chefs talking about \u201cmise en place,\u201d or the process of prepping all your ingredients? Well, that\u2019s what you\u2019re about to do. Cut 1 lemon into wedges and slice off white strip at the point of each wedge, also cutting out seeds (discard white part and seeds). Set wedges aside. Separate leaves of 1 romaine heart and wash/dry if necessary. Tear any large leaves into pieces. Strip oregano leaves from stems; discard stems. Set aside 1 Tbsp. oregano leaves. Finely chop the rest and transfer to a large bowl. Cut 1 cup cherry tomatoes in half.",
        "Finely grate 2 garlic cloves into bowl with chopped oregano. Add 1 tsp. salt, several dashes of hot sauce, and 1 Tbsp. cold water.",
        "Add 1 lb. lamb and use 1 clean hand to knead mixture, simultaneously rotating bowl with your other hand, to incorporate. Knead until a light film forms on side of bowl and mixture holds together in a single mass and is very firm (it will spring back when pressed), about 1 minute.",
        "Heat 3 Tbsp. oil in a large skillet, preferably cast iron, over medium-high until oil is shimmering. Carefully add lamb mixture and press into a single flat layer with a flexible spatula (a fish spatula works great for this).",
        "Cook meat, undisturbed, until underside is browned and crisp around the edges, 5-7 minutes. Watch out for splatter and reduce heat slightly if mixture is splattering a lot.",
        "Using spatula, break patty into smaller pieces and turn. Cook pieces on the other side until edges are crisp and meat is cooked through, about 5 minutes.",
        "Remove skillet from heat and transfer lamb to a clean large bowl with spatula, then break up meat into small pieces with end of spatula.",
        "Pour off all but a thin layer of fat from skillet into a small heatproof bowl and reserve. Return skillet to medium heat. Working one or two pitas at a time (depending on size of pitas and skillet), cook pitas until underside is golden and crisp around the edges, 1-2 minutes. You only want to crisp 1 side. Transfer pitas to cutting board crisped side down. Add an extra splash of reserved fat to skillet and repeat with remaining pitas.",
        "Finely grate remaining garlic clove into a small bowl and add 3/4 cup yogurt and remaining 1 Tbsp. oil. Season with salt and squeeze 2 or 3 lemon wedges into bowl. Stir with a spoon to combine.",
        "Time to build your gyros: Arrange a layer of lettuce leaves down center of each pita (don\u2019t feel like you have to use all the lettuce). Spoon crispy lamb over lettuce, dividing entire mixture evenly. Top with tomatoes, also dividing evenly. Drizzle yogurt sauce over. Dust with an extra sprinkle of salt, then top with reserved oregano leaves. Add hot sauce to taste and serve with remaining lemon wedges alongside."
    ],
    "title": "Easiest Lamb Gyros with Creamy Yogurt Sauce",
    "url": "https://www.bonappetit.com/recipe/easiest-lamb-gyros-with-creamy-yogurt-sauce"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Fork",
        "Large Bowl",
        "Microplane",
        "Rimmed Baking Sheet",
        "Small Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cae7211841faf39f91d/3:2/w_940,c_limit/basically-chicken-meatballs-1.jpg",
    "ingredients": [
        {
            "name": "jarred harissa paste, such as mina, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "large egg",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "panko (japanese breadcrumbs)",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "feta in brine plus 1/4 cup brine, cheese crumbled, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "chopped parsley, divided",
            "quantity": "2/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "olive oil, divided",
            "quantity": "6",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "garlic cloves, divided",
            "quantity": 3,
            "type": "unitless"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "Freshly ground black pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "ground chicken",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "pint mixed cherry tomatoes, halved if large",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "can chickpeas, rinsed, drained",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        }
    ],
    "steps": [
        "Place a rack in top of oven; preheat to 400\u00b0. Taste your harissa. If it\u2019s extremely spicy, cut quantities used in recipe in half (most kinds in the jar are fairly mild).",
        "Using a fork, stir 1 egg, 1/2 cup panko, 1/4 cup feta brine, half of crumbled feta, half of parsley, 4 Tbsp. harissa, and 2 Tbsp. oil in a large bowl until egg is blended and mixture looks homogenous.",
        "Finely grate 2 garlic cloves into bowl, then add 1 tsp. salt and several cranks of black pepper. Be pretty generous here; 10 cranks wouldn\u2019t be too much! Stir again with a fork.",
        "Add chicken and work with clean hands until chicken is totally intermingled with panko mixture. Work it enough so that you don\u2019t see big distinct pieces of meat, but then stop. Overworking could lead to crumbly meatballs. The mixture will feel very soft and wet and look a bit shiny.",
        "Pour tomatoes and chickpeas into the center of a large rimmed baking sheet. Add 2 Tbsp. oil and remaining 2 Tbsp. harissa. Season with a good pinch of salt and pepper. Using clean hands or a small spatula, toss everything together right on sheet until chickpeas and tomatoes are evenly coated. Next you\u2019re going to form the meatballs, but don\u2019t wash your hands if you used them\u2014the coating of oil will prevent them from sticking to your palms.",
        "Roll chicken mixture gently and loosely between your palms into about 16 golf ball-sized balls (it\u2019s okay if the balls aren\u2019t perfectly round; just try to make them about the same size). Place on baking sheet, tucking them in and around chickpeas and tomatoes and spacing evenly apart.",
        "Bake meatballs on top rack until about halfway cooked through, 12-15 minutes. Remove from oven and take a look. The tomatoes should be starting to soften and burst, and the meatballs should look opaque and feel a bit springy to the touch. If not, bake a few minutes longer.",
        "Meanwhile, combine remaining 3 oz. feta, 1/3 cup parsley, and 2 Tbsp. oil in a small bowl, then grate in remaining garlic clove. Toss with fork to distribute. Turn on broiler (to high if your broiler has settings).",
        "Place baking sheet back on top rack if your broiler is on the top of your oven. If you have the kind that\u2019s a drawer underneath the oven, slide \u2018er right in. Broil meatballs, rotating tray once or twice if they\u2019re browning unevenly, until browned and fully cooked through, some tomatoes are lightly charred, and some chickpeas are crisp, 8-10 minutes.",
        "Let sit a few minutes, then sprinkle feta mixture over meatballs.",
        "Do Ahead: Meatballs can be formed on baking sheet 1 day ahead. Cover with plastic wrap and chill."
    ],
    "title": "Sheet Pan Chicken Meatballs with Tomatoes and Chickpeas",
    "url": "https://www.bonappetit.com/recipe/sheet-pan-chicken-meatballs-with-tomatoes-and-chickpeas"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.braunhousehold.com/en-us/products/food-preparation/hand-blenders/multiquick-7-hand-blender-mq777",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Large Skillet",
        "Tongs",
        "Large Bowl",
        "Blender",
        "Small Bowl",
        "Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5a1f0318d526dc0f3a88c2fe/3:2/w_940,c_limit/Summer%20Corn%20Chilaquiles%20Beauty%2032.jpg",
    "ingredients": [
        {
            "name": "tomatillos",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "scallions, spiky end trimmed, divided",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "1/2 rotisserie chicken",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "olive oil, divided",
            "quantity": "3",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ears of corn, husks and silk removed",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "1/2 bunch cilantro, divided",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "jar pickled jalapen\u0303os",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "sour cream",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "bag corn tortilla chips",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "ripe avocado",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Take 10 minutes and prep all of your ingredients. Remove and discard husks from 12 oz. tomatillos and rinse off any sticky residue (don\u2019t worry, it\u2019s normal). Cut larger ones in half and set aside on cutting board. Cut 6 of the 8 scallions into 1\" pieces. Thinly slice remaining 2 scallions and set aside on your board. Pull skin and bones off 1/2 rotisserie chicken and discard. Shred meat with your fingers and set aside on your cutting board. Cut 1 lime into wedges and set aside.",
        "Heat 1 Tbsp. oil in a large skillet over medium until shimmering. Add 2 whole corn cobs, 1\" pieces of scallions, and tomatillos (cut side up).",
        "Cook, rotating corn and tomatillos and tossing scallions occasionally, until vegetables are lightly charred all over. This will happen at different times. The scallions and tomatillos will cook fastest, 3-4 minutes. As they\u2019re done, transfer them to a large bowl.",
        "The corn will take longest, 8-12 minutes total, so keep rotating cobs. When corn is lightly charred all over, transfer to cutting board and let cool; keep skillet close by because you\u2019re going to use it again in a few minutes.",
        "Pick a small handful of cilantro leaves with tender stems and set aside. Transfer tomatillos and charred scallions to a blender and add 6 rings of pickled jalapen\u0303os (or more if you like it spicy), remaining cilantro, and 2 Tbsp. water. Starting on low speed and eventually increasing to high, blend until mixture is completely smooth. With the motor running, stream in remaining 2 Tbsp. oil to emulsify. Season salsa with salt; set aside.",
        "Take a few minutes to cut kernels off of the now-cool-enough-to-handle corn cobs. Do this directly on cutting board.",
        "Place 1/3 cup sour cream in a small bowl and squeeze in juice from 1 or 2 lime wedges, then stir to combine; set aside.",
        "Heat reserved skillet over medium-low and pour in salsa directly from blender, scraping in every last bit with a rubber spatula. Cook, stirring often with spatula, until salsa is bubbling around the edges, about 2 minutes.",
        "Fold in half of reserved chicken and half of corn kernels.",
        "Still working over medium-low heat, fold in all but a handful of 9 oz. tortilla chips, turning mixture with spatula and breaking up chips into smaller pieces until coated. Make sure to scrape around sides of skillet to incorporate any remaining sauce. If you\u2019re using a thicker tortilla chip, there should be just enough sauce to coat all the chips in a thin layer. If you\u2019re using thinner chips, there\u2019s a chance the mixture will be a little dry, so we recommend adding in batches and holding back some chips if there doesn\u2019t seem to be enough sauce.",
        "Remove skillet from heat and tuck remaining chips into top.",
        "Now add all the garnishes: Top chilaquiles with remaining chicken and corn, then scatter sliced scallions over. Dot top with more pickled jalapen\u0303os. Cut 1 avocado in half, remove pit, and scoop flesh out of skins with a spoon. Cut into slices and arrange over top of skillet. Dollop with sour cream mixture and top with remaining cilantro sprigs.",
        "Serve with lime wedges alongside."
    ],
    "title": "One-Skillet Corn Chilaquiles",
    "url": "https://www.bonappetit.com/recipe/one-skillet-corn-chilaquiles"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-MCP22-30HN-MultiClad-Stainless-12-Inch/dp/B009P485FY?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B009P485FY?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Fish-Turner/dp/B000YDO2MK?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000YDO2MK?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Whisk",
        "Small Bowl",
        "Large Skillet",
        "Fish Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb836ade933a34c9d8d/3:2/w_940,c_limit/basically-salmon-teriyaki.jpg",
    "ingredients": [
        {
            "name": "sake",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "mirin (sweet japanese rice wine)",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "soy sauce",
            "quantity": "1/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "vegetable oil, plus more if needed",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "skin-on, boneless salmon fillets (about 1 inch thick)",
            "quantity": "4",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Combine 1/2 cup sake, 1/4 cup mirin, and 1/4 cup soy sauce in a small bowl; set teriyaki sauce aside.",
        "Heat 1 Tbsp. oil in a large skillet over medium-high. Season 4 salmon fillets lightly with salt.",
        "Working in batches and adding more oil if needed, cook, skin side down, until skin is brown and crisp, about 4 minutes. Turn and cook until other side is just beginning to brown, about 2 minutes. Transfer to a plate.",
        "Pour off fat in skillet. Bring teriyaki sauce to a boil in skillet over medium heat. Cook until reduced by two-thirds, about 4 minutes.",
        "Add salmon, skin side up, and cook, spooning sauce over, until sauce is syrupy and salmon is just cooked through, about 2 minutes.",
        "Transfer to platter and serve with white rice, noodles, or a simple salad."
    ],
    "title": "Salmon Teriyaki",
    "url": "https://www.bonappetit.com/recipe/salmon-teriyaki"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-2154200-Pepper-Grinder-Clear/dp/B00F5MJCTS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00F5MJCTS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "http://www.chicagometallicbakeware.com/bakeware-25/product-series/commerical-ii/cookie-jelly-roll-pans/set-of-2-small-jelly-roll-pans.html",
        "https://www.amazon.com/Bounty-Select-Size-Paper-Towels/dp/B01BSUIA2A?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01BSUIA2A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-11-Inch-Balloon-Whisk/dp/B00004OCNS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004OCNS?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Chef's Knife",
        "Cutting Board",
        "Small Rimmed Baking Sheet",
        "Paper Towels",
        "Tongs",
        "Whisk",
        "Medium Bowl"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb588eba1255e6ea7d1/3:2/w_940,c_limit/basically-blt-salad.jpg",
    "ingredients": [
        {
            "name": "slices bacon",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "piece rustic country-style bread",
            "quantity": "1",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "mayonnaise",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "fresh lemon juice",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt, freshly ground pepper",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "olive oil",
            "quantity": "1/3",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "Pinch of sugar",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "1/4 bunch or a very small handful of chives",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "romaine hearts",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "ripe juicy tomatoes, cut into bite-size wedges or slices",
            "quantity": "1",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "large avocado, sliced",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Preheat oven to 350\u00b0. Arrange 8 bacon slices side by side on a small rimmed baking sheet, overlapping slightly if necessary.",
        "Bake bacon, removing sheet from oven and turning slices with tongs halfway through, until slices are deep reddish brown with crispy edges, 25-35 minutes. Increase oven temperature to 425\u00b0.",
        "While bacon is cooking, cut crusts off bread; discard. Tear bread into 1\" pieces. Don\u2019t worry if the pieces end up in different shapes and sizes. Irregular is good! You should have about 2 lightly packed cups.",
        "Transfer bacon to a paper towel-lined plate and blot with more paper towels to absorb excess fat. The bacon will crisp as it cools. Reserve baking sheet with bacon fat.",
        "Scatter bread on reserved baking sheet and toss with tongs until bread is evenly coated in fat.",
        "Bake bread, tossing once halfway through, until pieces are golden all over and crisp, 10-15 minutes. Let cool.",
        "Meanwhile, whisk 1/3 cup mayonnaise and 2 Tbsp. lemon juice in a medium bowl. Season with salt and lots of pepper, then slowly stream in 1/3 cup oil, whisking until dressing is thick and emulsified. Whisk in a pinch of sugar; set aside.",
        "Thinly slice enough chives to measure 2 Tbsp. and whisk into bowl with dressing.",
        "Slice remaining chives into 1\" pieces; set aside.",
        "Halve 2 romaine hearts lengthwise, trim off root ends, then cut each half in half again crosswise. Arrange lettuce pieces on a large platter or divide among individual plates. Season with salt and pepper and drizzle about a third of the dressing over top.",
        "Arrange tomatoes, avocado, and croutons over and around lettuce pieces.",
        "Break up cooled bacon with your hands into rough 1\" pieces and scatter over salad. Drizzle with remaining dressing.",
        "Sprinkle with reserved chives and serve."
    ],
    "title": "BLT Salad",
    "url": "https://www.bonappetit.com/recipe/blt-salad"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Cuisinart-419-14-Contour-Stainless-Saucepan/dp/B0030EG30O?tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Reynolds-Wrap-Aluminum-Foil-Square/dp/B00UNT0Y2M?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00UNT0Y2M?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Edlund-4412-HDL-inch-Heavy/dp/B002P64OMC?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B002P64OMC?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Rimmed Baking Sheet",
        "Small Saucepan",
        "Large Bowl",
        "Aluminum Foil",
        "Tongs",
        "Chef's Knife",
        "Cutting Board"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cba3d923e31d08fed1b/3:2/w_940,c_limit/basically-crispy-peppercorn-wings.jpg",
    "ingredients": [
        {
            "name": "black peppercorns",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "diamond crystal or 1 tablespoon morton kosher salt",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ground coriander",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "ground cumin",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "garam masala or chinese five-spice powder",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "baking soda",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "sugar",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "chicken wings, flats and drumettes separated, patted dry with paper towels",
            "quantity": "3",
            "type": "unit",
            "unit": "pound"
        },
        {
            "name": "olive oil",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "scallions",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "lime",
            "quantity": 1,
            "type": "unitless"
        }
    ],
    "steps": [
        "Place peppercorns in the center of a large rimmed baking sheet. Crush peppercorns with bottom of a saucepan, working a few peppercorns at a time and pressing down firmly until you can hear and feel the crunch of peppercorns breaking apart. Transfer to a large bowl.",
        "Cover sheet you just used with a double layer of foil; set aside.",
        "Add salt, coriander, cumin, garam masala, baking soda, and sugar to bowl with peppercorns and mix with your hands to make sure all spices are intermingled.",
        "Add chicken wings and oil and toss with your hands until wings are evenly coated.",
        "Arrange wings on prepared sheet, spacing evenly apart. Chill, uncovered, at least 1 hour and up to 1 day.",
        "Remove wings from refrigerator and let sit until they\u2019ve lost the chill of the fridge and are as close to room temperature as possible, at least 15 minutes. Meanwhile, place racks in the top third and center of oven; preheat to 425\u00b0. You\u2019re going to bake and then broil the wings so they get extra crispy. If your broiler is in a drawer beneath your oven, ignore the part about the top rack.",
        "Bake wings on center rack, removing sheet halfway through and turning wings over with a pair of tongs, until browned and crisp in spots and cooked through, 30-40 minutes.",
        "Remove baking sheet from oven and turn on broiler; let heat at least 5 minutes. Broil wings on top rack (or in drawer) until browned and crisp all over and nubs on ends of drumettes are just a little charred, 3-4 minutes. Remove from oven and turn wings again.",
        "Broil until second side looks as crisp and lightly charred as the first, about 3 minutes. Let rest about 5 minutes.",
        "While the wings are resting, thinly slice scallions and cut lime into wedges.",
        "Arrange wings on a platter and scatter scallions over. Serve with lime wedges alongside."
    ],
    "title": "Crispy Peppercorn Chicken Wings",
    "url": "https://www.bonappetit.com/recipe/crispy-peppercorn-chicken-wings"
},{
    "equipment_links": [
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/Microplane-40020-Classic-Zester-Grater/dp/B00004S7V8?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00004S7V8?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/OXO-Good-Grips-Freezer-Baking/dp/B019FHD46A?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B019FHD46A?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Wilton-570-1121-3-Piece-Silicone-Spatula/dp/B000M8YMEU/ref=sr_1_4?s=home-garden&ie=UTF8&qid=1501117083&sr=1-4&keywords=spatula&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Cups",
        "Measuring Spoons",
        "Microplane",
        "Medium Bowl",
        "Fork",
        "Chef's Knife",
        "Cutting Board",
        "8x8\" Baking Dish",
        "Spatula"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb43d923e31d08fed15/3:2/w_940,c_limit/basically-blackberry-pistachio-crumble.jpg",
    "ingredients": [
        {
            "name": "lemon",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "all-purpose flour",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "light brown sugar",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "ground cinnamon",
            "quantity": "11/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "kosher salt, plus more",
            "quantity": "1/2",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "(1 stick) unsalted butter, melted, cooled",
            "quantity": "1/2",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "pistachios or sliced almonds",
            "quantity": "3/4",
            "type": "unit",
            "unit": "cup"
        },
        {
            "name": "blackberries (from 2 6-ounce containers), halved crosswise if large",
            "quantity": "12",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "cornstarch",
            "quantity": "1",
            "type": "unit",
            "unit": "tablespoon"
        }
    ],
    "steps": [
        "Place a rack in center of oven; preheat to 350\u00b0. Using a microplane, finely grate zest of 1 lemon into a medium bowl (keep lemon for juicing later).",
        "Add 1 cup flour, 1 cup brown sugar, 11/2 tsp. cinnamon, and 1/2 tsp. salt to bowl with zest and toss with your hands to combine and break up any clumps of sugar.",
        "Slowly drizzle 1/2 cup butter into bowl, stirring with a fork, until no dry spots remain and mixture holds together in pebble-size pieces.",
        "If you\u2019re using pistachios, chop on cutting board. It\u2019s okay to have some larger and some finer pieces, but try not to leave any nuts whole. Add to bowl with flour mixture and toss to distribute. If you\u2019re using sliced almonds, no need to chop first-just toss them in.",
        "Press half of pistachio crumb mixture (about 11/2 cups) evenly across bottom of 8x8\" pan. Flatten into pan by pressing very firmly with your fingers and palm. This compact layer will bake into a firm, sturdy bottom crust, and it will be much easier to slice into neat bars. Save remaining crumb mixture for later.",
        "Bake until nuts are golden brown and crust is visibly darkened in color, 15-20 minutes. Let cool about 10 minutes. This step firms the crust further, and dries it out, so fruit topping won\u2019t make it soggy.",
        "Meanwhile, cut zested lemon in half. Working over another medium bowl, insert fork into lemon flesh and twist it to extract juice from one half (fish out and discard any seeds). You should have about 2 Tbsp. juice. Add 12 oz. blackberries, 1 Tbsp. cornstarch, and a pinch of salt; stir with a rubber spatula to coat berries.",
        "Scrape blackberry mixture over slightly cooled crust and use spatula to distribute fruit into an even layer.",
        "Using your hands, sprinkle reserved crumb mixture over berries in an even layer.",
        "Bake bars until top of crumble is browned, nuts are toasted, and juices from berries are bubbling just a bit around the edges, 25-30 minutes.",
        "Let cool completely before serving. Cut into bars or squares."
    ],
    "title": "Blackberry-Pistachio Crumble Bars",
    "url": "https://www.bonappetit.com/recipe/blackberry-pistachio-crumble-bars"
},{
    "equipment_links": [
        "https://www.amazon.com/MIU-COLOR%C2%AE-Endurance-Measuring-Spoon/dp/B00F5JHQR6/ref=sr_1_3?s=kitchen&ie=UTF8&qid=1468867940&sr=1-3&keywords=endurance+measuring+spoons&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Good-Grips-Stainless-Measuring/dp/B00L9WJZW2?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00L9WJZW2?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B000G0KJG4?psc=1&SubscriptionId=AKIAJM3KU4TPIXE245JA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B000G0KJG4?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/OXO-Stainless-Flexible-Turner-Medium/dp/B00004OCL8?tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Prepware-3-Piece-Glass-Mixing/dp/B00LGLHUA0?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LGLHUA0?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "https://www.amazon.com/Pyrex-Basics-Quart-Oblong-Baking/dp/B00PI0G470?tag=bonappfig-20"
    ],
    "equipment_names": [
        "Measuring Spoons",
        "Measuring Cups",
        "Chef's Knife",
        "Cutting Board",
        "Rimmed Baking Sheet",
        "Flexible Metal Spatula",
        "Medium Bowl",
        "Fork",
        "2-Quart Baking Dish"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5b919cb07995142c3c3abc51/3:2/w_940,c_limit/basically-zucchini-eggplant-lasagna.jpg",
    "ingredients": [
        {
            "name": "large globe eggplant",
            "quantity": 1,
            "type": "unitless"
        },
        {
            "name": "large zucchini and/or summer squash",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "cherry and/or grape tomatoes",
            "quantity": "24",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "garlic cloves, unpeeled",
            "quantity": 8,
            "type": "unitless"
        },
        {
            "name": "olive oil, plus more",
            "quantity": "5",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "fresh ricotta (about 1 cup)",
            "quantity": "8",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "crushed red pepper flakes",
            "quantity": "3/4",
            "type": "unit",
            "unit": "teaspoon"
        },
        {
            "name": "salted low-moisture mozzarella, grated, divided",
            "quantity": "8",
            "type": "unit",
            "unit": "ounce"
        },
        {
            "name": "basil leaves, divided",
            "quantity": "1",
            "type": "unit",
            "unit": "cup"
        }
    ],
    "steps": [
        "Place racks in upper and lower thirds of oven; preheat to 450\u00b0. Cut off stem end of 1 globe eggplant, then shave a thin slice off of fattest part of bulbous end. Rest eggplant on newly cut side so it doesn\u2019t roll around your board.",
        "Cut eggplant crosswise into 1/2\"-thick slices.",
        "Repeat same process with 2 zucchini and/or summer squash, trimming stem end, shaving side and resting on flat surface, and slicing crosswise 1/2\" thick.",
        "Arrange eggplant slices in a single layer on a rimmed baking sheet, then fit as many pieces of zucchini as possible on same baking sheet, tucking into spaces around eggplant.",
        "Place remaining zucchini slices on one half of another rimmed baking sheet, arranging as close together as possible and in a single layer.",
        "On empty side of baking sheet, arrange 24 oz. tomatoes and 8 garlic cloves. Drizzle 1 Tbsp. oil over tomatoes and garlic and toss with your hands to coat.",
        "Using your hands, smear 2 Tbsp. oil over exposed sides of eggplant and zucchini slices. Eggplant in particular acts like a sponge and will soak up oil in an instant. Since all you want is a thin, even coating, it\u2019s better to smear them with oil rather than to drizzle.",
        "Still using your hands, turn eggplant and squash slices over and smear other side with 2 Tbsp. oil. Season all vegetables on both baking sheets with a couple of 4-finger pinches of salt.",
        "Place sheet with eggplant on lower rack and sheet with tomatoes on upper rack and roast until eggplant is deeply browned on the underside and tomatoes are lightly blistered, 15-25 minutes.",
        "Remove both baking sheets from oven. You\u2019ll notice that the vegetables will have shrunk quite a bit. On baking sheet with eggplant, slide a flexible metal spatula underneath ALL slices and turn them over. Slide rounds over to one side, then transfer zucchini from sheet with tomatoes onto sheet with eggplant, turning them over in the process. You should end up with tomatoes and garlic on one baking sheet, and eggplant and zucchini on the other.",
        "Let baking sheet with tomatoes cool, but return baking sheet with eggplant and zucchini to lower rack and roast until second side of eggplant is deeply browned, 10-15 minutes. Let sit until cool enough to handle.",
        "Meanwhile, combine 8 oz. ricotta, 3/4 tsp. red pepper flakes, and 6 oz. mozzarella in a medium bowl. Drizzle with oil and mix with a fork to combine; season lightly with salt.",
        "Using a fork, remove garlic cloves from baking sheet and transfer to a cutting board. Press on skins to force out the soft, caramelized cloves; discard skins. Mash cloves to a paste with fork, then stir into ricotta mixture.",
        "Drizzle some oil into a shallow 2-qt. baking dish. Arrange one-third of zucchini and eggplant slices in a single layer. Scatter one-third of blistered tomatoes over, then dollop half of ricotta mixture over tomatoes. Tear one-third of basil leaves and scatter over ricotta.",
        "Repeat layering process with half of remaining eggplant and zucchini, all of remaining ricotta mixture, and half of remaining tomatoes and basil. Top with remaining eggplant, zucchini, and tomatoes.",
        "Sprinkle remaining 2 oz. mozzarella over and bake until mozzarella is melted and browned in spots and liquid around the edges is bubbling, 15-20 minutes.",
        "Let rest 10 minutes, then top with remaining basil.",
        "Drizzle with a little more oil before serving."
    ],
    "title": "Cheesy Zucchini-Eggplant Bake",
    "url": "https://www.bonappetit.com/recipe/cheesy-zucchini-eggplant-bake"
},{
    "equipment_links": [
        "https://www.amazon.com/Victorinox-Swiss-Classic-Chefs-Knife/dp/B0061SWV8Y?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B0061SWV8Y?m=ATVPDKIKX0DER&tag=bonappfig-20",
        "http://www.ikea.com/us/en/catalog/products/70233421/",
        "https://www.amazon.com/Cuisinart-MCP193-18CH-MultiClad-Stainless-Saucepan/dp/B071D87589?tag=bonappfig-20",
        "https://www.amazon.com/OXO-Grips-Wooden-Corner-Scraper/dp/B008H2JLPS?psc=1&SubscriptionId=AKIAJ7IODE3ZIX6FGTPA&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B008H2JLPS?m=ATVPDKIKX0DER&tag=bonappfig-20"
    ],
    "equipment_names": [
        "Chef's Knife",
        "Cutting Board",
        "Large Saucepan",
        "Wooden Spoon"
    ],
    "image_src": "https://assets.bonappetit.com/photos/5982072c7d76f742f49561ca/3:2/w_940,c_limit/basically-caramelized-onions.jpg",
    "ingredients": [
        {
            "name": "large yellow onions, peeled (about 1 pound)",
            "quantity": 2,
            "type": "unitless"
        },
        {
            "name": "unsalted butter",
            "quantity": "2",
            "type": "unit",
            "unit": "tablespoon"
        },
        {
            "name": "Kosher salt",
            "quantity": -1,
            "type": "other"
        },
        {
            "name": "Low-sodium chicken broth or water (for pan; optional)",
            "quantity": -1,
            "type": "other"
        }
    ],
    "steps": [
        "Halve both onions through root end. Using the tip of your knife, cut a V-shaped notch around root to remove it (this will ensure that all slices separate when you cut the onion).",
        "Place 1 onion half on your cutting board so root end is facing you, then thinly slice onion lengthwise, starting at one side and working all the way to the other (so your knife runs through the root halfway through, not starting or ending at the root end). You\u2019re going for slices that are 1/4\"-1/8\" thick.",
        "Repeat same slicing procedure for remaining onion halves. It\u2019s a lot of onion! But it will cook down quite a bit, so it\u2019s best to start with a large quantity.",
        "Heat 2 Tbsp. butter in a large saucepan over medium until melted and sizzling. You can use a skillet to cook the onions, but a pan with high sides will keep the onions from flipping out onto your stove. Using a pan that also has a wide base gives water room to evaporate, allowing the onions to caramelize rather than steam.",
        "Instead of dumping in all of the onions at once, which would fill the pot and make it hard to stir (which would then cause the ones on the bottom to cook faster), start by adding just a couple of large handfuls to the pot. Cook, stirring, until onions are soft and starting to turn translucent, 1-2 minutes. Stir in a few more handfuls of onion and repeat cooking and stirring process until you\u2019ve added all the onions. Season with a pinch of salt.",
        "Reduce heat to medium-low and continue to cook onions, stirring every few minutes to prevent them from sticking and coloring too much in any one place, until blonde-colored, 15-20 minutes. This is the point of doneness for French onion soup! If you feel like onions are getting too brown around the edges or they\u2019re sticking, reduce your heat a bit.",
        "If you\u2019re going for onions that are both softer and more caramelized (say for a patty melt or onion dip), keep cooking, stirring on the regular, until onions are unmistakably golden brown, another 15-20 minutes. Because most of the water has cooked off at this point, there might be some bare spots where the pot could start to burn. If this happens, stir in a splash of broth or water. The liquid will dissolve the cooked-on bits, which the onions will re-absorb.",
        "For extra-dark onions, the kind that make a great burger topping, cook until they start to almost blacken around the edges and go slightly crisp, another 10-15 minutes. This requires constant attention so they don\u2019t burn. No one said caramelized onions were quick!",
        "Let onions cool in the saucepan, then use or transfer to an airtight container and chill. They will keep up to 1 week."
    ],
    "title": "Caramelized Onions",
    "url": "https://www.bonappetit.com/recipe/caramelized-onions"
}]

const config = {
	apiKey: "AIzaSyBh5vN_SwkYpZ7iwX3Auu0_xKVZMmlR8AI",
	authDomain: "grocerease-6e9ee.firebaseapp.com",
	databaseURL: "https://grocerease-6e9ee.firebaseio.com",
	projectId: "grocerease-6e9ee",
	storageBucket: "grocerease-6e9ee.appspot.com",
	messagingSenderId: "719228868931"
};

//firebase.initializeApp(config);

export default class DataBase {
	//database = firebase;

	//to delete a user..
	deleteMe(userId) {
		//firebase.database().ref('users/' + userId).remove();
	}

	//update a user's list
	static updateMe(userId, list) {
		//Add list elements to update array
		const update = new Array();
		for (var i = 0; i < list.length; i++) {
			update[i] = list[i].toSingleString();
		}

		//set it to the list corresponding to userID
		//firebase.database().ref('users/' + userId).set(update);
	}

	static signOut() {
		//firebase.auth().signOut();
	}

	static getFirebaseRecipes(callback) {
		callback(recipes);
	}

	static checkBarcode(barcode, callback) {
		/*
		length = barcode.length
		if (Platform.OS === 'ios') length = length - 1
		if (!isNaN(Number(barcode))) {
			barcodeData = barcode.toString().substring(Platform.OS === 'ios' ? 2 : 1, barcode.length)
			firebase.database().ref('/barcode-upc' + length + '/' + barcodeData + '/').once("value", snapshot => {
				if (snapshot.exists()) {
					alert("You scanned " + snapshot.val().name);
					callback(snapshot.val().name);
				} else {
					alert('barcode does not exist in database');
				}
			})
		} else {
			alert('invalid barcode');
		}
		*/
	}

	static checkIfLoggedIn(loginCallback, logoutCallback) {
		loginCallback("000000")
	}

	static createUserWithEmailAndPassword(email, password, callback) {
		callback("000000")
	}

	static signInWithEmailAndPassword(email, password, callback) {
		callback("000000")
	}

	static createFirebaseInventoryListener(userId, isReceivingChange, callback, secondCallback, stopLoading) {
		stopLoading()
		// firebase.database().ref('/users/' + userId).on('value', (snapshot) => {
		// 	if (isReceivingChange() == true) {
		// 		if (snapshot.exists()) {
		// 			//snapshot.val() is the list we want
		// 			list = snapshot.val()
		// 			//lists it properly
		// 			if (list.length > 0) {
		// 				var ingredientsList = [];
		// 				var ingParams;
		// 				var ing;
		// 				for (var i = 0; i < list.length; i++) {
		// 					ingParams = list[i].split(",");
		// 					ing = new Ingredient(
		// 						ingParams[0],  //name is a string
		// 						parseInt(ingParams[1], 10),  //quantity is an int
		// 						ingParams[2], //unit is a string
		// 						parseInt(ingParams[3], 10),  //calories is an int
		// 						parseInt(ingParams[4], 10), //seving is an int
		// 						ingParams[5], //expiry is a string, unless we decide to make it be an int displaying days until expiry
		// 						parseInt(ingParams[6], 10), //isExpired is an int
		// 						parseInt(ingParams[7], 10), //carbs is an int
		// 						parseInt(ingParams[8], 10), //protein is an int
		// 						parseInt(ingParams[9], 10), //sugar is an int
		// 						parseInt(ingParams[10], 10), //fat is an int
		// 						parseInt(ingParams[11], 10), //sodium is an int
		// 					);
		// 					ingredientsList.push(ing);
		// 				}
		// 			}

		// 			callback(ingredientsList)
		// 		} else {
		// 			callback([])
		// 		}
		// 		stopLoading()
		// 	} else {
		// 		secondCallback()
		// 	}
		// });
	}
}
