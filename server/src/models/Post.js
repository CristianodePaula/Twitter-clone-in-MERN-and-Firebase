import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
    },
    image: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
