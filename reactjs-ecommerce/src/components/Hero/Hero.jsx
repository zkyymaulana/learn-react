import React from 'react';
import Image1 from '../../assets/hero/men.png';
import Image2 from '../../assets/hero/women.png';
import Image3 from '../../assets/hero/sale.png';
import Slider from 'react-slick';

const ImageList = [
	{
		id: 1,
		img: Image1,
		title: "Up to 50% off on all Men's Wear",
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt dolore minima! Vel libero fugit aspernatur tempore, fuga temporibus recusandae?',
	},
	{
		id: 2,
		img: Image2,
		title: "30% off all Women's Wear",
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis! Quia repellat unde modi incidunt vero! Adipisci, quasi soluta.',
	},
	{
		id: 3,
		img: Image3,
		title: '70% off on all Products Sale',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem earum sunt et modi in illo repellendus quam.',
	},
];

export const Hero = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'ease-in-out',
		pauseOnHover: false,
		pauseOnFocus: true,
	};

	return (
		<div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
			{/* background pattern */}
			<div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-8"></div>
			{/* hero pattern */}
			<div className="container pb-8 sm:pb-0">
				<Slider {...settings}>
					{ImageList.map(data => (
						<div key={data.id}>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								{/* Text content section */}
								<div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
									<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
									<p className="text-sm">{data.description}</p>
									<div>
										<button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
									</div>
								</div>
								{/* Image section */}
								<div className="order-1 sm:order-2">
									<div className="relative z-10">
										<img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-110 object-contain mx-auto" />
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};
