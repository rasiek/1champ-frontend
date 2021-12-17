import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  model = {} as User;

  createUserForm = this.fB.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fB: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.model.username = this.createUserForm.value['username'];
    this.model.password = this.createUserForm.value['password'];

    console.log(this.model);

    this.userService.add(this.model)
      .subscribe(user => console.log(user)
      );

  }

}
