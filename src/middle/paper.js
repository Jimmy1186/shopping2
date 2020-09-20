import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Paperly() {
  const classes = useStyles();

  useEffect(() => {
    fetchItems();
  }, []);
  const [product, setProduct] = useState([]);
  // const [title, setTitle] = useState([]);
  // const [images, setImages] = useState([]);
  let productData = [];
  // let titleData = [];
  // let imageData = [];
  let itemsLengh;



  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products/")
    .then(function (response) {
      return response.json();
    })
    .then(function (myjson) {
      const i = Object.keys(myjson).length;
      itemsLengh = i;
      // titleData[0]=myjson[1].title;
      for (let x = 0; x < i; x++) {
        // console.log(myjson[x].category.length);
        productData[x]=myjson[x];
        // titleData[x] = myjson[x].title;
        // imageData[x] = myjson[x].image;
    
      }
    });
    setProduct(productData);
    // setTitle(titleData);
    // setImages(imageData);
    // console.log(titleData);
    // console.log(titleData.length);

  };

  return (
<>

  {product.map((product)=>(
      <Card className={classes.root} key={product.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title} 
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
  ))}
</>
  
  );
}
