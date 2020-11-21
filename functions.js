export const getFloatVal = (price) => {
  const floatValue = price.match(/[+-]?\d+(\.\d+)?/g)[0]
  console.warn(floatValue)
  return floatValue !== null ? parseFloat(parseFloat(floatValue).toFixed(2)) : ''
}

export const addFirstProduct = (product) => {
  const productPrice = getFloatVal(product.price)
  const newCart = {
    products: [],
    totalProductsCount: 1,
    totalProductPrice: productPrice
  }
  const newProduct = createNewProduct(product, productPrice, 1)
  newCart.products.push(newProduct)

  localStorage.setItem('cart', JSON.stringify(newCart))
  return newCart
}

export const createNewProduct = (product, productPrice, qty) => {
  return {
    productId: product.productId,
    image: product.image,
    name: product.name,
    price: productPrice,
    qty,
    totalPrice: parseFloat((productPrice * qty).toFixed(2))
  }
}
