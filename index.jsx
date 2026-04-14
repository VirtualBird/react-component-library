import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"

import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"
import Tooltip from "./components/Tooltip/Tooltip"
import { FaCarrot } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="page-badges">
        <h1 className="page-badges-text pm-font">Badges</h1>
        <h2 className="page-badges-square pm-font">Square</h2>
        <h2 className="page-badges-pill pm-font">Pill</h2>
        
        <Badge color="gray" variant="square">Badge</Badge>
        <Badge color="red" variant="square">Badge</Badge>
        <Badge color="yellow" variant="square">Badge</Badge>
        <Badge color="green" variant="square">Badge</Badge>
        <Badge color="blue" variant="square">Badge</Badge>
        <Badge color="indigo" variant="square">Badge</Badge>
        <Badge color="purple" variant="square">Badge</Badge>
        <Badge color="pink" variant="square">Badge</Badge>
        
        <Badge color="gray" variant="pill">Badge</Badge>
        <Badge color="red" variant="pill">Badge</Badge>
        <Badge color="yellow" variant="pill">Badge</Badge>
        <Badge color="green" variant="pill">Badge</Badge>
        <Badge color="blue" variant="pill">Badge</Badge>
        <Badge color="indigo" variant="pill">Badge</Badge>
        <Badge color="purple" variant="pill">Badge</Badge>
        <Badge color="pink" variant="pill">Badge</Badge>
      </div>
      <hr/>
      <div className="page-banners">
        <h1 className="page-banners-text pm-font">Banners</h1>
        
        <h2 className="page-banners-multi pm-font">Multi Line</h2>
        <h2 className="page-banners-single pm-font">Single Line</h2>
        
        <h2 className="page-banners-success pm-font">Success</h2>
        <h2 className="page-banners-warning pm-font">Warning</h2>
        <h2 className="page-banners-error pm-font">Error</h2>
        <h2 className="page-banners-neutral pm-font">Neutral</h2>
        
        <div className="spacer"></div>
        
        <Banner status="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner status="success"></Banner>
      
        <Banner status="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner status="warning"></Banner>
        
        <Banner status="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner status="error"></Banner>
        
        <Banner status="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
        <Banner status="neutral"></Banner>
        
      </div>
      <hr/>
      <div className="page-cards">
        <h1 className="page-cards-text pm-font">Cards</h1>
        <p className="page-cards-hover pm-font">hover</p>
        <Card title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
        
        <Card icon={<FaCarrot/>} iconColor="orange" title="Feed your horse">{"That\'s right the best nutrition for your horse. Everybody needs a good nutritional meal. This was just testing a function."}</Card>
      </div>
      <hr/>
      
      <div className="page-testimonials">
        <h1 className="page-testimonials-text pm-font">Testimonials</h1>
        
        <h2 className="page-testimonials-with-pic pm-font">With Pic</h2>
        <Testimonial photo="./images/stock-img.jpg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." name="May Andersons" role="Workcation, CTO"/>
        
        <h2 className="page-testimonials-no-pic pm-font">No Pic</h2>
        <Testimonial quote="This one's without photo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." name="May Andersons" role="Workcation, CTO"/>
      </div>
      <hr/>
      
      
      <div className="page-tooltips">
        <h1 className="page-tooltips-text pm-font">Tooltips <span>Two styles, Bold and Light</span></h1>
        
        <div className="library-tooltips">
          <div>
            <Tooltip style="bold" color="black" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Bold Black</div></Tooltip>
            <Tooltip style="bold" color="blue" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Bold Blue</div></Tooltip>
            <Tooltip style="bold" color="pink" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Bold Pink</div></Tooltip>
            <Tooltip style="bold" color="green" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Bold Green</div></Tooltip>
          </div>
          
          <div>
            <Tooltip style="light" color="black" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Light Black</div></Tooltip>
            <Tooltip style="light" color="blue" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Light Blue</div></Tooltip>
            <Tooltip style="light" color="pink" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Light Pink</div></Tooltip>
            <Tooltip style="light" color="green" title="Archive Notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."><div>Tooltip Light Green</div></Tooltip>
          </div>
        </div>
      </div>
      <hr/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
