const collection = require('../utilities/connection');
const userData = [
  {
    "userId": "U1001",
    "uCredentials": {
      "uEmail": "john@gmail.com",
      "uPass": "John111"
    },
    "uProfile": {
      "uName": "John",
      "uDOB": "2018-06-08",
      "uPhone": 8265839081,
      "uIsSeller": false,
      "uDateJoined": "2018-06-07T04:21:00.760Z",
      "uLastLogin": "2018-06-12T11:30:28.340Z"
    }
  }
]
const productData = [
  {
    "_id": "1001",
    "name": "samsung_A30S",
    "description": "samsung_A30S by samsung",
    "rating": 3.5,
    "category": "Electronics",
    "price": 14999,
    "color": "Blue",
    "image": "samsung_A30S.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":547
  },
  {
    "_id": "1002",
    "name": "Redmi Note 6 Pro",
    "description": " phone by Redme ",
    "rating": 4,
    "category": "Electronics",
    "price": 13999,
    "color": "Black",
    "image": "red_meNote_6.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":569
  },
  {
    "_id": "1003",
    "name": "samsungs_20",
    "description": "a  phone by samsung",
    "rating": 4,
    "category": "Electronics",
    "price": 23599,
    "color": "Silver",
    "image": "samsungs_20.jpeg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":147
  },
  {
    "_id": "1004",
    "name": "iphone11",
    "description": "a  phone by apple",
    "rating": 4.5,
    "category": "Electronics",
    "price": 19999,
    "color": "Purple",
    "image": "iphone11.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":58
  },
  
  {
    "_id": "1005",
    "name": "one_plus_8",
    "description": "a phone by one plus",
    "rating": 4.9,
    "category": "Electronics",
    "price": 79999,
    "color": "Platinum",
    "image": "one_plus_8.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":100
  },
  {
    "_id": "1006",
    "name": "Adidas Running Men Lite",
    "description": "a pair of light weight running shoes by adidas",
    "rating": 4,
    "category": "Shoes",
    "price": 2599,
    "color": "Black White",
    "image": "adidas_1.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":99
  },
  {
    "_id": "1007",
    "name": "Adidas Running Women Lite",
    "description": "a pair of light weight running shoes by adidas",
    "rating": 4,
    "category": "Shoes",
    "price": 2599,
    "color": "Pink",
    "image": "Shoes.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":28
  },
  {
    "_id": "1008",
    "name": "Adidas Running Men robust",
    "description": "A pair of robust running shoes by adidas",
    "rating": 4,
    "category": "Shoes",
    "price": 3599,
    "color": "Black",
    "image": "adidas_2.png",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":3
  },
  {
    "_id": "1009",
    "name": "Reebok training shoes",
    "description": "A pair of light weight training shoes by Reebok",
    "rating": 3,
    "category": "Shoes",
    "price": 1599,
    "color": "White",
    "image": "rebok_1.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":74
  },
  {
    "_id": "1010",
    "name": "Nike Running Men Lite",
    "description": "a pair of light weight running shoes by Nike",
    "rating": 4.6,
    "category": "Shoes",
    "price": 6599,
    "color": "Black",
    "image": "rebok_2.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":546
  },
  {
    "_id": "1011",
    "name": "Luxury Bed by Zuari",
    "description": "sunmica finished zuari luxury bed",
    "rating": 4,
    "category": "Furniture",
    "price": 8999,
    "color": "Black",
    "image": "bed.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":742
  },
  {
    "_id": "1012",
    "name": "Organised Cupboards by Ozi",
    "description": "sunmica finished Ozi cupboards",
    "rating": 4.3,
    "category": "Furniture",
    "price": 6999,
    "color": "Coffee Brown",
    "image": "cup_board.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":873
  },
  {
    "_id": "1013",
    "name": "Dressing Table by KIA",
    "description": "sunmica finished KIA Dressing table",
    "rating": 4,
    "category": "Furniture",
    "price": 8599,
    "color": "Black",
    "image": "dressing-table.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":666
  },
  {
    "_id": "1014",
    "name": "Recliner sofa set by Penguine",
    "description": "A luxurious and comfortable sofa set by Penguine furniture makers",
    "rating": 4.8,
    "category": "Furniture",
    "price": 12500,
    "color": "Dark Black",
    "image": "sofa.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":89
  },
  {
    "_id": "1015",
    "name": "Dining table by Wood_Park",
    "description": "Teak wood dining table with four chairs",
    "rating": 4.4,
    "category": "Furniture",
    "price": 18999,
    "color": "Brown",
    "image": "dining_table.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":3290
  },
 
  {
    "_id": "1017",
    "name": " saree by India",
    "description": "cotton silk hand woven sarees by Fabindia",
    "rating": 4.8,
    "category": "Clothing",
    "price": 5900,
    "color": "Purple Red",
    "image": "saree.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":589
  },
  {
    "_id": "1018",
    "name": "Jeans fant",
    "description": "Jeans Fant for men",
    "rating": 4.8,
    "category": "Clothing",
    "price": 1900,
    "color": "Blue",
    "image": "jeans.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":322
  },
  {
    "_id": "1019",
    "name": " T-shirt",
    "description": " shirt by Canada",
    "rating": 4.8,
    
    "category": "Clothing",
    "price": 3299,
    "color": "Black",
    "image": "t-shirt.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "availability":32
   
  }
];


let create = {}


create.setupDB = async () => {
  const userColl = await collection.getCollection();
  const data = await userColl.deleteMany();

  const proColl= await collection.productsCollection()
  const data1=await proColl.deleteMany()

  
  
  const result = await userColl.insertMany(userData); 
  if (result && result.length > 0)
  {
    // console.log("succes");
    /* (by priya)if(userData && productData>0){    
      return "insertion successful"
    }
    else{
      let err=new Error("Insertion failed");
      err.status=400;
      throw err;
    }*/
      const resu2=await proColl.insertMany(productData)
      if (resu2 && resu2.length > 0)
      {
        return resu2.length
      }
      else
      {
        return null
      }
  }
  else
  {
  // {console.log("failue");

    return null;
  }

}


// create.setupDB()

module.exports = create