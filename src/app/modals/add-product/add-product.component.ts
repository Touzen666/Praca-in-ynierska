import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';


import { Produkt } from 'src/app/models/produkt';
import { FormBuilder, Validators } from '@angular/forms';
// import { ProductDetaleComponent } from '../product-detale/product-detale.component';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  // providers: [ProductDetaleComponent]
})
export class AddProductComponent implements OnInit {
  public title = 'Dodawanie Produktu';

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public photo: string;

  public product: Produkt;
  public hasNotClicked: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    public fb: FormBuilder,
    private storage: AngularFireStorage,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  addProductForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern('[a-z," ",A-ĄąĆćĘęŁłŃńÓóŚśŹźŻż]*')])],
    units: ['', Validators.required],
    weight: ['', Validators.compose([Validators.required, Validators.pattern('[1-9]|10')])],
    calories: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    carbohydrates: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    proteines: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
    fat: ['', Validators.compose([Validators.pattern('[1-9]|10'), Validators.required])],
  })

  get name() { return this.addProductForm.get('name') }
  get units() { return this.addProductForm.get('units') }
  get weight() { return this.addProductForm.get('weight') }
  get calories() { return this.addProductForm.get('calories') }
  get carbohydrates() { return this.addProductForm.get('carbohydrates') }
  get proteines() { return this.addProductForm.get('proteines') }
  get fat() { return this.addProductForm.get('fat') }
  checkboxClicked() {
    this.hasNotClicked = false
  }

  async submited() {
    // console.log(this.addProductForm.valid);
    this.product = this.addProductForm.value

    if (this.addProductForm.invalid) {
      Object.keys(this.addProductForm.controls).forEach(field => {
        const control = this.addProductForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    };
    // console.log(this.addProductForm.value);
    if (this.photo) {
      const photopath = uuidv4() + ".png";
      const reference = this.storage.ref(photopath);
      const b64photo = this.photo.replace('data:image/png;base64,', '');
      console.log('b64photo', b64photo);
      const task = reference.putString(b64photo, 'base64');
      task.then(snapshot => {
        reference.getDownloadURL().toPromise().then(url => {
          console.log(url);
          this.dialogRef.close({
            ...this.product,
            img: url,
          } as Produkt);
        })
      })
    } else {
      this.dialogRef.close(this.product);
    }
  }
  ngOnInit() {

  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    this.video.nativeElement.setAttribute('style', 'display: none;');
    this.canvas.nativeElement.setAttribute('style', 'display: block;');
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.photo = this.canvas.nativeElement.toDataURL("image/png")
  }

  isFieldValid(fieldName: string) {
    const field = this.addProductForm.get(fieldName)
    return field.invalid && (field.dirty || field.touched)
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
