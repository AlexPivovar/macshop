import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {SignUpService} from "../../../service/sign-up.service";
import {element} from "protractor";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  confirmPass: string = "";
  // regexp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  regexp = new RegExp("^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$");
  isUsernameAvailable: boolean = this.checkUsername();
  isEmailAvailable: boolean = this.checkEmail();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private signupService: SignUpService) {
  }

  ngOnInit() {
  }

  createUser(): void {
    if (this.checkUsername()) {
      alert("Данное имя пользователя уже занято");
    } else if (this.checkEmail()) {
      alert("Пользователь с таким адрессом электронной почты уже зарегестрирован");
    } else {
      this.signupService.signup(this.user)
        .subscribe(() => {
          console.log('Create user');
        });

      this.router.navigate(['/signin']);
    }
  }

  public confirmUsername(): boolean {
    if (this.user.username !== "") {
      if (this.user.username.length > 3) {
        return true;
      }
    }
  }

  public checkUsername(): boolean {
    if (this.user.username.length > 0) {
      this.isUsernameAvailable = this.signupService.checkUsername(this.user.username);

      return this.isUsernameAvailable;
    }

    return true;
  }

  public confirmFirstname(): boolean {
    if (this.user.firstName !== "") {
      if (this.user.firstName.length > 1) {
        return true;
      }
    }
  }

  public confirmLastname(): boolean {
    if (this.user.lastName !== "") {
      if (this.user.lastName.length > 1) {
        return true;
      }
    }
  }

  public confirmEmail(): boolean {
    if (this.user.email !== "") {
      if (this.regexp.test(this.user.email)) {
        return true;
      }
    }
  }

  public checkEmail(): boolean {
    if (this.user.email.length > 0) {
      this.isEmailAvailable = this.signupService.checkEmail(this.user.email);

      return this.isEmailAvailable;
    }

    return true;
  }

  public confirmPassword(): boolean {
    if (this.user.password !== "") {
      if (this.user.password.length > 7) {
        return true;
      }
    }
  }

  public equalsPassword(): boolean {
    if (this.user.password !== "" && this.confirmPass !== "") {
      return this.user.password === this.confirmPass;
    }
  }

  public confirmForm(): boolean {
    if (this.equalsPassword()) {
      return this.confirmUsername() &&
        this.confirmFirstname() &&
        this.confirmLastname() &&
        this.confirmEmail() &&
        this.confirmPassword() &&
        this.equalsPassword();
    }
  }
}
