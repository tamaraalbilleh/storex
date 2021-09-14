import * as actions from "./utils";

let initialState = {
  prodcuts: [
    {
      id: 1,
      gender: "male",
      name: "MEN ULTRA LIGHT DOWN JEANS",
      originalPrice: 120.0,
      salePrice: 110.5,
      catigory: "jeans",
      color: "blue",
      size: ["l", "xl", "xxl"],
      image:
        "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPTNG-MEN-COTTAGAR62783063E1D673/1568441807439_0..jpg?imwidth=282&impolicy=hq",
    },
    {
      id: 2,
      gender: "male",
      name: "MEN ULTRA LIGHT DOWN T-SHIRT",
      originalPrice: 120.0,
      salePrice: 95.8,
      color: "black",
      catigory: "shirts",
      size: ["l", "m", "xl"],
      image:
        "https://ae01.alicdn.com/kf/H3d6f2b005f974a74a3e59f7f3f7eaca9Q/2021-Brand-Casual-Spring-Luxury-Plaid-Long-Sleeve-Slim-Fit-Men-Shirt-Streetwear-Social-Dress-Shirts.jpg_Q90.jpg_.webp",
    },
    {
      id: 3,
      gender: "male",
      name: "MEN ULTRA LIGHT DOWN SQUARE QULTED JEANS",
      originalPrice: 120.0,
      salePrice: 90.5,
      color: "blue",
      size: ["s", "xs", "m"],
      catigory: "jeans",
      image:
        "https://i1.wp.com/ae01.alicdn.com/kf/He21c3e7209d640a2845def6ff6bc4645H/Men-s-Quilted-Embroidered-jeans-Skinny-Jeans-Ripped-Grid-Stretch-Denim-Pants-MAN-Badge-Patchwork-Jogging.jpg",
    },
    {
      id: 4,
      gender: "male",
      name: "MEN NECKLACE",
      originalPrice: 120.0,
      salePrice: 80.5,
      color: "green",
      catigory: "accessories",
      size: ["s", "xs", "m", "l", "xl", "xxl"],
      image:
        "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH939aeae6313a4f3e95755d0450cf5371W%2Fmen-necklace-women-chain-stainless-steel-Necklace-Women-Men-Simple-Long-Chain-sun-pendant-Necklace-Statement.jpg",
    },
    {
      id: 5,
      gender: "male",
      name: "SHOES",
      originalPrice: 120.0,
      salePrice: 90.5,
      color: "red",
      catigory: "shoes",
      size: ["s", "xs", "xxl"],
    },
    {
      id: 6,
      gender: "female",
      name: "WOMEN ULTRA LIGHT JEANS",
      originalPrice: 120.0,
      salePrice: 110.5,
      catigory: "jeans",
      color: "blue",
      size: ["m", "l", "xl", "xxl"],

      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585862572-boyis3005315d41_q1_2-0._QL90_UX336_.jpg?crop=1.00xw:0.847xh;0,0.102xh&resize=480:*",
    },
    {
      id: 7,
      gender: "female",
      name: "WOMEN ULTRA LIGHT DOWN SHIRT",
      originalPrice: 120.0,
      salePrice: 95.8,
      color: "purble",
      catigory: "shirts",
      size: ["xs", "l", "xxl"],
    },
    {
      id: 8,
      gender: "female",
      name: "WOMEN ULTRA LIGHT DOWN SQUARE QULTED JEANS",
      originalPrice: 120.0,
      salePrice: 90.5,
      color: "black",
      catigory: "jeans",
      size: ["s", "xs", "m", "l", "xl"],

      image:
        "https://cdna.lystit.com/photos/29de-2015/10/23/express-dark-quilted-moto-mid-rise-jean-legging-product-2-544762134-normal.jpeg",
    },
    {
      id: 9,
      gender: "female",
      name: "WOMEN NECKLACE",
      originalPrice: 120.0,
      salePrice: 80.5,
      color: "red",
      catigory: "accessories",
      size: ["s", "m"],
    },
    {
      id: 10,
      gender: "female",
      name: "SHOES",
      originalPrice: 120.0,
      salePrice: 90.5,
      catigory: "Shoes",
      color: "green",
      size: ["s"],

      image:
        "https://ae01.alicdn.com/kf/HTB1GWK5U4jaK1RjSZFAq6zdLFXaQ/Big-Size-11-12-13-14-wedges-shoes-for-women-sandals-women-shoes-woman-ladies-summer.jpg_Q90.jpg_.webp",
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actions.GET_ALL:
      console.log("all");
      return state;

    case actions.GET_FEMALE:
      const femaleResult = [...state.prodcuts];
      let femaleOutput = femaleResult.filter(
        (item) => item.gender === "female"
      );
      return { prodcuts: femaleOutput };

    case actions.GET_MALE:
      const maleResult = [...state.prodcuts];
      let maleOutput = maleResult.filter((item) => item.gender === "male");
      return { prodcuts: maleOutput };

    case actions.FILTER:
      let initial = { ...initialState };
      const filterResult = [...initial.prodcuts];
      let result;
      if (payload.gender === null) {
        if (payload.catigory !== "all") {
          result = filterResult.filter(
            (item) => item.catigory === payload.catigory
          );
        } else {
          result = filterResult;
        }
      } else {
        if (payload.catigory !== "all") {
          result = filterResult.filter(
            (item) =>
              item.catigory === payload.catigory &&
              item.gender === payload.gender
          );
        } else {
          result = filterResult.filter(
            (item) => item.gender === payload.gender
          );
        }
      }
      return { prodcuts: result };
    case actions.FILTER_S:
      let newStateForFilter = { ...initialState };
      let newStateForFilter2 = [...newStateForFilter.prodcuts].filter(
        (item) =>
          item.color === payload.color &&
          item.size.includes(payload.size) &&
          item.salePrice >= payload.price[0] &&
          item.salePrice <= payload.price[1]
      );
      return { prodcuts: newStateForFilter2 };

    default:
      return state;
  }
};

export default productsReducer;
