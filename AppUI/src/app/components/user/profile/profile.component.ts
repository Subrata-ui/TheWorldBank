import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  imageFile: any;
  url: any = "/assets/images/profile.jpg";
  constructor(
    private dtr: ChangeDetectorRef,
    public snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this.snackBar.open("Data update successful!", "Dismiss", {
      duration: 5000,
      verticalPosition: 'top'
    });
  }
  handleFileInput(event: any) {

    if (event.target.files && event.target.files[0]) {

      this.imageFile = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        this.url = reader.result;
        this.dtr.detectChanges();

      };
    }
  }
}
