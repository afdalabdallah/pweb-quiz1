const foodArr = [
  {
    name: "Keumamah",
    img: "../assets/img/keumamah.jpg",
    desc: "Keumamah is one of the traditional Acehnese cuisines made from fish raw materials, namely tuna and skipjack tuna. Keumamah is also known as wooden fish because it is hard like wood. This fish is preserved by several manufacturing processes. Starting from fish cleaning, boiling, drying and storage.",
  },
  {
    name: "Kuah pliek-u",
    img: "../assets/img/pliek-u.jpg",
    desc: "Pliek u soup is a traditional food that is very typical of the Aceh region. At first glance, this food is almost similar to curry, except that the contents are a mixture of vegetables and the sauce is made of special ingredients. Pliek u sauce is one of the traditional foods that is quite famous in Aceh, especially in the east coast of Aceh. Besides being consumed daily, pliek u soup is also often served on certain occasions and is one of the special menus favored by the local community. Pliek u sauce has been a favorite food of the Acehnese people since ancient times. The name pliek u sauce is taken from one of the basic ingredients in making this dish, namely pliek uor better known as patarana. Pliek u itself is a coconut residue whose oil has been squeezed out. In rural Acehnese society, this coconut oil is usually used as cooking oil called minyeuk reutik . While the rest or dregs are dried and made into pliek u . Pliek u is then used by the community as the basic seasoning for pliek u sauce .",
  },
  {
    name: "Mi Aceh",
    img: "../assets/img/mi-aceh.jpg",
    desc: "Mi aceh is a spicy noodle dish typical of Aceh in Indonesia. Thick yellow noodles with sliced ​​beef, mutton or seafood served in a savory and spicy curry-type soup. Mi aceh is usually topped with fried onions and served with emping, sliced ​​shallots, cucumber, and lime.",
  },
  {
    name: "Mi Caluk",
    img: "../assets/img/Mie-Caluk.jpg",
    desc: "Mi caluk It is a noodle dish served with a splash of thick spicy sauce made from a mixture of tomato, chili pepper or chili sauce, coconut milk, ground peanuts, spiced with shallot, garlic, lemongrass and citrus leaf, and served with pieces of vegetables, sliced cucumber and krupuk. The presentation of mi caluk is slightly similar to spaghetti. Each serving of mi caluk is not large, so it is more precisely categorised as a snack. Thus, sellers of mi caluk are often found in makeshift stalls, and do not have stalls in a food court as is usual for food and drink stalls in Aceh.",
  },
  {
    name: "Sate Matang",
    img: "../assets/img/sate-matang.jpg",
    desc: "Sate Matang is a skewer of meat in the form of satay in the province of Aceh. This satay is called Matang satay because it was originally introduced by the seller in the town of Matang Geuleumpang Dua, a sub-district town in Bireuen district.",
  },
  {
    name: "Sie Reuboh",
    img: "../assets/img/sie-reuboh.jpeg",
    desc: "Sie reubôh is one of the dishes originating from Aceh which is quite different from most other dishes. Sie reubôh is made from beef or buffalo stew that is only seasoned with shallots , garlic , cayenne pepper , red chili and pepper ; it is different from other typical Acehnese food which is strongly seasoned and contains a lot of spices. All the spices are mashed and then put into the meat stew. While the meat is being boiled, palm vinegar is added to the dish. Giving this vinegar is done gradually while the food is stirred slowly so that all the spices seep into the meat.",
  },
  {
    name: "Kopi Khop",
    img: "../assets/img/kopi-khop.jpg",
    desc: "Kupi khop is a coffee drink typical of Meulaboh, West Aceh. The coffee is served in a glass that is placed upside down on a small plate and drunk by sipping or sucking the coffee liquid in the small plate until leaving the coffee grounds in the upside down glass.",
  },
  {
    name: "Kopi Aceh",
    img: "../assets/img/kopi-aceh.jpg",
    desc: "Gayo coffee is an arabica coffee variety which is one of the leading commodities originating from the Gayo Highlands , Central Aceh , Indonesia . He has received Fair Trade Certified™ from the Fair Trade International Organization on 27 May 2010 , Kopi Gayo received an IG (Geographical Indication) certificate submitted by the Indonesian Ministry of Law and Human Rights . Then at the Indonesian Coffee Special Auction Event on October 10, 2010 in Bali, again Gayo arabica coffee got the highest rating when cupping score . These certifications and achievements have further strengthened Gayo Coffee's position as the world's best organic coffee.",
  },
];

const tourData = [
  {
    name: "Masjid Raya Baiturrahman",
    img: "../assets/img/Masjid-Baiturrahman.jpg",
    desc: "Baiturrahman Grand Mosque is a mosque located in downtown Banda Aceh, Aceh Province, Indonesia. Baiturrahman Grand Mosque is a symbol of religion, culture, spirit, strength, struggle and nationalism of the Acehnese people. This mosque is a Banda Aceh landmark since the era of the Aceh Sultanate and survived the earthquake and tsunami on December 26, 2004 ago.  Baiturrahman Grand Mosque is a symbol of religion, culture, spirit, strength, struggle and nationalism of the Acehnese people.",
  },
  {
    name: "Museum Tsunami",
    img: "../assets/img/museum-tsunami.jpg",
    desc: "The Aceh Tsunami Museum, located in Banda Aceh, Aceh, Indonesia, is a museum designed as a symbolic reminder of the 2004 Indian Ocean earthquake and tsunami disaster, as well as an education center and emergency shelter if the area is ever hit by another tsunami.",
  },
  {
    name: "Lhok Mata-ie",
    img: "https://acehtourism.travel/wp-content/uploads/2021/02/Screen-Shot-2021-02-16-at-23.51.57.jpg",
    desc: "Hidden beach located on the other side of a mountain. With its beautiful pond-like beach, it is a perfect spot for swimming. It also has good spots for camping and star gazing. It takes around an hour of hiking to get to Lhok Mata Ie",
  },
  {
    name: "Data Luah",
    img: "../assets/img/data-luah.jpg",
    desc: "Located at Kuta Malaka, Data Luah is a camping spot on the top of a mountain. It provides beautiful city night scenary from above, and jaw-dropping sunrise. It tooks around 3 hours hiking.",
  },
  {
    name: "Lhoknga Beach",
    img: "../assets/img/lhoknga.jpeg",
    desc: "Near to Lampuuk, there is Lhoknga beach. This tourism site is about 20 km from Banda Aceh. Here, you can relax under the shady trees or playing beach volleyball in the white sandy beach and sloping. If relaxing and sunbathing is not enough for you, you can try surfing in the sea. Lhoknga beach has waves with 1.5 to 2 meters high that suitable for those who love adrenaline rush.",
  },
  {
    name: "Ulee Lheue Beach",
    img: "../assets/img/ulee-lheue.jpg",
    desc: "Visiting Banda Aceh City becomes a new experience for everyone, especially travelers. It is because tourists have an opportunity to visit beautiful places like Ulee Lheue Beach. As the name suggests, the beautiful beach is located in Ulee Lheue Village and it belongs to Meuraksa Sub-District. The location is near to Banda Aceh City, so it is quite reachable using any type of vehicles. The beach is famous among the locals due to its beauty and good facilities, actually. No wonder, many people would enjoy some fun activities like a family vacation, sightseeing, beach walking, conducting BBQ, and much more.",
  },
];

if (document.title == "Food") {
  for (var i = 0; i < foodArr.length; i++) {
    const div75 = document.createElement("div");
    div75.classList.add("w-75", "mx-auto");
    const title = document.createElement("h3");
    title.innerHTML = `${i + 1}. ${foodArr[i].name}`;

    div75.appendChild(title);

    const imgWrap = document.createElement("div");
    imgWrap.classList.add("d-flex", "justify-content-center", "my-4");
    const image = document.createElement("img");
    image.src = `${foodArr[i].img}`;
    image.classList.add("food-img");
    imgWrap.appendChild(image);

    div75.appendChild(imgWrap);

    const description = document.createElement("p");
    description.innerHTML = foodArr[i].desc;

    div75.appendChild(description);

    document.getElementById("foodList").appendChild(div75);
  }
} else if (document.title == "Tourist") {
  for (var i = 0; i < tourData.length; i++) {
    const div75 = document.createElement("div");
    div75.classList.add("w-75", "mx-auto");
    const title = document.createElement("h3");
    title.innerHTML = `${i + 1}. ${tourData[i].name}`;

    div75.appendChild(title);

    const imgWrap = document.createElement("div");
    imgWrap.classList.add("d-flex", "justify-content-center", "my-4");
    const image = document.createElement("img");
    image.src = `${tourData[i].img}`;
    image.classList.add("food-img");
    imgWrap.appendChild(image);

    div75.appendChild(imgWrap);

    const description = document.createElement("p");
    description.innerHTML = tourData[i].desc;

    div75.appendChild(description);

    document.getElementById("touristList").appendChild(div75);
  }
}
