/**
 * @Owner: Rishabh Anand
 * @Desc: Global Components - Tag
 **/

function Tag({ imgSrc, title }: { imgSrc?: string; title: string }) {
  return (
    <div className="flex items-center">
      {imgSrc && <img className="mr-1 w-3 h-3" src={imgSrc} alt={title} />}
      <p>{title}</p>
    </div>
  );
}

export default Tag;
