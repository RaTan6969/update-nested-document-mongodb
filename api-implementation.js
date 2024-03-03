// Script File(Api Implementation)
import { NextResponse } from "next/server";
import Players from "./playersschemamodule.js";
import mongoose from "mongoose";
import { ConnectMongoDB } from "./ConnectMongoDB";// The db connection 
const ObjectId = mongoose.Types.ObjectId
export async function POST(request) {
    await ConnectMongoDB();
    const playerId ="6579bc2a0629d0fc6892d7cf"
    const infoField = "routine"
    const routineId= "65e3e33baa663fc7b723f003"
    const subRoutineId ="65decbc0fbb14d315faec054"
    try{
const UpdatedPlayersInfo  = await Players.findOneAndUpdate(
    {
      _id: new ObjectId(playerId),
      [`info.${infoField}`]:{
        $elemMatch: { 
          _id:new ObjectId(routineId),
          subRoutines: {
            $elemMatch :{
                subroutineid: new ObjectId(subRoutineId)
            }
          }
         }
      }
    },
    {
     $set:{
       [`info.${infoField}.$.routine_heading`]  : 'This is update  routine heading',// ? this work
        // ! I want to Updated subRoutine info here which subRoutine's subroutineid matched with subRoutineId 
        //*Like subRoutine date , tittle etc..
     },
    })
      return NextResponse.json(
        {  UpdatedPlayersInfo ,message:"Update has been completed successfully" },
        {
          status: 200,
        }
      );
    }catch{
        return NextResponse.json(
            {message:"something went wrong during update please try again later" },
            {
              status:500,
            }
          );
    }
}
