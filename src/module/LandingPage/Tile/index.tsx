interface ITile {
  className?: string;
  image: string;
  text: string;
  onTileClick: () => void;
}
const Tile = (props: ITile) => {
  const { className, image, text, onTileClick } = props;
  return (
    <div className={className}>
      <img src={image} alt={image} onClick={onTileClick} />
      <span>
        <a href="">{text}</a>
      </span>
    </div>
  );
};

export default Tile;
