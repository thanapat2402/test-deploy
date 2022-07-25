import { Component, OnInit } from '@angular/core';
import { TotalQueue } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-web-customer',
  templateUrl: './web-customer.component.html',
  styleUrls: ['./web-customer.component.css'],
})
export class WebCustomerComponent implements OnInit {
  totalQueue: TotalQueue = {
    AmountQueueA: '',
    AmountQueueB: '',
    AmountQueueC: '',
    AmountQueueD: '',
    CurrentqueueA: '',
    CurrentqueueB: '',
    CurrentqueueC: '',
    CurrentqueueD: '',
  };
  constructor(private service: CustomerService) {}
  getTotalQueue() {
    this.service.getAmountQueue().subscribe((result) => {
      console.log(result.data);
      this.totalQueue = result.data;
    });
  }
  ngOnInit(): void {
    this.getTotalQueue();
  }
}
