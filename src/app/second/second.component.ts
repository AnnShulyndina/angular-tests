import {Component, OnInit} from '@angular/core';
import {FirstDependencyService} from "../services/first-dependancy.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  form: FormGroup;
  name: FormControl;

  constructor(private fd: FirstDependencyService,
              private fb: FormBuilder) {
    this.name = new FormControl('');
    this.form = this.fb.group({
      name: this.name

    })
  }

  ngOnInit(): void {
    this.fd.startSecond()
  }

}
