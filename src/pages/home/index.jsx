import CartBox from "../../components/CartBox";

const cartLists = [
  {
    "products": [
        {
            "name": "alireza",
            "brand": "برند تست",
            "image": [
              "https://www.vhv.rs/dpng/d/218-2184410_round-neck-t-shirt-t-shirt-hd-png.png",
              "http://mina-m.com/wp-content/uploads/2014/01/bike-1024x819.jpg"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 1,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          },
          {
            "name": "bahram",
            "brand": "برند تست",
            "image": [
              "https://www.sportyfied.com/thumbs/regular/028250_170_manhattanpolo_f_700x700.png",
              "https://dcassetcdn.com/design_img/3319573/505965/505965_18273532_3319573_6921f0fa_image.png"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 2,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          },
          {
            "name": "mamad",
            "brand": "برند تست",
            "image": [
              "https://www.punx.uk/wp-content/uploads/productimages/eagles-of-death-metal-sunset-t-shirt-back.jpg",
              "https://dcassetcdn.com/design_img/3319573/505965/505965_18273532_3319573_6921f0fa_image.png"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 3,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          },
          {
            "name": "hsn",
            "brand": "برند تست",
            "image": [
              "https://familycasual.s3.amazonaws.com/sanmar/Swatches/PC54Y_Sangria_model_front_021210.jpg",
              "https://dcassetcdn.com/design_img/3319573/505965/505965_18273532_3319573_6921f0fa_image.png"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 4,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          },
          {
            "name": "hsn",
            "brand": "برند تست",
            "image": [
              "http://design.moveenterprises.com/wp-content/uploads/2010/12/Shirt-Sample-3-copy.jpg",
              "https://dcassetcdn.com/design_img/3319573/505965/505965_18273532_3319573_6921f0fa_image.png"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 5,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          },
          {
            "name": "hsn",
            "brand": "برند تست",
            "image": [
              "https://n4.sdlcdn.com/imgs/a/m/p/Zovi-Indian-Green-Stand-Collar-SDL290126141-1-9f117.jpg",
              "https://dcassetcdn.com/design_img/3319573/505965/505965_18273532_3319573_6921f0fa_image.png"
            ],
            "thumbnail": "030fee34c5b2e05e30fcaaf87aa73a62",
            "price": 10275000,
            "quantity": 8,
            "createdAt": 1643373068134,
            "id": 5,
            "category": 2,
            "subcategory": 1,
            "description": "<p>تستتتتت</p>"
          }
    ],
    "category": [
      {
        "id": 1,
        "name": "bahram",
        "icon": "030fee34c5b2e05e30fcaaf87aa73a62"
      },
      {
        "id": 2,
        "name": "mamad",
        "icon": "d55ab5b97230878d1c15aac5aa6af518"
      }
    ],
    "subcategory": [
      {
        "id": 1,
        "name": "ساب کتگوری 1",
        "category": 1
      },
      {
        "id": 2,
        "name": "سابکتگوری 2",
        "category": 1
      }
    ],
    "orders": [
      {
        "username": "پدرام",
        "lastname": "صادقی",
        "address": "تهران میدان آزادی ",
        "phone": "09032855606",
        "expectAt": 1648771200000,
        "products": [
          {
            "id": 4,
            "name": "MacBook Air MGN63 2020",
            "count": "1",
            "price": "10275000",
            "image": "b7b1754d9e82674138512445576bba26"
          }
        ],
        "prices": 10275000,
        "delivered": "false",
        "createdAt": 1646158398160,
        "id": 1
      }
    ],
    "whoami": {
      "name": "Jamshid Mashayekhi",
      "username": "admin",
      "password": "admin",
      "role": "admin"
    },
    "users": [
      {
        "name": "Alireza Gharghabi",
        "username": "admin",
        "password": "admin",
        "role": "admin"
      }
    ],
    "protection": {
      "products.get": false,
      "orders.post": false,
      "products.post": false,
      "orders.get": false,
      "orders.patch": false,
      "upload.post": false,
      "upload": true,
      "orders": "admin",
      "products": "admin",
      "users": "admin",
      "protection": "admin"
    }
  }
];

const Home = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {cartLists.map((cartList) => (
        <CartBox key={cartList.id} {...cartList} />
      ))}
    </div>
  );
};

export default Home;
