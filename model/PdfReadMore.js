import mongoose from 'mongoose';

const readMoreSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Books',
    required: true,
  },
  pdfFile: {
    type: String, // Path to the PDF file
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
},{
    timestamps:true,
});

const ReadMore = mongoose.model('ReadMore', readMoreSchema);

export default ReadMore;
