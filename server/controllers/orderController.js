import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const {
      user,
      products,
      shippingInfo,
      subtotal,
      shipping,
      total,
    } = req.body;

    const order = await Order.create({
      user,
      products,
      shippingInfo,
      subtotal,
      shipping,
      total,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
    });

 } catch (error) {
  console.log(error);

  res.status(500).json({
    success: false,
    message: error.message,
    errors: error.errors,
  });
}
};