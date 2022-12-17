
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import {Text,Badge} from '@chakra-ui/react';


function ProductCarousel({data}){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const handleLocal = (elem) =>{
    localStorage.setItem('details',JSON.stringify(elem));
  }

  let x = Math.floor(Math.random()*10);
    if(x > 3){
    x = 1.5;
  }else{
    if(x<2){
    x = 2;
    }
  }

console.log(x);

  return (
    <div style={{zIndex:'1',position:'relative'}}>
      <Carousel responsive={responsive} infinite >
        {
          data.map((elem)=>{
            return (
              <div key={elem.id} style={{height:'auto',padding:'10px',textAlign:'left'}}>
                <Link to='/details'>
                  <img onClick={()=>handleLocal(elem)} src={elem.image} alt={elem.id}  style={{height:'70%',width:'80%',margin:'auto'}} />
                  <Text noOfLines='2' color='blue' >{elem.title}</Text>
                  <Text >M.R.P:  
                    <Text as='s'> ${Math.ceil(elem.price * x)}</Text>
                  </Text>
                  <Text >Deal Price:  
                    <Text as='b'> ${elem.price}</Text>
                  </Text>
                  <Badge colorScheme='green'>Offer Available</Badge>
                  {/* <Text>{elem.id}</Text> */}
                </Link>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}


export default ProductCarousel;

