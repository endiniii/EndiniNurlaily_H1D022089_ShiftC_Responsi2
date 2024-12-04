import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; // Tambahkan properti ini

  constructor(private auth: AngularFireAuth) {}

  async register() {
    // Periksa apakah password dan confirmPassword cocok
    if (this.password !== this.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok!');
      return;
    }

    try {
      // Menggunakan method createUserWithEmailAndPassword dari AngularFireAuth untuk registrasi
      const userCredential = await this.auth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('User registered successfully:', userCredential.user);
      alert('Registrasi berhasil!');
    } catch (error: any) {
      // Menangani error yang terjadi saat registrasi
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Error: Email sudah digunakan.');
          break;
        case 'auth/invalid-email':
          alert('Error: Email tidak valid.');
          break;
        case 'auth/weak-password':
          alert('Error: Password harus memiliki setidaknya 6 karakter.');
          break;
        default:
          alert('Error: ' + error.message);
      }
      console.error('Error during registration:', error);
    }
  }
}
