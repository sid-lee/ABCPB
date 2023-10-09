import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const bookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    selfLink: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    stockQty: {
        type: Number,
        required: true,
        default: 0,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    reviewsCount:{
        type: Number,
        required: true,
        default: 0,
    },
    publisher: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: String,
        required: true,
    },
    google_id: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
  },{
    timestamps: true,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;