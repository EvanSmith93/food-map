import { Pin } from "./WorldMap";

export const pinData: Pin[] = [
  {
    id: "1",
    position: [32.2986, 35.992251],
    data: {
      title: "Hummus",
      year: "~1250",
      location: "Middle East",
      ingredients: [
        "chickpeas",
        "vinegar",
        "oil",
        "tahineh",
        "pepper",
        "aṭrāf ṭīb",
        "mint",
        "parsley",
        "refuse of dry thyme",
        "walnuts",
        "hazelnuts",
        "almonds",
        "pistachios",
        "Ceylon cinnamon",
        "toasted caraway",
        "dry coriander",
        "salt",
        "salted lemons",
        "olives",
      ],
      content: {
        recipe: `Take chickpeas and pound them fine after boiling them. Then take
        vinegar, oil, tahineh, pepper, aṭrāf ṭīb, mint, parsley, the refuse of
        dry thyme, walnuts, hazelnuts, almonds, pistachios, Ceylon cinnamon,
        toasted caraway, dry coriander, salt, salted lemons and olives. Stir
        it and roll it out flat and leave it overnight and take it up.`,
        description: `This recipe comes from a roughly 13th century Islamic cookbook for ḥummuṣ kasā, also known as crushed chickpeas.
        It is unclear where in the Middle East this cookbook was written.
        Hummus was eaten in both Syria and Egypt in the medieval Islamic age, however it's unclear where in the middle east it began.
        This recipe includes chickpeas, tahineh (tahini), olives, oil, and salt, which are the basics of many modern hummus recipes.
        However, it also includes many nuts and spices that are uncommon in modern hummus.
        Unlike most other recipes on this site, hummus lost ingredients over time, rather than gaining them.`,
        sources: [
          {
            title: "The Hummus Wars",
            url: "https://www.jstor.org/stable/10.1525/gfc.2012.12.1.34",
          },
          {
            title: "Modern Hummus Recipe",
            url: "https://www.themediterraneandish.com/how-to-make-hummus/",
          },
        ],
      },
    },
  },
  {
    id: "2",
    position: [35.6895, 139.6917],
    data: {
      title: "Udon noodles",
      year: "1643",
      location: "Japan",
      ingredients: [
        "flour",
        "salt",
        "water",
        "ninuki",
        "taremiso",
        "black pepper",
        "ume",
      ],
      content: {
        recipe: `Beat the flour as much as is necessary. For salt seasoning, put 1 shō
        of salt in 3 shō of water in summer, and 1 shō of salt in 5 shō of
        water in winter. Using this saltwater, mix in to season just right.
        Affix the dough on a millstone, and carefully and without vibration
        roll it up to roughly ball shaped and put it in a box. Wet a cloth,
        cover, and put it in a place where the wind doesn’t blow. Take out one
        at a time and beat it. Boil and season to taste. The broth is ninuki,
        or possibly taremiso. Garnish with black pepper and ume.`,
        description: `This recipe for udon noodles comes from an early Japanese recipe book.
        Udon noodles are thick and chewy and have spread across the world.
        For context, 1 shō is roughly 0.5 gallons.
        This recipe differs from more modern udon noodle recipes which typically include corn or potato starch to prevent sticking.
        The instructions do not state what Ninuki is, which is not a common ingredient today.
        Otherwise, these Udon noodles are similar to modern noodles in many ways.`,
        sources: [
          {
            title: "Ryori Monogatari",
            url: "https://sengokudaimyo.com/table-of-contents",
          },
          {
            title: "Homemade Udon Noodles",
            url: "https://www.justonecookbook.com/udon-noodles/",
          },
        ],
      },
    },
  },
  {
    id: "3",
    position: [41.798333, 12.710833],
    data: {
      title: "Kneaded Bread",
      year: "160 BCE",
      location: "Italy",
      ingredients: ["meal", "water"],
      content: {
        recipe: `Wash your hands and a bowl thoroughly. Pour meal into the bowl, add
        water gradually, and knead thoroughly. When it is well kneaded, roll
        out and bake under a crock.`,
        description: `This is the oldest recipe on this site. 
        It comes from an ancient Roman text that covers various topics surrounding agriculture.
        This recipe is very simple, however it shows how prevalent bread has been throughout history.
        It is unclear what "meal" refers to, however it likely refers to ground grain such as wheat or barley.
        Most modern bread recipes include other ingredients such as salt, sugar, or yeast.
        However, the basics of modern recipes involve this same basic process of kneading water with some type of grain meal.`,
        sources: [
          {
            title: "De Agricultura",
            url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Cato/De_Agricultura/home.html",
          },
          {
            title: "Kneaded Bread Recipe",
            url: "https://kitchenjoyblog.com/homemade-dutch-oven-bread-kneaded-knead-methods/",
          },
        ],
      },
    },
  },
  {
    id: "4",
    position: [35.52965, -79.137941],
    data: {
      title: "Kanuchi",
      year: "1950",
      location: "North Carolina",
      ingredients: ["hickory nuts", "scalybarks", "water", "bread", "dumpling"],
      content: {
        recipe: `Gather hickory nuts or scalybarks, dry on a rack before the fire. When
          the nuts are dry crack them by using a large flat rock placed in a
          flat basket lined temporarily with a cloth, use a smaller rock to
          pound the nuts when placed on the larger rock. When the nuts are all
          cracked sieve them through a sieve basket. Place the kernels and small
          hulls that passed through the sieve in the corn beater and pound until
          the substance can be made into balls. Roll this into balls until ready
          for use. These balls will keep fresh for several days if the weather
          is not too warm. When ready for Hickory Nut Soup place a ball or more
          in a vessel that will hold water, pour boiling water over the balls
          while stirring constantly. If this is made into a thick soup it may be
          served with any type bread or dumpling. If it is made into a thin soup
          it may be used as a drink. As soon as enough soup has been poured off
          to leave a very thick mixture more water may be added. Do not drink
          the very last of the mixture because that is where the little bits of
          hulls are.`,
        description: `Kanuchi, often known as hickory nut soup, is a traditional Cherokee dish. 
        It was difficult to find a contemporary recipe book from a Native American tribe because most did not have a written tradition. 
        This recipe came from a book written in 1950 that interviewed Cherokee in North Carolina about their traditional family recipes in an effort to preserve the recipes.
        Because of how recently this recipe was recorded and how unknown the food is by most of the world, it has not evolved too much.
        Some more modern recipes use pecans instead of hickory nuts as hickory nuts are less commonly sold.
        They also often include sweet potatoes, which this variant doesn't mention.`,
        sources: [
          {
            title: "Cherokee Cooklore",
            url: "https://archive.org/details/CherokeeCooklore/mode/2up",
          },
          {
            title: "Kanuchi (Cherokee Pureed Nut Soup)",
            url: "https://www.seriouseats.com/kanuchi-cherokee-pureed-nut-soup",
          },
        ],
      },
    },
  },
  {
    id: "5",
    position: [45.800666, 9.090792],
    data: {
      title: "Almond Milk Rice",
      year: "1470",
      location: "Northern Italy",
      ingredients: ["almonds", "rice", "water", "refined sugar"],
      content: {
        recipe: `For ten portions, use one pound of almonds and clean them well so that
          they are white. Then take one pound of rice, and wash it two or three
          times with lukewarm water, and boil it with some clean water until it
          is well cooked. Then you drain it and place it out to dry. Then mash
          the almonds well, wetting them with some fresh water every now and
          then, so that they won’t get too oily; then cover them with water and
          pass them through a masher. Now boil this milk in a casserole with one
          pound of refined sugar. And when it starts to boil add the rice and
          move the casserole over embers, far away from the fire, stirring
          continuously with the spoon to prevent burning. It should boil for
          about half a hour.`,
        description: `This recipe came from an Italian recipe book known as Libro de arte coquinaria, which translates to The art of Cooking.
        This book contained several recipes that used almond milk and one with hemp seed milk.
        This shows that alternative milks have been used in cooking for hundreds of years, even with the access of traditional dairy milks.
        This recipe is similar to modern recipes, however it doesn't contain spices like cinnamon or any other toppings such as nuts or berries.`,
        sources: [
          {
            title: "Libro de Arte coquinaria (English Translation)",
            url: "https://shainer.github.io/downloads/libro-de-arte-coquinaria-english-translation.pdf",
          },
          {
            title: "Almond Milk Rice Pudding",
            url: "https://feelgoodfoodie.net/recipe/almond-milk-rice-pudding/",
          },
        ],
      },
    },
  },
  {
    id: "6",
    position: [8.378948, -78.902336],
    data: {
      title: "Guacamole",
      year: "1697",
      location: "Panama Bay",
      ingredients: [
        "avocado",
        "sugar",
        "lime-juice",
        "salt",
        "roasted plantain",
      ],
      content: {
        recipe: `This fruit has no taste of itself, and therefore it is usually mixed
          with sugar and lime-juice and beaten together in a plate; and this is
          an excellent dish. The ordinary way is to eat it with a little salt
          and a roasted plantain; and thus a man that's hungry may make a good
          meal of it.`,
        description: `This recipe (or rather a combination of two slightly different recipes) came from William Dampier.
        Dampier was an English explorer.
        He recorded information about how people in the Panama Bay used avocados, which became the first guacamole recipe in English.
        The standard lime used in guacamole originated in Asia.
        It was brought over to Central America by the Spanish. 
        It later became a staple in guacamole.
        While it does contain lime juice, this recipe doesn't contain onion, peppers, or tomato, which are all common in modern guacamole.
        In addition, the recipe suggests mixing sugar with avocado, which is not used in today's guacamole.`,
        sources: [
          {
            title: "A New Voyage Round the World",
            url: "https://gutenberg.net.au/ebooks05/0500461h.html",
          },
          {
            title: "Best Ever Guacamole",
            url: "https://downshiftology.com/recipes/best-ever-guacamole/",
          },
          {
            title: "Citrus Aurantifolia Swingle (Key Lime)",
            url: "https://www.hort.purdue.edu/newcrop/morton/mexican_lime.html",
          },
        ],
      },
    },
  },
  {
    id: "7",
    position: [9.034475, 7.481819],
    data: {
      title: "Groundnut (peanut) Soup",
      year: "1910",
      location: "Nigeria",
      ingredients: ["stock", "salt", "ground nut", "pepper", "fried bread"],
      content: {
        recipe: `1 pint of stock. 2 teaspoon salt. 1 teacup ground nut. pinch pepper.
          Any stock from fowl or button broth or beef soup or even water left
          from vegetable soup can be used for a ground nut soup, or some stock
          made quickly with Lemeo or Maggi. Roast and peel the ground nuts
          and pound them to & paste in a native mortar if you have no proper
          kitchen one, mix them with a teacup of water. This makes a paste that
          you mix with the hot stock and let it boil for a quarter of an hour.
          Serve with little squares of fried bread.`,
        description: `This recipe comes from a 1910 book written by two Europeans about West African food.
        I searched extensively for a recipe that would be more historically accurate.
        However, this was the closest one I could find.
        Most of the records I found were from Europeans commenting on West African food, rather than from West Africans directly.
        Peanuts (also known as groundnuts) are originally from South America, likely Bolivia.
        At some point, the Spanish brought peanuts to various places, including West Africa.
        From there, peanuts became a staple in West African cooking, including in soup.
        Places in South America, as well as the US south developed their own versions of peanut soup.`,
        sources: [
          {
            title: "Practical West African Cookery",
            url: "https://archive.org/details/b28132762/mode/2up",
          },
          {
            title: "Southern Peanut Soup Recipe",
            url: "https://www.thespruceeats.com/peanut-soup-recipe-3061085",
          },
          {
            title: "Plant of the Month: Peanut",
            url: "https://daily.jstor.org/plant-of-the-month-peanut/",
          },
        ],
      },
    },
  },
  {
    id: "8",
    position: [53.111003, -7.625578],
    data: {
      title: "Potato Pie",
      year: "1700",
      location: "Ireland",
      ingredients: [
        "potatoes",
        "butter",
        "rose water",
        "sugar",
        "cinamon",
        "salt",
        "egg yolks",
        "candied oring",
        "citron",
        "navgis",
        "white wine",
        "egg whites",
        "hard sugar",
      ],
      content: {
        recipe: `Take 2 dozen of potatoes boyle them till they will peele, then slit
          them, being peeled in the middle, then raise your pie, and take 2
          pound of butter, and wash it in rose water, and worke it in your
          hands, then lay it in a thin cake all over the bottom of your pie,
          then season your potatoes, with half a pound of fine shugar, 2
          spoonfulls of cinamon, a little sault place in your pie not to close
          for you must put between them, a pound a half of yolks of eggs boyled
          hard and cut in halves, then take 2 ounces of candied oring 2 ounces
          citron sliced very thin, and stick them in the potatoes, then lay a
          pound of sweet butter in the same maner as before all over the
          potatoes, close it up and bake it in a gentle oven half an hour before
          it is baked, draw it and putt in this Caudle, half a pint of navgis,
          half a pint of white wine, when it boyles take it from the fire and
          have a dozen yolks of eggs, and 6 whites ready beaten, stir them in,
          putting there to half a pound of butter & a quarter of a pound of
          shugar stirring them together they bee thick then putt it into the pie
          and set it in the oven tother half hour and scrap hard shugar over it
          and so serve it.`,
        description: `This is an Irish recipe for a potato pie from a cookbook from 1700.
        Overtime, potato pies declined in popularity, making potato puddings more popular.
        In addition, the recipes used increasingly streamlined ingredients, opting to remove ingredients like rose water and candied oring (orange).
        Modern versions also include ingredients like bacon and chives mixed in with the potatoes.`,
        sources: [
          {
            title: "Food and culinary cultures in pre-Famine Ireland",
            url: "https://www.jstor.org/stable/10.3318/priac.2015.115.10",
          },
          {
            title: "Irish Potato Pie",
            url: "https://www.aspicyperspective.com/irish-potato-pie/",
          },
        ],
      },
    },
  },
];
