export const getFloatVal = (price) => {
  const floatValue = price.match(/[+-]?\d+(\.\d+)?/g)[0]
  console.warn(floatValue)
  return floatValue !== null ? parseFloat(parseFloat(floatValue).toFixed(2)) : ''
}

// if cart is empty then create new cart and first product

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

// if cart is not empty then check if product already exists..if product exists update related field else add new product to cart

export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {
  const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty)

  const addPriceAndQty = (total, item) => {
    total.totalPrice += item.totalPrice
    total.qty += item.qty
    return total
  }

  const total = updatedProducts.reduce(addPriceAndQty, { totalPrice: 0, qty: 0 })
  console.log(total)
  const updatedCart = {
    products: updatedProducts,
    totalProductsCount: parseInt(total.qty),
    totalProductPrice: parseFloat(total.totalPrice)
  }
  console.log(updatedCart)
  localStorage.setItem('cart', JSON.stringify(updatedCart))

  return updatedCart
}

// Get updated product array
// updated the product if it exists
// add new product to existing cart

export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty) => {
  const poductExistsIndex = isProductInCart(existingProductsInCart, product.productId)
  // if product exists (index found), update productQty, totalPrice
  if (poductExistsIndex > -1) {
    const updatedProducts = existingProductsInCart
    const updatedProduct = updatedProducts[poductExistsIndex]

    updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded)
    updatedProduct.totalPrice = parseFloat(parseFloat(updatedProduct.price * updatedProduct.qty).toFixed(2))

    return updatedProducts
  } else { // product not found, push new product to existing products array
    const productPrice = getFloatVal(product.price)
    const newProduct = createNewProduct(product, productPrice, qtyToBeAdded)

    existingProductsInCart.push(newProduct)

    return existingProductsInCart
  }
}

export const isProductInCart = (existingProductsInCart, productId) => {
  const itemThatExists = item => item.productId === productId
  return existingProductsInCart.findIndex(itemThatExists)
}

// export const removeItemFromCart = (productId) = {

// }
