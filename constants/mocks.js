const categories = [
    {
      catKey: 1,
      catTitle: "Pizza",
      catImage: require("../assets/images/cat_pizza.png"),
    },{
      catKey: 2,
      catTitle: "Chinesa",
      catImage: require("../assets/images/cat_chinese.png"),
    },{
      catKey: 3,
      catTitle: "Sorvete",
      catImage: require("../assets/images/cat_icecream.png"),
    },{
      catKey: 4,
      catTitle: "Lanches",
      catImage: require("../assets/images/cat_burguer.png"),
    },{
      catKey: 5,
      catTitle: "Mexicana",
      catImage: require("../assets/images/cat_nachos.png"),
    },
  ];

  const restaurants = [
    {
      restKey: 1,
      restTitle: "Buttermilk",
      restInfo: "Lanches • 5.4km",
      restImage: require("../assets/images/restaurant_1.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 2,
      restTitle: "Over the Moon",
      restInfo: "Lanches • 3.4km",
      restImage: require("../assets/images/restaurant_2.png"),
      restStars: "3.4",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 7,
      restTitle: "Kalz Brgr",
      restInfo: "Lanches • 2km",
      restImage: require("../assets/images/restaurant_7.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 3,
      restTitle: "Bubbel & Brie",
      restInfo: "Pizza • 7.5km",
      restImage: require("../assets/images/restaurant_3.png"),
      restStars: "4.8",
      restCategory: "Pizza",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 4,
      restTitle: "Délice Perlé",
      restInfo: "Sorvete • 2.5km",
      restImage: require("../assets/images/restaurant_4.png"),
      restStars: "4.7",
      restCategory: "Sorvete",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 5,
      restTitle: "Air Cafe",
      restInfo: "Mexicana • 4km",
      restImage: require("../assets/images/restaurant_5.png"),
      restStars: "4.2",
      restCategory: "Mexicana",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 6,
      restTitle: "Nomad Lounge",
      restInfo: "Chinesa • 2.9km",
      restImage: require("../assets/images/restaurant_6.png"),
      restStars: "3.5",
      restCategory: "Chinesa",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 8,
      restTitle: "Buttermilk",
      restInfo: "Lanches • 5.4km",
      restImage: require("../assets/images/restaurant_1.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 9,
      restTitle: "Over the Moon",
      restInfo: "Lanches • 3.4km",
      restImage: require("../assets/images/restaurant_2.png"),
      restStars: "3.4",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 10,
      restTitle: "Kalz Brgr",
      restInfo: "Lanches • 2km",
      restImage: require("../assets/images/restaurant_7.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 11,
      restTitle: "Bubbel & Brie",
      restInfo: "Pizza • 7.5km",
      restImage: require("../assets/images/restaurant_3.png"),
      restStars: "4.8",
      restCategory: "Pizza",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 12,
      restTitle: "Délice Perlé",
      restInfo: "Sorvete • 2.5km",
      restImage: require("../assets/images/restaurant_4.png"),
      restStars: "4.7",
      restCategory: "Sorvete",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 13,
      restTitle: "Air Cafe",
      restInfo: "Mexicana • 4km",
      restImage: require("../assets/images/restaurant_5.png"),
      restStars: "4.2",
      restCategory: "Mexicana",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 14,
      restTitle: "Nomad Lounge",
      restInfo: "Chinesa • 2.9km",
      restImage: require("../assets/images/restaurant_6.png"),
      restStars: "3.5",
      restCategory: "Chinesa",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 15,
      restTitle: "Buttermilk",
      restInfo: "Lanches • 5.4km",
      restImage: require("../assets/images/restaurant_1.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 16,
      restTitle: "Over the Moon",
      restInfo: "Lanches • 3.4km",
      restImage: require("../assets/images/restaurant_2.png"),
      restStars: "3.4",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 17,
      restTitle: "Kalz Brgr",
      restInfo: "Lanches • 2km",
      restImage: require("../assets/images/restaurant_7.png"),
      restStars: "4.3",
      restCategory: "Lanches",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 18,
      restTitle: "Bubbel & Brie",
      restInfo: "Pizza • 7.5km",
      restImage: require("../assets/images/restaurant_3.png"),
      restStars: "4.8",
      restCategory: "Pizza",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 19,
      restTitle: "Délice Perlé",
      restInfo: "Sorvete • 2.5km",
      restImage: require("../assets/images/restaurant_4.png"),
      restStars: "4.7",
      restCategory: "Sorvete",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 20,
      restTitle: "Air Cafe",
      restInfo: "Mexicana • 4km",
      restImage: require("../assets/images/restaurant_5.png"),
      restStars: "4.2",
      restCategory: "Mexicana",
      restAddr: "Rua da Batata doce, 123"
    },{
      restKey: 21,
      restTitle: "Nomad Lounge",
      restInfo: "Chinesa • 2.9km",
      restImage: require("../assets/images/restaurant_6.png"),
      restStars: "3.5",
      restCategory: "Chinesa",
      restAddr: "Rua da Batata doce, 123"
    },
  ];
  
  const products = [
    {
      id: 1,
      name: "16 Best Plants That Thrive In Your Bedroom",
      description:
        "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
      tags: ["Interior", "27 m²", "Ideas"],
      images: [
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png"),
        // showing only 3 images, show +6 for the rest
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png"),
        require("../assets/images/plants_1.png"),
        require("../assets/images/plants_2.png"),
        require("../assets/images/plants_3.png")
      ]
    }
  ];
  
  const explore = [
    // images
    require("../assets/images/explore_1.png"),
    require("../assets/images/explore_2.png"),
    require("../assets/images/explore_3.png"),
    require("../assets/images/explore_4.png"),
    require("../assets/images/explore_5.png"),
    require("../assets/images/explore_6.png")
  ];
  
  const profile = {
    username: "react-ui-kit",
    location: "Europe",
    email: "contact@react-ui-kit.com",
    avatar: require("../assets/images/avatar.png"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  };
  
  export { categories, explore, products, profile, restaurants };