import {Inject, Injectable} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {NavigationEnd, Router , Scroll , ActivatedRoute} from '@angular/router';
import {LogoServiceService} from './logo-service.service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  public modal: boolean = false;
  public message: boolean = false;
  public logotypes: any;
  public logo: any;
  public imgIcon: any = false;
  public img: any;
  public error: any = false;
  public users: any = [];
  public ip: any;
  public formControlLogin: FormControl;
  public formControlPassword: FormControl;
  public formControlMotor: FormControl;
  public formControlAccelereation: FormControl;
  public formControlHorsePower: FormControl;
  public login: string;
  public password: string;
  public user: any;
  public themeGrey: boolean = false;
  public loading = false;
  public cars: any = [];
  public model: any = [];
  public mark: any;
  public curCar: any;
  public currentModel: any;
  public gear: any;
  public currentGear: any;
  public carCurrent: any;
  public showCars = false;
  public objectCar: any;
  public motors: any;
  public motor: any;
  public acceleration: any;
  public horsePower: any;
  public car1: any;
  public car2: any;
  public selectedCar: any;
  public userExist: any;
  public carTest1: any;
  public carTest2: any;

  public date: Date = new Date();

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    public svcLogo: LogoServiceService
  ) {

  }

  public enterDataMotor(): void {
    this.motors = [
      {motor: 1.0},
      {motor: 1.1},
      {motor: 1.2},
      {motor: 1.3},
      {motor: 1.4},
      {motor: 1.5},
      {motor: 1.6},
      {motor: 1.7},
      {motor: 1.8},
      {motor: 1.9},
      {motor: 2.0},
      {motor: 2.1},
      {motor: 2.2},
      {motor: 2.3},
      {motor: 2.4},
      {motor: 2.5},
      {motor: 2.6},
      {motor: 2.7},
      {motor: 2.8},
      {motor: 2.9},
      {motor: 3.0},
      {motor: 3.1},
      {motor: 3.2},
      {motor: 3.3},
      {motor: 3.4},
      {motor: 3.5},
      {motor: 3.6},
      {motor: 3.7},
      {motor: 3.8},
      {motor: 3.9},
      {motor: 4.0},
      {motor: 4.1},
      {motor: 4.2},
      {motor: 4.3},
      {motor: 4.4},
      {motor: 4.5},
      {motor: 4.6},
      {motor: 4.7},
      {motor: 4.8},
      {motor: 4.9},
      {motor: 5.0}
    ];
    this.formControlMotor = new FormControl();
    this.formControlMotor.valueChanges.subscribe((changes) => {
      this.motor = changes;
    });

    this.formControlAccelereation = new FormControl();
    this.formControlAccelereation.valueChanges.subscribe((changes) => {
      this.acceleration = changes;
    });

    this.formControlHorsePower = new FormControl();
    this.formControlHorsePower.valueChanges.subscribe((changes) => {
      this.horsePower = changes;
    });
  }

  public getUser(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
    if (!user) {
      this.user = false;
    }
  }

  public getUsers(): void {
    // this.http.get('http://localhost:3000/api/users').subscribe( (data) => {
    //   this.users = data;
    //   console.log(this.users);
    // });
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      this.users = users;
    }
  }

  public enterData(): void {
    this.formControlLogin = new FormControl('', [Validators.minLength(8) , Validators.email]);
    this.formControlLogin.valueChanges.subscribe((changes) => {
      this.login = changes;
    });
    this.formControlPassword = new FormControl('', [Validators.minLength(8), Validators.maxLength(16)]);
    this.formControlPassword.valueChanges.subscribe((changes) => {
      this.password = changes;
    });
  }

  public authSent(): void {
    this.users.some((user) => {
      if (this.login === user.email) {
        this.userExist = true;
        alert('User already exist');
        console.log('User already exist');
        return;
      }
      if (this.login === user.email){
        this.userExist = false;
      }
    });

    if (this.userExist) {
      window.location.reload();
      return;
    }

    if (this.login === ''){
      alert('Fill in the input field');
      return;
    }

    if (this.formControlLogin.invalid || this.formControlPassword.invalid) {
      console.log('Form invalid');
      alert('Form invalid');
      return;
    }
    let users = JSON.parse(localStorage.getItem('users'));
    if (!users) {
      users = [];
    }
    const user = {
      email: this.login,
      password: this.password,
      id: Math.random(),
      ip: this.ip,
      img: this.img,
      likeCars: [],
      timeAuth: this.date,
      messages: [ {
        name: 'Admin',
        message: 'Hello! If you like my program, write me something.'
      }]
    };
    // document.cookie = `${user.email}=${user.password}`;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/about', this.login, this.password]);
    this.modal = true;
    // const cookie = document.cookie;
  }

  public sendlogData(): void {
    this.users.forEach((user) => {
      if (this.login === user.email && this.password === user.password) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['/main', this.login, this.password]);
        this.modal = true;
      }
      if (this.login !== user.email && this.password !== user.password) {
        this.error = true;
        return;
      }
    });
  }

  public saveChangesOfUser(): void {
    this.users.forEach((curEditUser) => {
      if (this.user.email === curEditUser.email && this.user.password === curEditUser.password) {
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    });
  }

  public removeUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('car1');
    localStorage.removeItem('car2');
    this.user = false;
    this.router.navigate(['/login']);
  }

  public getAuto(): void {
    this.http.get('https://api.auto.ria.com/categories/1/marks').subscribe((cars: any = []) => {
      this.cars = cars;
    });
    this.loading = true;
  }

  public currentCar(car): void {
    window.scrollTo(0, 0);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    this.cars.forEach((currentCar) => {
      currentCar.logo = '';
      if (car.value === currentCar.value) {
        this.selectedCar = currentCar;
        this.carCurrent = currentCar;
        this.curCar = currentCar.value;
      }
    });
    this.http.get(`https://api.auto.ria.com/categories/1/marks/${this.curCar}/models`).subscribe((model: any = []) => {
      console.log(model);
      this.model = model;
    });
  }

  public modelCar(model): void {
    window.scrollTo(0, 0);
    this.model.forEach((curModel) => {
      if (curModel.value === model.value) {
        this.currentModel = curModel;
      }
    });
    this.getGearBoxes();
  }

  public getGearBoxes(): void {
    this.http.get('https://api.auto.ria.com/categories/2/gearboxes').subscribe((gear) => {
      this.gear = gear;
    });
  }

  public getGear(gears): void {
    this.gear.forEach((curGear) => {
      if (curGear === gears) {
        this.currentGear = curGear;
      }
    });
    this.router.navigate(['/current-car']);
  }

  public getMotorsOfCars(): void {
    if (this.motor == null || this.acceleration == null || this.horsePower == null){
      alert('You need enter data');
      return;
    }

    this.logotypes = this.svcLogo.logotypes;
    for (let i = 0; i < this.logotypes.length; i++) {
      if (this.carCurrent.name === this.logotypes[i].name){
        this.logo = this.logotypes[i].image.source;
      }
    }

    const completeCar = {
      name: this.carCurrent.name,
      model: this.currentModel.name,
      logo: this.logo,
      gear: this.currentGear.name,
      motor: this.motor,
      acceleration: this.acceleration,
      horsePower: this.horsePower
    };

    let car1 = JSON.parse(localStorage.getItem('car1'));
    let car2 = JSON.parse(localStorage.getItem('car2'));

    if (!car1) {
      car1 = [];
      this.car1 = car1;
      this.car1.push(completeCar);
      localStorage.setItem('car1', JSON.stringify(car1));
      this.router.navigate(['/main', this.user.email, this.user.password]);
    } else {
      car2 = [];
      this.car2 = car2;
      this.car2.push(completeCar);
      localStorage.setItem('car2', JSON.stringify(car2));
      console.log(completeCar);
      this.router.navigate(['/compare-cars']);
    }
  }

  public likeCar(model): void {
    this.model.forEach((curModel) => {
      if (curModel.value === model.value) {
        this.currentModel = curModel;
      }
    });
    const likeCarUser = {
      mark: this.carCurrent.name,
      model: this.currentModel,
      logo: '',
      info: () => {
        console.log('Mark: ' + this.mark, 'Model: ' + this.model);
      }
    };

    this.users.forEach((user) => {
      if (user.email === this.user.email && user.password === this.user.password) {
        this.user = user;
        this.user.likeCars.push(likeCarUser);
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    });
    console.log(this.user.likeCars);
    this.getGearBoxes();
  }

  public overflowAuto(): void{
    document.body.style.overflow = 'auto';
  }

  public overflowHidden(): void{
    document.body.style.overflow = 'hidden';
  }

  public navigateTo(path): void {
    localStorage.removeItem('car');
    localStorage.removeItem('car1');
    localStorage.removeItem('car2');
    this.router.navigate([`${path}`, this.user.email, this.user.password]);
  }

  public getIp(): void{
    this.http.get(`https://api.ip2loc.com/yPw3PKm7dXHwf8j2J6H5JJmGzVP1csPz`).subscribe((dataIp) => {
      console.log(dataIp);
      this.ip = dataIp;
    });
  }

  public products = [
    {
      id: 1,
      imgUrl: "",
      imgBase64Data: ""
    },
  ];

  public onFileUpdate(event, index): void{
    this.imgIcon = true;
    const files = event.target.files;
    if (files.length === 0) return;

    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = event => {
      this.products[index].imgBase64Data = reader.result as string;
      this.img = this.products;
      console.log(this.img);
    };
  }

  public playGame(): void{
    const carTest1 = localStorage.getItem('car1');
    const carTest2 = localStorage.getItem('car2');
    localStorage.setItem('carTest1' , carTest1);
    localStorage.setItem('carTest2' , carTest2);
    this.router.navigate(['/game' , `${JSON.stringify(this.car1)}` , `${JSON.stringify(this.car2)}`]);
  }
}
