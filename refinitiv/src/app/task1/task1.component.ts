import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {
  public result: any = null;
  private selectedValue: string = 'isPrime';
  public inputNumber: number = 0;

  public myForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.myForm = builder.group({
      amount: ['', Validators.required],
    });

    this.myForm.valueChanges.subscribe((val) => {
      if (typeof val.amount != 'number') {
        if (val.amount) {
          this.myForm.patchValue({ amount: this.inputNumber });
        }
      } else {
        if (val.amount < 0) {
          this.myForm.patchValue({ amount: 1 });
        } else {
          this.inputNumber = val.amount;
          this.performLogic();
        }
      }
    });

    this.performLogic();
  }

  ngOnInit(): void {}

  public onDropdownChange(event) {
    let selectedChoice = event.target.value;
    this.selectedValue = selectedChoice;
    this.performLogic();
  }

  public performLogic() {
    switch (this.selectedValue) {
      case 'isPrime':
        this.result = this.isPrime(this.inputNumber);
        break;

      case 'isFibonacci':
        this.result = this.isFabonacci(this.inputNumber);
        break;

      default:
        break;
    }
  }

  isPrime(num) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }

  isFabonacci(n) {
    if (n === 1 || n === 0) {
      return true;
    }
    let firstPrevNumber = n - 1;
    let secondPrevNumber = n - 2;
    return firstPrevNumber + secondPrevNumber === n;
  }
}
