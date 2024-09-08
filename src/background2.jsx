
import Card from "./card";
import './model.css'
import Model from "./model.jsx"
function Background2(){
    const cardData = [
        
            {"link":"https://www.odishacraftsmuseum.odisha.gov.in/","image":"./image1.png","Title":"Kala Bhoomi Odisha Crafts Museum","location":"Bhubneswar, Odisha","description":"Lorem ipsum" },
            {"link":"https://bitm.gov.in/","image":"./image2.png","Title":"Birla Industrial Technological Museum","location":"Kolkata, West Bengal","description":"Lorem ipsum" },
            {"link":"https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/delhi/kranti-mandir.html","image":"./image3.png","Title":"Kranti Mandir Museum Complex","location":"Red Fort, Delhi","description":"Lorem ipsum" },
            {"link":"https://www.dakshinachitra.net/","image":"./image4.png","Title":"Dakshinachitra Museum","location":"Chennai, Tamil Nadu","description":"Lorem ipsum" },
            {"link":"https://mpbirlaplanetarium.org/","image":"./image5.png","Title":"Birla Planetarium","location":"Kolkata, West Bengal","description":"Lorem ipsum" },
            {"link":"https://kscste.kerala.gov.in/","image":"./image6.png","Title":"Kerala Science and Technology","location":"Thiruvananthpuram","description":"Lorem ipsum" },
            {"link":"https://sciencecitykolkata.org.in/","image":"./image7.png","Title":"Science City","location":"Kolkata, West Bengal","description":"Lorem ipsum" },
            {"link":"https://www.calicomuseum.org/","image":"./image8.png","Title":"The Calico Museum of Textiles","location":"Ahmedabad,Gujarat","description":"Lorem ipsum" },
            {"link":"https://www.vismuseum.gov.in/","image":"./image9.png","Title":"Visvesvaraya Industrial and Technological Museum","location":"Bengaluru, Karnataka","description":"Lorem ipsum" },
            {"link":"https://mptribalmuseum.com/english/","image":"./image10.png","Title":"Tribal Museum","location":"Bhopal, Madhya Pradesh","description":"Lorem ipsum" }
            
        // Add more objects as needed
    ];
    return(
        <div className="bk">


            <img src="hawai.jpeg" alt="" className="bk2"/>
            

            

            <div className="icons">
                <div className="abt-website">

                    <div className="money">
                        <img src="money.svg" alt="" />
                    </div>
                    <div className="record">
                        <img src="record.svg" alt="" />
                    </div>
                    <div className="time">
                        <img src="time.svg" alt="" />
                    </div>

                </div>
                
                
            </div>
            <div className="meausiums">
            <div className="card-title">
                    <p>Museum</p>
                </div>
            <div className="containerop">
            <Card data={cardData}/>
            </div>
            
            </div>
        </div>
    );
}

export default Background2