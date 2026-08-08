import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    products: [
      {
        productId: Number,
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],

    shippingInfo: {
      fullName: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      country: String,
      zipCode: String,
    },

    subtotal: Number,
    shipping: Number,
    total: Number,

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);