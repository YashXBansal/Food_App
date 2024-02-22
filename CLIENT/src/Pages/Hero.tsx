import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
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
      <Navbar />
      <Carousel />
      <div className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {foodCat.map((category) => (
  <div key={category._id}>
    <div>{category.CategoryName}</div>
    {foodItem
      .filter((item) => item.CategoryName === category.CategoryName)
      .map((filteredItem) => (
        <div key={filteredItem._id}>
          <Card
            name={filteredItem.name}
            description={filteredItem.description}
            categoryName={filteredItem.CategoryName}
            img={filteredItem.img}
             />
            </div>
           ))}
        </div>
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
