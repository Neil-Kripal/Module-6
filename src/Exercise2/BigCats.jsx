import React from 'react';
import CheetahImage from './Cheetah.jpg';
import CougarImage from './Cougar.jpg';
import JaguarImage from './Jaguar.jpg';
import LeopardImage from './Leopard.jpg';
import LionImage from './Lion.jpg';
import SnowLeopardImage from './Snow Leopard.jpg';
import TigerImage from './Tiger.jpg';

function BigCats(props) {
  const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: CheetahImage },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: CougarImage },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: JaguarImage },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: LeopardImage },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: LionImage },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: SnowLeopardImage },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: TigerImage },
  ];

  const CatItems = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      title={cat.name}
      name={cat.latinName}
      image={cat.image}
    />
  ));

  function SingleCat({ title, name, image }) {
    return (
      <li>
        <h3>{title}</h3>
        <h2>({name})</h2>
        <img src={image} alt={title} style={{ width: '300px', height: '200px' }} />
      </li>
    );
  }

  return (
    <div className="BigCats componentBox">
      <ul className="cat-list">{CatItems}</ul>
    </div>
  );
}

export default BigCats;
