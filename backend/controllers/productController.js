const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.createProduct = async (req, res) => {
  const { name, type, ingredient, category, price, score, image, description } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Product name can contain only alphabets.";

  const productExists = await Product.findOne({ name });

  if (productExists) throw "Product with that name already exists!";

  const product = new Product({
    name,
    type,
    ingredient,
    category,
    price,
    score,
    image,
    description,
    // userScore,
    // user_Id,
  });

  await product.save();

  res.json({
    message: "Product created!",
  });
};

exports.getAllProduct = async (req, res) => {
  const products = await Product.find({});

  res.json(products);
};

// exports.getProduct = async (req, res) => {
//   const score = req.params.userScore;
//   //console.log(score);
//   let products;
//   if(score>22){
//     products = await Product.find({ score: { $gte: 22 } }); // for oily skin

//   } else {
//     products = await Product.find({ score: { $lte: 22 } }); // for dry skin
    
//   }

//   res.json(products);
// };


exports.getProduct = async (req, res) => {
  const score = req.params.userScore;
  const category =req.query.category;
  // console.log(score);
  console.log(category);
  let products;
  if(score>22){
    if(category=="cleanser"){
      products = await Product.find({ score: { $gte: 22 }, category:'cleanser' }); // for oily skin

    }else if(category=="sunscreen"){
      products = await Product.find({ score: { $gte: 22 }, category:'sunscreen' }); // for oily skin

    } else if (category=="anti tan"){
      products = await Product.find({ score: { $gte: 22 }, category: 'anti tan' }); // for oily skin

    }else if(category=="facewash"){
      products = await Product.find({ score: { $gte: 22 }, category: 'facewash' }); // for oily skin

    }else if(category=="toner"){
      products = await Product.find({ score: { $gte: 22 }, category: 'toner' }); // for oily skin

    }else if(category=="moisturizer"){
      products = await Product.find({ score: { $gte: 22 }, category: 'moisturizer' }); // for oily skin
      
    }else if(category=="faoundation"){
      products = await Product.find({ score: { $gte: 22 }, category: 'faoundation' }); // for oily skin
      
    }
    
  } else {
    if(category=="cleanser"){
      products = await Product.find({ score: { $lte: 22 }, category:'cleanser' }); // for oily skin

    }else if(category=="sunscreen"){
      products = await Product.find({ score: { $lte: 22 }, category:'sunscreen' }); // for oily skin

    } else if (category=="anti tan"){
      products = await Product.find({ score: { $lte: 22 }, category: 'anti tan' }); // for oily skin

    }else if(category=="facewash"){
      products = await Product.find({ score: { $lte: 22 }, category: 'facewash' }); // for oily skin

    }else if(category=="toner"){
      products = await Product.find({ score: { $lte: 22 }, category: 'toner' }); // for oily skin

    }else if(category=="moisturizer"){
      products = await Product.find({ score: { $lte: 22 }, category: 'moisturizer' }); // for oily skin
      
    }else if(category=="faoundation"){
      products = await Product.find({ score: { $lte: 22 }, category: 'faoundation' }); // for oily skin
      
    }}

  res.json(products);
};


exports.yo = async (req, res) => {
  const score = req.params.userScore;
  let cat = req.query.cat;
  console.log(score);
  console.log(cat);
  let products;
  if(score>22){
    products = await Product.find({ score: { $gte: 22 }, "category": cat }); // for oily skin

  } else {
    products = await Product.find({ score: { $lte: 22 },"category": cat }); // for dry skin
    
  }

  res.json(products);
};







