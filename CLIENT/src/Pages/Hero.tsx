import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel';
import Card from '../Components/Card';

interface FoodItem {
  _id: string;
  img: string;
  description: string;
  CategoryName: string;
  name: string;
}

interface Category {
  _id: string;
  CategoryName: string;
}

function Hero() {
  const [foodCat, setFoodCat] = useState<Category[]>([]);
  const [foodItem, setFoodItem] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fooddata", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        const items: FoodItem[] = data[0]; // Assuming the first element is items
        const categories: Category[] = data[1]; // Assuming the second element is categories
        
        setFoodCat(categories);
        setFoodItem(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Carousel />
      <div className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {foodCat.map((category) => (
          <div key={category._id}>
            <h2 className="text-xl font-semibold mb-4 text-center uppercase border-b-2 border-gray-300 pb-2">{category.CategoryName}</h2>
            <div className="grid grid-cols-1 gap-4">
              {foodItem
                .filter((item) => item.CategoryName === category.CategoryName)
                .map((filteredItem) => ( 
                <div className='cols-12 col-md-6 col-lg-3'>
                  <Card
                    key={filteredItem._id}
                    name={filteredItem.name}
                    description={filteredItem.description}
                    categoryName={filteredItem.CategoryName}
                    img={filteredItem.img}
                  />
                </div>
                ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Hero;
