const categories = [
    {
      catTitle: "Pizza",
      catImage: require("../assets/images/cat_pizza.png"),
    },{
      catTitle: "Chinese",
      catImage: require("../assets/images/cat_chinese.png"),
    },{
      catTitle: "Icecream",
      catImage: require("../assets/images/cat_icecream.png"),
    },{
      catTitle: "Hamburguer",
      catImage: require("../assets/images/cat_burguer.png"),
    },{
      catTitle: "Mexicana",
      catImage: require("../assets/images/cat_nachos.png"),
    },
  ];

  const restaurants = [
    {
      restTitle: "Buttermilk",
      restInfo: "Southern Kitchen - 5.4km",
      restImage: require("../assets/images/restaurant_1.png"),
      restStars: "4.3",
      restCategory: 'Lanches'
    },{
      restTitle: "Over the Moon",
      restInfo: "Asian - 3.4km",
      restImage: require("../assets/images/restaurant_2.png"),
      restStars: "3.4",
    },{
      restTitle: "Bubbel & Brie",
      restInfo: "Luxury - 7.5km",
      restImage: require("../assets/images/restaurant_3.png"),
      restStars: "4.8",
    },{
      restTitle: "Délice Perlé",
      restInfo: "Sweet - 2.5km",
      restImage: require("../assets/images/restaurant_4.png"),
      restStars: "4.7",
    },{
      restTitle: "Air Cafe",
      restInfo: "Coffee - 4km",
      restImage: require("../assets/images/restaurant_5.png"),
      restStars: "4.2",
    },{
      restTitle: "Nomad Lounge",
      restInfo: "Bar - 2.9km",
      restImage: require("../assets/images/restaurant_6.png"),
      restStars: "3.5",
    },{
      restTitle: "Kalz Brgr",
      restInfo: "Hamburguer - 2km",
      restImage: require("../assets/images/restaurant_7.png"),
      restStars: "4.3",
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