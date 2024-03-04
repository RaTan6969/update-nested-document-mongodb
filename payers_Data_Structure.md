//Players Data Structure in the database like this
[
    {
        "_id": {
            "$oid": "6579bc2a0629d0fc6892d7cf"
          },
          info:{
            routine:[
                // each routine
                {
                    "_id": {
                        "$oid": "65e3e33baa663fc7b723f003"
                      },
                      routine_heading:"This is routine_heading",
                      //some other fields
                      subRoutines:[
                        //each subRoutine
                        {
                            "subroutineid": {
                                "$oid": "65e3e33baa663fc7b723f003"
                              },
                              "date": {
                                "$date": "2001-01-31T18:00:00.000Z"
                              },
                              tittle:"this is subRoutine tittle"
                      //some other fields

                        }
                      ]

                }
            ]
          }
    },
    // Player Players
]
