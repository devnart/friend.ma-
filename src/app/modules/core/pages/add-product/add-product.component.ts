import { BooleanInput } from '@angular/cdk/coercion';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DemandService } from 'src/app/modules/demand/services/demand.service';
import { OfferService } from 'src/app/modules/offer/services/offer.service';
import { cities } from 'src/CITIES';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addForm: FormGroup;
  cities = cities.map((city) => {
    return {
      name: city.ville,
    };
  });
  roomType = ['Shared', 'Private'];
  imageSrc: string[] = [];
  dateDisabled: boolean = false;
  isDemand : boolean = false;
  today = new Date(); 
  isLoading: boolean = false;
  
  constructor(private offerService: OfferService,private demandService:DemandService, private router:Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('',[Validators.required, Validators.maxLength(255)]),
      city: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      budget: new FormControl(Number),
      price: new FormControl(Number, [Validators.required]),
      places: new FormControl([Validators.required]),
      rooms: new FormControl(Number, [Validators.required]),
      roomType: new FormControl('', [Validators.required]),
      availability: new FormControl(false, [Validators.required]),
      availableFrom: new FormControl({ value: '', disabled: this.dateDisabled }, [Validators.required,]),
      images: new FormControl([], [Validators.required]),
    });
  }

  onSubmit(form: FormGroup) {

    if (form.value.availableFrom) {
      form.patchValue({ availableFrom: formatDate(form.value.availableFrom, 'yyyy-MM-dd', 'en') });
      form.get('availableFrom')?.updateValueAndValidity();
    }

    form.patchValue({ roomType: form.value.roomType.toUpperCase() });
    form.get('roomType')?.updateValueAndValidity();
    // form.get("roomType")?.value.toUpperCase();

    const formData = new FormData;
    const values = form.value;

    Object.keys(values).forEach(key => {
      if (key !== 'images') {
      formData.append(key, values[key]);
      } else {
        values[key].forEach((image:File) => {
          formData.append(key, image);
        })
    }}
    );

    formData.append('userId', localStorage.getItem('userId')!);
    if (form.value.type == 'offer' && form.valid) {
      this.offerService.createOffer(formData).subscribe(
        (res) => { 
          this.router.navigate(['offer/' + res.id]);
        }
      )
    }

    if (form.value.type == 'demand') {
        this.demandService.createDemand(form.value).subscribe(
          (res) => {
            this.router.navigate(['demand/' + res.id]);
          }
        )
    }

  }

  handleSelectedCity(city: String) {
    this.addForm.get('city')?.setValue(city);
  }

  handleSelectedType(type: String) {
    this.addForm.get('roomType')?.setValue(type);
  }

  checkAvailability(event: MatCheckboxChange) {
    event.checked ? this.addForm.get('availableFrom')?.disable() : this.addForm.get('availableFrom')?.enable();
  }

  async readURL(event: Event) {
    this.imageSrc = [];
    this.addForm.value.images = [];

    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length <= 3) {
      const readFileAsync: any = (file: any) => new Promise(resolve => {

        this.addForm.patchValue({ images: [...this.addForm.value.images, file] });
        this.addForm.get('images')?.updateValueAndValidity();

        const reader = new FileReader();
        reader.onload = evt => resolve(evt.target?.result);
        reader.readAsDataURL(file);
      })

      for (let index = 0; index < target.files.length; index++) {
        this.imageSrc.push(await readFileAsync(target.files[index]));
      }
    } else {
      alert('You can only upload 3 images');
    }
  }

  toggleIsDemand(type:boolean) {

    this.isDemand = type;
    console.log(this.isDemand);
    if(type) {
      this.addForm.controls['places'].setValidators(null);
      this.addForm.controls['rooms'].setValidators(null);
      this.addForm.controls['images'].setValidators(null);

      this.addForm.controls['places'].updateValueAndValidity();
      this.addForm.controls['rooms'].updateValueAndValidity();
      this.addForm.controls['images'].updateValueAndValidity();
    }
  }


}
