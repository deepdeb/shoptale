export default function ProductImage({ product }) {
    return (
        <div className="relative overflow-hidden">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-60 object-contain"
            />
        </div>
    )
}