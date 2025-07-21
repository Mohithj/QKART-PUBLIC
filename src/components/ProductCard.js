import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
// import React from "react";
import React, { useEffect, useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  const [data, setData] = useState([
    {
    "name":"Tan Leatherette Weekender Duffle",
    "category":"Fashion",
    "cost":150,
    "rating":4,
    "image":"https://crio-directus-assets.s3.ap-south-1.amazonaws.com/ff071a1c-1099-48f9-9b03-f858ccc53832.png",
    "_id":"PmInA797xJhMIPti"
    }]);


  return (
    <Card className="card">
      {/* {data.map((product) => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Cost: ${product.cost}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))} */}

      <CardMedia
        component="img"
        alt={product.name}
        height="280"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: 'bold'}}>
          {product.name}
        </Typography>
        <Typography gutterBottom variant="body1" sx={{fontWeight: 'bold'}}>
          ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button sx={{ width: '100%'}} variant="contained" onClick={handleAddToCart}>
        <AddShoppingCartOutlined sx={{ marginRight: '8px' }}/>ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
