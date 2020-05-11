
var mainContainer = document.getElementById("myData");
var st=document.getElementById("ST");
//var stidx = document.getElementById("ST").selectedIndex;
//var stext = st.options[stidx].text;
//console.log(mainContainer);
var listOfObjects = [];
var covidObject={};

function getCovidData(){
    fetch('https://api.covid19india.org/state_test_data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                getData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    function getData(data) {
            getAll(data)
            //getAllone(data)
             
    }; 

    function getAll(data){
        var mainContainer = document.getElementById("myData");
        var st=document.getElementById("ST");
        //var stext = st.options[st.selectedIndex].text;
        //console.log(st);
        
        var table = document.createElement('TABLE');
            table.border='1';
            table.align='center';
            table.id='table';
        
        var tableBody = document.createElement('TBODY');
            tableBody.id='tbody'
            table.appendChild(tableBody);
            
        var tr = document.createElement('TR');
             tableBody.appendChild(tr);
            
        var th = document.createElement('TH');
            th.width='75';
            th.appendChild(document.createTextNode("Date"));
            tr.appendChild(th);
                    
        var th = document.createElement('TH');
            th.width='75';
            
            //th.appendChild(document.createTextNode(document.getElementById("ST")));
            th.appendChild(st);
            tr.appendChild(th);   
        var th = document.createElement('TH');
            th.width='75';
            th.appendChild(document.createTextNode("Positive"));
            tr.appendChild(th);

  for (var i=0; i<data.states_tested_data.length; i++){
                        //if data.states_tested_data[i].state="Madhya Pradesh"
                        covidObject[i]={"state":data.states_tested_data[i].state,"date":data.states_tested_data[i].updatedon,"positive":data.states_tested_data[i].positive}
                           var tr = document.createElement('TR');
                        //var tableBody = document.getElementById('tbody');     
                           tableBody.appendChild(tr);
                    
                    
                               var td = document.createElement('TD');
                               td.width='75';
                               td.appendChild(document.createTextNode( data.states_tested_data[i].updatedon));
                               tr.appendChild(td);
        
                             var td = document.createElement('TD');
                               td.width='75';
                               td.appendChild(document.createTextNode(data.states_tested_data[i].state));
                               tr.appendChild(td);
        
                             var td = document.createElement('TD');
                               td.width='75';
                                td.appendChild(document.createTextNode( + data.states_tested_data[i].positive));
                               tr.appendChild(td);
                    
                        }
                    
                    mainContainer.appendChild(table);   
                    }
        
        
 function getAllone(data){
                        var st=document.getElementById("ST");
        var stext = st.options[st.selectedIndex].text;
        console.log(stext);
                        
                        for (var i=0; i<data.states_tested_data.length; i++){
                            
        var stext = st.options[st.selectedIndex].text;
                          if (data.states_tested_data[i].state===stext){
                           
                            //covidObject[i].state=data.states_tested_data[i].state;
                            //covidObject[i].date=data.states_tested_data[i].updatedon;
                            //covidObject[i].positive=data.states_tested_data[i].positive;
                            //covidObject.state=data.states_tested_data[i].state;
                            //covidObject.date=data.states_tested_data[i].updatedon;
                            //covidObject.positive=data.states_tested_data[i].positive;
                            covidObject[i]={"state":data.states_tested_data[i].state,"date":data.states_tested_data[i].updatedon,"positive":data.states_tested_data[i].positive}
                            //console.log(covidObject[i].date);
                            //console.log(data.states_tested_data[i].updatedon)
                           // console.log(covidObject);
                            //listOfObjects.push(covidObject)
                            //console.log(listOfObjects)
                             //console.log(covidObject);   
                            //console.log(listOfObjects[i].state);
                            //console.log(listOfObjects[i].date);
                            //console.log(listOfObjects[i].positive);
                            //break;
                            }
                            
                            }
                            //console.log(covidObject);        
                        }


    
}
 
function getAll1()
    {
    
        //getAllone();    
        var st=document.getElementById("ST");
        var stext = st.options[st.selectedIndex].text;
        //console.log(stext)
        //var mainContainer=document.getElementById("myData");
        //console.log(mainContainer.remove);
        document.getElementById("myData").innerHTML = "";
        
        var mainContainer = document.getElementById("myData");
        var st=document.getElementById("ST");
        //var stext = st.options[st.selectedIndex].text;
        
        var table = document.createElement('TABLE');
            table.border='1';
            table.align='center';
            table.id='table';
        
        var tableBody = document.createElement('TBODY');
            tableBody.id='tbody'
            table.appendChild(tableBody);
            
        var tr = document.createElement('TR');
             tableBody.appendChild(tr);
            
        var th = document.createElement('TH');
            th.width='75';
            th.appendChild(document.createTextNode("Date"));
            tr.appendChild(th);
                      
        var th = document.createElement('TH');
            th.width='75';
            //th.appendChild(st);
            th.appendChild(document.createTextNode("State"));
            tr.appendChild(th);   
            //console.log(listOfObjects.length);
        var th = document.createElement('TH');
            th.width='75';
            th.appendChild(document.createTextNode("Positive"));
            tr.appendChild(th);
            
    mainContainer.appendChild(table);   
    //console.log(covidObject);
    //listOfObjects.push(covidObject)
    //console.log(listOfObjects)
       // for (var i=0; i<covidObject.length; i++){
    
            //listOfObjects[i].push(covidObject)
            //console.log(covidObject[i].keys());
            //console.log(covidObject[i].updatedon);
            //console.log(covidObject[i].positive);
            for (var k in covidObject) {
                //console.log(stext);
                //console.log(covidObject[k].state)
                //console.log(covidObject[k]['positive'] )
                //console.log(covidObject[k]['updatedon'])
                //console.log(stext)
                var covidstate =covidObject[k].state;
                var selectedState=stext;
                //console.log(covidstate);
                //console.log(selectedState);
                if(covidstate===stext){
                    console.log(covidObject[k].state);
             var tr = document.createElement('TR');
               tableBody.appendChild(tr);
        
                   var td = document.createElement('TD');
                   td.width='75';
                   td.appendChild(document.createTextNode(covidObject[k].date));
                   tr.appendChild(td);
                 var td = document.createElement('TD');
                   td.width='75';
                  
                   td.appendChild(document.createTextNode(covidObject[k].state));
                   tr.appendChild(td);
                 var td = document.createElement('TD');
                   td.width='75';
                    td.appendChild(document.createTextNode(covidObject[k].positive));
                   tr.appendChild(td);
                }
              
            }


              
        
            
        
    //}
    
    }

//Storing Fetched Data into global variable

        



 


    