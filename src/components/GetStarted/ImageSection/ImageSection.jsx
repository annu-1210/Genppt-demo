function ImageSection() {
  return (
    <div className="flex h-[300px] relative">
      <div className="absolute z-0 top-[160px] left-5" >
        <img src="./image 18.png" alt="bee" />
      </div>
      <div className="absolute top-[68px] left-[380px] z-10">
        <img src="./image 16.png" alt="honey" />
      </div>
      <div className="absolute z-0 top-[165px] right-5" >
        <img src="./image 17.png" alt="img" />
      </div>
    </div>
  );
}

export default ImageSection;
