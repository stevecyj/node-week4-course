const mongoose = require('mongoose');
const postsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      required: [true, '貼文 ID 未填寫'],
    },
    tags: [
      {
        type: String,
        required: [true, '貼文標籤 tags 未填寫'],
      },
    ],
    type: {
      type: String,
      enum: ['group', 'person'],
      required: [true, '貼文類型 type 未填寫'],
    },
    image: {
      type: String,
      default: '',
    },
    createAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    updateAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    content: {
      type: String,
      required: [true, 'Content 未填寫'],
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

const posts = mongoose.model('posts', postsSchema);

module.exports = posts;
