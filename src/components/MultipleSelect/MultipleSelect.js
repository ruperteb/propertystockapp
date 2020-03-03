import React from 'react';
import MultSelCard from '../MultSelCard/MultSelCard';
import Button from 'react-bootstrap/Button';
import "./MultipleSelect.css"
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const MultipleSelect = (props) => {

    const multipleSelect_id = props.multipleSelect.map((_id, i) => {
        return _id= props.multipleSelect[i]._id
    })

    const selectedPropertiesData = props.data.filter( i => multipleSelect_id.includes( i._id ) );


    const propertyComponent = selectedPropertiesData.map((_id, i) =>{
       
        return (
           
        <MultSelCard 
       
            i={i} 
            data={selectedPropertiesData[i]} 
            />
            );
        })

        const savePDF = () => {
        var pdfdoc = {
            pageSize: "A4",
            pageOrientation: "landscape",
            pageMargins: [30, 30, 30, 30],
            content: []
          };

          selectedPropertiesData.map((_id, i) =>{

       var premisesData =     selectedPropertiesData[i].Premises.map((_id, j) =>{
       
              return (
               [selectedPropertiesData[i].Premises[j].Floor, "2500", "2200", "1200", "2500", "2500", "2500", "2500", "2500"]
              )
            })

            premisesData.unshift([
              { text: "Floor/Unit", bold: true },
              { text: "Area", bold: true },
              { text: "Type", bold: true },
              { text: "Occupation Date", bold: true },
              { text: "Net Rental", bold: true },
              { text: "Op Costs", bold: true },
              { text: "Other", bold: true },
              { text: "Gross Rental", bold: true },
              { text: "Esc", bold: true }

            ])

            console.log(premisesData)
       
            return (
              
               
                pdfdoc.content.push({
                
      fontSize: 10,
      bold: false,
      margin: [30, 30, 30, 30],
                    table: {
                      headerRows: 1,
                      margin: [30, 30, 30, 30],
                      widths: [ "*", "*", "*", "*", "*" , "*" , "*" , "*" , "*"  ],
                      body: 
                        /* [
                          { text: "Floor/Unit", bold: true },
                          { text: "Area", bold: true },
                          { text: "Type", bold: true },
                          { text: "Occupation Date", bold: true },
                          { text: "Net Rental", bold: true },
                          { text: "Op Costs", bold: true },
                          { text: "Other", bold: true },
                          { text: "Gross Rental", bold: true },
                          { text: "Esc", bold: true }
                          
        
                        ], */
                         /* selectedPropertiesData[i].Premises[0].Floor, "2500", "2200", "1200", "2500", "2500", "2500", "2500", "2500" */
                   /*   selectedPropertiesData[i].Premises.map((_id, j) =>{
       
                          return (
                           [selectedPropertiesData[i].Premises[j].Floor, "2500", "2200", "1200", "2500", "2500", "2500", "2500", "2500"]
                          )
                        }) */
                premisesData
              
                    },
                    layout: {
                      fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                      }
                      
  
                    } 
                  }
           
                ));
            })

        

          pdfMake.createPdf(pdfdoc).download("Summary.pdf");
        }

    return (
<div>
        <div>  
        <Button className="w-5" variant="primary" onClick={() => props.onRouteChange("list")}>
              Back
            </Button>

            <Button className="w-5" variant="primary" onClick={() => props.onRouteChange("multipleselectprint")}>
              Print
            </Button>

            <Button className="w-5" variant="primary" onClick={() => savePDF()}>
              Save PDF
            </Button>
            </div>

    <div className="multsellist">
        <div></div>
                <div className="multselitem centre">
                    {propertyComponent}
                </div>
        <div></div>
             
    </div>

    </div>
    )
}

export default MultipleSelect;