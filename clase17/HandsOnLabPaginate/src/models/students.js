import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';//llamo a la dependencia

const studentCollection = "students";
const studentSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    grade:Number,
    group:String,
    courses:{
        type:Array,
        default:[]
    }
})
//uso el plugin
studentSchema.plugin(mongoosePaginate);
const studentsModel = mongoose.model(studentCollection,studentSchema);
export default studentsModel;