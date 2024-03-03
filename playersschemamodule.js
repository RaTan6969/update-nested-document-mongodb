// .playersschemamodule.js
  import mongoose from "mongoose";
  const Schema = mongoose.Schema;
  const schemaStructure = new Schema({
            name: { type: String },
              //other necessary field....
            info: { type: Map,of:{ type: Object}} 
        });
  export default mongoose.models.Players ||mongoose.model("Players", schemaStructure);
