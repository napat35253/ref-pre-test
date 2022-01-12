import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  public dataUrl: string = 'https://api.publicapis.org/categories'
  public data : [String]
  public filteredData : any
  public filteredText: string = null

  constructor(private http: HttpClient) { 
    this.http.get(this.dataUrl).subscribe(
      (val: any) => {
        this.data = val
        this.filteredData = this.data
      }
    )
  }

  public onFilterChange(event){
    console.log(this.filteredText)
    this.filteredData = this.data.filter((val)=> val.toLowerCase().includes(this.filteredText.toLowerCase()))
  }

  ngOnInit(): void {
  }

}
