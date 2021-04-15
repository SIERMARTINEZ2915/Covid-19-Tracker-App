import React from "react";
import { Card, CardContent, Typography} from  "@material-ui/core";


function InfoBox ({  title, cases, total  })  {
    return (
        <Card className="infoBox">
             <CardContent>
                   {/*   Title  i.e.   Coronavirus  cases */}
                   <Typography className="infoBox__title"   color='textSecondary'>
                       {title}
                   </Typography>
                    
                    {/*  +120k  Number of cases */}
                    <h2 className="infoBox __cases">
                        {cases}  
                        </h2>

                    {/*  1.2M  Total */}
                    <Typography className="infoBox__total"  color='textSecondary'>
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default InfoBox
