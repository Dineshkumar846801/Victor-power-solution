import { Component, OnInit } from '@angular/core';
import { Attribute } from 'src/app/models/Attribute';
import { AttributeService } from 'src/app/services/attribute.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-attribute-master',
  templateUrl: './attribute-master.component.html',
  styleUrls: ['./attribute-master.component.css'],
})
export class AttributeMasterComponent implements OnInit {
  constructor(private service: AttributeService) {}

  attributes: Attribute[] = [];
  attribute: Attribute | null = null;

  isCommonNameDisbaled: boolean = true;

  formValue: any = {
    commonName: '',
  };

  ngOnInit(): void {
    this.getAllAtributes();
  }

  commonNameCheckBoxChangeHandler(e: any) {
    // console.log(e.target.checked);
    this.isCommonNameDisbaled = !e.target.checked;
    //e.target.checked
  }

  displayNameChangeHandler(e: any) {
    this.formValue.commonName = e.target.value.toUpperCase();
  }

  //api calls

  getAllAtributes() {
    this.service.fetch().subscribe({
      next: (attributes) => {
        this.attributes = attributes;
        // console.log('attributes', response);
      },
    });
  }

  getAttributeInfo(attribute: Attribute) {
    this.service.fetchById(attribute.id).subscribe({
      next: (attribute) => {
        this.attribute = attribute;
      },
    });
  }
}
