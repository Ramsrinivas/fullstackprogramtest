import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
@Component({
  selector: 'app-carddeck',
  templateUrl: './carddeck.component.html',
  styleUrls: ['./carddeck.component.css']
})
export class CarddeckComponent implements OnInit {
  buttontext: string = "GetSortedData";
  inputCardData: string = "";
  outputData: string = "";
  activelable: boolean = false;
  constructor(private cardService: CardService){ }

  ngOnInit(): void {

  }

  getValue(val: string){
    this.inputCardData = val;
  }

  getSortedData(){
  this.cardService.getSortedData(this.inputCardData).subscribe(result => 
      {
        this.outputData = result;
      });
      this.activelable = true;
  }

  clearData()
  {
    this.inputCardData = "";
    this.outputData = "";
  }
}
