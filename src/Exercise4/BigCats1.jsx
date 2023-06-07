import React, { useState } from 'react';
import CheetahImage from './Cheetah.jpg';
import CougarImage from './Cougar.jpg';
import JaguarImage from './Jaguar.jpg';
import LeopardImage from './Leopard.jpg';
import LionImage from './Lion.jpg';
import SnowLeopardImage from './Snow Leopard.jpg';
import TigerImage from './Tiger.jpg';
import AddCatForm from '../Exercise5/AddCatForm';

function BigCats1(props) {
  const [cats, setCats] = useState([
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', family:'Acinonyx', image: CheetahImage },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', family:'Puma', image: CougarImage },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', family:'Panthera', image: JaguarImage },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', family:'Panthera', image: LeopardImage },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', family:'Panthera', image: LionImage },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', family:'Panthera', image: SnowLeopardImage },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', family:'Panthera', image: TigerImage },
  ]);

  const [filteredCats, setFilteredCats] = useState(cats);
  const [selectedFamily, setSelectedFamily] = useState('');

  const sortAlphabetically = () => {
    const sortedCats = [...filteredCats].sort((a,b) => a.name.localeCompare(b.name));
    setFilteredCats(sortedCats);
  };

  const reverseList = () => {
    const reversedCats = [...filteredCats].reverse();
    setFilteredCats(reversedCats);
  }

  const filterByFamily = () => {
    if (selectedFamily) {
      const filteredByFamily = cats.filter(cat => cat.family === selectedFamily);
      setFilteredCats(filteredByFamily);
    } else {
      setFilteredCats(cats);
    }
  };

  const resetList = () => {
    setFilteredCats(cats);
    setSelectedFamily('');
  };

  const handleFamilyChange = (event) => {
    setSelectedFamily(event.target.value);
  }

  const CatItems = filteredCats.map((cat) => (
    <SingleCat
      key={cat.id}
      title={cat.name}
      name={cat.latinName}
      family={cat.family}
      image={cat.image}
    />
  ));

  function SingleCat({ title, name, family, image }) {
    return (
      <li>
        <h3>{title}</h3>
        <h2>({name})</h2>
        <p>{family}</p>
        <img src={image} alt={title} style={{ width: '300px', height: '200px' }} />
      </li>
    );
  }

  const familyOptions = [...new Set(cats.map(cat => cat.family))].map((family, index) =>(
    <option key={index} value={family}>{family}</option>
  ));

  return (
    <div className="BigCats1 componentBox">
      <div>
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={reverseList}>Reverse List</button>
        <select value={selectedFamily} onChange={handleFamilyChange}>
          <option value="">All Families</option>
          {familyOptions}
        </select>
        <button onClick={filterByFamily}>Filter</button>
        <button onClick={resetList}>Reset</button>
      </div>
      <ul className="cat-list">{CatItems}</ul>
    </div>
  );
}

export default BigCats1;
