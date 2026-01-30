import { stringify } from './../../node_modules/postcss/lib/postcss.d';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '0130';

  showAlert(msg: string) {
    alert(msg);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let date = new Date();
    // console.log(date);

    // let d=new Date().toISOString();
    // console.log('d=',d);

    // console.log(date.getFullYear());
    // console.log(date.getMonth()+1);
    // console.log(date.getDate());
    // console.log(date.getHours());
    // console.log(date.getMonth());
    // console.log(date.getMinutes());
    // console.log(date.getSeconds());
    // console.log(date.getDay());

    // let sDate = new Date('2024/11/29');
    // let eDate = new Date('2024/11/28');
    // console.log(sDate.getTime()>eDate.getTime());

    // let jsonData = {
    //   name:'Allen',
    //   age:12,
    //   sex:'M'
    // };

    // let newJsonData={
    //   userName: jsonData.name,
    //   userAge: jsonData.age,
    //   userSex: jsonData.sex
    // };

    // console.log(newJsonData);
    let Answer1 = 200 - 50 - 3 * 40;
    console.log(Answer1);

    let answer2 = 5000 - 0.9 * (10 * (50 + 40));
    console.log(answer2);

    // question3

    let arrayData = [
      {
        userName: 'Allen',
        payMoney: 500,
      },
      {
        userName: 'Ben',
        payMoney: 20,
      },
      {
        userName: 'Eric',
        payMoney: 120,
      },
    ];

    for (let index = 0; index < arrayData.length; index++) {
      const element = arrayData[index];
      if (element.payMoney >= 200) {
        console.log(element.userName, 'is VIP');
      } else {
        console.log(element.userName, "isn't VIP");
      }
    }

    //  question4
    let weight=100;
    let height=100;

    let BMI=weight/((height/100)*(height/100));

    if (18.5 <= BMI && BMI<= 24){
      console.log("Normal")
    }
    else{
      if (BMI>24)
        console.log("too high")
      else{
      if(BMI<18.5)
        console.log("too small")
    }
    }


  }
}
