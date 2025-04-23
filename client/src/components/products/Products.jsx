

export const Products = () => {
  return (
    <div className="products-wrapper grid gap-4"
    style={{
      gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))"
    }}>
        <div className="product-item">
           <div className="product-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg" alt="" className="h-28 object-cover w-full border-b"
               />
            </div>
            <div className="product-info">
              <span className="font-bold">Elma</span>
              <span>12tl</span>
            </div>



        </div>
        <div className="product-item">
           <div className="product-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg" alt="" className="h-28 object-cover w-full border-b"
               />
            </div>
            <div className="product-info">
              <span className="font-bold">Elma</span>
              <span>12tl</span>
            </div>



        </div>
    </div>
  )
}

