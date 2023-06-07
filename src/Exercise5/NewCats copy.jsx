import React, { useState } from 'react';
import CheetahImage from './Cheetah.jpg';
import CougarImage from './Cougar.jpg';
import JaguarImage from './Jaguar.jpg';
import LeopardImage from './Leopard.jpg';
import LionImage from './Lion.jpg';
import SnowLeopardImage from './SnowLeopard.jpg';
import TigerImage from './Tiger.jpg';
import AddCatForm from './AddCatForm';

function NewCats(props) {
  const [cats, setCats] = useState([
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', family:'Acinonyx', image: CheetahImage },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', family:'Puma', image: CougarImage },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', family:'Panthera', image: JaguarImage },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', family:'Panthera', image: LeopardImage },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', family:'Panthera', image: LionImage },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', family:'Panthera', image: SnowLeopardImage },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', family:'Panthera', image: TigerImage },
  ]);

  const handleAddCat = (newCat) => {
    setCats((prevCats) => [...prevCats, newCat]);
  };

  const handleDeleteCat = (id) => {
    setCats((prevCats) => prevCats.filter((cat) => cat.id !== id));
  };

  const CatItems = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      cat={cat}
      onDelete={handleDeleteCat}
    />
  ));

  function SingleCat({ cat, onDelete }) {
    const { id, name, latinName, family, image } = cat;

    const handleDelete = () => {
      onDelete(id);
    };

    return (
      <li>
        <h3>{name}</h3>
        <h2>({latinName})</h2>
        <p>{family}</p>
        <img src={image} alt={name} style={{ width: '300px', height: '200px' }} />
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
  }

  return (
    <div className="NewCats componentBox">
      <AddCatForm onAddCat={handleAddCat} />
      <ul className="cat-list">{CatItems}</ul>
    </div>
  );
}

export default NewCats;
