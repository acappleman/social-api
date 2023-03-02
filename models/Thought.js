const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    virtuals: {
      reactionCount: {
        get() {
          return this.reactions.length;
        }
      }
    },
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
