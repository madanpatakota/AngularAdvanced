import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortsentence'
})
export class ShortsentencePipe implements PipeTransform {

  //unknown vs any (TS : 10 mins)
  transform(value: any, inputParam : number ): unknown {

    // sample.txt     test.pdf  test
    // sample

     //File Name
        //  .txt .pdf .xlsx

        //  remove the extensions


    //Wats your plan My plan 
    // console.log(value);
    // console.log(args);
    //value = ;

    return value.substr(0,inputParam);
  }

}


// transformation 

//lowercase --> charcters into lowercase
//uppercase --> uppercase
//date      --> convert into respective date format
