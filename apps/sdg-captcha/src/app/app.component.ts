import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sdg-captcha-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;
  isDone = false;
  isColorsOn = false;

  readonly questions = [
    'SDG 1: No Poverty',
    'SDG 2: Zero Hunger',
    'SDG 3: Good Health and Well-being',
    'SDG 4: Quality Education',
    'SDG 5: Gender Equality',
    'SDG 6: Clean Water and Sanitation',
    'SDG 7: Affordable and Clean Energy',
    'SDG 8: Decent Work and Economic Growth',
    'SDG 9: Industry, Innovation and Infrastructure',
    'SDG 10: Reduced Inequality',
    'SDG 11: Sustainable Cities and Communities',
    'SDG 12: Responsible Consumption and Production',
    'SDG 13: Climate Action',
    'SDG 14: Life Below Water',
    'SDG 15: Life on Land',
    'SDG 16: Peace and Justice Strong Institutions',
    'SDG 17: Partnerships to achieve the Goal'
  ];

  readonly answers = [
    // SDG 1
    { isSelected: false, img: './assets/images/targets/MC_Target_1.1.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.2.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.3.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.4.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.5.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.A.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_1.B.png' },
    // SDG 2
    { isSelected: false, img: './assets/images/targets/MC_Target_2.1.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.2.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.3.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.4.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.5.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.A.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.B.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_2.C.png' },
    // SDG 3
    { isSelected: false, img: './assets/images/targets/MC_Target_3.1.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.2.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.3.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.4.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.5.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.6.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.7.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.8.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.9.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.A.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.B.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.C.png' },
    { isSelected: false, img: './assets/images/targets/MC_Target_3.D.png' }
  ];

  question: string;
  answers1 = [];
  answers2 = [];
  answers3 = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.refresh();
  }

  randomizeQuestion(): void {
    const random = Math.ceil(Math.random() * this.questions.length);
    this.question = this.questions[random - 1];
  }

  randomizeAnswers(): void {
    const random = [
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length),
      Math.ceil(Math.random() * this.answers.length)
    ];
    this.answers1 = [
      this.answers[random[0] - 1],
      this.answers[random[1] - 1],
      this.answers[random[2] - 1]
    ];
    this.answers2 = [
      this.answers[random[3] - 1],
      this.answers[random[4] - 1],
      this.answers[random[5] - 1]
    ];
    this.answers3 = [
      this.answers[random[6] - 1],
      this.answers[random[7] - 1],
      this.answers[random[8] - 1]
    ];
  }

  refresh(): void {
    this.randomizeQuestion();
    this.randomizeAnswers();
  }

  verify(): void {
    this.isLoading = false;
    this.isDone = true;
  }
}
