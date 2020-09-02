import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ca-rating',
  template: `

    <div class='starswrapper' [style.width.px]='width' >
      <div class='stars' title='{{value}}/{{max}}' >
        <div class='star' *ngFor='let star of stars' >
          <i  class="fa {{star}}"></i>
          
        </div>
        {{msg}}
      </div>
    </div>
  `,
  styles: [
    `
      
      .starswrapper{              
        overflow: hidden;
        
      }

      .stars{
        box-sizing:border-box;

        padding:0px;
        width:120px;
        min-width:120px;
        max-width:120px;
      }

      .star{
        display:inline;
        color:gold;        
        font-size:24px;
        margin-left:0px;
        margin-right:0px;
        padding:0px;
      }
    `
  ]
})
export class CaRatingComponent implements OnInit {
  
  @Input() public value=2.42;  //@Input suggests that this component will receive an input
  @Input() public max= 5; //what is the max allowed rating
  public stars:string [];
  private fullStar='fa-star';
  private halfStar='fa-star-half';
  public width=120;
  public maxWidth=110;
  public msg:string=''
  
  constructor() { 
    


  }

  ngOnInit(): void {
    this.stars=[];
    for(let i=0;i<5;i++)
      this.stars.push(this.fullStar);
  
    this.width= this.maxWidth* this.value/this.max;


    switch(this.stars.length){
      case 1:this.msg="Don’t read if you are paid to.";
            break;
      case 2:this.msg="Expensive at cost 0 ";
             break;
      case 3:this.msg="Skip it, Go find some better read "
            break;
      case 4:this.msg="Average. Read if you must! "
            break;
      case 5:this.msg="Average. You may like it "
            break;
      case 6:this.msg="Good. Read it if you have time "
            break;
      case 7:this.msg="Good book. You won't be dispapointed"
            break;
      case 8:this.msg="It’s a Very Good book to read "
          break;
      case 9:this.msg="Wonderful Book. Should Read "
            break;
    
      case 10:this.msg="Excellent. Must Read"
            break;
    
    
    }
  }

  

}
