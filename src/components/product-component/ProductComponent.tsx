import "./ProductComponent.css"
import {FC} from "react";
import {IProduct} from "../../model/ProductModel.ts";

type PropsType={
    product:IProduct
}
export const ProductComponent:FC<PropsType> = ({product}) => {
    return (
        <div>
            <div className="head">
                <h3>Product: {product.id}</h3>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>
            <div className="main">
                <div className="general">
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price} Discount: {product.discountPercentage}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    {product.tags.map(tag => (
                        <p key={tag}>{tag}</p>
                    ))}
                </div>
                <div className="details">
                    <p>Brand: {product.brand}</p>
                    <p>Sku: {product.sku}</p>
                    <p>Weight: {product.weight}</p>
                    <div className="dimensions">
                        <h3>Dimensions:</h3>
                        <p>Width: {product.dimensions.width}</p>
                        <p>Height: {product.dimensions.height}</p>
                        <p>Depth: {product.dimensions.depth}</p>
                    </div>
                </div>
                <div className="delivery">
                    <h3>Delivery</h3>
                    <p>{product.warrantyInformation}</p>
                    <p>{product.shippingInformation}</p>
                    <p>{product.availabilityStatus}</p>
                </div>
                <div className="reviews">
                    <h3>Reviews:</h3>
                    {product.reviews.map((review) => (
                        <div className="review" key={review.reviewerEmail + review.date}>
                            <p>Rating: {review.rating}</p>
                            <p>Comment: {review.comment}</p>
                            <p>Date: {review.date}</p>
                            <p>Reviewer: {review.reviewerName}</p>
                            <p>Email: {review.reviewerEmail}</p>
                        </div>
                    ))}
                </div>
                <div className="additional-info">
                    <h3>Additional info</h3>
                    <p>{product.returnPolicy}</p>
                    <p>Minimum order quantit: {product.minimumOrderQuantity}</p>
                    <div className="meta">
                        <h3>Meta:</h3>
                        <p>Created at: {product.meta.createdAt}</p>
                        <p>Updated at: {product.meta.updatedAt}</p>
                        <p>Barcode: {product.meta.barcode}</p>
                        <img src={product.meta.qrCode} alt={product.title}/>
                    </div>
                    <div className="images">{product.images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt={product.title}
                        />
                    ))}
                    </div>
                    <img className="thumbnail" src={product.thumbnail} alt={product.title}/>
                </div>
            </div>
        </div>
    );
};

