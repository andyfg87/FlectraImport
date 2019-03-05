var express = require('express');
var router = express.Router();
var moment = require('moment');

function TransformDate(value){
  if(value.includes('p')){
    var date = value.split('p');  
    return date[0]+ 'PM';
  }else{
    var date = value.split('a');  
    return date[0]+'AM';
  }   
}

function employeesList  (){
  const XLSX = require('xlsx');
  const workbook = XLSX.readFile('flectra_data/1qnafebrerochecadas.xlsx');
  const sheet_name_list = workbook.SheetNames;
  var  employees = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  employees.forEach((value)=>{
    const time=moment().format(TransformDate(value.Tiempo),'L H:mm:ss a');
    //const time=TransformDate(value.Tiempo);
    value.Tiempo = time;
  });
  

  return employees;
}

// Get All Employees
router.get('/employees', (req,res,next)=>{
    res.json(employeesList());    
});

// Get All Entry of one Employee
router.get('/employee/:id', (req,res,next)=>{   
  var employee = employeesList().filter((item)=>{
     return item.Numero ==  req.params.id;
   });
   res.json(employee);
});

//Get hours work in a mouth
router.get('/employees/:name', (req, res, next)=>{
  var employees = employeesList().filter((item)=>{
     return item.Nombre ==  req.params.name;
  });


  res.json(employees);
});


module.exports = router;