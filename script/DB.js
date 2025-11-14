//Data
const products = [
  //salad
  {
    id: 1,
    name: "Caesar Salad",
    category: "Salad",
    price: 6.99,
    description:
      "Fresh romaine lettuce with parmesan, croutons, and Caesar dressing.",
    image:
      "https://bakerbynature.com/wp-content/uploads/2025/01/Caesar-Salad-9.jpg",
  },
  {
    id: 2,
    name: "Greek Salad",
    category: "Salad",
    price: 5.49,
    description: "Tomatoes, cucumbers, olives, feta cheese, and olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
  },
  {
    id: 3,
    name: "Fruit Salad",
    category: "Salad",
    price: 4.99,
    description: "A mix of seasonal fresh fruits.",
    image:
      "https://i0.wp.com/fortheloveofcooking.net/wp-content/uploads/2013/05/DSC_4449.1.jpg?resize=1060%2C702&ssl=1",
  },
  {
    id: 4,
    name: "Chicken Salad",
    category: "Salad",
    price: 7.49,
    description: "Grilled chicken with mixed greens and light dressing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjccKaUyspWO-DaBm4G_aWjLAxx1mvBq4qwQ&s",
  },
  {
    id: 5,
    name: "Vegetable Salad",
    category: "Salad",
    price: 4.49,
    description: "Crisp vegetables tossed with vinaigrette.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLHpv1-jA0UymXCOt1k0I_9kEfl4ZTtlrJg&s",
  },

  //fruit
  {
    id: 6,
    name: "Apple",
    category: "Fruit",
    price: 1.29,
    description: "Fresh red apple, sweet and juicy.",
    image:
      "https://thumbs.dreamstime.com/b/fresh-apple-slice-plate-red-171458453.jpg",
  },
  {
    id: 7,
    name: "Banana",
    category: "Fruit",
    price: 0.99,
    description: "Soft and sweet banana rich in potassium.",
    image:
      "https://img.freepik.com/premium-photo/bananas-plate-isolated-white-background_55883-1970.jpg",
  },
  {
    id: 8,
    name: "Orange",
    category: "Fruit",
    price: 1.1,
    description: "Citrus fruit full of vitamin C.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzJaNh58EfEgtMpqnsqQ8glMLnQiDSZ-new&s",
  },
  {
    id: 9,
    name: "Pineapple",
    category: "Fruit",
    price: 2.99,
    description: "Tropical fruit with a sweet and tangy taste.",
    image:
      "https://www.barbarabakes.com/wp-content/uploads/2020/07/How-to-Cut-Pineapple-Barbara-Bakes.jpg",
  },
  {
    id: 10,
    name: "Watermelon Slice",
    category: "Fruit",
    price: 1.89,
    description: "Refreshing slice of ripe watermelon.",
    image:
      "https://thumbs.dreamstime.com/b/sliced-watermelon-plate-stock-photo-42619294.jpg",
  },

  //fast food
  {
    id: 11,
    name: "Chicken Sandwich",
    category: "Fast Food",
    price: 4.99,
    description: "Grilled chicken breast with lettuce and mayo.",
    image:
      "https://www.eatingwell.com/thmb/s3AWSL6ExvQzQmh5l_a931lYBtc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Avocado-Tomato-Chicken-Sandwich-1x1-4686_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-af42b0d8afce4c63ab17edfdfbf9eeb9.jpg",
  },
  {
    id: 12,
    name: "Beef Burger",
    category: "Fast Food",
    price: 5.99,
    description: "Juicy beef patty with cheese, tomato, and lettuce.",
    image:
      "https://www.unileverfoodsolutions.us/dam/global-ufs/mcos/NAM/calcmenu/recipes/US-recipes/sandwiches/spicy-mayo-fried-chicken-sandwich/crispychickensandwich_1206x709.jpg",
  },
  {
    id: 13,
    name: "French Fries",
    category: "Fast Food",
    price: 2.49,
    description: "Crispy golden fries.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
  },
  {
    id: 14,
    name: "Veggie Wrap",
    category: "Fast Food",
    price: 3.99,
    description: "Fresh vegetables wrapped in soft tortilla.",
    image:
      "https://kristineskitchenblog.com/wp-content/uploads/2024/04/veggie-wrap-11-2.jpg",
  },
  {
    id: 15,
    name: "Chicken Nuggets",
    category: "Fast Food",
    price: 3.49,
    description: "Crispy breaded chicken bites.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnkWivMvLyUFoqxCLUl9aY-SAggQ28NDcoQ&s",
  },

  //dessert
  {
    id: 16,
    name: "Chocolate Cake",
    category: "Dessert",
    price: 3.99,
    description: "Rich chocolate cake with frosting.",
    image:
      "https://static.toiimg.com/thumb/53096885.cms?imgsize=1572013&width=800&height=800",
  },
  {
    id: 17,
    name: "Ice Cream Cup",
    category: "Dessert",
    price: 2.49,
    description: "Vanilla ice cream topped with chocolate syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcgzk5BHk6dUx71g2_UbGhb4PXisdwc-i3Q&s",
  },
  {
    id: 18,
    name: "Fruit Tart",
    category: "Dessert",
    price: 4.29,
    description: "Crispy tart filled with cream and fresh fruits.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsL6BvkBOQLODDFVn_n6Fhh2n3IpIdtxS8AA&s",
  },
  {
    id: 19,
    name: "Brownie",
    category: "Dessert",
    price: 1.99,
    description: "Soft chocolate brownie with a fudgy center.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBW4W-3x_osH5jYgOQR69xyqjhHjE2xH1Ag&s",
  },
  {
    id: 20,
    name: "Cupcake",
    category: "Dessert",
    price: 2.29,
    description: "Fluffy cupcake topped with buttercream.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMCS82u_iJJMwfIQTLj14zRxiMwKunV2FZQ&s",
  },

  //drink
  {
    id: 21,
    name: "Orange Juice",
    category: "Drink",
    price: 1.99,
    description: "Freshly squeezed orange juice.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1PReutq2Y2MGzybraLOCe1VBv5q4Isa0TQ&s",
  },
  {
    id: 22,
    name: "Lemonade",
    category: "Drink",
    price: 1.49,
    description: "Refreshing homemade lemonade.",
    image:
      "https://www.allrecipes.com/thmb/-sGgcEhnlIhqr0legC4Q7TPkRhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/32385-best-lemonade-ever-DDMFS-4x3-8cef7761205e417499c89eb178e5ba2b.jpg",
  },
  {
    id: 23,
    name: "Milkshake",
    category: "Drink",
    price: 2.99,
    description: "Creamy vanilla milkshake.",
    image:
      "https://www.foodandwine.com/thmb/aYv9IwIyM4EKLL0o7W1CUSfjXzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vanilla-Milkshake-FT-MAG-RECIPE-0325-4ad53abc27a74f7687e510cc17d28d1d.jpg",
  },
  {
    id: 24,
    name: "Iced Coffee",
    category: "Drink",
    price: 2.49,
    description: "Cold brewed coffee served over ice.",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2024/02/Copycat-McDonald-s-Iced-Coffee_EXPS_FT23_273351_ST_3_27_1.jpg",
  },
  {
    id: 25,
    name: "Green Tea",
    category: "Drink",
    price: 1.29,
    description: "Hot green tea with soothing aroma.",
    image:
      "https://static.toiimg.com/thumb/imgsize-23456,msid-121996789,width-600,resizemode-4/765u6g.jpg",
  },

  //meal
  {
    id: 26,
    name: "Grilled Chicken",
    category: "Meal",
    price: 7.99,
    description: "Seasoned grilled chicken served with veggies.",
    image:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2025/03/tandoori-chicken-3sm-2-scaled.jpg",
  },
  {
    id: 27,
    name: "Spaghetti Bolognese",
    category: "Meal",
    price: 6.49,
    description: "Classic pasta with rich tomato meat sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0f90QvFsFA9RG807YWdAjJT6WJOPr7jZlg&s",
  },
  {
    id: 28,
    name: "Fried Rice",
    category: "Meal",
    price: 5.49,
    description: "Rice fried with eggs, vegetables, and soy sauce.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeyNBUBooHqQRxDBAOTzk1BYYG-y-PR7oKA&s",
  },
  {
    id: 29,
    name: "Beef Steak",
    category: "Meal",
    price: 9.99,
    description: "Tender beef steak grilled to perfection.",
    image:
      "https://media.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/thyme-balsamic-beef-rump-c1ba3100.jpg",
  },
  {
    id: 30,
    name: "Roasted Fish",
    category: "Meal",
    price: 8.49,
    description: "Oven-roasted fish seasoned with herbs.",
    image:
      "https://www.foodandwine.com/thmb/Ga1bZriAP_G67SOX73RsW81851Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grilled-Roasted-Red-Snapper-FT-RECIPE0324-7b4925dffdc8466db35298f7ef1d8ec3.jpg",
  },
];

const productsData = [...products];
const productsContainer = document.getElementById("product-preview");

console.log(productsData);
console.log(products);

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

const renderProducts = () => {
  if (!productsContainer) {
    return;
  }
  productsContainer.innerHTML = "";
  // productsData.forEach((product) => {
  //   const productCard = createProductCard(product);
  //   productsContainer.appendChild(productCard);
  // });
  for (let i = 0; i < productsData.length; i++) {
    const productCard = createProductCard(productsData[i]);
    productsContainer.appendChild(productCard);
  }
};

const createProductCard = (product) => {
  //create the div
  const card = document.createElement("div");
  //give a style to the div
  card.className = "rounded-xl shadow-xl h-96 overflow-hidden";
  //if you don't use tailwind use card.classList.add/remove/toggle(class)
  card.innerHTML = `
  <img
            src=${product.image}
            alt=${product.name}
            class="w-full h-1/2 rounded-t-xl object-cover"
          />
          <div class="h-1/2 p-4 flex flex-col justify-between">
            <h2 class="text-2xl font-bold my-2">${product.name}</h2>
            <p class="mb-2">${product.description}</p>
            <div class="flex justify-between items-center">
              <span class="text-orange-500 font-bold text-xl">$${product.price}</span>
              <button
                class="bg-orange-500 text-white rounded-lg p-2 font-bold cursor-pointer"
              >
                Add to card
              </button>
            </div>
          </div>
  `;

  return card;
};
