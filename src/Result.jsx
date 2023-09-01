import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            images={pet.images}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

// {...pet}: quite implicit, if the result of the api changes things may break
// instead explicitly extracting out property values is more safe

// But there may be cases where spreading objects can be useful, eg.: when additional property needs
// to be added to the object without affecting the old stuffs present

export default Results;
