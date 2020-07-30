const userSchema = new Schema ({
    name: String,
    lastNmame: String,
    age: Number, 
    userName: { type: String, required: true },
    email: { type: String, match: /^@/, required: true, unique: true },
    password: { type: String, minlength: 6, required: true },
    imgProfile: { type: String, default: '#' },
    instructor: { type: Boolean, default: false },
    activities: {
        creatAct: { type: Schema.Types.ObjectId, ref: 'CreatAct' },
        reservAct: { type: Schema.Types.ObjectId, ref: 'CreatAct' }
    }
    
});