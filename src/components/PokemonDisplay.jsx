import numImage from "../assets/no.png";

export default ({ pokemon, pokemonId, speciesLink }) => {
  const allCapsName = pokemon.name.toUpperCase();

  let types = pokemon.types.map((key) => key.type.name.toUpperCase());
  types = types.toString();
  types = types.split(",");
  types = types.join(", ");

  console.log(speciesLink.flavor_text_entries);
  let cleanDescription = speciesLink.flavor_text_entries[0].flavor_text.replace(
    /(\r\n|\n|\r|\f)/gm,
    " "
  );
  cleanDescription = cleanDescription.replace(". ", `.  \xa0`);

  return (
    <div className="display-box">
      <div className="display-box-shadow" ></div>
      <div className="d-flex">
        <div className="sprite-container">
          <img
            src={`${pokemon.sprites.versions["generation-i"]["red-blue"].front_default}`}
            alt={`${pokemon.name} photo`}
            className="pokemon-sprite"
          />
          <div className="index d-flex justify-content-between col-11">
            <img src={numImage} alt="no image" className="no-image" />
            <p>{pokemonId}</p>
          </div>
        </div>
        <div className="top-right-info">
          <p>{allCapsName}</p>
          <p id="types">{types}</p>
          <div className="height d-flex align-items-center gap-5">
            <p>HT</p>
            <div className="d-flex gap-2">
              <p>{pokemon.height}'</p>
              <p>00'</p>
            </div>
          </div>
          <div className="height d-flex align-items-center gap-5">
            <p>WT</p>
            <div className="d-flex gap-2">
              <p>{pokemon.weight}.0</p>
              <p>lb</p>
            </div>
          </div>
        </div>
        <div className="middle-line"></div>
        <div className="midde-square"></div>
        <div className="boxes">
          <div className="box9 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box10 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box11 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box12 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box13 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box14 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box15 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
          <div className="box16 tiny-box">
            <div className="tiny-box-top-horizontal"></div>
            <div className="tiny-box-bottom-horizontal"></div>
          </div>
        </div>
        <p className="description">{cleanDescription}</p>
      </div>
    </div>
  );
};
