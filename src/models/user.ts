import mongoose from 'mongoose';
const { Schema } = mongoose;
   

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: 'Invalid Email',
      },
    },
  });
  
  const UserModel = mongoose.model('User', userSchema);
  
  export default UserModel;