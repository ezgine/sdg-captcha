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
  isColorsOn = true;
  isError = false;

  readonly questions = [
    { win: 1, text: 'SDG 1: No Poverty' },
    { win: 2, text: 'SDG 2: Zero Hunger' },
    { win: 3, text: 'SDG 3: Good Health and Well-being' },
    { win: 4, text: 'SDG 4: Quality Education' },
    { win: 5, text: 'SDG 5: Gender Equality' },
    { win: 6, text: 'SDG 6: Clean Water and Sanitation' },
    { win: 7, text: 'SDG 7: Affordable and Clean Energy' },
    { win: 8, text: 'SDG 8: Decent Work and Economic Growth' },
    { win: 9, text: 'SDG 9: Industry, Innovation and Infrastructure' },
    { win: 10, text: 'SDG 10: Reduced Inequality' },
    { win: 11, text: 'SDG 11: Sustainable Cities and Communities' },
    { win: 12, text: 'SDG 12: Responsible Consumption and Production' },
    { win: 13, text: 'SDG 13: Climate Action' },
    { win: 14, text: 'SDG 14: Life Below Water' },
    { win: 15, text: 'SDG 15: Life on Land' },
    { win: 16, text: 'SDG 16: Peace and Justice Strong Institutions' },
    { win: 17, text: 'SDG 17: Partnerships to achieve the Goal' }
  ];

  readonly answers = [
    // SDG 1
    [
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.1.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.2.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.3.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.4.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.5.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.A.png'
      },
      {
        win: 1,
        img: './assets/images/targets/MC_Target_1.B.png'
      }
    ],
    // SDG 2
    [
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.1.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.2.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.3.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.4.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.5.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.A.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.B.png'
      },
      {
        win: 2,
        img: './assets/images/targets/MC_Target_2.C.png'
      }
    ],
    // SDG 3
    [
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.1.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.2.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.3.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.4.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.5.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.6.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.7.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.8.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.9.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.A.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.B.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.C.png'
      },
      {
        win: 3,
        img: './assets/images/targets/MC_Target_3.D.png'
      }
    ],
    // SDG 4
    [
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.1.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.2.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.3.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.4.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.5.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.6.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.7.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.A.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.B.png'
      },
      {
        win: 4,
        img: './assets/images/targets/MC_Target_4.C.png'
      }
    ],
    // SDG 5
    [
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.1.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.2.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.3.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.4.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.5.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.6.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.A.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.B.png'
      },
      {
        win: 5,
        img: './assets/images/targets/MC_Target_5.C.png'
      }
    ],
    // SDG 6
    [
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.1.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.2.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.3.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.4.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.5.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.6.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.A.png'
      },
      {
        win: 6,
        img: './assets/images/targets/MC_Target_6.B.png'
      }
    ],
    // SDG 7
    [
      {
        win: 7,
        img: './assets/images/targets/MC_Target_7.1.png'
      },
      {
        win: 7,
        img: './assets/images/targets/MC_Target_7.2.png'
      },
      {
        win: 7,
        img: './assets/images/targets/MC_Target_7.3.png'
      },
      {
        win: 7,
        img: './assets/images/targets/MC_Target_7.A.png'
      },
      {
        win: 7,
        img: './assets/images/targets/MC_Target_7.B.png'
      }
    ],
    // SDG 8
    [
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.1.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.2.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.3.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.4.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.5.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.6.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.7.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.8.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.9.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.10.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.A.png'
      },
      {
        win: 8,
        img: './assets/images/targets/MC_Target_8.B.png'
      }
    ],
    // SDG 9
    [
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.1.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.2.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.3.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.4.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.5.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.A.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.B.png'
      },
      {
        win: 9,
        img: './assets/images/targets/MC_Target_9.C.png'
      }
    ],
    // SDG 10
    [
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.1.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.2.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.3.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.4.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.5.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.6.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.7.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.A.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.B.png'
      },
      {
        win: 10,
        img: './assets/images/targets/MC_Target_10.C.png'
      }
    ],
    // SDG 11
    [
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.1.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.2.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.3.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.4.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.5.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.6.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.7.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.A.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.B.png'
      },
      {
        win: 11,
        img: './assets/images/targets/MC_Target_11.C.png'
      }
    ],
    // SDG 12
    [
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.1.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.2.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.3.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.4.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.5.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.6.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.7.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.8.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.A.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.B.png'
      },
      {
        win: 12,
        img: './assets/images/targets/MC_Target_12.C.png'
      }
    ],
    // SDG 13
    [
      {
        win: 13,
        img: './assets/images/targets/MC_Target_13.1.png'
      },
      {
        win: 13,
        img: './assets/images/targets/MC_Target_13.2.png'
      },
      {
        win: 13,
        img: './assets/images/targets/MC_Target_13.3.png'
      },
      {
        win: 13,
        img: './assets/images/targets/MC_Target_13.A.png'
      },
      {
        win: 13,
        img: './assets/images/targets/MC_Target_13.B.png'
      }
    ],
    // SDG 14
    [
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.1.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.2.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.3.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.4.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.5.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.6.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.7.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.A.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.B.png'
      },
      {
        win: 14,
        img: './assets/images/targets/MC_Target_14.C.png'
      }
    ],
    // SDG 15
    [
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.1.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.2.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.3.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.4.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.5.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.6.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.7.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.8.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.9.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.A.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.B.png'
      },
      {
        win: 15,
        img: './assets/images/targets/MC_Target_15.C.png'
      }
    ],
    // SDG 16
    [
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.1.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.2.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.3.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.4.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.5.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.6.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.7.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.8.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.9.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.10.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.A.png'
      },
      {
        win: 16,
        img: './assets/images/targets/MC_Target_16.B.png'
      }
    ],
    // SDG 17
    [
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.1.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.2.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.3.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.4.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.5.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.6.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.7.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.8.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.9.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.10.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.11.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.12.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.13.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.14.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.15.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.16.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.17.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.18.png'
      },
      {
        win: 17,
        img: './assets/images/targets/MC_Target_17.19.png'
      }
    ]
  ];

  question: any;
  answersSet: any = [];
  selectedAnswers: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.refresh();
  }

  randomizeQuestion(): number {
    const random = Math.floor(Math.random() * this.questions.length);
    this.question = this.questions[random];

    return random;
  }

  randomizeAnswers(questionNo: number): any[] {
    const prepArray = [];
    const answersCount = this.answers[questionNo].length;

    // RANDOMIZE CORRECT ANSWERS
    let seed1 = Math.floor(Math.random() * answersCount);
    let seed2 = Math.floor(Math.random() * answersCount);
    let seed3 = Math.floor(Math.random() * answersCount);
    while (seed1 === seed2 || seed1 === seed3 || seed2 === seed3) {
      seed1 = Math.floor(Math.random() * answersCount);
      seed2 = Math.floor(Math.random() * answersCount);
      seed3 = Math.floor(Math.random() * answersCount);
    }
    prepArray.push(this.answers[questionNo][seed1]);
    prepArray.push(this.answers[questionNo][seed2]);
    prepArray.push(this.answers[questionNo][seed3]);

    // RANDOMIZE INCORRECT ANSWERS
    for (let i = 0; i < 6; i++) {
      const questionsCount = this.questions.length;
      let qSeed1 = Math.floor(Math.random() * questionsCount);
      let qSeed2 = Math.floor(Math.random() * this.answers[qSeed1].length);
      while (
        qSeed1 === questionNo ||
        prepArray[3] === this.answers[qSeed1][qSeed2] ||
        prepArray[4] === this.answers[qSeed1][qSeed2] ||
        prepArray[5] === this.answers[qSeed1][qSeed2] ||
        prepArray[6] === this.answers[qSeed1][qSeed2] ||
        prepArray[7] === this.answers[qSeed1][qSeed2] ||
        prepArray[8] === this.answers[qSeed1][qSeed2]
      ) {
        qSeed1 = Math.floor(Math.random() * questionsCount);
        qSeed2 = Math.floor(Math.random() * this.answers[qSeed1].length);
      }
      prepArray.push(this.answers[qSeed1][qSeed2]);
    }

    // SHUFFLE ARRAY
    this.shuffle(prepArray);
    this.answersSet[0] = [prepArray[0], prepArray[1], prepArray[2]];
    this.answersSet[1] = [prepArray[3], prepArray[4], prepArray[5]];
    this.answersSet[2] = [prepArray[6], prepArray[7], prepArray[8]];

    return this.answersSet;
  }

  refresh(): void {
    this.answersSet = [];
    this.selectedAnswers = [];
    const questionNo = this.randomizeQuestion();
    this.randomizeAnswers(questionNo);
  }

  verify(): void {
    let count = 0;
    for (let i = 0; i < this.selectedAnswers.length; i++) {
      count += this.selectedAnswers[i].win === this.question.win ? 1 : -1;
    }
    if (count === 3) {
      this.isLoading = false;
      this.isDone = true;
      this.isError = false;
    } else {
      this.refresh();
      this.isError = true;
    }
  }

  select(answer): void {
    for (let i = 0; i < this.selectedAnswers.length; i++) {
      if (answer === this.selectedAnswers[i]) {
        this.selectedAnswers.splice(i, 1);
        return;
      }
    }
    this.selectedAnswers.push(answer);
  }

  isSelected(answer): boolean {
    for (let i = 0; i < this.selectedAnswers.length; i++) {
      if (answer === this.selectedAnswers[i]) return true;
    }
    return false;
  }

  openImageSelector(): void {
    this.isError = false
    this.isLoading = true;
    this.refresh();
  }

  // HELPERS
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
