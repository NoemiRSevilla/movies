const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter reviewer name"],
        minlength: [3, "Reviewer must have at least 3 character name"]
    },
    rating: {
        type: Number,
        required: [true, "Rating required"],
        minlength: [1, "1 star is min"],
        maxlength: [5, "Max of 5 stars"]
    },
    content: {
        type: String,
        required: [true, "Required content"],
        minlength: [3, "Content must have at least 3 character name"]
    },
}, {
    timestamps: true
});

mongoose.model("Review", ReviewSchema);

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Movie title required"],
        minlength: [3, "Movie must have at least 3 character"]
    },
    name: {
        type: String,
        required: [true, "Enter reviewer name"],
        minlength: [3, "Reviewer must have at least 3 character name"]
    },
    rating: {
        type: Number,
        required: [true, "Rating required"],
        minlength: [1, "1 star is min"],
        maxlength: [5, "Max of 5 stars"]
    },
    content: {
        type: String,
        required: [true, "Required content"],
        minlength: [3, "Content must have at least 3 character name"]
    },
    Reviews: [ReviewSchema]
}, {
    timestamps: true
});

mongoose.model("Movie", MovieSchema);