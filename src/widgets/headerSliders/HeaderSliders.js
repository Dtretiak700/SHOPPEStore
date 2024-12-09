import { useState } from "react";
import "./headerSliders.css";
import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from "../../shared/exampleCarouselImage/ExampleCarouselImage";
import sliderOne from "../../shared/assets/images/slider-one.png";
import sliderTwo from "../../shared/assets/images/slider-two.jpg";
import sliderThree from "../../shared/assets/images/slider-three.jpg";
import sliderFour from "../../shared/assets/images/slider-four.jpg";
import sliderFive from "../../shared/assets/images/slider-five.jpg";

const HeaderSliders = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return(
        <div className="slider-container">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <ExampleCarouselImage slide={sliderOne} />
                    <Carousel.Caption>
                        <h3 className='title-slide'>Gold big hoops</h3>
                        <p className='price-slide'>$ 68,00</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage slide={sliderTwo} />
                    <Carousel.Caption>
                        <h3 className='title-slide'>Lira Earrings</h3>
                        <p className='price-slide'>$ 20,00</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage slide={sliderThree} />
                    <Carousel.Caption>
                        <h3 className='title-slide'>Plaine Bracelet</h3>
                        <p className='price-slide'>$ 19,00</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage slide={sliderFour} />
                    <Carousel.Caption>
                        <h3 className='title-slide'>Hal Earrings</h3>
                        <p className='price-slide'>$ 25,00</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage slide={sliderFive} />
                    <Carousel.Caption>
                        <h3 className='title-slide'>Yuki Bracelet</h3>
                        <p className='price-slide'>$ 29,00</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeaderSliders;